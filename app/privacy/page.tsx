import Link from "next/link"
import { ShieldCheck, Sparkles } from "lucide-react"

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: (
      <>
        <p>
          Happy Feet Holidays & Resorts (“Happy Feet”, “Company”, “we”, “our”, or “us”) values your trust and is committed
          to protecting your personal data.
        </p>
        <p className="mt-4">
          This Privacy Policy explains how we collect, use, disclose, store, and protect your personal information when
          you:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Visit our website</li>
          <li>Book travel services (flights, hotels, holidays, buses, resorts)</li>
          <li>Interact with our sales team or customer support</li>
          <li>Participate in marketing campaigns or promotions</li>
        </ul>
        <p className="mt-4">
          This Policy is prepared in accordance with applicable Indian laws including the Digital Personal Data
          Protection Act, 2023.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    content: (
      <>
        <p>We may collect the following categories of personal data:</p>

        <h3 className="mt-6 text-lg sm:text-xl font-black tracking-tight text-white">A. Personal Identification Information</h3>
        <ul className="mt-3 list-disc pl-6 space-y-2">
          <li>Full name</li>
          <li>Date of birth</li>
          <li>Gender</li>
          <li>Nationality</li>
          <li>Government-issued ID details (Passport, Aadhaar, PAN — where required for booking)</li>
        </ul>

        <h3 className="mt-6 text-lg sm:text-xl font-black tracking-tight text-white">B. Contact Information</h3>
        <ul className="mt-3 list-disc pl-6 space-y-2">
          <li>Email address</li>
          <li>Mobile number</li>
          <li>Billing address</li>
          <li>Residential address</li>
        </ul>

        <h3 className="mt-6 text-lg sm:text-xl font-black tracking-tight text-white">C. Booking & Travel Information</h3>
        <ul className="mt-3 list-disc pl-6 space-y-2">
          <li>Travel itinerary details</li>
          <li>Passport details (for international bookings)</li>
          <li>Visa information</li>
          <li>Hotel preferences</li>
          <li>Special service requests</li>
        </ul>

        <h3 className="mt-6 text-lg sm:text-xl font-black tracking-tight text-white">D. Payment Information</h3>
        <ul className="mt-3 list-disc pl-6 space-y-2">
          <li>Payment card details (processed through secure payment gateways)</li>
          <li>UPI details</li>
          <li>Bank account information (where required)</li>
        </ul>
        <p className="mt-4 text-white/70">
          Note: We do not store complete credit/debit card information on our servers.
        </p>

        <h3 className="mt-6 text-lg sm:text-xl font-black tracking-tight text-white">E. Sensitive Personal Data (if applicable)</h3>
        <p className="mt-3">
          Health information (only if required for travel insurance or special assistance). We collect such information
          only with lawful basis and consent where required.
        </p>
      </>
    ),
  },
  {
    id: "how-we-collect",
    title: "3. How We Collect Information",
    content: (
      <>
        <p>We collect information:</p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>When you register an account</li>
          <li>When you make a booking</li>
          <li>When you fill out forms on our website</li>
          <li>When you contact customer support</li>
          <li>From third-party partners (airlines, hotels, bus operators, payment gateways)</li>
        </ul>
      </>
    ),
  },
  {
    id: "purpose",
    title: "4. Purpose of Processing Personal Data",
    content: (
      <>
        <p>We use your data for:</p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Processing travel bookings</li>
          <li>Issuing tickets and confirmations</li>
          <li>Providing customer support</li>
          <li>Sending booking updates and alerts</li>
          <li>Processing payments and refunds</li>
          <li>Personalizing travel recommendations</li>
          <li>Marketing communications (with consent)</li>
          <li>Fraud detection and prevention</li>
          <li>Legal compliance</li>
        </ul>
        <p className="mt-4">We process personal data only for lawful purposes under applicable Indian laws.</p>
      </>
    ),
  },
  {
    id: "legal-basis",
    title: "5. Legal Basis for Processing (Under DPDP Act, 2023)",
    content: (
      <>
        <p>We process personal data based on:</p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Your explicit consent</li>
          <li>Performance of contract (travel booking services)</li>
          <li>Compliance with legal obligations</li>
          <li>Legitimate business purposes</li>
        </ul>
        <p className="mt-4">You may withdraw consent at any time (subject to legal and contractual limitations).</p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "6. Data Sharing & Disclosure",
    content: (
      <>
        <p>We may share your data with:</p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Airlines, hotels, bus operators, tour operators</li>
          <li>Payment gateway providers</li>
          <li>Insurance providers</li>
          <li>Visa processing agencies</li>
          <li>Technology service providers</li>
          <li>Government authorities (when legally required)</li>
        </ul>
        <p className="mt-4">We ensure third parties follow appropriate data protection standards. We do not sell your personal data.</p>
      </>
    ),
  },
  {
    id: "international-transfers",
    title: "7. International Data Transfers",
    content: (
      <>
        <p>
          Since travel services often involve international partners, your data may be transferred outside India. We
          ensure such transfers comply with applicable Indian laws and maintain adequate safeguards.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "8. Data Retention",
    content: (
      <>
        <p>We retain your personal data:</p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>For as long as necessary to fulfill booking services</li>
          <li>For legal, regulatory, tax, or audit requirements</li>
          <li>To resolve disputes</li>
        </ul>
        <p className="mt-4">After retention periods expire, data is securely deleted or anonymized.</p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "9. Cookies & Tracking Technologies",
    content: (
      <>
        <p>We use cookies to:</p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Improve website performance</li>
          <li>Analyze traffic</li>
          <li>Personalize user experience</li>
          <li>Deliver targeted advertisements</li>
        </ul>
        <p className="mt-4">You may manage cookie preferences through your browser settings.</p>
      </>
    ),
  },
  {
    id: "security",
    title: "10. Data Security Measures",
    content: (
      <>
        <p>We implement reasonable security practices including:</p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>SSL encryption</li>
          <li>Secure servers</li>
          <li>Access control mechanisms</li>
          <li>Regular security audits</li>
          <li>Encrypted payment processing</li>
          <li>Role-based access to customer data</li>
        </ul>
        <p className="mt-4">
          Despite best efforts, no system is completely secure. Users are encouraged to protect their login
          credentials.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    title: "11. Your Rights Under Indian Law (DPDP Act, 2023)",
    content: (
      <>
        <p>You have the right to:</p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of personal data</li>
          <li>Withdraw consent</li>
          <li>Nominate a representative</li>
          <li>Lodge a complaint with the Data Protection Board of India</li>
        </ul>
        <p className="mt-4">To exercise these rights, contact us at the details below.</p>
      </>
    ),
  },
  {
    id: "children",
    title: "12. Children’s Privacy",
    content: (
      <>
        <p>
          Our services are not directed toward children under 18 years of age without parental consent. If we become
          aware of unauthorized data collection from minors, we will take steps to delete such information.
        </p>
      </>
    ),
  },
  {
    id: "grievance",
    title: "13. Grievance Officer",
    content: (
      <>
        <p>In accordance with Indian IT Rules, the details of our Grievance Officer are:</p>
        <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
          <p className="text-white/90">
            <span className="font-black">Name:</span> Naveed
          </p>
          <p className="mt-1 text-white/90">
            <span className="font-black">Designation:</span> Grievance Officer
          </p>
          <p className="mt-1 text-white/90">
            <span className="font-black">Email:</span>{" "}
            <a className="underline underline-offset-4 decoration-white/20 hover:decoration-[#FFD93D]" href="mailto:customercare@happyfeetholidaysresorts.com">
              customercare@happyfeetholidaysresorts.com
            </a>
          </p>
        </div>
        <p className="mt-4">
          We will acknowledge grievances within 24–48 hours and aim to resolve them within 30 days.
        </p>
      </>
    ),
  },
  {
    id: "third-party-links",
    title: "14. Third-Party Links",
    content: (
      <>
        <p>
          Our website may contain links to third-party websites. We are not responsible for their privacy practices.
          Users are encouraged to review their policies separately.
        </p>
      </>
    ),
  },
  {
    id: "updates",
    title: "15. Updates to This Privacy Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy periodically. Updated versions will be posted on our website with revised
          effective dates. Continued use of our services after changes constitutes acceptance of the revised policy.
        </p>
      </>
    ),
  },
  {
    id: "contact-us",
    title: "16. Contact Us",
    content: (
      <>
        <p>For any privacy-related questions, contact:</p>
        <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
          <p className="text-white/90 font-black">Happy Feet Holidays & Resorts</p>
          <p className="mt-1 text-white/90">
            <span className="font-black">Email:</span>{" "}
            <a className="underline underline-offset-4 decoration-white/20 hover:decoration-[#FFD93D]" href="mailto:info@happyfeetholidaysresorts.com">
              info@happyfeetholidaysresorts.com
            </a>
          </p>
          <p className="mt-1 text-white/90">
            <span className="font-black">Website:</span>{" "}
            <a
              className="underline underline-offset-4 decoration-white/20 hover:decoration-[#FFD93D]"
              href="https://www.happyfeetholidaysresorts.com"
              target="_blank"
              rel="noreferrer"
            >
              www.happyfeetholidaysresorts.com
            </a>
          </p>
        </div>
      </>
    ),
  },
]

export default function PrivacyPage() {
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
              <ShieldCheck className="h-4 w-4 text-[#FFD93D]" />
              <span className="text-xs font-black tracking-[0.28em] text-white/90 uppercase">Privacy</span>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight leading-[0.95]">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
              Happy Feet Holidays & Resorts — clear data care with a concierge-first approach.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-black tracking-[0.18em] uppercase text-white/90 hover:bg-white hover:text-black transition-colors"
              >
                <Sparkles className="h-4 w-4" />
                Contact Us
              </Link>
              <a
                href="mailto:info@happyfeetholidaysresorts.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B35] via-[#FFD93D] to-[#FF6B35] px-5 py-3 text-sm font-black tracking-[0.18em] uppercase text-black shadow-[0_14px_60px_rgba(255,217,61,0.14)]"
              >
                Email Support
              </a>
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
                    <p className="text-xs font-black tracking-[0.22em] uppercase text-[#FFD93D]">Compliance</p>
                    <p className="mt-2 text-sm text-white/75 leading-relaxed">
                      Prepared in accordance with the Digital Personal Data Protection Act, 2023.
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
                            <ShieldCheck className="h-4 w-4 text-white/90" />
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
                      For privacy-related questions, reach us at{" "}
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
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-black tracking-[0.18em] uppercase text-white/90 hover:bg-white hover:text-black transition-colors"
                      >
                        Contact Page
                      </Link>
                      <a
                        href="mailto:customercare@happyfeetholidaysresorts.com"
                        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF6B35] via-[#FFD93D] to-[#FF6B35] px-5 py-3 text-sm font-black tracking-[0.18em] uppercase text-black shadow-[0_14px_60px_rgba(255,217,61,0.14)]"
                      >
                        Grievance Email
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
