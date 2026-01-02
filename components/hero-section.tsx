"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"

export function HeroSection() {
  const [offsetY, setOffsetY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleScroll = () => setOffsetY(window.pageYOffset)

  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20,
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-32 md:pt-40 perspective-1500">
      {/* Multi-layer 3D Background */}
      <div
        className="absolute inset-0 z-0 scale-110 preserve-3d"
        style={{
          transform: `translateZ(-200px) translateY(${offsetY * 0.5}px) rotateX(${mousePosition.y * 0.02}deg) rotateY(${mousePosition.x * 0.02}deg)`,
          backgroundImage: `url('https://images.unsplash.com/photo-1506929113614-bb48858a6771?auto=format&fit=crop&q=80&w=2400')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 gradient-overlay-dark" />
      </div>

      {/* Floating 3D Decorative Elements */}
      <div
        className="absolute top-[15%] right-[10%] w-64 h-64 rounded-full bg-accent/20 blur-3xl animate-float-slow preserve-3d"
        style={{ transform: `translateZ(100px) translateX(${mousePosition.x * 2}px)` }}
      />
      <div
        className="absolute bottom-[20%] left-[8%] w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-float preserve-3d"
        style={{ transform: `translateZ(50px) translateX(${mousePosition.x * -1.5}px)` }}
      />

      {/* Hero Content with 3D depth */}
      <div
        className="container relative z-20 px-4 text-center preserve-3d mt-24 md:mt-28"
        style={{
          transform: `translateY(${offsetY * -0.3}px) translateZ(100px)`,
        }}
      >
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Main Heading with dramatic 3D text */}
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-serif font-black leading-[0.9] tracking-tight text-high-contrast animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Travel the
            <br />
            <span className="text-accent italic">World</span> with
            <br />
            Happy Feet
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed text-shadow-strong animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Discover extraordinary destinations, curated experiences, and unforgettable memories. Your journey to joy
            starts here.
          </p>

          {/* CTAs with 3D effects */}
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              size="lg"
              className="h-16 px-10 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wider text-base shadow-3d hover:shadow-3d-hover hover:scale-105 transition-all duration-300 hover:-translate-y-1 group"
            >
              Explore Packages
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-16 px-10 rounded-full glass-morphism-strong border-2 border-white/30 text-white hover:bg-white hover:text-background font-bold uppercase tracking-wider text-base shadow-3d hover:shadow-3d-hover hover:scale-105 transition-all duration-300 bg-transparent"
            >
              <MapPin className="mr-2 h-5 w-5" />
              View Destinations
            </Button>
          </div>

          {/* Stats Bar with 3D cards */}
          <div
            className="grid grid-cols-3 gap-6 max-w-3xl mx-auto pt-4 animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            {[
              { value: "50+", label: "Destinations" },
              { value: "10K+", label: "Happy Travelers" },
              { value: "15+", label: "Years Experience" },
            ].map((stat, i) => (
              <div
                key={i}
                className="glass-morphism-strong rounded-2xl p-6 border-2 border-white/10 shadow-3d hover:shadow-3d-hover hover:scale-105 hover:-translate-y-2 transition-all duration-300 preserve-3d"
              >
                <p className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</p>
                <p className="text-sm font-semibold text-white/80 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
