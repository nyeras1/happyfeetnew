import { HeroSection } from "@/components/hero-section"
import { TopDestinations } from "@/components/top-destinations"
import { PopularPackages } from "@/components/popular-packages"
import { PartnersSection } from "@/components/partners-section"
import { PackageCategories } from "@/components/package-categories"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen font-['Poppins']">
      <HeroSection />

      <TopDestinations />
      <PopularPackages />
      <PartnersSection />
      <PackageCategories />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
