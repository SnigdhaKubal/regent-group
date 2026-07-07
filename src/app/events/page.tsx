/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";

/* ──────────────────────── DATA ──────────────────────── */

const categories = [
  "All",
  "MG Events",
  "Regent Skoda",
  "Regent Toyota",
  "MG MG Hector",
  "MG Astor",
];

// images for each category
const categoryImages: Record<string, string[]> = {
  "MG Events": [
    "/EVENTS/MGevents1.webp",
    "/EVENTS/MGevents2.webp",
    "/EVENTS/MGevents3.webp",
    "/EVENTS/MGevents4.webp",
  ],
  "Regent Skoda": [
    "/EVENTS/SKODAevents1.webp",
    "/EVENTS/SKODAevents2.webp",
    "/EVENTS/SKODAevents3.webp",
    "/EVENTS/SKODAevents4.webp",
  ],
  "Regent Toyota": [
    "/EVENTS/TOYOTAevents1.webp",
    "/EVENTS/TOYOTAevents2.webp",
    "/EVENTS/TOYOTAevents3.webp",
    "/EVENTS/TOYOTAevents4.webp",
  ],
  "MG MG Hector": [
    "/EVENTS/HECTORevents1.webp",
    "/EVENTS/HECTORevents2.webp",
    "/EVENTS/HECTORevents3.webp",
    "/EVENTS/HECTORevents4.webp",
  ],
  "MG Astor": [
    "/EVENTS/ASTORevents1.webp",
    "/EVENTS/ASTORevents2.webp",
    "/EVENTS/ASTORevents3.webp",
    "/EVENTS/ASTORevents4.webp",
  ],
};

/* ──────────────────────── PAGE COMPONENT ──────────────────────── */

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const currentCategory = categories[activeTab];
  const currentImages = currentCategory === "All"
    ? Object.values(categoryImages).flat()
    : categoryImages[currentCategory] || [];

  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => {
    if (lightboxIndex === null || currentImages.length === 0) return;
    setLightboxIndex(
      lightboxIndex === 0 ? currentImages.length - 1 : lightboxIndex - 1
    );
  };
  const nextImage = () => {
    if (lightboxIndex === null || currentImages.length === 0) return;
    setLightboxIndex(
      lightboxIndex === currentImages.length - 1 ? 0 : lightboxIndex + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
    };
    if (lightboxIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Premium Corporate Header */}
      <section className="relative bg-[#0F172A] py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="container relative z-10 mx-auto px-2 sm:px-4 lg:px-8">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Events" }]} />
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-heading font-bold text-white mb-6 tracking-tight">
              Corporate Events & Showcases
            </h1>
            <div className="w-20 h-1 bg-[#D4AF37] mb-6"></div>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-sans">
              Experience the pinnacle of automotive retail. From VIP deliveries to grand brand unveils, discover the milestones that define the Regent Group legacy.
            </p>
          </div>
        </div>
      </section>

      {/* Events Filter Buttons */}
      <section className="border-b border-border/50 bg-slate-50 py-4 sticky top-20 z-40">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 items-center">
            {categories.map((category, idx) => {
              const isActive = idx === activeTab;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveTab(idx);
                    setLightboxIndex(null); // Reset lightbox when changing tab
                  }}
                  // Using fixed inline styles to prevent layout shifting on click
                  style={
                    isActive
                      ? { backgroundColor: "#0F172A", color: "#ffffff", borderColor: "#0F172A" }
                      : { backgroundColor: "#ffffff", color: "#475569", borderColor: "#e2e8f0" }
                  }
                  className="px-5 py-2 text-sm font-semibold rounded-full transition-colors duration-200 border hover:border-[#D4AF37] hover:text-[#0F172A]"
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {currentCategory ? (
            <>
              <div className="mb-8 text-center md:text-left">
                <h2 className="text-2xl font-heading font-bold text-[#0F172A]">
                  {currentCategory} Gallery
                </h2>
                <p className="text-slate-500 text-sm mt-2">
                  {currentImages.length} photos available
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {currentImages.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setLightboxIndex(i)}
                    className="group relative cursor-pointer overflow-hidden rounded-xl aspect-[4/3] bg-slate-100 border border-slate-200 hover:shadow-lg hover:border-[#D4AF37]/50 transition-all duration-300"
                  >
                    <img
                      src={img}
                      alt={`${currentCategory} – Photo ${i + 1}`}
                      className="w-full h-full object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                      <span className="text-white text-sm font-medium">View photo</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-400 text-lg">
                Please select an event category above to view the image gallery.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && currentImages.length > 0 && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white/70 hover:text-white z-10"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white z-10 p-2"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          <div
            className="max-w-5xl max-h-[85vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImages[lightboxIndex]}
              alt=""
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white z-10 p-2"
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/50 text-white/80 text-sm px-4 py-1.5 rounded-full">
            {lightboxIndex + 1} / {currentImages.length}
          </div>
        </div>
      )}
    </main>
  );
}
