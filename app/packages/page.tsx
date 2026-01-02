import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Zap, Heart, Users } from "lucide-react"

export default function PackagesPage() {
  const categories = [
    { title: "Corporate Day Outing", icon: Users, desc: "Team building and relaxation for corporate groups." },
    { title: "Adventure & Activity", icon: Zap, desc: "Thrilling escapes for the bold and brave." },
    { title: "Cultural & Heritage", icon: ShieldCheck, desc: "Explore the roots of world civilizations." },
    { title: "Family & Group", icon: Heart, desc: "Memorable journeys for you and your loved ones." },
  ]

  return (
    <div className="min-h-screen pt-32 pb-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center space-y-4 mb-20">
          <h1 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase">Exploration</h1>
          <h2 className="text-5xl font-serif font-bold">Curated Travel Experiences</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of carefully crafted holiday packages and resort stays.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
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

        {/* Featured Packages */}
        <div className="space-y-12">
          <h3 className="text-3xl font-serif font-bold text-center">Featured Destinations</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "Asian Wonders",
                image: "https://images.unsplash.com/photo-1528181304800-2f140819ad9c?auto=format&fit=crop&q=80&w=1200",
                stats: ["12+ Countries", "500+ Resorts", "Curated Itineraries"],
              },
              {
                title: "European Grandeur",
                image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=1200",
                stats: ["15+ Countries", "200+ Luxury Tours", "Local Guides"],
              },
            ].map((dest, i) => (
              <div key={i} className="relative h-[450px] rounded-[40px] overflow-hidden group">
                <Image
                  src={dest.image || "/placeholder.svg"}
                  alt={dest.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-12 flex flex-col justify-end">
                  <h4 className="text-white text-4xl font-serif font-bold mb-6">{dest.title}</h4>
                  <div className="flex flex-wrap gap-4 mb-8">
                    {dest.stats.map((stat, j) => (
                      <div
                        key={j}
                        className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-sm"
                      >
                        {stat}
                      </div>
                    ))}
                  </div>
                  <Button className="w-fit bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 rounded-full text-lg font-bold">
                    View Land Packages
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
