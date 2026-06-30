"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MapPin, Car, Handshake, Users, ArrowRight, Briefcase, ShieldCheck, Target } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const heroSlides = [
  {
    id: 1,
    title: "Representing Global Automotive Excellence",
    description: "With over two decades of automotive expertise, we are the trusted dealership network for premium global brands.",
    image: "/heroHonda.webp"
  },
  {
    id: 2,
    title: "Driving the Future of Mobility",
    description: "Experience unparalleled service and a commitment to customer satisfaction at every Regent Group touch point.",
    image: "/heroToyota.webp"
  },
  {
    id: 3,
    title: "MG Windsor Excellence",
    description: "Discover the latest innovations from MG Motors, delivering premium SUVs and electric vehicles.",
    image: "/heroWindsor.webp"
  },
  {
    id: 4,
    title: "Skoda Elegance",
    description: "Experience the brilliant engineering and elegant design of Skoda vehicles at Regent Skoda.",
    image: "/heroSkoda.webp"
  },
  {
    id: 5,
    title: "Tata Motors Innovation",
    description: "Explore the new Tata Curvv, setting new benchmarks in performance and style.",
    image: "/heroCurvv.webp"
  },
  {
    id: 6,
    title: "MG Blackstorm Edition",
    description: "Make a bold statement with the exclusive MG Blackstorm editions, available now.",
    image: "/heroBlackstorm.webp"
  },
  {
    id: 7,
    title: "Toyota Taisor",
    description: "Drive home the new Toyota Taisor, redefining urban mobility and comfort.",
    image: "/heroTaisor.webp"
  },
  {
    id: 8,
    title: "MG Astor Apex",
    description: "Experience the pinnacle of AI-driven technology with the new MG Astor Apex.",
    image: "/heroApex.webp"
  },
  {
    id: 9,
    title: "Premium Showcases",
    description: "Celebrate your new journey with unforgettable VIP deliveries across all Regent Group brands.",
    image: "/heroRed.webp"
  }
];

