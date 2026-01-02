"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, Compass, Heart, Leaf, ArrowRight } from "lucide-react"

export function AboutPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-32 bg-gradient-to-b from-background to-card overflow-hidden perspective-1000">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Side with 3D depth */}
          <div className="relative preserve-3d">
            <div className="relative h-[650px] w-full rounded-3xl overflow-hidden shadow-3d hover:shadow-3d-hover transition-all duration-500 group">
              <Image
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1200"
                alt="Luxury Travel Experience"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating 3D Stats Cards */}
            <div className="absolute -top-8 -left-8 glass-morphism-strong p-6 rounded-2xl shadow-3d border-2 border-white/20 animate-float hidden md:block">
              <p className="text-4xl font-bold text-accent mb-1">98%</p>
              <p className="text-sm font-semibold text-white uppercase tracking-wider">Satisfaction</p>
            </div>

            <div className="absolute -bottom-8 -right-8 glass-morphism-strong p-8 rounded-2xl shadow-3d border-2 border-white/20 max-w-xs hidden md:block animate-float-slow">
              <p className="text-white font-serif italic text-xl leading-relaxed">
                "Unforgettable memories crafted with passion."
              </p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 rounded-full bg-accent" />
                ))}
              </div>
            </div>
          </div>

          {/* Content Side with enhanced hierarchy */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism border border-white/10">
                <Compass className="h-4 w-4 text-primary" />
                <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase">About Us</span>
              </div>

              <h3 className="text-5xl md:text-6xl font-serif font-bold text-high-contrast leading-[1.1]">
                Where dreams meet destinations
              </h3>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Happy Feet Holidays and Resorts is your trusted partner in discovering the world, offering curated
                holiday packages and exclusive resort stays across breathtaking destinations.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                We craft tailor-made journeys that transform travel dreams into unforgettable memories, guided by
                passion, trust, and a commitment to sustainable tourism.
              </p>
            </div>

            {/* Vision Highlights with 3D hover effects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Shield, title: "Trust & Reliability", color: "text-primary", bg: "bg-primary/10" },
                { icon: Heart, title: "Joyful Exploration", color: "text-accent", bg: "bg-accent/10" },
                { icon: Leaf, title: "Responsible Tourism", color: "text-secondary", bg: "bg-secondary/10" },
                { icon: Compass, title: "Seamless Adventures", color: "text-primary", bg: "bg-primary/10" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 p-5 rounded-2xl glass-morphism border border-white/10 shadow-3d hover:shadow-3d-hover transition-all duration-300 cursor-pointer group ${
                    hoveredIndex === i ? "scale-105 -translate-y-2" : ""
                  }`}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={`p-4 rounded-xl ${item.bg} group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-3d`}
                  >
                    <item.icon className={`h-6 w-6 ${item.color} group-hover:text-white transition-colors`} />
                  </div>
                  <span className="font-bold text-foreground text-base">{item.title}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button
                size="lg"
                className="h-14 px-8 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wider shadow-3d hover:shadow-3d-hover hover:scale-105 transition-all duration-300 hover:-translate-y-1 group"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
