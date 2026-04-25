"use client"

import type React from "react"

import Link from "next/link"
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
  Award,
  Shield,
  Globe2,
  Heart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect, useRef, useState } from "react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subscribeState, setSubscribeState] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [inlineMessage, setInlineMessage] = useState<string | null>(null)
  const [shake, setShake] = useState(false)
  const resetTimerRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current)
    }
  }, [])

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    const normalizedEmail = email.trim().toLowerCase()
    const isValidEmail = (() => {
      if (normalizedEmail.length > 254) return false
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(normalizedEmail)) return false
      if (normalizedEmail.includes("..")) return false

      const [local, domain] = normalizedEmail.split("@")
      if (!local || !domain) return false
      if (local.startsWith(".") || local.endsWith(".")) return false
      if (domain.startsWith("-") || domain.endsWith("-")) return false
      if (domain.startsWith(".") || domain.endsWith(".")) return false
      if (!domain.includes(".")) return false

      const domainLower = domain.toLowerCase()
      const blockedDomains = new Set([
        "gmail.co",
        "gmai.com",
        "gmial.com",
        "gamil.com",
        "gmail.con",
        "gmail.comm",
        "gmail.cpm",
        "gmail.cim",
      ])
      if (blockedDomains.has(domainLower)) return false

      return true
    })()

    if (!isValidEmail) {
      setInlineMessage("Please enter a valid email address.")
      setSubscribeState("error")
      setShake(true)
      window.setTimeout(() => setShake(false), 450)
      return
    }

    setIsSubmitting(true)
    setSubscribeState("loading")
    setInlineMessage(null)
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: normalizedEmail }),
      })

      const data = (await res.json().catch(() => null)) as
        | { ok?: boolean; code?: string; message?: string }
        | null

      if (!res.ok) {
        setInlineMessage(data?.message || "Something went wrong, please try again")
        setSubscribeState("error")
        setShake(true)
        window.setTimeout(() => setShake(false), 450)
        return
      }

      if (data?.code === "DUPLICATE") {
        setInlineMessage(data?.message || "You’re already subscribed")
        setSubscribeState("success")
      } else {
        setEmail("")
        setInlineMessage("Welcome to Happy Feet. You are in our travel family now.")
        setSubscribeState("success")
      }

      if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current)
      resetTimerRef.current = window.setTimeout(() => {
        setSubscribeState("idle")
        setInlineMessage(null)
      }, 5200)
    } catch {
      setInlineMessage("Something went wrong, please try again")
      setSubscribeState("error")
      setShake(true)
      window.setTimeout(() => setShake(false), 450)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="relative bg-gradient-to-br from-background via-card to-background text-foreground overflow-hidden">
      {/* Decorative 3D elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float" />
      </div>

      <div className="relative container mx-auto px-4 pb-12 pt-14 sm:pt-16 md:pt-20">
        {/* Newsletter Section - Premium 3D Card */}
        <div className="mb-12 md:mb-20">
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/15 glass-morphism-strong p-6 shadow-3d perspective-1000 sm:p-8 md:border-2 md:border-white/10 md:p-16">
            <div className="text-center space-y-6 preserve-3d">
              <div className="mb-2 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent/20 shadow-3d sm:mb-4 sm:h-20 sm:w-20">
                <Send className="h-7 w-7 text-accent sm:h-10 sm:w-10" />
              </div>
              <h3 className="text-2xl font-bold text-high-contrast sm:text-3xl md:text-5xl">
                Join the Happy Feet Family
              </h3>
              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
                Get destination stories, travel ideas, and helpful updates from our team.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="mx-auto mt-4 flex max-w-xl flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`h-12 rounded-2xl border border-white/25 bg-background/50 px-4 text-sm text-foreground placeholder:text-muted-foreground transition-all focus:border-accent sm:h-14 sm:border-2 sm:px-6 sm:text-base premium-subscribe-input ${shake ? "premium-shake" : ""}`}
                  required
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  className={`h-12 rounded-2xl bg-accent px-6 text-sm font-bold uppercase tracking-[0.14em] text-accent-foreground shadow-3d transition-all hover:scale-[1.02] hover:bg-accent/90 sm:h-14 sm:px-8 sm:text-base sm:tracking-wider sm:hover:scale-105 sm:hover:shadow-3d-hover premium-subscribe-btn ${subscribeState === "loading" ? "premium-subscribe-btn--loading" : ""} ${subscribeState === "success" ? "premium-subscribe-btn--success" : ""} ${shake ? "premium-shake" : ""}`}
                  disabled={isSubmitting || subscribeState === "success"}
                >
                  <span className="premium-subscribe-btn__content" aria-live="polite">
                    <span className={`premium-subscribe-btn__label ${subscribeState !== "idle" ? "premium-subscribe-btn__label--hidden" : ""}`}>Subscribe</span>
                    <span className={`premium-subscribe-btn__loading ${subscribeState === "loading" ? "premium-subscribe-btn__loading--visible" : ""}`}>
                      <span className="premium-dots" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                      </span>
                    </span>
                    <span className={`premium-subscribe-btn__success ${subscribeState === "success" ? "premium-subscribe-btn__success--visible" : ""}`}>
                      <svg className="premium-check" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Subscribed
                    </span>
                  </span>
                </Button>
              </form>

              <div className="mt-2 flex min-h-8 items-center justify-center sm:mt-3 sm:h-10">
                {inlineMessage ? (
                  <p
                    className={`text-sm md:text-[15px] leading-relaxed text-muted-foreground max-w-xl premium-subscribe-message ${subscribeState === "success" ? "premium-subscribe-message--success" : ""} ${subscribeState === "error" ? "premium-subscribe-message--error" : ""}`}
                  >
                    {inlineMessage}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content - Mega Layout */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:mb-16 md:grid-cols-2 md:gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Brand Section - Takes 4 columns */}
          <div className="space-y-5 lg:col-span-4">
            <h3 className="text-3xl font-bold text-high-contrast sm:text-4xl">Happy Feet</h3>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              We design heartfelt journeys across India and beyond, with care in every small detail.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 pt-2 sm:gap-3 sm:pt-4">
              <div className="flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 glass-morphism">
                <Award className="h-5 w-5 text-accent" />
                <span className="text-xs font-semibold text-foreground sm:text-sm">Trusted Service</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 glass-morphism">
                <Shield className="h-5 w-5 text-secondary" />
                <span className="text-xs font-semibold text-foreground sm:text-sm">Trusted</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 glass-morphism">
                <Globe2 className="h-5 w-5 text-primary" />
                <span className="text-xs font-semibold text-foreground sm:text-sm">Global</span>
              </div>
            </div>

            {/* Social Media with 3D effects */}
            <div className="flex gap-3 pt-2 sm:gap-4 sm:pt-4">
              {[
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/happy_feet_holidays?igsh=aWx1NDJ4bmhoMno%3D" },
                { icon: Twitter, label: "Twitter", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer noopener" : undefined}
                  className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 glass-morphism transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-accent hover:bg-accent hover:shadow-3d-hover sm:h-14 sm:w-14 sm:rounded-2xl sm:shadow-3d"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-foreground transition-colors group-hover:text-accent-foreground sm:h-6 sm:w-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4 lg:gap-6">
          {/* Quick Links - 2 columns */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-high-contrast sm:mb-5 sm:text-base lg:mb-6 lg:text-lg lg:tracking-wider">Quick Links</h4>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { label: "Home", href: "/" },
                { label: "Packages", href: "/packages" },
                { label: "Gallery", href: "/gallery" },
                { label: "About Us", href: "/about" },
                { label: "Testimonials", href: "/#testimonials" },
                { label: "Blog", href: "/blog" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-accent sm:text-base"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground group-hover:bg-accent transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - 2 columns */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-high-contrast sm:mb-5 sm:text-base lg:mb-6 lg:text-lg lg:tracking-wider">Our Services</h4>
            <ul className="space-y-3 sm:space-y-4">
              {[
                "International Journeys",
                "Corporate Outings",
                "Adventure Travel",
                "Luxury Resorts",
                "House Boat Stays",
                "Tailored Itineraries",
              ].map((item) => (
                <li key={item}>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground sm:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources - 2 columns */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-high-contrast sm:mb-5 sm:text-base lg:mb-6 lg:text-lg lg:tracking-wider">Resources</h4>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { label: "Travel Guide", href: "/guide" },
                { label: "FAQ", href: "/faq" },
                { label: "Careers", href: "/careers" },
                { label: "Franchise", href: "/franchise" },
                { label: "Support", href: "/faq" },
                { label: "Press Kit", href: "/press" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-accent sm:text-base"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground group-hover:bg-accent transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - 2 columns */}
          <div className="lg:ml-0 lg:-ml-2">
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-high-contrast sm:mb-5 sm:text-base lg:mb-6 lg:text-lg lg:tracking-wider">Contact Us</h4>
            <ul className="space-y-4 sm:space-y-5">
              <li className="flex items-start gap-4 group">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 glass-morphism transition-colors group-hover:border-primary sm:h-12 sm:w-12">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1 min-w-0">
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="text-sm font-semibold text-foreground whitespace-nowrap sm:text-base">+91 97429 97421</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 glass-morphism transition-colors group-hover:border-secondary sm:h-12 sm:w-12">
                  <Mail className="h-5 w-5 text-secondary" />
                </div>
                <div className="space-y-1 min-w-0">
                  <p className="text-sm text-muted-foreground">Email Us</p>
                  <p className="text-sm font-semibold text-foreground break-all break-words sm:text-base">info@happyfeetholidaysresorts.com</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 glass-morphism transition-colors group-hover:border-accent sm:h-12 sm:w-12">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div className="space-y-1 min-w-0">
                  <p className="text-sm text-muted-foreground">Visit Us</p>
                  <p className="text-sm font-semibold text-foreground leading-relaxed break-words sm:text-base">
                    2nd floor, Om Shakthi, 57, complex, Hosur Rd
                    <br />
                    Bengaluru, Karnataka 560068
                  </p>
                </div>
              </li>
            </ul>
          </div>
          </div>
        </div>

        {/* Bottom Bar with high contrast */}
        <div className="border-t border-white/10 pt-8 md:pt-10">
          <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between md:gap-6">
            <p className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
              © 2026 Happy Feet Holidays & Resorts. Crafted with{" "}
              <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" /> for travelers worldwide.
            </p>
            <div className="grid w-full grid-cols-2 gap-x-4 gap-y-2 sm:flex sm:w-auto sm:flex-wrap sm:items-center sm:gap-6 md:gap-8">
              <Link href="/terms" className="text-xs text-muted-foreground transition-colors hover:text-accent sm:text-sm">
                Terms & Conditions
              </Link>
              <Link href="/refund" className="text-xs text-muted-foreground transition-colors hover:text-accent sm:text-sm">
                Refund & Cancellation Policy
              </Link>
              <Link href="/privacy" className="text-xs text-muted-foreground transition-colors hover:text-accent sm:text-sm">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-xs text-muted-foreground transition-colors hover:text-accent sm:text-sm">
                Cookie Policy
              </Link>
              <Link href="/sitemap" className="text-xs text-muted-foreground transition-colors hover:text-accent sm:text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
