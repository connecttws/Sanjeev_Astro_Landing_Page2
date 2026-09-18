"use client";

import { useState } from "react";
import {
  Briefcase,
  Heart,
  TrendingUp,
  Users,
  Compass,
  ArrowRight,
  HelpCircle,
  Sparkles,
} from "lucide-react";

interface QuestionsSectionProps {
  onSelectQuestion: (question: string, category: string) => void;
  onBookClick: () => void;
}

interface QuestionCategory {
  id: string;
  title: string;
  hindiTitle: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  badge: string;
  questions: string[];
}

const CATEGORIES: QuestionCategory[] = [
  {
    id: "career",
    title: "Career & Job",
    hindiTitle: "करियर और नौकरी",
    icon: Briefcase,
    color: "from-blue-500 to-indigo-600",
    badge: "High Growth",
    questions: [
      "Job switch karna chahiye ya nahi?",
      "Career mein growth kab hogi?",
      "New job opportunity ka time?",
      "Government job ke chances?",
      "Career direction ko lekar confusion?",
    ],
  },
  {
    id: "marriage",
    title: "Marriage & Love",
    hindiTitle: "विवाह और प्रेम",
    icon: Heart,
    color: "from-rose-500 to-pink-600",
    badge: "Relationship",
    questions: [
      "Shaadi mein delay kyun ho raha hai?",
      "Love marriage ya arranged marriage?",
      "Relationship ka future kya hai?",
      "Compatibility kaisi rahegi?",
      "Shaadi ko lekar confusion?",
    ],
  },
  {
    id: "business",
    title: "Business & Money",
    hindiTitle: "व्यापार और धन",
    icon: TrendingUp,
    color: "from-amber-500 to-orange-600",
    badge: "Financial",
    questions: [
      "Business start karna sahi rahega?",
      "Business mein growth kab hogi?",
      "Financial problems ka reason?",
      "Investment ya business decision ko lekar confusion?",
      "Paisa related challenges?",
    ],
  },
  {
    id: "family",
    title: "Family & Personal Life",
    hindiTitle: "परिवार और निजी जीवन",
    icon: Users,
    color: "from-emerald-500 to-teal-600",
    badge: "Harmony",
    questions: [
      "Family problems baar-baar kyun aa rahi hain?",
      "Family relationships ko lekar guidance",
      "Personal life mein confusion",
      "Important life decisions",
    ],
  },
  {
    id: "direction",
    title: "Life Direction",
    hindiTitle: "जीवन की सही दिशा",
    icon: Compass,
    color: "from-purple-500 to-violet-600",
    badge: "Future Path",
    questions: [
      "Career ya life mein direction nahi mil rahi?",
      "Baar-baar same problems kyun aa rahi hain?",
      "Life ka next phase kaisa ho sakta hai?",
      "Kisi important decision ko lekar confusion?",
    ],
  },
];

export default function QuestionsSection({
  onSelectQuestion,
  onBookClick,
}: QuestionsSectionProps) {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredCategories =
    activeTab === "all"
      ? CATEGORIES
      : CATEGORIES.filter((c) => c.id === activeTab);

  return (
    <section id="questions" className="py-16 sm:py-24 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#FFF3E4] border border-[#F48C06]/30 text-[#E85D04] px-4 py-1 rounded-full text-xs sm:text-sm font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Har Sawaal Ka Sateek Vedic Hal</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-[#1E2260] tracking-tight">
            Har Sawaal Ka Personalized Jawab
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#55597D]">
            Aapka sawaal chahe career, shaadi ya business se juda ho — Kundali ke
            graha-dasha ke aadhar par paiye sachha aur spasht uttar.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === "all"
                ? "bg-[#1E2260] text-white shadow-md shadow-[#1E2260]/20"
                : "bg-[#FFF3E4] text-[#2F327D] hover:bg-[#FBE0C7] border border-[#F48C06]/20"
            }`}
          >
            All Categories (5)
          </button>
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? "bg-[#F48C06] text-white shadow-md shadow-[#F48C06]/30"
                    : "bg-[#FFF3E4] text-[#2F327D] hover:bg-[#FBE0C7] border border-[#F48C06]/20"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="vedic-card rounded-2xl p-4 sm:p-6 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle top color gradient bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${cat.color}`}
                />

                <div>
                  {/* Category Title & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-[#FFF3E4] border border-[#F48C06]/30 flex items-center justify-center text-[#E85D04] group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-lg text-[#1E2260]">
                          {cat.title}
                        </h3>
                        <p className="text-xs text-[#E85D04] font-medium">
                          {cat.hindiTitle}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold bg-[#FBE0C7]/60 text-[#1E2260] px-2.5 py-0.5 rounded-full border border-[#F48C06]/20">
                      {cat.badge}
                    </span>
                  </div>

                  {/* Question Checklist (Clickable to prefill) */}
                  <ul className="space-y-2.5 mt-5">
                    {cat.questions.map((q, idx) => (
                      <li key={idx}>
                        <button
                          onClick={() => onSelectQuestion(q, cat.title)}
                          className="w-full text-left flex items-start gap-2.5 p-2 rounded-lg hover:bg-[#FFF3E4]/70 transition-colors group/item text-xs sm:text-sm text-[#3A3F6D] hover:text-[#1E2260] border border-transparent hover:border-[#F48C06]/20"
                          title="Click to ask this question in consultation"
                        >
                          <HelpCircle className="w-4 h-4 text-[#F48C06] shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                          <span className="flex-1 font-medium">{q}</span>
                          <span className="text-[#F48C06] opacity-0 group-hover/item:opacity-100 transition-opacity font-bold text-xs">
                            Ask →
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Card Action */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-[#55597D]">
                    15 Min 1-on-1 Guidance
                  </span>
                  <button
                    onClick={() =>
                      onSelectQuestion(cat.questions[0], cat.title)
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E85D04] hover:text-[#F48C06] transition-colors"
                  >
                    <span>Discuss This</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Helper Note */}
        <div className="mt-10 text-center">
          <p className="text-xs sm:text-sm text-[#55597D]">
            💡 <em>Tip: Kisi bhi question par click karke direct apna sawaal book kar sakte hain.</em>
          </p>
          <div className="mt-4">
            <button
              onClick={onBookClick}
              className="btn-shimmer inline-flex items-center gap-2 bg-[#F48C06] hover:bg-[#FF7700] text-white text-sm sm:text-base font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <span>Consult Sanjeev Kumar Pandey @ Just ₹99</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
