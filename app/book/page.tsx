"use client"

import { useMemo, useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Globe2,
  Hotel,
  Mail,
  MapPin,
  Phone,
  Plane,
  Sparkles,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type TravelStyle = "honeymoon" | "family" | "friends" | "solo" | "corporate"

type BookingDraft = {
  fullName: string
  email: string
  phone: string
  destination: string
  travelStyle: TravelStyle | ""
  adults: number
  children: number
  infants: number
  startDate: string
  endDate: string
  hotelPreference: "3" | "4" | "5" | "luxury" | "any" | ""
  mealPlan: "cp" | "map" | "ap" | "any" | ""
  transportRequired: boolean
  flightRequired: boolean
  notes: string
}

type ApiResponse =
  | { ok: true; code: "BOOKED"; bookingReference: string; message: string }
  | { ok: false; code: string; message: string }

function isValidEmail(email: string) {
  if (email.length > 254) return false
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) return false
  if (email.includes("..")) return false
  const [, domain] = email.split("@")
  if (!domain) return false
  const blockedDomains = new Set(["gmail.co", "gmai.com", "gmial.com", "gamil.com", "gmail.con", "gmail.comm", "gmail.cpm", "gmail.cim"])
  if (blockedDomains.has(domain.toLowerCase())) return false
  return true
}

function clampInt(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value))
}

const destinations = [
  { key: "maldives", title: "Maldives", subtitle: "Overwater serenity", accent: "from-cyan-400/30 via-sky-500/20 to-blue-600/25" },
  { key: "europe", title: "Europe", subtitle: "Old-world romance", accent: "from-amber-300/25 via-orange-500/20 to-rose-500/25" },
  { key: "dubai", title: "Dubai", subtitle: "Gold & skyline", accent: "from-yellow-300/25 via-amber-500/20 to-orange-600/25" },
  { key: "bali", title: "Bali", subtitle: "Island soul", accent: "from-emerald-400/25 via-teal-500/20 to-cyan-500/25" },
]

const styles: Array<{ key: TravelStyle; title: string; subtitle: string }> = [
  { key: "honeymoon", title: "Honeymoon", subtitle: "Intimate, cinematic escapes" },
  { key: "family", title: "Family", subtitle: "Comfort-first togetherness" },
  { key: "friends", title: "Friends", subtitle: "Shared adventures" },
  { key: "solo", title: "Solo", subtitle: "Curated, mindful journeys" },
  { key: "corporate", title: "Corporate", subtitle: "Seamless work + unwind" },
]

