"use client";

import { useState } from "react";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuestionsSection from "@/components/QuestionsSection";
import TransitionBanner from "@/components/TransitionBanner";
import WhySection from "@/components/WhySection";
import TopicsSection from "@/components/TopicsSection";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import AstrologerProfile from "@/components/AstrologerProfile";
import ProcessSection from "@/components/ProcessSection";
import MindsetSection from "@/components/MindsetSection";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import StickyBottomBar from "@/components/StickyBottomBar";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState("Career & Job");
  const [modalQuestion, setModalQuestion] = useState("");

  const handleOpenModal = (topic = "Career & Job", question = "") => {
    setModalTopic(topic);
    setModalQuestion(question);
    setIsModalOpen(true);
  };

  const handleSelectQuestion = (question: string, category: string) => {
    handleOpenModal(category, question);
  };

  const handleTopicSelect = (topic: string) => {
    handleOpenModal(topic, "");
  };

  return (
    <main className="relative w-full min-h-[100dvh] overflow-x-hidden bg-[#FFFDF9] text-[#0B132B]">
      {/* 1. Urgency Notice Top Strip */}
      <TopBanner onBookClick={() => handleOpenModal()} />

      {/* 2. Main Navigation Header */}
      <Navbar onBookClick={() => handleOpenModal()} />

      {/* 3. Hero Section (AstroLearn / Vaibhav Gupta aesthetic with rotating chakra) */}
      <Hero onBookClick={() => handleOpenModal()} />

      {/* 4. Har Sawaal Ka Personalized Jawab (Questions Explorer) */}
      <QuestionsSection
        onSelectQuestion={handleSelectQuestion}
        onBookClick={() => handleOpenModal()}
      />

      {/* 5. Emotional Transition Banner (Medium-Dark Indigo Contrast) */}
      <TransitionBanner onBookClick={() => handleOpenModal()} />

      {/* 6. Why Consult Sanjeev Kumar Pandey? */}
      <WhySection />

      {/* 7. Aap Kis Topic Par Sawaal Pooch Sakte Hain? */}
      <TopicsSection onTopicSelect={handleTopicSelect} />

      {/* 8. Aapko Kya Milega? (5 Core Deliverables) */}
      <BenefitsSection />

      {/* 9. Featured ₹99 Pricing Card */}
      <PricingSection onBookClick={() => handleOpenModal()} />

      {/* 10. Meet Sanjeev Kumar Pandey (Deep Indigo Spotlight) */}
      <AstrologerProfile onBookClick={() => handleOpenModal()} />

      {/* 11. Consultation Ka Process (01 - 04 Step Flow) */}
      <ProcessSection onBookClick={() => handleOpenModal()} />

      {/* 12. Mindset Comparison: Generic Horoscope vs Personalized Consultation */}
      <MindsetSection onBookClick={() => handleOpenModal()} />

      {/* 13. Frequently Asked Questions (Accordion) */}
      <FaqSection />

      {/* 14. Final Call To Action Banner */}
      <FinalCta onBookClick={() => handleOpenModal()} />

      {/* 15. Trust Footer with Mandatory Vedic Disclaimer */}
      <Footer />

      {/* 16. Sticky Conversion Bottom Bar (Desktop & Mobile) */}
      <StickyBottomBar onBookClick={() => handleOpenModal()} />

      {/* 17. Interactive Booking Dialog Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedTopic={modalTopic}
        selectedQuestion={modalQuestion}
      />
    </main>
  );
}
