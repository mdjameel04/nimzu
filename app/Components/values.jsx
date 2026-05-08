const values = [
  {
    icon: "🌱",
    title: "100% Natural",
    text: "Every ingredient we use is real, whole, and sourced directly from trusted farms. No artificial anything — ever.",
  },
  {
    icon: "❄️",
    title: "Cold Pressed Only",
    text: "We never use heat. Cold pressing preserves up to 5x more nutrients and enzymes than traditional juicing methods.",
  },
  {
    icon: "🌍",
    title: "Sustainably Made",
    text: "Our bottles are 100% recyclable and our production uses solar energy. Good for you, good for the planet.",
  },
];

export default function Values() {
  return (
    <section className="bg-white px-6 sm:px-10 md:px-14 py-20">

      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-block bg-[#e2f5d0] text-[#2d6a10] text-[10px] font-bold
          px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
          What We Stand For
        </span>
        <h2 className="font-[Bebas_Neue] text-[#1a1a1a] tracking-wide
          text-[36px] sm:text-[44px] mb-3">
          OUR VALUES
        </h2>
        <p className="text-[13px] text-gray-400 max-w-[340px] mx-auto">
          Every decision we make comes back to these three things.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {values.map((v) => (
          <div key={v.title}
            className="bg-[#f7faf4] rounded-2xl p-7 border border-[#e0edd0]
              hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-[#e2f5d0] rounded-xl flex items-center
              justify-center text-xl mb-5">
              {v.icon}
            </div>
            <h3 className="text-[15px] font-bold text-[#1a1a1a] mb-2">{v.title}</h3>
            <p className="text-[12px] text-[#777] leading-[1.7]">{v.text}</p>
          </div>
        ))}
      </div>

    </section>
  );
}