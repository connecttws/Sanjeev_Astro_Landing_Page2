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
          <div className="inline-flex items-center gap-2 bg-[#FFF3E4] border border-[#F48C06]/30 text-[#E85D04] px-4 py-1 rounded-full text-xs sm:text-sm font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Scope of Consultation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-[#1E2260] tracking-tight">
            Aap Kis Topic Par Sawaal Pooch Sakte Hain?
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#55597D]">
            Apni Janma Kundali ke zariye kisi bhi important life area par personalized guidance lein.
          </p>
        </div>

        {/* 6 Topics Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {topics.map((topic, idx) => {
            const Icon = topic.icon;
            return (
              <div
                key={idx}
                onClick={() => onTopicSelect(topic.title)}
                className={`bg-gradient-to-br ${topic.color} border rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-2xl group-hover:scale-110 transition-transform border border-gray-100">
                      {topic.emoji}
                    </div>
                    <span className="text-xs font-bold text-[#E85D04] bg-white/90 border border-[#F48C06]/20 px-2.5 py-1 rounded-lg">
                      15 Min Slot
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-[#1E2260] group-hover:text-[#F48C06] transition-colors flex items-center gap-2">
                    <span>{topic.title}</span>
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm font-semibold text-[#1E2260]">
                    {topic.subheading}
                  </p>

                  <p className="mt-2 text-xs sm:text-sm text-[#55597D] leading-relaxed">
                    {topic.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#1E2260]">
                    Starts @ ₹99
                  </span>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F48C06] group-hover:translate-x-1 transition-transform">
                    <span>Consult on this</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
