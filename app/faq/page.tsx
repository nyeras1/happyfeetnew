import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, Sparkles } from "lucide-react"

const faqs: { q: string; a: string }[] = [
  {
    q: "How do I book a holiday package with Happy Feet?",
    a: "You can book by submitting an inquiry on the Book page or by contacting our travel experts. Once we confirm your itinerary, you’ll receive payment details and a confirmation via email/SMS.",
  },
  {
    q: "Do you offer customized itineraries?",
    a: "Yes. We specialize in tailor-made travel. Share your preferred destinations, dates, and style, and our concierge team will craft options that match your budget and comfort.",
  },
  {
    q: "Are prices fixed after I see them?",
    a: "Travel prices can be dynamic and may change until payment is completed. We always confirm final pricing before you pay.",
  },
  {
    q: "What is your cancellation and refund process?",
    a: "Refunds and cancellations depend on the supplier policy (airlines/hotels/buses/tour providers). You can review our Refund & Cancellation Policy for general timelines and guidance.",
  },
  {
    q: "Do you support international bookings and visas?",
    a: "Yes, we support international travel planning. Visa processing depends on destination requirements and third-party timelines. We’ll guide you on the documents needed.",
  },
  {
    q: "How can I reach support quickly?",
    a: "For quick assistance, call +91 97429 97421 or email customercare@happyfeetholidaysresorts.com.",
  },
]

export default function FaqPage() {
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
              <HelpCircle className="h-4 w-4 text-[#FFD93D]" />
              <span className="text-xs font-black tracking-[0.28em] text-white/90 uppercase">FAQ</span>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight leading-[0.95]">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
              Quick answers — crafted for a smooth, premium booking experience.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B35] via-[#FFD93D] to-[#FF6B35] px-5 py-3 text-sm font-black tracking-[0.18em] uppercase text-black shadow-[0_14px_60px_rgba(255,217,61,0.14)]"
              >
                <Sparkles className="h-4 w-4" />
                Book Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-black tracking-[0.18em] uppercase text-white/90 hover:bg-white hover:text-black transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/refund"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-black tracking-[0.18em] uppercase text-white/90 hover:bg-white hover:text-black transition-colors"
              >
                Refund Policy
              </Link>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.55)] overflow-hidden">
                <div className="p-5 sm:p-6">
                  <p className="text-xs font-black tracking-[0.22em] uppercase text-white/70">Quick links</p>
                  <div className="mt-4 space-y-2">
                    {[{ label: "Destinations", href: "/destinations" }, { label: "Book", href: "/book" }, { label: "Contact", href: "/contact" }].map(
                      (l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          className="block rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/85 hover:border-white/20 hover:bg-white/10 transition-colors"
                        >
                          {l.label}
                        </Link>
                      ),
                    )}
                  </div>
                  <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 px-4 py-4">
                    <p className="text-xs font-black tracking-[0.22em] uppercase text-[#FFD93D]">Support</p>
                    <p className="mt-2 text-sm text-white/75 leading-relaxed break-words">
                      Email: customercare@happyfeetholidaysresorts.com
                    </p>
                    <p className="mt-1 text-sm text-white/75 leading-relaxed">Phone: +91 97429 97421</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.55)] overflow-hidden">
                <div className="p-5 sm:p-8">
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((item, idx) => (
                      <AccordionItem
                        key={item.q}
                        value={`faq-${idx}`}
                        className="border-white/10 data-[state=open]:bg-white/5 rounded-2xl px-4"
                      >
                        <AccordionTrigger className="text-left text-white hover:no-underline">
                          <span className="text-base sm:text-lg font-black tracking-tight">{item.q}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-sm sm:text-base text-white/75 leading-relaxed pb-5">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>

                  <div className="mt-10 rounded-3xl border border-white/10 bg-black/25 p-6">
                    <p className="text-xs font-black tracking-[0.22em] uppercase text-white/70">Still need help?</p>
                    <p className="mt-2 text-sm sm:text-base text-white/75 leading-relaxed">
                      Reach out and our experts will guide you end-to-end.
                    </p>
                    <div className="mt-5 flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-black tracking-[0.18em] uppercase text-white/90 hover:bg-white hover:text-black transition-colors"
                      >
                        Contact Page
                      </Link>
                      <a
                        href="mailto:customercare@happyfeetholidaysresorts.com"
                        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF6B35] via-[#FFD93D] to-[#FF6B35] px-5 py-3 text-sm font-black tracking-[0.18em] uppercase text-black shadow-[0_14px_60px_rgba(255,217,61,0.14)]"
                      >
                        Email Support
                      </a>
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
