import { Metadata } from "next";
import { Navigation } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Sales Touch Points | Regent Group",
  description: "Find a Regent Group sales touch point near you. We have premium dealership locations across Thane, Kalyan, Navi Mumbai, and Kandivali.",
};

const locations = [
  {
    dealership: "REGENT TOYOTA",
    city: "Kalyan",
    address: "Shop No 3/4, Alliance Heritage near Reliance Petrol Pump Kon Bhiwandi, Maharashtra 421311",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1928567.7666115335!2d70.79502849374998!3d19.250424699999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7960f2c1b1fad%3A0x25830e359492e0de!2sRegent%20Toyota!5e0!3m2!1sen!2sus!4v1782734784489!5m2!1sen!2sus"
  },
  {
    dealership: "REGENT TOYOTA",
    city: "Shahapur",
    address: "Shop No 6 & 7, Ganraj Residency Road opp. Shete Marriage Hall Road Shahapur, Cherpoli, Maharashtra 421601",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1928567.7666115335!2d70.79502849374998!3d19.250424699999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7831e66e963ab%3A0x86889022577186a1!2sRegent%20Toyota%20Shahapur!5e0!3m2!1sen!2sus!4v1782734886903!5m2!1sen!2sus"
  },
  {
    dealership: "REGENT TOYOTA",
    city: "Ambernath",
    address: "D-Mart Shop no .1 & 2, Antalica Towers, Katai Pipeline Road, near Palegaon, Ambernath, Maharashtra 421501",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1928567.7666115335!2d70.79502849374998!3d19.250424699999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795004b6b3345%3A0x9d7c04e8d587003a!2sRegent%20Toyota%20Ambernath!5e0!3m2!1sen!2sus!4v1782734929923!5m2!1sen!2sus"
  },

  {
    dealership: "REGENT ŠKODA",
    city: "Thane",
    address: "Shop No 7 & 8, GF, Dev Corporate Eastern Express Highway, Pokharan Rd Number 1, Thane, Maharashtra 400601",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929119.4245705544!2d70.66189449375001!3d19.203439199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b91ba2062735%3A0x72ef540b50f68493!2sRegent%20%C5%A0koda%20Showroom!5e0!3m2!1sen!2sus!4v1782734981443"
  },
  {
    dealership: "REGENT ŠKODA",
    city: "Kalyan",
    address: "Unit Nos 3 & 4, Kalyan – Bhiwandi Rd, Sapna Industrial Estate, Saravali, Ranjnoli, Bhiwandi, Maharashtra 421302",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929119.4245705544!2d70.66189449375001!3d19.203439199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bd08421d052b%3A0x888cec96fda51ce2!2sRegent%20%C5%A0koda%20Showroom!5e0!3m2!1sen!2sus!4v1782735033383!5m2!1sen!2sus"
  },
  {
    dealership: "REGENT ŠKODA",
    city: "Kandivali",
    address: "Ground Floor, CHS Building, Swami Vivekananda Rd, Roop Nagar, Bhadran Nagar, Kandivali West, Mumbai, Maharashtra 400067",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929119.4245705544!2d70.66189449375001!3d19.203439199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b73d45a479bf%3A0x227f8ed65c834e87!2sRegent%20%C5%A0koda%20Showroom!5e0!3m2!1sen!2sus!4v1782735111845!5m2!1sen!2sus"
  },

  {
    dealership: "MG MOTOR",
    city: "Thane",
    address: "Shop No.16, A, DOSTI IMPERIA, Ghodbunder Rd, opposite R Mall, Manpada, Thane West, Maharashtra 400610",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1928776.342231034!2d70.66900009374997!3d19.23267300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bb8385758879%3A0x4a038d61f4db259d!2sMG%20Motor%20Tejpal%20Motor%20Showroom!5e0!3m2!1sen!2sus!4v1782735197493!5m2!1sen!2sus"
  },
  {
    dealership: "MG MOTOR",
    city: "Navi Mumbai",
    address: "Plot No D-238, near Uran Phata Flyover, TTC Industrial Area, Shiravane, Nerul, Navi Mumbai, Maharashtra 400706",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1928776.342231034!2d70.66900009374997!3d19.23267300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3437573901f%3A0x6fa962b43a710985!2sMG%20Motor%20Tejpal%20Motor%20Showroom!5e0!3m2!1sen!2sus!4v1782735438686!5m2!1sen!2sus"
  },
  {
    dealership: "MG MOTOR",
    city: "Chembur",
    address: "Ground Floor, Bus Depot, Akshar Amar Mansion Shop No, 1 to 5, opposite Deonar, BS Ambedkar Nagar, Chembur, Mumbai, Maharashtra 400088, India",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1928776.342231034!2d70.66900009374997!3d19.23267300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7bdf3744b67%3A0x210f354a8016e202!2sMG%20Motor%20Tejpal%20Motor%20Showroom!5e0!3m2!1sen!2sus!4v1782735783952!5m2!1sen!2sus"
  },
  {
    dealership: "MG MOTOR",
    city: "Kalyan",
    address: "Survey No.8, Unit nos. 2 and 3(pt situated at, Kalyan – Bhiwandi Rd, Ranjnoli, Thane, Maharashtra 421302",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1928776.342231034!2d70.66900009374997!3d19.23267300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bdc4b213da2d%3A0xf7b5383a5fa4401f!2sMG%20Motor%20Tejpal%20Motor%20Showroom!5e0!3m2!1sen!2sus!4v1782735905141!5m2!1sen!2sus"
  },
  {
    dealership: "MG MOTOR",
    city: "Dombivli",
    address: "Shop No 1, Vaibhav Nagari, Kalyan–Shilphata Rd, near Sai Hospital, Katai Village, Dombivli, Maharashtra 421203",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1928776.342231034!2d70.66900009374997!3d19.23267300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf29fe066eb3%3A0x566aec16af4d4d29!2sMG%20Motor%20Tejpal%20Motor%20Showroom!5e0!3m2!1sen!2sus!4v1782735967628!5m2!1sen!2sus"
  },

  {
    dealership: "REGENT HONDA",
    city: "Thane",
    address: "Plot No 1, Mohan Mill Compound, Ghodbunder Rd, next to R Mall, Thane West, Thane, Maharashtra 400607.",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1928845.1907186334!2d70.67041349374998!3d19.22680990000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b944d366a5cd%3A0x941feafa95a0c0ea!2sRegent%20Honda!5e0!3m2!1sen!2sus!4v1782737260607!5m2!1sen!2sus"
  },
  {
    dealership: "REGENT HONDA",
    city: "Kalyan",
    address: "Regent Honda, 137/3, Kalyan - Bhiwandi Rd, opp. Bharat Petrol Pump, near Pimpalghar, Transformer, Pimpalghar, Pimpalgaon, Maharashtra 421311, India",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1928845.1907186334!2d70.67041349374998!3d19.22680990000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7961eac4e0b21%3A0x58bec106c19940fb!2sRegent%20Honda!5e0!3m2!1sen!2sus!4v1782737646333!5m2!1sen!2sus"
  },

  {
    dealership: "SELECT TEJPAL",
    city: "Thane",
    address: " Ground Floor, Shop No.1/2, Rosa Vista, Thane Ghodbunder Road, Opp Suraj Water Park,Thane West, Thane, Thane, Maharashtra, 400615",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929183.699679483!2d70.64967969375003!3d19.197957600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bb99d75654eb%3A0xab4f044c30d91fdf!2sMG%20Select%20Thane!5e0!3m2!1sen!2sus!4v1782737784741!5m2!1sen!2sus"
  },

  {
    dealership: "REGENT TATA",
    city: "Thane",
    address: "PN C/2, Opal Square IT Park, SN 03 to 05, Wagle Estate Rd, opposite Old Passport Office, Padwal Nagar, Thane West, Thane, Maharashtra 400604, India",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929269.3805603182!2d70.64795429374996!3d19.190648100000033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b92ac50cdfd9%3A0xa6481b251ed8ac91!2sTata%20Motors%20Cars%20Showroom%20-%20Regent%20Cars%2C%20Padwal%20Nagar!5e0!3m2!1sen!2sus!4v1782738015044!5m2!1sen!2sus"
  },
  {
    dealership: "REGENT TATA",
    city: "Borivali",
    address: "Unit 3 & 4, Blue Rose Industrial Estate, Western Express Hwy, next to Metro Mall, Food Corporation of India Warehouse, Borivali East, Mumbai, Maharashtra 400066",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929269.3805603182!2d70.64795429374996!3d19.190648100000033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b732f9e59ab9%3A0x69f741c12120ed2c!2sTata%20Motors%20Cars%20Showroom%20-%20Regent%2C%20Borivali!5e0!3m2!1sen!2sus!4v1782738075584!5m2!1sen!2sus"
  },

  {
    dealership: "REGENT TATA",
    city: "Bandra",
    address: " Kailash Enclave, Plot No 565, 32nd National College Road, near National College, Khar, Bandra West, Mumbai, Maharashtra 400050",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929269.3805603182!2d70.64795429374996!3d19.190648100000033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c90e247ff57b%3A0x2fa7c862c28fae2d!2sTata%20Motors%20Cars%20Showroom%20-%20Regent%2C%20Bandra!5e0!3m2!1sen!2sus!4v1782738154267!5m2!1sen!2sus"
  },
  {
    dealership: "REGENT TATA",
    city: "Kandivali",
    address: "BMC Industrial Estate, 3, Mahatma Gandhi Cross Road 1 Sai Ngr, opposite Samta Krida Bhavan, Kandivali, Mumbai, Maharashtra 400067",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482267.94065881625!2d72.3902202441361!3d19.207503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6d698056285%3A0xa40a561c4023663b!2sTata%20Motors%20Cars%20Showroom%20-%20Regent%2C%20Kandivali!5e0!3m2!1sen!2sus!4v1782738577611!5m2!1sen!2sus"
  },

  {
    dealership: "REGENT TATA",
    city: "Ambarnath (Upcoming)",
    address: "Mahavir Enterprises, Plot No G49, Deepak Nagar, Badlapur, Ambernath, Maharashtra 421503, India",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d383342.5345049265!2d72.73466567525902!3d18.966766186398278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79358ab6e3b0b%3A0xc6c0bf6b34d7f62!2sTata%20Motors%20Cars%20Service%20Centre%20-%20Regent%20Tata%2C%20Ambernath!5e0!3m2!1sen!2sus!4v1782738328204!5m2!1sen!2sus"
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

          <div className="space-y-8">
            {locations.map((loc, idx) => (
              <div key={idx}>

                {/* Dealership Heading */}
                {(idx === 0 || locations[idx - 1].dealership !== loc.dealership) && (
                  <h2 className="text-3xl font-bold text-[#0F172A] border-l-4 border-[#D4AF37] pl-4 mb-6 mt-12">
                    {loc.dealership}
                  </h2>
                )}

                {/* Card */}
                <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">

                  {/* Left */}
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
                      {loc.city}
                    </h3>

                    <p className="text-slate-600 leading-relaxed mb-6">
                      {loc.address}
                    </p>
                  </div>

                  {/* Right */}
                  <iframe
                    src={loc.iframe}
                    className="w-full h-[320px] rounded-xl border"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
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
