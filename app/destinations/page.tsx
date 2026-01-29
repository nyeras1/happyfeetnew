"use client"

import { useEffect, useMemo, useRef, useState, type FormEvent } from "react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Sparkles, Send } from "lucide-react"
import { TRAVEL_PACKAGES } from "@/lib/travel-packages"

type TribeId = "solo" | "couple" | "family" | "friends"

type TribeRecommendation = {
  title: string
  note: string
}

export default function DestinationsPage() {
  const packages = TRAVEL_PACKAGES

  const searchParams = useSearchParams()

  const tribeCards = useMemo(
    () =>
      [
        { id: "solo" as const, title: "Solo", image: "/solo-travel.avif" },
        { id: "couple" as const, title: "Couple", image: "/couple%20travel.jpg" },
        { id: "family" as const, title: "Family", image: "/family%20travel.avif" },
        { id: "friends" as const, title: "Friends", image: "/friends%20travel.jpeg" },
      ] as const,
    [],
  )

  const [activeTribeId, setActiveTribeId] = useState<TribeId>("solo")
  const [selectedTribeId, setSelectedTribeId] = useState<TribeId>("solo")
  const [revealNonce, setRevealNonce] = useState(0)
  const [isRevealing, setIsRevealing] = useState(false)
  const resultsRef = useRef<HTMLDivElement | null>(null)

  const revealAndScrollToResults = () => {
    setRevealNonce((n) => n + 1)
    setIsRevealing(true)
    window.setTimeout(() => setIsRevealing(false), 850)
    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const tribeContent = useMemo(
    (): Record<TribeId, { bestFor: string; recommended: TribeRecommendation[] }> => ({
      solo: {
        bestFor: "Freedom, self-discovery & flexible exploration",
        recommended: [
          { title: "Bhutan", note: "Spiritual journey, solo-friendly hikes & peaceful atmosphere" },
          { title: "Azerbaijan", note: "Safe cities, culture-rich experiences, easy exploration" },
        ],
      },
      couple: {
        bestFor: "Romance, slow travel & scenic moments",
        recommended: [
          { title: "Azerbaijan", note: "Romantic city walks in Baku & scenic Gabala" },
          { title: "Azerbaijan + Georgia", note: "Cozy cafés, mountain views & cultural charm" },
          { title: "Bhutan", note: "Serene landscapes & meaningful shared experiences" },
        ],
      },
      family: {
        bestFor: "Comfort, safety & memorable bonding",
        recommended: [
          { title: "Azerbaijan", note: "Family-friendly cities, easy sightseeing" },
          { title: "Azerbaijan + Georgia", note: "Balanced mix of seenature & culture" },
          { title: "Bhutan", note: "Calm environment, educational & cultural value" },
        ],
      },
      friends: {
        bestFor: "Fun, energy & shared adventures",
        recommended: [
          { title: "Azerbaijan", note: "Nightlife, city vibes & group-friendly tours" },
          { title: "Azerbaijan + Georgia", note: "Road trips, nightlife & mountain adventures" },
        ],
      },
    }),
    [],
  )

  const filteredPackages = useMemo(() => {
    const allowed = new Set(tribeContent[selectedTribeId].recommended.map((r) => r.title))
    return packages.filter((p) => allowed.has(p.title))
  }, [packages, selectedTribeId, tribeContent])

  const [selectedPackage, setSelectedPackage] = useState(`${packages[0]?.title ?? "Package"} – ${packages[0]?.duration ?? ""}`)

  useEffect(() => {
    const pkgFromQuery = searchParams.get("package")
    if (!pkgFromQuery) return

    const normalizedQuery = decodeURIComponent(pkgFromQuery)
    const match = packages.find((p) => `${p.title} – ${p.duration}` === normalizedQuery)

    if (match) {
      const selected = `${match.title} – ${match.duration}`
      setSelectedPackage(selected)
      requestAnimationFrame(() => {
        document.getElementById("package-inquiry")?.scrollIntoView({ behavior: "smooth", block: "start" })
      })
    }
  }, [packages, searchParams])

  const handleRequestDetails = (pkg: { title: string; duration: string }) => {
    setSelectedPackage(`${pkg.title} – ${pkg.duration}`)
    document.getElementById("package-inquiry")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handleInquirySubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name = String(fd.get("name") || "")
    const email = String(fd.get("email") || "")
    const phone = String(fd.get("phone") || "")
    const month = String(fd.get("month") || "")
    const pkg = String(fd.get("package") || "")
    const message = String(fd.get("message") || "")

    const subject = encodeURIComponent(`Package Inquiry – ${pkg}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPreferred Month: ${month}\nPackage: ${pkg}\n\nMessage:\n${message}`,
    )

    window.location.href = `mailto:concierge@happyfeet.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen pt-28 sm:pt-32 pb-20 sm:pb-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <section className="mb-24 md:mb-28">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism border border-white/10">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-xs font-black tracking-[0.3em] text-accent uppercase">Choose Your Travel Tribe</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-high-contrast">Choose Your Travel Tribe</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Pick your vibe — we’ll tailor hotels, pacing, and experiences to match.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-10 left-8 w-64 h-64 bg-accent rounded-full blur-3xl animate-float" />
              <div className="absolute -bottom-10 right-8 w-64 h-64 bg-primary rounded-full blur-3xl animate-float-slow" />
            </div>

            <div className="relative rounded-[3rem] border border-white/10 glass-morphism-strong shadow-3d p-6 md:p-10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20" />

              <div
                className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
                onMouseLeave={() => setActiveTribeId(selectedTribeId)}
              >
                {tribeCards.map((card) => {
                  const isActive = activeTribeId === card.id
                  const isSelected = selectedTribeId === card.id
                  return (
                    <button
                      key={card.id}
                      type="button"
                      onClick={() => {
                        setSelectedTribeId(card.id)
                        setActiveTribeId(card.id)
                        revealAndScrollToResults()
                      }}
                      onMouseEnter={() => setActiveTribeId(card.id)}
                      onFocus={() => setActiveTribeId(card.id)}
                      className={
                        "group relative rounded-[2.5rem] p-6 sm:p-8 md:p-10 text-left overflow-hidden transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-accent " +
                        (isActive
                          ? "shadow-3d-hover border-2 border-accent/40 bg-white/10 scale-[1.02]"
                          : "shadow-3d border-2 border-white/10 bg-white/5 hover:bg-white/10 hover:-translate-y-1")
                      }
                    >
                      <Image
                        src={card.image}
                        alt={`${card.title} travel`}
                        fill
                        className="object-cover opacity-85 transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
                      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/30 opacity-80" />
                      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-accent/10 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                      <div
                        className={
                          "absolute top-6 right-6 z-10 px-4 py-2 rounded-full border text-xs font-black tracking-[0.2em] uppercase transition-all duration-500 " +
                          (isSelected
                            ? "bg-accent/20 border-accent/30 text-accent"
                            : "bg-white/10 border-white/20 text-white/70")
                        }
                      >
                        {isSelected ? "Selected" : "Select"}
                      </div>

                      <div className="relative">
                        <p className="text-xs font-black tracking-[0.35em] uppercase text-white/70 mb-3">Travel Tribe</p>
                        <h4 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white text-shadow-strong">{card.title}</h4>
                        <p className="mt-4 text-sm md:text-base text-white/80 leading-relaxed max-w-sm">
                          {card.id === "solo" && "Freedom to explore, flexible plans, and personal bucket-list moments."}
                          {card.id === "couple" && "Romantic stays, scenic dinners, and slow, beautiful days together."}
                          {card.id === "family" && "Comfort-first stays, kid-friendly pacing, and shared memories."}
                          {card.id === "friends" && "High-energy itineraries, nightlife, and epic group experiences."}
                        </p>
                      </div>
                    </button>
                  )
                })}

                <div className="pointer-events-none absolute inset-0 hidden sm:block">
                  <div
                    className="absolute w-14 h-14 rounded-full border border-white/20 bg-white/10 backdrop-blur-2xl shadow-3d transition-all duration-500"
                    style={{
                      left: "50%",
                      top: "50%",
                      opacity: 1,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="absolute inset-2 rounded-full bg-accent/30" />
                    <div className="absolute inset-[18px] rounded-full bg-accent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-28">
          <div className="text-center space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism border border-white/10">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-xs font-black tracking-[0.3em] text-accent uppercase">Hot Picks</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold">Signature Packages</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Curated highlights only. For exact itinerary and best pricing, request details.
            </p>
          </div>

          <div ref={resultsRef} className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {filteredPackages.map((pkg, index) => (
              <div
                key={`${pkg.title}-${pkg.duration}-${revealNonce}`}
                className={
                  "relative rounded-[3rem] overflow-hidden shadow-3d hover:shadow-3d-hover transition-all duration-700 group hover:scale-[1.02] hover:-translate-y-2 " +
                  (isRevealing ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0")
                }
                style={{
                  transitionProperty: "transform, opacity, box-shadow",
                  transitionTimingFunction: "cubic-bezier(0.2, 0.9, 0.2, 1)",
                  transitionDuration: "700ms",
                  transitionDelay: `${index * 90}ms`,
                }}
              >
                <div className="relative h-[420px]">
                  <Image
                    src={pkg.image}
                    alt={`${pkg.title} package`}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

                  <div className="absolute top-6 left-6 z-20">
                    <div className="px-4 py-2 rounded-full glass-morphism-strong border-2 border-white/30 text-white text-xs font-bold tracking-[0.2em] uppercase">
                      {pkg.duration}
                    </div>
                  </div>
                  <div className="absolute top-6 right-6 z-20">
                    <div className="px-4 py-2 rounded-full bg-accent/20 backdrop-blur-md border border-accent/30 text-accent text-xs font-bold tracking-[0.2em] uppercase">
                      Limited slots
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                  <h4 className="text-white text-3xl sm:text-4xl font-serif font-bold mb-3 leading-tight">{pkg.title}</h4>
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-5 max-w-xl">{pkg.tagline}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {pkg.highlights.map((h) => (
                      <div
                        key={h}
                        className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-semibold"
                      >
                        {h}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      className="h-14 rounded-2xl bg-white text-black font-bold uppercase tracking-wider hover:bg-accent hover:text-accent-foreground transition-all shadow-lg"
                      onClick={() => handleRequestDetails(pkg)}
                      type="button"
                    >
                      View Full Itinerary
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="h-14 rounded-2xl bg-transparent border-white/30 text-white hover:bg-white hover:text-background transition-all"
                      asChild
                    >
                      <a href="/contact">Talk to Expert</a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="package-inquiry" className="mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-5">
              <div className="glass-morphism-strong p-6 sm:p-8 md:p-10 rounded-[3rem] shadow-3d border-2 border-white/10 space-y-6 h-full">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism border border-white/10 w-fit">
                  <Send className="h-4 w-4 text-accent" />
                  <span className="text-xs font-black tracking-[0.3em] text-accent uppercase">Quick Inquiry</span>
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-high-contrast leading-tight">
                  Get pricing & availability
                </h3>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  Share your preferred package and travel month. We’ll call you back with the best options, inclusions,
                  and special deals.
                </p>
                <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-black mb-2">Selected</p>
                  <p className="text-xl font-bold text-high-contrast mb-4">{selectedPackage}</p>

                  {(() => {
                    const selectedPkg = packages.find((p) => `${p.title} – ${p.duration}` === selectedPackage)
                    return selectedPkg?.itinerary ? (
                      <div className="space-y-3">
                        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-black">
                          Detailed Itinerary
                        </p>
                        <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
                          {selectedPkg.itinerary.map((day, index) => (
                            <div key={index} className="flex gap-3 items-start">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                                <span className="text-xs font-bold text-accent">{index + 1}</span>
                              </div>
                              <p className="text-sm text-high-contrast leading-relaxed">{day}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null
                  })()}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="glass-morphism-strong p-6 sm:p-8 md:p-14 rounded-[4rem] shadow-3d border-2 border-white/10">
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-high-contrast mb-10">Request Call Back</h3>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handleInquirySubmit}>
                  <div className="space-y-3">
                    <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-2">
                      Full Name
                    </label>
                    <Input
                      name="name"
                      required
                      placeholder="Enter your name"
                      className="rounded-2xl h-14 sm:h-16 bg-background/50 border-white/20 focus:border-accent text-base sm:text-lg"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-2">
                      Phone Number
                    </label>
                    <Input
                      name="phone"
                      required
                      placeholder="Your phone number"
                      className="rounded-2xl h-14 sm:h-16 bg-background/50 border-white/20 focus:border-accent text-base sm:text-lg"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-2">
                      Email Address
                    </label>
                    <Input
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="rounded-2xl h-14 sm:h-16 bg-background/50 border-white/20 focus:border-accent text-base sm:text-lg"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-2">
                      Travel Month
                    </label>
                    <Input
                      name="month"
                      placeholder="e.g., March 2026"
                      className="rounded-2xl h-14 sm:h-16 bg-background/50 border-white/20 focus:border-accent text-base sm:text-lg"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-2">Package</label>
                    <Input
                      name="package"
                      value={selectedPackage}
                      onChange={(e) => setSelectedPackage(e.target.value)}
                      className="rounded-2xl h-14 sm:h-16 bg-background/50 border-white/20 focus:border-accent text-base sm:text-lg"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-2">
                      What you want
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Budget range, number of travelers, hotel type, or any preferences..."
                      className="rounded-3xl min-h-[170px] bg-background/50 border-white/20 focus:border-accent text-base sm:text-lg p-6"
                    />
                  </div>
                  <div className="md:col-span-2 pt-2">
                    <Button className="w-full h-18 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full text-xl font-black uppercase tracking-[0.2em] shadow-3d hover:shadow-3d-hover hover:scale-[1.02] transition-all py-8">
                      Get Details & Pricing
                      <Send className="ml-3 h-6 w-6" />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
