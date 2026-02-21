import Link from "next/link"
import { Cookie, Sparkles } from "lucide-react"

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: (
      <>
        <p>
          This Cookie Policy explains how Happy Feet Holidays & Resorts (“Happy Feet”, “we”, “our”, or “us”) uses
          cookies and similar technologies when you visit our website.
        </p>
        <p className="mt-4">
          Cookies help us deliver a premium browsing experience, understand site performance, and improve our services.
        </p>
      </>
    ),
  },
  {
    id: "what-are-cookies",
    title: "2. What Are Cookies?",
    content: (
      <>
        <p>
          Cookies are small text files stored on your device (computer, mobile, tablet) when you visit a website.
          Cookies allow a website to remember your actions and preferences (such as login, language, and other display
          settings) over a period of time.
        </p>
      </>
    ),
  },
  {
    id: "types-of-cookies",
    title: "3. Types of Cookies We Use",
    content: (
      <>
        <p>We may use the following categories of cookies:</p>

        <h3 className="mt-6 text-lg sm:text-xl font-black tracking-tight text-white">A. Strictly Necessary Cookies</h3>
        <p className="mt-3">
          These cookies are essential for the website to function and cannot be switched off in our systems. They are
          usually set in response to actions made by you.
        </p>

        <h3 className="mt-6 text-lg sm:text-xl font-black tracking-tight text-white">B. Performance & Analytics Cookies</h3>
        <p className="mt-3">
          These cookies help us understand how visitors use our website so we can measure and improve performance.
        </p>

        <h3 className="mt-6 text-lg sm:text-xl font-black tracking-tight text-white">C. Functional Cookies</h3>
        <p className="mt-3">
          These cookies enable enhanced functionality and personalization (for example, remembering preferences).
        </p>

        <h3 className="mt-6 text-lg sm:text-xl font-black tracking-tight text-white">D. Advertising / Marketing Cookies</h3>
        <p className="mt-3">
          These cookies may be set through our site by advertising partners (if used) to build a profile of your
          interests and show you relevant ads.
        </p>
      </>
    ),
  },
  {
    id: "third-party-cookies",
    title: "4. Third-Party Cookies",
    content: (
      <>
        <p>
          Some cookies may be placed by third-party services that appear on our pages (for example analytics tools,
          embedded maps, or marketing tools). These third parties may collect information about your online activities
          over time and across different websites.
        </p>
      </>
    ),
  },
  {
    id: "manage-cookies",
    title: "5. How to Manage Cookies",
    content: (
      <>
        <p>
          You can control and manage cookies in various ways. Most browsers allow you to:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>See what cookies are stored</li>
          <li>Delete cookies</li>
          <li>Block cookies for specific sites</li>
          <li>Block all cookies</li>
        </ul>
        <p className="mt-4 text-white/75">
          Please note: If you disable cookies, some parts of the website may not function properly.
        </p>
      </>
    ),
  },
  {
    id: "updates",
    title: "6. Updates to This Cookie Policy",
    content: (
      <>
        <p>
          We may update this Cookie Policy periodically. Updated versions will be posted on our website with revised
          effective dates.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "7. Contact Us",
    content: (
      <>
        <p>For any cookie-related questions, contact:</p>
        <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
          <p className="text-white/90 font-black">Happy Feet Holidays & Resorts</p>
          <p className="mt-1 text-white/90">
            <span className="font-black">Email:</span>{" "}
            <a
              className="underline underline-offset-4 decoration-white/20 hover:decoration-[#FFD93D]"
              href="mailto:info@happyfeetholidaysresorts.com"
            >
              info@happyfeetholidaysresorts.com
            </a>
          </p>
        </div>
      </>
    ),
  },
]

export default function CookiesPage() {
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
              <Cookie className="h-4 w-4 text-[#FFD93D]" />
              <span className="text-xs font-black tracking-[0.28em] text-white/90 uppercase">Cookies</span>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight leading-[0.95]">
              Cookie Policy
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
              A transparent look at how cookies help us deliver a world-class experience.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
              <Link
                href="/privacy"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-black tracking-[0.18em] uppercase text-white/90 hover:bg-white hover:text-black transition-colors"
              >
                <Sparkles className="h-4 w-4" />
                Privacy Policy
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B35] via-[#FFD93D] to-[#FF6B35] px-5 py-3 text-sm font-black tracking-[0.18em] uppercase text-black shadow-[0_14px_60px_rgba(255,217,61,0.14)]"
              >
                Contact Us
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
                    <p className="text-xs font-black tracking-[0.22em] uppercase text-[#FFD93D]">Tip</p>
                    <p className="mt-2 text-sm text-white/75 leading-relaxed">
                      You can manage cookie preferences in your browser settings at any time.
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
                            <Cookie className="h-4 w-4 text-white/90" />
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
                      For questions about cookies or privacy, reach us at{" "}
                      <a
                        className="underline underline-offset-4 decoration-white/20 hover:decoration-[#FFD93D]"
                        href="mailto:info@happyfeetholidaysresorts.com"
                      >
                        info@happyfeetholidaysresorts.com
                      </a>
                      .
                    </p>
                    <div className="mt-5 flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/privacy"
                        className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-black tracking-[0.18em] uppercase text-white/90 hover:bg-white hover:text-black transition-colors"
                      >
                        View Privacy Policy
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
