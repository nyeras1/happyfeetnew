import type { Metadata } from "next"
import Image from "next/image"
import { ArrowRight, Compass, Heart, Leaf, Shield, Globe2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Us | Happy Feet Holidays & Resorts",
  description:
    "Learn more about Happy Feet Holidays and Resorts – our story, vision, mission, and values that shape every journey.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card text-foreground">
      {/* Hero banner with image */}
      <section className="relative h-[380px] md:h-[460px] lg:h-[520px] overflow-hidden pt-32 md:pt-40">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2000"
            alt="Happy travelers exploring breathtaking destinations"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background/80" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container px-4 mx-auto max-w-5xl">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism border border-white/10 bg-black/30">
                <Compass className="h-4 w-4 text-accent" />
                <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-white uppercase">
                  About Happy Feet Holidays
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-high-contrast leading-tight text-shadow-strong">
                Where dreams meet destinations.
              </h1>
              <p className="text-base md:text-lg text-white/85 max-w-xl leading-relaxed text-shadow-strong">
                Travel differently. Travel happily. With Happy Feet Holidays and Resorts, every journey becomes an
                unforgettable story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main About content */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Soft background orbs for depth */}
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -top-20 -left-32 w-80 h-80 md:w-96 md:h-96 rounded-full bg-accent/20 blur-3xl animate-float" />
          <div className="absolute bottom-0 -right-24 w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary/15 blur-3xl animate-float-slow" />
        </div>

        <div className="container px-4 mx-auto max-w-5xl space-y-20 relative z-10">
          {/* Intro copy under hero */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Happy Feet Holidays and Resorts is your trusted partner in discovering the world, offering an exciting array
              of curated holiday packages and exclusive resort stays across breathtaking destinations.
            </p>
          </div>

          {/* About narrative */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start perspective-1000">
            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed bg-black/10 md:bg-black/0 rounded-3xl md:rounded-none md:shadow-none shadow-3d md:shadow-none p-6 md:p-0 backdrop-blur-sm md:backdrop-blur-0">
              <p>
                We specialize in crafting tailor-made journeys that transform travel dreams into unforgettable memories
                &mdash; whether it&apos;s a relaxing beach escape, an adventurous mountain trek, or a luxurious cultural tour.
              </p>
              <p>
                At Happy Feet Holidays and Resorts, we go beyond the ordinary, providing a complete umbrella of travel
                solutions from customized itineraries and premium accommodations to guided experiences and seamless
                logistics.
              </p>
              <p>
                Step into a world of handpicked getaways, thoughtfully designed to let you explore, unwind, and truly
                live your travel story.
              </p>
              <p className="font-semibold text-foreground">
                Travel differently. Travel happily. With Happy Feet Holidays and Resorts.
              </p>
            </div>

            <div className="space-y-6 preserve-3d">
              <div className="glass-morphism-strong rounded-3xl p-8 shadow-3d border-2 border-white/10 space-y-4 transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-3d-hover">
                <h2 className="text-xl md:text-2xl font-serif font-semibold text-high-contrast flex items-center gap-2">
                  <Globe2 className="h-5 w-5 text-accent" />
                  Our Promise to You
                </h2>
                <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                  <li>
                    <span className="font-semibold text-foreground">Tailor-made journeys:</span> Every trip curated around
                    your dreams, pace, and style.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">End-to-end care:</span> From planning to return,
                    we&apos;re with you at every step.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Memories that last:</span> Thoughtfully designed
                    experiences that stay with you long after you&apos;re home.
                  </li>
                </ul>
              </div>

              <div className="glass-morphism rounded-3xl p-6 border border-white/10 flex items-center gap-4 transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-3d-hover">
                <Sparkles className="h-10 w-10 text-accent" />
                <p className="text-sm md:text-base text-muted-foreground">
                  We don&apos;t just take you places &mdash; we unlock worlds, one unforgettable journey at a time.
                </p>
              </div>
            </div>
          </div>

          {/* Vision */}
          <section className="space-y-10">
            <div className="space-y-3 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-high-contrast flex items-center gap-3">
                <Heart className="h-7 w-7 text-accent" />
                Our Vision
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                To be the most trusted and innovative travel and holiday brand &mdash; inspiring joyful and responsible
                exploration. Backpacking made easy.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                We aim to make travel a way of life &mdash; every trip leaves you richer in memories, lighter in worries,
                and happier at heart.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Trust & Reliability",
                  description:
                    "Building lasting relationships through transparency and reliability in every interaction.",
                  bg: "bg-primary/15",
                  color: "text-primary",
                },
                {
                  icon: Heart,
                  title: "Joyful Exploration",
                  description:
                    "Creating moments of wonder and discovery that spark lifelong memories.",
                  bg: "bg-accent/15",
                  color: "text-accent",
                },
                {
                  icon: Leaf,
                  title: "Responsible Tourism",
                  description:
                    "Protecting destinations and supporting local communities for sustainable travel.",
                  bg: "bg-secondary/15",
                  color: "text-secondary",
                },
                {
                  icon: Compass,
                  title: "Making Backpacking Easy",
                  description:
                    "Simplifying adventure travel with expert guidance and seamless logistics.",
                  bg: "bg-chart-4/20",
                  color: "text-chart-4",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="glass-morphism rounded-2xl p-6 border border-white/10 shadow-3d hover:shadow-3d-hover transition-all duration-500 flex gap-4 transform hover:-translate-y-3"
                >
                  <div
                    className={`p-3 rounded-xl flex items-center justify-center shadow-3d ${item.bg} ${item.color}`}
                  >
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground text-base md:text-lg">{item.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mission */}
          <section className="space-y-10">
            <div className="space-y-3 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-high-contrast flex items-center gap-3">
                <Compass className="h-7 w-7 text-primary" />
                Our Mission
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Turn wanderlust into reality &mdash; crafting journeys that go beyond itineraries and become soul-stirring
                adventures.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                We&apos;re not just taking you places &mdash; we&apos;re unlocking worlds, one unforgettable journey at a time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Weave Dreams into Journeys",
                  description:
                    "Transform travel aspirations into carefully crafted reality through personalized experiences.",
                },
                {
                  title: "Deliver Seamless Escapes",
                  description:
                    "Eliminate travel stress with meticulous planning and 24/7 support throughout your journey.",
                },
                {
                  title: "Open Doors to the World",
                  description:
                    "Connect travelers with authentic local cultures and hidden gems off the beaten path.",
                },
                {
                  title: "Wrap You in Comfort",
                  description:
                    "Blend modern conveniences with unique experiences using cutting-edge travel technology.",
                },
                {
                  title: "Travel with Heart",
                  description:
                    "Create meaningful connections between travelers, destinations, and local communities.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="glass-morphism rounded-2xl p-6 border border-white/10 shadow-3d hover:shadow-3d-hover transition-all duration-500 hover:-translate-y-3 hover:bg-black/30"
                >
                  <h3 className="font-semibold text-foreground text-base md:text-lg mb-2">
                    {index + 1}. {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Core Values */}
          <section className="space-y-10">
            <div className="space-y-3 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-high-contrast flex items-center gap-3">
                <Shield className="h-7 w-7 text-secondary" />
                Our Core Values
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                The principles that guide every decision and shape every experience we create.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  number: 1,
                  title: "Passion for Travel",
                  description:
                    "Travel is about experiences, stories, and moments that last a lifetime. Our passion drives us to curate unforgettable adventures.",
                },
                {
                  number: 2,
                  title: "Customer Delight",
                  description:
                    "Every trip is crafted with care to exceed expectations &mdash; beyond satisfaction to joyful memories.",
                },
                {
                  number: 3,
                  title: "Integrity & Trust",
                  description: "Transparency, honesty, and ethical practices guide all our actions.",
                },
                {
                  number: 4,
                  title: "Sustainability & Responsibility",
                  description: "Eco-friendly travel that supports local communities.",
                },
                {
                  number: 5,
                  title: "Innovation & Creativity",
                  description:
                    "Unique itineraries and personalized services for extraordinary experiences.",
                },
                {
                  number: 6,
                  title: "Teamwork & Collaboration",
                  description:
                    "A united team and strong local partnerships ensure seamless travel.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="glass-morphism rounded-2xl p-6 border border-white/10 flex gap-4 items-start shadow-3d hover:shadow-3d-hover transition-all duration-500 hover:-translate-y-3 hover:bg-black/25"
                >
                  <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold shadow-3d">
                    {item.number}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground text-base md:text-lg">{item.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="pt-4">
            <div className="glass-morphism-strong rounded-3xl px-6 md:px-10 py-10 md:py-14 border-2 border-white/15 shadow-3d flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-high-contrast">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Let us craft a travel experience that reflects your dreams and exceeds your expectations.
                </p>
              </div>
              <Button
                size="lg"
                className="h-14 px-10 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-[0.2em] text-xs md:text-sm shadow-3d hover:shadow-3d-hover hover:scale-105 transition-all duration-300 hover:-translate-y-1 group"
                asChild
              >
                <a href="/contact">
                  Plan Your Trip
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
