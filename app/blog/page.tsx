import Link from "next/link"
import { ArrowRight, Newspaper, Sparkles } from "lucide-react"

const posts = [
  {
    title: "How to plan a premium holiday (without the stress)",
    excerpt:
      "A concierge-style checklist to book smarter, travel smoother, and enjoy more — from documents to stays to experiences.",
    href: "/contact",
    tag: "Planning",
  },
  {
    title: "Best time to visit: top destinations by season",
    excerpt:
      "From beach escapes to mountain retreats — pick the perfect travel window for weather, crowds, and value.",
    href: "/destinations",
    tag: "Seasons",
  },
  {
    title: "Refunds & cancellations: what travelers should know",
    excerpt:
      "A quick guide to supplier policies, timelines, and how to raise a request the right way.",
    href: "/refund",
    tag: "Policy",
  },
]

export default function BlogPage() {
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
              <span className="text-xs font-black tracking-[0.28em] text-white/90 uppercase">Blog</span>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight leading-[0.95]">
              Travel Notes & Tips
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
              Premium guidance for better journeys — planning, seasonal picks, and travel clarity.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
              <Link
                href="/guide"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B35] via-[#FFD93D] to-[#FF6B35] px-5 py-3 text-sm font-black tracking-[0.18em] uppercase text-black shadow-[0_14px_60px_rgba(255,217,61,0.14)]"
              >
                <Sparkles className="h-4 w-4" />
                Travel Guide
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
                  <p className="text-xs font-black tracking-[0.22em] uppercase text-white/70">Start here</p>
                  <div className="mt-4 space-y-2">
                    {[
                      { label: "Travel Guide", href: "/guide" },
                      { label: "FAQ", href: "/faq" },
                      { label: "Refund Policy", href: "/refund" },
                      { label: "Book", href: "/book" },
                    ].map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="block rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/85 hover:border-white/20 hover:bg-white/10 transition-colors"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 px-4 py-4">
                    <p className="text-xs font-black tracking-[0.22em] uppercase text-[#FFD93D]">Note</p>
                    <p className="mt-2 text-sm text-white/75 leading-relaxed">
                      This is a lightweight blog page for now. If you want, I can add a full CMS later.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.55)] overflow-hidden">
                <div className="p-5 sm:p-8">
                  <div className="grid grid-cols-1 gap-5">
                    {posts.map((p) => (
                      <Link
                        key={p.title}
                        href={p.href}
                        className="group rounded-3xl border border-white/10 bg-black/20 p-6 hover:bg-white hover:text-black transition-colors"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-xs font-black tracking-[0.22em] uppercase text-[#FFD93D] group-hover:text-black/70">
                              {p.tag}
                            </p>
                            <h2 className="mt-2 text-xl sm:text-2xl font-serif font-black tracking-tight">
                              {p.title}
                            </h2>
                            <p className="mt-3 text-sm sm:text-base text-white/75 group-hover:text-black/70 leading-relaxed">
                              {p.excerpt}
                            </p>
                          </div>
                          <div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-black/10 group-hover:bg-black/5">
                            <ArrowRight className="h-5 w-5" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-10 rounded-3xl border border-white/10 bg-black/25 p-6">
                    <p className="text-xs font-black tracking-[0.22em] uppercase text-white/70">Want updates?</p>
                    <p className="mt-2 text-sm sm:text-base text-white/75 leading-relaxed">
                      Tell me if you want a full blog system (admin panel, posts, categories, SEO pages).
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
