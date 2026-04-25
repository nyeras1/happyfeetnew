"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-card to-background pb-24 pt-28 font-['Poppins'] sm:pb-28 sm:pt-32 md:pb-32 md:pt-40">
      {/* Decorative 3D elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-40 left-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl space-y-5 text-center sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism border border-white/10">
            <Send className="h-4 w-4 text-accent" />
            <span className="text-xs font-black tracking-[0.3em] text-accent uppercase">Get In Touch</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-high-contrast sm:text-5xl md:text-7xl lg:text-8xl">
            Let us craft your journey
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
            Our travel experts are here to craft a journey that fits your vibe. Share what you are dreaming of.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          {/* Contact Info - 4 columns */}
          <div className="space-y-6 lg:col-span-4 lg:space-y-8">
            <div className="glass-morphism-strong flex h-full flex-col justify-center space-y-7 rounded-[2rem] border border-white/15 p-6 shadow-3d sm:rounded-[2.5rem] sm:p-8 md:p-10 lg:sticky lg:top-28">
              <h3 className="mb-4 text-3xl font-bold text-high-contrast">Concierge Desk</h3>
              <div className="space-y-6 sm:space-y-8">
                {[
                  {
                    icon: MapPin,
                    title: "Headquarters",
                    text: "2nd floor, Om Shakthi, 57, complex, Hosur Rd, Garebhavipalya, Bengaluru, Karnataka 560068",
                    color: "text-primary",
                  },
                  { icon: Phone, title: "Phone Support", text: "+91 97429 97421", color: "text-secondary" },
                  { icon: Mail, title: "Email Inquiry", text: "customercare@happyfeetholidaysresorts.com", color: "text-accent" },
                  { icon: Clock, title: "Availability", text: "Mon - Sat: 9:00 - 19:00", color: "text-white" },
                ].map((item, i) => (
                  <div key={i} className="group flex gap-4 sm:gap-5 md:gap-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-white/10 glass-morphism shadow-3d transition-transform group-hover:scale-110 sm:h-14 sm:w-14">
                      <item.icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-xs text-muted-foreground uppercase tracking-[0.2em] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm font-semibold leading-relaxed text-high-contrast break-all sm:text-base md:text-lg">{item.text}</p>
                    </div>
                  </div>
                ))}
                
                {/* Talk to Expert CTA */}
                <div className="pt-4 border-t border-white/10">
                  <Button
                    className="h-12 w-full rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FFD93D] text-sm font-bold uppercase tracking-[0.12em] text-black shadow-3d transition-all hover:scale-[1.02] hover:from-[#FF6B35]/90 hover:to-[#FFD93D]/90 hover:shadow-3d-hover sm:h-14"
                    onClick={() => window.open('tel:+919742997421')}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="h-5 w-5" />
                      Talk to Expert
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - 8 columns */}
          <div className="lg:col-span-8">
            <div className="glass-morphism-strong rounded-[2rem] border border-white/15 p-6 shadow-3d sm:rounded-[2.5rem] sm:p-8 md:p-12 lg:rounded-[3rem] lg:p-14">
              <h3 className="mb-10 text-4xl font-bold text-high-contrast">Share Your Travel Idea</h3>
              <form className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-7">
                <div className="space-y-3">
                  <label className="ml-1 text-xs font-black uppercase tracking-[0.14em] text-muted-foreground sm:ml-2 sm:text-sm">
                    Full Name
                  </label>
                  <Input
                    placeholder="Enter your name"
                    className="h-12 rounded-2xl border-white/20 bg-background/50 text-base focus:border-accent sm:h-14 sm:text-lg"
                  />
                </div>
                <div className="space-y-3">
                  <label className="ml-1 text-xs font-black uppercase tracking-[0.14em] text-muted-foreground sm:ml-2 sm:text-sm">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="h-12 rounded-2xl border-white/20 bg-background/50 text-base focus:border-accent sm:h-14 sm:text-lg"
                  />
                </div>
                <div className="space-y-3">
                  <label className="ml-1 text-xs font-black uppercase tracking-[0.14em] text-muted-foreground sm:ml-2 sm:text-sm">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    inputMode="tel"
                    placeholder="+91 98765 43210"
                    className="h-12 rounded-2xl border-white/20 bg-background/50 text-base focus:border-accent sm:h-14 sm:text-lg"
                  />
                </div>
                <div className="space-y-3">
                  <label className="ml-1 text-xs font-black uppercase tracking-[0.14em] text-muted-foreground sm:ml-2 sm:text-sm">
                    Subject
                  </label>
                  <Input
                    placeholder="How can we help?"
                    className="h-12 rounded-2xl border-white/20 bg-background/50 text-base focus:border-accent sm:h-14 sm:text-lg"
                  />
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="ml-1 text-xs font-black uppercase tracking-[0.14em] text-muted-foreground sm:ml-2 sm:text-sm">
                    Your Vision
                  </label>
                  <Textarea
                    placeholder="Tell us about your dream destination and preferences..."
                    className="min-h-[140px] rounded-3xl border-white/20 bg-background/50 p-4 text-base focus:border-accent sm:min-h-[180px] sm:p-6 sm:text-lg"
                  />
                </div>
                <div className="md:col-span-2 pt-4 sm:pt-6">
                  <Button className="h-12 w-full rounded-full bg-accent py-3 text-base font-black uppercase tracking-[0.14em] text-accent-foreground shadow-3d transition-all hover:scale-[1.02] hover:bg-accent/90 hover:shadow-3d-hover sm:h-14 sm:text-lg md:h-16 md:text-xl">
                    Send Inquiry
                    <Send className="ml-3 h-6 w-6" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <section className="mt-12 sm:mt-16 md:mt-20">
          <div className="glass-morphism-strong overflow-hidden rounded-[2rem] border border-white/15 shadow-3d sm:rounded-[2.5rem] md:rounded-[3rem]">
            <div className="px-6 pb-7 pt-8 sm:px-8 sm:pb-8 sm:pt-10 md:px-12 md:pb-10 md:pt-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl glass-morphism border border-white/10 flex items-center justify-center shadow-3d">
                    <MapPin className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-black tracking-[0.3em] uppercase text-muted-foreground">Find Us</p>
                    <h3 className="text-3xl font-bold text-high-contrast md:text-4xl">Bengaluru Office</h3>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="rounded-full h-12 px-8 bg-transparent border-white/20 hover:bg-white hover:text-background font-black uppercase tracking-[0.22em] text-[10px]"
                  asChild
                >
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=12.8979524,77.6341038"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Directions
                  </a>
                </Button>
              </div>

              <p className="mt-5 max-w-4xl text-sm leading-relaxed text-muted-foreground md:text-base">
                2nd Floor, Om Shakthi 57 Complex, Hosur Road, Garebhavipalya, Bengaluru, Karnataka – 560068, India
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.12),transparent_55%)]" />
              <div className="relative aspect-video min-h-[280px] w-full overflow-hidden rounded-2xl sm:min-h-[360px] md:min-h-[400px]">
                <iframe
                  title="Happy Feet Holidays & Resorts - Bengaluru Location"
                  src="https://www.google.com/maps?q=12.8979524,77.6341038&z=18&output=embed"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                {/* Custom Google Maps UI Overlay */}
                <div className="pointer-events-auto absolute bottom-3 left-1/2 w-[94%] max-w-sm -translate-x-1/2 transform sm:bottom-6 sm:w-80">
                  <div className="bg-white rounded-lg shadow-lg p-2 sm:p-3 w-full border border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-900 text-xs sm:text-sm truncate">Happy Feet Holidays & Resorts</h3>
                        <p className="text-xs text-gray-500 sm:text-xs mt-0.5 line-clamp-2">
                          2nd Floor, Om Shakthi 57 Complex, Hosur Road, Garebhavipalya, Bengaluru, Karnataka – 560068, India
                        </p>
                        <div className="flex items-center gap-1 mt-1.5">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className={`w-2 h-2 sm:w-3 sm:h-3 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            ))}
                          </div>
                          <span className="text-xs text-gray-700 font-medium">4.7</span>
                          <span className="text-xs text-gray-500">(128)</span>
                        </div>
                        <div className="flex gap-1 sm:gap-2 mt-2 sm:mt-3">
                          <button
                            onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=12.8979524,77.6341038', '_blank')}
                            className="flex-1 bg-blue-600 text-white text-xs font-medium py-1 sm:py-1.5 px-2 rounded hover:bg-blue-700 transition-colors"
                          >
                            Directions
                          </button>
                          <button
                            onClick={() => window.open('https://maps.app.goo.gl/QNYWiFURLQb1XMDe8', '_blank')}
                            className="flex-1 bg-gray-100 text-gray-700 text-xs font-medium py-1 sm:py-1.5 px-2 rounded hover:bg-gray-200 transition-colors"
                          >
                            View larger map
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
