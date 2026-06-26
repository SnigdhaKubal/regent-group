import { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "About Us | Regent Group",
  description: "Backed by two decades of automotive expertise, Regent Group is a trusted dealership for premium brands in the Mumbai and Thane regions.",
};

const timeline = [
  { year: "2014", event: "Journey started with Regent Honda in Thane" },
  { year: "2015", event: "Swift expansion into Kalyan" },
  { year: "2019", event: "Proudly launched MG dealerships in Thane and Navi Mumbai" },
  { year: "2021", event: "Cutting-edge facilities added to MG showrooms" },
  { year: "2023", event: "Expanded further with Toyota dealerships" },
  { year: "2024", event: "Added Skoda dealerships to the Regent Group portfolio" },
];

const leadership = [
  { name: "Kamal Ailsinghani", role: "Chairman" },
  { name: "Pawan Ailsinghani", role: "Managing Director" },
  { name: "R Chandrashekar", role: "Group Executive Director" },
  { name: "B Sainath", role: "Group Director" },
  { name: "Jayesh Parikh", role: "Group CFO" },
];

export default function AboutUsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Corporate Hero */}
      <section className="relative bg-[#0F172A] py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-slate-800" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb items={[{ label: "About Us" }]} />
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
              About Regent Group
            </h1>
            <div className="w-20 h-1 bg-[#D4AF37] mb-8"></div>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-sans">
              Backed by two decades of automotive expertise, we have become a trusted dealership for premium brands in the Mumbai and Thane regions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story & Timeline */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Story Text */}
            <div className="space-y-8">
              <h2 className="text-3xl font-heading font-bold text-[#0F172A]">Our Journey</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Our journey started in the year 2014 with Regent Honda in Thane, followed by swift expansion into Kalyan in 2015.
                </p>
                <p>
                  In 2019, we proudly launched MG dealerships in Thane and Navi Mumbai, with cutting-edge facilities added in 2021.
                  Recently, we have expanded further with Toyota and Skoda dealerships in 2023 and 2024.
                </p>
                <p className="font-semibold text-[#0F172A]">
                  Our advanced facilities offer comprehensive automotive services, all built on trust, innovation, and long-lasting partnerships.
                </p>
              </div>

              <div className="pt-8">
                <div className="w-full h-[300px] rounded-xl bg-slate-100 flex items-center justify-center border-2 border-dashed border-slate-300 text-slate-500 font-medium">
                  [Original Regent Group Corporate Image Placeholder]
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-2xl border border-border/50">
              <h3 className="text-2xl font-heading font-bold text-[#0F172A] mb-8">Milestones</h3>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#D4AF37] text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                      <div className="h-2 w-2 bg-white rounded-full"></div>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#D4AF37]/30">
                      <div className="flex items-center justify-between mb-1">
                        <time className="font-bold text-[#0F172A] text-lg">{item.year}</time>
                      </div>
                      <div className="text-slate-600 leading-relaxed text-sm">{item.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-slate-50 py-16 md:py-24 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0F172A] mb-6">Our Leadership</h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {leadership.map((leader, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center flex flex-col items-center group transition-all duration-300 hover:shadow-md hover:border-[#D4AF37]/50 hover:-translate-y-1">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-[#0F172A] font-heading font-bold text-xl uppercase border-2 border-transparent group-hover:border-[#D4AF37] transition-all">
                  {leader.name.charAt(0)}
                </div>
                <h3 className="font-bold text-[#0F172A] mb-1">{leader.name}</h3>
                <p className="text-sm text-[#D4AF37] font-semibold">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
