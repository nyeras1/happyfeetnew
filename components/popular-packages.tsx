"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, MapPin, Tag } from "lucide-react"

export function PopularPackages() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const packages = [
    {
      title: "Corporate Day Outing",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
      price: "$299",
      duration: "1 Day",
      location: "Luxury Resorts",
      category: "Corporate",
    },
    {
      title: "Alpine Adventure Tour",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
      price: "$899",
      duration: "5 Days",
      location: "Swiss Alps",
      category: "Adventure",
    },
    {
      title: "Cultural Heritage Walk",
      image: "/Cultural Heritage Walk.jpg",
      price: "$599",
      duration: "3 Days",
      location: "Ancient Cities",
      category: "Cultural",
    },
  ]

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-background to-card">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        {/* Section Header with high visibility */}
        <div className="mb-20 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism border border-white/10">
            <Tag className="h-4 w-4 text-accent" />
            <span className="text-xs font-black tracking-[0.3em] text-accent uppercase">The Collection</span>
          </div>
          <h3 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter text-high-contrast">
            Curated Escapes
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked experiences designed to create unforgettable memories
          </p>
        </div>

        {/* Package Cards with enhanced 3D and visibility */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`group relative h-[650px] rounded-3xl overflow-hidden shadow-3d hover:shadow-3d-hover border-2 border-white/10 transition-all duration-700 preserve-3d ${
                hoveredIndex === i ? "scale-[1.03] -translate-y-6" : "scale-100"
              }`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image with enhanced overlay for text visibility */}
              <Image
                src={pkg.image || "/placeholder.svg"}
                alt={pkg.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />

              {/* Strong gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

              {/* Badge with high visibility */}
              <div className="absolute top-6 right-6 z-20">
                <span className="px-4 py-2 rounded-full glass-morphism-strong border-2 border-white/30 text-xs font-bold uppercase tracking-widest text-white text-shadow-strong">
                  {pkg.category}
                </span>
              </div>

              {/* Content with maximum readability */}
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                {/* Info badges */}
                <div className="flex gap-3 mb-6">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-morphism-strong border border-white/20">
                    <Clock className="h-3.5 w-3.5 text-accent" />
                    <span className="text-xs font-semibold text-white">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-morphism-strong border border-white/20">
                    <MapPin className="h-3.5 w-3.5 text-secondary" />
                    <span className="text-xs font-semibold text-white">{pkg.location}</span>
                  </div>
                </div>

                {/* Title with strong shadow */}
                <h4 className="text-4xl font-serif font-bold mb-4 text-white text-shadow-strong leading-tight">
                  {pkg.title}
                </h4>

                {/* Price with high contrast */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-sm text-white/80 font-semibold uppercase tracking-wider">From</span>
                  <span className="text-4xl font-bold text-accent">{pkg.price}</span>
                  <span className="text-sm text-white/80 font-semibold">per person</span>
                </div>

                {/* CTA Button with 3D effect */}
                <Button className="w-full h-14 rounded-2xl bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-accent hover:text-accent-foreground transition-all shadow-3d hover:shadow-3d-hover group/btn">
                  View Experience
                  <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
