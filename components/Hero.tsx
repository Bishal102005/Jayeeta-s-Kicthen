"use client";

import React from "react";
import { RESTAURANT_INFO } from "@/data/restaurantData";
import { UtensilsCrossed, Compass, ChevronDown, MessageCircle, Sparkles } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-0 sm:min-h-[92vh] pt-20 sm:pt-28 lg:pt-32 pb-12 sm:pb-20 flex items-center justify-center overflow-hidden bg-[#0B0B0B]"
    >
      {/* Dynamic Ambient Glowing Hearth Orbs with Breathing Animations */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[580px] h-72 sm:h-[580px] bg-gradient-to-tr from-[#E4572E]/25 to-[#F4B860]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-16 right-5 sm:right-10 w-64 sm:w-[480px] h-64 sm:h-[480px] bg-gradient-to-br from-[#F4B860]/20 to-[#E4572E]/10 rounded-full blur-[120px] pointer-events-none animate-float-slow" />
      <div className="absolute top-2/3 left-5 sm:left-10 w-48 sm:w-[360px] h-48 sm:h-[360px] bg-[#E4572E]/10 rounded-full blur-[100px] pointer-events-none animate-float-gentle" />

      {/* Floating Starlight Ember Particle Accents */}
      <div className="absolute top-24 left-[10%] w-1.5 h-1.5 rounded-full bg-[#F4B860] animate-ping opacity-75 pointer-events-none" />
      <div className="absolute top-36 right-[15%] w-2 h-2 rounded-full bg-[#E4572E] animate-pulse opacity-60 pointer-events-none" />
      <div className="absolute bottom-28 left-[25%] w-1.5 h-1.5 rounded-full bg-[#FFD69F] animate-ping opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Text & Brand Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 sm:gap-5">
            {/* Glossy Location Pill */}
            <div className="gloss-overlay inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-[#1E1C1C]/90 via-[#262424]/85 to-[#1E1C1C]/90 border border-[#F4B860]/30 backdrop-blur-xl shadow-[0_4px_20px_rgba(244,184,96,0.15)] group hover:border-[#F4B860]/60 transition-all duration-300">
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E4572E] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-[#E4572E]" />
              </span>
              <span className="text-[10px] sm:text-[11px] font-extrabold tracking-widest text-[#F4B860] uppercase font-sans">
                Barasat • Artisanal Kitchen
              </span>
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#F4B860] animate-pulse" />
            </div>

            {/* Official Brand Logo with Ambient Hearth Under-glow */}
            <div className="relative mt-0 sm:mt-1 w-full max-w-[280px] xs:max-w-[340px] sm:max-w-md group flex justify-center lg:justify-start">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#E4572E]/20 via-[#F4B860]/20 to-transparent rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <img
                src={RESTAURANT_INFO.heroSignboardUrl}
                alt="Jayeeta's Kitchen"
                className="relative w-full h-auto object-contain drop-shadow-[0_8px_32px_rgba(228,87,46,0.4)] transform group-hover:scale-[1.01] transition-transform duration-300"
              />
            </div>

            {/* Category Subline with Gleaming Accents */}
            <div className="text-xs sm:text-base font-medium text-[#FFB5A0] max-w-xl tracking-wide flex items-center justify-center lg:justify-start flex-wrap gap-2">
              <span>South Indian Dosa</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4B860] inline-block shadow-[0_0_8px_#F4B860]" />
              <span>Idli</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4B860] inline-block shadow-[0_0_8px_#F4B860]" />
              <span>Chaat</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4B860] inline-block shadow-[0_0_8px_#F4B860]" />
              <span>Lassi</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4B860] inline-block shadow-[0_0_8px_#F4B860]" />
              <span>Mojito &amp; more</span>
            </div>

            {/* Mobile-Only Dish Platter Visual Highlight (Prominently visible in mobile overview!) */}
            <div className="w-full max-w-sm mx-auto my-1 block lg:hidden relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#E4572E]/30 via-[#F4B860]/25 to-transparent rounded-2xl blur-xl opacity-80 animate-pulse-glow pointer-events-none" />
              <div className="animate-float-slow relative w-full rounded-2xl overflow-hidden ultra-glass p-2 shadow-2xl">
                <div className="gloss-overlay relative w-full rounded-xl overflow-hidden bg-black flex items-center justify-center border border-white/10">
                  <img
                    src={RESTAURANT_INFO.heroDishImage}
                    alt="Jayeeta's Kitchen South Indian Special Delicacies"
                    className="w-full h-auto object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.95)]"
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-base text-[#A8A29A] max-w-xl leading-relaxed font-light">
              {RESTAURANT_INFO.heroDescription}
            </p>

            {/* Glossy CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full sm:w-auto">
              {/* Primary Flame Button with Gloss Sweep */}
              <a
                href="#menu"
                className="gloss-overlay w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#E4572E] via-[#F36238] to-[#E4572E] text-white font-bold text-xs sm:text-sm shadow-[0_6px_28px_rgba(228,87,46,0.5),inset_0_1px_1px_rgba(255,255,255,0.35)] hover:shadow-[0_8px_36px_rgba(228,87,46,0.7)] hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                <span>Explore Our Menu</span>
                <UtensilsCrossed className="w-4 h-4 animate-bounce" />
              </a>

              {/* Glossy WhatsApp Button */}
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Hi Jayeeta's Kitchen, I would like to place an order from your menu."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="gloss-overlay w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-black font-extrabold text-xs sm:text-sm shadow-[0_6px_24px_rgba(37,211,102,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:shadow-[0_8px_32px_rgba(37,211,102,0.5)] hover:scale-[1.02] transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Place Order</span>
              </a>

              {/* Frosted Glass Location Button */}
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-xl bg-[#1C1B1B]/80 hover:bg-[#2A2A2A] text-[#F5F1EA] font-semibold text-xs sm:text-sm backdrop-blur-xl border border-white/10 hover:border-[#F4B860]/40 transition-all duration-300 shadow-md"
              >
                <span>Find Us</span>
                <Compass className="w-4 h-4 text-[#F4B860]" />
              </a>
            </div>

            {/* 3 Glossy Trust Pods */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-5 sm:pt-6 border-t border-white/10 w-full max-w-lg">
              <div className="ultra-glass rounded-xl p-2.5 sm:p-3.5 flex flex-col items-center sm:items-start text-center sm:text-left transition-transform hover:-translate-y-1 duration-300">
                <span className="font-serif text-lg sm:text-2xl font-black text-[#F4B860] drop-shadow-[0_2px_8px_rgba(244,184,96,0.3)]">
                  100%
                </span>
                <span className="text-[9px] sm:text-[11px] text-[#A8A29A] uppercase tracking-wider font-bold mt-0.5">
                  Pure Homestyle
                </span>
              </div>

              <div className="ultra-glass rounded-xl p-2.5 sm:p-3.5 flex flex-col items-center sm:items-start text-center sm:text-left transition-transform hover:-translate-y-1 duration-300 border-[#E4572E]/30">
                <span className="font-serif text-lg sm:text-2xl font-black text-[#E4572E] drop-shadow-[0_2px_8px_rgba(228,87,46,0.4)]">
                  95+
                </span>
                <span className="text-[9px] sm:text-[11px] text-[#A8A29A] uppercase tracking-wider font-bold mt-0.5">
                  Fresh Items
                </span>
              </div>

              <div className="ultra-glass rounded-xl p-2.5 sm:p-3.5 flex flex-col items-center sm:items-start text-center sm:text-left transition-transform hover:-translate-y-1 duration-300">
                <span className="font-serif text-lg sm:text-2xl font-black text-[#F4B860] drop-shadow-[0_2px_8px_rgba(244,184,96,0.3)]">
                  Zero
                </span>
                <span className="text-[9px] sm:text-[11px] text-[#A8A29A] uppercase tracking-wider font-bold mt-0.5">
                  Preservatives
                </span>
              </div>
            </div>
          </div>

          {/* Right Hero Image (Desktop): Animated, Floating & Ultra Glossy */}
          <div className="hidden lg:flex lg:col-span-5 relative justify-center mt-0">
            {/* Glowing Golden Hearth Aura behind the food platter */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#E4572E]/30 via-[#F4B860]/25 to-transparent rounded-3xl blur-2xl opacity-75 animate-pulse-glow pointer-events-none" />

            {/* Floating Glass Container */}
            <div className="animate-float-slow relative w-full max-w-lg rounded-3xl overflow-hidden ultra-glass p-2.5 sm:p-3 group shadow-[0_24px_60px_rgba(0,0,0,0.85),0_0_50px_rgba(244,184,96,0.18)]">
              {/* Image Frame with Specular Gloss Overlay */}
              <div className="gloss-overlay relative w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-white/10 group-hover:border-[#F4B860]/50 transition-colors duration-500">
                <img
                  src={RESTAURANT_INFO.heroDishImage}
                  alt="Jayeeta's Kitchen South Indian Special Delicacies"
                  className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out drop-shadow-[0_16px_40px_rgba(0,0,0,0.95)]"
                />

                {/* Subtle Interactive Sheen Layer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="flex justify-center mt-8 sm:mt-12 pt-4 sm:pt-6">
          <a
            href="#about"
            className="gloss-overlay inline-flex flex-col items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#F4B860]/40 text-[#A8A29A] hover:text-[#F4B860] transition-all duration-300 group shadow-md"
            aria-label="Scroll to About section"
          >
            <span className="text-[10px] font-extrabold tracking-widest uppercase">Scroll Down</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#F4B860]" />
          </a>
        </div>
      </div>
    </section>
  );
};
