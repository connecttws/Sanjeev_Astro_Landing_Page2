"use client";

import { useState, useEffect } from "react";
import {
  X,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Phone,
  User,
  HelpCircle,
  CreditCard,
  Lock,
} from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedQuestion?: string;
  selectedTopic?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  selectedQuestion = "",
  selectedTopic = "Career & Job",
}: BookingModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDetailsAvailability, setBirthDetailsAvailability] = useState("Yes, available");
  const [topic, setTopic] = useState(selectedTopic);
  const [question, setQuestion] = useState(selectedQuestion);
  const [timeSlot, setTimeSlot] = useState("Today Evening (6 PM - 8 PM)");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedQuestion) {
      setQuestion(selectedQuestion);
    }
    if (selectedTopic) {
      setTopic(selectedTopic);
    }
  }, [selectedQuestion, selectedTopic]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#FFFDF9] rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-[#F48C06]/40 overflow-hidden my-4 sm:my-6 max-h-[92dvh] flex flex-col">
        
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-[#1A1D47] via-[#1E2260] to-[#2D1B69] text-white p-4 sm:p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 text-gray-300 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 sm:p-2 rounded-full transition-colors"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 bg-[#F48C06]/30 border border-[#F48C06]/50 text-[#FFD166] text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full mb-1.5 sm:mb-2">
            <Sparkles className="w-3 h-3 text-[#F48C06]" />
            <span>One-to-One Vedic Consultation</span>
          </div>

          <h3 className="font-serif font-bold text-lg sm:text-2xl text-white">
            Book Your Session with Sanjeev Ji
          </h3>
          <p className="text-[11px] sm:text-xs text-gray-300 mt-0.5 sm:mt-1">
            Fill your details for Janma Kundali analysis • Fee: <strong className="text-[#F48C06]">₹99 Only</strong> (Was ₹999)
          </p>
        </div>

        {/* Modal Body - uses dynamic viewport height dvh */}
        <div className="p-4 sm:p-7 max-h-[calc(92dvh-120px)] overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif font-bold text-2xl text-[#0B132B]">
                Consultation Confirmed!
              </h4>
              <p className="text-sm text-[#334155] mt-2 max-w-sm mx-auto">
                Dhanyawaad, <strong>{name || "Seeker"}</strong>! Aapka ₹99 slot reserve kar liya gaya hai.
              </p>

              <div className="mt-6 bg-[#FFF3E4] border border-[#F48C06]/30 rounded-2xl p-4 text-left text-xs space-y-2 text-[#0B132B]">
                <p><strong>Topic:</strong> {topic}</p>
                <p><strong>Primary Sawaal:</strong> {question || "Janma Kundali Analysis"}</p>
                <p><strong>Birth Details:</strong> {birthDetailsAvailability}</p>
                <p><strong>Selected Slot:</strong> {timeSlot}</p>
                <p><strong>WhatsApp Phone:</strong> {phone}</p>
                <p className="text-[11px] text-[#E85D04] font-medium pt-2 border-t border-[#F48C06]/20">
                  ⚡ Acharya Sanjeev Kumar Pandey ki team aapko 15 minute ke andar WhatsApp par call timing aur session link send karegi.
                </p>
              </div>

              <button
                onClick={handleReset}
                className="mt-6 w-full bg-[#0B132B] hover:bg-[#1A254B] text-white font-bold py-3 px-6 rounded-xl transition-all"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Consultation Topic */}
              <div>
                <label className="block text-xs sm:text-[13px] font-bold text-[#0B132B] mb-1.5">
                  Consultation Topic
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full bg-[#FFF9F2] border border-[#F48C06]/30 rounded-xl px-3.5 py-2.5 text-sm text-[#0B132B] font-medium focus:ring-2 focus:ring-[#F48C06] focus:outline-none"
                >
                  <option value="Career & Job">💼 Career & Job Switch</option>
                  <option value="Marriage & Relationship">💍 Marriage & Kundali Milan</option>
                  <option value="Santan & Family">👶 Santan Prapti & Family</option>
                  <option value="Family & Personal Life">👨‍👩‍👦 Family Harmony & Relations</option>
                  <option value="Life Direction">🧭 Life Direction & Next Phase</option>
                </select>
              </div>

              {/* Main Question */}
              <div>
                <label className="block text-xs sm:text-[13px] font-bold text-[#0B132B] mb-1.5 flex items-center justify-between">
                  <span>Apna Mukhya Sawaal (Your Question)</span>
                  <span className="text-[11px] text-[#E85D04] font-normal">Optional / Can discuss live</span>
                </label>
                <div className="relative">
                  <HelpCircle className="w-4 h-4 text-[#F48C06] absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="E.g. Job switch kab karein? Ya Shaadi mein delay kyun?"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="w-full bg-[#FFF9F2] border border-[#F48C06]/30 rounded-xl pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-[#0B132B] placeholder:text-gray-400 focus:ring-2 focus:ring-[#F48C06] focus:outline-none"
                  />
                </div>
              </div>

              {/* Name & WhatsApp Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs sm:text-[13px] font-bold text-[#0B132B] mb-1.5">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#334155] absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Rahul Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#FFF9F2] border border-[#F48C06]/30 rounded-xl pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-[#0B132B] focus:ring-2 focus:ring-[#F48C06] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-[13px] font-bold text-[#0B132B] mb-1.5">
                    WhatsApp Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#334155] absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#FFF9F2] border border-[#F48C06]/30 rounded-xl pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-[#0B132B] focus:ring-2 focus:ring-[#F48C06] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Birth Details Availability Question */}
              <div>
                <label className="block text-xs sm:text-[13px] font-bold text-[#0B132B] mb-2">
                  Kya aapke paas apni exact birth details available hain? *
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    "Yes, available",
                    "Date & Place available, exact time nahi pata",
                    "I need to check",
                    "Not available",
                  ].map((option) => (
                    <label
                      key={option}
                      className={`flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm cursor-pointer transition-all ${
                        birthDetailsAvailability === option
                          ? "bg-[#FFF3E4] border-[#F48C06] text-[#0B132B] font-bold shadow-xs ring-1 ring-[#F48C06]/40"
                          : "bg-[#FFF9F2] border-[#F48C06]/20 text-[#334155] hover:bg-[#FFF5EA]"
                      }`}
                    >
                      <input
                        type="radio"
                        name="birthDetailsAvailability"
                        value={option}
                        checked={birthDetailsAvailability === option}
                        onChange={() => setBirthDetailsAvailability(option)}
                        className="w-4 h-4 accent-[#E85D04] cursor-pointer shrink-0"
                      />
                      <span className="leading-snug">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Preferred Slot Timing */}
              <div>
                <label className="block text-xs sm:text-[13px] font-bold text-[#0B132B] mb-1.5">
                  Preferred Time Slot
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    "Today Evening (6 PM - 8 PM)",
                    "Tomorrow Morning (10 AM - 12 PM)",
                    "Tomorrow Afternoon (2 PM - 5 PM)",
                    "Tomorrow Evening (6 PM - 9 PM)",
                  ].map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setTimeSlot(slot)}
                      className={`p-2 rounded-xl text-left font-medium border transition-all ${
                        timeSlot === slot
                          ? "bg-[#FFF3E4] border-[#F48C06] text-[#E85D04] font-bold shadow-sm"
                          : "bg-[#FFF9F2] border-gray-200 text-[#334155]"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Calculation Box */}
              <div className="bg-gradient-to-r from-[#FFFDF9] via-[#FFF6EB] to-[#FFF3E4] border border-[#F48C06]/35 rounded-xl sm:rounded-2xl p-3 min-[360px]:p-3.5 sm:p-4 shadow-xs">
                {/* Row 1: Fee Label & Trust Badge */}
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-xs sm:text-sm text-[#0B132B] font-bold">
                    1-on-1 Consultation Fee
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] min-[360px]:text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-2 py-0.5 rounded-full shrink-0">
                    <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span>Safe Checkout</span>
                  </span>
                </div>

                {/* Row 2: Price Details & Discount Badge */}
                <div className="flex items-center justify-between gap-2 pt-1.5 border-t border-[#F48C06]/15">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif font-black text-2xl sm:text-3xl text-[#E85D04] tracking-tight">
                      ₹99
                    </span>
                    <span className="line-through text-xs sm:text-sm text-gray-400 font-medium">
                      ₹999
                    </span>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] min-[360px]:text-[11px] font-bold px-2 py-0.5 rounded-md border border-emerald-200 shrink-0">
                    Save ₹900 (90% OFF)
                  </span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-shimmer w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#F48C06] via-[#FF7700] to-[#E85D04] hover:from-[#E85D04] hover:to-[#F48C06] text-white font-bold text-base py-3.5 rounded-xl shadow-lg shadow-[#F48C06]/30 hover:scale-[1.01] active:scale-98 transition-all cursor-pointer disabled:opacity-70"
              >
                <CreditCard className="w-5 h-5" />
                <span>
                  {isSubmitting
                    ? "Reserving Slot..."
                    : "Confirm & Pay ₹99 on WhatsApp/UPI"}
                </span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#334155]">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Your birth details are 100% confidential and safe</span>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
