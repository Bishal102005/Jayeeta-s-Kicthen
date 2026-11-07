"use client";

import React, { useState } from "react";
import { GALLERY_PHOTOS } from "@/data/restaurantData";
import { LightboxModal } from "@/components/LightboxModal";
import { ZoomIn, Maximize2 } from "lucide-react";

export const Gallery: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setSelectedPhotoIndex((prev) => (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
  };

  const handleNext = () => {
    setSelectedPhotoIndex((prev) => (prev + 1) % GALLERY_PHOTOS.length);
  };

  return (
    <section id="gallery" className="py-20 sm:py-24 relative bg-[#0B0B0B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2 max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-bold text-[#F4B860] uppercase tracking-widest">
            Visual Gastronomy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F5F1EA]">
            Gallery of Delicacies
          </h2>
          <p className="text-sm sm:text-base text-[#A8A29A]">
            A photographic celebration of fresh textures, steam, and vibrant craft
          </p>
        </div>

        {/* Masonry / Grid of 6 Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_PHOTOS.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(idx)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#1C1B1B] relative h-72 shadow-lg ring-1 ring-white/10 hover:ring-[#F4B860]/40 transition-all duration-300"
            >
              <img
                src={photo.image}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/95 via-[#0E0E0E]/30 to-transparent opacity-85 group-hover:opacity-100 transition-opacity" />

              {/* Hover Expand Badge */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="w-14 h-14 rounded-full bg-[#0E0E0E]/80 backdrop-blur-md border border-[#F4B860]/50 text-[#F4B860] flex items-center justify-center shadow-[0_0_24px_rgba(248,188,99,0.35)] transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn className="w-7 h-7" />
                </div>
              </div>

              {/* Bottom Card Title & Icon */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="font-serif text-lg font-medium text-[#F5F1EA]">
                  {photo.title}
                </span>
                <div className="w-8 h-8 rounded-full bg-[#F4B860]/20 flex items-center justify-center text-[#F4B860] group-hover:bg-[#F4B860] group-hover:text-[#0B0B0B] transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      <LightboxModal
        photos={GALLERY_PHOTOS}
        currentIndex={selectedPhotoIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
