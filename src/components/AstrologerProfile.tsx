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
          
          {/* Astrologer Photo & Aura */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-48 h-48 min-[380px]:w-60 min-[380px]:h-60 sm:w-80 sm:h-80 rounded-full p-2 sm:p-2.5 bg-gradient-to-tr from-[#F48C06] via-[#FFD166] to-[#E85D04] shadow-2xl shadow-[#F48C06]/30">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#1A1D47] relative">
                <Image
                  src="/sanjeev-portrait.svg"
                  alt="Sanjeev Kumar Pandey - Vedic Astrologer"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating verified badge */}
              <div className="absolute bottom-2 right-1 sm:right-4 bg-white text-[#0B132B] px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-xl border border-[#F48C06] flex items-center gap-1.5 text-[10px] sm:text-xs font-bold whitespace-nowrap">
                <Sparkles className="w-3.5 h-3.5 text-[#F48C06] shrink-0" />
                <span>Certified Vedic Astrologer</span>
              </div>
            </div>
          </div>

          {/* Bio & Content */}
          <div className="lg:col-span-7 text-left min-w-0">
            <div className="section-eyebrow-dark mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD166] shrink-0" />
              <span>Meet Your Vedic Guide</span>
            </div>

            <h2 className="text-2xl min-[380px]:text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight leading-tight break-words">
              Acharya <span className="text-[#FFD166]">Sanjeev Kumar Pandey</span>
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
