import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShieldCheck, Globe, TrendingUp, Zap, Sparkles } from "lucide-react"

export default function FranchisePage() {
  return (
    <div className="min-h-screen pt-40 pb-32 relative overflow-hidden bg-gradient-to-br from-background via-card to-background">
      {/* Decorative 3D elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism border border-white/10">
                <Sparkles className="h-4 w-4 text-secondary" />
                <span className="text-xs font-black tracking-[0.3em] text-secondary uppercase">Partnership</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter text-high-contrast leading-[0.9]">
                Grow With
                <br />
                <span className="text-secondary italic">Happy Feet</span>
              </h1>
            </div>
            <p className="text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              Join India's fastest-growing luxury travel network. Our franchise model offers unparalleled support and
              access to exclusive resorts.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: ShieldCheck, title: "Trusted Brand", desc: "Premium brand equity", color: "bg-secondary" },
                { icon: Globe, title: "Global Network", desc: "Exclusive partnerships", color: "bg-primary" },
                { icon: TrendingUp, title: "High ROI", desc: "Proven business model", color: "bg-accent" },
                { icon: Zap, title: "Tech Support", desc: "Advanced booking tools", color: "bg-white" },
              ].map((benefit, i) => (
                <div
                  key={i}
                  className="flex gap-6 p-8 glass-morphism-strong rounded-3xl border border-white/10 shadow-3d hover:scale-105 transition-transform"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${benefit.color} ${benefit.color === "bg-white" ? "text-black" : "text-white"} flex items-center justify-center flex-shrink-0 shadow-3d`}
                  >
                    <benefit.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-high-contrast mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="glass-morphism-strong p-12 md:p-16 rounded-[4rem] shadow-3d border-2 border-white/10">
              <h3 className="text-4xl font-serif font-bold text-high-contrast mb-10">Franchise Inquiry</h3>
              <form className="space-y-8">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">
                    Full Name
                  </label>
                  <Input
                    placeholder="Enter your name"
                    className="rounded-2xl h-16 bg-background/50 border-white/20 focus:border-secondary text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">
                    Contact Number
                  </label>
                  <Input
                    placeholder="Your phone number"
                    className="rounded-2xl h-16 bg-background/50 border-white/20 focus:border-secondary text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">
                    Current City
                  </label>
                  <Input
                    placeholder="Your location"
                    className="rounded-2xl h-16 bg-background/50 border-white/20 focus:border-secondary text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">
                    Investment Capacity
                  </label>
                  <Input
                    placeholder="Approx. investment"
                    className="rounded-2xl h-16 bg-background/50 border-white/20 focus:border-secondary text-lg"
                  />
                </div>
                <Button className="w-full h-18 bg-secondary hover:bg-secondary/90 text-white py-8 rounded-full text-xl font-black uppercase tracking-[0.2em] shadow-3d hover:shadow-3d-hover hover:scale-[1.02] transition-all">
                  Apply Now
                </Button>
                <p className="text-center text-xs text-muted-foreground leading-relaxed">
                  By submitting, you agree to our{" "}
                  <span className="underline cursor-pointer">Franchise Terms & Conditions</span>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
