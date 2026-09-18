"use client";

import { CreditCard, CalendarCheck, MessageSquare, Compass, Sparkles, ArrowRight } from "lucide-react";

interface ProcessSectionProps {
  onBookClick: () => void;
}

export default function ProcessSection({ onBookClick }: ProcessSectionProps) {
  const steps = [
    {
      num: "01",
      title: "Book Your Consultation",
      hindi: "अपना स्लॉट बुक करें",
      desc: "₹99 de kar apna Consultation slot book karein. Quick & 100% secure payment.",
      icon: CreditCard,
    },
    {
      num: "02",
      title: "Share Your Details",
      hindi: "जन्म विवरण साझा करें",
      desc: "Apni basic birth details — Date, Time & Place of Birth — share karein.",
      icon: CalendarCheck,
    },
    {
      num: "03",
      title: "Discuss Your Questions",
      hindi: "अपने सवाल पूछें",
      desc: "Apne questions aur concerns 15 minutes consultation ke during directly discuss karein.",
      icon: MessageSquare,
    },
    {
      num: "04",
      title: "Get Personalised Guidance",
      hindi: "सटीक वैदिक समाधान पाएं",
      desc: "Aapki birth details aur questions ke basis par Vedic Astrology insights aur remedies paaiye.",
      icon: Compass,
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-24 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#FFF3E4] border border-[#F48C06]/30 text-[#E85D04] px-4 py-1 rounded-full text-xs sm:text-sm font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simple 4-Step Process</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-[#1E2260] tracking-tight">
            Consultation Ka Process
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#55597D]">
            Guidance paana behad aasan hai — bas in 4 saral steps ko follow karein.
          </p>
        </div>

        {/* 4 Steps Flow */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="vedic-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative group hover:border-[#F48C06] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif font-extrabold text-2xl text-[#F48C06] bg-[#FFF3E4] border border-[#F48C06]/30 px-3 py-1 rounded-xl">
                      {step.num}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-[#FFF9F2] border border-[#F48C06]/20 flex items-center justify-center text-[#E85D04] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-[#1E2260]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#E85D04] font-medium mb-3">
                    {step.hindi}
                  </p>

                  <p className="text-xs sm:text-sm text-[#55597D] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs text-[#E85D04] font-semibold">
                  <span>Step {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="mt-12 text-center">
          <button
            onClick={onBookClick}
            className="btn-shimmer inline-flex items-center gap-2 bg-[#F48C06] hover:bg-[#FF7700] text-white text-sm sm:text-base font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            <span>Start Step 01: Book Your Slot (₹99)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
