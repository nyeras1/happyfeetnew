import { HeroSection } from "@/components/hero-section"
import { AboutPreview } from "@/components/about-preview"
import { VisionMission } from "@/components/vision-mission"
import { PopularPackages } from "@/components/popular-packages"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutPreview />
      <VisionMission />
      <PopularPackages />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
