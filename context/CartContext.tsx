"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { FoodItem, ComboOffer } from "@/data/restaurantData";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  diet?: "veg" | "non-veg" | "egg";
  unit?: string;
  isCombo?: boolean;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: FoodItem | ComboOffer | CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getItemQuantity: (id: string) => number;
  totalCount: number;
  totalAmount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "jayeetas_kitchen_cart_v1";

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          // Auto-fix any stale 1520 price from older session
          const cleaned = parsed.map((it: CartItem) => {
            if (it.price === 1520 || it.id === "ref-aam-panna") {
              return {
                ...it,
                id: "ref-aam-panna-regular",
                name: "Aam Panna (Regular)",
                price: 15,
                unit: "Regular Glass",
              };
            }
            return it;
          });
          setItems(cleaned);
        }
      }
    } catch {
      // Ignore storage errors
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Save to localStorage whenever items change
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignore storage errors
    }
  }, [items, isHydrated]);

  const addToCart = (item: FoodItem | ComboOffer | CartItem) => {
    setItems((prevItems) => {
      const existing = prevItems.find((it) => it.id === item.id);
      if (existing) {
        return prevItems.map((it) =>
          it.id === item.id ? { ...it, quantity: it.quantity + 1 } : it
        );
      }

      // Check if it's a ComboOffer (has items array and title)
      const isComboOffer = "items" in item && "title" in item;
      let parsedPrice = 0;
      if ("priceNum" in item && typeof (item as FoodItem).priceNum === "number") {
        parsedPrice = (item as FoodItem).priceNum;
      } else if (typeof item.price === "number") {
        parsedPrice = item.price;
      } else {
        const matches = String(item.price).match(/\d+/g);
        parsedPrice = matches ? parseInt(matches[0], 10) : 0;
      }

      // Safeguard against any legacy 1520 glitch
      if (parsedPrice === 1520) parsedPrice = 15;

      const newItem: CartItem = {
        id: item.id,
        name: isComboOffer ? (item as ComboOffer).title : (item as FoodItem).name,
        price: parsedPrice,
        image: item.image,
        quantity: 1,
        diet: (item as FoodItem).diet || "veg",
        unit: (item as FoodItem).unit,
        isCombo: isComboOffer,
      };

      return [...prevItems, newItem];
    });
  };

  const removeFromCart = (id: string) => {
    setItems((prevItems) => prevItems.filter((it) => it.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((it) => (it.id === id ? { ...it, quantity } : it))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getItemQuantity = (id: string): number => {
    const found = items.find((it) => it.id === id);
    return found ? found.quantity : 0;
  };

  const totalCount = items.reduce((sum, it) => sum + it.quantity, 0);
  const totalAmount = items.reduce((sum, it) => sum + it.price * it.quantity, 0);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getItemQuantity,
        totalCount,
        totalAmount,
        isCartOpen,
        setIsCartOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
