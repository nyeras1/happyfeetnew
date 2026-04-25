import Link from "next/link"
import { RotateCcw, Sparkles } from "lucide-react"

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: (
      <>
        <p>
          This Refund & Cancellation Policy (“Policy”) outlines the terms under which bookings made through Happy Feet
          Holidays & Resorts (“Happy Feet”, “we”, “our”, or “us”) may be cancelled and refunded.
        </p>
        <p className="mt-4">
          Happy Feet acts as an intermediary between customers and third-party travel service providers such as
          airlines, hotels/resorts, bus operators, and tour operators.
        </p>
        <p className="mt-4">
          Refunds and cancellations are subject to the terms and conditions of the respective service provider.
        </p>
      </>
    ),
  },
  {
    id: "general-cancellation-terms",
    title: "2. General Cancellation Terms",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Cancellation requests must be made through:
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>Customer support email</li>
              <li>Official customer support number</li>
            </ul>
          </li>
          <li>Cancellation is effective only after confirmation from Happy Feet.</li>
          <li>Cancellation terms may apply as per supplier policy.</li>
          <li>Service-related deductions by Happy Feet may be non-refundable.</li>
        </ul>
      </>
    ),
  },
  {
    id: "flight-bookings",
    title: "3. Flight Bookings",
    content: (
      <>
        <h3 className="text-lg sm:text-xl font-black tracking-tight text-white">A. Airline Cancellation Policy</h3>
        <ul className="mt-3 list-disc pl-6 space-y-2">
          <li>Cancellation and refund rules depend on airline fare rules.</li>
          <li>Some fares (e.g., promotional or discounted fares) may be non-refundable.</li>
          <li>Airline cancellation terms will apply.</li>
        </ul>

        <h3 className="mt-6 text-lg sm:text-xl font-black tracking-tight text-white">B. Happy Feet Service Charges</h3>
        <ul className="mt-3 list-disc pl-6 space-y-2">
          <li>A processing deduction may be applied.</li>
          <li>Payment gateway charges (if applicable) may not be refundable.</li>
        </ul>

        <h3 className="mt-6 text-lg sm:text-xl font-black tracking-tight text-white">C. No-Show Policy</h3>
        <p className="mt-3">If a passenger fails to check in or board a flight:</p>
        <ul className="mt-3 list-disc pl-6 space-y-2">
          <li>The ticket may be treated as “No-Show”</li>
          <li>Refunds (if any) are subject to airline rules</li>
        </ul>
        <p className="mt-4">Refund timelines depend on airline processing (typically 7–21 working days).</p>
      </>
    ),
  },
  {
    id: "hotel-resort-bookings",
    title: "4. Hotel/Resort Bookings",
    content: (
      <>
        <p>Cancellation policies vary depending on:</p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Hotel property rules</li>
          <li>Rate type (refundable/non-refundable)</li>
          <li>Seasonal policies</li>
        </ul>
        <p className="mt-4 font-black text-white">Common Scenarios:</p>
        <ul className="mt-3 list-disc pl-6 space-y-2">
          <li>Free cancellation until a specified date</li>
          <li>Partial refund for late cancellation</li>
          <li>No refund for same-day cancellation or no-show</li>
        </ul>
        <p className="mt-4">Hotel cancellation timelines are clearly displayed at the time of booking.</p>
      </>
    ),
  },
  {
    id: "bus-bookings",
    title: "5. Bus Bookings",
    content: (
      <>
        <p>Bus operator cancellation charges apply as per:</p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Time before departure</li>
          <li>Operator-specific policies</li>
        </ul>
        <p className="mt-4 font-black text-white">Typical structure:</p>
        <ul className="mt-3 list-disc pl-6 space-y-2">
          <li>24+ hours before departure → Partial refund</li>
          <li>6–24 hours before departure → Higher deduction</li>
          <li>Less than 6 hours or No-show → No refund</li>
        </ul>
        <p className="mt-4">Refunds are processed after confirmation from the bus operator.</p>
      </>
    ),
  },
  {
    id: "holiday-packages",
    title: "6. Holiday Packages & Tours",
    content: (
      <>
        <p>Holiday package cancellations are subject to:</p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Internal policy of Happy Feet</li>
          <li>Supplier contracts (hotels, transporters, activity providers)</li>
          <li>Visa processing status (if applicable)</li>
        </ul>

        <p className="mt-4 font-black text-white">Indicative Cancellation Deductions:</p>
        <ul className="mt-3 list-disc pl-6 space-y-2">
          <li>30+ days before travel → 10–25% deduction</li>
          <li>15–30 days → 25–50% deduction</li>
          <li>7–15 days → 50–75% deduction</li>
          <li>Less than 7 days → 100% cancellation charge</li>
        </ul>

        <p className="mt-4">
          Actual terms may vary and will be mentioned in the booking confirmation. Visa-related amounts, insurance premiums, and
          non-refundable components are not refundable.
        </p>
      </>
    ),
  },
  {
    id: "refund-timelines",
    title: "7. Refund Processing Timelines",
    content: (
      <>
        <p>Refund timelines vary based on payment mode:</p>

        <div className="mt-4 overflow-hidden rounded-3xl border border-white/10">
          <div className="grid grid-cols-2 bg-white/5 text-xs sm:text-sm font-black tracking-[0.14em] uppercase">
            <div className="p-3 sm:p-4">Payment Method</div>
            <div className="p-3 sm:p-4">Estimated Refund Timeline</div>
          </div>
          <div className="grid grid-cols-2 divide-y divide-white/10 bg-black/20 text-sm sm:text-base">
            {[
              ["UPI", "3–7 working days"],
              ["Credit/Debit Card", "5–10 working days"],
              ["Net Banking", "5–10 working days"],
              ["Wallets", "2–5 working days"],
              ["International Payments", "7–21 working days"],
            ].map(([method, time]) => (
              <>
                <div key={`${method}-m`} className="p-3 sm:p-4 text-white/80">
                  {method}
                </div>
                <div key={`${method}-t`} className="p-3 sm:p-4 text-white/80">
                  {time}
                </div>
              </>
            ))}
          </div>
        </div>

        <p className="mt-4">Refund timelines may extend due to:</p>
        <ul className="mt-3 list-disc pl-6 space-y-2">
          <li>Supplier delays</li>
          <li>Banking delays</li>
          <li>Force majeure situations</li>
        </ul>
      </>
    ),
  },
  {
    id: "refund-method",
    title: "8. Refund Method",
    content: (
      <>
        <p>Refunds will be processed:</p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>To the original payment method</li>
          <li>After applying applicable cancellation and service deductions</li>
        </ul>
        <p className="mt-4">Refunds cannot be processed to third-party accounts.</p>
      </>
    ),
  },
  {
    id: "partial-cancellations",
    title: "9. Partial Cancellations",
    content: (
      <>
        <p>If only part of the booking is cancelled:</p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Cancellation deductions may apply per passenger or per room</li>
          <li>Group booking refunds may vary depending on supplier terms</li>
        </ul>
      </>
    ),
  },
  {
    id: "amendments",
    title: "10. Amendments & Rescheduling",
    content: (
      <>
        <p>Date changes or rescheduling:</p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Subject to availability</li>
          <li>May involve fare differences</li>
          <li>May attract amendment terms from suppliers and service deductions from Happy Feet</li>
        </ul>
      </>
    ),
  },
  {
    id: "force-majeure",
    title: "11. Force Majeure Events",
    content: (
      <>
        <p>In case of events beyond control such as:</p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Natural disasters</li>
          <li>Government travel restrictions</li>
          <li>Pandemics</li>
          <li>Political unrest</li>
        </ul>
        <p className="mt-4">Refunds will depend on:</p>
        <ul className="mt-3 list-disc pl-6 space-y-2">
          <li>Supplier policies</li>
          <li>Government advisories</li>
          <li>Credit shell options (if provided by airlines/hotels)</li>
        </ul>
        <p className="mt-4">Happy Feet is not liable for additional losses due to such events.</p>
      </>
    ),
  },
  {
    id: "fraud",
    title: "12. Fraudulent or Misuse Cases",
    content: (
      <>
        <p>Refunds may be denied in cases involving:</p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Fraudulent transactions</li>
          <li>Chargebacks without prior notification</li>
          <li>Misuse of promotional offers</li>
          <li>Violation of Terms of Service</li>
        </ul>
      </>
    ),
  },
  {
    id: "chargebacks",
    title: "13. Chargebacks",
    content: (
      <>
        <p>If a customer initiates a chargeback without contacting customer support:</p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>The booking may be suspended</li>
          <li>Additional documentation may be required</li>
          <li>Legal action may be taken in fraudulent cases</li>
        </ul>
      </>
    ),
  },
  {
    id: "grievance",
    title: "14. Grievance & Escalation",
    content: (
      <>
        <p>For cancellation or refund-related concerns, contact:</p>
        <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
          <p className="text-white/90">
            <span className="font-black">Email:</span>{" "}
            <a
              className="underline underline-offset-4 decoration-white/20 hover:decoration-[#FFD93D]"
              href="mailto:customercare@happyfeetholidaysresorts.com"
            >
              customercare@happyfeetholidaysresorts.com
            </a>
          </p>
        </div>
        <p className="mt-4">
          We aim to respond within 48 hours and resolve issues within 30 days in compliance with the Consumer
          Protection (E-Commerce) Rules, 2020.
        </p>
      </>
    ),
  },
  {
    id: "updates",
    title: "15. Policy Updates",
    content: (
      <>
        <p>
          Happy Feet reserves the right to modify this Policy at any time. Updated versions will be posted on the
          website with a revised effective date.
        </p>
      </>
    ),
  },
]

