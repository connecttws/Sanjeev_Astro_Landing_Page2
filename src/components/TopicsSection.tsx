"use client";

import {
  Heart,
  Gem,
  Briefcase,
  Coins,
  Users,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface TopicsSectionProps {
  onTopicSelect: (topic: string) => void;
}

export default function TopicsSection({ onTopicSelect }: TopicsSectionProps) {
  const topics = [
    {
      title: "Love & Relationship",
      emoji: "❤️",
      icon: Heart,
      subheading: "Relationship ko lekar confusion hai?",
      desc: "Compatibility, relationship aur love life se related apne questions poochiye.",
      color: "from-rose-500/10 to-pink-500/10 border-rose-200 hover:border-rose-400",
      accent: "text-rose-600",
    },
    {
      title: "Marriage",
      emoji: "💍",
      icon: Gem,
      subheading: "Shaadi ko lekar questions hain?",
      desc: "Marriage timing, relationship aur married life se related guidance paaiye.",
      color: "from-amber-500/10 to-orange-500/10 border-amber-200 hover:border-amber-400",
      accent: "text-amber-600",
    },
    {
      title: "Career & Job",
      emoji: "💼",
      icon: Briefcase,
      subheading: "Career mein confusion hai?",
      desc: "Job change, career growth, new opportunities aur professional life se related questions discuss karein.",
      color: "from-blue-500/10 to-indigo-500/10 border-blue-200 hover:border-blue-400",
      accent: "text-blue-600",
    },
    {
      title: "Business & Money",
      emoji: "💰",
      icon: Coins,
      subheading: "Business ya finances ko lekar decision nahi le paa rahe?",
      desc: "Business, career growth aur financial matters se related astrological guidance lein.",
      color: "from-emerald-500/10 to-teal-500/10 border-emerald-200 hover:border-emerald-400",
      accent: "text-emerald-600",
    },
    {
      title: "Family",
      emoji: "👨‍👩‍👦",
      icon: Users,
      subheading: "Family aur personal relationships se related concerns?",
      desc: "Family aur personal relationships se related concerns ko detail mein discuss karein.",
      color: "from-violet-500/10 to-purple-500/10 border-violet-200 hover:border-violet-400",
      accent: "text-violet-600",
    },
    {
      title: "Life & Future",
      emoji: "🔮",
      icon: Sparkles,
      subheading: "Life ke important decisions aur future ko lekar questions hain?",
      desc: "Apni birth chart ke basis par astrological insights aur sahi samay samajhiye.",
      color: "from-orange-500/10 to-yellow-500/10 border-orange-200 hover:border-orange-400",
      accent: "text-orange-600",
    },
  ];

  return (
    <section id="topics" className="py-16 sm:py-24 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="section-eyebrow">
            <Sparkles className="w-3.5 h-3.5 text-[#E85D04]" />
            <span>Scope of Consultation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-serif font-extrabold text-[#0B132B] tracking-tight leading-tight">
            Aap Kis Topic Par{" "}
            <span className="text-[#E85D04] relative inline-block">
              Sawaal Pooch Sakte Hain?
              <span className="absolute -bottom-1.5 left-0 right-0 h-1 bg-[#F48C06]/35 rounded-full" />
            </span>
          </h2>
          <div className="heading-divider mb-3" />
          <p className="mt-3 text-sm sm:text-base text-[#334155] leading-relaxed max-w-xl mx-auto">
            Apni Janma Kundali ke zariye kisi bhi important life area par personalized guidance lein.
          </p>
        </div>

        {/* 6 Topics Grid — 3D Elevated Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {topics.map((topic, idx) => {
            const Icon = topic.icon;
            return (
              <div
                key={idx}
                onClick={() => onTopicSelect(topic.title)}
                className="card-3d-orange p-6 sm:p-7 flex flex-col justify-between cursor-pointer group"
              >
                {/* Moving / Shimmering Top Light Beam */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F48C06] via-[#FFD166] to-[#E85D04] bg-[length:200%_auto] animate-shimmer pointer-events-none" />

                {/* Subtle Ambient Radial Glow */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#F48C06]/10 blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-2xl group-hover:scale-110 transition-transform border border-[#F48C06]/30 ring-2 ring-[#F48C06]/20">
                      {topic.emoji}
                    </div>
                    <span className="text-xs font-bold text-[#E85D04] bg-[#FFF3E4] border border-[#F48C06]/30 px-2.5 py-1 rounded-lg shadow-xs">
                      15 Min Slot
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-[#0B132B] group-hover:text-[#E85D04] transition-colors flex items-center gap-2">
                    <span>{topic.title}</span>
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm font-semibold text-[#0B132B]">
                    {topic.subheading}
                  </p>

                  <p className="mt-2 text-xs sm:text-sm text-[#334155] leading-relaxed">
                    {topic.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-[#F48C06]/20 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0B132B]">
                    Starts @ <strong className="text-[#F48C06] font-extrabold text-sm">₹99</strong>
                  </span>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#FFF3E4] text-[#E85D04] border border-[#F48C06]/30 px-3 py-1 rounded-lg group-hover:bg-[#F48C06] group-hover:text-white transition-all shadow-xs">
                    <span>Consult on this</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
