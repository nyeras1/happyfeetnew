"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-40 pb-32 relative overflow-hidden bg-gradient-to-br from-background via-card to-background">
      {/* Decorative 3D elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-40 left-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center space-y-6 mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism border border-white/10">
            <Send className="h-4 w-4 text-accent" />
            <span className="text-xs font-black tracking-[0.3em] text-accent uppercase">Get In Touch</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter text-high-contrast">
            Plan Your Journey
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our luxury travel experts are dedicated to crafting your perfect escape. Connect with us to start your
            adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info - 4 columns */}
          <div className="lg:col-span-4 space-y-8">
            <div className="glass-morphism-strong p-10 rounded-[3rem] shadow-3d border-2 border-white/10 space-y-8 h-full flex flex-col justify-center">
              <h3 className="text-3xl font-serif font-bold text-high-contrast mb-4">Concierge Desk</h3>
              <div className="space-y-8">
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
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl glass-morphism border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-3d">
                      <item.icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-muted-foreground uppercase tracking-[0.2em] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-lg font-semibold text-high-contrast break-all break-words">{item.text}</p>
                    </div>
                  </div>
                ))}
                
                {/* Talk to Expert CTA */}
                <div className="pt-4 border-t border-white/10">
                  <Button 
                    className="w-full h-14 bg-gradient-to-r from-[#FF6B35] to-[#FFD93D] hover:from-[#FF6B35]/90 hover:to-[#FFD93D]/90 text-black font-bold uppercase tracking-[0.14em] rounded-full shadow-3d hover:shadow-3d-hover hover:scale-[1.02] transition-all"
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
            <div className="glass-morphism-strong p-10 md:p-16 rounded-[4rem] shadow-3d border-2 border-white/10">
              <h3 className="text-4xl font-serif font-bold text-high-contrast mb-10">Begin Your Experience</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-2">
                    Full Name
                  </label>
                  <Input
                    placeholder="Enter your name"
                    className="rounded-2xl h-16 bg-background/50 border-white/20 focus:border-accent text-lg"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-2">
                    Email Address
                  </label>
                  <Input
                    placeholder="your@email.com"
                    className="rounded-2xl h-16 bg-background/50 border-white/20 focus:border-accent text-lg"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-2">
                    Phone Number
                  </label>
                  <Input
                    placeholder="+1 (555) 000-0000"
                    className="rounded-2xl h-16 bg-background/50 border-white/20 focus:border-accent text-lg"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-2">
                    Subject
                  </label>
                  <Input
                    placeholder="How can we help?"
                    className="rounded-2xl h-16 bg-background/50 border-white/20 focus:border-accent text-lg"
                  />
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-2">
                    Your Vision
                  </label>
                  <Textarea
                    placeholder="Tell us about your dream destination and preferences..."
                    className="rounded-3xl min-h-[180px] bg-background/50 border-white/20 focus:border-accent text-lg p-6"
                  />
                </div>
                <div className="md:col-span-2 pt-4 sm:pt-6">
                  <Button className="w-full h-14 sm:h-16 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full text-lg sm:text-xl font-black uppercase tracking-[0.2em] shadow-3d hover:shadow-3d-hover hover:scale-[1.02] transition-all py-3 sm:py-4">
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
          <div className="glass-morphism-strong rounded-[4rem] border-2 border-white/10 shadow-3d overflow-hidden">
            <div className="px-8 md:px-14 pt-10 md:pt-14 pb-8 md:pb-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl glass-morphism border border-white/10 flex items-center justify-center shadow-3d">
                    <MapPin className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-black tracking-[0.3em] uppercase text-muted-foreground">Find Us</p>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-high-contrast">Bengaluru Office</h3>
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

              <p className="mt-6 text-sm md:text-base text-muted-foreground leading-relaxed max-w-4xl">
                2nd Floor, Om Shakthi 57 Complex, Hosur Road, Garebhavipalya, Bengaluru, Karnataka – 560068, India
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.12),transparent_55%)]" />
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl min-h-[300px] sm:min-h-[400px]">
                <iframe
                  title="Happy Feet Holidays & Resorts - Bengaluru Location"
                  src="https://www.google.com/maps?q=12.8979524,77.6341038&z=18&output=embed"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                {/* Custom Google Maps UI Overlay */}
                <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-auto w-11/12 sm:w-72 max-w-sm">
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
