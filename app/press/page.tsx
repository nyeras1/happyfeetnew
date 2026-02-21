import Link from "next/link"
import { Download, Mail, Newspaper, Sparkles } from "lucide-react"

const sections = [
  {
    id: "brand",
    title: "Brand Assets",
    content: (
      <>
        <p>
          Download a simple brand kit for editorial use. If you need additional formats (AI/SVG/print-ready), contact
          our media team.
        </p>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: "Logo (PNG)", desc: "For web & social", href: "/logo-CZBEvsvV.png" },
            { label: "Icon (SVG)", desc: "For UI and favicons", href: "/icon.svg" },
          ].map((a) => (
            <a
              key={a.label}
              href={a.href}
              className="group rounded-3xl border border-white/10 bg-black/20 p-5 hover:bg-white hover:text-black transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-black tracking-tight">{a.label}</p>
                  <p className="mt-1 text-sm text-white/70 group-hover:text-black/70">{a.desc}</p>
                </div>
                <div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-black/10 group-hover:bg-black/5">
                  <Download className="h-5 w-5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "boilerplate",
    title: "Company Boilerplate",
    content: (
      <>
        <p>
          Happy Feet Holidays & Resorts is a concierge-first travel brand specializing in curated holiday packages,
          premium resort experiences, and personalized itineraries across India and international destinations.
          Designed for comfort, clarity, and delight — we help travelers move from planning to unforgettable memories.
        </p>
      </>
    ),
  },
  {
    id: "media-contact",
    title: "Media Contact",
    content: (
      <>
        <p>
          For press inquiries, collaborations, or interviews, reach out to our team and we’ll respond as quickly as
          possible.
        </p>
        <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
          <p className="text-white/90">
            <span className="font-black">Email:</span>{" "}
            <a
              className="underline underline-offset-4 decoration-white/20 hover:decoration-[#FFD93D] break-words"
              href="mailto:info@happyfeetholidaysresorts.com"
            >
              info@happyfeetholidaysresorts.com
            </a>
          </p>
          <p className="mt-1 text-white/90">
            <span className="font-black">Support:</span>{" "}
            <a
              className="underline underline-offset-4 decoration-white/20 hover:decoration-[#FFD93D] break-words"
              href="mailto:customercare@happyfeetholidaysresorts.com"
            >
              customercare@happyfeetholidaysresorts.com
            </a>
          </p>
        </div>
      </>
    ),
  },
]

export default function PressPage() {
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
              <Newspaper className="h-4 w-4 text-[#FFD93D]" />
              <span className="text-xs font-black tracking-[0.28em] text-white/90 uppercase">Press Kit</span>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight leading-[0.95]">
              Press & Media
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
              Assets, boilerplate, and contact info — designed for a world-class editorial experience.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B35] via-[#FFD93D] to-[#FF6B35] px-5 py-3 text-sm font-black tracking-[0.18em] uppercase text-black shadow-[0_14px_60px_rgba(255,217,61,0.14)]"
              >
                <Sparkles className="h-4 w-4" />
                About Us
              </Link>
              <a
                href="mailto:info@happyfeetholidaysresorts.com"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-black tracking-[0.18em] uppercase text-white/90 hover:bg-white hover:text-black transition-colors"
              >
                <Mail className="h-4 w-4" />
                Media Email
              </a>
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
                    <p className="text-xs font-black tracking-[0.22em] uppercase text-[#FFD93D]">Downloads</p>
                    <p className="mt-2 text-sm text-white/75 leading-relaxed">
                      Assets are provided for editorial use. Please don’t modify logos.
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
                            <Newspaper className="h-4 w-4 text-white/90" />
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
                    <p className="text-xs font-black tracking-[0.22em] uppercase text-white/70">Want a story?</p>
                    <p className="mt-2 text-sm sm:text-base text-white/75 leading-relaxed">
                      We’re happy to share quotes, itineraries, and destination insights.
                    </p>
                    <div className="mt-5 flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/destinations"
                        className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-black tracking-[0.18em] uppercase text-white/90 hover:bg-white hover:text-black transition-colors"
                      >
                        Explore Destinations
                      </Link>
                      <a
                        href="mailto:info@happyfeetholidaysresorts.com"
                        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF6B35] via-[#FFD93D] to-[#FF6B35] px-5 py-3 text-sm font-black tracking-[0.18em] uppercase text-black shadow-[0_14px_60px_rgba(255,217,61,0.14)]"
                      >
                        Contact Media Team
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 rounded-3xl border border-white/10 bg-black/25 p-6">
                    <p className="text-xs font-black tracking-[0.22em] uppercase text-white/70">Note</p>
                    <p className="mt-2 text-sm sm:text-base text-white/75 leading-relaxed">
                      This page is an informational press kit. For bookings or support, please use the Contact page.
                    </p>
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
