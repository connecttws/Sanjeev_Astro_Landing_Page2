"use client";

import Image from "next/image";
import {
  Calendar,
  Clock,
  Globe,
  Lock,
  Star,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FFF6EB] to-[#FFFDF9] pt-6 sm:pt-10 pb-16 sm:pb-24 border-b border-[#F48C06]/15 w-full max-w-[100vw]">
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
          
          {/* ──────── Left Column: Compelling Hook & Value Proposition ──────── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left min-w-0">
            
            {/* Trust Pill / Authority Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#FFF3E4] border border-[#F48C06]/40 text-[#E85D04] px-3 sm:px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-6 shadow-sm max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#F48C06] animate-ping shrink-0" />
              <span className="truncate">10+ Years Vedic Astrology Experience</span>
              <span className="text-[#F48C06]/50 hidden min-[360px]:inline">•</span>
              <span className="font-bold text-[#1E2260] hidden min-[360px]:inline shrink-0">15,000+ Guided</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl min-[380px]:text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-serif font-extrabold text-[#1E2260] leading-[1.18] tracking-tight break-words">
              Ab Aapke Saare Sawaalon Ka{" "}
              <span className="text-[#F48C06] relative inline-block">
                Jawaab Yahan Milega!
                <svg
                  className="absolute -bottom-2 left-0 w-full text-[#F48C06]/35"
                  viewBox="0 0 250 12"
                  fill="none"
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

            {/* Subtitle with High Relatability */}
            <p className="mt-3.5 sm:mt-5 text-sm sm:text-lg md:text-xl text-[#3A3F6D] font-normal leading-relaxed">
              <strong className="text-[#1E2260] font-semibold">Career, Marriage, Love, Business, Money</strong> ya <strong className="text-[#1E2260] font-semibold">Life</strong> ko lekar confused ho?
              Apni Janma Kundali ke aadhar par paiye certified Vedic Margdarshan.
            </p>

            <div className="mt-2 inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[#E85D04] font-semibold bg-[#FFF3E4]/70 px-2.5 sm:px-3 py-1 rounded-lg border border-[#F48C06]/20 max-w-full">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F48C06] shrink-0" />
              <span className="truncate">Har Sawaal Ka Personalized & Sateek Vedic Jawab</span>
            </div>

            {/* 4 Metadata Highlight Pills - Responsive 2x2 on mobile, 4x1 on desktop */}
            <div className="mt-5 sm:mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 w-full">
              <div className="bg-[#FBE0C7]/70 border border-[#F48C06]/30 flex items-center gap-2 p-2 sm:p-2.5 rounded-xl min-w-0">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-[#FF7700] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-[9px] sm:text-[10px] text-[#6E5434] uppercase font-bold tracking-wider truncate">
                    SLOT DATE
                  </p>
                  <p className="text-[11px] sm:text-[13px] font-bold text-[#1E2260] truncate">
                    Today & Tomorrow
                  </p>
                </div>
              </div>

              <div className="bg-[#FBE0C7]/70 border border-[#F48C06]/30 flex items-center gap-2 p-2 sm:p-2.5 rounded-xl min-w-0">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-[#FF7700] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-[9px] sm:text-[10px] text-[#6E5434] uppercase font-bold tracking-wider truncate">
                    DURATION
                  </p>
                  <p className="text-[11px] sm:text-[13px] font-bold text-[#1E2260] truncate">
                    15 Mins 1-on-1
                  </p>
                </div>
              </div>

              <div className="bg-[#FBE0C7]/70 border border-[#F48C06]/30 flex items-center gap-2 p-2 sm:p-2.5 rounded-xl min-w-0">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-[#FF7700] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-[9px] sm:text-[10px] text-[#6E5434] uppercase font-bold tracking-wider truncate">
                    LANGUAGE
                  </p>
                  <p className="text-[11px] sm:text-[13px] font-bold text-[#1E2260] truncate">
                    Hindi & English
                  </p>
                </div>
              </div>

              <div className="bg-[#FBE0C7]/70 border border-[#F48C06]/30 flex items-center gap-2 p-2 sm:p-2.5 rounded-xl min-w-0">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-[#FF7700] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-[9px] sm:text-[10px] text-[#6E5434] uppercase font-bold tracking-wider truncate">
                    PRIVACY
                  </p>
                  <p className="text-[11px] sm:text-[13px] font-bold text-[#1E2260] truncate">
                    100% Confidential
                  </p>
                </div>
              </div>
            </div>

            {/* Price & Primary CTA Stack */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 w-full">
              <div className="flex flex-col">
                <span className="text-xs text-[#55597D] font-semibold uppercase tracking-wider">
                  Special First Consultation
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#F48C06]">
                    ₹99
                  </span>
                  <span className="text-sm sm:text-base text-gray-400 line-through font-medium">
                    ₹999
                  </span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded-md">
                    90% OFF
                  </span>
                </div>
              </div>

              <button
                onClick={onBookClick}
                className="btn-shimmer flex-1 w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-[#F48C06] via-[#FF7700] to-[#E85D04] hover:from-[#E85D04] hover:to-[#F48C06] text-white font-bold text-base sm:text-lg px-8 py-4 rounded-xl shadow-xl shadow-[#F48C06]/30 hover:shadow-2xl hover:shadow-[#F48C06]/50 hover:scale-[1.02] active:scale-95 transition-all text-center group cursor-pointer"
              >
                <span>BOOK YOUR CONSULTATION</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Rating & Social Proof Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#55597D]">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#F48C06] text-[#F48C06]"
                  />
                ))}
              </div>
              <span className="font-bold text-[#1E2260]">4.9 / 5</span>
              <span>(12,400+ Verified Consultations)</span>
              <span className="hidden sm:inline text-gray-300">|</span>
              <div className="flex items-center gap-1 text-emerald-700 font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>One-to-One Personal Session</span>
              </div>
            </div>

          </div>

          {/* ──────── Right Column: Dignified Astrologer Card & Visual Aura ──────── */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Visual Frame Container */}
            <div className="relative w-full max-w-[420px] aspect-[4/4.6] flex items-center justify-center">
              
              {/* Outer Glow Halo */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#F48C06]/20 via-[#FFD166]/30 to-[#2F327D]/20 blur-2xl -z-10" />

              {/* Astrologer Showcase Card (Medium-Dark & Light Combination) */}
              <div className="relative w-full h-full rounded-3xl bg-gradient-to-b from-[#FFF8EE] via-[#FFFFFF] to-[#FFF3E4] border-2 border-[#F48C06]/30 shadow-2xl p-4 sm:p-5 flex flex-col justify-between overflow-hidden">
                
                {/* Background subtle Kundali chart texture */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <Image
                    src="/kundali-chart.svg"
                    alt="Kundali Background"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Top Badge on Card */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 bg-[#1E2260] text-[#FFD166] text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    <Sparkles className="w-3 h-3 text-[#F48C06]" />
                    Vedic Jyotish Acharya
                  </span>
                  <span className="bg-[#FFF3E4] text-[#E85D04] border border-[#F48C06]/30 text-xs font-bold px-2.5 py-1 rounded-lg">
                    10+ Yrs Exp
                  </span>
                </div>

                {/* Central Astrologer Artwork Image */}
                <div className="relative z-10 flex-1 flex items-center justify-center my-2">
                  <div className="relative w-48 h-48 min-[380px]:w-56 min-[380px]:h-56 sm:w-64 sm:h-64 rounded-full p-2 bg-gradient-to-tr from-[#F48C06] via-[#FFD166] to-[#1E2260] shadow-xl">
                    <div className="w-full h-full rounded-full overflow-hidden bg-[#1A1D47] relative">
                      <Image
                        src="/sanjeev-portrait.svg"
                        alt="Sanjeev Kumar Pandey - Vedic Astrologer"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        priority
                      />
                    </div>

                    {/* Floating verified badge */}
                    <div className="absolute -bottom-2 right-1 sm:right-2 bg-white text-[#1E2260] px-2.5 sm:px-3 py-1 rounded-full shadow-lg border border-[#F48C06]/40 flex items-center gap-1.5 text-[11px] sm:text-xs font-bold whitespace-nowrap">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 fill-emerald-100 shrink-0" />
                      <span>Verified Astrologer</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Identity & Guarantee Strip */}
                <div className="relative z-10 bg-[#1E2260] text-white p-3 sm:p-3.5 rounded-2xl border border-[#F48C06]/30 shadow-inner w-full">
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <h4 className="font-serif font-bold text-sm sm:text-base text-white truncate">
                        Sanjeev Kumar Pandey
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#FFD166] truncate">
                        Vedic Astrology • Kundali & Prashna Expert
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-[10px] text-gray-300">Starts At</div>
                      <div className="text-base sm:text-lg font-bold text-[#F48C06]">
                        ₹99 Only
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Testimonial/Trust Badge Left - Kept strictly within screen bounds */}
              <div className="absolute -bottom-4 left-1 sm:-left-4 bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-xl shadow-xl border border-[#F48C06]/30 flex items-center gap-2.5 z-20 animate-float max-w-[85%]">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FFF3E4] border border-[#F48C06]/30 flex items-center justify-center text-base sm:text-lg shrink-0">
                  ✨
                </div>
                <div className="text-left min-w-0">
                  <p className="text-xs font-bold text-[#1E2260] truncate">
                    98.4% Accuracy
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-[#55597D] truncate">
                    Direct Sawaal, Sateek Jawab
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
