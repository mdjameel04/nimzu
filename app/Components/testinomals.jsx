const testimonials = [
  {
    stars: 5,
    quote: "Uber Greens has completely changed my morning routine. I feel so much more energized and it actually tastes amazing — not like grass!",
    initials: "PR",
    name: "Priya Rajan",
    handle: "Hyderabad · Verified",
    color: "#2d6a10",
  },
  {
    stars: 5,
    quote: "Berry Boost is my go-to after the gym. Love that it has probiotics. The taste is incredible and I've noticed real gut health improvements.",
    initials: "AK",
    name: "Arjun Kumar",
    handle: "Mumbai · Verified",
    color: "#d9255e",
  },
  {
    stars: 5,
    quote: "Finally a juice brand that doesn't add sugar. Citrus Zest is perfect — tangy, refreshing, and I love knowing every ingredient is real.",
    initials: "SM",
    name: "Sneha Mehta",
    handle: "Bangalore · Verified",
    color: "#f5a020",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white px-6 sm:px-10 md:px-14 py-20">

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-[32px] sm:text-[40px] font-bold text-[#1a1a1a] mb-3">
          People love Nimzu
        </h2>
        <p className="text-[13px] text-gray-400 max-w-[360px] mx-auto">
          Real customers, real results. No paid reviews, ever.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-gray-50 border border-gray-100 rounded-2xl p-6
              hover:-translate-y-1 transition-transform duration-300"
          >
            {/* Stars */}
            <div className="text-[#2d6a10] text-sm tracking-widest mb-4">
              {"★".repeat(t.stars)}{"☆".repeat(5 - t.stars)}
            </div>

            {/* Quote */}
            <p className="text-[13px] text-[#444] leading-[1.8] mb-6 italic">
              "{t.quote}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center
                  text-[12px] font-bold text-white flex-shrink-0"
                style={{ backgroundColor: t.color }}
              >
                {t.initials}
              </div>
              <div>
                <div className="text-[13px] font-bold text-[#1a1a1a]">{t.name}</div>
                <div className="text-[11px] text-gray-400">{t.handle}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}