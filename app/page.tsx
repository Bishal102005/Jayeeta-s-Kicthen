"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { Combos } from "@/components/Combos";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-[#F5F1EA] flex flex-col selection:bg-[#E4572E] selection:text-white">
      {/* Navigation Bar */}
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

      {/* Footer & Floating CTAs */}
      <Footer />
    </main>
  );
}
