import { HeroSection } from "@/components/hero-section"
import { TopDestinations } from "@/components/top-destinations"
import { AboutPreview } from "@/components/about-preview"
import { VisionMission } from "@/components/vision-mission"
import { PopularPackages } from "@/components/popular-packages"
import { PackageCategories } from "@/components/package-categories"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <section className="relative w-full overflow-hidden bg-background">
        <div className="relative mx-auto w-full max-w-7xl px-4 md:px-8">
          <div className="relative h-[70vh] md:h-[80vh] rounded-[2.75rem] overflow-hidden border border-white/10 shadow-3d">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/Video_Creation_For_Travel_Agency.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-black/85 via-black/35 to-black/10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_55%)]" />

            <div className="absolute top-6 right-6 md:top-8 md:right-8 z-10">
              <Button
                asChild
                className="h-12 px-10 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-black uppercase tracking-[0.22em] shadow-3d hover:shadow-3d-hover hover:scale-105 transition-transform duration-300"
              >
                <a href="#top-destinations">Explore</a>
              </Button>
            </div>

            <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism border border-white/10 mb-6">
                <span className="text-xs font-black tracking-[0.3em] text-accent uppercase">Cinematic Preview</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter text-high-contrast text-shadow-strong">
                Watch your next journey
              </h2>
              <p className="mt-4 text-base md:text-lg text-white/85 leading-relaxed text-shadow-strong">
                A glimpse of the experiences we curate — handcrafted itineraries, breathtaking stays, and seamless travel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TopDestinations />
      <AboutPreview />
      <VisionMission />
      <PopularPackages />
      <PackageCategories />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
