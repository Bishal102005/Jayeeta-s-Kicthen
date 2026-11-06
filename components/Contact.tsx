"use client";

import React from "react";
import { RESTAURANT_INFO } from "@/data/restaurantData";
import { MapPin, Phone, Clock, MessageCircle, Navigation, ExternalLink } from "lucide-react";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#0E0E0E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2 max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-bold text-[#F4B860] uppercase tracking-widest">
            Visit &amp; Connect
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F5F1EA]">
            Reach Jayeeta&apos;s Kitchen
          </h2>
          <p className="text-sm sm:text-base text-[#A8A29A]">
            We are excited to serve you piping hot delicacies every single day
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Glass Card: Information */}
          <div className="lg:col-span-6 rounded-2xl p-6 sm:p-8 glass-card flex flex-col justify-between">
            <div className="space-y-6">
              {/* Address info */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#F4B860]/15 text-[#F4B860] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#F4B860] uppercase tracking-wider">
                    Kitchen Location
                  </span>
                  <p className="text-sm text-[#F5F1EA] mt-1 leading-relaxed">
                    {RESTAURANT_INFO.location.address} ({RESTAURANT_INFO.location.ward}), {RESTAURANT_INFO.location.city}
                  </p>
                </div>
              </div>

              {/* Phone info */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#E4572E]/15 text-[#E4572E] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#F4B860] uppercase tracking-wider">
                    Direct Orders &amp; Inquiries
                  </span>
                  <div className="flex flex-wrap items-center gap-3 mt-1">
                    {RESTAURANT_INFO.phones.map((phone, pIdx) => (
                      <React.Fragment key={pIdx}>
                        <a
                          href={`tel:${phone}`}
                          className="font-serif text-lg font-semibold text-[#F5F1EA] hover:text-[#E4572E] transition-colors"
                        >
                          {RESTAURANT_INFO.phoneDisplay[pIdx]}
                        </a>
                        {pIdx === 0 && <span className="text-[#A8A29A]">/</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#7FD0FF]/15 text-[#7FD0FF] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#F4B860] uppercase tracking-wider">
                    Operating Hours
                  </span>
                  <p className="text-sm text-[#F5F1EA] mt-1 font-medium">
                    {RESTAURANT_INFO.hours}
                  </p>
                  <span className="text-[11px] text-[#A8A29A] mt-0.5">
                    {RESTAURANT_INFO.hoursSubtext}
                  </span>
                </div>
              </div>
            </div>

            {/* Direct CTA Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-8 mt-6 border-t border-white/10">
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#F4B860] text-[#0B0B0B] font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#ffcf7f] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={RESTAURANT_INFO.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#2A2A2A] text-[#F5F1EA] font-bold text-xs uppercase tracking-wider hover:bg-[#353534] transition-colors border border-white/5"
              >
                <Navigation className="w-4 h-4 text-[#F4B860]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right Side: Stylized Interactive Map Preview */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-2xl relative min-h-[380px] bg-[#1C1B1B] flex flex-col border border-white/10">
            <div
              className="w-full flex-1 bg-cover bg-center min-h-[300px]"
              style={{ backgroundImage: `url('${RESTAURANT_INFO.location.mapImage}')` }}
            />

            {/* Map Overlay Details Card */}
            <div className="p-4 sm:p-5 bg-[#1C1B1B]/95 backdrop-blur-xl border-t border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#F4B860] shrink-0" />
                <div>
                  <span className="text-xs font-bold text-[#F5F1EA] block">
                    {RESTAURANT_INFO.location.ward}
                  </span>
                  <span className="text-[11px] text-[#A8A29A] block">
                    Chowdhurypara Road, Kolkata 700124
                  </span>
                </div>
              </div>

              <a
                href={RESTAURANT_INFO.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#E4572E] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#c9451e] transition-colors shrink-0 shadow-sm"
              >
                <span>Open Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
