"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Clock, Sparkles } from "lucide-react";

interface StickyBottomBarProps {
  onBookClick: () => void;
}

export default function StickyBottomBar({ onBookClick }: StickyBottomBarProps) {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after user scrolls 300px
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Timer countdown
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 14, seconds: 59 };
        }
      });
    }, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);

  const formatTime = (num: number) => String(num).padStart(2, "0");

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t-2 border-[#F48C06]/40 shadow-[0_-10px_30px_rgba(0,0,0,0.12)] py-2 sm:py-3 px-3 sm:px-6 transition-all duration-300 transform translate-y-0 w-full max-w-[100vw]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-6">
        
        {/* Price & Urgency */}
        <div className="flex items-center gap-2 sm:gap-6 shrink-0">
          <div>
            <div className="flex items-baseline gap-1.5 sm:gap-2">
              <span className="font-serif font-extrabold text-lg sm:text-2xl lg:text-3xl text-[#F48C06]">
                ₹99
              </span>
              <span className="line-through text-[11px] sm:text-sm text-gray-400 font-semibold">
                ₹999
              </span>
              <span className="bg-emerald-100 text-emerald-800 text-[9px] sm:text-xs font-bold px-1.5 py-0.5 rounded">
                90% OFF
              </span>
            </div>
            <div className="flex items-center gap-1 text-[10px] sm:text-xs text-[#334155] font-medium">
              <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#F48C06]" />
              <span className="hidden min-[360px]:inline">Offer Ends:</span>
              <span className="font-mono font-bold text-[#0B132B]">
                {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs text-[#334155] pl-4 border-l border-gray-200">
            <Sparkles className="w-4 h-4 text-[#F48C06]" />
            <span>15 Mins One-to-One Personalized Vedic Session</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex items-center shrink-0">
          <button
            onClick={onBookClick}
            className="btn-shimmer flex items-center justify-center gap-1 sm:gap-2 bg-gradient-to-r from-[#F48C06] via-[#FF7700] to-[#E85D04] hover:from-[#E85D04] hover:to-[#F48C06] text-white font-bold text-xs sm:text-sm lg:text-base px-3 sm:px-6 py-2 sm:py-3 rounded-xl shadow-lg shadow-[#F48C06]/30 hover:scale-105 active:scale-95 transition-all whitespace-nowrap cursor-pointer"
          >
            <span className="min-[400px]:hidden">Book @ ₹99</span>
            <span className="hidden min-[400px]:inline">Book Consultation (₹99)</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
