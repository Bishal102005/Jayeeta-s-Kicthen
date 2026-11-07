"use client";

import React from "react";
import { RESTAURANT_INFO } from "@/data/restaurantData";
import { Phone, MessageCircle, MapPin, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="w-full bg-[#0E0E0E] pt-16 pb-28 md:pb-16 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Col 1: Brand */}
            <div className="flex flex-col gap-3">
              <div className="max-w-[200px]">
                <img
                  src={RESTAURANT_INFO.logoUrl}
                  alt={RESTAURANT_INFO.name}
                  className="w-full h-auto object-contain drop-shadow-[0_2px_14px_rgba(228,87,46,0.3)]"
                />
              </div>
              <p className="text-xs text-[#A8A29A] leading-relaxed">
                Elevating heritage culinary traditions into an intimate gastronomic journey along Chowdhurypara Road in Barasat.
              </p>
            </div>

            {/* Col 2: Quick Links */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-[#F4B860] uppercase tracking-wider">
                Quick Links
              </span>
              <div className="flex flex-col gap-2 text-xs text-[#A8A29A]">
                <a href="#home" className="hover:text-[#F5F1EA] transition-colors">
                  Home
                </a>
                <a href="#about" className="hover:text-[#F5F1EA] transition-colors">
                  About Us
                </a>
                <a href="#menu" className="hover:text-[#F5F1EA] transition-colors">
                  Our Menu
                </a>
                <a href="#combos" className="hover:text-[#F5F1EA] transition-colors">
                  Signature Combos
                </a>
                <a href="#gallery" className="hover:text-[#F5F1EA] transition-colors">
                  Visual Gallery
                </a>
                <a href="#contact" className="hover:text-[#F5F1EA] transition-colors">
                  Contact
                </a>
              </div>
            </div>

            {/* Col 3: Dining & Location */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-[#F4B860] uppercase tracking-wider">
                Dining &amp; Location
              </span>
              <p className="text-xs text-[#A8A29A] leading-relaxed">
                Authentic artisan dining kitchen and pure homestyle flavours.
              </p>
              <div className="flex items-center gap-2 text-xs text-[#A8A29A] mt-1">
                <MapPin className="w-4 h-4 text-[#F4B860] shrink-0" />
                <span>Barasat, Kolkata, West Bengal, India</span>
              </div>
            </div>

            {/* Col 4: Orders & Inquiries */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-[#F4B860] uppercase tracking-wider">
                Orders &amp; Inquiries
              </span>
              <p className="text-xs text-[#A8A29A] leading-relaxed">
                For direct orders, counter takeaways, and parcels:
              </p>
              <div className="flex items-center gap-2 mt-1">
                <Phone className="w-4 h-4 text-[#F4B860] shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phones[0]}`}
                  className="text-xs font-semibold text-[#F5F1EA] hover:text-[#F4B860] transition-colors"
                >
                  +91 {RESTAURANT_INFO.phoneDisplay[0]}
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Sub-bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-xs text-[#A8A29A]">
          <p>
            © {new Date().getFullYear()}{" "}
            <a
              href="https://bscreation.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-slate-700 hover:text-indigo-600 transition"
            >
              BS Creation
            </a>{" "}
            — All rights reserved
          </p>

            <div className="flex items-center gap-4">
              <span>Heritage Dining • Artisanal Bengali Flavours</span>
              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="w-7 h-7 rounded-full bg-[#1C1B1B] hover:bg-[#2A2A2A] text-[#F4B860] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Call Button (Bottom Left - Desktop Only) */}
      <aside className="hidden md:flex fixed bottom-6 left-6 z-40">
        <a
          href={`tel:${RESTAURANT_INFO.phones[0]}`}
          aria-label="Call Jayeeta's Kitchen"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#E4572E] text-white shadow-[0_6px_24px_rgba(228,87,46,0.45)] hover:scale-110 active:scale-95 transition-transform duration-300 backdrop-blur-md"
        >
          <Phone className="w-5 h-5" />
        </a>
      </aside>

      {/* Floating WhatsApp Button (Bottom Right - Desktop Only) */}
      <aside className="hidden md:flex fixed bottom-6 right-6 z-40">
        <a
          href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-[0_6px_24px_rgba(37,211,102,0.45)] hover:scale-110 active:scale-95 transition-transform duration-300 backdrop-blur-md"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </aside>
    </>
  );
};
