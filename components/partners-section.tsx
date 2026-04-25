"use client"

import Image from "next/image"

const partnerLogos = [
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
  "/logos/logo6.png",
  "/logos/logo7.png",
  "/logos/logo8.png",
  "/logos/logo10.png",
  "/logos/logo11.png",
  "/logos/logo12.png",
  "/logos/logo13.png",
  "/logos/logo14.png",
  "/logos/logo15.png",
]

export function PartnersSection() {
  const loopedLogos = [...partnerLogos, ...partnerLogos]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-card via-background to-card py-20 md:py-24">
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f27405]">Our Partners</p>
          <h3 className="mt-4 text-3xl font-bold leading-tight text-high-contrast sm:text-4xl md:text-5xl">
            Trusted by Leading Brands
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Strong collaborations that help us deliver consistent, memorable travel experiences.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-background via-background/80 to-transparent" />

          <div className="hf-partners-track flex w-max items-center gap-5 py-2 md:gap-6">
            {loopedLogos.map((logo, idx) => (
              <div
                key={`${logo}-${idx}`}
                className="flex h-32 w-56 shrink-0 items-center justify-center rounded-2xl border border-white/25 bg-white p-5 shadow-[0_10px_28px_rgba(15,23,42,0.08)] md:h-36 md:w-64 md:p-6"
              >
                <div className="relative h-full w-full">
                  <Image src={logo} alt="Partner logo" fill className="object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hf-partners-track {
          animation: partners-marquee 34s linear infinite;
          will-change: transform;
        }

        .hf-partners-track:hover {
          animation-play-state: paused;
        }

        @keyframes partners-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}
