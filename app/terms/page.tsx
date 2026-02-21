import Link from "next/link"
import { FileText, Sparkles } from "lucide-react"

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: (
      <>
        <p>
          Welcome to Happy Feet Holidays & Resorts (“Happy Feet”, “Company”, “we”, “our”, or “us”). These Terms of
          Service (“Terms”) govern your access to and use of:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Our website</li>
          <li>Mobile applications (if any)</li>
          <li>Travel booking services (flights, hotels, buses, holiday packages, resorts)</li>
          <li>Customer support and related services</li>
        </ul>
        <p className="mt-4">
          By accessing or using our services, you agree to be bound by these Terms. If you do not agree, please
          discontinue use of our services.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "2. Eligibility",
    content: (
      <>
        <p>You must:</p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Be at least 18 years old</li>
          <li>Have the legal capacity to enter into binding contracts</li>
          <li>Provide accurate and complete information</li>
        </ul>
        <p className="mt-4">If booking on behalf of others, you confirm you have authority to do so.</p>
      </>
    ),
  },
  {
    id: "services",
    title: "3. Services Offered",
    content: (
      <>
        <p>Happy Feet acts as:</p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>An intermediary between customers and travel service providers</li>
          <li>
            A facilitator for booking flights, hotels, buses, holiday packages, resorts, and related services
          </li>
        </ul>
        <p className="mt-4">
          We do not operate airlines, hotels, buses, or resorts unless explicitly stated. All bookings are subject to
          availability and third-party terms and conditions.
        </p>
      </>
    ),
  },
  {
    id: "accounts",
    title: "4. User Accounts",
    content: (
      <>
        <p>To use certain services, you may be required to register with us. You agree to:</p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Provide accurate information</li>
          <li>Accept responsibility for activities as per your package or membership</li>
        </ul>
        <p className="mt-4">We reserve the right to suspend or terminate accounts for misuse.</p>
      </>
    ),
  },
  {
    id: "booking",
    title: "5. Booking & Confirmation",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>Bookings are confirmed only after full payment and confirmation email/SMS.</li>
          <li>Prices are dynamic and subject to change until payment is completed.</li>
          <li>
            Errors in pricing due to technical issues may be corrected, and bookings may be cancelled with refund.
          </li>
          <li>Travel itineraries must be reviewed carefully by the user.</li>
        </ul>
      </>
    ),
  },
  {
    id: "payments",
    title: "6. Pricing & Payments",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>All prices are displayed in Indian Rupees (INR) unless stated otherwise.</li>
          <li>Taxes, service fees, and convenience charges may apply.</li>
          <li>
            Payments must be made via approved payment methods (UPI, cards, net banking, wallets).
          </li>
        </ul>
        <p className="mt-4">We use secure payment gateways and do not store full card details.</p>
      </>
    ),
  },
  {
    id: "cancellations",
    title: "7. Cancellation & Refund Policy",
    content: (
      <>
        <p>Cancellation and refund policies vary depending on:</p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Airline</li>
          <li>Hotel</li>
          <li>Bus operator</li>
          <li>Tour package provider</li>
        </ul>
        <p className="mt-4">Refunds are processed:</p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>As per the supplier’s policy</li>
          <li>After deducting applicable service charges</li>
          <li>Within reasonable timelines (typically 7–14 working days)</li>
        </ul>
        <p className="mt-4">Some bookings may be non-refundable. Full refund policies are available on respective booking pages.</p>
      </>
    ),
  },
  {
    id: "changes",
    title: "8. Changes & Modifications",
    content: (
      <>
        <p>Changes to bookings (date change, passenger name correction, etc.):</p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Are subject to supplier policies</li>
          <li>May incur additional charges</li>
        </ul>
        <p className="mt-4">Happy Feet is not responsible for fare differences imposed by service providers.</p>
      </>
    ),
  },
  {
    id: "documentation",
    title: "9. Travel Documentation & Responsibilities",
    content: (
      <>
        <p>Users are responsible for:</p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Valid passport and visa</li>
          <li>Required travel permits</li>
          <li>Vaccination requirements</li>
          <li>Government travel advisories</li>
        </ul>
        <p className="mt-4">Happy Feet is not liable for denied boarding, entry refusal, or document-related issues.</p>
      </>
    ),
  },
  {
    id: "liability",
    title: "10. Limitation of Liability",
    content: (
      <>
        <p>Happy Feet acts only as a booking intermediary. We are not liable for:</p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Flight delays or cancellations</li>
          <li>Hotel overbooking</li>
          <li>Bus breakdowns</li>
          <li>Natural disasters</li>
          <li>Political unrest</li>
          <li>Force majeure events</li>
          <li>Service provider negligence</li>
        </ul>
        <p className="mt-4">Our maximum liability shall not exceed the service fee charged by us for the booking.</p>
      </>
    ),
  },
  {
    id: "force-majeure",
    title: "11. Force Majeure",
    content: (
      <>
        <p>
          We shall not be liable for failure to perform obligations due to events beyond reasonable control, including:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Natural calamities</li>
          <li>Government restrictions</li>
          <li>Pandemic situations</li>
          <li>Strikes or industrial disputes</li>
        </ul>
      </>
    ),
  },
  {
    id: "conduct",
    title: "12. User Conduct",
    content: (
      <>
        <p>Users agree not to:</p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Use the services for fraudulent bookings</li>
          <li>Provide false information</li>
          <li>Interfere with website functionality</li>
          <li>Attempt unauthorized access</li>
          <li>Use automated bots or scraping tools</li>
        </ul>
        <p className="mt-4">Violation may result in legal action.</p>
      </>
    ),
  },
  {
    id: "ip",
    title: "13. Intellectual Property",
    content: (
      <>
        <p>All content on the website including:</p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Logos, Text, Graphics, Software, and Branding elements</li>
        </ul>
        <p className="mt-4">
          Are owned by Happy Feet or licensed partners and are protected under applicable intellectual property laws.
          Unauthorized use is prohibited.
        </p>
      </>
    ),
  },
  {
    id: "privacy",
    title: "14. Privacy",
    content: (
      <>
        <p>
          Your use of our services is also governed by our Privacy Policy. We process personal data in accordance with
          Indian law including the Digital Personal Data Protection Act, 2023.
        </p>
      </>
    ),
  },
  {
    id: "indemnification",
    title: "15. Indemnification",
    content: (
      <>
        <p>
          You agree to indemnify and hold harmless Happy Feet from claims arising from your misuse of services,
          violation of these Terms, or third-party disputes related to your bookings.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    title: "16. Suspension & Termination",
    content: (
      <>
        <p>We may suspend or terminate access:</p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>For breach of Terms</li>
          <li>For suspected fraud</li>
          <li>For legal compliance</li>
        </ul>
        <p className="mt-4">Termination does not affect completed bookings subject to supplier policies.</p>
      </>
    ),
  },
  {
    id: "jurisdiction",
    title: "17. Governing Law & Jurisdiction",
    content: (
      <>
        <p>
          These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of
          courts located in: Bengaluru.
        </p>
      </>
    ),
  },
  {
    id: "dispute-resolution",
    title: "18. Dispute Resolution",
    content: (
      <>
        <p>In case of dispute:</p>
        <ol className="mt-4 list-decimal pl-6 space-y-2">
          <li>Customers should first contact customer support.</li>
          <li>
            Unresolved disputes may be referred to arbitration under the Arbitration and Conciliation Act, 1996.
          </li>
        </ol>
        <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
          <p className="text-white/90">
            <span className="font-black">Arbitration venue:</span> Bengaluru
          </p>
          <p className="mt-1 text-white/90">
            <span className="font-black">Language:</span> English
          </p>
        </div>
      </>
    ),
  },
  {
    id: "grievance",
    title: "19. Grievance Officer",
    content: (
      <>
        <p>In accordance with Indian IT Rules:</p>
        <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
          <p className="text-white/90">
            <span className="font-black">Name:</span> Naveed
          </p>
          <p className="mt-1 text-white/90">
            <span className="font-black">Designation:</span> Grievance Officer
          </p>
          <p className="mt-1 text-white/90">
            <span className="font-black">Email:</span>{" "}
            <a
              className="underline underline-offset-4 decoration-white/20 hover:decoration-[#FFD93D]"
              href="mailto:customercare@happyfeetholidaysresorts.com"
            >
              customercare@happyfeetholidaysresorts.com
            </a>
          </p>
        </div>
        <p className="mt-4">We aim to respond within 48 hours and resolve complaints within 30 days.</p>
      </>
    ),
  },
  {
    id: "amendments",
    title: "20. Amendments",
    content: (
      <>
        <p>
          We reserve the right to modify these Terms at any time. Updated Terms will be posted on our website with a
          revised effective date. Continued use of services indicates acceptance.
        </p>
      </>
    ),
  },
]

