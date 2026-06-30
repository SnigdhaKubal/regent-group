import Link from "next/link";
import { MapPin } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function TouchPointsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl flex flex-col items-center">
      <div className="w-full flex justify-start mb-4">
        <Breadcrumb items={[{ label: "Touch Points" }]} />
      </div>
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
          Find Your Nearest Touch Point
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Whether you are looking to purchase a new premium vehicle or need expert servicing for your current one, locate our dedicated facilities below.
        </p>
      </div>

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
  );
}