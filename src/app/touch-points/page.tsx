import Link from "next/link";
import { MapPin } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FadeIn } from "@/components/FadeIn";

export default function TouchPointsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center py-12 md:py-16 bg-[#0F172A] overflow-hidden">
        {/* Subtle background image overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-6 opacity-70 hover:opacity-100 transition-opacity [&_nav]:text-slate-300 [&_a:hover]:text-[#D4AF37] [&_span[aria-current]]:text-white">
            <Breadcrumb items={[{ label: "Touch Points" }]} />
          </div>
          <FadeIn>
            <h3 className="text-[#D4AF37] text-sm uppercase tracking-[0.2em] mb-4 font-semibold">
              Locations
            </h3>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 tracking-tight">
              Find Your Nearest Touch Point
            </h1>
            <div className="w-20 h-1 bg-[#D4AF37] mb-8"></div>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
              Whether you are looking to purchase a new premium vehicle or need expert servicing for your current one, locate our dedicated facilities below.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl flex flex-col items-center">
          <div className="grid md:grid-cols-2 gap-8 w-full">
        {/* Sales Touch Point Card */}
        <div className="group relative rounded-2xl border bg-card p-8 shadow-sm transition-all hover:shadow-md border-border/50 hover:border-accent/50 flex flex-col items-center text-center">
          <div className="mb-6 rounded-full bg-primary/5 p-4 text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
          </div>
          <h2 className="text-2xl font-heading font-bold text-primary mb-2">
            Sales touch point
          </h2>
          
          <Link href="/sales-touch-point" className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
            <MapPin className="h-4 w-4" />
            <span className="underline decoration-accent/30 underline-offset-4">on map</span>
          </Link>
          
          <Link href="/sales-touch-point" className="absolute inset-0">
            <span className="sr-only">Go to Sales touch point</span>
          </Link>
        </div>

        {/* Service Touch Point Card */}
        <div className="group relative rounded-2xl border bg-card p-8 shadow-sm transition-all hover:shadow-md border-border/50 hover:border-accent/50 flex flex-col items-center text-center">
          <div className="mb-6 rounded-full bg-primary/5 p-4 text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/><path d="M14.7 18.291c-.24.08-.5.14-.76.182"/><path d="M8.541 18.291c.24.08.5.14.76.182"/><path d="M10 16.5c.66.33 1.45.5 2.25.5"/><circle cx="12" cy="10" r="2"/></svg>
          </div>
          <h2 className="text-2xl font-heading font-bold text-primary mb-2">
            Service touch point
          </h2>
          
          <Link href="/service-touch-point" className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
            <MapPin className="h-4 w-4" />
            <span className="underline decoration-accent/30 underline-offset-4">on map</span>
          </Link>

          <Link href="/service-touch-point" className="absolute inset-0">
            <span className="sr-only">Go to Service touch point</span>
          </Link>
        </div>
        </div>
        </div>
      </section>
    </main>
  );
}