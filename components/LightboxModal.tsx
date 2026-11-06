"use client";

import React, { useEffect } from "react";
import { GalleryPhoto, RESTAURANT_INFO } from "@/data/restaurantData";
import { X, ChevronLeft, ChevronRight, MessageCircle, Image as ImageIcon } from "lucide-react";

interface LightboxModalProps {
  photos: GalleryPhoto[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || photos.length === 0) return null;

  const currentPhoto = photos[currentIndex];
  const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hi Jayeeta's Kitchen, I am inquiring about the ${currentPhoto.title}`
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[500px] h-[500px] bg-[#E4572E]/15 rounded-full blur-[160px]" />
      </div>

      {/* Top Controls Bar */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between z-30 pointer-events-none">
        {/* Counter Pill */}
        <div className="pointer-events-auto inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0E0E0E]/80 backdrop-blur-xl border border-white/10 shadow-lg text-[#F5F1EA] text-xs font-semibold">
          <ImageIcon className="w-3.5 h-3.5 text-[#F4B860]" />
          <span>
            {currentIndex + 1} / {photos.length}
          </span>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="pointer-events-auto w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0E0E0E]/80 hover:bg-[#2A2A2A] backdrop-blur-xl border border-white/10 hover:border-[#F4B860]/50 text-[#F5F1EA] hover:text-[#F4B860] shadow-xl flex items-center justify-center transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Left Navigation Arrow */}
      <button
        onClick={onPrev}
        aria-label="Previous Image"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#0E0E0E]/80 hover:bg-[#2A2A2A] backdrop-blur-xl border border-white/10 hover:border-[#F4B860]/50 text-[#F5F1EA] hover:text-[#F4B860] shadow-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Right Navigation Arrow */}
      <button
        onClick={onNext}
        aria-label="Next Image"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#0E0E0E]/80 hover:bg-[#2A2A2A] backdrop-blur-xl border border-white/10 hover:border-[#F4B860]/50 text-[#F5F1EA] hover:text-[#F4B860] shadow-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Central Framed Photo & Caption */}
      <div className="relative max-w-4xl w-full max-h-[88vh] flex flex-col items-center justify-center z-20 pointer-events-auto">
        <div className="relative w-full rounded-2xl overflow-hidden bg-[#0E0E0E]/90 border border-[#F4B860]/30 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(248,188,99,0.18)]">
          {/* Photo Frame */}
          <div className="relative w-full h-[50vh] sm:h-[60vh] max-h-[580px] bg-black/70 flex items-center justify-center overflow-hidden">
            <img
              src={currentPhoto.image}
              alt={currentPhoto.alt}
              className="w-full h-full object-cover transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/20 to-transparent pointer-events-none" />
          </div>

          {/* Caption Bar */}
          <div className="p-4 sm:p-6 bg-[#0E0E0E]/95 backdrop-blur-2xl border-t border-white/10 flex flex-col gap-2.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#F4B860]">
                  {currentPhoto.title}
                </h3>
                <span className="shrink-0 px-2.5 py-0.5 rounded-full bg-[#F4B860]/15 text-[#F4B860] text-[10px] font-bold uppercase tracking-wider hidden sm:inline-block">
                  Specialty
                </span>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-xs font-bold shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:scale-[1.02] active:scale-95 transition-all border border-white/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order / Inquire on WhatsApp</span>
              </a>
            </div>

            <p className="text-xs sm:text-sm text-[#A8A29A] leading-relaxed">
              {currentPhoto.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
