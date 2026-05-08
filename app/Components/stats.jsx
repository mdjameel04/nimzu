const stats = [
  { icon: "🌿", num: "100", unit: "%",   label: "Natural Ingredients" },
  { icon: "😊", num: "50",  unit: "k+",  label: "Happy Customers" },
  { icon: "🍹", num: "12",  unit: "+",   label: "Unique Flavors" },
  { icon: "🏆", num: "4",   unit: " yrs", label: "Of Pure Taste" },
];

export default function Stats() {
  return (
    <section className="bg-white px-6 sm:px-10 md:px-14 py-14">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#e8f0e0] rounded-2xl overflow-hidden border border-[#e8f0e0]">
        {stats.map((s) => (
          <div key={s.label} className="bg-white px-6 py-8 text-center">
            <div className="text-xl mb-2">{s.icon}</div>
            <div className="font-[Bebas_Neue] text-[#2d6a10] leading-none
              text-[44px] sm:text-[52px]">
              {s.num}
              <span className="text-[#a8c890] text-2xl">{s.unit}</span>
            </div>
            <div className="text-[11px] text-gray-400 font-medium mt-2 tracking-wide">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}