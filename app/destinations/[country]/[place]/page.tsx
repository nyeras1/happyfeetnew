import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { BadgeIndianRupee } from "lucide-react"
import { destinations, slugify } from "@/lib/destinations-data"

type Params = { country: string; place: string }

function findPlace(countrySlug: string, placeSlug: string) {
  for (const scope of ["domestic", "international"] as const) {
    for (const [regionName, region] of Object.entries(destinations[scope])) {
      if (slugify(regionName) !== countrySlug) continue
      const place = region.places.find((item) => slugify(item.name) === placeSlug)
      if (place) return { scope, regionName, place, region }
    }
  }
  return null
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const resolved = await params
  const result = findPlace(resolved.country, resolved.place)
  if (!result) return { title: "Destination Not Found" }
  const title = `${result.place.name} Packages | ${result.regionName} | Happy Feet Holidays`
  const description = `${result.place.hook}. Explore curated itineraries, inclusions, and personalized pricing from ${result.place.priceFrom}.`
  return {
    title,
    description,
    openGraph: { title, description, images: [result.place.image] },
  }
}

export default async function DestinationDetailPage({ params }: { params: Promise<Params> }) {
  const resolved = await params
  const result = findPlace(resolved.country, resolved.place)
  if (!result) notFound()

  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: `${result.place.name} Tour Package`,
    description: result.place.hook,
    touristType: result.scope === "domestic" ? "Domestic Traveler" : "International Traveler",
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: result.place.priceFrom.replace(/[^\d]/g, ""),
      availability: "https://schema.org/LimitedAvailability",
    },
    itinerary: `${result.place.name} signature itinerary by Happy Feet Holidays`,
  }

  return (
    <main className="min-h-screen bg-black px-4 pb-24 pt-28 text-white sm:pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container mx-auto max-w-3xl">
        <nav className="mb-6 text-sm text-slate-500">
          <Link href="/destinations" className="text-slate-400 transition hover:text-[#f8b67d]">
            Destinations
          </Link>
          <span className="mx-2 text-slate-600">/</span>
          <span className="text-slate-300">{result.regionName}</span>
          <span className="mx-2 text-slate-600">/</span>
          <span className="text-white">{result.place.name}</span>
        </nav>

        <div className="relative aspect-[21/9] min-h-[200px] w-full overflow-hidden rounded-3xl border border-white/10 sm:aspect-[2/1]">
          <Image src={result.place.image} alt={result.place.name} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#f8b67d]">{result.regionName}</p>
            <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">{result.place.name}</h1>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
          <div className="border-b border-white/10 px-6 py-5 sm:px-8">
            <p className="text-base leading-relaxed text-slate-300">{result.place.hook}</p>
            <p className="mt-4 inline-flex items-center gap-1.5 text-lg font-semibold text-[#f8b67d]">
              <BadgeIndianRupee className="h-5 w-5 shrink-0" />
              <span>Indicative from {result.place.priceFrom}</span>
            </p>
            <p className="mt-2 text-sm text-slate-400">Duration: {result.place.duration ?? "4N/5D"}</p>
          </div>

          <div className="border-b border-white/10 px-6 py-5 sm:px-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#f8b67d]">Day-wise itinerary</p>
            <div className="space-y-2">
              {(result.place.itinerary ?? []).map((day, idx) => (
                <div key={`day-${idx}`} className="rounded-xl border border-zinc-700 bg-zinc-950/80 px-4 py-3">
                  <p className="text-sm font-semibold text-[#f8b67d]">
                    {day.includes(":") ? day.split(":")[0] : `Day ${idx + 1}`}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-200">
                    {day.includes(":") ? day.split(":").slice(1).join(":").trim() : day}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-b border-white/10 px-6 py-5 sm:px-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#f27405]/20 bg-zinc-950/90 p-4">
                <p className="text-sm font-bold text-[#f8b67d]">Inclusions</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-200">
                  {(result.place.inclusions ?? ["Curated stays", "Airport transfers", "Daily breakfast"]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-zinc-700 bg-zinc-950/90 p-4">
                <p className="text-sm font-bold text-zinc-100">Exclusions</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                  {(result.place.exclusions ?? ["Flights and visa", "Personal expenses", "Early check-in / late check-out"]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-b border-white/10 px-6 py-5 sm:px-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#f8b67d]">Hotel style (examples)</p>
            <div className="flex flex-wrap gap-2">
              {(result.place.hotelOptions ?? ["Option 1", "Option 2", "Option 3"]).map((hotel) => (
                <span key={hotel} className="rounded-full border border-[#f27405]/25 bg-zinc-950 px-4 py-2 text-xs font-medium text-zinc-200">
                  {hotel}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className="text-sm text-slate-400">Get a day-wise plan, hotel options, and best available price for your dates.</p>
            <Link
              href="/destinations"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-[#f27405] px-8 text-sm font-bold text-black transition hover:bg-[#ff8c24] sm:w-auto"
            >
              Check availability & price
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
