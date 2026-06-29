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
    mapLink: "https://www.google.com/maps/search/?api=1&query=Regent+Group+Mohan+Mill+Compound+Thane",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1928845.1907186334!2d70.67041349374998!3d19.22680990000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b944d366a5cd%3A0x941feafa95a0c0ea!2sRegent%20Honda!5e0!3m2!1sen!2sus!4v1782728877408!5m2!1sen!2sus"
  },
  {
    city: "Kalyan",
    address: "A division, tejpal motors Pvt LTD, survey no 36/20 /1,2 and 36/28/2 next to precitihole, calathi saja kon, takuka, Kalyan – Bhiwandi Rd, Bhiwandi, Ranjnoli, Maharashtra 421301",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Tejpal+Motors+Bhiwandi+Ranjnoli",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1928845.1907186334!2d70.67041349374998!3d19.22680990000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7961eac4e0b21%3A0x58bec106c19940fb!2sRegent%20Honda!5e0!3m2!1sen!2sus!4v1782729008108!5m2!1sen!2sus"
  },
  {
    city: "Thane",
    address: "S No 136/137, near Universal Petrol Pump, Subhash Nagar, Majiwada, Thane, Maharashtra 400601",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Regent+Group+Subhash+Nagar+Majiwada+Thane",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1928776.342231034!2d70.66900009374997!3d19.23267300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9dac416c5e5%3A0xf6783c9fb5a52276!2sMG%20Motor%20Tejpal%20Motor%20Service%20Center!5e0!3m2!1sen!2sus!4v1782729298185!5m2!1sen!2sus"
  },
  {
    city: "Navi Mumbai",
    address: "Plot No: D-238, beside MG Showroom, near Uran Phata Flyover, TTC Indurstrial Area, Shiravane, Nerul, Navi Mumbai, Maharashtra 400706",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Regent+Group+Uran+Phata+Nerul+Navi+Mumbai",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1928776.342231034!2d70.66900009374997!3d19.23267300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3c8ecd1efe3%3A0xe6262cb0c6a7b907!2sMG%20Motor%20Tejpal%20Motor%20Service%20Center!5e0!3m2!1sen!2sus!4v1782729154946!5m2!1sen!2sus"
  },
  {
    city: "Thane",
    address: "Plot No 1/B32, Road No. 21, behind Zydus Pharmaceuticals, Wagle Estate, Neheru Nagar, Wagle Industrial Estate, Thane West, Thane, Maharashtra 400604",
    mapLink: "https://www.google.com/maps/place/Regent+Skoda+Service+Centre/data=!4m2!3m1!1s0x0:0x539ee036dc171874?sa=X",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929199.014239662!2d70.54086149375003!3d19.196651299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9f4eca2be15%3A0x539ee036dc171874!2sRegent%20%C5%A0koda%20Service%20Centre!5e0!3m2!1sen!2sus!4v1782729375979!5m2!1sen!2sus" 
  },
  { 
    city: "Kandivali",
    address: "No 144, Kandivali Industrial Estate, near Ganesh Hotel, Hindustan Naka, Kandivali, Mumbai, Maharashtra 400067",
    mapLink: "https://www.google.com/maps/place/Regent+Skoda+Service+Centre/data=!4m2!3m1!1s0x0:0x7bd89f153104ba75?sa=X",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929199.014239662!2d70.54086149375003!3d19.196651299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b75496bdfbcd%3A0x7bd89f153104ba75!2sRegent%20%C5%A0koda%20Service%20Centre!5e0!3m2!1sen!2sus!4v1782729418405!5m2!1sen!2sus" 
  },
  {
    city: "Kalyan",
    address: "Divine Titanium, Ailsinghani Solutions Private Limited, Situate, at, Plot No. 3, Bhiwandi – Murbad Rd, Industrial Area, Saravali, Bhiwandi, Kalyan, Maharashtra 421311",
    mapLink: "https://www.google.com/maps/place/Regent+Toyota+Workshop/data=!4m2!3m1!1s0x3be7960f2c32b04f:0x3ea037255fd23fb?sa=X",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1928448.8517592181!2d70.79329239374998!3d19.260538400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7960f2c32b04f%3A0x3ea037255fd23fb!2sRegent%20Toyota%20Workshop!5e0!3m2!1sen!2sus!4v1782729474717!5m2!1sen!2sus"
  },
  {
    city: "Thane",
    address: "Ground Floor, Shop No.1/2, Rosa Vista, Thane Ghodbunder Road, Opp Suraj Water Park, Thane West, Thane, Thane, Maharashtra, 400615",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Regent+Group+Rosa+Vista+Thane",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1928501.0684896675!2d70.66440589374999!3d19.256098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bb99d75654eb%3A0xab4f044c30d91fdf!2sMG%20Select%20Thane!5e0!3m2!1sen!2sus!4v1782729547208!5m2!1sen!2sus"
  },
  {
    city: "Thane",
    address: "Plot No D-41, Square meters ground, Road No 16, Nr Ambika Nagar, Thane. Maharashtra 400604",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Regent+Group+Ambika+Nagar+Thane",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929185.30117244!2d70.64934709375!3d19.197820999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9007dafdfd5%3A0xd4965e264901b4b8!2sTata%20Motors%20Cars%20Service%20Centre%20-%20Regent%20Tata%2C%20Thane!5e0!3m2!1sen!2sus!4v1782729645294!5m2!1sen!2sus"
  },
  {
    city: "Kandivali",
    address: "BMC Industrial Estate, 3, Mahatma Gandhi Cross Road 1 Sai Ngr, opposite Samta Krida Bhavan, Kandivali, Mumbai, Maharashtra 400067",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Regent+Group+BMC+Industrial+Estate+Kandivali",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929185.30117244!2d70.64934709375!3d19.197820999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6d698056285%3A0xa40a561c4023663b!2sTata%20Motors%20Cars%20Showroom%20-%20Regent%2C%20Kandivali!5e0!3m2!1sen!2sus!4v1782729709824!5m2!1sen!2sus"
  },
  {
    city: "Ambernath (Upcoming)",
    address: "Plot No G 49, Mahavir Enterprises, Ambrnath Tal. Thane. Maharashtra",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Regent+Group+Mahavir+Enterprises+Ambernath",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929185.30117244!2d70.64934709375!3d19.197820999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79358ab6e3b0b%3A0xc6c0bf6b34d7f62!2sTata%20Motors%20Cars%20Service%20Centre%20-%20Regent%20Tata%2C%20Ambernath!5e0!3m2!1sen!2sus!4v1782729856266!5m2!1sen!2sus"
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

          <div className="space-y-8">
            {locations.map((loc, idx) => (
              <div key={idx}>
                {/* Dealership Heading */}
                {idx === 0 && (
                  <h2 className="text-3xl font-bold text-[#0F172A] border-l-4 border-[#D4AF37] pl-4 mb-6">
                    REGENT HONDA
                  </h2>
                )}

                {idx === 2 && (
                  <h2 className="text-3xl font-bold text-[#0F172A] border-l-4 border-[#D4AF37] pl-4 mb-6 mt-12">
                    MG MOTOR
                  </h2>
                )}

                {idx === 4 && (
                  <h2 className="text-3xl font-bold text-[#0F172A] border-l-4 border-[#D4AF37] pl-4 mb-6 mt-12">
                    REGENT ŠKODA
                  </h2>
                )}

                {idx === 6 && (
                  <h2 className="text-3xl font-bold text-[#0F172A] border-l-4 border-[#D4AF37] pl-4 mb-6 mt-12">
                    REGENT TOYOTA
                  </h2>
                )}

                {idx === 7 && (
                  <h2 className="text-3xl font-bold text-[#0F172A] border-l-4 border-[#D4AF37] pl-4 mb-6 mt-12">
                    SELECT TEJPAL
                  </h2>
                )}

                {idx === 8 && (
                  <h2 className="text-3xl font-bold text-[#0F172A] border-l-4 border-[#D4AF37] pl-4 mb-6 mt-12">
                    REGENT TATA
                  </h2>
                )}

                {/* Card */}
                <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                  {/* Left Side */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-3">
                      {loc.city}
                    </h3>

                    <p className="text-slate-600 mb-6">
                      {loc.address}
                    </p>

                    <a
                      href={loc.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-[#0F172A] text-white px-5 py-3 rounded-lg hover:bg-[#D4AF37] transition-colors"
                    >
                      <Navigation className="h-4 w-4 mr-2" />
                      Get Directions
                    </a>
                  </div>

                  {/* Right Side */}
                  <iframe
                    src={loc.iframe}
                    className="w-full h-[300px] rounded-xl border"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
