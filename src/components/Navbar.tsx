"use client";

import Image from "next/image";
import { Sparkles, CalendarCheck } from "lucide-react";

interface NavbarProps {
  onBookClick: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#F48C06]/20 shadow-[0_2px_15px_rgba(244,140,6,0.06)]">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3">
        
        {/* Brand: Clean, Single Line, No Second Line Wrapping */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#FFF3E4] via-[#FDE1B8] to-[#FFF9F2] border border-[#F48C06]/35 shadow-sm group-hover:scale-105 transition-transform overflow-hidden shrink-0">
            <Image
              src="/chakra.svg"
              alt="Vedic Chakra"
              width={38}
              height={38}
              className="animate-spin-slow opacity-85"
            />
            <div className="absolute inset-0 flex items-center justify-center font-serif text-[#E85D04] font-bold text-xs">
              ॐ
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-serif font-extrabold text-base sm:text-xl lg:text-2xl text-[#0B132B] tracking-tight whitespace-nowrap">
              Sanjeev Kumar Pandey
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 bg-[#FFF3E4] text-[#E85D04] border border-[#F48C06]/30 text-[11px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap shadow-xs">
              <Sparkles className="w-2.5 h-2.5" />
              10+ Yrs Exp
            </span>
          </div>
        </a>

        {/* Navigation Links - Cleanly Shown on Large Screens (lg: 1024px+) to Prevent 2nd Line Spill */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#0B132B]">
          <a
            href="#questions"
            className="hover:text-[#F48C06] transition-colors whitespace-nowrap"
          >
            Questions
          </a>
          <a
            href="#why-us"
            className="hover:text-[#F48C06] transition-colors whitespace-nowrap"
          >
            Why Sanjeev
          </a>
          <a
            href="#topics"
            className="hover:text-[#F48C06] transition-colors whitespace-nowrap"
          >
            Topics
          </a>
          <a
            href="#process"
            className="hover:text-[#F48C06] transition-colors whitespace-nowrap"
          >
            Process
          </a>
          <a
            href="#faq"
            className="hover:text-[#F48C06] transition-colors whitespace-nowrap"
          >
            FAQs
          </a>
        </nav>

        {/* Action Button - Single Line, Never Wraps */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onBookClick}
            className="btn-shimmer flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#F48C06] via-[#FF7700] to-[#E85D04] hover:from-[#E85D04] hover:to-[#F48C06] text-white font-bold text-xs sm:text-sm px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-md shadow-[#F48C06]/25 hover:scale-105 active:scale-95 transition-all whitespace-nowrap cursor-pointer"
          >
            <CalendarCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Book @ ₹99</span>
          </button>
        </div>

      </div>
    </header>
  );
}
