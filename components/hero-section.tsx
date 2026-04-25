"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, PhoneCall } from "lucide-react"

export function HeroSection() {
  const phrase = "Happy Feet"
  const eeStart = phrase.indexOf("ee")
  const [typedText, setTypedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeoutId: number

    timeoutId = window.setTimeout(
      () => {
        if (!isDeleting && typedText.length < phrase.length) {
          setTypedText(phrase.slice(0, typedText.length + 1))
          return
        }

        if (!isDeleting && typedText.length === phrase.length) {
          setIsDeleting(true)
          return
        }

        if (isDeleting && typedText.length > 0) {
          setTypedText(typedText.slice(0, -1))
          return
        }

        if (isDeleting && typedText.length === 0) {
          setIsDeleting(false)
        }
      },
      !isDeleting && typedText.length === phrase.length ? 1200 : isDeleting ? 55 : 95,
    )

    return () => window.clearTimeout(timeoutId)
  }, [typedText, isDeleting, phrase])

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src="/canvas%20images/herosection.png"
          alt="Travel destinations collage"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.48),rgba(255,255,255,0.2)_40%,rgba(0,0,0,0.2)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.38)_0%,rgba(0,0,0,0.16)_45%,rgba(0,0,0,0.42)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-10 pt-60 sm:px-6 sm:pb-12 sm:pt-44 md:pt-32 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto mt-6 w-full max-w-5xl sm:mt-8"
        >
          <div className="text-center">
            <h1 className="text-[2rem] font-semibold leading-tight tracking-[-0.02em] text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.35)] sm:text-5xl md:text-6xl">
              Travel the World with{" "}
              <span className="inline-block font-black uppercase tracking-[0.02em] text-[#2da8ff]">
                <span>{typedText.slice(0, eeStart).replace(" ", "\u00A0")}</span>
                <span className="text-[#ff2f92]">{typedText.slice(eeStart, eeStart + 2)}</span>
                <span>{typedText.slice(eeStart + 2).replace(" ", "\u00A0")}</span>
                <motion.span
                  aria-hidden="true"
                  className="ml-0.5 inline-block h-[0.95em] w-[2px] bg-[#2da8ff] align-[-0.08em]"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </span>
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mx-auto mt-auto w-full max-w-5xl"
        >
          <p className="mx-auto max-w-4xl text-center text-base font-bold leading-relaxed tracking-[-0.01em] text-black/85 sm:text-lg md:text-xl">
            Beautifully curated experiences, trusted planning, and seamless support
            <br className="hidden sm:block" /> from the first idea to your final memory.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.1, ease: "easeOut" }}
          className="mx-auto mt-[38px] flex w-full max-w-5xl items-end justify-between gap-4"
        >
          <Link
            href="/destinations"
            className="inline-flex items-center px-1 py-1 text-lg font-black tracking-[0.02em] text-black transition-colors hover:text-black/75 sm:text-xl"
          >
            Explore Destinations
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-1 py-1 text-lg font-black tracking-[0.02em] text-black transition-colors hover:text-black/75 sm:text-xl"
          >
            Talk to Expert
            <PhoneCall className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
