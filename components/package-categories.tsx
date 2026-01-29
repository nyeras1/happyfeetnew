"use client"

import { ArrowRight, Users, Zap, ShieldCheck, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PackageCategories() {
  const categories = [
    { title: "Corporate Day Outing", icon: Users, desc: "Team building and relaxation for corporate groups." },
    { title: "Adventure & Activity", icon: Zap, desc: "Thrilling escapes for the bold and brave." },
    { title: "Cultural & Heritage", icon: ShieldCheck, desc: "Explore the roots of world civilizations." },
    { title: "Family & Group", icon: Heart, desc: "Memorable journeys for you and your loved ones." },
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center space-y-4 mb-20">
          <h1 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase">Exploration</h1>
          <h2 className="text-5xl font-serif font-bold">Curated Travel Experiences</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of carefully crafted holiday packages and resort stays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-accent/10 p-8 rounded-3xl shadow-sm border border-border/50 hover:shadow-xl transition-all hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                <cat.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{cat.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{cat.desc}</p>
              <Button variant="link" className="p-0 text-secondary font-bold group-hover:gap-3 transition-all">
                Explore <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
