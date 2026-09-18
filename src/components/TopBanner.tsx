"use client";

import { useEffect, useState } from "react";
import { Sparkles, Clock, ArrowRight } from "lucide-react";

interface TopBannerProps {
  onBookClick: () => void;
}

export default function TopBanner({ onBookClick }: TopBannerProps) {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 15, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => String(num).padStart(2, "0");

  return (
    <aside
      aria-label="Special Offer Announcement"
      className="w-full bg-gradient-to-r from-[#1A1D47] via-[#2D1B69] to-[#1A1D47] text-white py-2 px-3 sm:px-6 text-xs sm:text-sm font-medium border-b border-[#F48C06]/30 shadow-sm overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 whitespace-nowrap">
        
        {/* Left Side: Single line offer message */}
        <div className="flex items-center gap-1.5 sm:gap-2 truncate">
          <span className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#F48C06] text-white shrink-0">
            <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
          </span>
          <span className="text-[#FFD166] font-bold text-xs sm:text-sm shrink-0">
            Special Vedic Offer:
          </span>
          <span className="text-gray-200 text-xs sm:text-sm truncate">
            1-on-1 Consultation @ <strong className="text-white font-extrabold">₹99</strong>
            <span className="line-through text-gray-400 text-xs ml-1.5 hidden min-[480px]:inline">
              ₹999
            </span>
            <span className="hidden md:inline text-gray-300 ml-1.5">
              • 15 Mins One-to-One
            </span>
          </span>
        </div>

        {/* Right Side: Countdown Timer & Action */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="flex items-center gap-1 sm:gap-1.5 bg-black/40 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-[#F48C06]/40 text-[#FFD166] text-[11px] sm:text-xs">
            <Clock className="w-3 h-3 text-[#F48C06] shrink-0" />
            <span className="hidden sm:inline">Ends in:</span>
            <span className="font-mono font-bold text-white">
              {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
            </span>
          </div>

          <button
            onClick={onBookClick}
            className="hidden md:inline-flex items-center gap-1 bg-[#F48C06] hover:bg-[#FF7700] text-white text-xs font-bold px-3 py-1 rounded-md transition-all hover:scale-105 shadow-sm cursor-pointer"
          >
            <span>Claim Slot</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

      </div>
    </aside>
  );
}
