"use client";

import { useState, useEffect, useRef } from "react";
import {
  CreditCard,
  CalendarCheck,
  MessageSquare,
  Compass,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Check,
  Zap,
} from "lucide-react";

interface ProcessSectionProps {
  onBookClick: () => void;
}

export default function ProcessSection({ onBookClick }: ProcessSectionProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      num: "01",
      title: "Book Your Consultation",
      hindi: "अपना स्लॉट बुक करें",
      desc: "₹99 de kar apna 1-on-1 Consultation slot book karein. Instant confirmation aur 100% secure payment.",
      icon: CreditCard,
      highlight: "Instant Booking",
      badge: "Step 1 • 25%",
    },
    {
      num: "02",
      title: "Share Your Details",
      hindi: "जन्म विवरण साझा करें",
      desc: "Apni basic birth details — Date, Time & Place of Birth — share karein taaki accurate chart ban sake.",
      icon: CalendarCheck,
      highlight: "Accurate Kundali",
      badge: "Step 2 • 50%",
    },
    {
      num: "03",
      title: "Discuss Your Questions",
      hindi: "अपने सवाल पूछें",
      desc: "Apne doubts aur questions 15 minutes consultation ke dauraan Pandit Sanjeev Pandey se directly discuss karein.",
      icon: MessageSquare,
      highlight: "Direct 1-on-1 Call",
      badge: "Step 3 • 75%",
    },
    {
      num: "04",
      title: "Get Personalised Guidance",
      hindi: "सटीक वैदिक समाधान पाएं",
      desc: "Aapki Kundali grah-dasha ke according realistic guidance aur practical remedies paaiye.",
      icon: Compass,
      highlight: "Practical Remedies",
      badge: "Step 4 • 100%",
    },
  ];

  // 1. Scroll-triggered step highlight using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: 0.2,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = stepRefs.current.findIndex((el) => el === entry.target);
          if (index !== -1) {
            setActiveStep(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // 2. Smooth auto-cycling of active steps when visible in viewport and not user-paused
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [isPaused, steps.length]);

  return (
    <section
      id="process"
      ref={sectionRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="py-10 sm:py-14 bg-[#FFFDF9] relative overflow-hidden"
    >
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[600px] h-96 sm:h-[600px] bg-[#F48C06]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="section-eyebrow">
            <Sparkles className="w-3.5 h-3.5 text-[#E85D04]" />
            <span>Simple 4-Step Process</span>
          </div>
          <h2 className="text-[20px] min-[360px]:text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-serif font-extrabold text-[#0B132B] tracking-tight leading-tight">
            Consultation Ka{" "}
            <span className="text-[#E85D04] relative inline-block">
              Saral Process
              <span className="absolute -bottom-1.5 left-0 right-0 h-1 bg-[#F48C06]/35 rounded-full" />
            </span>
          </h2>
          <div className="heading-divider mb-2.5 sm:mb-3" />
          <p className="mt-2 sm:mt-3 text-xs min-[360px]:text-sm sm:text-base text-[#334155] leading-relaxed max-w-xl mx-auto">
            Guidance paana behad aasan hai — bas in 4 saral steps ko follow karein.
          </p>
        </div>

        {/* ──────── Interactive Step Progression Tracker (Pill Bar) ──────── */}
        <div className="mt-7 max-w-2xl mx-auto">
          <div className="flex items-center justify-between gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-2xl bg-[#FFF3E4]/70 border border-[#F48C06]/30 shadow-xs">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPassed = activeStep > idx;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPaused(true);
                  }}
                  className={`flex-1 py-2 sm:py-2.5 px-2 rounded-xl text-center transition-all duration-300 cursor-pointer relative ${
                    isActive
                      ? "bg-gradient-to-r from-[#F48C06] to-[#E85D04] text-white shadow-md shadow-[#F48C06]/30 scale-[1.02]"
                      : isPassed
                      ? "bg-white text-[#0B132B] hover:bg-[#FFF9F2]"
                      : "bg-white/60 text-[#64748B] hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-center gap-1.5">
                    {isPassed ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 font-bold" />
                    ) : (
                      <span
                        className={`text-[11px] sm:text-xs font-black px-1.5 py-0.2 rounded-md ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-[#FFF3E4] text-[#E85D04]"
                        }`}
                      >
                        {step.num}
                      </span>
                    )}
                    <span className="text-[11px] sm:text-xs font-bold truncate hidden min-[440px]:inline">
                      {step.title.split(" ")[0]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ──────── 4 Steps Flow Cards (With Moving Beam & Highlight) ──────── */}
        <div className="mt-8 relative">
          
          {/* Desktop Behind-Cards Connecting Flow Line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-[#F48C06]/20 via-[#F48C06]/50 to-[#E85D04]/20 -translate-y-1/2 z-0 pointer-events-none rounded-full overflow-hidden">
            {/* Moving Light Pulse on the Track */}
            <div
              className="h-full bg-gradient-to-r from-transparent via-[#F48C06] to-transparent w-36 transition-all duration-700 ease-in-out"
              style={{
                transform: `translateX(${activeStep * 280}%)`,
              }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              const isPassed = activeStep > idx;

              return (
                <div
                  key={idx}
                  ref={(el) => {
                    stepRefs.current[idx] = el;
                  }}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPaused(true);
                  }}
                  className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-500 overflow-hidden flex flex-col justify-between ${
                    isActive
                      ? "bg-gradient-to-b from-white via-[#FFF9F2] to-[#FFF3E4] border-2 border-[#F48C06] ring-4 ring-[#F48C06]/25 shadow-2xl shadow-[#F48C06]/25 -translate-y-2"
                      : isPassed
                      ? "bg-white/95 border-2 border-[#F48C06]/40 shadow-md hover:-translate-y-1 hover:border-[#F48C06]"
                      : "bg-white/80 border-2 border-gray-200 shadow-sm hover:border-[#F48C06]/50 hover:-translate-y-1 opacity-90"
                  }`}
                >
                  {/* Moving / Shimmering Top Light Beam (Always on active card) */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F48C06] via-[#FFD166] to-[#E85D04] bg-[length:200%_auto] ${
                      isActive ? "animate-shimmer opacity-100" : "opacity-0"
                    } transition-opacity duration-300 pointer-events-none`}
                  />

                  {/* Corner Glow on Active */}
                  {isActive && (
                    <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#F48C06]/20 blur-2xl pointer-events-none animate-pulse" />
                  )}

                  <div className="relative z-10">
                    {/* Card Top Row: Step Badge & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-serif font-black text-xl px-3 py-1 rounded-xl shadow-xs transition-colors ${
                            isActive
                              ? "bg-[#E85D04] text-white ring-2 ring-[#F48C06]/40"
                              : isPassed
                              ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                              : "bg-[#FFF3E4] text-[#E85D04] border border-[#F48C06]/30"
                          }`}
                        >
                          {step.num}
                        </span>

                        {/* Active Beacon Pulse Dot */}
                        {isActive && (
                          <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F48C06] opacity-75" />
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E85D04]" />
                          </span>
                        )}
                      </div>

                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "bg-[#F48C06] text-white shadow-md shadow-[#F48C06]/40 scale-110"
                            : "bg-[#FFF3E4] border border-[#F48C06]/30 text-[#E85D04]"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Step Title & Hindi Subtitle */}
                    <h3
                      className={`font-serif font-bold text-lg transition-colors ${
                        isActive ? "text-[#E85D04]" : "text-[#0B132B]"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#E85D04] font-bold mt-0.5 mb-2.5">
                      {step.hindi}
                    </p>

                    <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Card Bottom: Status & Next Arrow Indicator */}
                  <div
                    className={`relative z-10 mt-5 pt-3 border-t flex items-center justify-between text-xs font-bold ${
                      isActive
                        ? "border-[#F48C06]/40 text-[#E85D04]"
                        : isPassed
                        ? "border-emerald-200 text-emerald-700"
                        : "border-gray-100 text-gray-500"
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      {isActive ? (
                        <>
                          <Zap className="w-3.5 h-3.5 text-[#F48C06] fill-[#F48C06]" />
                          <span>Active Step Now</span>
                        </>
                      ) : isPassed ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Completed</span>
                        </>
                      ) : (
                        <span>Step {idx + 1} of 4</span>
                      )}
                    </div>

                    {idx < steps.length - 1 && (
                      <div
                        className={`flex items-center gap-0.5 transition-transform duration-300 ${
                          isActive
                            ? "translate-x-1 text-[#E85D04]"
                            : "text-gray-300"
                        }`}
                      >
                        <span className="text-[10px]">Next</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Bar */}
        <div className="mt-8 sm:mt-10 text-center">
          <button
            onClick={onBookClick}
            className="btn-shimmer inline-flex items-center gap-2.5 bg-gradient-to-r from-[#F48C06] to-[#E85D04] hover:from-[#E85D04] hover:to-[#F48C06] text-white text-sm sm:text-base font-bold px-8 py-3.5 rounded-xl shadow-xl shadow-[#F48C06]/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>Start Step 01: Book Your Slot (₹99)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-[11px] sm:text-xs text-[#64748B] mt-2">
            ⚡ 100% Private & Confidential • Slot Confirmation in 2 Mins
          </p>
        </div>

      </div>
    </section>
  );
}