export default function TermsPage() {
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
              <FileText className="h-4 w-4 text-[#FFD93D]" />
              <span className="text-xs font-black tracking-[0.28em] text-white/90 uppercase">Terms</span>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight leading-[0.95]">
              Terms of Service
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
              Happy Feet Holidays & Resorts — premium experiences, clear expectations.
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
                    <p className="text-xs font-black tracking-[0.22em] uppercase text-[#FFD93D]">Quick links</p>
                    <div className="mt-3 space-y-2">
                      <Link
                        href="/privacy"
                        className="block text-sm text-white/80 underline underline-offset-4 decoration-white/15 hover:decoration-[#FFD93D]"
                      >
                        Privacy Policy
                      </Link>
                      <Link
                        href="/contact"
                        className="block text-sm text-white/80 underline underline-offset-4 decoration-white/15 hover:decoration-[#FFD93D]"
                      >
                        Contact
                      </Link>
                    </div>
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
                            <FileText className="h-4 w-4 text-white/90" />
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
                      If you have questions about these Terms, contact us at{" "}
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
                        href="/privacy"
                        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF6B35] via-[#FFD93D] to-[#FF6B35] px-5 py-3 text-sm font-black tracking-[0.18em] uppercase text-black shadow-[0_14px_60px_rgba(255,217,61,0.14)]"
                      >
                        View Privacy Policy
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
