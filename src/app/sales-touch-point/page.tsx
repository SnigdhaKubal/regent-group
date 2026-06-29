import { Metadata } from "next";
import { MapPin, Navigation, Phone } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Sales Touch Points | Regent Group",
  description: "Find a Regent Group sales touch point near you. We have premium dealership locations across Thane, Kalyan, Navi Mumbai, and Kandivali.",
};

const locations = [
  {
    city: "Kalyan",
    address: "Shop No 3/4, Alliance Heritage near Reliance Petrol Pump Kon Bhiwandi, Maharashtra 421311",
  },
  {
    city: "Shahapur",
    address: "Shop No 6 & 7, Ganraj Residency Road opp. Shete Marriage Hall Road Shahapur, Cherpoli, Maharashtra 421601",
  },
  {
    city: "Ambernath",
    address: "D-Mart Shop no . 1&2 Antalica towers Katai Pipeline Road near palegaon Ambernath, Pale Gaon, Maharashtra 421501",
  },
  {
    city: "Thane",
    address: "Shop No 7 & 8, GF, Dev Corporate Eastern Express Highway, Pokharan Rd Number 1, Thane, Maharashtra 400601",
  },
  {
    city: "Kalyan",
    address: "Unit Nos 3 & 4, Kalyan – Bhiwandi Rd, Sapna Industrial Estate, Saravali, Ranjnoli, Bhiwandi, Maharashtra 421302",
  },
  {
    city: "Kandivali",
    address: "Ground Floor, CHS Building, Swami Vivekananda Rd, Roop Nagar, Bhadran Nagar, Kandivali West, Mumbai, Maharashtra 400067",
  },
  {
    city: "Thane",
    address: "Shop No. 16, A, DOSTI IMPERIA, Ghodbunder Rd, opposite R Mall, Manpada, Thane West, Mumbai, Thane, Maharashtra 400610",
  },
  {
    city: "Navi Mumbai",
    address: "besides Kamal House, Plot No :D-238, near Uran Phata Flyover, TTC Indurstrial Area, Shiravane, Nerul, Navi Mumbai, Maharashtra 400706",
  },
  {
    city: "Chembur",
    address: "Natraj Compound, CG Rd, near Chatrapati Shivaji Maharaj Chowk, Union Park, Chembur, Mumbai, Maharashtra 400074",
  },
  {
    city: "Dombivli",
    address: "Shop No 1, Vaibhav Nagari, Kalyan – Shilphata Rd, near Sai Hospital, Katai Village, Dombivli, Kolegaon, Maharashtra 421203",
  }
];

export default function SalesTouchPointsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50">
      {/* Corporate Hero */}
      <section className="relative bg-[#0F172A] py-24 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb items={[{ label: "Touch Points", href: "/touch-points" }, { label: "Sales Touch Points" }]} />
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
              Our Sales Touch Points
            </h1>
            <div className="w-20 h-1 bg-[#D4AF37] mb-8"></div>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-sans">
              Discover our extensive network of premium automotive showrooms. Find a Regent Group dealership near you for an unparalleled sales experience.
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
                  <MapPin className="h-5 w-5" />
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
