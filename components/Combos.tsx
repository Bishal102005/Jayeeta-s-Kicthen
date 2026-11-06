"use client";

import React from "react";
import { COMBOS, RESTAURANT_INFO } from "@/data/restaurantData";
import { Check, MessageCircle, UtensilsCrossed, Dumbbell, SunMedium, Award, Sparkles, Tag } from "lucide-react";

export const Combos: React.FC = () => {
  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "UtensilsCrossed":
        return <UtensilsCrossed className={className} />;
      case "Dumbbell":
        return <Dumbbell className={className} />;
      case "SunMedium":
        return <SunMedium className={className} />;
      case "Award":
        return <Award className={className} />;
      default:
        return <UtensilsCrossed className={className} />;
    }
  };

  const getBadgeStyle = (badgeType: string) => {
    switch (badgeType) {
      case "favorite":
        return "bg-gradient-to-r from-[#F4B860] to-[#E4572E] text-white shadow-[0_2px_12px_rgba(244,184,96,0.35)]";
      case "health":
        return "bg-gradient-to-r from-[#10B981] to-[#059669] text-white shadow-[0_2px_12px_rgba(16,185,129,0.3)]";
      case "evening":
        return "bg-gradient-to-r from-[#E4572E] to-[#F4B860] text-white shadow-[0_2px_12px_rgba(228,87,46,0.35)]";
      case "chef":
        return "bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white shadow-[0_2px_12px_rgba(139,92,246,0.35)]";
      default:
        return "bg-[#F4B860] text-[#0B0B0B]";
    }
  };

  return (
    <section id="combos" className="py-24 bg-[#0E0E0E] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-[#E4572E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-[#F4B860]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Combos Header */}
        <div className="flex flex-col items-center text-center gap-2 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E4572E]/15 border border-[#E4572E]/30 text-[#FFB5A0] text-[11px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#F4B860]" />
            <span>Special Combo Offers</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F5F1EA]">
            Our Signature Combos
          </h2>
          <p className="text-sm sm:text-base text-[#A8A29A]">
            Carefully curated pairings offering unbeatable value and homestyle taste
          </p>
        </div>

        {/* 4 Combo Cards Grid with Food Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMBOS.map((combo) => {
            const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
              combo.whatsappMessage
            )}`;

            return (
              <div
                key={combo.id}
                className="rounded-2xl overflow-hidden glass-card flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 relative group border border-white/10 hover:border-[#F4B860]/40 shadow-xl"
              >
                {/* Top Image Banner */}
                <div className="relative w-full h-48 overflow-hidden bg-black">
                  <img
                    src={combo.image}
                    alt={combo.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/20 to-transparent" />

                  {/* Floating Price Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase font-sans ${getBadgeStyle(
                        combo.badgeType
                      )}`}
                    >
                      <Tag className="w-3 h-3" />
                      <span>{combo.badge}</span>
                    </span>
                  </div>

                  {/* Floating Icon Pill */}
                  <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#F4B860] shadow-md">
                    {renderIcon(combo.icon, "w-5 h-5")}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title & Description */}
                    <h3 className="font-serif text-lg font-bold text-[#F5F1EA] mb-2 leading-snug group-hover:text-[#F4B860] transition-colors">
                      {combo.title}
                    </h3>
                    <p className="text-xs text-[#A8A29A] mb-5 leading-relaxed">
                      {combo.description}
                    </p>

                    {/* Checked Items Box */}
                    <div className="space-y-2 p-3.5 rounded-xl bg-[#0B0B0B]/70 border border-white/5 mb-5">
                      <span className="text-[10px] uppercase font-bold text-[#F4B860] tracking-wider block">
                        Included in Combo
                      </span>
                      {combo.items.map((it, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[#F5F1EA] text-xs">
                          <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                          <span className="font-medium">{it}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* WhatsApp Order CTA */}
                  <div className="pt-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-bold hover:bg-[#25D366] hover:text-black transition-all duration-300 shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Order at {combo.price}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