export default function BookPage() {
  const prefersReducedMotion = useReducedMotion()

  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [success, setSuccess] = useState<{ bookingReference: string } | null>(null)

  const [draft, setDraft] = useState<BookingDraft>({
    fullName: "",
    email: "",
    phone: "",
    destination: "",
    travelStyle: "",
    adults: 2,
    children: 0,
    infants: 0,
    startDate: "",
    endDate: "",
    hotelPreference: "luxury",
    mealPlan: "any",
    transportRequired: true,
    flightRequired: false,
    notes: "",
  })

  const totalSteps = 7

  const progress = useMemo(() => {
    return clampInt(Math.round((step / totalSteps) * 100), 1, 100)
  }, [step])

  const canGoBack = step > 1 && !isSubmitting && !success
  const canGoNext = step < totalSteps && !isSubmitting && !success

  const nextLabel = step === totalSteps ? "Start My Journey" : "Next"

  const validateStep = () => {
    if (step === 1) {
      if (!draft.fullName.trim()) return "Please enter your full name."
      if (!isValidEmail(draft.email.trim().toLowerCase())) return "Please enter a valid email address."
      if (!draft.phone.trim()) return "Please enter your phone number."
    }
    if (step === 2) {
      if (!draft.destination.trim()) return "Please choose a destination."
    }
    if (step === 3) {
      if (!draft.travelStyle) return "Please choose how you are travelling."
    }
    if (step === 5) {
      if (!draft.startDate) return "Please select a start date."
      if (!draft.endDate) return "Please select an end date."
      if (draft.startDate && draft.endDate && draft.endDate < draft.startDate) return "End date must be after start date."
    }
    return null
  }

  const goNext = async () => {
    setSubmitError(null)

    if (step < totalSteps) {
      const err = validateStep()
      if (err) {
        setSubmitError(err)
        return
      }
      setStep((s) => s + 1)
      return
    }

    const err = validateStep()
    if (err) {
      setSubmitError(err)
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: draft.fullName.trim(),
          email: draft.email.trim().toLowerCase(),
          phone: draft.phone.trim(),
          destination: draft.destination.trim(),
          travelStyle: draft.travelStyle,
          travellers: { adults: draft.adults, children: draft.children, infants: draft.infants },
          travelDates: { startDate: draft.startDate, endDate: draft.endDate },
          preferences: {
            hotelPreference: draft.hotelPreference,
            mealPlan: draft.mealPlan,
            transportRequired: draft.transportRequired,
            flightRequired: draft.flightRequired,
          },
          notes: draft.notes.trim(),
        }),
      })

      const data = (await res.json().catch(() => null)) as ApiResponse | null

      if (!res.ok || !data || (data as any).ok !== true) {
        setSubmitError((data as any)?.message || "Something went wrong. Please try again.")
        return
      }

      setSuccess({ bookingReference: (data as any).bookingReference })
    } catch {
      setSubmitError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const goBack = () => {
    if (!canGoBack) return
    setSubmitError(null)
    setStep((s) => Math.max(1, s - 1))
  }

  const panelMotion = prefersReducedMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, y: 12, filter: "blur(8px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
        exit: { opacity: 0, y: -10, filter: "blur(10px)" },
      }

  return (
    <div className="min-h-screen bg-[#06070A] text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,217,61,0.16),transparent_60%)] blur-2xl" />
          <div className="absolute -bottom-64 -right-32 h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,107,53,0.14),transparent_60%)] blur-2xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.08),transparent_55%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/45 to-black/80" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-3 sm:px-4 pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-36 md:px-8 lg:pt-40 lg:pb-16">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-4 lg:gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-xl">
                <Sparkles className="h-4 w-4 text-[#FFD93D]" />
                <span className="text-xs font-black tracking-[0.28em] text-white/90 uppercase">Book Your World</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold tracking-tight leading-[0.95]">
                Your world journey
                <span className="text-[#FFD93D]"> begins</span> here.
              </h1>
              <p className="max-w-2xl text-sm sm:text-base text-white/75 leading-relaxed">
                A concierge-first booking experience — crafted to feel effortless, premium.
              </p>
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Button asChild variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white hover:text-black">
                <Link href="/destinations">Explore Destinations</Link>
              </Button>
              <Button onClick={() => window.open('tel:+919742997421')} className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
                Talk to an Expert
              </Button>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-4 order-2 lg:order-1 mb-4 lg:mb-0">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.55)] overflow-hidden">
                <div className="p-3 sm:p-4 lg:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-2xl bg-white/8 border border-white/10 flex items-center justify-center">
                        <Globe2 className="h-4 w-4 sm:h-5 sm:w-5 text-white/90" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-white/90">Journey Progress</p>
                        <p className="text-xs text-white/60">Step {success ? totalSteps : step} of {totalSteps}</p>
                      </div>
                    </div>
                    <p className="text-xs font-black tracking-[0.22em] text-[#FFD93D] uppercase">{progress}%</p>
                  </div>

                  <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#FF6B35] via-[#FFD93D] to-[#FF6B35]" style={{ width: `${progress}%` }} />
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-2 text-xs sm:text-sm">
                    <div className={cn("flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl px-2 py-2 sm:px-4 sm:py-3 border", (step === 1 && !success) ? "border-white/18 bg-white/8" : "border-white/10 bg-white/5")}>
                      <Users className="h-4 w-4 text-white/80" />
                      <span className="text-xs sm:text-sm text-white/80">Welcome</span>
                    </div>
                    <div className={cn("flex items-center gap-3 rounded-2xl px-4 py-3 border", (step === 2 && !success) ? "border-white/18 bg-white/8" : "border-white/10 bg-white/5")}>
                      <MapPin className="h-4 w-4 text-white/80" />
                      <span className="text-white/80">Destination</span>
                    </div>
                    <div className={cn("flex items-center gap-3 rounded-2xl px-4 py-3 border", (step === 3 && !success) ? "border-white/18 bg-white/8" : "border-white/10 bg-white/5")}>
                      <Sparkles className="h-4 w-4 text-white/80" />
                      <span className="text-white/80">Travel Style</span>
                    </div>
                    <div className={cn("flex items-center gap-3 rounded-2xl px-4 py-3 border", (step === 4 && !success) ? "border-white/18 bg-white/8" : "border-white/10 bg-white/5")}>
                      <Users className="h-4 w-4 text-white/80" />
                      <span className="text-white/80">Travellers</span>
                    </div>
                    <div className={cn("flex items-center gap-3 rounded-2xl px-4 py-3 border", (step === 5 && !success) ? "border-white/18 bg-white/8" : "border-white/10 bg-white/5")}>
                      <Plane className="h-4 w-4 text-white/80" />
                      <span className="text-white/80">Dates</span>
                    </div>
                    <div className={cn("flex items-center gap-3 rounded-2xl px-4 py-3 border", (step === 6 && !success) ? "border-white/18 bg-white/8" : "border-white/10 bg-white/5")}>
                      <Hotel className="h-4 w-4 text-white/80" />
                      <span className="text-white/80">Preferences</span>
                    </div>
                    <div className={cn("flex items-center gap-3 rounded-2xl px-4 py-3 border", (step === 7 && !success) ? "border-white/18 bg-white/8" : "border-white/10 bg-white/5")}>
                      <Mail className="h-4 w-4 text-white/80" />
                      <span className="text-white/80">Final Touch</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 order-1 lg:order-2 mb-4 lg:mb-0">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.55)] overflow-hidden">
                <div className="p-3 sm:p-4 md:p-6 lg:p-8">
                  <AnimatePresence mode="wait">
                    {success ? (
                      <motion.div key="success" {...panelMotion} transition={{ duration: prefersReducedMotion ? 0.2 : 0.45, ease: "easeOut" }} className="space-y-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-xl">
                          <Check className="h-4 w-4 text-[#34D399]" />
                          <span className="text-xs font-black tracking-[0.28em] text-white/90 uppercase">Journey Started</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">Your journey has begun.</h2>
                        <p className="text-white/75 leading-relaxed">
                          Our travel experts will contact you shortly with a curated itinerary. Save your reference for peace of mind.
                        </p>

                        <div className="rounded-2xl border border-white/12 bg-black/30 px-6 py-5">
                          <p className="text-xs font-black tracking-[0.28em] text-white/60 uppercase">Booking Reference</p>
                          <p className="mt-2 text-2xl font-black tracking-tight text-[#FFD93D]">{success.bookingReference}</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                          <Button asChild className="h-12 rounded-2xl bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-black uppercase tracking-[0.14em]">
                            <Link href="/contact">Talk to a Travel Expert</Link>
                          </Button>
                          <Button asChild variant="outline" className="h-12 rounded-2xl border-white/20 bg-transparent text-white hover:bg-white hover:text-black font-black uppercase tracking-[0.14em]">
                            <Link href="/destinations">Explore Destinations</Link>
                          </Button>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div key={step} {...panelMotion} transition={{ duration: prefersReducedMotion ? 0.2 : 0.45, ease: "easeOut" }} className="space-y-8">
                        {step === 1 ? (
                          <div className="space-y-6">
                            <div>
                              <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">Let’s get to know you</h2>
                              <p className="mt-2 text-white/70">A warm welcome — we’ll keep it effortless.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                              <div className="space-y-2">
                                <label className="text-xs sm:text-sm text-white/75">Full Name</label>
                                <Input
                                  value={draft.fullName}
                                  onChange={(e) => setDraft((d) => ({ ...d, fullName: e.target.value }))}
                                  placeholder="Your full name"
                                  className="h-11 sm:h-12 rounded-xl sm:rounded-2xl bg-black/30 border-white/15 text-white placeholder:text-white/35 focus-visible:ring-[#FFD93D]/40"
                                />
                              </div>

                              <div className="space-y-2">
                                <label className="text-xs sm:text-sm text-white/75">Phone</label>
                                <Input
                                  value={draft.phone}
                                  onChange={(e) => setDraft((d) => ({ ...d, phone: e.target.value }))}
                                  placeholder="+91 98765 43210"
                                  className="h-11 sm:h-12 rounded-xl sm:rounded-2xl bg-black/30 border-white/15 text-white placeholder:text-white/35 focus-visible:ring-[#FFD93D]/40"
                                />
                              </div>

                              <div className="space-y-2 sm:col-span-2">
                                <label className="text-xs sm:text-sm text-white/75">Email</label>
                                <Input
                                  type="email"
                                  value={draft.email}
                                  onChange={(e) => setDraft((d) => ({ ...d, email: e.target.value }))}
                                  placeholder="you@example.com"
                                  className="h-11 sm:h-12 rounded-xl sm:rounded-2xl bg-black/30 border-white/15 text-white placeholder:text-white/35 focus-visible:ring-[#FFD93D]/40"
                                />
                              </div>
                            </div>
                          </div>
                        ) : null}

                        {step === 2 ? (
                          <div className="space-y-6">
                            <div>
                              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-tight">Where does your heart want to go?</h2>
                              <p className="mt-2 text-white/70">Choose a dream — we’ll craft the details.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {destinations.map((d) => {
                                const selected = draft.destination.toLowerCase() === d.title.toLowerCase()
                                return (
                                  <button
                                    key={d.key}
                                    type="button"
                                    onClick={() => setDraft((x) => ({ ...x, destination: d.title }))}
                                    className={cn(
                                      "text-left rounded-3xl border overflow-hidden transition-all duration-400",
                                      "bg-black/25 hover:bg-black/35",
                                      selected ? "border-[#FFD93D]/50 shadow-[0_0_0_1px_rgba(255,217,61,0.25),0_18px_55px_rgba(0,0,0,0.5)]" : "border-white/12",
                                    )}
                                  >
                                    <div className={cn("p-6", `bg-gradient-to-br ${d.accent}`)}>
                                      <p className="text-xl font-black tracking-tight">{d.title}</p>
                                      <p className="mt-1 text-sm text-white/70">{d.subtitle}</p>
                                    </div>
                                    <div className="px-6 py-4 flex items-center justify-between">
                                      <span className="text-xs font-black tracking-[0.22em] text-white/60 uppercase">Select</span>
                                      {selected ? (
                                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#FFD93D]">
                                          <Check className="h-4 w-4" /> Chosen
                                        </span>
                                      ) : (
                                        <span className="text-sm text-white/60">Tap</span>
                                      )}
                                    </div>
                                  </button>
                                )
                              })}
                            </div>

                            <div className="space-y-2">
                              <label className="text-sm text-white/75">Custom destination</label>
                              <Input
                                value={draft.destination}
                                onChange={(e) => setDraft((d) => ({ ...d, destination: e.target.value }))}
                                placeholder="Type any destination"
                                className="h-11 sm:h-12 rounded-xl sm:rounded-2xl bg-black/30 border-white/15 text-white placeholder:text-white/35 focus-visible:ring-[#FFD93D]/40"
                              />
                            </div>
                          </div>
                        ) : null}

                        {step === 3 ? (
                          <div className="space-y-6">
                            <div>
                              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-tight">How are you travelling?</h2>
                              <p className="mt-2 text-white/70">Pick the vibe — we’ll match experiences.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {styles.map((s) => {
                                const selected = draft.travelStyle === s.key
                                return (
                                  <button
                                    key={s.key}
                                    type="button"
                                    onClick={() => setDraft((d) => ({ ...d, travelStyle: s.key }))}
                                    className={cn(
                                      "text-left rounded-3xl border px-6 py-5 transition-all duration-400",
                                      "bg-black/25 hover:bg-black/35",
                                      selected ? "border-[#FFD93D]/50 shadow-[0_0_0_1px_rgba(255,217,61,0.22),0_18px_55px_rgba(0,0,0,0.5)]" : "border-white/12",
                                    )}
                                  >
                                    <p className="text-lg font-black tracking-tight">{s.title}</p>
                                    <p className="mt-1 text-sm text-white/70">{s.subtitle}</p>
                                  </button>
                                )
                              })}
                            </div>
                          </div>
                        ) : null}

                        {step === 4 ? (
                          <div className="space-y-6">
                            <div>
                              <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">Who’s coming along?</h2>
                              <p className="mt-2 text-white/70">A few taps, then the magic.</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                              <StepperCard
                                title="Adults"
                                value={draft.adults}
                                onChange={(v) => setDraft((d) => ({ ...d, adults: clampInt(v, 1, 12) }))}
                                min={1}
                              />
                              <StepperCard
                                title="Children"
                                value={draft.children}
                                onChange={(v) => setDraft((d) => ({ ...d, children: clampInt(v, 0, 12) }))}
                                min={0}
                              />
                              <StepperCard
                                title="Infants"
                                value={draft.infants}
                                onChange={(v) => setDraft((d) => ({ ...d, infants: clampInt(v, 0, 12) }))}
                                min={0}
                              />
                            </div>
                          </div>
                        ) : null}

                        {step === 5 ? (
                          <div className="space-y-6">
                            <div>
                              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-tight">When do you want to travel?</h2>
                              <p className="mt-2 text-white/70">Dates help us craft the best options.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                              <div className="space-y-2">
                                <label className="text-xs sm:text-sm text-white/75">Preferred Start Date</label>
                                <Input
                                  type="date"
                                  value={draft.startDate}
                                  onChange={(e) => setDraft((d) => ({ ...d, startDate: e.target.value }))}
                                  className="h-11 sm:h-12 rounded-xl sm:rounded-2xl bg-black/30 border-white/15 text-white focus-visible:ring-[#FFD93D]/40"
                                />
                              </div>
                              <div className="space-y-2">
                                <label className="text-xs sm:text-sm text-white/75">Preferred End Date</label>
                                <Input
                                  type="date"
                                  value={draft.endDate}
                                  onChange={(e) => setDraft((d) => ({ ...d, endDate: e.target.value }))}
                                  className="h-11 sm:h-12 rounded-xl sm:rounded-2xl bg-black/30 border-white/15 text-white focus-visible:ring-[#FFD93D]/40"
                                />
                              </div>
                            </div>
                          </div>
                        ) : null}

                        {step === 6 ? (
                          <div className="space-y-6">
                            <div>
                              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-tight">Your comfort matters</h2>
                              <p className="mt-2 text-white/70">Choose preferences — we’ll handle the rest.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                              <ChipGroup
                                title="Hotel Preference"
                                value={draft.hotelPreference}
                                options={[
                                  { value: "3", label: "3★" },
                                  { value: "4", label: "4★" },
                                  { value: "5", label: "5★" },
                                  { value: "luxury", label: "Luxury" },
                                  { value: "any", label: "Any" },
                                ]}
                                onChange={(v) => setDraft((d) => ({ ...d, hotelPreference: v as any }))}
                              />

                              <ChipGroup
                                title="Meal Plan"
                                value={draft.mealPlan}
                                options={[
                                  { value: "cp", label: "CP" },
                                  { value: "map", label: "MAP" },
                                  { value: "ap", label: "AP" },
                                  { value: "any", label: "Any" },
                                ]}
                                onChange={(v) => setDraft((d) => ({ ...d, mealPlan: v as any }))}
                              />

                              <ToggleCard
                                title="Transport Required"
                                description="Airport transfers / local travel"
                                checked={draft.transportRequired}
                                onChange={(checked) => setDraft((d) => ({ ...d, transportRequired: checked }))}
                              />

                              <ToggleCard
                                title="Flight Required"
                                description="We can include flight options"
                                checked={draft.flightRequired}
                                onChange={(checked) => setDraft((d) => ({ ...d, flightRequired: checked }))}
                              />
                            </div>
                          </div>
                        ) : null}

                        {step === 7 ? (
                          <div className="space-y-6">
                            <div>
                              <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">Anything you’d like us to know?</h2>
                              <p className="mt-1 text-sm sm:text-base text-white/70">Optional notes — preferences, budget, must-see places.</p>
                            </div>

                            <div className="space-y-2">
                              <label className="text-sm text-white/75">Notes</label>
                              <textarea
                                value={draft.notes}
                                onChange={(e) => setDraft((d) => ({ ...d, notes: e.target.value }))}
                                rows={5}
                                className={cn(
                                  "w-full rounded-2xl bg-black/30 border border-white/15 px-4 py-3",
                                  "text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-[#FFD93D]/30",
                                )}
                                placeholder="Tell us what would make this journey perfect"
                              />
                              <p className="text-xs text-white/45">Optional • {draft.notes.length}/400</p>
                            </div>
                          </div>
                        ) : null}

                        {submitError ? (
                          <div className="rounded-2xl border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                            {submitError}
                          </div>
                        ) : null}

                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                          <Button
                            type="button"
                            onClick={goBack}
                            disabled={!canGoBack}
                            variant="outline"
                            className="h-10 sm:h-11 rounded-xl sm:rounded-2xl border-white/20 bg-transparent text-white hover:bg-white hover:text-black font-black uppercase tracking-[0.14em]"
                          >
                            <span className="flex items-center gap-2">
                              <ArrowLeft className="h-4 w-4" /> Back
                            </span>
                          </Button>

                          <Button
                            type="button"
                            onClick={goNext}
                            disabled={isSubmitting}
                            className={cn(
                              "h-10 sm:h-11 flex-1 rounded-xl sm:rounded-2xl font-black uppercase tracking-[0.14em]",
                              "bg-gradient-to-r from-[#FF6B35] via-[#FFD93D] to-[#FF6B35] text-black",
                              "shadow-[0_14px_60px_rgba(255,217,61,0.14)]",
                            )}
                          >
                            <span className="flex items-center justify-center gap-2">
                              {isSubmitting ? (
                                <span className="inline-flex items-center gap-2">
                                  <span className="h-2 w-2 rounded-full bg-black/70 animate-bounce" />
                                  <span className="h-2 w-2 rounded-full bg-black/70 animate-bounce [animation-delay:120ms]" />
                                  <span className="h-2 w-2 rounded-full bg-black/70 animate-bounce [animation-delay:240ms]" />
                                </span>
                              ) : null}
                              <span>{nextLabel}</span>
                              {step < totalSteps ? <ArrowRight className="h-4 w-4" /> : null}
                            </span>
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                <Button asChild variant="outline" className="flex-1 sm:flex-none border-white/20 bg-transparent text-white hover:bg-white hover:text-black">
                  <Link href="/destinations">Explore</Link>
                </Button>
                <Button onClick={() => window.open('tel:+919742997421')} className="flex-1 sm:flex-none bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
                  Talk to Expert
                </Button>
              </div>

              <p className="mt-4 text-xs text-white/40 leading-relaxed text-center sm:text-left">
                By submitting, you agree to be contacted by Happy Feet travel experts via call/email. We never share your details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StepperCard({
  title,
  value,
  min,
  onChange,
}: {
  title: string
  value: number
  min: number
  onChange: (value: number) => void
}) {
  return (
    <div className="rounded-3xl border border-white/12 bg-black/25 px-6 py-5">
      <p className="text-sm text-white/70">{title}</p>
      <div className="mt-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onChange(value - 1)}
          disabled={value <= min}
          className="h-11 w-11 rounded-2xl border border-white/12 bg-white/5 text-white/90 disabled:opacity-40"
        >
          −
        </button>
        <p className="text-3xl font-black tracking-tight">{value}</p>
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="h-11 w-11 rounded-2xl border border-white/12 bg-white/5 text-white/90"
        >
          +
        </button>
      </div>
    </div>
  )
}

function ChipGroup({
  title,
  value,
  options,
  onChange,
}: {
  title: string
  value: string
  options: Array<{ value: string; label: string }>
  onChange: (value: string) => void
}) {
  return (
    <div className="rounded-3xl border border-white/12 bg-black/25 px-6 py-5">
      <p className="text-sm text-white/70">{title}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {options.map((o) => {
          const selected = value === o.value
          return (
            <button
              key={o.value}
              type="button"
              onClick={() => onChange(o.value)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-black uppercase tracking-[0.14em] transition-all",
                selected
                  ? "bg-[#FFD93D] text-black shadow-[0_14px_40px_rgba(255,217,61,0.18)]"
                  : "bg-white/5 text-white/80 border border-white/12 hover:bg-white/10",
              )}
            >
              {o.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function ToggleCard({
  title,
  description,
  checked,
  onChange,
}: {
  title: string
  description: string
  checked: boolean
  onChange: (checked: boolean) => void
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={cn(
        "rounded-3xl border px-6 py-5 text-left transition-all",
        "bg-black/25 hover:bg-black/35",
        checked ? "border-[#FFD93D]/45" : "border-white/12",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-black tracking-[0.14em] uppercase text-white/85">{title}</p>
          <p className="mt-1 text-sm text-white/65">{description}</p>
        </div>
        <span
          className={cn(
            "relative inline-flex h-7 w-12 items-center rounded-full border transition-all",
            checked ? "bg-[#FFD93D]/30 border-[#FFD93D]/40" : "bg-white/5 border-white/15",
          )}
        >
          <span
            className={cn(
              "inline-block h-5 w-5 rounded-full bg-white transition-all",
              checked ? "translate-x-6 bg-[#FFD93D]" : "translate-x-1 bg-white/80",
            )}
          />
        </span>
      </div>
    </button>
  )
}
