import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/#about-us" },
  { name: "Touch Points", href: "/touch-points" },
  { name: "Events", href: "/events" },
  { name: "CSR Initiatives", href: "/csr-initiatives" },
  { name: "Contact Us", href: "/contact-us" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/40 bg-white/70 shadow-[0_6px_24px_rgba(15,23,42,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center rounded-full transition-transform duration-200 hover:scale-[1.01]">
            <Image
              src="/REGENTlogo.webp"
              alt="Regent Group Logo"
              width={180}
              height={60}
              className="h-10 w-auto object-contain object-left sm:h-12"
              priority
            />
          </Link>
        </div>

        <nav className="hidden items-center gap-1 rounded-full border border-white/60 bg-white/50 px-2 py-2 shadow-sm lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold tracking-wide text-slate-700 transition-all duration-200 hover:bg-[#D4AF37]/10 hover:text-[#0F172A]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <button className="rounded-full border border-slate-200 bg-white p-2.5 text-[#0F172A] shadow-sm transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
