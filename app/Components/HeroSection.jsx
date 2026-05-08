"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import Navbar from "./Navbar";

const flavors = [
  {
    name: "cucumber",
    first: "cu",
    last:"cu",
    bg: "#3daa57",
    title: "THE GREEN ESSENCE",
    tagline: "FRESH. PURE. ALIVE.",
    img: "/heroimg3.png",
    ingredients: [
      { icon: "🥒", name: "Cucumber" },
      { icon: "🌿", name: "Celery" },
      { icon: "🍋", name: "Lemon" },
      { icon: "🌱", name: "Chard" },
    ],
  },
  {
    name: "chocolate",
    first: "Da",
    last:"rk",
    bg: "#8B3A0F",
    title: "THE CHOCOLATE ESSENCE",
    tagline: "TASTE. INDULGE. REPEAT.",
    img: "/heroimg5.png",
    ingredients: [
      { icon: "🍊", name: "Citrus Fruits" },
      { icon: "🍍", name: "Pineapple" },
      { icon: "💊", name: "Vitamin C" },
      { icon: "🫚", name: "Ginger" },
      { icon: "⚗️", name: "Giuster Acerola" },
    ],
  },
  {
    name: "berry",
    first: "Be",
    last:"rry",
    bg: "#d9255e",
    title: "THE BERRY ESSENCE",
    tagline: "BOLD. BRIGHT. BERRY.",
    img: "/heroimg4.png",
    ingredients: [
      { icon: "🍓", name: "Berry" },
      { icon: "🍋", name: "Lemon" },
      { icon: "🦠", name: "Probiotics" },
      { icon: "🌾", name: "Prebiotic Fiber" },
    ],
  },
];

