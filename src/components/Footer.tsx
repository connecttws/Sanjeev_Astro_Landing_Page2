"use client";

import Image from "next/image";
import { ShieldCheck, Lock, HeartHandshake } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#121538] text-gray-300 pt-10 sm:pt-12 pb-24 sm:pb-20 border-t border-[#F48C06]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Info Strip */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1E2260] border border-[#F48C06]/30 flex items-center justify-center">
                <Image
                  src="/chakra.svg"
                  alt="Chakra"
                  width={32}
                  height={32}
                  className="animate-spin-slow opacity-80"
                />
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-white">
                  Sanjeev Kumar Pandey
                </span>
                <p className="text-xs text-[#FFD166]">
                  Vedic Astrology Expert • 10+ Years Experience
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              Authentic Janma Kundali analysis and practical astrological guidance for career, marriage, relationships, business, and major life decisions.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider mb-3">
              Consultation Areas
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-400">
              <li>Career & Job Switch Guidance</li>
              <li>Marriage Timing & Kundali Milan</li>
              <li>Love Life & Relationship Compatibility</li>
              <li>Business Growth & Financial Decisions</li>
              <li>Family Peace & Life Direction</li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider mb-3">
              Trust & Security
            </h4>
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Private & Confidential 1-on-1 Sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#F48C06] shrink-0" />
                <span>256-Bit Encrypted Secure UPI / Card Checkout</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-[#FFD166] shrink-0" />
                <span>15,000+ Satisfied Clients Guided Across India</span>
              </div>
            </div>
          </div>

        </div>

        {/* Required Disclaimer Box */}
        <div className="my-8 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 text-[12px] sm:text-xs text-gray-300 leading-relaxed text-center sm:text-left">
          <p className="font-bold text-[#FFD166] mb-1">
            📜 Important Astrological Disclaimer:
          </p>
          <p>
            Astrological guidance is based on traditional Vedic Astrology practices and should be considered for personal guidance and reflection. It is not a substitute for professional medical, legal or financial advice.
          </p>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 pt-4 border-t border-white/5">
          <p>
            © {new Date().getFullYear()} Sanjeev Kumar Pandey. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
            <span>•</span>
            <a href="#pricing" className="hover:text-white transition-colors">
              Pricing Policy
            </a>
            <span>•</span>
            <a href="#topics" className="hover:text-white transition-colors">
              Consultation Topics
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
