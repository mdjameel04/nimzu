import { ArrowUpRight } from "lucide-react";


const products = [
  {
    name: "Uber Greens",
    desc: "Cucumber · Celery · Grapefruit · Chard · Lemon",
    price: "₹299",
    img: "/cucu.png",    
    badge: "BESTSELLER",
    badgeColor: "bg-[#c5e47a] text-[#1a4a0a]",
    bg: "bg-[#eaf5e0]",
  },
  {
    name: "Dark choco",
    desc: "cadbaruy  · Citrus · Vitamin C · Ginger · Acerola",
    price: "₹329",
    img: "/dark.png",    
    badge: "IMMUNITY",
    badgeColor: "bg-[#ffd980] text-[#7a4a00]",
    bg: "bg-[#fff8e8]",
  },
  {
    name: "Berry Boost",
    desc: "Berry · Lemon · Probiotics · Prebiotic Fiber · Cherry",
    price: "₹349",
    img: "/berry.png",
    badge: "GUT HEALTH",
    badgeColor: "bg-[#f9b8d0] text-[#7a1a3a]",
    bg: "bg-[#fdeef4]",
  },
];

export default function Products() {
  return (
    <section className="bg-[#f7faf4] px-6 sm:px-10 md:px-14 py-20">

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-[32px] sm:text-[40px] font-bold text-[#1a1a1a] mb-3">
          Pick your flavor
        </h2>
        <p className="text-[13px] text-gray-400 max-w-[400px] mx-auto">
          Each blend is crafted for a different mood, body need, and taste.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {products.map((p) => (
          <div
            key={p.name}
            className="bg-white rounded-2xl overflow-hidden border border-gray-100
              hover:-translate-y-1 transition-transform duration-300 shadow-sm"
          >
            {/* Top colored area */}
            <div className={`${p.bg} h-[200px] flex items-center justify-center relative`}>
             <img src={p.img} alt="img" className="" />
              {/* Badge */}
              <span className={`absolute top-4 left-1/2 -translate-x-1/2
                text-[10px] font-bold px-4 py-1.5 rounded-full ${p.badgeColor}`}>
                {p.badge}
              </span>
            </div>

            {/* Body */}
            <div className="p-5">
              <h3 className="text-[16px] font-bold text-[#1a1a1a] mb-1.5">{p.name}</h3>
              <p className="text-[12px] text-gray-400 leading-relaxed mb-4">{p.desc}</p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="text-[18px] font-bold text-[#2d6a10]">{p.price}</span>
             
                <button className="bg-white border border-gray-200 text-[#1a1a1a] flex items-center justify-between gap-2
                  text-[14px] font-semibold px-5 py-2 rounded-xl  font-poppins
                  hover:bg-[#2d6a10] hover:text-white hover:border-[#2d6a10]
                  transition-all duration-200 cursor-pointer">
                     Show
                    <ArrowUpRight/>
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}