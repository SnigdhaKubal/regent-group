import Link from "next/link";

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
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-white shadow-sm">
      <div className="flex h-20 w-full items-center justify-between px-4 sm:px-6 lg:px-12">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading text-3xl font-bold tracking-tight text-primary uppercase">
              Regent
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-primary/80 transition-colors hover:text-accent"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Placeholder */}
        <div className="lg:hidden">
          <button className="text-primary p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
