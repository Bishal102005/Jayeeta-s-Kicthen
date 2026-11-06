"use client";

import React, { useState, useEffect } from "react";
import { RESTAURANT_INFO } from "@/data/restaurantData";
import { X, Calendar, Clock, Users, User, Phone, MessageSquare, Check, Sparkles } from "lucide-react";

interface ReservationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationDrawer: React.FC<ReservationDrawerProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("2");
  const [date, setDate] = useState(() => new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState("19:00");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Jayeeta's Kitchen! I would like to reserve a table/inquire:
- Name: ${name || "Guest"}
- Phone: ${phone || "N/A"}
- Guests: ${guests}
- Date: ${date}
- Time: ${time}
- Special Notes: ${notes || "None"}`;

    const url = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Drawer / Modal Container (Elevation 2) */}
      <div className="relative w-full max-w-lg rounded-2xl glass-elevated p-6 sm:p-8 flex flex-col max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E4572E]/15 text-[#E4572E] flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#F5F1EA]">
                Table Reservation &amp; Inquiry
              </h3>
              <p className="text-xs text-[#F4B860]">Jayeeta&apos;s Kitchen • Barasat</p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 text-[#A8A29A] hover:text-[#F5F1EA] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 flex flex-col items-center text-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-2xl font-semibold text-[#F5F1EA]">
              Request Transmitted
            </h4>
            <p className="text-xs sm:text-sm text-[#A8A29A] max-w-xs">
              Thank you! Your reservation details have been opened in WhatsApp. We will confirm your seating shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-[#E4572E] text-white font-semibold text-xs uppercase tracking-wider"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-4 mt-6">
            <p className="text-xs text-[#A8A29A] leading-relaxed">
              Planning an intimate family dinner, breakfast feast, or bulk snack order? Reserve ahead to enjoy fresh, hot delicacies right from the tawa.
            </p>

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-[11px] font-semibold text-[#A8A29A] mb-1.5 uppercase tracking-wider">
                  Your Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#F4B860] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sourav Mukherjee"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg glass-input text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#A8A29A] mb-1.5 uppercase tracking-wider">
                  Contact Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#F4B860] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98300XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg glass-input text-xs"
                  />
                </div>
              </div>
            </div>

            {/* Guests, Date, Time */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div>
                <label className="block text-[11px] font-semibold text-[#A8A29A] mb-1.5 uppercase tracking-wider">
                  Guests
                </label>
                <div className="relative">
                  <Users className="w-4 h-4 text-[#F4B860] absolute left-3 top-1/2 -translate-y-1/2" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg glass-input text-xs bg-[#141414]"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3-4">3 - 4 People</option>
                    <option value="5-8">5 - 8 People</option>
                    <option value="8+">8+ Party</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#A8A29A] mb-1.5 uppercase tracking-wider">
                  Dining Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-[#F4B860] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg glass-input text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#A8A29A] mb-1.5 uppercase tracking-wider">
                  Preferred Time
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-[#F4B860] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="time"
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg glass-input text-xs"
                  />
                </div>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-[11px] font-semibold text-[#A8A29A] mb-1.5 uppercase tracking-wider">
                Special Requests or Dietary Preferences
              </label>
              <div className="relative">
                <MessageSquare className="w-4 h-4 text-[#F4B860] absolute left-3 top-3" />
                <textarea
                  rows={2}
                  placeholder="Special spice preference, extra sambar, celebration..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-lg glass-input text-xs resize-none"
                />
              </div>
            </div>

            {/* Submit Action */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Submit via WhatsApp</span>
              </button>

              <a
                href={`tel:${RESTAURANT_INFO.phones[0]}`}
                className="py-3 px-4 rounded-xl bg-[#2A2A2A] hover:bg-[#353534] text-[#F5F1EA] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors text-center"
              >
                <Phone className="w-4 h-4 text-[#F4B860]" />
                <span>Call Directly</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
