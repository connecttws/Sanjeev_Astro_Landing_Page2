"use client";

import { useState } from "react";
import {
  Briefcase,
  Heart,
  TrendingUp,
  Compass,
  ArrowRight,
  HelpCircle,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface QuestionsSectionProps {
  onSelectQuestion: (question: string, category: string) => void;
  onBookClick: () => void;
}

interface QuestionCategory {
  id: string;
  title: string;
  hindiTitle: string;
  badge: string;
  badgeColor: string;
  icon: React.ComponentType<{ className?: string }>;
  iconGradient: string;
  cardBg: string;
  cardBorder: string;
  glowHover: string;
  topGradient: string;
  questions: string[];
}

const CATEGORIES: QuestionCategory[] = [
  {
    id: "career",
    title: "Career & Job",
    hindiTitle: "करियर, नौकरी और प्रमोशन",
    badge: "High Growth",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200/80",
    icon: Briefcase,
    iconGradient: "from-blue-600 via-indigo-600 to-blue-700 text-white shadow-blue-500/25",
    cardBg: "bg-gradient-to-br from-white via-[#F8FAFF] to-[#EFF6FF]/50",
    cardBorder: "border-blue-100/80 hover:border-blue-300",
    glowHover: "hover:shadow-blue-500/10",
    topGradient: "from-blue-500 via-indigo-500 to-blue-600",
    questions: [
      "Job switch karna chahiye ya nahi?",
      "Career mein growth aur promotion kab hogi?",
      "Nayi job opportunity ka sahi samay kab aayega?",
    ],
  },
  {
    id: "marriage",
    title: "Marriage & Love",
    hindiTitle: "विवाह, रिश्ता और प्रेम",
    badge: "Most Consulted",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200/80",
    icon: Heart,
    iconGradient: "from-rose-500 via-pink-600 to-rose-600 text-white shadow-rose-500/25",
    cardBg: "bg-gradient-to-br from-white via-[#FFF5F7] to-[#FFF1F2]/50",
    cardBorder: "border-rose-100/80 hover:border-rose-300",
    glowHover: "hover:shadow-rose-500/10",
    topGradient: "from-rose-500 via-pink-500 to-rose-600",
    questions: [
      "Shaadi mein delay kyun ho raha hai aur kab tak yog banega?",
      "Love marriage hogi ya arranged marriage?",
      "Relationship aur compatibility kaisi rahegi?",
    ],
  },
  {
    id: "business",
    title: "Business & Money",
    hindiTitle: "व्यापार, धन और निवेश",
    badge: "Financial Yog",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200/80",
    icon: TrendingUp,
    iconGradient: "from-amber-500 via-orange-500 to-amber-600 text-white shadow-amber-500/25",
    cardBg: "bg-gradient-to-br from-white via-[#FFFDF5] to-[#FEF3C7]/40",
    cardBorder: "border-amber-100/80 hover:border-amber-300",
    glowHover: "hover:shadow-amber-500/10",
    topGradient: "from-amber-500 via-orange-500 to-amber-600",
    questions: [
      "Naya business start karna ya invest karna sahi rahega?",
      "Business mein profit aur growth kab hogi?",
      "Financial stability aur karz se rahat kab milegi?",
    ],
  },
  {
    id: "direction",
    title: "Life Direction & Peace",
    hindiTitle: "जीवन मार्गदर्शन और मानसिक शांति",
    badge: "Clarity & Peace",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200/80",
    icon: Compass,
    iconGradient: "from-purple-600 via-violet-600 to-purple-700 text-white shadow-purple-500/25",
    cardBg: "bg-gradient-to-br from-white via-[#FAF7FF] to-[#F3E8FF]/40",
    cardBorder: "border-purple-100/80 hover:border-purple-300",
    glowHover: "hover:shadow-purple-500/10",
    topGradient: "from-purple-500 via-violet-500 to-purple-600",
    questions: [
      "Life aur career ke important decisions mein confusion?",
      "Life ka agla daur kaisa rahega?",
      "Family problems aur mansik shanti ke saral upaay?",
    ],
  },
];

export default function QuestionsSection({
  onSelectQuestion,
  onBookClick,
}: QuestionsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % CATEGORIES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + CATEGORIES.length) % CATEGORIES.length);
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
    <section id="questions" className="py-8 sm:py-12 bg-[#FFFDF9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="section-eyebrow">
            <Sparkles className="w-3.5 h-3.5 text-[#E85D04]" />
            <span>Sateek Kundali Vishleshan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-serif font-extrabold text-[#0B132B] tracking-tight leading-tight">
            Har Sawaal Ka{" "}
            <span className="text-[#E85D04] relative inline-block">
              Personalized Jawab
              <span className="absolute -bottom-1.5 left-0 right-0 h-1 bg-[#F48C06]/35 rounded-full" />
            </span>
          </h2>
          <div className="heading-divider mb-3" />
          <p className="mt-3 text-sm sm:text-base text-[#334155] leading-relaxed">
            Aapka sawaal chahe career, shaadi ya business se juda ho — Janma Kundali ke graha-dasha ke aadhar par paiye spasht uttar.
          </p>
        </div>

        {/* ──────── Mobile View: Interactive Touch Carousel with Downside Arrows (< md) ──────── */}
        <div className="md:hidden mt-6">
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
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                return (
                  <div key={cat.id} className="w-full shrink-0 px-1">
                    <div className="card-3d-orange p-5 flex flex-col justify-between group min-h-[380px]">
                      {/* Moving / Shimmering Top Light Beam */}
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F48C06] via-[#FFD166] to-[#E85D04] bg-[length:200%_auto] animate-shimmer pointer-events-none" />

                      {/* Subtle Ambient Radial Glow */}
                      <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-gradient-to-br from-[#F48C06]/15 via-[#FFD166]/10 to-transparent blur-2xl pointer-events-none" />

                      <div className="relative z-10">
                        {/* Category Header Row */}
                        <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[#F48C06]/20">
                          <div className="flex items-center gap-3 min-w-0">
                            <div
                              className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.iconGradient} flex items-center justify-center shadow-lg ring-2 ring-[#F48C06]/35 shrink-0`}
                            >
                              <Icon className="w-6 h-6" />
                            </div>
                            <div className="min-w-0">
                              <h3 className="font-serif font-extrabold text-lg text-[#0B132B] tracking-tight truncate">
                                {cat.title}
                              </h3>
                              <p className="text-xs text-[#E85D04] font-bold mt-0.5 truncate">
                                {cat.hindiTitle}
                              </p>
                            </div>
                          </div>

                          {/* Category Pill Badge */}
                          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#F48C06]/30 bg-gradient-to-r from-[#FFF3E4] to-[#FFE8CC] text-[#C2410C] shadow-xs shrink-0 flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5 text-[#E85D04]" />
                            <span>{cat.badge}</span>
                          </span>
                        </div>

                        {/* Question Checklist Items — Tactile 3D Buttons */}
                        <ul className="space-y-2.5">
                          {cat.questions.map((q, idx) => (
                            <li key={idx}>
                              <button
                                onClick={() => onSelectQuestion(q, cat.title)}
                                className="w-full text-left flex items-center justify-between gap-2.5 p-3 rounded-xl bg-white hover:bg-[#FFF9F2] border-2 border-[#F48C06]/30 hover:border-[#F48C06] shadow-[0_3px_10px_-2px_rgba(244,140,6,0.10)] active:scale-[0.98] transition-all duration-200 group/item cursor-pointer"
                                title="Click to ask this question"
                              >
                                <div className="flex items-center gap-2.5 min-w-0">
                                  <div className="w-5 h-5 rounded-full bg-[#FFF3E4] border border-[#F48C06]/35 flex items-center justify-center shrink-0 text-[#E85D04]">
                                    <HelpCircle className="w-3 h-3" />
                                  </div>
                                  <span className="font-medium text-xs text-[#0B132B] line-clamp-2">
                                    {q}
                                  </span>
                                </div>
                                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-white shrink-0 bg-gradient-to-r from-[#F48C06] to-[#E85D04] px-2 py-1 rounded-md shadow-xs">
                                  <span>Poochiye</span>
                                  <ArrowRight className="w-2.5 h-2.5" />
                                </span>
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Card Footer Pill Hint */}
                      <div className="relative z-10 mt-4 pt-2.5 border-t border-[#F48C06]/15 flex items-center justify-between text-[11px] text-[#E85D04] font-semibold">
                        <span>Category {currentIndex + 1} of {CATEGORIES.length}</span>
                        <span className="text-gray-400 font-normal">Swipe for more →</span>
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
              aria-label="Previous Category"
              className="w-11 h-11 rounded-full bg-white border-2 border-[#F48C06]/40 hover:border-[#F48C06] text-[#E85D04] hover:bg-[#FFF3E4] shadow-md flex items-center justify-center active:scale-90 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots indicator */}
            <div className="flex items-center gap-2">
              {CATEGORIES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to category ${idx + 1}`}
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
              aria-label="Next Category"
              className="w-11 h-11 rounded-full bg-white border-2 border-[#F48C06]/40 hover:border-[#F48C06] text-[#E85D04] hover:bg-[#FFF3E4] shadow-md flex items-center justify-center active:scale-90 transition-all cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* ──────── Desktop View: Responsive 2x2 Grid (md: and above) ──────── */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 sm:gap-7 mt-6 sm:mt-8">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="card-3d-orange p-5 sm:p-7 flex flex-col justify-between group"
              >
                {/* Moving / Shimmering Top Light Beam */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F48C06] via-[#FFD166] to-[#E85D04] bg-[length:200%_auto] animate-shimmer pointer-events-none" />

                {/* Subtle Ambient Radial Glow */}
                <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-gradient-to-br from-[#F48C06]/15 via-[#FFD166]/10 to-transparent blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

                <div className="relative z-10">
                  {/* Category Header Row */}
                  <div className="flex items-center justify-between gap-3 mb-5 pb-3.5 border-b border-[#F48C06]/20">
                    <div className="flex items-center gap-3.5 min-w-0">
                      {/* Gradient Icon Badge with Orange 3D Ring */}
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${cat.iconGradient} flex items-center justify-center shadow-lg ring-2 ring-[#F48C06]/35 group-hover:scale-105 group-hover:rotate-2 transition-all duration-300 shrink-0`}
                      >
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-serif font-extrabold text-lg sm:text-xl text-[#0B132B] tracking-tight truncate">
                          {cat.title}
                        </h3>
                        <p className="text-xs text-[#E85D04] font-bold mt-0.5 truncate">
                          {cat.hindiTitle}
                        </p>
                      </div>
                    </div>

                    {/* Category Pill Badge */}
                    <span
                      className="text-[11px] font-bold px-3 py-1 rounded-full border border-[#F48C06]/30 bg-gradient-to-r from-[#FFF3E4] to-[#FFE8CC] text-[#C2410C] shadow-xs shrink-0 flex items-center gap-1"
                    >
                      <Sparkles className="w-2.5 h-2.5 text-[#E85D04]" />
                      <span>{cat.badge}</span>
                    </span>
                  </div>

                  {/* Question Checklist Items — Tactile 3D Buttons */}
                  <ul className="space-y-2.5">
                    {cat.questions.map((q, idx) => (
                      <li key={idx}>
                        <button
                          onClick={() => onSelectQuestion(q, cat.title)}
                          className="w-full text-left flex items-center justify-between gap-3 p-3 sm:p-3.5 rounded-xl bg-white hover:bg-[#FFF9F2] border-2 border-[#F48C06]/30 hover:border-[#F48C06] shadow-[0_3px_10px_-2px_rgba(244,140,6,0.10)] hover:shadow-[0_8px_20px_-4px_rgba(244,140,6,0.22)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 group/item cursor-pointer"
                          title="Click to ask this question"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-6 h-6 rounded-full bg-[#FFF3E4] border border-[#F48C06]/35 flex items-center justify-center shrink-0 group-hover/item:scale-110 group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-all text-[#E85D04]">
                              <HelpCircle className="w-3.5 h-3.5" />
                            </div>
                            <span className="font-medium text-xs sm:text-sm text-[#0B132B] group-hover/item:text-[#E85D04] transition-colors line-clamp-2 sm:line-clamp-none">
                              {q}
                            </span>
                          </div>
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-white shrink-0 bg-gradient-to-r from-[#F48C06] to-[#E85D04] px-2.5 py-1 rounded-lg shadow-xs group-hover/item:shadow-sm group-hover/item:scale-105 transition-all duration-200">
                            <span>Poochiye</span>
                            <ArrowRight className="w-3 h-3 group-hover/item:translate-x-0.5 transition-transform" />
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact Bottom CTA */}
        <div className="mt-8 sm:mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
          <p className="text-xs sm:text-sm text-[#334155] font-medium">
            💡 Kisi bhi sawaal par click karke direct apna personalized session book karein.
          </p>
          <button
            onClick={onBookClick}
            className="btn-shimmer inline-flex items-center gap-2 bg-gradient-to-r from-[#F48C06] via-[#FF7700] to-[#E85D04] hover:from-[#E85D04] hover:to-[#F48C06] text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-xl shadow-md shadow-[#F48C06]/25 hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
          >
            <span>Consult Sanjeev Kumar Pandey @ ₹99</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
