"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Quote, MessageCircle } from "lucide-react"

export function TestimonialsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const testimonials = [
    {
      name: "Priya N",
      role: "Family Traveler",
      text: "From airport pickup to hotel check-in, everything felt easy. We just enjoyed our time together.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    },
    {
      name: "Karthik R",
      role: "Corporate Lead",
      text: "Our team outing was super smooth. The resort vibe and coordination were exactly what we needed.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    },
    {
      name: "Meera S",
      role: "Adventure Traveler",
      text: "The trek, stays, and travel flow were balanced so well. Felt safe, excited, and fully taken care of.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    },
    {
      name: "Rinil & Nagma",
      role: "Happy Travelers",
      text: "A wonderful experience! The team was so helpful and always available. I didn’t have to worry about anything, just enjoyed my vacation.",
      avatar: "/canvas%20images/testimonial4.png",
    },
    {
      name: "Chethan & Seema",
      role: "Holiday Travelers",
      text: "We had a fantastic trip with Happy Feet Holidays. Everything from hotels to sightseeing was perfectly arranged, so we could just relax and enjoy every moment.",
      avatar: "/canvas%20images/testimonial3.png",
    },
  ]
  const loopedTestimonials = [...testimonials, ...testimonials]

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
          <h3 className="text-5xl md:text-7xl font-bold text-high-contrast">What Our Travelers Say</h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from travelers who explored with Happy Feet
          </p>
        </div>

        {/* Single-row infinite loop testimonials */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-background to-transparent" />
          <div className="hf-testimonial-track flex w-max gap-6">
            {loopedTestimonials.map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className={`relative w-[360px] flex-shrink-0 rounded-3xl border-2 border-white/10 p-8 glass-morphism-strong shadow-3d transition-all duration-300 group ${
                  hoveredIndex === i ? "scale-[1.02] -translate-y-2 shadow-3d-hover" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Quote className="absolute right-6 top-6 h-14 w-14 text-accent/10 transition-colors group-hover:text-accent/20" />

                <div className="relative z-10 mb-6 flex gap-1.5 text-accent">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-current" />
                  ))}
                </div>

                <p className="relative z-10 mb-8 text-lg font-medium leading-relaxed text-foreground">"{t.text}"</p>

                <div className="flex items-center gap-4 border-t-2 border-white/10 pt-5">
                  <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-2xl border-2 border-accent shadow-3d">
                    <Image src={t.avatar || "/placeholder.svg"} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-bold text-foreground">{t.name}</h4>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .hf-testimonial-track {
          animation: testimonial-marquee 36s linear infinite;
          will-change: transform;
        }

        .hf-testimonial-track:hover {
          animation-play-state: paused;
        }

        @keyframes testimonial-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}
