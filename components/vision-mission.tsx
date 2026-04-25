"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Globe, ShieldCheck, Sparkles, Users, Target, Eye } from "lucide-react"

export function VisionMission() {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null)

  const missionPoints = [
    { title: "Weave Dreams into Journeys", icon: Sparkles },
    { title: "Deliver Thoughtful Escapes", icon: Globe },
    { title: "Open Doors to the World", icon: Star },
    { title: "Wrap You in Comfort", icon: ShieldCheck },
    { title: "Travel with Heart", icon: Users },
  ]

  const coreValues = [
    { title: "Passion for Travel", desc: "Driven by curiosity and discovery.", icon: Sparkles },
    { title: "Customer Delight", desc: "Creating moments of pure joy.", icon: Star },
    { title: "Integrity & Trust", desc: "Honesty in every journey.", icon: ShieldCheck },
    { title: "Sustainability", desc: "Protecting our planet's beauty.", icon: Globe },
    { title: "Innovation", desc: "Crafting modern and human travel solutions.", icon: Target },
    { title: "Collaboration", desc: "Working together for excellence.", icon: Users },
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-card to-background perspective-1000">
      <div className="container px-4 mx-auto space-y-32">
        {/* Mission Section with enhanced visibility */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism border border-white/10">
                <Target className="h-4 w-4 text-secondary" />
                <span className="text-sm font-bold tracking-[0.2em] text-secondary uppercase">Our Mission</span>
              </div>
              <h3 className="text-5xl md:text-6xl font-serif font-bold text-high-contrast leading-[1.1]">
                Turning wanderlust into warm, story-filled journeys
              </h3>
            </div>

            {/* Mission points with 3D cards */}
            <div className="grid grid-cols-1 gap-4">
              {missionPoints.map((point, i) => (
                <div
                  key={i}
                  className="flex items-center gap-5 p-6 glass-morphism-strong rounded-2xl shadow-3d hover:shadow-3d-hover border-2 border-white/10 hover:scale-105 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="p-4 rounded-xl bg-secondary/20 group-hover:bg-secondary group-hover:text-white transition-all shadow-3d flex-shrink-0">
                    <point.icon className="h-6 w-6 text-secondary group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-bold text-lg text-foreground">{point.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image with 3D depth */}
          <div className="order-1 lg:order-2 relative preserve-3d">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-3d hover:shadow-3d-hover transition-all duration-500 border-2 border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1200"
                alt="Our Mission"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-8 -left-8 glass-morphism-strong p-8 rounded-2xl shadow-3d border-2 border-white/20 animate-float hidden lg:block">
              <p className="text-5xl font-bold text-accent mb-2">15+</p>
              <p className="text-sm font-semibold text-white uppercase tracking-wider">Years Excellence</p>
            </div>
          </div>
        </div>

        {/* Core Values Section with enhanced contrast */}
        <div className="space-y-16">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism border border-white/10">
              <Eye className="h-4 w-4 text-accent" />
              <span className="text-sm font-bold tracking-[0.2em] text-accent uppercase">Core Values</span>
            </div>
            <h3 className="text-5xl md:text-7xl font-serif font-bold text-high-contrast">
              The Foundation of Our Travel Soul
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our values guide every journey we create, ensuring excellence in every experience
            </p>
          </div>

          {/* Values grid with 3D cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, i) => (
              <div
                key={i}
                className={`p-10 glass-morphism-strong rounded-3xl border-2 border-white/10 shadow-3d hover:shadow-3d-hover transition-all duration-300 group cursor-pointer ${
                  hoveredValue === i ? "scale-105 -translate-y-3 border-accent/30" : ""
                }`}
                onMouseEnter={() => setHoveredValue(i)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent group-hover:scale-110 transition-all duration-300 shadow-3d">
                  <value.icon className="h-8 w-8 text-accent group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">{value.title}</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
