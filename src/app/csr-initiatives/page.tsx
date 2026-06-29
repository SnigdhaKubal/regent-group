import { Metadata } from "next";
import Image from "next/image";
import { Heart, Activity, Users } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "CSR Initiatives | Regent Group",
  description: "Learn about Regent Group's Corporate Social Responsibility initiatives, including our 100-bed hospitals in Kalyan and Ulhasnagar providing healthcare access.",
};

export default function CSRPage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50">
      {/* Corporate Hero */}
      <section className="relative bg-[#0F172A] py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-slate-800" />
        <div className="container relative z-10 mx-auto px-2 sm:px-4 lg:px-8">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Events" }]} />
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
              Corporate Events & Showcases
            </h1>
            <div className="w-20 h-1 bg-[#D4AF37] mb-6"></div>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-sans">
              Our Corporate Social Responsibility (CSR) initiatives are deeply rooted in giving back to the community and creating a lasting impact on society
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="space-y-8">
              <h2 className="text-3xl font-heading font-bold text-[#0F172A] mb-6">
                Healthcare for the Community
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  We proudly own <strong>Meera Hospital</strong> in Ulhasnagar and have established <strong>100-bed hospitals</strong> in both Kalyan and Ulhasnagar, offering affordable care to our employees and their families.
                </p>
                <p>
                  In line with our commitment to social welfare, we reserve certain beds specifically for patients below the poverty line, ensuring crucial access to healthcare for those in need.
                </p>
                <p className="font-semibold text-[#0F172A] border-l-4 border-[#D4AF37] pl-4">
                  Our efforts focus on improving health and well-being, creating a lasting impact on society.
                </p>
              </div>

              {/* Stats / Features Grid */}
              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
                  <div className="h-10 w-10 bg-[#0F172A] rounded-lg flex items-center justify-center text-[#D4AF37] mb-4">
                    <Activity className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2">100-Bed Facilities</h3>
                  <p className="text-sm text-slate-500">State-of-the-art hospitals located in Kalyan & Ulhasnagar.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
                  <div className="h-10 w-10 bg-[#0F172A] rounded-lg flex items-center justify-center text-[#D4AF37] mb-4">
                    <Heart className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2">Affordable Care</h3>
                  <p className="text-sm text-slate-500">Dedicated beds reserved for patients below the poverty line.</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-200">
              <Image 
                src="/CSR.webp" 
                alt="Meera Hospital, Ulhasnagar" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent flex items-end p-8 z-20">
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#D4AF37] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                    <Users className="h-3 w-3" /> Community First
                  </div>
                  <h3 className="text-2xl font-bold text-white">Meera Hospital, Ulhasnagar</h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
