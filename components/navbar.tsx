"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true) // Trigger entrance animations
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/destinations", label: "Destinations" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    // MASTER CONTAINER STRUCTURE
    <header className="fixed top-0 left-0 right-0 z-[100] h-0 pointer-events-none">

      {/* =================================================================
          LOGO SECTION (EXTERNAL)
      ================================================================= */}
      <div
        className={cn(
          "pointer-events-auto absolute z-[70] transition-all duration-500 ease-out",
          // Desktop/Tablet Positioning
          "lg:top-[64px] lg:left-16 lg:-translate-y-1/2",
          // Mobile Positioning
          "left-1/2 -translate-x-1/2 top-8",
          loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        )}
      >
        <Link
          href="/"
          className="block relative group perspective-1000"
          aria-label="Happy Feet Holidays & Resorts"
        >
          <div className={cn(
            "relative transition-all duration-500",
            "h-[100px] w-[280px]",      // Mobile
            "md:h-[140px] md:w-[400px]", // Tablet
            "lg:h-[180px] lg:w-[520px]", // Desktop
            "group-hover:scale-105 group-active:scale-102"
          )}>
            <Image
              src="/logo-CZBEvsvV.png"
              alt="Happy Feet Holidays & Resorts - Travel stories made personal"
              fill
              className={cn(
                "object-contain",
                "drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
              )}
              priority
              sizes="(max-width: 768px) 280px, 520px"
            />
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 blur-[60px] rounded-full transition-all duration-500 group-hover:blur-[80px]" />
          </div>
        </Link>
      </div>

      {/* =================================================================
          NAVBAR CONTAINER (GLASSMORPHISM PILL)
          - Optimized Width (Shrink Wrapped)
      ================================================================= */}
      <div className={cn(
        "pointer-events-auto absolute left-0 right-0 flex justify-center",
        "transition-all duration-600 ease-out delay-200", // Entrance animation
        loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
      )}>
        <nav
          className={cn(
            "relative",
            // WIDTH OPTIMIZATION: Changed from max-w-[1400px] w-full to w-fit
            // This ensures the pill wraps the content tightly
            "w-[90%] md:w-fit",
            "mx-auto",

            // Height Transition
            scrolled ? "h-[60px]" : "h-[70px]",
            "lg:mt-6",
            "mt-[140px]", // Mobile top spacing

            // Shape & Visuals
            "rounded-[3rem]",
            "border border-white/20",
            "shadow-[0_8px_28px_rgba(0,0,0,0.28),0_1px_2px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.18)]",

            // Flex Layout (Static Flow now, no absolute links)
            "flex items-center justify-between lg:justify-center gap-5 lg:gap-10 px-5", // tighter horizontal footprint

            "transition-all duration-400 ease-out",
            "backdrop-blur-[20px] backdrop-saturate-[150%]"
          )}
          style={{
            background: "linear-gradient(135deg, rgba(15, 15, 15, 0.62) 0%, rgba(35, 35, 35, 0.5) 52%, rgba(15, 15, 15, 0.62) 100%)"
          }}
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 rounded-[3rem] overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_8s_infinite] blur-[8px]" />
          </div>

          {/* 
                Navigation Links - STATIC FLOW
                Removed absolute positioning to allow shrink-wrap
             */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative group px-3 py-2 rounded-xl whitespace-nowrap",
                  "font-['Poppins'] font-semibold text-[14px] uppercase tracking-[0.1em]",
                  "text-white/90 hover:text-white transition-all duration-300",
                  "hover:bg-white/10 hover:scale-105",
                  "opacity-0 animate-fade-in-up"
                )}
                style={{
                  textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
                  animationDelay: `${400 + (index * 80)}ms`,
                  animationFillMode: "forwards"
                }}
              >
                {link.label}
                <span className="absolute bottom-[6px] left-0 h-[3px] bg-gradient-to-r from-[#FF6B35] via-[#FFD93D] to-[#FF6B35] w-0 group-hover:w-full transition-all duration-500 rounded-sm shadow-[0_0_12px_currentColor]" />
              </Link>
            ))}
          </div>

          {/* 
                CTA Button - STATIC FLOW
                Removed absolute positioning/ml-auto (except ml-auto on mobile spacer if needed, but flex gap handles it)
             */}
          <div className="hidden lg:block opacity-0 animate-scale-in"
            style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
          >
            <Button
              asChild
              className={cn(
                "relative overflow-hidden group",
                "h-10 px-6 rounded-full",
                "font-['Poppins'] font-extrabold text-[11px] uppercase tracking-[0.1em]",
                "text-[#1A1A1A]",
                "border-2 border-white/40",
                "shadow-[0_6px_25px_rgba(255,107,53,0.45),0_2px_8px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.3)]",
                "hover:shadow-[0_12px_35px_rgba(255,107,53,0.6),0_4px_12px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.4)]",
                "hover:scale-108 hover:-translate-y-0.5 active:scale-96 active:translate-y-0",
                "transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
              )}
              style={{
                background: "linear-gradient(135deg, #FF6B35 0%, #FF8C42 50%, #FFD93D 100%)"
              }}
            >
              <Link href="/book" className="relative z-10 flex items-center">
                START JOURNEY
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_0.8s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 bg-white/10 rounded-full border border-white/20 backdrop-blur-md active:scale-95 transition-transform"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="text-white box-content w-6 h-6" /> : <Menu className="text-white box-content w-6 h-6" />}
            </button>
          </div>

          {/* Mobile CTA */}
          <div className="lg:hidden ml-auto">
            <Button
              asChild
              size="sm"
              className="rounded-full bg-[#FF6B35] text-white font-bold uppercase text-[10px] tracking-wide shadow-lg"
            >
              <Link href="/book">Journey</Link>
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Dropdown & Keyframes */}
      <div
        className={cn(
          "lg:hidden fixed left-4 right-4 z-40 transition-all duration-500 ease-in-out pointer-events-auto",
          isMobileMenuOpen
            ? "top-[230px] opacity-100 translate-y-0"
            : "top-[200px] opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-[1.5rem] p-6 shadow-2xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white text-lg font-semibold text-center py-2 border-b border-white/10 last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-full mt-2 rounded-full h-12 bg-gradient-to-r from-[#FF6B35] to-[#FFD93D] text-black font-bold"
            >
              <Link href="/book" onClick={() => setIsMobileMenuOpen(false)}>
                START JOURNEY
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-up {
            animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-scale-in {
            animation: scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>

    </header>
  )
}
