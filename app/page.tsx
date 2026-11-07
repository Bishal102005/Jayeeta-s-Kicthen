"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { MobileNavBar } from "@/components/MobileNavBar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { Combos } from "@/components/Combos";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#0B0B0B] text-[#F5F1EA] flex flex-col selection:bg-[#E4572E] selection:text-white">
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Handcrafted Menu Offerings */}
      <Menu />

      {/* Today's Combos */}
      <Combos />

      {/* Visual Delicacies Gallery */}
      <Gallery />

      {/* Location, Hours & Contact */}
      <Contact />

      {/* Footer & Floating Desktop CTAs */}
      <Footer />

      {/* Mobile Sticky Bottom Navigation Bar */}
      <MobileNavBar />
    </main>
  );
}
