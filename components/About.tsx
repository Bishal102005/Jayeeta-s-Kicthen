"use client";

import React from "react";
import { RESTAURANT_INFO } from "@/data/restaurantData";
import { Calendar, HeartHandshake, Utensils, Flame } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 relative bg-[#0E0E0E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Framed Dish & Mortar Visual */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md rounded-2xl p-2.5 glass-card">
              <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden">
                <img
                  src={RESTAURANT_INFO.aboutMortarImage}
                  alt="Traditional stone mortar and pestle with spices"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/80 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 p-4 rounded-xl bg-[#201F1F]/90 backdrop-blur-xl border border-[#F4B860]/20 shadow-2xl flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#F4B860]/15 text-[#F4B860] flex items-center justify-center shrink-0">
                  <Flame className="w-5 h-5 fill-[#F4B860]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#F5F1EA] block">Slow-Crafted</span>
                  <span className="text-[11px] text-[#A8A29A] block">Made fresh to order</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Story Narrative & Stats */}
          <div className="lg:col-span-7 flex flex-col gap-6 order-1 lg:order-2">
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-8 bg-[#F4B860]" />
              <span className="text-[11px] font-bold text-[#F4B860] uppercase tracking-widest">
                Our Heritage &amp; Craft
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F5F1EA] tracking-tight">
              Our Story
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#A8A29A] leading-relaxed">
              <p>
                Tucked away along Chowdhurypara Road in Barasat,{" "}
                <strong className="text-[#F5F1EA] font-medium">Jayeeta&apos;s Kitchen</strong> was born
                from a profound love for the comforting simplicity of home cooking. We set out with a
                singular purpose: to craft unhurried, nourishing delicacies prepared with the same heartfelt
                warmth and honesty you would find at your family dining table.
              </p>
              <p>
                From the gentle hiss of our signature butter-drizzled dosas crisping on cast iron, to piping-hot
                steamed idlis, tangy chatpata chaats, fluffy protein-packed omelettes, and hand-churned cold
                lassis—every single recipe is prepared fresh daily with uncompromised quality. We never cut
                corners, because to us, food is an offering of care.
              </p>
            </div>

            {/* 3 Glass Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl glass-card flex flex-col items-start gap-1.5">
                <div className="w-10 h-10 rounded-full bg-[#E4572E]/15 text-[#E4572E] flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-semibold text-[#F5F1EA] mt-1">Fresh Daily</h4>
                <p className="text-xs text-[#A8A29A]">
                  Naturally fermented stone-ground batter every dawn.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-card flex flex-col items-start gap-1.5">
                <div className="w-10 h-10 rounded-full bg-[#F4B860]/15 text-[#F4B860] flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-semibold text-[#F5F1EA] mt-1">Homestyle Taste</h4>
                <p className="text-xs text-[#A8A29A]">
                  Generous pure ghee and authentic hand-ground masalas.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-card flex flex-col items-start gap-1.5">
                <div className="w-10 h-10 rounded-full bg-[#7FD0FF]/15 text-[#7FD0FF] flex items-center justify-center">
                  <Utensils className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-semibold text-[#F5F1EA] mt-1">95+ Items</h4>
                <p className="text-xs text-[#A8A29A]">
                  From crisp morning dosas to soothing artisan drinks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
