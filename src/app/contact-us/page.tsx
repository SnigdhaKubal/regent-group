import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Contact Us | Regent Group",
  description: "Get in touch with Regent Group. Find our corporate office locations in Thane and Navi Mumbai, or contact our support and careers teams.",
};

export default function ContactUsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50">
      {/* Corporate Header */}
      <section className="relative bg-[#0F172A] py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-slate-800" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb items={[{ label: "Contact Us" }]} />
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
              Get in Touch
            </h1>
            <div className="w-20 h-1 bg-[#D4AF37] mb-8"></div>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-sans">
              Whether you are looking to purchase a premium vehicle, partner with us, or explore career opportunities, our team is ready to assist you with unparalleled professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Left Column: Contact Details */}
            <div className="flex flex-col gap-12">
              <div>

                <div className="space-y-8">
                  {/* Thane Office */}
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                      <div className="h-12 w-12 rounded-lg bg-background border border-border shadow-sm flex items-center justify-center text-[#D4AF37] shrink-0">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-bold text-[#0F172A] mb-2">Thane</h3>
                        <address className="not-italic text-slate-600 leading-relaxed mb-3">
                          Shop No.16, A, DOSTI IMPERIA,<br />
                          Ghodbunder Rd, opposite R Mall,<br />
                          Manpada, Thane West,<br />
                          Maharashtra 400610
                        </address>
                        <a href="https://www.google.com/maps/search/?api=1&query=MG+Motor+Thane+Dosti+Imperia" className="inline-flex items-center text-[#D4AF37] hover:text-[#B78B1F] font-medium transition-colors">
                          <Navigation className="h-4 w-4 mr-1.5" /> Get Directions
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Navi Mumbai Office */}
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                      <div className="h-12 w-12 rounded-lg bg-background border border-border shadow-sm flex items-center justify-center text-[#D4AF37] shrink-0">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-bold text-[#0F172A] mb-2">Navi Mumbai</h3>
                        <address className="not-italic text-slate-600 leading-relaxed mb-3">
                          Plot No D-238, near Uran Phata Flyover,<br />
                          TTC Industrial Area, Shiravane, Nerul,<br />
                          Navi Mumbai,<br />
                          Maharashtra 400706
                        </address>
                        <a href="https://www.google.com/maps/search/?api=1&query=MG+Motor+Navi+Mumbai+Plot+D-238" className="inline-flex items-center text-[#D4AF37] hover:text-[#B78B1F] font-medium transition-colors">
                          <Navigation className="h-4 w-4 mr-1.5" /> Get Directions
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-px w-full bg-slate-200"></div>

              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#0F172A] mb-8">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex gap-4 items-center">
                    <div className="h-12 w-12 rounded-lg bg-background border border-border shadow-sm flex items-center justify-center text-[#D4AF37] shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Direct Line</h3>
                      <a href="tel:02242436666" className="text-lg font-semibold text-[#0F172A] hover:text-[#D4AF37] transition-colors block">022 42436666</a>
                      <a href="tel:8238082223" className="text-lg font-semibold text-[#0F172A] hover:text-[#D4AF37] transition-colors block">8238082223</a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <div className="h-12 w-12 rounded-lg bg-background border border-border shadow-sm flex items-center justify-center text-[#D4AF37] shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email Inquiries</h3>
                      <a href="mailto:info@regentgrouporg.com" className="text-lg font-semibold text-[#0F172A] hover:text-[#D4AF37] transition-colors block">info@regentgrouporg.com</a>
                      <a href="mailto:careers@regentgrouporg.com" className="text-lg font-semibold text-[#0F172A] hover:text-[#D4AF37] transition-colors block">careers@regentgrouporg.com</a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <div className="h-12 w-12 rounded-lg bg-background border border-border shadow-sm flex items-center justify-center text-[#D4AF37] shrink-0">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Business Hours</h3>
                      <p className="text-lg font-semibold text-[#0F172A]">Mon - Sat: 9:30 AM - 6:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Corporate Contact Form */}
            <div className="bg-card p-8 md:p-12 rounded-2xl shadow-sm border border-border">
              <h2 className="text-2xl font-heading font-bold text-[#0F172A] mb-2">Send us a Message</h2>
              <p className="text-slate-500 mb-8">Our executive team will respond to your inquiry promptly.</p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-semibold text-[#0F172A]">First Name</label>
                    <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-border focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all bg-muted focus:bg-background" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-semibold text-[#0F172A]">Last Name</label>
                    <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-border focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all bg-muted focus:bg-background" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-[#0F172A]">Corporate Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-border focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all bg-muted focus:bg-background" placeholder="john.doe@company.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-[#0F172A]">Inquiry Type</label>
                  <select id="subject" className="w-full px-4 py-3 rounded-lg border border-border focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all bg-muted focus:bg-background">
                    <option>General Inquiry</option>
                    <option>Vehicle Sales</option>
                    <option>Service & Maintenance</option>
                    <option>Careers</option>
                    <option>Partnerships</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-[#0F172A]">Message</label>
                  <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-border focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all bg-muted focus:bg-background resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <button type="button" className="w-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold py-4 rounded-lg transition-colors">
                  Submit Inquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
