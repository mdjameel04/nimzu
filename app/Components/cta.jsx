export default function CTA() {
  return (
    <section className="relative bg-gradient-to-br from-[#1a3a0a] to-[#2d6a10]
      px-6 sm:px-10 py-20 text-center overflow-hidden">

      <div className="absolute inset-0 opacity-[0.05]"
        style={{ background: "radial-gradient(circle at 20% 50%,white 0%,transparent 50%),radial-gradient(circle at 80% 50%,white 0%,transparent 50%)" }}
      />

      <h2 className="relative font-[Bebas_Neue] text-white tracking-[3px] mb-4
        text-[44px] sm:text-[56px] md:text-[68px]">
        READY TO DRINK PURE?
      </h2>
      <p className="relative text-white/65 text-[14px] mb-8 max-w-[360px] mx-auto leading-relaxed">
        Join 50,000+ customers living fresher, healthier lives with Nimzu.
      </p>
      <div className="relative flex flex-col sm:flex-row gap-3 justify-center items-center">
        <button className="bg-white text-[#2d6a10] font-bold text-[13px]
          px-8 py-3 rounded-full w-full sm:w-auto">
          Shop Now →
        </button>
        <button className="border border-white/35 text-white font-semibold text-[13px]
          px-8 py-3 rounded-full w-full sm:w-auto">
          View All Flavors
        </button>
      </div>

    </section>
  );
}