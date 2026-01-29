"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/destinations", label: "Destinations" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 flex justify-center pointer-events-none">
      <Link
        href="/"
        className="pointer-events-auto absolute left-0 top-0 z-[60] flex items-center hover:scale-105 transition-all duration-500"
      >
        <div className="relative h-10 w-36 sm:h-12 sm:w-52 md:h-16 md:w-[11rem] origin-top-left scale-[2]">
          <Image
            src="/logo-CZBEvsvV.png"
            alt="Happy Feet Holidays & Resorts logo"
            fill
            className="object-contain drop-shadow-md"
            priority
          />
        </div>
      </Link>

      <nav
        className={cn(
          "mt-4 w-full max-w-5xl h-20 rounded-full flex items-center justify-between px-6 md:px-12",
          "relative z-50",
          "glass-morphism-strong shadow-3d pointer-events-auto",
          "border-2 border-white/20",
          "backdrop-blur-3xl bg-white/10",
        )}
      >

        {/* Desktop Links with maximum readability */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-[var(--font-nav)] text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-300",
                "text-white/90 hover:text-white hover:scale-110",
                "relative after:absolute after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1",
                "after:bg-accent after:rounded-full after:transition-all after:duration-500 hover:after:w-4",
                "text-shadow-strong",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button with immersive 3D styling */}
        <div className="hidden md:flex items-center gap-6">
          <Button
            variant="outline"
            className={cn(
              "rounded-full h-12 px-10 text-[10px] font-black uppercase tracking-[0.2em]",
              "bg-accent hover:bg-accent/90 text-accent-foreground border-none",
              "shadow-3d hover:shadow-3d-hover hover:scale-105 transition-all duration-500 hover:-translate-y-1",
            )}
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-3 rounded-full glass-morphism hover:bg-white/10 transition-all"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </nav>

      {/* Mobile Menu with 3D design */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-24 left-4 right-4 pointer-events-auto animate-fade-in">
          <div className="glass-morphism-strong rounded-3xl p-6 shadow-3d border-2 border-white/20">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-[var(--font-nav)] px-6 py-4 text-white font-semibold hover:bg-white/10 rounded-2xl transition-all text-shadow-strong"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/20">
              <Button className="w-full h-14 rounded-2xl bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wider shadow-3d">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
