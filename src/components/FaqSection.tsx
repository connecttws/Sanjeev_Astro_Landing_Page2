"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "₹99 Consultation Mein Kya Milega?",
      a: "₹99 mein aap apne question pooch sakte hain. Aapki birth details ke basis par us question par personalised astrological guidance di jayegi.",
    },
    {
      q: "₹99 Consultation Kitne Time Ki Hai?",
      a: "₹99 consultation 15 minutes ki hoti hai, jisme aap direct one-to-one baatcheet kar sakte hain.",
    },
    {
      q: "Kya ₹99 Mein Multiple Questions Pooch Sakte Hain?",
      a: "Haan, 15 Minutes consultation mein aap apne multiple questions aur different concerns discuss kar sakte hain.",
    },
    {
      q: "Consultation Ke Liye Kya Details Chahiye?",
      a: "Generally, Vedic Astrology consultation ke liye date of birth, exact birth time aur place of birth required hote hain. Agar time mein slight uncertainty ho toh Prashna Kundali se bhi guidance li ja sakti hai.",
    },
    {
      q: "Kya Main Career Ke Baare Mein Pooch Sakta Hoon?",
      a: "Haan, career, job switch, promotions, business aur professional life se related saare questions discuss kiye ja sakte hain.",
    },
    {
      q: "Kya Marriage Aur Love Life Ke Questions Pooch Sakta Hoon?",
      a: "Haan, marriage timing, delay reasons, love life, relationship compatibility aur married life se related questions bhi pooch sakte hain.",
    },
    {
      q: "Consultation Personal Hoti Hai?",
      a: "Haan, consultation 100% personal aur one-to-one hoti hai. Aapki privacy aur details bilkul confidential rakhi jaati hain.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-10 sm:py-14 bg-[#FFFDF9] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="section-eyebrow">
            <Sparkles className="w-3.5 h-3.5 text-[#E85D04]" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-serif font-extrabold text-[#0B132B] tracking-tight leading-tight">
            Frequently Asked{" "}
            <span className="text-[#E85D04] relative inline-block">
              Questions
              <span className="absolute -bottom-1.5 left-0 right-0 h-1 bg-[#F48C06]/35 rounded-full" />
            </span>
          </h2>
          <div className="heading-divider mb-3" />
          <p className="mt-3 text-sm sm:text-base text-[#334155] leading-relaxed max-w-xl mx-auto">
            ₹99 consultation se jude sabhi aam sawalon ke sateek aur spasht uttar yahan padhein.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-6 sm:mt-10 space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="vedic-card rounded-2xl overflow-hidden border border-[#F48C06]/20 transition-all duration-300"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#FFF3E4]/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#F48C06] shrink-0" />
                    <span className="font-serif font-bold text-base sm:text-lg text-[#0B132B]">
                      {faq.q}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#FFF3E4] flex items-center justify-center text-[#E85D04] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#F48C06] text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#334155] leading-relaxed border-t border-gray-100 bg-[#FFFDF9]/60">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
