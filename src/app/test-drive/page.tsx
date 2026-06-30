import { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Book a Test Drive | Regent Group",
  description: "Book a test drive at one of Regent Group's premium automotive showrooms in Mumbai and Thane.",
};

const locations = [
  "Ambernath",
  "Bandra",
  "Borivali",
  "Chembur",
  "Dombivli",
  "Kalyan",
  "Kandivali",
  "Navi Mumbai",
  "Shahapur",
  "Thane"
];

export default function TestDrivePage() {
  return (
    <main className="flex min-h-[90vh] flex-col bg-[#0F172A]">
      <section className="flex-1 flex flex-col justify-center py-16 md:py-24 relative overflow-hidden">
        {/* Subtle background image overlay */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
        
        <FadeIn className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-full flex flex-col items-center">
          
          <div className="text-center mb-12">
            <h3 className="text-[#D4AF37] text-sm uppercase tracking-[0.2em] mb-4 font-semibold">
              Quick Inquiry
            </h3>
            <h1 className="text-white text-4xl md:text-5xl font-heading mb-4">
              Book Your Test Drive
            </h1>
            <p className="text-slate-400 text-base max-w-2xl mx-auto">
              Experience our premium collection. Fill in your details below and our team will get in touch with you to schedule your test drive at your preferred location.
            </p>
          </div>

          <div className="w-full max-w-2xl">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded text-white text-sm placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded text-white text-sm placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                  required
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded text-white text-sm placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                required
              />

              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <select 
                    className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded text-white text-sm focus:outline-none focus:border-[#D4AF37]/50 transition-colors appearance-none"
                    required
                  >
                    <option value="" className="text-slate-900">Select Brand</option>
                    <option value="honda" className="text-slate-900">Honda</option>
                    <option value="toyota" className="text-slate-900">Toyota</option>
                    <option value="mg" className="text-slate-900">MG Motors</option>
                    <option value="skoda" className="text-slate-900">Škoda</option>
                    <option value="tata" className="text-slate-900">Tata Motors</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white/50">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
                
                <div className="relative">
                  <select 
                    className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded text-white text-sm focus:outline-none focus:border-[#D4AF37]/50 transition-colors appearance-none"
                    required
                  >
                    <option value="" className="text-slate-900">Select Location</option>
                    {locations.map((loc) => (
                      <option key={loc} value={loc.toLowerCase()} className="text-slate-900">
                        {loc}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white/50">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 mt-2 bg-[#D4AF37] text-[#0F172A] font-semibold text-sm rounded hover:bg-[#E5C158] transition-colors duration-300"
              >
                Book Test Drive
              </button>
            </form>
          </div>
          
        </FadeIn>
      </section>
    </main>
  );
}
