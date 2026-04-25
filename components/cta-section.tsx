import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-32 bg-background perspective-1500">
      <div className="container px-4 mx-auto">
        <div className="relative group preserve-3d">
          <div className="absolute inset-0 bg-accent/20 blur-[120px] rounded-full -z-10 animate-pulse" />

          <div className="glass-morphism-strong rounded-[4rem] p-16 md:p-32 text-center text-white relative overflow-hidden shadow-3d border-2 border-white/10 group-hover:shadow-3d-hover transition-all duration-700">
            {/* Background 3D Elements */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />

            <div className="relative z-10 max-w-4xl mx-auto space-y-10 preserve-3d">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-morphism border-2 border-white/20 shadow-3d mb-4 animate-fade-in">
                <Sparkles className="h-5 w-5 text-accent" />
                <span className="text-xs font-black tracking-[0.3em] text-white uppercase">Your Journey Awaits</span>
              </div>

              <h2 className="text-6xl md:text-8xl font-bold text-high-contrast leading-[0.9] tracking-tighter">
                Ready to <span className="text-accent italic">Explore</span>
                <br />
                the World?
              </h2>

              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed text-shadow-strong">
                Come, let us craft your next beautiful trip with warm support from our travel team.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-10">
                <Button
                  asChild
                  size="lg"
                  className="h-20 px-14 bg-white text-black hover:bg-accent hover:text-white text-xl font-black uppercase tracking-[0.2em] rounded-full shadow-3d hover:shadow-3d-hover transition-all duration-500 hover:scale-105 hover:-translate-y-2 group/btn"
                >
                  <Link href="/book">
                    Start Journey
                    <ArrowRight className="ml-3 h-6 w-6 group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-20 px-14 border-2 border-white/30 text-white hover:bg-white hover:text-black text-xl font-black uppercase tracking-[0.2em] rounded-full backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-transparent shadow-3d"
                >
                  <Link href="/contact">Talk to Travel Expert</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
