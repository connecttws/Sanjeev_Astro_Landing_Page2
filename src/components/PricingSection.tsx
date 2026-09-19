"use client";

import { Check, ShieldCheck, Zap, ArrowRight } from "lucide-react";

interface PricingSectionProps {
  onBookClick: () => void;
}

export default function PricingSection({ onBookClick }: PricingSectionProps) {
  const points = [
    "One-to-one direct consultation session",
    "Multiple questions & concerns discuss karein (15 Mins)",
    "Personalised Vedic Astrology & Kundali analysis",
    "Career, marriage, love, business & life-related guidance",
    "Sateek dasha aur planetary remedy guidance",
  ];

  return (
    <section id="pricing" className="py-10 sm:py-14 bg-[#FFFDF9] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="section-eyebrow">
            <Zap className="w-3.5 h-3.5 text-[#E85D04]" />
            <span>Limited Period Offer • 90% Off</span>
          </div>
          <h2 className="text-[20px] min-[360px]:text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-serif font-extrabold text-[#0B132B] tracking-tight leading-tight">
            1-on-1 Personal Consultation —{" "}
            <span className="text-[#E85D04] relative inline-block">
              Sirf ₹99
              <span className="absolute -bottom-1.5 left-0 right-0 h-1 bg-[#F48C06]/35 rounded-full" />
            </span>
          </h2>
          <div className="heading-divider mb-2.5 sm:mb-3" />
          <p className="mt-2 sm:mt-3 text-xs min-[360px]:text-sm sm:text-base text-[#334155] leading-relaxed max-w-xl mx-auto">
            Agar aapke paas multiple questions hain ya situation ko detail mein discuss karna chahte hain, toh aaj hi book kijiye personal consultation.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="mt-6 sm:mt-8 relative rounded-3xl bg-gradient-to-b from-[#FFFDF9] to-[#FFF3E4] border-2 border-[#F48C06] p-4 sm:p-8 lg:p-10 shadow-2xl overflow-hidden">
          
          {/* Top Decorative Badge */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-[#F48C06] to-[#FF7700] text-white text-[10px] sm:text-xs font-extrabold px-3 sm:px-6 py-1 sm:py-1.5 rounded-bl-2xl shadow-md uppercase tracking-wider">
            ⭐ Most Recommended • 90% OFF
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center pt-4 sm:pt-0">
            
            {/* Left Col: Features */}
            <div className="md:col-span-7">
              <span className="text-[11px] sm:text-xs font-bold text-[#E85D04] uppercase tracking-wider bg-[#FFF3E4] border border-[#F48C06]/30 px-2.5 sm:px-3 py-1 rounded-md">
                15 Mins One-to-One Session
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-3xl text-[#0B132B] mt-2.5 sm:mt-3">
                Full Janma Kundali & Question Analysis
              </h3>
              <p className="text-xs sm:text-sm text-[#334155] mt-2 mb-4 sm:mb-5">
                Aapke exact birth time, date aur place ke according direct call par baatcheet.
              </p>

              <ul className="space-y-2.5 sm:space-y-3">
                {points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-[#0B132B] font-medium">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Col: Price & CTA */}
            <div className="md:col-span-5 flex flex-col items-center justify-center text-center bg-white/90 p-4 sm:p-8 rounded-2xl border border-[#F48C06]/30 shadow-inner w-full">
              <span className="text-xs text-[#334155] font-bold uppercase tracking-wider">
                Special Offer Price
              </span>

              <div className="flex items-baseline justify-center gap-3 my-3">
                <span className="text-4xl sm:text-5xl font-serif font-extrabold text-[#F48C06]">
                  ₹99
                </span>
                <span className="text-base sm:text-lg text-gray-400 line-through font-semibold">
                  ₹999
                </span>
              </div>

              <p className="text-xs text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full mb-5">
                🎉 Instant 90% Discount Applied
              </p>

              <button
                onClick={onBookClick}
                className="btn-shimmer w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#F48C06] via-[#FF7700] to-[#E85D04] hover:from-[#E85D04] hover:to-[#F48C06] text-white font-bold text-base py-3.5 px-6 rounded-xl shadow-lg shadow-[#F48C06]/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>BOOK YOUR CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-4 flex items-center gap-1.5 text-[11px] text-[#334155]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Confidential • Secure UPI & Card Payment</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
