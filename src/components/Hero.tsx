"use client";

import Image from "next/image";
import {
  Clock,
  Globe,
  Lock,
  Star,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import VslVideoFrame from "@/components/VslVideoFrame";

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FFF6EB] to-[#FFFDF9] pt-5 sm:pt-8 pb-6 sm:pb-10 w-full max-w-[100vw]">
      {/* Background Rotating Sacred Chakra - Strictly clipped and responsive */}
      <div className="absolute -top-10 right-0 sm:right-[5%] lg:right-[8%] w-64 min-[400px]:w-80 sm:w-[500px] lg:w-[620px] max-w-full aspect-square pointer-events-none opacity-15 sm:opacity-25 -z-0">
        <Image
          src="/chakra.svg"
          alt="Astrology Chakra Mandala"
          width={620}
          height={620}
          className="w-full h-full animate-spin-slow"
          priority
        />
      </div>

      {/* Subtle Warm Amber Atmospheric Glows */}
      <div className="absolute top-1/4 left-0 w-60 sm:w-72 h-60 sm:h-72 rounded-full bg-[#F48C06]/10 blur-3xl pointer-events-none -z-0 max-w-full" />
      <div className="absolute bottom-10 right-0 sm:right-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#FFD166]/15 blur-3xl pointer-events-none -z-0 max-w-full" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ──────── Left Column: Compelling Hook, VSL (on mobile), & Value Proposition ──────── */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left min-w-0">
            
            {/* Trust Pill - Clean White Background, Zero Dark Shade, Ultra Crisp */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 min-[360px]:px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white border border-[#F48C06]/35 shadow-xs text-[12px] min-[360px]:text-[13px] sm:text-sm md:text-base font-semibold mb-3 sm:mb-4 max-w-full whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E85D04] shrink-0" />
              <span className="hidden min-[360px]:inline text-[#0B132B]">
                <strong className="font-bold text-[#0B132B]">Vedic Astrology</strong> <span className="text-[#F48C06] font-normal mx-0.5">•</span> <span className="text-[#E85D04] font-bold">15,000+ Consultations</span>
              </span>
              <span className="min-[360px]:hidden text-[#0B132B]">
                <strong className="font-bold text-[#0B132B]">Vedic Astro</strong> <span className="text-[#F48C06] font-normal mx-0.5">•</span> <span className="text-[#E85D04] font-bold">15K+ Consults</span>
              </span>
            </div>

            {/* Main Headline - Balanced & refined size on both mobile and desktop */}
            <h1 className="text-[18px] min-[360px]:text-[20px] min-[400px]:text-[22px] sm:text-2xl md:text-3xl lg:text-[35px] font-serif font-extrabold text-[#0B132B] leading-[1.25] sm:leading-[1.25] tracking-tight break-words">
              <span className="block whitespace-nowrap">Ab Aapke Saare Sawaalon Ka</span>
              <span className="text-[#E85D04] relative inline-block mt-0.5 sm:mt-1 whitespace-nowrap">
                Javab Yha Milega!
                <svg
                  className="absolute -bottom-1 sm:-bottom-1.5 left-0 w-full text-[#F48C06]/40"
                  viewBox="0 0 250 12"
                  fill="none"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C60 3 180 3 247 9"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Concise Subtitle - Strictly 2 lines on small screens */}
            <p className="mt-2.5 sm:mt-3.5 text-[12px] min-[360px]:text-[13px] min-[400px]:text-sm sm:text-base md:text-lg text-[#334155] leading-snug sm:leading-relaxed max-w-xl mx-auto lg:mx-0">
              Career, Marriage ya Business ki confusion door kijiye Janma Kundali ke personalized Vedic margdarshan se.
            </p>

            {/* ──────── Mobile View: VSL Video Frame (Directly after subtitle on mobile screens) ──────── */}
            <div className="lg:hidden w-full max-w-md my-3 sm:my-4">
              <VslVideoFrame onBookClick={onBookClick} />
            </div>

            {/* Sleek Feature Pills — Guaranteed Single Line on Mobile View */}
            <div className="mt-2.5 sm:mt-4 flex flex-nowrap items-center justify-center lg:justify-start gap-1 min-[360px]:gap-1.5 sm:gap-2 text-[10px] min-[360px]:text-[11px] sm:text-sm text-[#0B132B] w-full max-w-full overflow-x-auto sm:overflow-visible no-scrollbar">
              <span className="inline-flex items-center gap-1 sm:gap-1.5 bg-[#FFF3E4] px-1.5 min-[360px]:px-2.5 py-0.5 min-[360px]:py-1 rounded-lg border border-[#F48C06]/30 font-semibold shrink-0 whitespace-nowrap shadow-xs">
                <Clock className="w-2.5 h-2.5 min-[360px]:w-3 min-[360px]:h-3 text-[#F48C06] shrink-0" />
                <span>15 Min 1-on-1</span>
              </span>
              <span className="inline-flex items-center gap-1 sm:gap-1.5 bg-[#FFF3E4] px-1.5 min-[360px]:px-2.5 py-0.5 min-[360px]:py-1 rounded-lg border border-[#F48C06]/30 font-semibold shrink-0 whitespace-nowrap shadow-xs">
                <Globe className="w-2.5 h-2.5 min-[360px]:w-3 min-[360px]:h-3 text-[#F48C06] shrink-0" />
                <span>Hindi & English</span>
              </span>
              <span className="inline-flex items-center gap-1 sm:gap-1.5 bg-[#FFF3E4] px-1.5 min-[360px]:px-2.5 py-0.5 min-[360px]:py-1 rounded-lg border border-[#F48C06]/30 font-semibold shrink-0 whitespace-nowrap shadow-xs">
                <Lock className="w-2.5 h-2.5 min-[360px]:w-3 min-[360px]:h-3 text-[#F48C06] shrink-0" />
                <span>100% Private</span>
              </span>
            </div>

            {/* Clean Price & Primary CTA */}
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4 w-full">
              <div className="flex items-baseline gap-2 shrink-0">
                <span className="text-2xl sm:text-4xl font-extrabold text-[#F48C06]">
                  ₹99
                </span>
                <span className="text-xs sm:text-sm text-gray-400 line-through font-medium">
                  ₹999
                </span>
                <span className="bg-emerald-100 text-emerald-700 text-[10px] sm:text-xs font-bold px-1.5 py-0.5 rounded-md">
                  90% OFF
                </span>
              </div>

              <button
                onClick={onBookClick}
                className="btn-shimmer w-full sm:w-auto flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#F48C06] via-[#FF7700] to-[#E85D04] hover:from-[#E85D04] hover:to-[#F48C06] text-white font-bold text-xs sm:text-base px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-lg shadow-[#F48C06]/30 hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all text-center group cursor-pointer"
              >
                <span>Book Consultation Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Social Proof */}
            <div className="mt-3 sm:mt-4 flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2 text-[11px] min-[360px]:text-xs sm:text-sm text-[#334155] whitespace-nowrap">
              <div className="flex items-center text-[#F48C06]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#F48C06]"
                  />
                ))}
              </div>
              <span className="font-bold text-[#0B132B]">4.9/5</span>
              <span className="text-gray-300">•</span>
              <span>12,000+ Consultations</span>
              <span className="hidden min-[380px]:inline text-gray-300">•</span>
              <span className="hidden min-[380px]:inline text-emerald-700 font-medium">Personal Session</span>
            </div>

          </div>

          {/* ──────── Right Column: Desktop View VSL Video Frame (Replaces former image frame) ──────── */}
          <div className="hidden lg:flex lg:col-span-5 justify-center items-center relative">
            <div className="w-full max-w-[480px]">
              <VslVideoFrame onBookClick={onBookClick} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
