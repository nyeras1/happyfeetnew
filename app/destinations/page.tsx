"use client"

import { useEffect, useMemo, useRef, useState, type FormEvent } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, CalendarDays, ShieldCheck, Star, X } from "lucide-react"
import { TRAVEL_PACKAGES } from "@/lib/travel-packages"
import { destinations, slugify, type Place, type TravelScope, type TribeId } from "@/lib/destinations-data"

export default function DestinationsPage() {
  const packages = TRAVEL_PACKAGES
  const [activeTribeId, setActiveTribeId] = useState<TribeId>("solo")
  const [selectedTribeId, setSelectedTribeId] = useState<TribeId>("solo")
  const [scope, setScope] = useState<TravelScope>("domestic")
  const [selectedRegion, setSelectedRegion] = useState<string>("Karnataka")
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null)
  const [leadOpen, setLeadOpen] = useState(false)
  const [itineraryOpen, setItineraryOpen] = useState(false)
  const [exitOfferOpen, setExitOfferOpen] = useState(false)
  const [travelDate, setTravelDate] = useState(() => new Date().toISOString().split("T")[0])
  const tribePicksRef = useRef<HTMLDivElement | null>(null)
  const destinationsListRef = useRef<HTMLElement | null>(null)
  const travelDateInputRef = useRef<HTMLInputElement | null>(null)

  const tribeCards = useMemo(
    () =>
      [
        { id: "solo" as const, title: "Solo", image: "/canvas%20images/solo%20tra.png" },
        { id: "couple" as const, title: "Couple", image: "/canvas%20images/couples.png" },
        { id: "family" as const, title: "Family", image: "/canvas%20images/family.png" },
        { id: "friends" as const, title: "Friends & Colleagues", image: "/canvas%20images/friends.png" },
      ] as const,
    [],
  )
  const tribeExperiences = useMemo(
    () => ({
      solo: [
        {
          title: "Leh - Ladakh",
          hook: "Standing at 18,000 ft changes your perspective.",
          image: "/canvas%20images/ladakh.webp",
        },
        {
          title: "Bali",
          hook: "Solo retreat into rice terraces & temples - that’s freedom.",
          image: "/canvas%20images/Bali-Solo-traveler.webp",
        },
        {
          title: "Meghalaya",
          hook: "Because some things can only be reached on foot.",
          image: "/canvas%20images/Meghalaya%20.jpg",
        },
      ],
      couple: [
        {
          title: "Maldives Overwater Villa",
          hook: "Waking up to a turquoise lagoon with no agenda, just the two of you.",
          image: "/canvas%20images/Maldives.jpeg",
        },
        {
          title: "Santorini",
          hook: "Sunset cliffs, white lanes, and timeless couple moments.",
          image: "/canvas%20images/santorini.jpg",
        },
      ],
      family: [
        {
          title: "African Wildlife Safari",
          hook: "Watch your child’s face when they spot a tiger in real.",
          image: "/canvas%20images/Safari.jpg",
        },
        {
          title: "Munnar Tea Gardens",
          hook: "Sleep in a treehouse, enjoy fresh green tea and watch elephants pass by.",
          image: "/canvas%20images/munnar%20tea.jpg",
        },
      ],
      friends: [
        {
          title: "Goa Beach Retreats",
          hook: "Extraordinary team deserves extraordinary rewards.",
          image: "/canvas%20images/Goa%20Beach%20Retreats%20.webp",
        },
        {
          title: "Adventure Day Outing",
          hook: "When teams play together, they work better together.",
          image: "/canvas%20images/Adventure%20Day%20Outing.jpeg",
        },
      ],
    }),
    [],
  )
  const tribeLabel = useMemo(
    () => ({
      solo: "Solo",
      couple: "Couple",
      family: "Family",
      friends: "Friends & Colleagues",
    }),
    [],
  )

  const regions = useMemo(() => Object.keys(destinations[scope]), [scope])
  const activeRegion = useMemo(() => destinations[scope][selectedRegion], [scope, selectedRegion])
  const topPicks = useMemo(() => activeRegion?.places ?? [], [activeRegion])
  const filteredTopPicks = useMemo(() => {
    const tribeTypePreference: Record<TribeId, string[]> = {
      solo: ["Adventure", "Nature", "Culture", "City", "Heritage", "Snow"],
      couple: ["Romance", "Luxury", "Beach", "Lakes", "Leisure", "Island"],
      family: ["Family", "Leisure", "Wildlife", "Nature", "City", "Backwaters"],
      friends: ["Nightlife", "Adventure", "Beach", "City", "Island", "Nature"],
    }

    const preferredTypes = tribeTypePreference[selectedTribeId]
    const matchingPlaces = topPicks.filter((place) => preferredTypes.includes(place.type))

    return matchingPlaces.length > 0 ? matchingPlaces : topPicks
  }, [selectedTribeId, topPicks])

  const packageForModal = useMemo(() => {
    if (!selectedPlace) return packages[0]
    return packages.find((pkg) => pkg.title.toLowerCase().includes(selectedPlace.name.toLowerCase())) ?? packages[0]
  }, [selectedPlace, packages])
  const modalDuration = selectedPlace?.duration ?? packageForModal?.duration ?? "4N/5D"
  const modalInclusions = selectedPlace?.inclusions ?? ["Curated stays", "Airport transfers", "Daily breakfast"]
  const modalItinerary =
    selectedPlace?.itinerary ??
    packageForModal?.itinerary ?? [
      "Day 1: Arrival and relaxation",
      "Day 2: Local sightseeing",
      "Day 3: Signature experiences",
      "Day 4: Leisure and departure prep",
      "Day 5: Departure",
    ]
  const modalExclusions = selectedPlace?.exclusions ?? ["Flights and visa", "Personal expenses", "Early check-in / late check-out"]
  const modalHotelOptions = selectedPlace?.hotelOptions ?? ["Option 1", "Option 2", "Option 3"]

  useEffect(() => {
    setSelectedRegion(Object.keys(destinations[scope])[0])
  }, [scope])

  useEffect(() => {
    const onMouseOut = (event: MouseEvent) => {
      if (event.clientY <= 0 && !exitOfferOpen) setExitOfferOpen(true)
    }
    window.addEventListener("mouseout", onMouseOut)
    return () => window.removeEventListener("mouseout", onMouseOut)
  }, [exitOfferOpen])

  const handleLeadSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const text = encodeURIComponent(
      `Hi Happy Feet Holidays, I want my plan.\nName: ${String(fd.get("name") ?? "")}\nPhone: ${String(fd.get("phone") ?? "")}\nTravel Month: ${String(fd.get("month") ?? "")}\nTravelers: ${String(fd.get("tribe") ?? selectedTribeId)}\nTravel Days: ${String(fd.get("days") ?? "")}\nPackage: ${selectedRegion} - ${selectedPlace?.name ?? "Custom Plan"}\nNotes: ${String(fd.get("notes") ?? "")}`,
    )
    window.open(`https://wa.me/919999999999?text=${text}`, "_blank")
    setLeadOpen(false)
  }

  return (
    <div className="min-h-screen bg-black pb-28 pt-56 font-['Poppins'] text-white sm:pt-32">
      <div className="container mx-auto px-4">
        <section className="mb-24 md:mb-28">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#f8b67d]">Step 1 of 5</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-white md:text-5xl">Who are you traveling with?</h2>
            <p className="mt-3 text-sm text-slate-300 md:text-base">
              Choose your travel tribe below — solo, couple, family, or friends & colleagues — so we can match hotels, pacing, and destination ideas to your group.
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl">
            <div className="absolute inset-0 opacity-10">
              <div className="animate-float absolute -top-10 left-8 h-64 w-64 rounded-full bg-accent blur-3xl" />
              <div className="animate-float-slow absolute -bottom-10 right-8 h-64 w-64 rounded-full bg-primary blur-3xl" />
            </div>

            <div className="glass-morphism-strong shadow-3d relative overflow-hidden rounded-[3rem] border border-white/10 p-6 md:p-10">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20" />
              <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8" onMouseLeave={() => setActiveTribeId(selectedTribeId)}>
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
                        window.setTimeout(() => {
                          tribePicksRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
                        }, 120)
                      }}
                      onMouseEnter={() => setActiveTribeId(card.id)}
                      onFocus={() => setActiveTribeId(card.id)}
                      className={
                        "group relative overflow-hidden rounded-[2.5rem] p-6 text-left transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-accent sm:p-8 md:p-10 " +
                        (isActive ? "scale-[1.02] border-2 border-accent/40 bg-white/10 shadow-3d-hover" : "border-2 border-white/10 bg-white/5 shadow-3d hover:-translate-y-1 hover:bg-white/10")
                      }
                    >
                      <Image src={card.image} alt={`${card.title} travel`} fill className="object-cover opacity-85 transition-transform duration-1000 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
                      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/30 opacity-80" />
                      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                      <div className={"absolute right-6 top-6 z-10 rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 " + (isSelected ? "border-accent/30 bg-accent/20 text-accent" : "border-white/20 bg-white/10 text-white/70")}>
                        {isSelected ? "Selected" : "Select"}
                      </div>

                      <div className="relative">
                        <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-white/70">Travel Tribe</p>
                        <h4 className="text-shadow-strong text-2xl font-bold text-white sm:text-3xl md:text-4xl">{card.title}</h4>
                        <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80 md:text-base">
                          {card.id === "solo" && "Freedom to explore, flexible journeys, and personal bucket-list moments."}
                          {card.id === "couple" && "Romantic stays, scenic dinners, and slow, beautiful days together."}
                          {card.id === "family" && "Comfort-first stays, kid-friendly pacing, and shared memories."}
                          {card.id === "friends" && "Retreats and outings designed for stronger teams and shared wins."}
                        </p>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          <div ref={tribePicksRef} className="mx-auto mt-10 max-w-6xl scroll-mt-28">
            <div className="mb-5 flex items-center justify-between">
              <h4 className="text-xl font-bold md:text-2xl">
                {tribeCards.find((card) => card.id === selectedTribeId)?.title} picks
              </h4>
              <p className="text-xs uppercase tracking-[0.2em] text-[#f8b67d]">Handpicked for your vibe</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {tribeExperiences[selectedTribeId].map((item) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setLeadOpen(true)}
                  className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 text-left transition hover:border-[#f27405]/45 hover:bg-white/10"
                >
                  <div className="relative h-52">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <p className="absolute bottom-4 left-4 text-xl font-bold">{item.title}</p>
                  </div>
                  <p className="p-5 text-sm text-slate-300">{item.hook}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold md:text-5xl">Where do you want to go?</h2>
            <p className="mt-2 text-sm text-slate-300">Step 2 of 5 - pick your travel scope</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <button type="button" onClick={() => setScope("domestic")} className={`rounded-3xl border p-6 text-left transition ${scope === "domestic" ? "border-[#f27405] bg-[#f27405]/15" : "border-white/15 bg-white/5"}`}>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-300">Domestic</p>
              <p className="mt-2 text-2xl font-bold">India 🇮🇳</p>
              <p className="mt-2 text-sm text-slate-300">Hill stations, beaches, wildlife and heritage circuits.</p>
            </button>
            <button type="button" onClick={() => setScope("international")} className={`rounded-3xl border p-6 text-left transition ${scope === "international" ? "border-[#f27405] bg-[#f27405]/15" : "border-white/15 bg-white/5"}`}>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-300">International</p>
              <p className="mt-2 text-2xl font-bold">Global 🌍</p>
              <p className="mt-2 text-sm text-slate-300">Island escapes, city breaks, and iconic world destinations.</p>
            </button>
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold md:text-4xl">{scope === "domestic" ? "Choose your state" : "Choose your country"}</h3>
              <p className="text-sm text-slate-300">Step 3 of 5 - then we will show top places</p>
            </div>
            <p className="hidden rounded-full border border-[#f27405]/40 bg-[#f27405]/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#f6b57d] md:block">Limited seasonal slots</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((region) => (
              <button
                key={region}
                type="button"
                onClick={() => {
                  setSelectedRegion(region)
                  window.setTimeout(() => {
                    destinationsListRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }, 120)
                }}
                className={`group relative h-52 overflow-hidden rounded-[2rem] border text-left ${selectedRegion === region ? "border-[#f27405]" : "border-white/15"}`}
              >
                <Image src={destinations[scope][region].image} alt={region} fill className="object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                <div className="relative z-10 p-5">
                  <p className="text-xl font-bold">{region}</p>
                  <p className="mt-2 max-w-[22ch] text-xs text-white/80">{destinations[scope][region].hook}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section ref={destinationsListRef} className="mb-20">
          <div className="mb-6">
            <h3 className="text-2xl font-bold md:text-4xl">{selectedRegion} destinations</h3>
            <p className="text-sm text-slate-300">Step 4 of 5 - pick your favorite and view plan</p>
          </div>
          <div className="mb-5 flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-[#f27405]/25 bg-[#f27405]/10 px-4 py-3 text-[#f8b67d]">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em]">Your destination is here choose the tribe</span>
            <span className="rounded-full border border-[#f8b67d]/35 bg-black/25 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em]">
              {filteredTopPicks.length} curated options
            </span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTopPicks.map((place) => (
              <article key={place.name} className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/5">
                <div className="relative h-52">
                  <Image src={place.image} alt={place.name} fill className="object-cover object-center" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                </div>
                <div className="space-y-3 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xl font-bold">{place.name}</p>
                      <p className="text-sm text-slate-300">{place.hook}</p>
                    </div>
                    <span className="rounded-full border border-white/20 px-3 py-1 text-xs">{place.type}</span>
                  </div>
                  <div className="flex items-center justify-end">
                    <Button size="sm" className="rounded-full bg-[#f27405] text-black hover:bg-[#ff8c24]" onClick={() => { setSelectedPlace(place); setItineraryOpen(true) }}>View Plan</Button>
                  </div>
                  <Link className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-200 hover:text-[#f8b67d]" href={`/destinations/${slugify(selectedRegion)}/${slugify(place.name)}`}>
                    Open SEO page <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-9 grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[#f27405]/40 bg-[#f27405]/10 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#f8b67d]">Trending now</p>
              <p className="mt-2 text-lg font-bold">{selectedTribeId === "couple" ? "Udaipur & Bali" : "Coorg & Thailand"}</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-slate-900/80 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Best for your tribe</p>
              <p className="mt-2 text-sm text-slate-100">{selectedTribeId === "family" ? "Comfort-first stays with balanced sightseeing and rest windows." : "Curated routes with emotional moments and high conversion-ready plans."}</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-slate-900/80 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Traveler proof</p>
              <p className="mt-2 text-sm text-slate-100">“Smooth planning and zero stress. We booked in 12 minutes.” - Priya, Bengaluru</p>
            </div>
          </div>
        </section>

        <section className="rounded-[2.5rem] border border-white/15 bg-gradient-to-r from-black/70 via-slate-900/70 to-black/60 p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[#f8b67d]">Step 5 of 5</p>
          <h4 className="mt-2 text-3xl font-bold md:text-5xl">Check availability before prices increase.</h4>
          <p className="mt-3 max-w-2xl text-sm text-slate-200">Minimal details now. Your travel specialist shares best package options, dates, and deals in one call.</p>
          <Button className="mt-6 h-12 rounded-full bg-[#f27405] px-8 font-bold text-black hover:bg-[#ff8c24]" onClick={() => setLeadOpen(true)}>
            Check Availability & Price
          </Button>
        </section>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-black/95 p-3 backdrop-blur md:hidden">
        <Button className="h-12 w-full rounded-full bg-[#f27405] font-bold text-black hover:bg-[#ff8c24]" onClick={() => setLeadOpen(true)}>Get Best Deal</Button>
      </div>
      <div className="fixed bottom-6 left-4 z-40 hidden rounded-full border border-white/20 bg-black/80 px-4 py-2 text-xs text-slate-100 shadow-xl backdrop-blur md:flex md:items-center md:gap-2">
        <ShieldCheck className="h-4 w-4 text-[#f27405]" />
        Trusted by 10k+ happy travelers
      </div>

      <AnimatePresence>
        {itineraryOpen && selectedPlace && (
          <motion.div
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-end justify-center bg-black/80 p-0 sm:items-center sm:p-4"
            onClick={() => setItineraryOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="plan-dialog-title"
              initial={{ y: 32, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 32, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-[92dvh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl border border-white/15 bg-black shadow-2xl sm:max-h-[min(88dvh,820px)] sm:rounded-3xl"
            >
              <header className="flex shrink-0 items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6">
                <div className="min-w-0 pr-2">
                  <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#f8b67d]">{modalDuration} · Complete outline</p>
                  <h4 id="plan-dialog-title" className="mt-1.5 truncate text-2xl font-bold text-white sm:text-3xl">
                    {selectedPlace.name} plan
                  </h4>
                  <p className="mt-1 text-sm text-zinc-400">{selectedRegion}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setItineraryOpen(false)}
                  className="shrink-0 rounded-full border border-white/15 p-2 text-slate-300 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
                  aria-label="Close plan"
                >
                  <X className="h-5 w-5" />
                </button>
              </header>

              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5 sm:px-6">
                <p className="mb-4 text-sm leading-relaxed text-zinc-300">
                  Highlights below are indicative. Final hotels, transfers, and day order are customized after we confirm your dates and budget.
                </p>
                <div className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-3">
                  {modalInclusions.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-[#f27405]/20 bg-zinc-950/90 px-3 py-3 text-center text-sm font-medium text-zinc-100"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <h5 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#f8b67d]">Day-wise itinerary</h5>
                <div className="space-y-2">
                  {modalItinerary.map((day, idx) => (
                    <div key={`itinerary-${idx}`} className="rounded-xl border border-zinc-700 bg-zinc-950/80 px-4 py-3">
                      <p className="text-sm font-semibold text-[#f8b67d]">
                        {day.includes(":") ? day.split(":")[0] : `Day ${idx + 1}`}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-200">
                        {day.includes(":") ? day.split(":").slice(1).join(":").trim() : day}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-[#f27405]/20 bg-zinc-950/90 p-4">
                    <p className="text-sm font-bold text-[#f8b67d]">Inclusions</p>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-200">
                      <li>Hotel stay with breakfast</li>
                      <li>Private transfers</li>
                      <li>Top sightseeing as per itinerary</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border border-zinc-700 bg-zinc-950/90 p-4">
                    <p className="text-sm font-bold text-zinc-100">Exclusions</p>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                      {modalExclusions.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#f8b67d]">Hotel style (examples)</p>
                  <div className="flex flex-wrap gap-2">
                    {modalHotelOptions.map((hotel) => (
                      <span
                        key={hotel}
                        className="rounded-full border border-[#f27405]/25 bg-zinc-950 px-4 py-2 text-xs font-medium text-zinc-200"
                      >
                        {hotel}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <footer className="shrink-0 border-t border-white/10 bg-black px-5 py-4 sm:px-6">
                <Button
                  type="button"
                  className="h-12 w-full rounded-full bg-[#f27405] text-sm font-bold text-black hover:bg-[#ff8c24] sm:h-12"
                  onClick={() => {
                    setItineraryOpen(false)
                    setLeadOpen(true)
                  }}
                >
                  Check Availability & Price
                </Button>
              </footer>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {leadOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/80"
            role="presentation"
            onClick={() => setLeadOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="ml-auto flex h-full max-h-[100dvh] w-full max-w-md flex-col border-l border-white/15 bg-black shadow-2xl"
            >
              <header className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 px-5 py-4 sm:px-6">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#f8b67d]">Check availability</p>
                  <h4 className="text-xl font-bold text-white sm:text-2xl">Get my plan</h4>
                </div>
                <button
                  type="button"
                  onClick={() => setLeadOpen(false)}
                  className="rounded-full border border-white/15 p-2 text-slate-300 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
                  aria-label="Close form"
                >
                  <X className="h-5 w-5" />
                </button>
              </header>

              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5 sm:px-6">
                <p className="mb-6 text-sm leading-relaxed text-zinc-300">
                  Share a few details. We will confirm availability, best hotels, and pricing on call or WhatsApp — usually within a few hours.
                </p>
                <form id="destinations-lead-form" className="flex flex-col gap-5" onSubmit={handleLeadSubmit}>
                  <div className="rounded-2xl border border-[#f27405]/20 bg-zinc-950/80 p-4 sm:p-5">
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#f8b67d]">Your details</p>
                    <div className="flex flex-col gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="lead-name" className="text-sm font-semibold text-zinc-200">
                      Full name
                    </Label>
                    <Input
                      id="lead-name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="h-12 rounded-xl border-2 border-zinc-600 bg-zinc-950 text-base text-zinc-50 shadow-inner placeholder:text-zinc-500 focus-visible:border-[#f27405] focus-visible:ring-2 focus-visible:ring-[#f27405]/35 md:text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lead-phone" className="text-sm font-semibold text-zinc-200">
                      Phone <span className="text-[#f27405]">*</span>
                    </Label>
                    <Input
                      id="lead-phone"
                      name="phone"
                      type="tel"
                      required
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="10-digit mobile number"
                      className="h-12 rounded-xl border-2 border-zinc-600 bg-zinc-950 text-base text-zinc-50 shadow-inner placeholder:text-zinc-500 focus-visible:border-[#f27405] focus-visible:ring-2 focus-visible:ring-[#f27405]/35 md:text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lead-month" className="text-sm font-semibold text-zinc-200">
                      Travel month
                    </Label>
                    <div className="relative">
                      <Input
                        ref={travelDateInputRef}
                        id="lead-month"
                        name="month"
                        type="date"
                        value={travelDate}
                        onChange={(e) => setTravelDate(e.target.value)}
                        onClick={(e) => {
                          const input = e.currentTarget as HTMLInputElement & { showPicker?: () => void }
                          input.showPicker?.()
                        }}
                        className="h-12 rounded-xl border-2 border-zinc-600 bg-zinc-950 pr-10 text-base text-zinc-50 shadow-inner focus-visible:border-[#f27405] focus-visible:ring-2 focus-visible:ring-[#f27405]/35 md:text-sm"
                      />
                      <button
                        type="button"
                        aria-label="Open calendar"
                        onClick={() => {
                          const input = travelDateInputRef.current as (HTMLInputElement & { showPicker?: () => void }) | null
                          if (!input) return
                          input.focus()
                          input.showPicker?.()
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-[#f8b67d] hover:text-[#ffcc9b]"
                      >
                        <CalendarDays className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lead-tribe" className="text-sm font-semibold text-zinc-200">
                      Travelers <span className="font-normal text-zinc-500">(from your tribe)</span>
                    </Label>
                    <select
                      id="lead-tribe"
                      name="tribe"
                      value={selectedTribeId}
                      onChange={(e) => setSelectedTribeId(e.target.value as TribeId)}
                      className="h-12 w-full cursor-pointer appearance-none rounded-xl border-2 border-[#f27405]/35 bg-zinc-950 bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat px-3 pr-10 text-base text-zinc-100 shadow-inner focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f27405]/35 md:text-sm [&>option]:bg-zinc-950 [&>option]:text-zinc-50"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23f8b67d' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                      }}
                    >
                      <option value="solo">{tribeLabel.solo}</option>
                      <option value="couple">{tribeLabel.couple}</option>
                      <option value="family">{tribeLabel.family}</option>
                      <option value="friends">{tribeLabel.friends}</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lead-days" className="text-sm font-semibold text-zinc-200">
                      Enter the days want to travel
                    </Label>
                    <Input
                      id="lead-days"
                      name="days"
                      type="number"
                      min={1}
                      placeholder="e.g. 5"
                      className="h-12 rounded-xl border-2 border-zinc-600 bg-zinc-950 text-base text-zinc-50 shadow-inner placeholder:text-zinc-500 focus-visible:border-[#f27405] focus-visible:ring-2 focus-visible:ring-[#f27405]/35 md:text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lead-notes" className="text-sm font-semibold text-zinc-200">
                      Notes <span className="font-normal text-zinc-500">(optional)</span>
                    </Label>
                    <Textarea
                      id="lead-notes"
                      name="notes"
                      placeholder="Dates flexibility, hotel style, kids’ ages, etc."
                      className="min-h-[120px] resize-y rounded-xl border-2 border-zinc-600 bg-zinc-950 text-base text-zinc-50 shadow-inner placeholder:text-zinc-500 focus-visible:border-[#f27405] focus-visible:ring-2 focus-visible:ring-[#f27405]/35 md:text-sm"
                    />
                  </div>
                    </div>
                  </div>
                </form>
              </div>

              <footer className="shrink-0 border-t border-white/10 bg-black px-5 py-4 sm:px-6">
                <Button type="submit" form="destinations-lead-form" className="h-12 w-full rounded-full bg-[#f27405] text-sm font-bold text-black hover:bg-[#ff8c24]">
                  Get my plan
                </Button>
                <p className="mt-3 text-center text-[11px] leading-snug text-zinc-500">
                  By submitting, you agree to be contacted by Happy Feet Holidays for this trip.
                </p>
              </footer>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {exitOfferOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[120] bg-black/65 p-4">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="mx-auto mt-24 w-full max-w-md rounded-3xl border border-white/20 bg-slate-900 p-6 text-center">
              <p className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-[#f8b67d]"><Star className="h-4 w-4" /> Limited Offer</p>
              <h5 className="mt-3 text-2xl font-bold">Unlock special discount</h5>
              <p className="mt-2 text-sm text-slate-300">Leave your number and we will reserve your best deal before slots close.</p>
              <div className="mt-5 grid gap-3">
                <Button className="rounded-full bg-[#f27405] text-black hover:bg-[#ff8c24]" onClick={() => { setExitOfferOpen(false); setLeadOpen(true) }}>Claim Discount</Button>
                <Button variant="outline" className="rounded-full border-white/25 bg-transparent" onClick={() => setExitOfferOpen(false)}>No thanks</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
