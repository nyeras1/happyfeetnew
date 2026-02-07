"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Compass, Heart, Leaf, Shield, Globe2, Sparkles, Waves, Mountain, Landmark, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import { useRef } from "react"

export default function AboutPage() {
  const heroRef = useRef(null)
  const storyRef = useRef(null)
  const experiencesRef = useRef(null)
  const visionRef = useRef(null)
  const valuesRef = useRef(null)
  const ctaRef = useRef(null)

  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const heroScale = useSpring(heroY, { stiffness: 100, damping: 20 })

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card text-foreground overflow-x-hidden">
      {/* Hero banner with image */}
      <motion.section
        ref={heroRef}
        style={{ y: heroScale, opacity: heroOpacity }}
        className="relative min-h-[100svh] overflow-hidden pt-28 md:pt-32"
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2000"
            alt="Happy travelers exploring breathtaking destinations"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-background/90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.12),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,180,80,0.12),transparent_55%)]" />
        </div>
        <div className="relative min-h-[calc(100svh-7rem)] flex items-center">
          <div className="container px-4 mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism-strong border border-white/15 bg-black/25">
                <Sparkles className="h-4 w-4 text-accent" />
                <span className="text-xs font-black tracking-[0.3em] text-white/90 uppercase">
                  Happy Feet Holidays & Resorts
                </span>
              </div>

              <h1 className="mt-7 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black leading-[0.95] tracking-tight text-high-contrast text-shadow-strong">
                Travel that feels personal.
              </h1>
              <p className="mt-5 text-base sm:text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed text-shadow-strong">
                Memories that last forever.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
                <Button
                  size="lg"
                  className="h-14 px-10 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-black uppercase tracking-[0.2em] text-xs sm:text-sm shadow-3d hover:shadow-3d-hover hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link href="/destinations">
                    Explore Experiences
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl glass-morphism border border-white/15 bg-black/20">
                  <Compass className="h-5 w-5 text-accent" />
                  <div className="leading-tight">
                    <p className="text-xs font-black tracking-[0.25em] uppercase text-white/70">Concierge-first</p>
                    <p className="text-sm font-semibold text-white/90">Designed around you</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Main About content */}
      <motion.section
        ref={storyRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        className="py-20 md:py-28 relative overflow-hidden"
      >
        {/* Soft background orbs for depth */}
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -top-20 -left-32 w-80 h-80 md:w-96 md:h-96 rounded-full bg-accent/20 blur-3xl animate-float" />
          <div className="absolute bottom-0 -right-24 w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary/15 blur-3xl animate-float-slow" />
        </div>

        <div className="container px-4 mx-auto max-w-5xl space-y-20 relative z-10">
          {/* Intro copy under hero */}
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Curated holidays and resort stays across India and international destinations &mdash; crafted with taste,
              warmth, and detail.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: Sparkles, label: "Curated holidays" },
                { icon: Globe2, label: "Global escapes" },
                { icon: Heart, label: "Human service" },
                { icon: Shield, label: "Trusted planning" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -2, scale: 1.03 }}
                  className="glass-morphism rounded-2xl px-4 py-4 border border-white/10 shadow-3d hover:shadow-3d-hover transition-all duration-500"
                >
                  <div className="flex items-center justify-center gap-2">
                    <item.icon className="h-4 w-4 text-accent" />
                    <span className="text-[11px] sm:text-xs font-black tracking-[0.22em] uppercase text-white/90 text-shadow-strong">
                      {item.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* About narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-stretch perspective-1000">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 rounded-[2.75rem] overflow-hidden border border-white/10 shadow-3d glass-morphism-strong relative"
            >
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1600"
                  alt="Luxury travel and nature"
                  fill
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(255,255,255,0.10),transparent_60%)]" />
              </div>
              <div className="relative p-8 md:p-10 h-full flex flex-col justify-end">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism border border-white/15 w-fit bg-black/20">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <span className="text-xs font-black tracking-[0.25em] uppercase text-white/80">Our Story</span>
                </div>
                <p className="mt-5 text-2xl md:text-3xl font-serif font-bold text-white text-shadow-strong leading-tight">
                  Designed around you.
                </p>
                <p className="mt-3 text-sm md:text-base text-white/75 max-w-sm leading-relaxed">
                  A warm, human team with a luxury touch &mdash; turning destinations into memories.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 rounded-[2.75rem] border border-white/10 shadow-3d glass-morphism-strong p-8 md:p-10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { icon: Sparkles, title: "Curated holidays" },
                  { icon: Globe2, title: "Exclusive resort stays" },
                  { icon: Compass, title: "India & international" },
                  { icon: Heart, title: "Designed around you" },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    whileHover={{ y: -2, scale: 1.02 }}
                    className="group rounded-3xl border border-white/10 bg-black/15 p-6 hover:bg-black/25 transition-all duration-500"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-accent/15 border border-accent/20 flex items-center justify-center shadow-3d group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                        <item.icon className="h-5 w-5 text-accent group-hover:text-accent-foreground" />
                      </div>
                      <span className="text-sm font-black tracking-[0.22em] uppercase text-high-contrast">
                        {item.title}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    className="h-12 rounded-full bg-white text-black hover:bg-white/90 font-black uppercase tracking-[0.2em] text-xs shadow-3d"
                    asChild
                  >
                    <Link href="/contact">Talk to a Travel Expert</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="outline"
                    className="h-12 rounded-full bg-transparent border-white/25 text-white hover:bg-white hover:text-background font-black uppercase tracking-[0.2em] text-xs"
                    asChild
                  >
                    <Link href="/gallery">See Travel Moments</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Experience grid with staggered animations */}
      <motion.section
        ref={experiencesRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ staggerChildren: 0.15 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        className="py-20 md:py-28 relative overflow-hidden"
      >
        <div className="container px-4 mx-auto max-w-6xl space-y-12">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism border border-white/10">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-xs font-black tracking-[0.3em] text-accent uppercase">Experiences</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-high-contrast">
              Your mood. Your moment.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Beach Escapes",
                icon: Waves,
                image:
                  "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=1600",
              },
              {
                title: "Hill Retreats",
                icon: Mountain,
                image:
                  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1600",
              },
              {
                title: "Cultural Journeys",
                icon: Landmark,
                image:
                  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=1600",
              },
              {
                title: "Family Getaways",
                icon: Users,
                image:
                  "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1600",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative rounded-[2.25rem] overflow-hidden border border-white/10 shadow-3d hover:shadow-3d-hover transition-all duration-700"
              >
                <div className="relative h-[360px]">
                  <Image src={card.image} alt={card.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xl flex items-center justify-center shadow-3d">
                      <card.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-black tracking-[0.28em] uppercase text-white/65">Signature</p>
                      <p className="text-xl font-serif font-bold text-white text-shadow-strong truncate">{card.title}</p>
                    </div>
                  </div>
                  <div className="mt-5 h-px w-full bg-white/15" />
                  <div className="mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-white/80">
                    Explore
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Vision & Mission with horizontal scroll */}
      <motion.section
        ref={visionRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        className="py-20 md:py-28 relative overflow-hidden"
      >
        <div className="container px-4 mx-auto max-w-5xl space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism border border-white/10">
              <Heart className="h-4 w-4 text-accent" />
              <span className="text-xs font-black tracking-[0.3em] text-accent uppercase">Our Vision</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-high-contrast">
              Inspiring joyful, meaningful, and responsible exploration.
            </h2>
          </div>

          <div className="overflow-x-auto -mx-4 px-4 pb-2">
            <div className="flex gap-6 min-w-max snap-x snap-mandatory">
              {[
                {
                  label: "Vision",
                  title: "Joyful travel, crafted with meaning.",
                  desc: "Warm, human journeys that feel personal.",
                  icon: Heart,
                  color: "text-accent",
                  bg: "bg-accent/15",
                },
                {
                  label: "Mission",
                  title: "Making travel a way of life.",
                  desc: "Seamless, honest, unforgettable.",
                  icon: Compass,
                  color: "text-primary",
                  bg: "bg-primary/15",
                },
                {
                  label: "Promise",
                  title: "Calm planning. Beautiful moments.",
                  desc: "Confidence from first call to return.",
                  icon: Shield,
                  color: "text-secondary",
                  bg: "bg-secondary/15",
                },
              ].map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="snap-start w-[280px] sm:w-[420px] rounded-[2.5rem] glass-morphism-strong border border-white/10 shadow-3d p-8"
                >
                  <p className="text-xs font-black tracking-[0.3em] uppercase {card.color}">{card.label}</p>
                  <p className="mt-4 text-2xl font-serif font-bold text-high-contrast leading-tight">
                    {card.title}
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-2xl ${card.bg} border border-current/20 flex items-center justify-center`}>
                      <card.icon className={`h-5 w-5 ${card.color}`} />
                    </div>
                    <p className="text-sm text-muted-foreground">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Core Values with hover tooltips */}
      <motion.section
        ref={valuesRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        className="py-20 md:py-28 relative overflow-hidden"
      >
        {/* Animated 3D gradient background orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-transparent blur-3xl animate-float" />
          <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/25 via-cyan-500/15 to-transparent blur-3xl animate-float-slow" />
          <div className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full bg-gradient-to-br from-green-500/20 via-emerald-500/10 to-transparent blur-3xl animate-float" />
          <div className="absolute -bottom-20 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-orange-500/20 via-yellow-500/10 to-transparent blur-3xl animate-float-slow" />
        </div>
        <div className="container px-4 mx-auto max-w-5xl space-y-12 relative z-10">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism border border-white/10">
              <Shield className="h-4 w-4 text-secondary" />
              <span className="text-xs font-black tracking-[0.3em] text-secondary uppercase">Core Values</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-high-contrast">
              The principles that guide every journey.
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {[
              { title: "Passion", icon: Sparkles, tip: "Energy and care in every detail.", gradient: "from-purple-500/20 to-pink-500/20" },
              { title: "Delight", icon: Heart, tip: "Moments worth remembering.", gradient: "from-pink-500/20 to-rose-500/20" },
              { title: "Trust", icon: Shield, tip: "Transparent, honest planning.", gradient: "from-blue-500/20 to-cyan-500/20" },
              { title: "Sustainability", icon: Leaf, tip: "Respect for places and people.", gradient: "from-green-500/20 to-emerald-500/20" },
              { title: "Innovation", icon: Compass, tip: "Modern tools, seamless journeys.", gradient: "from-orange-500/20 to-yellow-500/20" },
              { title: "Teamwork", icon: Users, tip: "A united team behind you.", gradient: "from-indigo-500/20 to-purple-500/20" },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, scale: 1.03, rotateY: 5 }}
                className="group relative"
              >
                <div className="rounded-[2rem] p-[1px] bg-gradient-to-br from-white/25 via-white/10 to-white/5 hover:from-white/30 hover:via-white/15 hover:to-white/10 transition-all duration-500">
                  <div className="rounded-[2rem] h-full glass-morphism-strong border border-white/10 shadow-3d p-6 sm:p-7 hover:shadow-3d-hover transition-all duration-500">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${v.gradient} border border-white/20 flex items-center justify-center shadow-3d group-hover:rotate-12 transition-transform duration-500`}>
                      <v.icon className="h-7 w-7 text-white" />
                    </div>
                    <p className="mt-5 text-xs sm:text-sm font-black tracking-[0.25em] uppercase text-high-contrast">
                      {v.title}
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="px-4 py-2 rounded-full bg-black/70 border border-white/15 backdrop-blur-xl text-xs text-white/85 whitespace-nowrap shadow-3d">
                    {v.tip}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        ref={ctaRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        className="pt-4"
      >
        <div className="relative overflow-hidden rounded-[3rem] border border-white/10 shadow-3d">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=2000"
              alt="Calming travel background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />
          </div>

          <div className="relative px-6 md:px-12 py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <p className="text-2xl md:text-3xl font-serif font-bold text-white text-shadow-strong leading-tight">
                Every journey leaves you richer in memories, lighter in worries, and happier at heart.
              </p>
              <p className="text-sm md:text-base text-white/75 max-w-xl">
                Start your next chapter with a team that treats travel like art.
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                className="h-14 px-10 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-black uppercase tracking-[0.2em] text-xs md:text-sm shadow-3d hover:shadow-3d-hover transition-all duration-300 group"
                asChild
              >
                <Link href="/destinations">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
