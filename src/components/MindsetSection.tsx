"use client";

import { XCircle, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

interface MindsetSectionProps {
  onBookClick: () => void;
}

export default function MindsetSection({ onBookClick }: MindsetSectionProps) {
  return (
    <section className="py-10 sm:py-14 bg-gradient-to-b from-[#FFFDF9] via-[#FFF5E8] to-[#FFFDF9] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="section-eyebrow">
            <Sparkles className="w-3.5 h-3.5 text-[#E85D04]" />
            <span>Personalized vs Generic</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-serif font-extrabold text-[#0B132B] tracking-tight leading-tight">
            Aapko Generic Horoscope Nahi... <br className="hidden sm:inline" />
            <span className="text-[#E85D04]">Apne Questions Ke Sateek Answers Chahiye.</span>
          </h2>
          <div className="heading-divider mb-3" />
          <p className="mt-3 text-sm sm:text-base text-[#334155] max-w-2xl mx-auto leading-relaxed">
            Har insaan ki birth details alag hoti hain. Isliye aapki situation ko samajhne ke liye personalised consultation zyada relevant ho sakti hai compared to generic daily/monthly horoscope content.
          </p>
        </div>

        {/* 2-Col Comparison Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Generic Horoscope */}
          <div className="bg-white/70 border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 font-bold">
                ✕
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-gray-700">
                  Generic Daily / Monthly Horoscope
                </h3>
                <p className="text-xs text-gray-400 font-medium">
                  Aam Rashifal & YouTube Forecasts
                </p>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-gray-600">
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Kewal sun sign ya rashi par based jo hazaron logon ke liye same hota hai.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Aapke specific sawaal ka koi direct jawab nahi milta.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Birth time, lagna aur running dasha ko consider nahi kiya jata.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Koi one-to-one baatcheet ya personal guidance nahi milti.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Sanjeev's Personal Vedic Consultation */}
          <div className="bg-gradient-to-b from-[#FFFDF9] to-[#FFF3E4] border-2 border-[#F48C06] rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#F48C06] text-white text-[11px] font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider">
              Recommended
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#FFF3E4] border border-[#F48C06]/40 flex items-center justify-center text-[#E85D04] font-bold">
                ✓
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-[#0B132B]">
                  Personalised Vedic Consultation
                </h3>
                <p className="text-xs text-[#E85D04] font-medium">
                  With Sanjeev Kumar Pandey (@ ₹99)
                </p>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-[#0B132B] font-medium">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Aapki exact date, birth time aur city ke aadhar par Kundali analysis.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Aapke specific question (Career, Shaadi, Paisa) par focused sateek uttar.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>15 Minutes one-to-one direct call par confidential baatcheet.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Aam bolchaal ki saral bhasha mein practical remedies aur margdarshan.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Central Closing Tagline Banner */}
        <div className="mt-12 text-center bg-gradient-to-r from-[#121538] via-[#1A1D47] to-[#121538] text-white rounded-3xl p-8 sm:p-10 shadow-2xl border-2 border-[#F48C06]/40">
          <p className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#FFD166] tracking-tight drop-shadow-sm">
            Apna Question Lekar Aaiye. Guidance Ke Saath Wapas Jaiye.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#FFD166] to-[#F48C06] rounded-full mx-auto my-3.5" />
          <p className="mt-2 text-sm sm:text-base text-gray-200">
            Consultation starting at just ₹99 for a limited number of slots today.
          </p>
          <div className="mt-6">
            <button
              onClick={onBookClick}
              className="btn-shimmer inline-flex items-center gap-2 bg-[#F48C06] hover:bg-[#FF7700] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <span>Book Your Consultation Slot (₹99)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
