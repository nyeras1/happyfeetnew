"use client"

import Link from "next/link"
import { ArrowRight, Users, Zap, ShieldCheck, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PackageCategories() {
  const categories = [
    {
      title: "Corporate Day Outing",
      icon: Users,
      desc: "Bonding days that bring teams closer with curated activities and easy logistics.",
      tone: "from-blue-500/20 via-cyan-500/5 to-transparent",
      badge: "Team focused",
    },
    {
      title: "Adventure & Activity",
      icon: Zap,
      desc: "High-energy escapes for brave hearts, built for thrill and unforgettable stories.",
      tone: "from-amber-500/20 via-orange-500/10 to-transparent",
      badge: "Adrenaline",
    },
    {
      title: "Cultural & Heritage",
      icon: ShieldCheck,
      desc: "Walk through stories, roots, and traditions with thoughtfully paced experiences.",
      tone: "from-fuchsia-500/20 via-violet-500/10 to-transparent",
      badge: "Story rich",
    },
    {
      title: "Family & Group",
      icon: Heart,
      desc: "Easy-going journeys for your whole gang with comfort-first planning and flexible schedules.",
      tone: "from-emerald-500/20 via-teal-500/10 to-transparent",
      badge: "Comfort first",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#f27405]/15 blur-[130px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#f8b67d]">Exploration</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Curated Travel Experiences
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
            Discover beautifully planned journeys that balance comfort, personality, and unforgettable moments.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.04] p-6 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#f27405]/45 hover:bg-white/[0.07] sm:p-7"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${cat.tone} opacity-80 transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-black/35 text-[#f8b67d] shadow-lg">
                    <cat.icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-200">
                    {cat.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{cat.desc}</p>

                <Button
                  asChild
                  variant="ghost"
                  className="mt-7 h-10 rounded-full border border-white/25 bg-white/10 px-4 text-xs font-bold uppercase tracking-[0.14em] text-white hover:bg-[#f27405] hover:text-black"
                >
                  <Link href="/destinations">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
