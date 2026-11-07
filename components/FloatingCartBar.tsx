"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, ArrowRight } from "lucide-react";

export const FloatingCartBar: React.FC = () => {
  const { totalCount, totalAmount, isCartOpen, openCart } = useCart();

  if (totalCount === 0 || isCartOpen) return null;

  return (
    <aside className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-auto md:right-24 z-40 animate-slideUp">
      <button
        onClick={openCart}
        className="w-full md:w-auto inline-flex items-center justify-between gap-4 px-5 py-3.5 rounded-2xl bg-gradient-to-r from-[#E4572E] via-[#F36238] to-[#E4572E] text-white shadow-[0_8px_30px_rgba(228,87,46,0.6)] hover:shadow-[0_10px_36px_rgba(228,87,46,0.8)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border border-white/20 backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
            <ShoppingBag className="w-4 h-4" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-extrabold uppercase tracking-wider">
              {totalCount} {totalCount === 1 ? "Item" : "Items"} in Cart
            </span>
            <span className="text-sm font-black font-serif text-[#FFE2B8]">
              ₹{totalAmount}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 pl-3 border-l border-white/25 text-xs font-bold uppercase tracking-wider">
          <span>View Cart</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </button>
    </aside>
  );
};

