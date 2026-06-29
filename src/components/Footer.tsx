"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-[#0F172A] text-white pt-8 pb-4 font-sans selection:bg-[#D4AF37] selection:text-[#0F172A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        {/* Top Header Section */}
        <div className="border-t border-b border-[#D4AF37]/30 py-10 mb-16 text-center relative">

          <h2 className="font-heading text-4xl md:text-3xl lg:text-6xl font-normal text-white tracking-wide">
            THE REGENT GROUP DISPATCH
          </h2>
        </div>

        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-0 lg:divide-x divide-white/10 border-b border-white/10 pb-16">

          {/* Column 1: About */}
          <div className="lg:pr-10">
            <h3 className="text-[#D4AF37] text-xs uppercase tracking-widest mb-6 font-semibold">
              About The Group
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed text-justify mb-6">
              <span className="text-[#D4AF37] text-4xl float-left mr-[2px] font-heading leading-tight mt-1">R</span>
              egent Group is a trusted dealership for premium brands in the Mumbai and Thane regions.
              Backed by two decades of automotive expertise,
              we build experiences that feel as premium as the vehicles we represent rooted in excellence,
              reaching everywhere.
            </p>

          </div>

          {/* Column 3: Correspondence */}
          <div className="lg:px-10">
            <h3 className="text-[#D4AF37] text-xs uppercase tracking-widest mb-6 font-semibold">
              Correspondence
            </h3>

            <div className="mb-6">
              <div className="text-slate-500 text-[10px] uppercase tracking-widest mb-2">Electronic Post</div>
              <a href="mailto:info@regentgrouporg.com" className="text-slate-300 text-sm hover:text-[#D4AF37] transition-colors break-words">
                info@regentgrouporg.com
              </a>
            </div>

            <div className="mb-6">
              <div className="text-slate-500 text-[10px] uppercase tracking-widest mb-2">Call & Whatsapp</div>
              <a href="tel:+918238082223" className="text-slate-300 text-sm hover:text-[#D4AF37] transition-colors block">
                +91 8238 082 223
              </a>
            </div>

            <div>
              <div className="text-slate-500 text-[10px] uppercase tracking-widest mb-2">Bureau</div>
              <address className="not-italic text-slate-300 text-sm leading-relaxed">
                Shop No 16 A, Dosti Imperia<br />
                Thane West, Maharashtra<br />
                India, 400610
              </address>
            </div>
          </div>

          {/* Column 4: Local Time / Follow */}
          <div className="lg:pl-10 flex flex-col justify-between">
            <div>
              <h3 className="text-[#D4AF37] text-xs uppercase tracking-widest mb-6 font-semibold">
                Local Time
              </h3>
              <div className="font-serif text-3xl xl:text-4xl text-white tracking-wide mb-2 min-h-[40px]">
                {time}
              </div>
              <div className="text-slate-500 text-[10px] uppercase tracking-widest">
                IST - MUMBAI, INDIA
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-[#D4AF37] text-xs uppercase tracking-widest mb-4 font-semibold">
                Follow
              </h3>
              <ul className="space-y-4">
                {[
                  { name: "Instagram", href: "https://www.instagram.com/regentgrouporg/" },
                  { name: "LinkedIn", href: "https://www.linkedin.com/company/regent-group-organisation/" },
                  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=81559836466225" },
                  { name: "YouTube", href: "https://www.youtube.com/@regentgrouporg" }
                ].map((item) => (
                  <li key={item.name} className="flex justify-between items-center group border-b border-dashed border-white/10 pb-3">
                    <a href={item.href} className="text-slate-300 text-sm group-hover:text-[#D4AF37] transition-colors">
                      {item.name}
                    </a>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-[#D4AF37] transition-colors" />
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-l-2 border-[#D4AF37] pl-4">
                <p className="text-slate-500 text-xs italic font-serif leading-relaxed">
                  "We don't just sell vehicles. We deliver premium experiences."
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Footer Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Regent Group. Mumbai, India - Est. 2014
          </div>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-[#D4AF37] transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-[#D4AF37] transition-colors duration-300">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
