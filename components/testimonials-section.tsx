"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Quote, MessageCircle } from "lucide-react"

export function TestimonialsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Luxury Traveler",
      text: "Happy Feet transformed our family vacation into a seamless, magical experience. Every detail was perfect.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    },
    {
      name: "Mark Thompson",
      role: "Corporate Lead",
      text: "Our team outing was flawless. The resort selection and coordination by Happy Feet was top-notch.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    },
    {
      name: "Elena Rodriguez",
      role: "Adventure Enthusiast",
      text: "Best trekking experience ever! The guides were professional and the itinerary was perfectly balanced.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    },
  ]

  return (
    <section id="testimonials" className="py-32 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        {/* Section header with high visibility */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism border border-white/10">
            <MessageCircle className="h-4 w-4 text-accent" />
            <span className="text-sm font-bold tracking-[0.2em] text-accent uppercase">Testimonials</span>
          </div>
          <h3 className="text-5xl md:text-7xl font-serif font-bold text-high-contrast">What Our Travelers Say</h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from real travelers who experienced the Happy Feet difference
          </p>
        </div>

        {/* Testimonial cards with enhanced 3D effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`glass-morphism-strong p-10 rounded-3xl shadow-3d hover:shadow-3d-hover border-2 border-white/10 relative group transition-all duration-300 ${
                hoveredIndex === i ? "scale-105 -translate-y-3" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Decorative quote */}
              <Quote className="absolute top-8 right-8 h-16 w-16 text-accent/10 group-hover:text-accent/20 transition-colors" />

              {/* Star rating with better visibility */}
              <div className="flex gap-1.5 text-accent mb-8 relative z-10">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-5 w-5 fill-current" />
                ))}
              </div>

              {/* Testimonial text with high contrast */}
              <p className="text-xl text-foreground leading-relaxed mb-10 relative z-10 font-medium">"{t.text}"</p>

              {/* Author info with enhanced contrast */}
              <div className="flex items-center gap-5 pt-6 border-t-2 border-white/10">
                <div className="relative h-16 w-16 rounded-2xl overflow-hidden border-2 border-accent shadow-3d flex-shrink-0">
                  <Image src={t.avatar || "/placeholder.svg"} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground mb-1">{t.name}</h4>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
