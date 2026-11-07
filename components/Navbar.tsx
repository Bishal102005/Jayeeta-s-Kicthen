"use client";

import React, { useState, useEffect } from "react";
import { RESTAURANT_INFO } from "@/data/restaurantData";
import { useCart } from "@/context/CartContext";
import { Phone, Menu as MenuIcon, X, ShoppingBag } from "lucide-react";

export const Navbar: React.FC = () => {
  const { totalCount, openCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "about", "menu", "combos", "gallery", "contact"];
      const scrollPos = window.scrollY + 120;

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Menu", href: "#menu", id: "menu" },
    { name: "Combos", href: "#combos", id: "combos" },
    { name: "Gallery", href: "#gallery", id: "gallery" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0E0E0E]/95 backdrop-blur-xl border-b border-white/10 py-2.5 sm:py-3 shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
            : "bg-[#0E0E0E]/70 backdrop-blur-md py-3 sm:py-5"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo & Brand */}
          <a href="#home" className="flex items-center group py-1 shrink-0">
            <img
              src={RESTAURANT_INFO.logoUrl}
              alt={RESTAURANT_INFO.name}
              className="h-8 sm:h-11 max-w-[135px] xs:max-w-[170px] sm:max-w-none w-auto object-contain drop-shadow-[0_2px_14px_rgba(228,87,46,0.35)] group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#1A1A1A]/70 border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                    isActive
                      ? "bg-[#E4572E] text-white shadow-[0_2px_12px_rgba(228,87,46,0.35)]"
                      : "text-[#A8A29A] hover:text-[#F5F1EA] hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Actions: Cart + Call Now + Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Cart Button with Count Badge */}
            <button
              onClick={openCart}
              className="relative inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#1C1B1B] text-[#F5F1EA] border border-white/10 hover:border-[#F4B860]/50 hover:bg-[#262626] transition-all cursor-pointer shrink-0"
              aria-label={`View Cart (${totalCount} items)`}
            >
              <ShoppingBag className="w-4 h-4 text-[#F4B860]" />
              <span className="hidden sm:inline text-xs font-semibold">Cart</span>
              {totalCount > 0 && (
                <span className="min-w-4 h-4 px-1 rounded-full bg-[#E4572E] text-white text-[10px] font-bold flex items-center justify-center shadow-md animate-scaleIn">
                  {totalCount}
                </span>
              )}
            </button>

            <a
              href={`tel:${RESTAURANT_INFO.phones[0]}`}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-[#E4572E] text-white hover:bg-[#c9451e] text-xs font-semibold tracking-wide shadow-[0_2px_16px_rgba(228,87,46,0.35)] hover:shadow-[0_4px_20px_rgba(228,87,46,0.5)] transition-all shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden xs:inline sm:inline">Call Now</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-[#1C1B1B] text-[#F5F1EA] border border-white/10 hover:bg-[#2A2A2A] transition-colors cursor-pointer shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#F4B860]" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden bg-black/90 backdrop-blur-2xl flex flex-col pt-20 px-6 pb-8 animate-fadeIn overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) setMobileMenuOpen(false);
          }}
        >
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
            <span className="text-xs font-bold text-[#F4B860] uppercase tracking-wider">
              Navigation Menu
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl bg-[#1C1B1B] text-white border border-white/10"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-[#F4B860]" />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3.5 rounded-xl text-base font-semibold transition-all flex items-center justify-between ${
                  activeSection === link.id
                    ? "bg-[#E4572E] text-white shadow-lg"
                    : "text-[#F5F1EA] hover:bg-white/5 bg-[#141414]/70 border border-white/5"
                }`}
              >
                <span>{link.name}</span>
                <span className="text-xs opacity-60">→</span>
              </a>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
            <a
              href={`tel:${RESTAURANT_INFO.phones[0]}`}
              className="w-full py-3.5 rounded-xl bg-[#E4572E] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 {RESTAURANT_INFO.phoneDisplay[0]}</span>
            </a>

            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
                "Hi Jayeeta's Kitchen! I would like to place an order from your menu."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-[#25D366] text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
