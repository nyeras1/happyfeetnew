"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Maximize2 } from "lucide-react"
import { cn } from "@/lib/utils"

export default function GalleryPage() {
  const [filter, setFilter] = useState("All")

  const categories = ["All", "Scenic", "Resorts", "Moments"]

  const items = [
    {
      title: "Azure Coastline",
      category: "Scenic",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Luxury Suite",
      category: "Resorts",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Sunset Dinner",
      category: "Moments",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Mountain Peak",
      category: "Scenic",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Infinity Pool",
      category: "Resorts",
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Trekking Path",
      category: "Moments",
      image: "/Trekking .avif",
    },
  ]

  const filteredItems = filter === "All" ? items : items.filter((item) => item.category === filter)

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container px-4 mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-sm font-bold tracking-[0.2em] text-primary uppercase">Gallery</h1>
          <h2 className="text-5xl font-serif font-bold">Capturing World's Beauty</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the breathtaking moments and stunning destinations curated by Happy Feet.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-8 py-2 rounded-full text-sm font-semibold transition-all border",
                filter === cat
                  ? "bg-primary text-white border-primary shadow-lg"
                  : "bg-white text-muted-foreground border-border hover:border-primary/50",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredItems.map((item, i) => (
            <div
              key={i}
              className="relative group break-inside-avoid rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <p className="text-accent text-xs font-bold uppercase tracking-wider">{item.category}</p>
                    <h4 className="text-white text-xl font-serif font-bold">{item.title}</h4>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-accent text-white flex items-center justify-center transition-colors">
                      <Heart className="h-5 w-5" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-primary text-white flex items-center justify-center transition-colors">
                      <Maximize2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
