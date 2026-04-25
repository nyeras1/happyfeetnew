"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Compass, HeartHandshake, Lightbulb, ShieldCheck, Sparkles, Trees, Users } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const coreValues = [
  {
    title: "Passion for Travel",
    description: "We travel with our hearts first, so every itinerary feels alive and deeply personal.",
    icon: Compass,
  },
  {
    title: "Customer Delight",
    description: "Beyond satisfaction, we design moments that surprise, comfort, and stay with you forever.",
    icon: HeartHandshake,
  },
  {
    title: "Innovation & Creativity",
    description: "Fresh ideas, smart planning, and imaginative experiences shape every journey we curate.",
    icon: Lightbulb,
  },
  {
    title: "Integrity & Trust",
    description: "Transparent pricing, honest guidance, and dependable support at every step of your travel.",
    icon: ShieldCheck,
  },
  {
    title: "Sustainability & Responsibility",
    description: "We respect places, people, and culture while building travel that gives back meaningfully.",
    icon: Trees,
  },
  {
    title: "Teamwork & Collaboration",
    description: "Our specialists work as one seamless team to create effortless and beautiful journeys.",
    icon: Users,
  },
]

export default function AboutPage() {
  return (
    <div className="relative overflow-x-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 opacity-45">
        <div className="absolute -top-28 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#f27405]/20 blur-[140px]" />
        <div className="absolute top-[42rem] -left-24 h-96 w-96 rounded-full bg-emerald-500/15 blur-[120px]" />
        <div className="absolute bottom-20 right-0 h-80 w-80 rounded-full bg-orange-400/15 blur-[120px]" />
      </div>

      <section className="relative min-h-[100svh] pt-52 sm:pt-44 md:pt-36">
        <div className="absolute inset-0">
          <Image
            src="/canvas%20images/aboutpage.png"
            alt="Majestic mountain travel destination"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(0,0,0,0.3)_18%,rgba(0,0,0,0.14)_45%,rgba(0,0,0,0.36)_100%)] md:bg-[linear-gradient(115deg,rgba(0,0,0,0.44)_18%,rgba(0,0,0,0.26)_45%,rgba(0,0,0,0.5)_100%)]" />
        </div>

        <div className="container relative mx-auto max-w-6xl px-4 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="mt-2 text-4xl font-black leading-[0.95] text-white sm:mt-4 sm:text-6xl md:mt-7 md:text-7xl lg:text-8xl">
              We turn travel
              <span className="block bg-gradient-to-r from-[#f27405] via-orange-300 to-amber-200 bg-clip-text text-transparent">
                into pure joy.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-100/90 sm:text-lg md:text-xl">
              Happy Feet Holidays Promise: Happy Feet Holidays brings your travel dreams to life with thoughtfully curated
              holiday experiences. From relaxing getaways to exciting adventures, we offer personalized packages,
              comfortable stays, and seamless travel planning. With warm service and attention to detail, we ensure every
              journey is memorable, joyful, and truly worth cherishing.
            </p>

            <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
              {["5-star experiences.", "Real-world budgets.", "Curated with care. Priced with honesty."].map((point) => (
                <div key={point} className="px-4 py-3">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-white/90">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-14 rounded-full bg-white px-9 text-xs font-black uppercase tracking-[0.22em] text-slate-950 hover:bg-white/90 sm:text-sm"
                asChild
              >
                <Link href="/destinations">
                  Explore Packages
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-white/30 bg-white/5 px-9 text-xs font-black uppercase tracking-[0.22em] text-white hover:bg-white hover:text-slate-950 sm:text-sm"
                asChild
              >
                <Link href="/contact">Plan Your Trip</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
              className="rounded-[2rem] border border-white/15 bg-white/[0.06] p-8 shadow-[0_30px_80px_-30px_rgba(45,212,191,0.28)] backdrop-blur-xl md:p-10"
            >
              <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#f27405]">Mission</p>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-white md:text-4xl">Travel as a way of life.</h2>
              <p className="mt-5 text-base leading-relaxed text-slate-200/95 md:text-lg">
                We aim to make travel a way of life. Every journey with Happy Feet Holidays is designed to leave you richer
                in memories, lighter in worries, and happier at heart through thoughtfully curated experiences, seamless
                planning, and honest service.
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
              className="rounded-[2rem] border border-white/15 bg-gradient-to-br from-orange-300/10 to-[#f27405]/15 p-8 shadow-[0_30px_80px_-30px_rgba(251,146,60,0.25)] backdrop-blur-xl md:p-10"
            >
              <p className="text-xs font-bold uppercase tracking-[0.34em] text-orange-200">Vision</p>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-white md:text-4xl">India&apos;s most trusted travel brand.</h2>
              <p className="mt-5 text-base leading-relaxed text-slate-200/95 md:text-lg">
                To become India&apos;s most trusted and innovative travel brand, creating unforgettable global experience that
                inspire happiness, connection, and lifelong memories for every traveler.
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#f27405]">Our Core Values</p>
            <h3 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">Built on principles that travelers can trust.</h3>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group rounded-[1.75rem] border border-white/20 bg-black/45 p-6 backdrop-blur-md transition-all duration-300 hover:border-[#f27405]/45 hover:shadow-[0_20px_65px_-30px_rgba(242,116,5,0.5)]"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-3">
                    <value.icon className="h-5 w-5 text-[#f27405]" />
                  </div>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-white">{value.title}</p>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-slate-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-20 md:pb-28">
        <div className="container mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2.4rem] border border-white/15">
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2200"
              alt="Ocean travel background"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(0,0,0,0.68)_20%,rgba(0,0,0,0.42)_58%,rgba(0,0,0,0.62)_100%)]" />
            <div className="relative z-10 px-6 py-14 md:px-14 md:py-20">
              <p className="max-w-3xl text-2xl font-bold leading-tight text-white md:text-4xl">
                From your first idea to your final memory, Happy Feet Holidays is your partner in creating journeys worth
                cherishing.
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-200 md:text-base">
                If you can dream it, we can design it with care, precision, and hospitality that feels deeply personal.
              </p>
              <Button
                size="lg"
                className="mt-8 h-14 rounded-full bg-[#f27405] px-9 text-xs font-black uppercase tracking-[0.22em] text-slate-950 hover:bg-[#ff8c24] sm:text-sm"
                asChild
              >
                <Link href="/book">
                  Start Planning Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
