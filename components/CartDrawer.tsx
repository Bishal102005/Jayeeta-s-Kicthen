"use client";

import React, { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { RESTAURANT_INFO } from "@/data/restaurantData";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  MessageCircle,
  UtensilsCrossed,
  CheckCircle2,
} from "lucide-react";

export const CartDrawer: React.FC = () => {
  const {
    items,
    totalCount,
    totalAmount,
    isCartOpen,
    closeCart,
    updateQuantity,
    clearCart,
  } = useCart();

  // Prevent background scrolling when cart drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isCartOpen) closeCart();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCartOpen, closeCart]);

  if (!isCartOpen) return null;

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;

    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedTime = `${String(hours).padStart(2, "0")}:${minutes} ${ampm}`;
    const formattedDateTime = `${day} ${month} ${year}, ${formattedTime}`;

    let message = `★ *================================* ★\n`;
    message += `         *JAYEETA'S KITCHEN*\n`;
    message += `    _"Like Homecooked Goodness"_\n`;
    message += `★ *================================* ★\n\n`;
    message += `*Order Date & Time:* ${formattedDateTime}\n`;
    message += `*Kitchen:* Chowdhurypara Rd, Barasat\n`;
    message += `----------------------------------------\n`;
    message += `*ORDERED DELICACIES (${totalCount} ${totalCount === 1 ? "item" : "items"}):*\n`;

    items.forEach((item) => {
      const itemSubtotal = item.price * item.quantity;
      message += `\n• *${item.quantity}x ${item.name}*\n`;
      if (item.quantity > 1) {
        message += `  Price: ₹${item.price} each = *₹${itemSubtotal}*\n`;
      } else {
        message += `  Price: *₹${itemSubtotal}*\n`;
      }
    });

    message += `\n----------------------------------------\n`;
    message += `*Items Subtotal:* ₹${totalAmount}\n`;
    message += `*Packaging & Hygiene:* FREE (Included)\n`;
    message += `*GRAND TOTAL:* *₹${totalAmount}*\n`;
    message += `----------------------------------------\n\n`;
    message += `*Thank you for choosing Jayeeta's Kitchen!*\n`;
    message += `_Kindly confirm my order & share the preparation time._`;

    const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-hidden animate-fadeIn"
    >
      {/* Dark backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Slide-out Drawer Panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#121212] border-l border-white/10 shadow-2xl flex flex-col justify-between h-full overflow-hidden">
          {/* 1. Drawer Header */}
          <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#161616]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#E4572E]/15 border border-[#E4572E]/30 text-[#E4572E] flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#F5F1EA]">Your Order Cart</h3>
                <span className="text-xs text-[#A8A29A]">
                  {totalCount} {totalCount === 1 ? "item" : "items"} selected
                </span>
              </div>
            </div>

            <button
              onClick={closeCart}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#A8A29A] hover:text-white transition-colors cursor-pointer"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* 2. Scrollable Drawer Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {items.length === 0 ? (
              // Empty State
              <div className="py-16 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#A8A29A] mb-4">
                  <ShoppingBag className="w-10 h-10 opacity-40" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#F5F1EA] mb-2">
                  Your cart is empty
                </h4>
                <p className="text-xs sm:text-sm text-[#A8A29A] max-w-xs mb-6">
                  Select fresh dosas, lassis, chaat, and combos from our menu to place your WhatsApp order.
                </p>
                <button
                  onClick={() => {
                    closeCart();
                    const menuEl = document.getElementById("menu");
                    if (menuEl) menuEl.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#E4572E] text-white text-xs font-bold shadow-lg hover:bg-[#c9451e] transition-all cursor-pointer"
                >
                  <UtensilsCrossed className="w-4 h-4" />
                  <span>Browse Our Menu</span>
                </button>
              </div>
            ) : (
              /* List of Cart Items */
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-[#A8A29A] pb-1">
                  <span>Selected Delicacies</span>
                  <button
                    onClick={clearCart}
                    className="text-rose-400 hover:text-rose-300 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear All</span>
                  </button>
                </div>

                {items.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-2xl bg-[#1A1A1A] border border-white/5 flex items-center gap-3 group hover:border-[#F4B860]/30 transition-all shadow-sm"
                  >
                    {/* Item Thumbnail */}
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-[#0E0E0E] border border-white/10">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Item Info */}
                    <div className="flex-1 min-w-0">
                      <h5 className="font-serif text-sm font-bold text-[#F5F1EA] truncate">
                        {item.name}
                      </h5>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs text-[#F4B860] font-semibold">
                          ₹{item.price}
                        </span>
                        {item.unit && (
                          <span className="text-[10px] text-[#A8A29A]">
                            ({item.unit})
                          </span>
                        )}
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center justify-between mt-2">
                        <div className="inline-flex items-center rounded-lg bg-[#0E0E0E] border border-white/10 overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center text-[#A8A29A] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-7 text-center text-xs font-bold text-[#F5F1EA]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center text-[#A8A29A] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="font-serif text-sm font-bold text-[#F5F1EA]">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 3. Drawer Bottom / Checkout Footer */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-white/10 bg-[#161616] space-y-3">
              {/* Bill breakdown */}
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-[#A8A29A]">
                  <span>Item Total ({totalCount} items)</span>
                  <span className="text-[#F5F1EA] font-semibold">₹{totalAmount}</span>
                </div>
                <div className="flex items-center justify-between text-[#A8A29A]">
                  <span>Packaging &amp; Handling</span>
                  <span className="text-emerald-400 font-semibold">Free</span>
                </div>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between font-serif text-base sm:text-lg font-bold text-[#F5F1EA]">
                  <span>Total Amount</span>
                  <span className="text-[#F4B860]">₹{totalAmount}</span>
                </div>
              </div>

              {/* Big Green WhatsApp Order CTA */}
              <button
                onClick={handleWhatsAppOrder}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-black font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_32px_rgba(37,211,102,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Place Order via WhatsApp • ₹{totalAmount}</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#A8A29A] text-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Sends your order directly to Jayeeta&apos;s Kitchen</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
