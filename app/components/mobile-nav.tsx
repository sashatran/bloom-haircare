"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden flex items-center gap-4">
      {/* Shop Now - visible on tablet only */}
      <a
        href="#"
        className="hidden md:inline-flex rounded-full bg-accent-pink px-7 py-3 text-[15px] font-semibold text-white hover:opacity-90 transition-opacity"
      >
        Shop Now
      </a>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-bg-pink text-text-dark md:rounded-xl"
        aria-label="Toggle menu"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-[64px] md:top-[76px] z-50 flex flex-col gap-4 bg-bg-white px-6 pb-6 pt-4 shadow-lg">
          <a href="#" className="text-[15px] font-medium text-text-medium" onClick={() => setOpen(false)}>Products</a>
          <a href="#" className="text-[15px] font-medium text-text-medium" onClick={() => setOpen(false)}>Ingredients</a>
          <a href="#" className="text-[15px] font-medium text-text-medium" onClick={() => setOpen(false)}>About Us</a>
          <a href="#" className="text-[15px] font-medium text-text-medium" onClick={() => setOpen(false)}>Reviews</a>
          <a
            href="#"
            className="mt-2 rounded-full bg-accent-pink px-7 py-3 text-center text-[15px] font-semibold text-white md:hidden"
            onClick={() => setOpen(false)}
          >
            Shop Now
          </a>
        </div>
      )}
    </div>
  );
}
