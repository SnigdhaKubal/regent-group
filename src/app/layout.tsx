import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Regent Group | Premium Automotive Excellence",
  description: "Regent Group is a trusted automotive dealership network representing premium global brands like Honda, Toyota, MG, and Škoda across the Mumbai and Thane regions. 20+ years of automotive excellence.",
  keywords: ["Regent Group", "Automotive Dealership", "Mumbai", "Thane", "Honda", "Toyota", "MG", "Škoda", "Premium Cars", "Car Service"],
  openGraph: {
    title: "Regent Group | Premium Automotive Excellence",
    description: "Regent Group is a trusted automotive dealership network representing premium global brands across the Mumbai and Thane regions.",
    type: "website",
    locale: "en_IN",
    siteName: "Regent Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regent Group | Premium Automotive Excellence",
    description: "Trusted automotive dealership network representing premium global brands in Mumbai and Thane.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
