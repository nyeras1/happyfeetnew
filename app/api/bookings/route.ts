import { NextResponse } from "next/server"
import { randomInt } from "crypto"

import { getMysqlPool } from "@/lib/mysql"

export const runtime = "nodejs"

function isValidEmail(email: string) {
  if (email.length > 254) return false
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) return false
  if (email.includes("..")) return false

  const [local, domain] = email.split("@")
  if (!local || !domain) return false

  const blockedDomains = new Set([
    "gmail.co",
    "gmai.com",
    "gmial.com",
    "gamil.com",
    "gmail.con",
    "gmail.comm",
    "gmail.cpm",
    "gmail.cim",
  ])
  if (blockedDomains.has(domain.toLowerCase())) return false

  return true
}

function generateBookingReference() {
  const now = new Date()
  const yyyy = String(now.getFullYear())
  const mm = String(now.getMonth() + 1).padStart(2, "0")
  const dd = String(now.getDate()).padStart(2, "0")
  const rand = String(randomInt(0, 10000)).padStart(4, "0")
  return `HF-${yyyy}${mm}${dd}-${rand}`
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as any

  const fullName = typeof body?.fullName === "string" ? body.fullName.trim() : ""
  const emailRaw = typeof body?.email === "string" ? body.email.trim().toLowerCase() : ""
  const phone = typeof body?.phone === "string" ? body.phone.trim() : ""
  const destination = typeof body?.destination === "string" ? body.destination.trim() : ""
  const travelStyle = typeof body?.travelStyle === "string" ? body.travelStyle.trim() : ""

  const adults = Number(body?.travellers?.adults ?? body?.adults ?? 0)
  const children = Number(body?.travellers?.children ?? body?.children ?? 0)
  const infants = Number(body?.travellers?.infants ?? body?.infants ?? 0)

  const preferredStartDate = typeof body?.travelDates?.startDate === "string" ? body.travelDates.startDate : ""
  const preferredEndDate = typeof body?.travelDates?.endDate === "string" ? body.travelDates.endDate : ""

  const hotelPreference = typeof body?.preferences?.hotelPreference === "string" ? body.preferences.hotelPreference : ""
  const mealPlan = typeof body?.preferences?.mealPlan === "string" ? body.preferences.mealPlan : ""
  const transportRequired = Boolean(body?.preferences?.transportRequired)
  const flightRequired = Boolean(body?.preferences?.flightRequired)

  const notes = typeof body?.notes === "string" ? body.notes.trim() : ""

  if (!fullName) {
    return NextResponse.json({ ok: false, code: "INVALID_NAME", message: "Please enter your full name." }, { status: 400 })
  }

  if (!isValidEmail(emailRaw)) {
    return NextResponse.json(
      { ok: false, code: "INVALID_EMAIL", message: "Please enter a valid email address." },
      { status: 400 },
    )
  }

  if (!phone) {
    return NextResponse.json({ ok: false, code: "INVALID_PHONE", message: "Please enter your phone number." }, { status: 400 })
  }

  if (!destination) {
    return NextResponse.json(
      { ok: false, code: "INVALID_DESTINATION", message: "Please choose a destination." },
      { status: 400 },
    )
  }

  const safeAdults = Number.isFinite(adults) ? Math.max(1, Math.min(12, Math.floor(adults))) : 1
  const safeChildren = Number.isFinite(children) ? Math.max(0, Math.min(12, Math.floor(children))) : 0
  const safeInfants = Number.isFinite(infants) ? Math.max(0, Math.min(12, Math.floor(infants))) : 0

  let pool: ReturnType<typeof getMysqlPool>
  try {
    pool = getMysqlPool()
  } catch (err) {
    console.error("[bookings] pool init error", err)
    return NextResponse.json(
      { ok: false, code: "ENV_MISSING", message: "Server is not configured. Please try again later." },
      { status: 500 },
    )
  }

  const bookingReference = generateBookingReference()

  let customerId: number | null = null

  try {
    // 1) Ensure a customer record exists (create if missing)
    const [existingCustomerRows] = await pool.execute(
      `SELECT customer_id FROM customers WHERE email = ? LIMIT 1`,
      [emailRaw]
    )
    const existing = (existingCustomerRows as any[])[0] as { customer_id: number } | undefined

    if (existing) {
      customerId = existing.customer_id
    } else {
      const [insertResult] = await pool.execute(
        `INSERT INTO customers (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)`,
        [fullName, "", emailRaw, phone]
      )
      customerId = (insertResult as any).insertId
    }

    // 2) Insert booking with the customer_id
    const insertColumns = [
      "booking_reference",
      "full_name",
      "email",
      "phone",
      "destination",
      "travel_type",
      "adults",
      "children",
      "infants",
      "customer_id",
      "preferred_start_date",
      "preferred_end_date",
      "hotel_preference",
      "meal_plan",
      "transport_required",
      "flight_required",
      "notes",
      "booking_source",
      "enquiry_status",
    ]
    const insertValues = [
      bookingReference,
      fullName,
      emailRaw,
      phone,
      destination,
      travelStyle || null,
      safeAdults,
      safeChildren,
      safeInfants,
      customerId,
      preferredStartDate || null,
      preferredEndDate || null,
      hotelPreference || null,
      mealPlan || null,
      transportRequired ? 1 : 0,
      flightRequired ? 1 : 0,
      notes || null,
      "website",
      "new",
    ]
    const sql = `INSERT INTO bookings (${insertColumns.join(", ")}) VALUES (${insertValues.map(() => "?").join(", ")})`
    console.log("[bookings] SQL", sql)
    console.log("[bookings] values", insertValues)
    await pool.execute(sql, insertValues)

    return NextResponse.json({
      ok: true,
      code: "BOOKED",
      bookingReference,
      message: "Your journey has begun.",
    })
  } catch (err: any) {
    console.error("[bookings] db error", {
      code: err?.code,
      errno: err?.errno,
      sqlState: err?.sqlState,
      message: err?.message,
      stack: err?.stack,
    })

    if (err?.code === "ER_BAD_FIELD_ERROR") {
      return NextResponse.json(
        { ok: false, code: "COLUMN_MISSING", message: "Server configuration error. Please contact support." },
        { status: 500 },
      )
    }

    if (err?.code === "ER_NO_REFERENCED_ROW_2") {
      return NextResponse.json(
        { ok: false, code: "FK_MISSING", message: "Server configuration error. Please contact support." },
        { status: 500 },
      )
    }

    if (err?.code === "ER_DUP_ENTRY") {
      return NextResponse.json(
        { ok: false, code: "DUPLICATE", message: "A booking with these details already exists." },
        { status: 409 },
      )
    }

    if (err?.code === "ER_NO_SUCH_TABLE") {
      return NextResponse.json(
        { ok: false, code: "TABLE_MISSING", message: "Server configuration error. Please contact support." },
        { status: 500 },
      )
    }

    if (err?.code === "ER_ACCESS_DENIED_ERROR") {
      return NextResponse.json(
        { ok: false, code: "DB_AUTH", message: "Server configuration error. Please contact support." },
        { status: 500 },
      )
    }

    if (err?.code === "ETIMEDOUT" || err?.code === "ECONNREFUSED" || err?.code === "ENOTFOUND") {
      return NextResponse.json(
        { ok: false, code: "DB_CONNECT", message: "Unable to reach database. Please try again later." },
        { status: 500 },
      )
    }

    // Fallback: expose the real error in dev only
    const isDev = process.env.NODE_ENV !== "production"
    return NextResponse.json(
      {
        ok: false,
        code: "DB_ERROR",
        message: isDev ? (err?.message || "Unknown DB error") : "Something went wrong, please try again",
        ...(isDev && { debug: { code: err?.code, errno: err?.errno, sqlState: err?.sqlState, sql: err?.sql } }),
      },
      { status: 500 },
    )
  }
}
