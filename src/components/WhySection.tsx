"use client";

import { useState } from "react";
import {
  Award,
  UserCheck,
  MessageSquareCheck,
  Sparkles,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function WhySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const reasons = [
    {
      title: "10+ Years Of Experience",
      subtitle: "दशकों का प्रामाणिक अनुभव",
      desc: "Vedic Astrology ke field mein 10+ years of experience ke saath personalised consultations.",
      icon: Award,
      badge: "Trusted Mentor",
      highlight: "15,000+ Kundlis Read",
    },
    {
      title: "Personalised Guidance",
      subtitle: "आपकी जन्म कुंडली का विश्लेषण",
      desc: "Aapke birth details aur specific questions ke basis par consultation.",
      icon: UserCheck,
      badge: "100% Custom",
      highlight: "Lagnav & Navamsha Focus",
    },
    {
      title: "One-to-One Consultation",
      subtitle: "सीधी और निजी बातचीत",
      desc: "Aap apne personal questions directly discuss kar sakte hain.",
      icon: MessageSquareCheck,
      badge: "Direct Access",
      highlight: "100% Confidential",
    },
    {
      title: "Affordable Pricing",
      subtitle: "सुलभ और उचित मूल्य",
      desc: "₹99 mein apna pasandida question poochhein aur clear guidance paaiye.",
      icon: Sparkles,
      badge: "Best Value",
      highlight: "Only ₹99 (Was ₹999)",
    },
  ];

  const minSwipeDistance = 40;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reasons.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reasons.length) % reasons.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  return (
    <section id="why-us" className="py-10 sm:py-14 bg-gradient-to-b from-[#FFFDF9] via-[#FFF9F2] to-[#FFFDF9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="section-eyebrow">
            <Sparkles className="w-3.5 h-3.5 text-[#E85D04]" />
            <span>Trusted Vedic Astrologer</span>
          </div>
          <h2 className="text-[20px] min-[360px]:text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-serif font-extrabold text-[#0B132B] tracking-tight leading-tight">
            Why Consult{" "}
            <span className="text-[#E85D04] relative inline-block">
              Sanjeev Kumar Pandey?
              <span className="absolute -bottom-1.5 left-0 right-0 h-1 bg-[#F48C06]/35 rounded-full" />
            </span>
          </h2>
          <div className="heading-divider mb-2.5 sm:mb-3" />
          <p className="mt-2 sm:mt-3 text-xs min-[360px]:text-sm sm:text-base text-[#334155] leading-relaxed max-w-xl mx-auto">
            Authentic Vedic parampra aur modern practical remedies ka anokha sangam, jo aapke jeevan ko deta hai sateek disha.
          </p>
        </div>

        {/* ──────── Mobile View: Photo / Card Carousel with Downside Arrows (< md) ──────── */}
        <div className="md:hidden mt-6 sm:mt-8">
          <div
            className="overflow-hidden touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reasons.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="w-full shrink-0 px-1">
                    <div className="card-3d-orange p-4 sm:p-6 flex flex-col justify-between relative group min-h-[290px]">
                      {/* Moving / Shimmering Top Light Beam */}
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F48C06] via-[#FFD166] to-[#E85D04] bg-[length:200%_auto] animate-shimmer pointer-events-none" />

                      {/* Subtle Ambient Radial Glow */}
                      <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#F48C06]/10 blur-2xl pointer-events-none" />

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#FFF3E4] to-[#FBE0C7] border-2 border-[#F48C06]/40 flex items-center justify-center text-[#E85D04] shadow-md">
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className="text-xs font-bold text-[#C2410C] bg-gradient-to-r from-[#FFF3E4] to-[#FFE8CC] border border-[#F48C06]/35 px-3 py-1 rounded-full shadow-xs">
                            {item.badge}
                          </span>
                        </div>

                        <h3 className="font-serif font-extrabold text-xl text-[#0B132B]">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#E85D04] font-bold mt-1 mb-3">
                          {item.subtitle}
                        </p>

                        <p className="text-sm text-[#334155] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      <div className="relative z-10 mt-6 pt-3.5 border-t border-[#F48C06]/20 flex items-center gap-2 text-xs font-bold text-[#0B132B]">
                        <div className="w-5 h-5 rounded-full bg-[#FFF3E4] border border-[#F48C06]/30 flex items-center justify-center text-[#E85D04]">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{item.highlight}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Downside Navigation Controls: 2 Arrows & Slide Indicators */}
          <div className="mt-5 flex items-center justify-center gap-5">
            {/* Backward Arrow */}
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="w-11 h-11 rounded-full bg-white border-2 border-[#F48C06]/40 hover:border-[#F48C06] text-[#E85D04] hover:bg-[#FFF3E4] shadow-md flex items-center justify-center active:scale-90 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots indicator */}
            <div className="flex items-center gap-2">
              {reasons.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-7 bg-gradient-to-r from-[#F48C06] to-[#E85D04] shadow-xs"
                      : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* Forward Arrow */}
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="w-11 h-11 rounded-full bg-white border-2 border-[#F48C06]/40 hover:border-[#F48C06] text-[#E85D04] hover:bg-[#FFF3E4] shadow-md flex items-center justify-center active:scale-90 transition-all cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* ──────── Desktop View: Responsive 4-Column Grid (md: and above) ──────── */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 sm:mt-12">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="card-3d-orange p-6 flex flex-col justify-between relative group overflow-hidden"
              >
                {/* Moving / Shimmering Top Light Beam */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F48C06] via-[#FFD166] to-[#E85D04] bg-[length:200%_auto] animate-shimmer pointer-events-none" />

                {/* Subtle Ambient Radial Glow */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#F48C06]/10 blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FFF3E4] border-2 border-[#F48C06]/30 flex items-center justify-center text-[#E85D04] group-hover:scale-110 group-hover:bg-[#F48C06] group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-[#C2410C] bg-[#FBE0C7]/60 px-2.5 py-0.5 rounded-full border border-[#F48C06]/20">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-[#0B132B]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#E85D04] font-medium mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-3 border-t border-[#F48C06]/20 flex items-center gap-1.5 text-xs font-semibold text-[#0B132B]">
                  <Check className="w-3.5 h-3.5 text-[#F48C06]" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
