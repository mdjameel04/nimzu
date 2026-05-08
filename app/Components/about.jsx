const pills = ["Cold Pressed", "No Added Sugar", "Vegan", "Non-GMO", "Organic"];

export default function About() {
  return (
    <section className="bg-[#f7faf4] px-6 sm:px-10 md:px-14 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Visual */}
        <div className="relative">
          <div className="w-full h-[280px] sm:h-[320px] rounded-2xl
            bg-gradient-to-br from-[#e8f5d8] to-[#c5e89a]
            flex items-center justify-center overflow-hidden">
            <span className="font-[Bebas_Neue] text-[#2d6a10] opacity-30 tracking-[6px]
              text-[28px] sm:text-[36px]">
              PURE NATURE
            </span>
          </div>
          {/* Founded badge */}
          <div className="absolute -bottom-5 -right-4 sm:-right-5
            w-[80px] h-[80px] sm:w-[90px] sm:h-[90px]
            rounded-full bg-[#2d6a10] border-4 border-[#f7faf4]
            flex flex-col items-center justify-center">
            <span className="font-[Bebas_Neue] text-white text-xl tracking-wide">2021</span>
            <span className="text-white/70 text-[8px] tracking-widest">FOUNDED</span>
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="inline-block bg-[#e2f5d0] text-[#2d6a10] text-[10px] font-bold
            px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
            How It Started
          </span>
          <h2 className="font-[Bebas_Neue] text-[#1a1a1a] leading-[1.05] tracking-wide mb-5
            text-[32px] sm:text-[38px] md:text-[44px]">
            NATURE'S BEST,<br />
            <span className="text-[#2d6a10]">BOTTLED FOR YOU.</span>
          </h2>
          <p className="text-[13px] text-[#555] leading-[1.8] mb-4">
            It started with a frustration. Every juice on the shelf was loaded with sugar,
            artificial flavors, or had been sitting on a truck for weeks. We wanted
            something better — real fruits, cold pressed, delivered fresh.
          </p>
          <p className="text-[13px] text-[#555] leading-[1.8] mb-6">
            So in 2021, we built our first cold press machine in a small garage. Today,
            Nimzu ships to 50,000+ customers across India, still using the same philosophy
            — zero heat, zero additives, zero compromise.
          </p>
          <div className="flex flex-wrap gap-2">
            {pills.map((p) => (
              <span key={p} className="bg-[#e8f5d8] text-[#2d6a10] text-[11px] font-semibold
                px-4 py-1.5 rounded-full border border-[#c5e89a]">
                {p}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}