"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { products } from "@/lib/product";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [activeSize, setActiveSize] = useState(0);
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);
  const heroRef = useRef(null);
  const emojiRef = useRef(null);

  // entrance animation
  useGSAP(() => {
    gsap.from(emojiRef.current, {
      scale: 0.5,
      opacity: 0,
      rotation: -10,
      duration: 0.8,
      ease: "back.out(1.7)",
      delay: 0.2,
    });
    gsap.from(".detail-content", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      delay: 0.1,
      stagger: 0.08,
    });
  }, { scope: heroRef });

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link href="/products" className="text-[#2d6a10] font-semibold">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setAdded(true);
    gsap.from(".cart-btn", { scale: 0.95, duration: 0.3, ease: "back.out(2)" });
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#f7faf4]">

      {/* Back button */}
      <div className="bg-white border-b border-gray-100 px-6 py-3">
        <Link href="/products"
          className="flex items-center gap-2 text-[#2d6a10] text-[13px] font-semibold w-fit">
          ← Back to Products
        </Link>
      </div>

      {/* Hero */}
      <div
        ref={heroRef}
        className="relative overflow-hidden px-8 sm:px-14 pt-10 pb-0
          flex items-center justify-between"
        style={{ backgroundColor: product.heroBg, minHeight: "320px" }}
      >
        {/* Big bg word */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2
          font-[Bebas_Neue] text-white/10 whitespace-nowrap
          pointer-events-none leading-none tracking-widest"
          style={{ fontSize: "clamp(60px, 14vw, 130px)" }}>
          {product.word}
        </div>

        {/* Left */}
        <div className="z-10 text-white detail-content">
          <p className="text-[11px] font-semibold tracking-[3px] opacity-70
            uppercase mb-3">
            Cold Pressed · {product.category}
          </p>
          <h1 className="font-[Bebas_Neue] leading-none tracking-wide mb-5
            text-[44px] sm:text-[56px] md:text-[64px]">
            {product.name}
          </h1>
          <div className="flex flex-wrap gap-2">
            {product.ingredients.map((ing) => (
              <span key={ing.name}
                className="bg-white/15 text-white text-[11px]
                  px-3 py-1 rounded-full backdrop-blur-sm">
                {ing.icon} {ing.name}
              </span>
            ))}
          </div>
        </div>

        {/* Emoji bottle */}
        <div ref={emojiRef} className="z-10 flex-shrink-0"
          style={{ fontSize: "clamp(80px, 14vw, 130px)" }}>
          {product.emoji}
        </div>
      </div>

      {/* Body */}
      <div className="bg-white px-6 sm:px-10 md:px-14 py-8">

        {/* Price + rating */}
        <div className="detail-content flex items-center justify-between mb-8">
          <span className="font-bold text-[#2d6a10]
            text-[28px] sm:text-[34px]">
            ₹{product.price}
          </span>
          <div className="flex items-center gap-2 text-[13px] text-gray-400">
            <span className="text-[#f5a020] text-base">★★★★★</span>
            {product.rating} ({product.reviews} reviews)
          </div>
        </div>

        {/* Size selector */}
        <div className="detail-content mb-8">
          <p className="text-[11px] font-bold text-gray-400 tracking-[2px]
            uppercase mb-4">
            Choose Size
          </p>
          <div className="flex gap-3">
            {product.sizes.map((size, i) => (
              <button
                key={size}
                onClick={() => setActiveSize(i)}
                className={`w-16 h-16 rounded-full flex flex-col items-center
                  justify-content-center text-center border-2 transition-all duration-200
                  font-[Poppins] cursor-pointer
                  ${activeSize === i
                    ? "bg-[#2d6a10] border-[#2d6a10] text-white"
                    : "bg-white border-gray-200 text-gray-600 hover:border-[#2d6a10]"
                  }`}
              >
                <span className="text-[11px] font-bold leading-tight">
                  {size.replace("ml", "")}
                </span>
                <span className="text-[9px] opacity-70">ml</span>
              </button>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="detail-content mb-8">
          <p className="text-[11px] font-bold text-gray-400 tracking-[2px]
            uppercase mb-4">
            Benefits
          </p>
          <div className="grid grid-cols-3 gap-3">
            {product.benefits.map((b) => (
              <div key={b.text}
                className="bg-[#f7faf4] rounded-xl p-3 text-center
                  border border-[#e8f0e0]">
                <div className="text-xl mb-1">{b.icon}</div>
                <div className="text-[11px] text-gray-500 font-medium">
                  {b.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ingredients */}
        <div className="detail-content mb-8">
          <p className="text-[11px] font-bold text-gray-400 tracking-[2px]
            uppercase mb-4">
            Ingredients
          </p>
          <div className="flex flex-wrap gap-2">
            {product.ingredients.map((ing) => (
              <span key={ing.name}
                className="bg-[#f0f7e8] text-[#2d6a10] text-[12px]
                  font-semibold px-4 py-2 rounded-full border border-[#c5e89a]">
                {ing.icon} {ing.name}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="detail-content flex gap-3">
          <button
            onClick={handleAddToCart}
            className="cart-btn flex-1 bg-[#2d6a10] text-white font-bold
              text-[14px] py-4 rounded-xl border-none cursor-pointer
              font-[Poppins] transition-all duration-200
              hover:bg-[#1a4a0a] active:scale-95"
          >
            {added ? "✓ Added to Cart!" : "Add to Cart →"}
          </button>
          <button
            onClick={() => setWished(!wished)}
            className="w-14 h-14 rounded-xl border-2 border-gray-200
              bg-white text-xl cursor-pointer transition-all duration-200
              hover:border-red-300 hover:scale-110 flex items-center justify-center"
          >
            {wished ? "❤️" : "🤍"}
          </button>
        </div>

      </div>

      {/* Related products */}
      <div className="px-6 sm:px-10 md:px-14 py-10">
        <h2 className="font-bold text-[18px] text-[#1a1a1a] mb-5">
          You may also like
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {products
            .filter((p) => p.slug !== slug)
            .slice(0, 3)
            .map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`}>
                <div className="bg-white rounded-xl overflow-hidden
                  border border-gray-100 hover:-translate-y-1
                  transition-all duration-300 cursor-pointer">
                  <div className={`${p.cardBg} h-[100px] flex items-center justify-center`}>
                    <span className="text-[44px]">{p.emoji}</span>
                  </div>
                  <div className="p-3">
                    <div className="text-[13px] font-bold text-[#1a1a1a]">
                      {p.name}
                    </div>
                    <div className="text-[12px] font-bold text-[#2d6a10]">
                      ₹{p.price}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>

    </main>
  );
}