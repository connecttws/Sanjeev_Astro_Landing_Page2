import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Sanjeev Kumar Pandey | Vedic Astrology Expert | Consultation @ ₹99",
  description:
    "10+ Years of Experience in Vedic Astrology. Career, Marriage, Love, Business, Money Ya Life Ko Lekar Confused Ho? Get 1-on-1 personalized guidance starting at just ₹99.",
  keywords: [
    "Vedic Astrology",
    "Astrology Consultation",
    "Sanjeev Kumar Pandey",
    "Kundali Milan",
    "Career Astrology",
    "Marriage Astrology",
    "Horoscope Reading",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#FFFDF9] text-[#0B132B] font-sans selection:bg-[#F48C06] selection:text-white overflow-x-hidden min-h-[100dvh]">
        {children}
      </body>
    </html>
  );
}
