"use client";

import React, { useState, useEffect } from "react";
import { RESTAURANT_INFO } from "@/data/restaurantData";
import { Home, UtensilsCrossed, Sparkles, Phone, MessageCircle } from "lucide-react";

export const MobileNavBar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "menu", "combos", "about", "gallery", "contact"];
      const scrollPos = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hi Jayeeta's Kitchen! I would like to place an order from your menu."
  )}`;

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#121212]/95 backdrop-blur-2xl border-t border-white/10 shadow-[0_-8px_32px_rgba(0,0,0,0.85)] pb-safe transition-all duration-300"
    >
      <div className="grid grid-cols-5 items-center justify-around px-2 py-2 max-w-md mx-auto">
        {/* 1. Home */}
        <a
          href="#home"
          className={`flex flex-col items-center justify-center gap-1 py-1 rounded-xl transition-all duration-200 ${
            activeSection === "home"
              ? "text-[#F4B860] font-bold"
              : "text-[#A8A29A] hover:text-[#F5F1EA]"
          }`}
        >
          <div
            className={`p-1.5 rounded-full transition-all ${
              activeSection === "home" ? "bg-[#F4B860]/20 shadow-[0_0_12px_rgba(244,184,96,0.3)]" : ""
            }`}
          >
            <Home className="w-5 h-5" />
          </div>
          <span className="text-[10px] tracking-wide">Home</span>
        </a>

        {/* 2. Menu */}
        <a
          href="#menu"
          className={`flex flex-col items-center justify-center gap-1 py-1 rounded-xl transition-all duration-200 ${
            activeSection === "menu"
              ? "text-[#E4572E] font-bold"
              : "text-[#A8A29A] hover:text-[#F5F1EA]"
          }`}
        >
          <div
            className={`p-1.5 rounded-full transition-all ${
              activeSection === "menu" ? "bg-[#E4572E]/20 shadow-[0_0_12px_rgba(228,87,46,0.35)]" : ""
            }`}
          >
            <UtensilsCrossed className="w-5 h-5" />
          </div>
          <span className="text-[10px] tracking-wide">Menu</span>
        </a>

        {/* 3. Combos */}
        <a
          href="#combos"
          className={`flex flex-col items-center justify-center gap-1 py-1 rounded-xl transition-all duration-200 ${
            activeSection === "combos"
              ? "text-[#F4B860] font-bold"
              : "text-[#A8A29A] hover:text-[#F5F1EA]"
          }`}
        >
          <div
            className={`p-1.5 rounded-full transition-all ${
              activeSection === "combos" ? "bg-[#F4B860]/20 shadow-[0_0_12px_rgba(244,184,96,0.3)]" : ""
            }`}
          >
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="text-[10px] tracking-wide">Combos</span>
        </a>

        {/* 4. Call */}
        <a
          href={`tel:${RESTAURANT_INFO.phones[0]}`}
          className="flex flex-col items-center justify-center gap-1 py-1 rounded-xl text-[#A8A29A] hover:text-[#F5F1EA] transition-all duration-200 active:scale-95"
        >
          <div className="p-1.5 rounded-full bg-white/5 hover:bg-[#E4572E]/20 hover:text-[#E4572E] transition-all">
            <Phone className="w-5 h-5" />
          </div>
          <span className="text-[10px] tracking-wide">Call</span>
        </a>

        {/* 5. WhatsApp Order (Highlighted CTA) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-1 rounded-xl text-[#25D366] font-bold transition-all duration-200 active:scale-95"
        >
          <div className="p-1.5 rounded-full bg-[#25D366]/20 shadow-[0_0_14px_rgba(37,211,102,0.4)]">
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
          </div>
          <span className="text-[10px] tracking-wide">Order</span>
        </a>
      </div>
    </nav>
  );
};

