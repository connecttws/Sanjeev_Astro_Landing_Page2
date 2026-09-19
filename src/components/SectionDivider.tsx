"use client";

import { Sparkles } from "lucide-react";

interface SectionDividerProps {
  symbol?: "sparkles" | "om" | "star";
  className?: string;
}

export default function SectionDivider({
  symbol = "sparkles",
  className = "",
}: SectionDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`relative w-full py-1.5 sm:py-2.5 flex items-center justify-center overflow-hidden pointer-events-none select-none ${className}`}
    >
      {/* Subtle Central Warm Radial Glow */}
      <div className="absolute w-40 h-10 bg-[#F48C06]/15 blur-xl rounded-full pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto px-4 flex items-center justify-center">
        {/* Left Fading Tapered Gradient Line */}
        <div className="flex-1 h-[1.5px] max-w-[120px] sm:max-w-xs bg-gradient-to-r from-transparent via-[#F48C06]/40 to-[#E85D04]" />

        {/* Left Decorative Diamond Bead */}
        <div className="mx-2 sm:mx-3 flex items-center gap-1.5 shrink-0">
          <span className="w-1.5 h-1.5 rotate-45 bg-[#F48C06] shadow-xs" />
          <span className="w-1 h-1 rounded-full bg-[#FFD166]" />
        </div>

        {/* Center Golden Sacred Medallion */}
        <div className="relative shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-[#FFF3E4] via-[#FFE8CC] to-[#FFF9F2] border-2 border-[#F48C06]/50 shadow-md shadow-[#F48C06]/20">
          {symbol === "om" ? (
            <span className="font-serif font-bold text-xs sm:text-sm text-[#E85D04]">
              ॐ
            </span>
          ) : symbol === "star" ? (
            <span className="text-xs text-[#E85D04]">✦</span>
          ) : (
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E85D04]" />
          )}
        </div>

        {/* Right Decorative Diamond Bead */}
        <div className="mx-2 sm:mx-3 flex items-center gap-1.5 shrink-0">
          <span className="w-1 h-1 rounded-full bg-[#FFD166]" />
          <span className="w-1.5 h-1.5 rotate-45 bg-[#F48C06] shadow-xs" />
        </div>

        {/* Right Fading Tapered Gradient Line */}
        <div className="flex-1 h-[1.5px] max-w-[120px] sm:max-w-xs bg-gradient-to-l from-transparent via-[#F48C06]/40 to-[#E85D04]" />
      </div>
    </div>
  );
}