const brands = [
  { name: "Honda", url: "http://www.regenthonda.co.in", logo: "/regentHonda.webp" },
  { name: "MG", url: "https://www.mgthane.co.in", logo: "/morrisGarages.png" },
  { name: "Skoda", url: "http://www.regentskoda.com", logo: "/regentSkoda.png" },
  { name: "Toyota", url: "http://www.regenttoyota.com", logo: "/regentToyota" },
  { name: "MG Select", url: "https://www.mgselect.co.in/", logo: "/select.png" },
  { name: "Tata Motors", url: "https://www.regenttata.in/", logo: "/regentTataMotors.webp" },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* 1. Corporate Hero Section with Slider */}
      <section className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden bg-primary">
        {/* Sliding Background Images & Content */}
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
              style={{ backgroundImage: `url(${slide.image})` }}
              aria-hidden="true"
            />

            {/* Dynamic Text Content per Slide */}
            <div className="relative z-20 w-full px-4 sm:px-6 lg:px-12 flex flex-col items-center text-center">


              <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-sans leading-relaxed mb-10">
                {slide.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto">
                <Link
                  href="/touch-points"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary bg-white hover:bg-slate-100 transition-colors shadow-sm w-full sm:w-auto"
                >
                  Find a Touch Point
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors w-full sm:w-auto"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Bottom Statistics Bar */}
        <div className="absolute bottom-6 left-0 right-0 z-20 w-full px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="text-lg md:text-xl font-bold text-white">32,934+</div>
              <div className="text-[10px] md:text-xs font-semibold text-accent uppercase tracking-wide mt-0.5">New Cars Sold</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-lg md:text-xl font-bold text-white">2,592+</div>
              <div className="text-[10px] md:text-xs font-semibold text-accent uppercase tracking-wide mt-0.5">Pre-Owned Cars Sold</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-lg md:text-xl font-bold text-white">108,360+</div>
              <div className="text-[10px] md:text-xs font-semibold text-accent uppercase tracking-wide mt-0.5">Service Visits</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-lg md:text-xl font-bold text-white">58,200+</div>
              <div className="text-[10px] md:text-xs font-semibold text-accent uppercase tracking-wide mt-0.5">Cars Insured</div>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-10 w-10" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-10 w-10" />
        </button>
      </section>

      {/* Trust Statistics Section */}
      <section className="py-12 md:py-16 bg-background border-b border-border relative z-10">
        <FadeIn className="w-full px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Trusted By Leading Automotive Brands
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              For over two decades, Regent Group has grown from a single showroom to a premier automotive retail powerhouse. Our unwavering commitment to operational excellence and customer satisfaction has made us the partner of choice for the world's most respected automotive manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "4+", label: "Global Automotive Brands" },
              { number: "Multiple", label: "Locations" },
              { number: "Thousands", label: "Customer Interactions" }
            ].map((stat, i) => (
              <div
                key={i}
                className="group flex flex-col items-center justify-center p-8 bg-card border border-border rounded-2xl hover:border-accent/30 hover:shadow-md hover:bg-background transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-3 group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base font-semibold text-primary uppercase tracking-wider text-center">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* 2. Interactive Brand Dealerships Banner */}
      <section id="brands" className="py-12 bg-muted border-y border-border">
        <FadeIn className="w-full px-4 sm:px-6 lg:px-12">
          <h2 className="text-center text-3xl md:text-4xl font-heading font-bold text-primary tracking-tight uppercase mb-12">
            OUR DEALERSHIPS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center opacity-80">
            {brands.map((brand) => (
              <a
                key={brand.name}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 transition-all hover:opacity-100 hover:scale-105"
              >
                <div className="w-full max-w-[180px] h-[120px] md:max-w-[220px] md:h-[140px] flex items-center justify-center group-hover:scale-105 transition-all">
                  <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain drop-shadow-sm mix-blend-multiply" />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  Visit Website &rarr;
                </span>
              </a>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* 3. What We Do */}
      <section className="py-12 md:py-16 bg-background border-b border-border">
        <FadeIn className="w-full px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6 tracking-tight">
              What We Do ?
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Customer Touch Point",
                desc: "Strategic network of premium dealership locations ensuring unparalleled accessibility.",
                icon: MapPin,
                link: "/touch-points"
              },
              {
                title: "Automotive Retail Operations",
                desc: "End-to-end sales and service operations driven by operational excellence.",
                icon: Car,
                link: "/touch-points"
              },
              {
                title: "Brand Partnerships",
                desc: "Representing global automotive leaders through trusted, long-term collaboration.",
                icon: Handshake,
                link: "#brands"
              },
              {
                title: "Customer Experience Management",
                desc: "Crafting memorable journeys and fostering lifelong loyalty for every client.",
                icon: Users,
                link: "/about-us"
              }
            ].map((service, i) => (
              <article
                key={i}
                className="group flex flex-col bg-card border border-border hover:border-border/80 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-lg bg-muted border border-border/50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>

              </article>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* 4. About Regent Group */}
      <section id="about-us" className="py-12 md:py-16 bg-muted border-b border-border" style={{ scrollMarginTop: "100px" }}>
        <FadeIn className="w-full px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left: Company Story */}
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary tracking-tight mb-6">
                About Regent Group
              </h2>
              <div className="w-16 h-1 bg-accent mb-10"></div>

              <div className="space-y-6 text-slate-600 font-sans text-lg leading-relaxed mb-10">
                <p>
                  Regent Group was established to redefine automotive retail and customer experience. As a premier automotive dealership network, we operate strategically across the Mumbai and Thane regions, representing some of the world's most trusted manufacturers.
                </p>
                <p>
                  Our foundation is built on operational excellence, integrity, and long-term partnerships. We provide a comprehensive suite of automotive services—from vehicle sales to insurance and specialized after-sales support—ensuring that every client interaction meets the highest standard of professionalism.
                </p>
              </div>

                <div className="mt-8">
                  <Link href="/about-us" className="inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#D4AF37] hover:text-[#0F172A]">
                    Read Full Story
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </Link>
                </div>
            </div>

            {/* Right: Key Milestones Timeline */}
            <div className="flex flex-col bg-card p-10 rounded-2xl shadow-sm border border-border">
              <h3 className="text-2xl font-heading font-bold text-primary mb-10">
                Key Milestones
              </h3>

              <div className="relative border-l-2 border-slate-200 ml-3 space-y-10">
                {[
                  { year: "2014", event: "Journey begins" },
                  { year: "2015", event: "Expansion into new markets" },
                  { year: "2019", event: "MG partnership" },
                  { year: "2023", event: "Toyota partnership" },
                  { year: "2024", event: "Skoda partnership" }
                ].map((milestone, i) => (
                  <div key={i} className="relative pl-8">
                    {/* Timeline Node */}
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-accent"></div>

                    <div className="font-heading font-bold text-xl text-primary mb-1">
                      {milestone.year}
                    </div>
                    <div className="text-slate-600 font-medium">
                      {milestone.event}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </FadeIn>
      </section>

      {/* 5. Why Regent Group */}
      <section className="py-8 md:py-12 bg-background border-b border-border">
        <FadeIn className="w-full px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6 tracking-tight">
              Why Regent ?
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Industry Expertise",
                desc: "With over a decade in the automotive sector, our deep market knowledge and industry foresight allow us to navigate complexities and consistently deliver superior results.",
                icon: Briefcase
              },
              {
                title: "Trusted Partnerships",
                desc: "We have cultivated enduring relationships with global automotive giants, built on a foundation of mutual trust, transparency, and a shared vision for excellence.",
                icon: ShieldCheck
              },
              {
                title: "Operational Excellence",
                desc: "Our highly optimized internal processes and rigorous quality standards ensure that every dealership runs seamlessly, maximizing both efficiency and customer satisfaction.",
                icon: Target
              }
            ].map((feature, i) => (
              <div
                key={i}
                className="flex flex-col bg-card border border-border rounded-xl p-8 hover:border-border/80 transition-colors duration-300"
              >
                <div className="h-14 w-14 rounded-lg bg-background border border-border shadow-sm flex items-center justify-center text-primary mb-6">
                  <feature.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* 6. Corporate Leadership (Principals) */}
      <section className="py-12 md:py-16 bg-background relative border-b border-border">
        <FadeIn className="w-full px-2 sm:px-4 lg:px-12">
          <div className="text-center max-w-1xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary uppercase tracking-widest mb-6">
              Our Leadership
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
            {[
              { name: "Kamal Ailsinghani", title: "Chairman", img: "/kamalAlisinghani.png" },
              { name: "Pawan Ailsinghani", title: "Managing Director", img: "/pawanAlisinghani.webp" },
              { name: "R. Chandrashekar", title: "Group Exec. Director", img: "/rChandrashekhar.webp", imgClass: "object-center scale-[1.05] translate-x-[6px]" },
              { name: "B. Sainath", title: "Group Director", img: "/bSainath.webp" },
              { name: "Jayesh Parikh", title: "Group CFO", img: "/jayeshParikh.png" }
            ].map((principal, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-5 border-4 border-border group-hover:border-accent group-hover:shadow-lg transition-all duration-300">
                  <img
                    src={principal.img}
                    alt={principal.name}
                    className={`object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-125 ${principal.imgClass || ""}`}
                  />
                </div>
                <h3 className="text-base font-bold font-heading text-primary leading-tight">{principal.name}</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-2">{principal.title}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Book Test Drive Section */}
      <section className="py-8 md:py-12 bg-[#0F172A] border-b border-white/10">
        <FadeIn className="w-full px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8">
            <h3 className="text-[#D4AF37] text-xs uppercase tracking-widest mb-3 font-semibold">
              Quick Inquiry
            </h3>
            <h2 className="text-white text-2xl font-heading mb-1">
              Book Your Test Drive
            </h2>
            <p className="text-slate-400 text-sm">Experience our premium collection</p>
          </div>

          <div className="max-w-xl mx-auto">
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
              <input type="hidden" name="access_key" value="a3316e2f-ea71-4c3e-9da8-e9e1875d58b4" />
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded text-white text-sm placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded text-white text-sm placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded text-white text-sm placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                required
              />

              <div className="grid md:grid-cols-2 gap-4">
                <select name="brand" className="px-4 py-2 bg-white/5 border border-white/10 rounded text-white text-sm focus:outline-none focus:border-[#D4AF37]/50 transition-colors" required>
                  <option value="" className="text-slate-900">Select Brand</option>
                  <option value="honda" className="text-slate-900">Honda</option>
                  <option value="toyota" className="text-slate-900">Toyota</option>
                  <option value="mg" className="text-slate-900">MG Motors</option>
                  <option value="skoda" className="text-slate-900">Skoda</option>
                  <option value="tata" className="text-slate-900">Tata Motors</option>
                </select>
                <select name="location" className="px-4 py-2 bg-white/5 border border-white/10 rounded text-white text-sm focus:outline-none focus:border-[#D4AF37]/50 transition-colors" required>
                  <option value="" className="text-slate-900">Select Location</option>
                  <option value="mumbai" className="text-slate-900">Mumbai</option>
                  <option value="thane" className="text-slate-900">Thane</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-2 bg-[#D4AF37] text-[#0F172A] font-semibold text-sm rounded hover:bg-[#E5C158] transition-colors duration-300"
              >
                Book Test Drive
              </button>
            </form>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
