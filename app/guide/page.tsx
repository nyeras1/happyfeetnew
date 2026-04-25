import Link from "next/link"
import { Backpack, CalendarDays, CheckCircle2, Compass, FileText, Sparkles } from "lucide-react"

const sections = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: Compass,
    content: (
      <>
        <p>
          Whether you’re planning a weekend escape or a premium international journey, this guide helps you prepare
          with clarity. If you want a concierge to handle everything end-to-end, head to our booking page.
        </p>
        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          <Link
            href="/book"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF6B35] via-[#FFD93D] to-[#FF6B35] px-5 py-3 text-sm font-black tracking-[0.18em] uppercase text-black shadow-[0_14px_60px_rgba(255,217,61,0.14)]"
          >
            Start Journey
          </Link>
          <Link
            href="/destinations"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-black tracking-[0.18em] uppercase text-white/90 hover:bg-white hover:text-black transition-colors"
          >
            Explore Destinations
          </Link>
        </div>
      </>
    ),
  },
  {
    id: "best-time",
    title: "Best Time to Travel",
    icon: CalendarDays,
    content: (
      <>
        <p>
          Seasons vary by destination. We recommend choosing your travel window based on weather, crowd level, and
          activities you want to prioritize.
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>
            <span className="font-black text-white">Peak season:</span> best weather, high demand, early booking
            recommended.
          </li>
          <li>
            <span className="font-black text-white">Shoulder season:</span> fewer crowds, balanced weather, excellent
            experience.
          </li>
          <li>
            <span className="font-black text-white">Off season:</span> quieter windows, weather can be unpredictable.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "documents",
    title: "Documents Checklist",
    icon: FileText,
    content: (
      <>
        <p>Keep these ready to avoid last-minute stress:</p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Government ID (Aadhaar / PAN) for domestic bookings where applicable</li>
          <li>Passport (validity typically 6 months+ for international travel)</li>
          <li>Visa documents (if required)</li>
          <li>Flight / hotel confirmations</li>
          <li>Travel insurance (recommended)</li>
        </ul>
        <p className="mt-4 text-white/70">
          Tip: Save digital copies in your phone and email, and carry printed copies for international travel.
        </p>
      </>
    ),
  },
  {
    id: "packing",
    title: "Packing Essentials",
    icon: Backpack,
    content: (
      <>
        <p>A clean checklist makes travel feel effortless:</p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {["Weather-appropriate clothing", "Comfortable footwear", "Medications & basic first-aid", "Power bank & adapters", "Sunscreen / skincare", "Reusable water bottle"].map(
            (item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-black/20 px-5 py-4 flex items-start gap-3"
              >
                <CheckCircle2 className="h-5 w-5 text-[#FFD93D] mt-0.5" />
                <p className="text-sm text-white/80 leading-relaxed">{item}</p>
              </div>
            ),
          )}
        </div>
      </>
    ),
  },
  {
    id: "how-booking-works",
    title: "How Booking Works",
    icon: Sparkles,
    content: (
      <>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <span className="font-black text-white">Share your preferences</span> — destination, dates, travel style, and
            travel style.
          </li>
          <li>
            <span className="font-black text-white">We curate options</span> — itinerary + stays + experiences.
          </li>
          <li>
            <span className="font-black text-white">Confirm your journey</span> — final details are shared before confirmation.
          </li>
          <li>
            <span className="font-black text-white">Receive confirmations</span> — tickets/vouchers via email/SMS.
          </li>
        </ol>
        <p className="mt-4">
          For cancellations/refunds, please refer to our{" "}
          <Link className="underline underline-offset-4 decoration-white/20 hover:decoration-[#FFD93D]" href="/refund">
            Refund & Cancellation Policy
          </Link>
          .
        </p>
      </>
    ),
  },
]

