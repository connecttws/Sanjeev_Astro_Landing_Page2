"use client";

import { Award, UserCheck, MessageSquareCheck, Sparkles, Check } from "lucide-react";

export default function WhySection() {
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

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FFF9F2] to-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="section-eyebrow">
            <Sparkles className="w-3.5 h-3.5 text-[#E85D04]" />
            <span>Trusted Vedic Astrologer</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-serif font-extrabold text-[#0B132B] tracking-tight leading-tight">
            Why Consult{" "}
            <span className="text-[#E85D04] relative inline-block">
              Sanjeev Kumar Pandey?
              <span className="absolute -bottom-1.5 left-0 right-0 h-1 bg-[#F48C06]/35 rounded-full" />
            </span>
          </h2>
          <div className="heading-divider mb-3" />
          <p className="mt-3 text-sm sm:text-base text-[#334155] leading-relaxed max-w-xl mx-auto">
            Authentic Vedic parampra aur modern practical remedies ka anokha sangam, jo aapke jeevan ko deta hai sateek disha.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="vedic-card rounded-2xl p-6 flex flex-col justify-between relative group hover:border-[#F48C06] transition-all overflow-hidden"
              >
                {/* Moving / Shimmering Top Light Beam */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F48C06] via-[#FFD166] to-[#E85D04] bg-[length:200%_auto] animate-shimmer pointer-events-none" />
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FFF3E4] border border-[#F48C06]/30 flex items-center justify-center text-[#E85D04] group-hover:scale-110 group-hover:bg-[#F48C06] group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-[#E85D04] bg-[#FBE0C7]/60 px-2.5 py-0.5 rounded-full">
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

                <div className="mt-6 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-[#0B132B]">
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
