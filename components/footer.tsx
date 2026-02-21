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
        setInlineMessage("Welcome to the Happy Feet Travel Community ✨ Exclusive journeys await you.")
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

      <div className="relative container mx-auto px-4 pt-20 pb-12">
        {/* Newsletter Section - Premium 3D Card */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto glass-morphism-strong rounded-3xl p-10 md:p-16 shadow-3d border-2 border-white/10 perspective-1000">
            <div className="text-center space-y-6 preserve-3d">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 mb-4 shadow-3d">
                <Send className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-high-contrast">
                Join Our Travel Community
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Subscribe to receive exclusive deals, travel inspiration, and insider tips delivered to your inbox.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mt-8">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`h-14 px-6 rounded-2xl bg-background/50 border-2 border-white/20 text-foreground placeholder:text-muted-foreground focus:border-accent transition-all premium-subscribe-input ${shake ? "premium-shake" : ""}`}
                  required
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  className={`h-14 px-8 rounded-2xl bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wider shadow-3d hover:shadow-3d-hover hover:scale-105 transition-all premium-subscribe-btn ${subscribeState === "loading" ? "premium-subscribe-btn--loading" : ""} ${subscribeState === "success" ? "premium-subscribe-btn--success" : ""} ${shake ? "premium-shake" : ""}`}
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

              <div className="h-10 mt-3 flex items-center justify-center">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Section - Takes 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-4xl font-serif font-bold text-high-contrast">Happy Feet</h3>
            <p className="text-base text-muted-foreground leading-relaxed max-w-md">
              Where dreams meet destinations. We craft extraordinary travel experiences that transform journeys into
              lifelong memories.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl glass-morphism border border-white/10">
                <Award className="h-5 w-5 text-accent" />
                <span className="text-sm font-semibold text-foreground">Award Winner</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl glass-morphism border border-white/10">
                <Shield className="h-5 w-5 text-secondary" />
                <span className="text-sm font-semibold text-foreground">Trusted</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl glass-morphism border border-white/10">
                <Globe2 className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-foreground">Global</span>
              </div>
            </div>

            {/* Social Media with 3D effects */}
            <div className="flex gap-4 pt-4">
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
                  className="w-14 h-14 rounded-2xl glass-morphism border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 shadow-3d hover:shadow-3d-hover hover:scale-110 hover:-translate-y-1 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6 text-foreground group-hover:text-accent-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - 2 columns */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-high-contrast uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
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
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground group-hover:bg-accent transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - 2 columns */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-high-contrast uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-4">
              {[
                "International Tours",
                "Corporate Outings",
                "Adventure Travel",
                "Luxury Resorts",
                "House Boat Stays",
                "Custom Packages",
              ].map((item) => (
                <li key={item}>
                  <span className="text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources - 2 columns */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-high-contrast uppercase tracking-wider">Resources</h4>
            <ul className="space-y-4">
              {[
                { label: "Travel Guide", href: "/guide" },
                { label: "FAQ", href: "/faq" },
                { label: "Careers", href: "/careers" },
                { label: "Franchise", href: "/franchise" },
                { label: "Support", href: "/support" },
                { label: "Press Kit", href: "/press" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground group-hover:bg-accent transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - 2 columns */}
          <div className="lg:col-span-2 lg:ml-0 lg:-ml-2">
            <h4 className="text-lg font-bold mb-6 text-high-contrast uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl glass-morphism border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-primary transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1 min-w-0">
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="text-base font-semibold text-foreground whitespace-nowrap">+91 97429 97421</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl glass-morphism border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-secondary transition-colors">
                  <Mail className="h-5 w-5 text-secondary" />
                </div>
                <div className="space-y-1 min-w-0">
                  <p className="text-sm text-muted-foreground">Email Us</p>
                  <p className="text-base font-semibold text-foreground break-all break-words">info@happyfeetholidaysresorts.com</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl glass-morphism border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-accent transition-colors">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div className="space-y-1 min-w-0">
                  <p className="text-sm text-muted-foreground">Visit Us</p>
                  <p className="text-base font-semibold text-foreground leading-relaxed break-words">
                    2nd floor, Om Shakthi, 57, complex, Hosur Rd
                    <br />
                    Bengaluru, Karnataka 560068
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with high contrast */}
        <div className="pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              © 2026 Happy Feet Holidays & Resorts. Made with{" "}
              <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" /> for travelers worldwide.
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/refund" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Refund & Cancellation Policy
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Cookie Policy
              </Link>
              <Link href="/sitemap" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