export default function RefundPage() {
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
              <RotateCcw className="h-4 w-4 text-[#FFD93D]" />
              <span className="text-xs font-black tracking-[0.28em] text-white/90 uppercase">Refunds</span>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight leading-[0.95]">
              Refund & Cancellation Policy
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
              Clear, transparent guidelines — designed to protect you and keep your journey smooth.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
              <Link
                href="/terms"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-black tracking-[0.18em] uppercase text-white/90 hover:bg-white hover:text-black transition-colors"
              >
                <Sparkles className="h-4 w-4" />
                Terms
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B35] via-[#FFD93D] to-[#FF6B35] px-5 py-3 text-sm font-black tracking-[0.18em] uppercase text-black shadow-[0_14px_60px_rgba(255,217,61,0.14)]"
              >
                Contact Support
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
                    <p className="text-xs font-black tracking-[0.22em] uppercase text-[#FFD93D]">Note</p>
                    <p className="mt-2 text-sm text-white/75 leading-relaxed">
                      Refunds and cancellations are subject to supplier policies and may vary by booking type.
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
                            <RotateCcw className="h-4 w-4 text-white/90" />
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
                    <p className="text-xs font-black tracking-[0.22em] uppercase text-white/70">Need help?</p>
                    <p className="mt-2 text-sm sm:text-base text-white/75 leading-relaxed">
                      For refund-related concerns, email{" "}
                      <a
                        className="underline underline-offset-4 decoration-white/20 hover:decoration-[#FFD93D]"
                        href="mailto:customercare@happyfeetholidaysresorts.com"
                      >
                        customercare@happyfeetholidaysresorts.com
                      </a>
                      .
                    </p>
                    <div className="mt-5 flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-black tracking-[0.18em] uppercase text-white/90 hover:bg-white hover:text-black transition-colors"
                      >
                        Contact Page
                      </Link>
                      <Link
                        href="/terms"
                        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF6B35] via-[#FFD93D] to-[#FF6B35] px-5 py-3 text-sm font-black tracking-[0.18em] uppercase text-black shadow-[0_14px_60px_rgba(255,217,61,0.14)]"
                      >
                        Terms of Service
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
