"use client";

import { Sparkles, ArrowRight } from "lucide-react";

interface TransitionBannerProps {
  onBookClick: () => void;
}

export default function TransitionBanner({
  onBookClick,
}: TransitionBannerProps) {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-r from-[#121538] via-[#1E2260] to-[#2D1B69] text-white overflow-hidden border-y border-[#F48C06]/30 shadow-2xl">
      {/* Subtle Star Dust Particles Effect */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#F48C06_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Decorative Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-[#F48C06]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#FFD166]/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 bg-[#F48C06]/20 border border-[#F48C06]/40 text-[#FFD166] px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4">
          <Sparkles className="w-4 h-4 text-[#F48C06]" />
          <span>Vedic Clarity • No Fluff, Pure Direction</span>
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-light text-gray-200">
          Agar aapke mind mein bhi aise questions hain...
        </h3>

        <p className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-[#FFD166] tracking-tight leading-tight">
          Toh Shayad Aapko Ek Personalised Astrological Guidance Ki Zaroorat Hai.
        </p>

        <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Generic daily horoscope se aapki specific life situations solve nahi hoti. Janma Kundali ke grah aur dasha hi aapke liye sateek rasta dikhate hain.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onBookClick}
            className="btn-shimmer inline-flex items-center gap-2.5 bg-gradient-to-r from-[#F48C06] to-[#FF7700] hover:from-[#E85D04] hover:to-[#F48C06] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-xl shadow-[#F48C06]/30 hover:scale-105 active:scale-95 transition-all"
          >
            <span>BOOK YOUR CONSULTATION (₹99)</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
