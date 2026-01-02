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
                    text: "123 Luxury Ave, Adventure City",
                    color: "text-primary",
                  },
                  { icon: Phone, title: "Phone Support", text: "+1 (555) 123-4567", color: "text-secondary" },
                  { icon: Mail, title: "Email Inquiry", text: "concierge@happyfeet.com", color: "text-accent" },
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
                      <p className="text-lg font-semibold text-high-contrast">{item.text}</p>
                    </div>
                  </div>
                ))}
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
                <div className="md:col-span-2 pt-6">
                  <Button className="w-full h-18 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full text-xl font-black uppercase tracking-[0.2em] shadow-3d hover:shadow-3d-hover hover:scale-[1.02] transition-all py-8">
                    Send Inquiry
                    <Send className="ml-3 h-6 w-6" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
