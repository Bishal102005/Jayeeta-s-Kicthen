"use client";

import React from "react";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/Navbar";
import { MobileNavBar } from "@/components/MobileNavBar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { Combos } from "@/components/Combos";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { FloatingCartBar } from "@/components/FloatingCartBar";

export default function Home() {
  return (
    <CartProvider>
      <main className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#0B0B0B] text-[#F5F1EA] flex flex-col selection:bg-[#E4572E] selection:text-white">
        {/* Top Navigation Bar with Cart Badge */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Handcrafted Menu Offerings with Add to Cart */}
        <Menu />

        {/* Today's Combos with Add Combo to Cart */}
        <Combos />

        {/* Visual Delicacies Gallery */}
        <Gallery />

        {/* Location, Hours & Contact */}
        <Contact />

        {/* Footer & Floating Desktop CTAs */}
        <Footer />

        {/* Floating Cart Bar (appears when items added) */}
        <FloatingCartBar />

        {/* Mobile Sticky Bottom Navigation Bar */}
        <MobileNavBar />

        {/* Slide-out Cart Drawer & WhatsApp Order Modal */}
        <CartDrawer />
      </main>
    </CartProvider>
  );
}
