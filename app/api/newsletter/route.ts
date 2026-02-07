import { NextResponse } from "next/server"
import { getMysqlPool } from "@/lib/mysql"

export const runtime = "nodejs"

function isValidEmail(email: string) {
  // Pragmatic validation: reject common bad inputs without trying to fully implement RFC 5322
  if (email.length > 254) return false
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) return false
  if (email.includes("..")) return false

  const [local, domain] = email.split("@")
  if (!local || !domain) return false
  if (local.startsWith(".") || local.endsWith(".")) return false
  if (domain.startsWith("-") || domain.endsWith("-")) return false
  if (domain.startsWith(".") || domain.endsWith(".")) return false
  if (!domain.includes(".")) return false

  const domainLower = domain.toLowerCase()
  // Block common Gmail typo domains. (If you want, we can expand this list later.)
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
  if (blockedDomains.has(domainLower)) return false

  return true
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as
    | { email?: unknown; source?: unknown }
    | null

  const rawEmail = typeof body?.email === "string" ? body.email : ""
  const email = rawEmail.trim().toLowerCase()

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, code: "INVALID_EMAIL", message: "Please enter a valid email address." },
      { status: 400 },
    )
  }

  let pool: ReturnType<typeof getMysqlPool>
  try {
    pool = getMysqlPool()
  } catch (err) {
    console.error("[newsletter] pool init error", err)
    return NextResponse.json(
      {
        ok: false,
        code: "ENV_MISSING",
        message: "Server is not configured. Please try again later.",
      },
      { status: 500 },
    )
  }

  try {
    await pool.execute(
      "INSERT INTO newsletter_subscribers (email, source, status) VALUES (?, ?, ?)",
      [email, "website_subscribe", "active"],
    )

    return NextResponse.json({ ok: true, code: "SUBSCRIBED", message: "Thanks for subscribing!" })
  } catch (err: any) {
    console.error("[newsletter] db error", {
      code: err?.code,
      errno: err?.errno,
      sqlState: err?.sqlState,
      message: err?.message,
    })

    // Duplicate email (unique constraint)
    if (err?.code === "ER_DUP_ENTRY") {
      return NextResponse.json(
        { ok: true, code: "DUPLICATE", message: "You’re already subscribed" },
        { status: 200 },
      )
    }

    // Table missing / wrong DB
    if (err?.code === "ER_NO_SUCH_TABLE") {
      return NextResponse.json(
        {
          ok: false,
          code: "TABLE_MISSING",
          message: "Server configuration error. Please contact support.",
        },
        { status: 500 },
      )
    }

    // Auth error
    if (err?.code === "ER_ACCESS_DENIED_ERROR") {
      return NextResponse.json(
        {
          ok: false,
          code: "DB_AUTH",
          message: "Server configuration error. Please contact support.",
        },
        { status: 500 },
      )
    }

    // Network / connection errors (common with remote DB)
    if (err?.code === "ETIMEDOUT" || err?.code === "ECONNREFUSED" || err?.code === "ENOTFOUND") {
      return NextResponse.json(
        {
          ok: false,
          code: "DB_CONNECT",
          message: "Unable to reach database. Please try again later.",
        },
        { status: 500 },
      )
    }

    return NextResponse.json(
      { ok: false, code: "DB_ERROR", message: "Something went wrong, please try again" },
      { status: 500 },
    )
  }
}
