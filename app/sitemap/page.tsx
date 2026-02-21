import Link from "next/link"
import { Map, Sparkles } from "lucide-react"

const groups: { title: string; description: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Explore",
    description: "Discover destinations, experiences, and curated journeys.",
    links: [
      { label: "Home", href: "/" },
      { label: "Destinations", href: "/destinations" },
      { label: "Book", href: "/book" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    title: "Company",
    description: "Learn about Happy Feet and opportunities to work with us.",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Franchise", href: "/franchise" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Policies",
    description: "Clear, transparent policies for a smooth experience.",
    links: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Refund & Cancellation Policy", href: "/refund" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
]

export default function SitemapPage() {
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
              <Map className="h-4 w-4 text-[#FFD93D]" />
              <span className="text-xs font-black tracking-[0.28em] text-white/90 uppercase">Sitemap</span>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight leading-[0.95]">
              Find your next page
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
              A premium index of every important corner of the Happy Feet experience.
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
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-black tracking-[0.18em] uppercase text-white/90 hover:bg-white hover:text-black transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.55)] overflow-hidden">
                <div className="p-5 sm:p-6">
                  <p className="text-xs font-black tracking-[0.22em] uppercase text-white/70">Quick jump</p>
                  <div className="mt-4 space-y-2">
                    {groups.map((g) => (
                      <a
                        key={g.title}
                        href={`#${g.title.toLowerCase()}`}
                        className="block rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/85 hover:border-white/20 hover:bg-white/10 transition-colors"
                      >
                        {g.title}
                      </a>
                    ))}
                  </div>
                  <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 px-4 py-4">
                    <p className="text-xs font-black tracking-[0.22em] uppercase text-[#FFD93D]">Tip</p>
                    <p className="mt-2 text-sm text-white/75 leading-relaxed">
                      Use the grouped sections to navigate faster on mobile.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.55)] overflow-hidden">
                <div className="p-5 sm:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {groups.map((g) => (
                      <section key={g.title} id={g.title.toLowerCase()} className="scroll-mt-28">
                        <div className="rounded-3xl border border-white/10 bg-black/20 p-5 sm:p-6">
                          <p className="text-xs font-black tracking-[0.22em] uppercase text-[#FFD93D]">{g.title}</p>
                          <p className="mt-2 text-sm text-white/70 leading-relaxed">{g.description}</p>
                          <div className="mt-4 space-y-2">
                            {g.links.map((l) => (
                              <Link
                                key={l.href}
                                href={l.href}
                                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85 hover:bg-white hover:text-black hover:border-white transition-colors"
                              >
                                <span className="font-semibold">{l.label}</span>
                                <span className="text-xs font-black tracking-[0.18em] uppercase text-white/60 group-hover:text-black/70">
                                  Open
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </section>
                    ))}
                  </div>

                  <div className="mt-10 rounded-3xl border border-white/10 bg-black/25 p-6">
                    <p className="text-xs font-black tracking-[0.22em] uppercase text-white/70">Need help?</p>
                    <p className="mt-2 text-sm sm:text-base text-white/75 leading-relaxed">
                      If you can’t find what you’re looking for, reach out via the contact page.
                    </p>
                    <div className="mt-5 flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-black tracking-[0.18em] uppercase text-white/90 hover:bg-white hover:text-black transition-colors"
                      >
                        Contact Page
                      </Link>
                      <Link
                        href="/book"
                        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF6B35] via-[#FFD93D] to-[#FF6B35] px-5 py-3 text-sm font-black tracking-[0.18em] uppercase text-black shadow-[0_14px_60px_rgba(255,217,61,0.14)]"
                      >
                        Start Booking
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
