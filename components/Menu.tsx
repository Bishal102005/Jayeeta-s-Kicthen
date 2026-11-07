"use client";

import React, { useState, useMemo } from "react";
import { useCart } from "@/context/CartContext";
import {
  MENU_CATEGORIES,
  RESTAURANT_INFO,
  FoodItem,
  DietType,
} from "@/data/restaurantData";
import {
  Utensils,
  Layers,
  CircleDot,
  Disc,
  Sparkles,
  Egg,
  CupSoda,
  GlassWater,
  Coffee,
  Wheat,
  Search,
  X,
  MessageCircle,
  Info,
  Phone,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

export const Menu: React.FC = () => {
  const { addToCart, updateQuantity, getItemQuantity, totalCount, totalAmount, openCart } = useCart();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [dietFilter, setDietFilter] = useState<"all" | DietType>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Icon selector
  const renderCategoryIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "Utensils":
        return <Utensils className={className} />;
      case "Layers":
        return <Layers className={className} />;
      case "CircleDot":
        return <CircleDot className={className} />;
      case "Disc":
        return <Disc className={className} />;
      case "Sparkles":
        return <Sparkles className={className} />;
      case "Egg":
        return <Egg className={className} />;
      case "CupSoda":
        return <CupSoda className={className} />;
      case "GlassWater":
        return <GlassWater className={className} />;
      case "Coffee":
        return <Coffee className={className} />;
      case "Wheat":
        return <Wheat className={className} />;
      default:
        return <Utensils className={className} />;
    }
  };

  // Diet indicator badge (FSSAI standard)
  const renderDietIndicator = (diet: DietType) => {
    switch (diet) {
      case "veg":
        return (
          <span
            title="Pure Vegetarian"
            className="w-4 h-4 rounded-sm border border-emerald-500 flex items-center justify-center shrink-0 bg-emerald-950/40"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
          </span>
        );
      case "egg":
        return (
          <span
            title="Contains Egg"
            className="w-4 h-4 rounded-sm border border-amber-500 flex items-center justify-center shrink-0 bg-amber-950/40"
          >
            <span className="w-2 h-2 rounded-full bg-amber-500" />
          </span>
        );
      case "non-veg":
        return (
          <span
            title="Non-Vegetarian"
            className="w-4 h-4 rounded-sm border border-rose-500 flex items-center justify-center shrink-0 bg-rose-950/40"
          >
            <span className="w-0 h-0 border-l-[3.5px] border-l-transparent border-r-[3.5px] border-r-transparent border-b-[6px] border-b-rose-500" />
          </span>
        );
    }
  };

  // Total items counter
  const totalItemCount = useMemo(() => {
    return MENU_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0);
  }, []);

  // Filter categories and items based on search and filters
  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return MENU_CATEGORIES.map((cat) => {
      // Check if this category is selected
      if (activeCategory !== "all" && cat.id !== activeCategory) {
        return { ...cat, items: [] };
      }

      // Filter items in category
      const matchedItems = cat.items.filter((item) => {
        // Diet filter
        if (dietFilter !== "all" && item.diet !== dietFilter) {
          return false;
        }

        // Search query
        if (!query) return true;

        const nameMatch = item.name.toLowerCase().includes(query);
        const subCatMatch = item.subCategory?.toLowerCase().includes(query);
        const catMatch = cat.name.toLowerCase().includes(query);
        const badgeMatch = item.badge?.toLowerCase().includes(query);

        return nameMatch || subCatMatch || catMatch || badgeMatch;
      });

      return {
        ...cat,
        items: matchedItems,
      };
    }).filter((cat) => cat.items.length > 0);
  }, [activeCategory, dietFilter, searchQuery]);

  const totalFilteredCount = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  }, [filteredCategories]);

  const clearFilters = () => {
    setActiveCategory("all");
    setDietFilter("all");
    setSearchQuery("");
  };

  return (
    <section id="menu" className="py-20 sm:py-24 relative bg-[#0B0B0B] overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#E4572E]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Title */}
        <div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-bold text-[#F4B860] uppercase tracking-widest">
            Handcrafted With Passion
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F5F1EA]">
            Our Illustrated Menu
          </h2>
          <p className="text-sm sm:text-base text-[#A8A29A]">
            Every single delicacy photographed and prepared fresh on hot cast iron with pure ghee, herbs, and slow-churned goodness.
          </p>
        </div>

        {/* Search & Dietary Filter Bar */}
        <div className="bg-[#141414]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-5 mb-8 shadow-xl max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Box */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A8A29A]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dosas, shakes, chaat, uttapam, mojito..."
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-[#0B0B0B] border border-white/10 text-xs sm:text-sm text-[#F5F1EA] placeholder-[#A8A29A]/50 focus:outline-none focus:border-[#F4B860] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A8A29A] hover:text-white"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Diet Filter Pills */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <span className="text-[11px] font-semibold text-[#A8A29A] hidden sm:inline mr-1">
                Filter:
              </span>
              <button
                onClick={() => setDietFilter("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  dietFilter === "all"
                    ? "bg-white/15 text-white border border-white/20"
                    : "bg-[#0B0B0B]/70 text-[#A8A29A] hover:text-white border border-transparent"
                }`}
              >
                All Diets
              </button>
              <button
                onClick={() => setDietFilter("veg")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  dietFilter === "veg"
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                    : "bg-[#0B0B0B]/70 text-[#A8A29A] hover:text-emerald-400 border border-transparent"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Veg</span>
              </button>
              <button
                onClick={() => setDietFilter("egg")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  dietFilter === "egg"
                    ? "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                    : "bg-[#0B0B0B]/70 text-[#A8A29A] hover:text-amber-400 border border-transparent"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Egg</span>
              </button>
              <button
                onClick={() => setDietFilter("non-veg")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  dietFilter === "non-veg"
                    ? "bg-rose-500/20 text-rose-400 border border-rose-500/40"
                    : "bg-[#0B0B0B]/70 text-[#A8A29A] hover:text-rose-400 border border-transparent"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>Non-Veg</span>
              </button>
            </div>
          </div>

          {/* Results Summary and Reset */}
          {(searchQuery || dietFilter !== "all" || activeCategory !== "all") && (
            <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#A8A29A]">
              <span>
                Showing <strong className="text-[#F4B860]">{totalFilteredCount}</strong> of{" "}
                {totalItemCount} items
              </span>
              <button
                onClick={clearFilters}
                className="text-[#E4572E] hover:underline font-semibold cursor-pointer"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Active Cart Sticky Notice Banner */}
        {totalCount > 0 && (
          <div className="mb-8 p-3.5 sm:p-4 rounded-2xl bg-[#1A1A1A]/95 border border-[#F4B860]/40 shadow-xl flex items-center justify-between gap-3 max-w-5xl mx-auto backdrop-blur-md animate-fadeIn">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#E4572E]/20 text-[#E4572E] flex items-center justify-center shrink-0">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-bold text-[#F5F1EA] block">
                  {totalCount} {totalCount === 1 ? "item" : "items"} in your cart •{" "}
                  <strong className="text-[#F4B860]">₹{totalAmount}</strong>
                </span>
                <span className="text-[11px] text-[#A8A29A]">
                  Ready to place your order via WhatsApp
                </span>
              </div>
            </div>

            <button
              onClick={openCart}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-black font-extrabold text-xs shadow-md hover:scale-[1.02] active:scale-95 transition-all cursor-pointer shrink-0"
            >
              <span>View Cart</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Category Horizontal Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer ${
              activeCategory === "all"
                ? "bg-[#E4572E] text-white shadow-[0_2px_14px_rgba(228,87,46,0.4)]"
                : "bg-[#1C1B1B]/70 text-[#A8A29A] hover:text-[#F5F1EA] hover:bg-[#2A2A2A] border border-white/5"
            }`}
          >
            All Items ({totalItemCount})
          </button>

          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#E4572E] text-white shadow-[0_2px_14px_rgba(228,87,46,0.4)]"
                    : "bg-[#1C1B1B]/70 text-[#A8A29A] hover:text-[#F5F1EA] hover:bg-[#2A2A2A] border border-white/5"
                }`}
              >
                {renderCategoryIcon(cat.icon, "w-3.5 h-3.5")}
                <span>{cat.name}</span>
                <span className="opacity-70 text-[10px]">({cat.items.length})</span>
              </button>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredCategories.length === 0 && (
          <div className="py-16 text-center rounded-2xl glass-card max-w-md mx-auto p-8 flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#E4572E]/15 text-[#E4572E] flex items-center justify-center">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#F5F1EA]">No delicacies match</h3>
            <p className="text-xs text-[#A8A29A]">
              We couldn&apos;t find anything matching your search. Try removing filters or searching for something else.
            </p>
            <button
              onClick={clearFilters}
              className="mt-2 px-4 py-2 rounded-xl bg-[#E4572E] text-white text-xs font-semibold hover:bg-[#c9451e] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Main Menu Categories Grid */}
        <div className="space-y-16">
          {filteredCategories.map((category) => {
            // Group items by subcategory if exists (e.g. for Dosas)
            const subCategoryGroups: { [key: string]: FoodItem[] } = {};
            let hasSubCategories = false;

            category.items.forEach((item) => {
              if (item.subCategory) {
                hasSubCategories = true;
                if (!subCategoryGroups[item.subCategory]) {
                  subCategoryGroups[item.subCategory] = [];
                }
                subCategoryGroups[item.subCategory].push(item);
              }
            });

            return (
              <div
                key={category.id}
                id={`cat-${category.id}`}
                className="scroll-mt-28 rounded-2xl bg-[#121212]/90 border border-white/[0.08] p-5 sm:p-8 backdrop-blur-md shadow-xl"
              >
                {/* Category Header with Cover Image */}
                <div className="relative rounded-2xl overflow-hidden mb-8 border border-white/10">
                  <div className="h-32 sm:h-40 w-full overflow-hidden relative">
                    <img
                      src={category.image}
                      alt={category.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-black/30" />
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-black/80 backdrop-blur-md text-[#F4B860] border border-white/15 flex items-center justify-center shadow-lg shrink-0">
                        {renderCategoryIcon(category.icon, "w-6 h-6")}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F1EA]">
                            {category.name}
                          </h3>
                          {category.badge && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider bg-[#F4B860]/20 text-[#F4B860] border border-[#F4B860]/30">
                              {category.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#FFD69F] mt-0.5 drop-shadow-sm font-medium">
                          {category.tagline}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs text-[#A8A29A] font-semibold px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 self-start sm:self-auto">
                      {category.items.length} {category.items.length === 1 ? "Delicacy" : "Delicacies"}
                    </span>
                  </div>
                </div>

                {/* If subcategories exist (e.g. Dosa groups), render sub-sections */}
                {hasSubCategories ? (
                  <div className="space-y-10">
                    {Object.entries(subCategoryGroups).map(([subTitle, subItems]) => (
                      <div key={subTitle} className="space-y-4">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#F4B860]" />
                          <h4 className="font-serif text-base font-bold text-[#F4B860] tracking-wide">
                            {subTitle}
                          </h4>
                          <span className="text-xs text-[#A8A29A]">({subItems.length})</span>
                          <div className="h-px bg-white/10 flex-1 ml-2" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {subItems.map((item) => renderItemCard(item))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Standard Category Items Grid */
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.items.map((item) => renderItemCard(item))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Order Notice & Delivery Box */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-[#0E0E0E]/95 border border-[#F4B860]/20 backdrop-blur-xl text-center shadow-xl max-w-3xl mx-auto flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#F4B860]/15 flex items-center justify-center text-[#F4B860]">
            <Info className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl font-semibold text-[#F5F1EA]">
            Ready to relish freshly prepared food?
          </h3>
          <p className="text-xs sm:text-sm text-[#A8A29A] max-w-xl">
            Order for takeaway, counter parcel, or direct takeaway delivery in Barasat. Everything is prepared fresh per order!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
                "Hi Jayeeta's Kitchen! I would like to place an order from your menu."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#25D366] text-black font-bold text-xs hover:bg-[#20ba59] transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order on WhatsApp</span>
            </a>

            <a
              href={`tel:${RESTAURANT_INFO.phones[0]}`}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#1C1B1B] border border-white/10 text-[#F5F1EA] font-semibold text-xs hover:bg-[#2A2A2A] transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#F4B860]" />
              <span>Call {RESTAURANT_INFO.phoneDisplay[0]}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );

  // Helper renderer for individual dish cards with dish photo
  function renderItemCard(item: FoodItem) {
    const quantity = getItemQuantity(item.id);

    return (
      <div
        key={item.id}
        className="rounded-2xl p-3 sm:p-3.5 bg-[#161616]/95 border border-white/[0.08] hover:border-[#F4B860]/40 flex items-center justify-between gap-3 group transition-all duration-300 hover:bg-[#1E1E1E] shadow-sm hover:shadow-xl"
      >
        {/* Left: Dish Information */}
        <div className="flex-1 min-w-0 flex flex-col justify-between self-stretch py-0.5">
          <div>
            <div className="flex items-center gap-1.5 mb-1 flex-wrap">
              {renderDietIndicator(item.diet)}
              {item.badge && (
                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider bg-[#F4B860]/15 text-[#F4B860] border border-[#F4B860]/20 truncate">
                  {item.badge}
                </span>
              )}
            </div>

            <h5 className="font-serif text-sm sm:text-base font-semibold text-[#F5F1EA] group-hover:text-[#F4B860] transition-colors line-clamp-1">
              {item.name}
            </h5>

            {item.unit && (
              <span className="text-[11px] text-[#A8A29A] font-medium block mt-0.5">
                Serving: {item.unit}
              </span>
            )}
          </div>

          {/* Price & Add to Cart CTA */}
          <div className="flex items-center justify-between mt-2.5 pt-1.5 border-t border-white/5 gap-2">
            <span className="font-serif text-sm sm:text-base font-bold text-[#F4B860] tracking-tight shrink-0">
              ₹{item.price}
            </span>

            {quantity === 0 ? (
              <button
                type="button"
                onClick={() => addToCart(item)}
                title={`Add ${item.name} to cart`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#E4572E] to-[#F36238] hover:from-[#d14720] hover:to-[#e4572e] text-white text-[11px] font-bold shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer shrink-0"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add to Cart</span>
              </button>
            ) : (
              <div className="inline-flex items-center rounded-xl bg-[#0E0E0E] border border-[#F4B860]/50 shadow-sm overflow-hidden shrink-0">
                <button
                  type="button"
                  onClick={() => updateQuantity(item.id, quantity - 1)}
                  className="w-7 h-7 flex items-center justify-center text-[#A8A29A] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-6 text-center text-xs font-bold text-[#F4B860]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => addToCart(item)}
                  className="w-7 h-7 flex items-center justify-center text-[#A8A29A] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right: Dish Photo Thumbnail */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 border border-white/10 group-hover:border-[#F4B860]/40 transition-colors bg-[#0E0E0E]">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
          />
        </div>
      </div>
    );
  }
};
