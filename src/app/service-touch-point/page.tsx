import { Metadata } from "next";
import { Wrench, Navigation } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Service Touch Points | Regent Group",
  description: "Find a Regent Group service center near you. We offer premium automotive maintenance and repair facilities across Thane, Kalyan, Navi Mumbai, and Kandivali.",
};

const locations = [
  {
    city: "Thane",
    address: "Plot No 1, Mohan Mill Compound, Ghodbunder Rd, next to R Mall, Thane West, Thane, Maharashtra 400607",
  },
  {
    city: "Kalyan",
    address: "A division, tejpal motors Pvt LTD, survey no 36/20 /1,2 and 36/28/2 next to precitihole, calathi saja kon, takuka, Kalyan – Bhiwandi Rd, Bhiwandi, Ranjnoli, Maharashtra 421301",
  },
  {
    city: "Thane",
    address: "S No 136/137, near Universal Petrol Pump, Subhash Nagar, Majiwada, Thane, Maharashtra 400601",
  },
  {
    city: "Navi Mumbai",
    address: "Plot No: D-238, beside MG Showroom, near Uran Phata Flyover, TTC Indurstrial Area, Shiravane, Nerul, Navi Mumbai, Maharashtra 400706",
  },
  {
    city: "Thane",
    address: "Plot No 1/B32, Road No. 21, behind Zydus Pharmaceuticals, Wagle Estate, Neheru Nagar, Wagle Industrial Estate, Thane West, Thane, Maharashtra 400604",
  },
  {
    city: "Kandivali",
    address: "No 144, Kandivali Industrial Estate, near Ganesh Hotel, Hindustan Naka, Kandivali, Mumbai, Maharashtra 400067",
  },
  {
    city: "Kalyan",
    address: "Divine Titanium, Ailsinghani Solutions Private Limited, Situate, at, Plot No. 3, Bhiwandi – Murbad Rd, Industrial Area, Saravali, Bhiwandi, Kalyan, Maharashtra 421311",
  },
  {
    city: "Thane",
    address: "Ground Floor, Shop No.1/2, Rosa Vista, Thane Ghodbunder Road, Opp Suraj Water Park, Thane West, Thane, Thane, Maharashtra, 400615",
  },
  {
    city: "Thane",
    address: "Plot No D-41, Square meters ground, Road No 16, Nr Ambika Nagar, Thane. Maharashtra 400604",
  },
  {
    city: "Kandivali",
    address: "BMC Industrial Estate, 3, Mahatma Gandhi Cross Road 1 Sai Ngr, opposite Samta Krida Bhavan, Kandivali, Mumbai, Maharashtra 400067",
  },
  {
    city: "Ambernath (Upcoming)",
    address: "Plot No G 49, Mahavir Enterprises, Ambrnath Tal. Thane. Maharashtra",
  }
];

export default function ServiceTouchPointsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50">
      {/* Corporate Hero */}
      <section className="relative bg-[#0F172A] py-24 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb items={[{ label: "Touch Points", href: "/touch-points" }, { label: "Service Touch Points" }]} />
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
              Our Service Touch Points
            </h1>
            <div className="w-20 h-1 bg-[#D4AF37] mb-8"></div>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-sans">
              Expert care for your premium vehicle. Locate our state-of-the-art service centers designed to deliver uncompromised maintenance and repair.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((loc, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#D4AF37]/50 transition-all duration-300 group flex flex-col h-full">
                <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-[#D4AF37] shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Wrench className="h-5 w-5" />
                </div>
                
                <h2 className="text-2xl font-heading font-bold text-[#0F172A] mb-4">
                  {loc.city}
                </h2>
                
                <p className="text-slate-600 leading-relaxed flex-grow">
                  {loc.address}
                </p>

                <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
                  <button className="text-sm font-bold text-[#0F172A] uppercase tracking-wider flex items-center hover:text-[#D4AF37] transition-colors">
                    <Navigation className="h-4 w-4 mr-2" /> Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
