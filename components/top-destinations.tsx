"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { TRAVEL_PACKAGES } from "@/lib/travel-packages"

export function TopDestinations() {
  const packages = TRAVEL_PACKAGES
  const duplicated = [...packages, ...packages]

  return (
    <section
      id="top-destinations"
      className="scroll-mt-28 py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-background via-card/40 to-background"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-24 left-10 w-80 h-80 bg-accent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-24 right-10 w-80 h-80 bg-primary rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center space-y-6 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism border border-white/10">
            <span className="text-xs font-black tracking-[0.3em] text-accent uppercase">TOP PICKS</span>
          </div>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-high-contrast">Top Destinations</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Tap a destination to explore the itinerary and send a quick enquiry.
          </p>
        </div>

        <div className="hf-marquee relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="overflow-hidden rounded-[3rem] border border-white/10 glass-morphism-strong shadow-3d">
            <div className="hf-marquee-track flex gap-6 py-8 px-6 w-max">
              {duplicated.map((pkg, idx) => {
                const selected = `${pkg.title} – ${pkg.duration}`
                const href = `/destinations?package=${encodeURIComponent(selected)}`

                return (
                  <Link
                    key={`${selected}-${idx}`}
                    href={href}
                    className="group relative w-[280px] sm:w-[320px] md:w-[360px] h-[440px] rounded-[2.25rem] overflow-hidden border-2 border-white/10 shadow-3d hover:shadow-3d-hover transition-all duration-700 hover:-translate-y-2 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <Image
                      src={pkg.image || "/placeholder.svg"}
                      alt={`${pkg.title} package`}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent" />

                    <div className="absolute top-5 left-5 z-10">
                      <div className="px-4 py-2 rounded-full glass-morphism-strong border-2 border-white/30 text-white text-xs font-bold tracking-[0.2em] uppercase">
                        {pkg.duration}
                      </div>
                    </div>
                    <div className="absolute top-5 right-5 z-10">
                      <div className="px-4 py-2 rounded-full bg-accent/20 backdrop-blur-md border border-accent/30 text-accent text-xs font-bold tracking-[0.2em] uppercase">
                        Handpicked
                      </div>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-7">
                      <h4 className="text-white text-3xl font-bold leading-tight mb-2 text-shadow-strong">
                        {pkg.title}
                      </h4>
                      <p className="text-white/90 text-sm leading-relaxed mb-5 line-clamp-2">{pkg.tagline}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {pkg.highlights.map((h) => (
                          <div
                            key={`${selected}-${h}`}
                            className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-semibold"
                          >
                            {h}
                          </div>
                        ))}
                      </div>

                      <div className="w-full h-12 rounded-2xl bg-white text-black font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center group/btn">
                        more details
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
