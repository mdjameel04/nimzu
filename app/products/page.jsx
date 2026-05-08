"use client";

import { useState } from "react";
import Link from "next/link";
import { filters, products } from "@/lib/product";


export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? products
    : products.filter((p) => p.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#f7faf4]">

      {/* Hero banner */}
      <div className="relative bg-gradient-to-br from-[#1a3a0a] to-[#2d6a10]
        px-6 py-16 text-center overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2
          font-[Bebas_Neue] text-[120px] text-white/[0.04]
          whitespace-nowrap pointer-events-none leading-none">
          OUR FLAVORS
        </div>
        <h1 className="relative font-[Bebas_Neue] text-white tracking-wide
          text-[48px] sm:text-[60px] mb-2">
          OUR FLAVORS
        </h1>
        <p className="relative text-white/65 text-[13px]">
          Cold pressed. Zero sugar. Pure goodness.
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-2 px-6 sm:px-10 py-5 bg-white
        border-b border-gray-100 flex-wrap">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-5 py-2 rounded-full text-[12px] font-semibold
              border transition-all duration-200
              ${activeFilter === f
                ? "bg-[#2d6a10] text-white border-[#2d6a10]"
                : "bg-white text-gray-500 border-gray-200 hover:border-[#2d6a10] hover:text-[#2d6a10]"
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="px-6 sm:px-10 md:px-14 py-10
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {filtered.map((p) => (
          <Link key={p.slug} href={`/products/${p.slug}`}>
            <div className="bg-white rounded-2xl overflow-hidden
              border border-gray-100 cursor-pointer
              hover:-translate-y-1 hover:shadow-xl
              transition-all duration-300 group">

              {/* Card top */}
              <div className={`${p.cardBg} h-[200px] flex items-center
                justify-center relative`}>
                <span className="text-[80px] group-hover:scale-110
                  transition-transform duration-300">
                  {p.emoji}
                </span>
                <span className={`absolute top-4 left-1/2 -translate-x-1/2
                  text-[10px] font-bold px-4 py-1.5 rounded-full
                  whitespace-nowrap ${p.badgeColor}`}>
                  {p.badge}
                </span>
              </div>

              {/* Card body */}
              <div className="p-5">
                <h3 className="text-[16px] font-bold text-[#1a1a1a] mb-1">
                  {p.name}
                </h3>
                <p className="text-[11px] text-gray-400 leading-relaxed mb-4">
                  {p.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[18px] font-bold text-[#2d6a10]">
                    ₹{p.price}
                  </span>
                  <span className="bg-[#f0f7e8] text-[#2d6a10] text-[11px]
                    font-bold px-4 py-2 rounded-xl
                    group-hover:bg-[#2d6a10] group-hover:text-white
                    transition-all duration-200">
                    View →
                  </span>
                </div>
              </div>

            </div>
          </Link>
        ))}
      </div>

    </main>
  );
}