const sizes = [
  { label: "12oz", sub: "STANDARD", oz: "(12oz)" },
  { label: "LARGE", sub: "", oz: "(16oz)" },
  { label: "SAMPLE", sub: "", oz: "(6oz)" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const lockedRef = useRef(false);
  const heroRef = useRef(null);
  const wordRef = useRef(null);
  const bottleRef = useRef(null);
  const leftRef = useRef(null);
  const hijackRef = useRef(true);

  const { contextSafe } = useGSAP({ scope: heroRef });

  const releaseScroll = (direction) => {
    if (lockedRef.current) return;
    hijackRef.current = false;
    window.scrollBy({ top: direction === "down" ? 200 : -200, behavior: "smooth" });
    setTimeout(() => { hijackRef.current = true; }, 1200);
  };

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (!hijackRef.current) return;
      e.preventDefault();
      if (e.deltaY > 0) {
        if (current < flavors.length - 1) goTo(current + 1);
        else releaseScroll("down");
      } else {
        if (current > 0) goTo(current - 1);
        else releaseScroll("up");
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e) => { touchStartY = e.touches[0].clientY; };
    const handleTouchEnd = (e) => {
      const diff = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 40) return;
      if (diff > 0) {
        if (current < flavors.length - 1) goTo(current + 1);
        else releaseScroll("down");
      } else {
        if (current > 0) goTo(current - 1);
        else releaseScroll("up");
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchend", handleTouchEnd);
    };
  }, [current]);

  const goTo = contextSafe((index) => {
    if (lockedRef.current || index === current) return;
    lockedRef.current = true;

    const tl = gsap.timeline({
      onComplete: () => { lockedRef.current = false; },
    });

    // EXIT — bottle + word + left content
    tl.to(bottleRef.current, { y: 60, opacity: 0, duration: 0.38, ease: "power2.in" }, 0)
      .to(wordRef.current,   { y: 30, opacity: 0, duration: 0.30, ease: "power2.in" }, 0)
      .to(leftRef.current,   { x: -30, opacity: 0, duration: 0.30, ease: "power2.in" }, 0);

    // SWAP
    tl.call(() => {
      setCurrent(index);
      gsap.set(bottleRef.current, { y: -50, opacity: 0 });
      gsap.set(wordRef.current,   { y: -25, opacity: 0 });
      gsap.set(leftRef.current,   { x: 30,  opacity: 0 });
    });

    // ENTER
    tl.to(bottleRef.current, { y: 0, opacity: 1, duration: 0.65, ease: "back.out(1.4)" }, "+=0.05")
      .to(wordRef.current,   { y: 0, opacity: 1, duration: 0.55, ease: "power3.out"    }, "<0.08")
      .to(leftRef.current,   { x: 0, opacity: 1, duration: 0.55, ease: "power3.out"    }, "<0.05");
  });

  const f = flavors[current];

  return (
    <div
      ref={heroRef}
      className="relative w-full overflow-hidden [transition:background-color_0.7s_ease]"
      style={{ backgroundColor: f.bg, height: "100dvh", minHeight: "600px" }}
    >

    

      {/* ── Left Content ── */}
      <div
        ref={leftRef}
        className="absolute z-20 text-white
          left-6 top-1/2 -translate-y-1/2
          sm:left-8 md:left-10 lg:left-14
          max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[300px]"
      >
        {/* Title */}
        <h1 className="font-[Bebas_Neue] leading-none mb-3
          text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px]"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
        >
          {f.title}
        </h1>

        <p className="text-[11px] sm:text-[12px] opacity-80 leading-relaxed mb-4 hidden sm:block">
          Crafted from nature's best, every bottle is a blend of pure ingredients and vibrant flavors.
        </p>

        {/* Ingredients grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-4 hidden md:grid">
          {f.ingredients.map((ing) => (
            <div key={ing.name} className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center text-sm flex-shrink-0">
                {ing.icon}
              </div>
              <span className="text-[11px] font-medium text-white/85 leading-tight">{ing.name}</span>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="font-[Bebas_Neue] tracking-[3px] text-white/90
          text-[14px] sm:text-[16px] md:text-[18px]">
          {f.tagline}
        </div>
      </div>

      {/* ── Center: Bottle + Big Word ── */}
      <div
        ref={bottleRef}
        className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10 flex items-end justify-center
          h-[68%] sm:h-[75%] md:h-[82%] lg:h-[88%]"
      >
        <img
          src={f.img}
          alt={f.name}
          className=" relative h-full w-auto object-contain -translate-x-1/2 ml-[100%]
            max-h-[340px] sm:max-h-[420px] md:max-h-[520px] lg:max-h-[640px]"
          style={{ filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.4))" }}
        />
      </div>

      {/* Big background word */}
      <div
        ref={wordRef}
        className="absolute bottom-[20%] left-1/2 -translate-x-1/2  z-[5]
          font-[Bebas_Neue] text-white/88 tracking-[6px] whitespace-nowrap
          pointer-events-none leading-none"
        style={{ fontSize: "clamp(70px, 18vw, 200px)" }}
      >
        <div className=" absolute bottom-[20%] -right-70  flex items-center justify-between lg:gap-20   ">
          <h1 className="mr-2">{f.first} </h1>
          <h1 className="md:mr-4">{f.last} </h1>



        </div>
      </div>

      {/* ── Right: Size Selector ── */}
      <div className="absolute z-20 text-center hidden md:flex flex-col items-center
        right-6 lg:right-10 top-1/2 -translate-y-1/2"
      >
        <p className="text-[10px] font-bold text-white/70 tracking-[2px] leading-tight mb-4">
          CHOOSE YOUR<br />CRAFT SIZE
        </p>
        <div className="flex flex-col gap-3 items-center">
          {sizes.map((size, i) => (
            <button
              key={size.label}
              onClick={() => setActiveSize(i)}
              className={`rounded-full flex flex-col items-center justify-center transition-all duration-300 border-none cursor-pointer font-[Poppins]
                w-[72px] h-[72px] lg:w-[80px] lg:h-[80px]
                ${activeSize === i
                  ? "bg-green-500 shadow-[0_0_20px_rgba(76,175,80,0.5)]"
                  : "bg-white/12 border border-white/20 hover:bg-white/20"
                }`}
            >
              {size.sub && <span className="text-[9px] font-bold text-white tracking-wide">{size.label}</span>}
              <span className="text-[10px] font-bold text-white tracking-wider">{size.sub || size.label}</span>
              <span className="text-[9px] text-white/70">{size.oz}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Scroll dots (desktop) ── */}
      <div className="hidden sm:flex absolute flex-col gap-1.5 z-30
        right-4 md:right-5 top-1/2 -translate-y-1/2"
        style={{ right: sizes ? "calc(80px + 28px)" : "20px" }}
      >
        {flavors.map((_, i) => (
          <div
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full cursor-pointer transition-all duration-300
              w-1 ${i === current ? "h-5 bg-white" : "h-1 bg-white/35 hover:bg-white/60"}`}
          />
        ))}
      </div>

      {/* ── Mobile dots ── */}
      <div className="flex sm:hidden absolute bottom-16 left-1/2 -translate-x-1/2 gap-2 z-30">
        {flavors.map((_, i) => (
          <div
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full cursor-pointer transition-all duration-300 h-1.5
              ${i === current ? "w-6 bg-white" : "w-1.5 bg-white/40"}`}
          />
        ))}
      </div>

      {/* ── Flavor tabs (mobile top) ── */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 flex gap-2 z-30 sm:hidden">
        {flavors.map((fl, i) => (
          <button
            key={fl.name}
            onClick={() => goTo(i)}
            className={`px-3 py-1 rounded-full text-[10px] font-semibold capitalize border-none cursor-pointer transition-colors
              ${i === current ? "bg-white text-gray-800" : "bg-white/25 text-white"}`}
          >
            {fl.name}
          </button>
        ))}
      </div>

      {/* ── Socials ── */}
      <div className="absolute bottom-5 left-6 flex items-center gap-4 z-30 hidden sm:flex">
        <div className="w-6 h-6 bg-white/15 rounded-md flex items-center justify-center text-[10px] font-bold text-white">N</div>
        {["FB", "BE", "In", "X"].map((s) => (
          <span key={s} className="text-[11px] text-white/50 hover:text-white cursor-pointer font-semibold transition-colors">
            {s}
          </span>
        ))}
      </div>

      {/* ── Sparkle ── */}
      <div className="absolute bottom-5 right-6 text-white/40 text-xl z-30 hidden sm:block">✦</div>

      {/* ── Scroll hint ── */}
      {current === flavors.length - 1 && (
        <div className="absolute bottom-5 right-10 sm:right-16 text-white/50 text-[10px] flex items-center gap-1 z-30 animate-bounce">
          scroll to continue ↓
        </div>
      )}

    </div>
  );
}