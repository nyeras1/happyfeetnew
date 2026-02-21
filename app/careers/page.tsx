import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin, Search } from "lucide-react"
import { Suspense } from "react" // added Suspense import

function CareersContent() {
  // extracted content to a sub-component for Suspense wrapping
  const jobs = [
    { title: "Senior Travel Consultant", location: "Adventure City", type: "Full-time", dept: "Operations" },
    { title: "Marketing Specialist", location: "Remote", type: "Full-time", dept: "Marketing" },
    { title: "Customer Experience Manager", location: "Luxury Resorts", type: "Full-time", dept: "Support" },
    { title: "Junior Tour Coordinator", location: "Adventure City", type: "Contract", dept: "Operations" },
  ]

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-gradient-to-br from-background via-card to-background">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-40 left-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" />
      </div>
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-20">
          <div className="space-y-4">
            <h1 className="text-sm font-bold tracking-[0.2em] text-accent uppercase">Join Our Journey</h1>
            <h2 className="text-5xl font-serif font-bold text-high-contrast">Build Your Career With Us</h2>
          </div>
          <p className="text-lg text-muted-foreground">
            At Happy Feet, we're not just selling holidays; we're creating lifelong memories. We're looking for
            passionate travel enthusiasts to join our global team.
          </p>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              className="pl-12 h-14 rounded-full shadow-3d border border-white/10 bg-white/5 text-white placeholder:text-white/50"
              placeholder="Search for roles..."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="glass-morphism-strong p-8 rounded-3xl shadow-3d border-2 border-white/10 hover:shadow-3d-hover transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-colors">
                  <Briefcase className="h-7 w-7" />
                </div>
                <Badge
                  variant="secondary"
                  className="bg-white/5 text-white border border-white/10 font-bold uppercase tracking-wider px-4 py-1"
                >
                  {job.type}
                </Badge>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-high-contrast group-hover:text-accent transition-colors">{job.title}</h3>
              <div className="flex gap-6 text-sm text-white/70 mb-8">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Briefcase className="h-4 w-4" />
                  <span>{job.dept}</span>
                </div>
              </div>
              <Button className="w-full bg-white/5 hover:bg-accent hover:text-black text-white border border-white/10 group-hover:border-accent rounded-full py-6 font-bold transition-all">
                Apply Now
              </Button>
            </div>
          ))}
        </div>

        {/* Application Section */}
        <div className="glass-morphism-strong p-8 md:p-16 rounded-[40px] shadow-3d border-2 border-white/10">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-3xl font-serif font-bold text-high-contrast">Can't find the right role?</h3>
            <p className="text-white/70">Submit your CV and we'll keep you in mind for future openings.</p>
          </div>
          <form className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              placeholder="Full Name"
              className="rounded-xl h-12 bg-white/5 border-white/10 text-white placeholder:text-white/50"
            />
            <Input
              placeholder="Email Address"
              className="rounded-xl h-12 bg-white/5 border-white/10 text-white placeholder:text-white/50"
            />
            <Input
              placeholder="LinkedIn Profile (Optional)"
              className="rounded-xl h-12 md:col-span-2 bg-white/5 border-white/10 text-white placeholder:text-white/50"
            />
            <div className="md:col-span-2 border-2 border-dashed border-white/15 rounded-2xl p-8 text-center space-y-2 hover:border-accent transition-colors cursor-pointer bg-black/20">
              <p className="font-bold text-high-contrast">Upload Your CV</p>
              <p className="text-sm text-white/70">PDF, DOC, DOCX up to 5MB</p>
            </div>
            <Button className="md:col-span-2 bg-accent hover:bg-accent/90 text-black py-8 rounded-full text-lg font-bold">
              Submit Application
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default function CareersPage() {
  // wrapped CareersContent in Suspense
  return (
    <Suspense fallback={null}>
      <CareersContent />
    </Suspense>
  )
}
