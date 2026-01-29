"use client"

import { useRef, useState } from "react"
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"
import { HeroScrollCanvas } from "@/components/hero-scroll-canvas"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll progress of the container (0 to 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Transform scroll progress for different text animations
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 0, 0])
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50])

  const opacity2 = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0])
  const scale2 = useTransform(scrollYProgress, [0.3, 0.6], [0.9, 1.1])

  const opacity3 = useTransform(scrollYProgress, [0.7, 0.8, 1], [0, 1, 1])
  const y3 = useTransform(scrollYProgress, [0.7, 1], [50, 0])

  const [currentProgress, setCurrentProgress] = useState(0)

  useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
    setCurrentProgress(latest)
  })

  return (
    <div ref={containerRef} className="relative h-[600vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <HeroScrollCanvas scrollProgress={currentProgress} />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <div className="max-w-5xl space-y-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-black leading-[0.9] tracking-tight text-white drop-shadow-2xl">
              Travel the <br />
              <span className="text-accent italic">World</span> with <br />
              Happy Feet
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light tracking-wide">
              Drag down to begin your journey.
            </p>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: opacity2, scale: scale2 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-widest uppercase text-shadow-strong text-center px-4">
            One World.<br />Endless Paths.
          </h2>
        </motion.div>

        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-center justify-center z-10"
        >
          <h2 className="text-5xl md:text-7xl font-sans font-bold text-white mb-8 tracking-tighter shadow-black drop-shadow-lg text-center">
            Travel beyond <br />destinations.
          </h2>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button
              size="lg"
              className="h-14 px-8 rounded-full bg-white text-black hover:bg-white/90 font-bold uppercase tracking-widest text-sm shadow-xl hover:scale-105 transition-transform"
            >
              Start Exploring
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-[1px] h-16 bg-white/20">
            <motion.div
              style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
              className="w-full bg-accent"
            />
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">Scroll</span>
        </div>
      </div>
    </div>
  )
}
