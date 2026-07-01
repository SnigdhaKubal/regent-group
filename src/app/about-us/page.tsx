import { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { Breadcrumb } from "@/components/Breadcrumb";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Regent Group",
  description: "Learn about Regent Group's journey and leadership. We are a trusted dealership for premium automotive brands in Mumbai and Thane.",
};

const leaders = [
  { name: "Kamal Ailsinghani", role: "Chairman" },
  { name: "Pawan Ailsinghani", role: "Managing Director" },
  { name: "R Chandrashekar", role: "Group Executive Director" },
  { name: "B Sainath", role: "Group Director" },
  { name: "Jayesh Parikh", role: "Group CFO" },
];

export default function AboutUsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center py-12 md:py-16 bg-[#0F172A] overflow-hidden">
        {/* Subtle background image overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-6 opacity-70 hover:opacity-100 transition-opacity [&_nav]:text-slate-300 [&_a:hover]:text-[#D4AF37] [&_span[aria-current]]:text-white">
            <Breadcrumb items={[{ label: "About Us" }]} />
          </div>
          <FadeIn>
            <h3 className="text-[#D4AF37] text-sm uppercase tracking-[0.2em] mb-4 font-semibold">
              Our Story
            </h3>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 tracking-tight">
              About Regent Group
            </h1>
            <div className="w-20 h-1 bg-[#D4AF37] mb-8"></div>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
              Backed by two decades of automotive expertise, we have become a trusted dealership for premium brands in the Mumbai and Thane regions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeIn delay={0.1} className="order-2 lg:order-1 space-y-6 text-slate-700 text-lg leading-relaxed">
              <p>
                Our journey started in the year <strong className="text-[#0F172A]">2014</strong> with Regent Honda in Thane, followed by swift expansion into Kalyan in 2015. 
              </p>
              <p>
                In <strong className="text-[#0F172A]">2019</strong>, we proudly launched MG dealerships in Thane and Navi Mumbai, with cutting-edge facilities added in 2021. 
              </p>
              <p>
                Recently, we have expanded further with Toyota and Skoda dealerships in <strong className="text-[#0F172A]">2023</strong> and <strong className="text-[#0F172A]">2024</strong>. Our advanced facilities offer comprehensive automotive services, all built on trust, innovation, and long-lasting partnerships.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="order-1 lg:order-2 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                {/* Fallback image if local assets aren't present. Since it's about us, a corporate/dealership image works */}
                <Image
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1000&auto=format&fit=crop"
                  alt="Regent Group Corporate"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl rounded-xl border border-slate-100 hidden md:block">
                <p className="text-4xl font-bold text-[#0F172A] mb-1">10+</p>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Years of Excellence</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0F172A] mb-4">
              Our Leadership
            </h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto"></div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <FadeIn key={leader.name} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-[#D4AF37]/30 transition-all text-center group">
                  <div className="w-20 h-20 mx-auto bg-[#0F172A] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-[#D4AF37]">
                      {leader.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-2">{leader.name}</h3>
                  <p className="text-sm font-medium text-[#D4AF37] uppercase tracking-wider">{leader.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
