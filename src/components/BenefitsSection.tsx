"use client";

import { useState } from "react";
import {
  FileText,
  Target,
  HelpCircle,
  BookOpen,
  UserCheck,
  CheckCircle2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

export default function BenefitsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const benefits = [
    {
      num: "01",
      title: "Personalised Birth Chart Analysis",
      hindiTitle: "व्यक्तिगत जन्म पत्रिका विश्लेषण",
      desc: "Aapki birth details ke according astrological analysis aur grah-dasha ka sateek parikshan.",
      icon: FileText,
      tag: "Deep Kundali Reading",
      badge: "Chart Analysis",
    },
    {
      num: "02",
      title: "Specific Answers",
      hindiTitle: "सटीक और स्पष्ट उत्तर",
      desc: "Aapke specific questions par focused aur clear Vedic guidance bina kisi ghumao-phirao ke.",
      icon: Target,
      tag: "Direct Clarity",
      badge: "Targeted Focus",
    },
    {
      num: "03",
      title: "Multiple Questions",
      hindiTitle: "15 मिनट में कई सवाल",
      desc: "₹99 consultation mein aap 15 Minutes tak apne multiple concerns aur questions discuss kar sakte hain.",
      icon: HelpCircle,
      tag: "15 Mins Duration",
      badge: "No Rush",
    },
    {
      num: "04",
      title: "Easy-To-Understand Guidance",
      hindiTitle: "सरल भाषा में मार्गदर्शन",
      desc: "Complex astrological concepts aur planetary yogas ko aam bolchaal ki simple Hindi/English mein samjhaya jayega.",
      icon: BookOpen,
      tag: "Simple Language",
      badge: "Practical Remedies",
    },
    {
      num: "05",
      title: "Personal Attention",
      hindiTitle: "100% व्यक्तिगत ध्यान",
      desc: "One-to-one consultation ke through aapki situation ko individually aur privately discuss kiya jayega.",
      icon: UserCheck,
      tag: "1-on-1 Confidential",
      badge: "Private Session",
    },
  ];

  const totalSlides = benefits.length + 1; // 5 benefits + 1 summary promo card = 6

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
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
    <section className="py-10 sm:py-14 bg-gradient-to-b from-[#FFFDF9] via-[#FFF6EB] to-[#FFFDF9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="section-eyebrow">
            <Sparkles className="w-3.5 h-3.5 text-[#E85D04]" />
            <span>What You Get in ₹99</span>
          </div>
          <h2 className="text-[20px] min-[360px]:text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-serif font-extrabold text-[#0B132B] tracking-tight leading-tight">
            Aapko Is Session Mein{" "}
            <span className="text-[#E85D04] relative inline-block">
              Kya Milega?
              <span className="absolute -bottom-1.5 left-0 right-0 h-1 bg-[#F48C06]/35 rounded-full" />
            </span>
          </h2>
          <div className="heading-divider mb-2.5 sm:mb-3" />
          <p className="mt-2 sm:mt-3 text-xs min-[360px]:text-sm sm:text-base text-[#334155] leading-relaxed max-w-xl mx-auto">
            ₹99 ki is special consultation mein aapko milegi aisi value jo aamtaur par hazaron rupaye ke sessions mein milti hai.
          </p>
        </div>

        {/* ──────── Mobile View: Interactive Carousel with Downside Arrows (< md) ──────── */}
        <div className="md:hidden mt-6 sm:mt-7">
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
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={i} className="w-full shrink-0 px-1">
                    <div className="card-3d-orange p-4 sm:p-6 flex flex-col justify-between relative group min-h-[300px]">
                      {/* Moving / Shimmering Top Light Beam */}
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F48C06] via-[#FFD166] to-[#E85D04] bg-[length:200%_auto] animate-shimmer pointer-events-none" />

                      {/* Subtle Ambient Radial Glow */}
                      <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#F48C06]/10 blur-2xl pointer-events-none" />

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-serif font-black text-2xl text-[#E85D04] bg-gradient-to-br from-[#FFF3E4] to-[#FBE0C7] border border-[#F48C06]/40 px-3 py-1 rounded-xl shadow-xs">
                            {b.num}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-bold text-[#C2410C] bg-[#FFF3E4] border border-[#F48C06]/30 px-2.5 py-0.5 rounded-full">
                              {b.badge}
                            </span>
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FFF3E4] to-[#FBE0C7] border-2 border-[#F48C06]/40 flex items-center justify-center text-[#E85D04] shadow-sm">
                              <Icon className="w-5 h-5" />
                            </div>
                          </div>
                        </div>

                        <h3 className="font-serif font-extrabold text-xl text-[#0B132B]">
                          {b.title}
                        </h3>
                        <p className="text-xs text-[#E85D04] font-bold mt-0.5 mb-2.5">
                          {b.hindiTitle}
                        </p>

                        <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                          {b.desc}
                        </p>
                      </div>

                      <div className="relative z-10 mt-5 pt-3 border-t border-[#F48C06]/20 flex items-center gap-2 text-xs font-bold text-[#0B132B]">
                        <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-500/30 flex items-center justify-center text-emerald-600">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <span>{b.tag}</span>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Slide 6: Summary / Promo Card */}
              <div className="w-full shrink-0 px-1">
                <div className="rounded-2xl p-6 bg-gradient-to-br from-[#1E2260] via-[#2A2368] to-[#121538] text-white flex flex-col justify-between shadow-xl border-2 border-[#F48C06]/50 relative overflow-hidden min-h-[310px]">
                  {/* Shimmer beam */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F48C06] via-[#FFD166] to-[#E85D04] bg-[length:200%_auto] animate-shimmer pointer-events-none" />
                  
                  {/* Amber aura */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#F48C06]/20 blur-2xl pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold text-[#FFD166] uppercase tracking-wider bg-[#F48C06]/25 px-2.5 py-1 rounded-full border border-[#F48C06]/40">
                        ⭐ All-In-One Value
                      </span>
                      <ShieldCheck className="w-5 h-5 text-[#FFD166]" />
                    </div>

                    <h3 className="font-serif font-extrabold text-xl text-white">
                      Sirf ₹99 Mein 100% Sateek Vedic Analysis
                    </h3>
                    <p className="mt-2 text-xs text-gray-200 leading-relaxed">
                      Apne career, relationship ya financial doubt ko door karein. Sanjeev Kumar Pandey se directly one-to-one phone/video session par baat karein.
                    </p>
                  </div>

                  <div className="relative z-10 mt-5 pt-3.5 border-t border-white/15 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-gray-400">Regular:</span>
                      <span className="line-through text-xs text-gray-400 ml-1">₹999</span>
                      <div className="text-xl font-black text-[#FFD166]">
                        Pay ₹99
                      </div>
                    </div>
                    <span className="text-xs font-extrabold bg-gradient-to-r from-[#F48C06] to-[#E85D04] text-white px-3.5 py-1.5 rounded-lg shadow-md">
                      Save 90%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Downside Navigation Controls: 2 Arrows & Slide Indicators */}
          <div className="mt-5 flex items-center justify-center gap-4">
            {/* Backward Arrow */}
            <button
              onClick={prevSlide}
              aria-label="Previous Benefit"
              className="w-11 h-11 rounded-full bg-white border-2 border-[#F48C06]/40 hover:border-[#F48C06] text-[#E85D04] hover:bg-[#FFF3E4] shadow-md flex items-center justify-center active:scale-90 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots indicator for all 6 items */}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-6 bg-gradient-to-r from-[#F48C06] to-[#E85D04] shadow-xs"
                      : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* Forward Arrow */}
            <button
              onClick={nextSlide}
              aria-label="Next Benefit"
              className="w-11 h-11 rounded-full bg-white border-2 border-[#F48C06]/40 hover:border-[#F48C06] text-[#E85D04] hover:bg-[#FFF3E4] shadow-md flex items-center justify-center active:scale-90 transition-all cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* ──────── Desktop View: Responsive 3-Column Grid (md: and above) ──────── */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="card-3d-orange p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Moving / Shimmering Top Light Beam */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F48C06] via-[#FFD166] to-[#E85D04] bg-[length:200%_auto] animate-shimmer pointer-events-none" />

                {/* Subtle Ambient Radial Glow */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#F48C06]/10 blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif font-black text-3xl text-[#E85D04] bg-gradient-to-br from-[#FFF3E4] to-[#FBE0C7] border border-[#F48C06]/40 px-3 py-1 rounded-xl shadow-xs">
                      {b.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#FFF3E4] border-2 border-[#F48C06]/30 flex items-center justify-center text-[#E85D04] group-hover:scale-110 group-hover:bg-[#F48C06] group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#0B132B]">
                    {b.title}
                  </h3>
                  <p className="text-xs text-[#E85D04] font-bold mt-0.5 mb-3">
                    {b.hindiTitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                    {b.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-[#F48C06]/20 flex items-center gap-2 text-xs font-semibold text-[#0B132B]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{b.tag}</span>
                </div>
              </div>
            );
          })}

          {/* Quick Summary Promo Card in the 6th slot */}
          <div className="rounded-2xl p-6 sm:p-7 bg-gradient-to-br from-[#1E2260] via-[#2A2368] to-[#121538] text-white flex flex-col justify-between relative overflow-hidden border-2 border-[#F48C06]/50 shadow-[0_12px_30px_-6px_rgba(30,34,96,0.45),0_0_25px_rgba(244,140,6,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-8px_rgba(30,34,96,0.55),0_0_35px_rgba(244,140,6,0.25)]">
            {/* Shimmer beam */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F48C06] via-[#FFD166] to-[#E85D04] bg-[length:200%_auto] animate-shimmer pointer-events-none" />

            <div className="relative z-10">
              <span className="text-xs font-bold text-[#FFD166] uppercase tracking-wider bg-[#F48C06]/25 px-3 py-1 rounded-full border border-[#F48C06]/40 inline-block mb-3">
                ⭐ All-In-One Value
              </span>
              <h3 className="font-serif font-bold text-2xl text-white">
                Sirf ₹99 Mein 100% Sateek Vedic Analysis
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-gray-200 leading-relaxed">
                Apne career, relationship ya financial doubt ko door karein. Sanjeev Kumar Pandey se directly one-to-one phone/video session par baat karein.
              </p>
            </div>

            <div className="relative z-10 mt-6 pt-4 border-t border-white/15 flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-400">Regular Fee:</span>
                <span className="line-through text-xs text-gray-400 ml-1">₹999</span>
                <div className="text-xl font-extrabold text-[#FFD166]">
                  Pay Only ₹99
                </div>
              </div>
              <span className="text-xs font-bold bg-gradient-to-r from-[#F48C06] to-[#E85D04] text-white px-3.5 py-1.5 rounded-lg shadow-sm">
                Save 90%
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
