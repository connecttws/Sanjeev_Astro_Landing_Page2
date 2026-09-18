"use client";

import {
  FileText,
  Target,
  HelpCircle,
  BookOpen,
  UserCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      num: "01",
      title: "Personalised Birth Chart Analysis",
      hindiTitle: "व्यक्तिगत जन्म पत्रिका विश्लेषण",
      desc: "Aapki birth details ke according astrological analysis aur grah-dasha ka parikshan.",
      icon: FileText,
      tag: "Deep Kundali Reading",
    },
    {
      num: "02",
      title: "Specific Answers",
      hindiTitle: "सटीक और स्पष्ट उत्तर",
      desc: "Aapke specific questions par focused aur clear Vedic guidance bina kisi ghumao-phirao ke.",
      icon: Target,
      tag: "Direct Clarity",
    },
    {
      num: "03",
      title: "Multiple Questions",
      hindiTitle: "15 मिनट में कई सवाल",
      desc: "₹99 consultation mein aap 15 Minutes tak apne multiple concerns aur questions discuss kar sakte hain.",
      icon: HelpCircle,
      tag: "15 Mins Duration",
    },
    {
      num: "04",
      title: "Easy-To-Understand Guidance",
      hindiTitle: "सरल भाषा में मार्गदर्शन",
      desc: "Complex astrological concepts aur planetary yogas ko aam bolchaal ki simple Hindi/English mein samjhaya jayega.",
      icon: BookOpen,
      tag: "Simple Language",
    },
    {
      num: "05",
      title: "Personal Attention",
      hindiTitle: "100% व्यक्तिगत ध्यान",
      desc: "One-to-one consultation ke through aapki situation ko individually aur privately discuss kiya jayega.",
      icon: UserCheck,
      tag: "1-on-1 Confidential",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FFF6EB] to-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#FFF3E4] border border-[#F48C06]/30 text-[#E85D04] px-4 py-1 rounded-full text-xs sm:text-sm font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consultation Deliverables</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-[#1E2260] tracking-tight">
            Aapko Kya Milega?
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#55597D]">
            ₹99 ki is special consultation mein aapko milegi aisi value jo aamtaur par hazaron rupaye ke sessions mein milti hai.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="vedic-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group hover:border-[#F48C06]/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif font-bold text-3xl text-[#F48C06]/40 group-hover:text-[#F48C06] transition-colors">
                      {b.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#FFF3E4] border border-[#F48C06]/30 flex items-center justify-center text-[#E85D04] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#1E2260]">
                    {b.title}
                  </h3>
                  <p className="text-xs text-[#E85D04] font-medium mt-0.5 mb-3">
                    {b.hindiTitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#55597D] leading-relaxed">
                    {b.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-[#1E2260]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{b.tag}</span>
                </div>
              </div>
            );
          })}

          {/* Quick Summary Promo Card in the 6th slot */}
          <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-[#1E2260] to-[#121538] text-white flex flex-col justify-between shadow-xl border border-[#F48C06]/30">
            <div>
              <span className="text-xs font-bold text-[#FFD166] uppercase tracking-wider bg-[#F48C06]/20 px-3 py-1 rounded-full border border-[#F48C06]/40 inline-block mb-3">
                All-In-One Value
              </span>
              <h3 className="font-serif font-bold text-2xl text-white">
                Sirf ₹99 Mein 100% Sateek Vedic Analysis
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-gray-300 leading-relaxed">
                Apne career, relationship ya financial doubt ko door karein. Sanjeev Kumar Pandey se directly one-to-one phone/video session par baat karein.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-400">Regular Fee:</span>
                <span className="line-through text-xs text-gray-400 ml-1">₹999</span>
                <div className="text-xl font-extrabold text-[#F48C06]">
                  Pay Only ₹99
                </div>
              </div>
              <span className="text-xs font-bold bg-[#F48C06] text-white px-3 py-1.5 rounded-lg shadow-sm">
                Save 90%
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
