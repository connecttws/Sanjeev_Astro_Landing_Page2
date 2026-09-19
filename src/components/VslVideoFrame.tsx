"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  X,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

interface VslVideoFrameProps {
  onBookClick: () => void;
  className?: string;
}

export default function VslVideoFrame({
  onBookClick,
  className = "",
}: VslVideoFrameProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(28); // simulated starting progress

  // Simulate video playback progress when modal is open
  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 800);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  const handleOpen = () => {
    setIsOpen(true);
    setIsPlaying(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsPlaying(false);
  };

  return (
    <>
      {/* ──────── VSL Video Frame Trigger Card ──────── */}
      <div className={`relative w-full ${className}`}>
        {/* Outer Radiant Glow */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#F48C06]/30 via-[#FFD166]/20 to-[#E85D04]/30 blur-xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity" />

        {/* Video Player Card Shell */}
        <div
          onClick={handleOpen}
          className="relative w-full aspect-video rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#121538] via-[#1E2260] to-[#0A0D28] border-2 border-[#F48C06]/45 shadow-2xl shadow-[#F48C06]/20 overflow-hidden cursor-pointer group select-none flex flex-col justify-between"
        >
          {/* Top Moving Shimmer Beam */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F48C06] via-[#FFD166] to-[#E85D04] bg-[length:200%_auto] animate-shimmer pointer-events-none z-20" />

          {/* Background Rotating Sacred Chakra Mandala */}
          <div className="absolute -right-10 -bottom-10 w-52 sm:w-64 h-52 sm:h-64 opacity-15 pointer-events-none z-0">
            <Image
              src="/chakra.svg"
              alt="Sacred Chakra"
              width={250}
              height={250}
              className="animate-spin-slow"
            />
          </div>

          {/* Background Kundali Texture */}
          <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
            <Image
              src="/kundali-chart.svg"
              alt="Kundali Chart Texture"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Side Portrait Vignette */}
          <div className="absolute right-3 sm:right-6 bottom-4 sm:bottom-6 w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden bg-[#1A1D47]/80 border border-[#F48C06]/30 shadow-lg pointer-events-none z-0 opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500">
            <Image
              src="/sanjeev.png"
              alt="Acharya Sanjeev Kumar Pandey"
              fill
              className="object-cover object-[center_30%]"
            />
          </div>

          {/* ── Top Header Strip ── */}
          <div className="relative z-10 p-3 sm:p-4 flex items-center justify-between">
            {/* Live Indicator */}
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-red-600/90 text-white text-[10px] sm:text-xs font-extrabold uppercase tracking-wider shadow-md">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              <span>WATCH VIDEO</span>
            </span>

            {/* Duration Tag */}
            <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-200 text-[10px] sm:text-xs font-bold border border-white/10 flex items-center gap-1">
              <span>⏱️ 2:15 Mins</span>
            </span>
          </div>

          {/* ── Center Glowing Play Button ── */}
          <div className="relative z-10 flex items-center justify-center my-auto">
            <div className="relative flex items-center justify-center">
              {/* Outer Pulsing Glow Wave */}
              <span className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F48C06]/35 animate-ping" />
              
              {/* Mid Ring */}
              <span className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#FFD166]/50" />

              {/* Central Button */}
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#F48C06] via-[#FF7700] to-[#E85D04] text-white flex items-center justify-center shadow-2xl shadow-[#F48C06]/50 group-hover:scale-110 group-hover:bg-[#E85D04] transition-all duration-300">
                <Play className="w-5 h-5 sm:w-7 sm:h-7 fill-white text-white translate-x-0.5" />
              </div>
            </div>
          </div>

          {/* ── Bottom Overlay Strip ── */}
          <div className="relative z-10 p-3 sm:p-4 bg-gradient-to-t from-black/85 via-black/60 to-transparent">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <div className="min-w-0 pr-2">
                <h4 className="font-serif font-bold text-xs sm:text-sm text-white truncate drop-shadow-sm">
                  Janma Kundali Se Kaise Milega Sateek Jawaab?
                </h4>
                <p className="text-[10px] sm:text-[11px] text-[#FFD166] truncate">
                  Acharya Sanjeev Kumar Pandey • Vedic Jyotish Acharya
                </p>
              </div>

              {/* Sound Tag */}
              <span className="shrink-0 inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-[#FFD166] bg-[#1E2260]/90 px-2 py-0.5 rounded border border-[#F48C06]/40">
                <Volume2 className="w-3 h-3 text-[#F48C06]" />
                <span>Play Sound</span>
              </span>
            </div>

            {/* Video Progress Bar Track */}
            <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#F48C06] to-[#E85D04] w-2/5 rounded-full" />
            </div>
          </div>
        </div>

        {/* Caption Below Frame - Guaranteed Single Line */}
        <div className="mt-1.5 sm:mt-2 flex items-center justify-center gap-1.5 text-[10px] min-[360px]:text-[11px] sm:text-xs text-[#E85D04] font-semibold text-center whitespace-nowrap">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
          <span className="hidden min-[360px]:inline">15,000+ logon ne dekha yeh video • 2 Min Guide</span>
          <span className="min-[360px]:hidden">15,000+ views • 2 Min Guide</span>
        </div>
      </div>

      {/* ──────── Interactive VSL Video Player Modal ──────── */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-3xl bg-gradient-to-br from-[#121538] via-[#1E2260] to-[#0A0D28] border-2 border-[#F48C06]/50 shadow-2xl text-white overflow-hidden flex flex-col">
            
            {/* Top Modal Header */}
            <div className="p-3 sm:p-4 border-b border-[#F48C06]/20 flex items-center justify-between bg-black/40">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="font-serif font-bold text-xs sm:text-sm text-white">
                  Acharya Sanjeev Kumar Pandey • Vedic Consultation VSL
                </span>
              </div>
              <button
                onClick={handleClose}
                aria-label="Close Video"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Screen Area */}
            <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
              {/* Background Art */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <Image
                  src="/chakra.svg"
                  alt="Chakra"
                  fill
                  className="object-contain animate-spin-slow"
                />
              </div>

              {/* Simulated Video Presentation Host */}
              <div className="relative z-10 flex flex-col items-center text-center p-4">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full p-1.5 bg-gradient-to-tr from-[#F48C06] to-[#FFD166] shadow-2xl mb-3">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#1A1D47] relative">
                    <Image
                      src="/sanjeev.png"
                      alt="Sanjeev Kumar Pandey"
                      fill
                      className="object-cover object-[center_30%]"
                    />
                  </div>
                </div>

                <h3 className="font-serif font-bold text-base sm:text-xl text-[#FFD166]">
                  &ldquo;Aapki Kundali Mein Chhipe Hain Har Sawaal Ke Jawaab&rdquo;
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-md">
                  Vedic Astrology ke 10+ varshon ke anubhav se janiye grah-dasha ka sateek prabhav.
                </p>

                {/* Animated Sound Wave Visualizer */}
                {isPlaying && (
                  <div className="flex items-center gap-1 mt-3">
                    {[16, 28, 40, 24, 36, 18, 30, 44, 22, 14].map((h, i) => (
                      <div
                        key={i}
                        className="w-1 bg-[#F48C06] rounded-full animate-pulse"
                        style={{
                          height: `${(h * (progress % 5 + 3)) / 8}px`,
                          animationDelay: `${i * 100}ms`,
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Player Overlay Controls */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black via-black/80 to-transparent z-20">
                {/* Progress bar */}
                <div
                  className="w-full h-1.5 bg-white/20 rounded-full mb-2 cursor-pointer overflow-hidden"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    setProgress(Math.round((clickX / rect.width) * 100));
                  }}
                >
                  <div
                    className="h-full bg-gradient-to-r from-[#F48C06] to-[#E85D04]"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-gray-300">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-white hover:text-[#F48C06] transition-colors cursor-pointer"
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4 fill-white" />
                      )}
                    </button>

                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="text-white hover:text-[#F48C06] transition-colors cursor-pointer"
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4 text-red-400" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-[#F48C06]" />
                      )}
                    </button>

                    <span className="text-[11px] font-mono">
                      0:{String(Math.floor((progress * 135) / 100)).padStart(2, "0")} / 2:15
                    </span>
                  </div>

                  <span className="text-[11px] text-[#FFD166] font-semibold">
                    HD • Vedic Clarity
                  </span>
                </div>
              </div>
            </div>

            {/* Video Summary & Instant Booking CTA */}
            <div className="p-4 sm:p-5 bg-[#0B0F2A] border-t border-[#F48C06]/20">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4 text-xs text-gray-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>100% Personalised</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>15 Min 1-on-1 Direct</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Accurate Grah-Dasha</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-white/10">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-[#FFD166]">₹99</span>
                    <span className="text-xs text-gray-400 line-through">₹999</span>
                    <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">
                      90% OFF
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-400">Limited consultation slots available today</p>
                </div>

                <button
                  onClick={() => {
                    handleClose();
                    onBookClick();
                  }}
                  className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#F48C06] to-[#E85D04] hover:from-[#E85D04] hover:to-[#F48C06] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-[#F48C06]/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Book Consultation Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
