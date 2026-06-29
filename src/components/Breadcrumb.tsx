import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
  variant?: "light" | "dark"; // 'light' for light backgrounds (dark text), 'dark' for dark backgrounds (light text)
}

export function Breadcrumb({ items, variant = "dark" }: BreadcrumbProps) {
  const isLight = variant === "light";
  const textColor = isLight ? "text-slate-600" : "text-slate-300";
  const hoverColor = isLight ? "hover:text-primary" : "hover:text-white";
  const activeColor = isLight ? "text-slate-900" : "text-white";

  return (
    <nav className={`flex items-center text-sm ${textColor} mb-8`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className={`${hoverColor} transition-colors flex items-center`}>
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1" />
            {item.href ? (
              <Link href={item.href} className={`${hoverColor} transition-colors`}>
                {item.label}
              </Link>
            ) : (
              <span className={`${activeColor} font-medium`} aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
