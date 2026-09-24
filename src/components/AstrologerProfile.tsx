"use client";

import Image from "next/image";
import { Award, Users, Star, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

interface AstrologerProfileProps {
  onBookClick: () => void;
}

export default function AstrologerProfile({
  onBookClick,
}: AstrologerProfileProps) {
  const stats = [
    {
      value: "10+",
      label: "Years of Experience in Vedic Astrology",
      icon: Award,
    },
    {
      value: "15,000+",
      label: "Kundlis & Birth Charts Analysed",
      icon: Users,
    },
    {
      value: "4.9 / 5",
      label: "Client Rating & Positive Feedback",
      icon: Star,
    },
    {
      value: "100%",
      label: "Private, One-to-One Confidentiality",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-[#121538] via-[#1A1D47] to-[#121538] text-white relative overflow-hidden border-y border-[#F48C06]/30 shadow-2xl">
      {/* Background Sacred Geometry */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-10 pointer-events-none">
        <Image
          src="/chakra.svg"
          alt="Chakra Background"
          width={700}
          height={700}
          className="animate-spin-slow"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Col Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Astrologer Photo & Master Vedic Frame */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center w-full mb-6 lg:mb-0">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Outer Golden/Cosmic Ambient Aura */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#F48C06]/30 via-[#FFD166]/20 to-[#E85D04]/30 blur-xl rounded-3xl opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Master Ornate Frame */}
              <div className="relative p-2 sm:p-2.5 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#FFD166] via-[#F48C06] to-[#B34700] shadow-2xl shadow-[#F48C06]/35 transition-transform duration-500 hover:-translate-y-1">
                
                {/* Inner Cosmic Border Inlay */}
                <div className="relative p-1 sm:p-1.5 rounded-[14px] sm:rounded-[22px] bg-[#0E1130] border border-[#FFD166]/40 overflow-hidden">
                  
                  {/* Photo Container */}
                  <div className="relative aspect-[1433/1098] w-full rounded-[10px] sm:rounded-[18px] overflow-hidden bg-[#0A0D24]">
                    <Image
                      src="/sanjeev.png"
                      alt="Acharya Sanjeev Kumar Pandey - Vedic Astrologer"
                      width={1433}
                      height={1098}
                      priority
                      className="w-full h-full object-cover rounded-[10px] sm:rounded-[18px] transition-transform duration-700 hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 500px"
                    />

                    {/* Top Moving Light Shimmer Beam */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD166] to-transparent animate-shimmer pointer-events-none z-10" />

                    {/* Subtle Inner Frame Vignette Gradient */}
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-[10px] sm:rounded-[18px] pointer-events-none z-10" />

                    {/* Sacred Gold Corner Brackets */}
                    <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-[#FFD166]/80 rounded-tl pointer-events-none z-10" />
                    <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-[#FFD166]/80 rounded-tr pointer-events-none z-10" />
                    <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-[#FFD166]/80 rounded-bl pointer-events-none z-10" />
                    <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-[#FFD166]/80 rounded-br pointer-events-none z-10" />

                    {/* Floating Top-Left Tag: Certified Vedic Master */}
                    <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-[#0B132B]/90 backdrop-blur-md border border-[#FFD166]/40 px-2 sm:px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold text-[#FFD166] flex items-center gap-1.5 shadow-lg z-20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Certified Master</span>
                    </div>

                    {/* Floating Top-Right Tag: 10+ Yrs Exp */}
                    <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 bg-[#0B132B]/90 backdrop-blur-md border border-[#F48C06]/50 px-2 sm:px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold text-white flex items-center gap-1 shadow-lg z-20">
                      <Award className="w-3.5 h-3.5 text-[#FFD166]" />
                      <span>10+ Yrs Exp</span>
                    </div>
                  </div>

                </div>

                {/* Floating Bottom Nameplate / Seal */}
                <div className="absolute -bottom-3.5 sm:-bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0B132B]/95 via-[#1A1D47]/95 to-[#0B132B]/95 backdrop-blur-md border border-[#FFD166]/60 text-white px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-2xl flex items-center gap-2 whitespace-nowrap z-20">
                  <Sparkles className="w-3.5 h-3.5 text-[#FFD166] shrink-0" />
                  <span className="text-[11px] sm:text-xs font-bold tracking-wide text-[#FFFDF9]">
                    Astro Sanjeev Kumar Pandey
                  </span>
                  <span className="hidden min-[420px]:inline-block text-[10px] px-1.5 py-0.5 rounded bg-[#F48C06]/30 text-[#FFD166] font-semibold border border-[#FFD166]/30">
                    Verified
                  </span>
                </div>

              </div>

            </div>
          </div>

          {/* Bio & Content */}
          <div className="lg:col-span-7 text-left min-w-0">
            <div className="section-eyebrow-dark mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD166] shrink-0" />
              <span>Meet Your Vedic Guide</span>
            </div>

            <h2 className="text-xl min-[360px]:text-[28px] sm:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight leading-tight break-words">
              Astro <span className="text-[#FFD166]">Sanjeev Kumar Pandey</span>
            </h2>
            <div className="w-14 h-1 bg-gradient-to-r from-[#FFD166] to-[#F48C06] rounded-full my-3" />
            <p className="mt-1 text-base sm:text-xl font-medium text-[#FFD166]/90">
              Vedic Astrology Expert • 10+ Years of Clinical Experience
            </p>

            <p className="mt-3.5 sm:mt-4 text-xs sm:text-base text-gray-300 leading-relaxed">
              Acharya Sanjeev Kumar Pandey ne pichhle 10 varshon mein 15,000 se adhik logon ko unke career, vivah, business aur vyaktigat samasyaon ka Vedic Astrology ke zariye saral aur sateek hal pradan kiya hai.
            </p>

            <p className="mt-2 text-xs sm:text-base text-gray-300 leading-relaxed">
              Unka uddeshya complex astrological dashaon aur grahon ko aasan bhasha mein samjhana aur aisi guidance dena hai jisse aap confident hokar sahi faisla le sakein.
            </p>

            {/* Stats Grid */}
            <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
              {stats.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white/5 border border-white/10 p-2.5 sm:p-3.5 rounded-xl backdrop-blur-sm min-w-0"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#F48C06] mb-1" />
                    <div className="font-serif font-extrabold text-lg sm:text-2xl text-[#FFD166] truncate">
                      {s.value}
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-gray-300 leading-snug mt-1 line-clamp-2">
                      {s.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button
                onClick={onBookClick}
                className="btn-shimmer inline-flex items-center gap-3 bg-gradient-to-r from-[#F48C06] via-[#FF7700] to-[#E85D04] hover:from-[#E85D04] hover:to-[#F48C06] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-xl shadow-[#F48C06]/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>GET YOUR ASTROLOGICAL GUIDANCE NOW (₹99)</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
