"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";

/* ──────────────────────── DATA ──────────────────────── */

const categories = [
  "MG Events",
  "Regent Skoda",
  "Regent Toyota",
  "Regent Tata",
  "Regent Honda",
  "MG MG Hector",
  "MG Astor",
];

// Dummy "bot images" for each category
const categoryImages: Record<string, string[]> = {
  "MG Events": [
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611016186353-652e57552816?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?q=80&w=800&auto=format&fit=crop",
  ],
  "Regent Skoda": [
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop",
  ],
  "Regent Toyota": [
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop",
  ],
  "Regent Tata": [
    "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1587825140708-dfaf18c4f4d4?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop",
  ],
  "Regent Honda": [
    "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1587825140708-dfaf18c4f4d4?q=80&w=800&auto=format&fit=crop",
  ],
  "MG MG Hector": [
    "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?q=80&w=800&auto=format&fit=crop",
  ],
  "MG Astor": [
    "https://images.unsplash.com/photo-1587825140708-dfaf18c4f4d4?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop",
  ],
};

/* ──────────────────────── PAGE COMPONENT ──────────────────────── */

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const currentCategory = activeTab !== null ? categories[activeTab] : null;
  const currentImages = currentCategory ? categoryImages[currentCategory] || [] : [];

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

  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Premium Corporate Header */}
      <section className="relative bg-[#0F172A] py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-slate-800" />
        <div className="container relative z-10 mx-auto px-2 sm:px-4 lg:px-8">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Events" }]} />
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
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
      <section className="border-b border-border/50 bg-slate-50 py-6 sticky top-20 z-40">
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
      <section className="py-16 md:py-24">
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
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
