"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { User2Icon } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {

  const {user} = useUser()

  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="  fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-xl">

      {/* ── DESKTOP ── */}
      <div className="hidden md:flex items-center justify-between gap-8 bg-white/90 backdrop-blur-md border border-gray-200 shadow-sm rounded-2xl px-4 py-2">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-400 rounded-xl flex items-center justify-center">
            <span className="text-black font-black text-sm">N</span>
          </div>
          <span className="font-bold text-gray-900 text-sm">Nimzu</span>
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setActive(item.label)}
              className={`group relative overflow-hidden px-4 py-1.5 rounded-xl text-sm font-medium transition-colors duration-200
                ${active === item.label ? "text-gray-900" : "text-gray-500"}`}
            >
              <span
                className={`absolute inset-0 bg-green-400 origin-top scale-x-0 transition-transform duration-300 ease-out
                  group-hover:scale-x-100
                  ${active === item.label ? "scale-x-100" : ""}`}
              />
              <span className="relative z-10">{item.label}</span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        {!user? 
             <Button className="  bg-green-600 text-white  font-semibold px-4 py-4 rounded-xl hover:bg-gray-600 transition-all duration-200 cursor-pointer gap-2"> 
      <User2Icon className="h-10 w-10 shrink-0" />
        sign-IN</Button> :
        <button className="bg-gray-900 text-white text-sm font-semibold px-4 py-1.5 rounded-xl hover:bg-gray-700 transition-all duration-200 cursor-pointer">
          Place order →
        </button> 
      }
      

      </div>

      {/* ── MOBILE ── */}
<div className="md:hidden bg-white/90 backdrop-blur-md border border-gray-200 shadow-sm rounded-2xl px-4 py-2">

  {/* Top row */}
  <div className="flex items-center justify-between">
    <Link href="/" className="flex items-center gap-2">
      <div className="w-8 h-8 bg-green-400 rounded-xl flex items-center justify-center">
        <span className="text-black font-black text-sm">N</span>
      </div>
      <span className="font-bold text-gray-900 text-sm">Nimzu</span>
    </Link>

    <button
      onClick={() => setMenuOpen(true)}
      className="p-1.5 rounded-xl hover:bg-gray-100"
    >
      <Menu size={20} />
    </button>
  </div>
</div>

{/* ── MOBILE OVERLAY PANEL ── */}
{menuOpen && (
  <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/30 backdrop-blur-sm">

    {/* Panel */}
    <div className="mt-20 w-[90%] max-w-sm bg-white rounded-3xl p-6 shadow-xl animate-in fade-in zoom-in-95 duration-200">

      {/* Top */}
      <div className="flex items-center justify-between mb-6">
        <div className="font-bold">Nimzu</div>
        <button onClick={() => setMenuOpen(false)}>
          <X size={20} />
        </button>
      </div>

      {/* Links */}
      <div className="flex flex-col gap-4 text-lg font-medium">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => {
              setActive(item.label);
              setMenuOpen(false);
            }}
            className="text-gray-800 hover:text-black"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-4 flex items-center justify-center ">
    {!user? 
       <Button className=" w-[50%] bg-green-600 text-white text-md font-semibold px-4 py-4 rounded-xl hover:bg-gray-600 transition-all duration-200 cursor-pointer gap-2"> 
      <User2Icon className="h-10 w-10 shrink-0" />
        sign-IN</Button> :
        <button className="w-[50%]  bg-gray-900 text-white text-sm font-semibold px-4 py-1.5 rounded-xl hover:bg-gray-700 transition-all duration-200 cursor-pointer">
          Place order →
        </button> 
      }
      </div>

    </div>
  </div>
)}
    </nav>
  );
};

export default Navbar;