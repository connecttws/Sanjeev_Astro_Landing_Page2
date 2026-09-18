"use client";

import Image from "next/image";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

interface FinalCtaProps {
  onBookClick: () => void;
}

export default function FinalCta({ onBookClick }: FinalCtaProps) {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FFF3E4] to-[#FFFDF9] relative overflow-hidden">
      {/* Background Rotating Chakra Accent */}
      <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] opacity-15 pointer-events-none">
        <Image
          src="/chakra.svg"
          alt="Chakra"
          width={450}
          height={450}
          className="animate-spin-slow"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl bg-gradient-to-br from-[#1E2260] via-[#2A2368] to-[#121538] text-white p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl border-2 border-[#F48C06]/40">
          
          {/* Subtle gold glow */}
          <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-[#F48C06]/20 blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 bg-[#F48C06]/20 border border-[#F48C06]/40 text-[#FFD166] px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-[#F48C06]" />
            <span>Ab Der Mat Kijiye</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Aapka Sawaal Chhota Ho Ya Bada... <br />
            <span className="text-[#FFD166]">
              Uska Answer Aapke Liye Important Ho Sakta Hai.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-xl mx-auto">
            Confusion mein samay mat gavaiye. Apni birth chart ke shubh yog aur upay samajhkar aage badhiye.
          </p>

          {/* Big Offer Pill */}
          <div className="mt-6 inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/20">
            <span className="text-xs sm:text-sm text-gray-300">Start With Just:</span>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#F48C06]">
              ₹99
            </span>
            <span className="text-xs line-through text-gray-400">₹999</span>
            <span className="bg-[#F48C06] text-white text-[11px] font-bold px-2 py-0.5 rounded">
              90% OFF
            </span>
          </div>

          {/* Astrologer Byline */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-[#FFD166]">
            <span className="font-bold">Sanjeev Kumar Pandey</span>
            <span>•</span>
            <span>Vedic Astrology | 10+ Years Experience</span>
          </div>

          {/* CTA Button */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onBookClick}
              className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#F48C06] via-[#FF7700] to-[#E85D04] hover:from-[#E85D04] hover:to-[#F48C06] text-white font-bold text-base sm:text-lg px-9 py-4 rounded-xl shadow-2xl shadow-[#F48C06]/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>APNI CONSULTATION ABHI BOOK KAREIN (₹99)</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-gray-300">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>15 Minutes One-to-One Call</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Privacy Guaranteed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#FFD166]" />
              <span>Instant Slot Booking</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