export default function TravelGuidePage() {
  return (
    <div className="min-h-screen bg-[#06070A] text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,217,61,0.16),transparent_60%)] blur-2xl" />
          <div className="absolute -bottom-64 -right-32 h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,107,53,0.14),transparent_60%)] blur-2xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.08),transparent_55%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/45 to-black/85" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 pt-28 sm:pt-32 pb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <Compass className="h-4 w-4 text-[#FFD93D]" />
              <span className="text-xs font-black tracking-[0.28em] text-white/90 uppercase">Travel Guide</span>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight leading-[0.95]">
              Travel Guide
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
              Practical tips, checklists, and planning essentials — made premium and simple.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B35] via-[#FFD93D] to-[#FF6B35] px-5 py-3 text-sm font-black tracking-[0.18em] uppercase text-black shadow-[0_14px_60px_rgba(255,217,61,0.14)]"
              >
                <Sparkles className="h-4 w-4" />
                Start Journey
              </Link>
              <Link
                href="/destinations"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-black tracking-[0.18em] uppercase text-white/90 hover:bg-white hover:text-black transition-colors"
              >
                Destinations
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-black tracking-[0.18em] uppercase text-white/90 hover:bg-white hover:text-black transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.55)] overflow-hidden">
                <div className="p-5 sm:p-6">
                  <p className="text-xs font-black tracking-[0.22em] uppercase text-white/70">On this page</p>
                  <div className="mt-4 space-y-2">
                    {sections.map((s) => (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        className="block rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/85 hover:border-white/20 hover:bg-white/10 transition-colors"
                      >
                        {s.title}
                      </a>
                    ))}
                  </div>
                  <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 px-4 py-4">
                    <p className="text-xs font-black tracking-[0.22em] uppercase text-[#FFD93D]">Concierge tip</p>
                    <p className="mt-2 text-sm text-white/75 leading-relaxed">
                      Share your preferences early — it helps us create the best itinerary faster.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.55)] overflow-hidden">
                <div className="p-5 sm:p-8">
                  <div className="space-y-10">
                    {sections.map((s) => (
                      <section key={s.id} id={s.id} className="scroll-mt-28">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 h-9 w-9 rounded-2xl bg-white/8 border border-white/10 flex items-center justify-center">
                            <s.icon className="h-4 w-4 text-white/90" />
                          </div>
                          <div className="min-w-0">
                            <h2 className="text-xl sm:text-2xl font-serif font-black tracking-tight">{s.title}</h2>
                            <div className="mt-3 text-sm sm:text-base text-white/75 leading-relaxed">{s.content}</div>
                          </div>
                        </div>
                      </section>
                    ))}
                  </div>

                  <div className="mt-12 rounded-3xl border border-white/10 bg-black/25 p-6">
                    <p className="text-xs font-black tracking-[0.22em] uppercase text-white/70">Need a hand?</p>
                    <p className="mt-2 text-sm sm:text-base text-white/75 leading-relaxed">
                      Our experts can shape your trip for comfort, experiences, and premium stays.
                    </p>
                    <div className="mt-5 flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/book"
                        className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-black tracking-[0.18em] uppercase text-white/90 hover:bg-white hover:text-black transition-colors"
                      >
                        Book Page
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF6B35] via-[#FFD93D] to-[#FF6B35] px-5 py-3 text-sm font-black tracking-[0.18em] uppercase text-black shadow-[0_14px_60px_rgba(255,217,61,0.14)]"
                      >
                        Talk to Travel Expert
                      </Link>
                    </div>
                  </div>

                  <div className="mt-6 rounded-3xl border border-white/10 bg-black/25 p-6">
                    <p className="text-xs font-black tracking-[0.22em] uppercase text-white/70">Related</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <Link
                        href="/faq"
                        className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-black tracking-[0.18em] uppercase text-white/90 hover:bg-white hover:text-black transition-colors"
                      >
                        FAQ
                      </Link>
                      <Link
                        href="/privacy"
                        className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-black tracking-[0.18em] uppercase text-white/90 hover:bg-white hover:text-black transition-colors"
                      >
                        Privacy
                      </Link>
                      <Link
                        href="/terms"
                        className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-black tracking-[0.18em] uppercase text-white/90 hover:bg-white hover:text-black transition-colors"
                      >
                        Terms
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
