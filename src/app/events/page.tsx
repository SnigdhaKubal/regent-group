import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Corporate Events | Regent Group",
  description: "Explore the latest automotive events, VIP car deliveries, and brand showcases by Regent Group, representing MG, Skoda, Toyota, Tata, and Honda.",
};

const categories = [
  "All Events",
  "MG Events",
  "Regent Skoda",
  "Regent Toyota",
  "Regent Tata",
  "Regent Honda",
  "MG Select",
];

const events = [
  {
    title: "KL Rahul VIP Vehicle Delivery",
    category: "Regent Toyota",
    date: "September 2024",
    image: "",
    excerpt: "A proud moment delivering a premium vehicle to celebrated cricketer KL Rahul.",
  },
  {
    title: "1st delivery of Mg Hector vip client k l rahul",
    category: "VIP Delivery",
    date: "Aug 2019",
    image: "",
    excerpt: "The very first MG Hector delivery to our esteemed client and cricketer KL Rahul, marking a milestone for MG Regent.",
  },
  {
    title: "1st delivery of Mg Hector vip client Shankar mahadevan",
    category: "VIP Delivery",
    date: "Aug 2019",
    image: "",
    excerpt: "A prestigious delivery event for legendary musician Shankar Mahadevan, showcasing the elegance of the MG Hector.",
  },
  {
    title: "Mg ASTOR unvail",
    category: "Product Launch",
    date: "Oct 2021",
    image: "",
    excerpt: "The grand unveiling of the MG Astor, introducing innovative AI-driven technology to the automotive market.",
  },
  {
    title: "Launch of Mg ASTOR by honorable thane commissioner sir MR Vipin sharma",
    category: "Event",
    date: "Oct 2021",
    image: "",
    excerpt: "Honored to have the Thane Commissioner, Mr. Vipin Sharma, preside over the launch of the new MG Astor series.",
  },
];

export default function EventsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Premium Corporate Header */}
      <section className="relative bg-[#0F172A] py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-slate-800" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb items={[{ label: "Events" }]} />
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
              Corporate Events & Showcases
            </h1>
            <div className="w-20 h-1 bg-[#D4AF37] mb-8"></div>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-sans">
              Experience the pinnacle of automotive retail. From VIP deliveries to grand brand unveils, discover the milestones that define the Regent Group legacy.
            </p>
          </div>
        </div>
      </section>

      {/* Events Filter (Static for now, represents categories) */}
      <section className="border-b border-border/50 bg-slate-50 py-6 sticky top-20 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-wrap gap-3 md:gap-4 items-center">
            {categories.map((category, idx) => (
              <button
                key={idx}
                className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 border ${idx === 0
                  ? "bg-[#0F172A] text-white border-[#0F172A]"
                  : "bg-white text-slate-600 border-slate-200 hover:border-[#D4AF37] hover:text-[#0F172A]"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {events.map((event, idx) => (
              <article key={idx} className="group flex flex-col cursor-pointer">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-6 bg-slate-200 border-2 border-dashed border-slate-300 flex items-center justify-center p-4 text-center">
                  <span className="text-slate-500 font-medium text-sm">
                    [Original Regent Group Event Image Placeholder]
                  </span>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                    {event.category}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm font-semibold text-[#D4AF37] mb-3">
                  <Calendar className="h-4 w-4" />
                  <time>{event.date}</time>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[#0F172A] mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {event.title}
                </h2>

                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                  {event.excerpt}
                </p>

                <div className="inline-flex items-center text-sm font-bold text-[#0F172A] uppercase tracking-widest group-hover:text-[#D4AF37] transition-colors mt-auto">
                  View Gallery <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

<h3 className="text-xl font-heading font-bold text-[#0F172A] group-hover:text-[#D4AF37] transition-colors mb-3">
  {event.title}
</h3>
                    </article >
                  ))}
                </div >
                
              </div >
            ))}
          </div >
        </div >
      </section >
    </main >
  );
}
