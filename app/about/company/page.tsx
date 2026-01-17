"use client";

import ParallaxBackground from "@/components/ParallaxBackground";
import GlobalScrollObserver from "@/components/GlobalScrollObserver";

import VisionSection from "@/components/VisionSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import FoundersSection from "@/components/FoundersSection";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";

export default function CompanyPage() {
  return (
    <>
      <GlobalScrollObserver />
      <ParallaxBackground />
      <div className="max-w-[1440px] mx-auto relative z-10 bg-white shadow-2xl shadow-blue-900/5">
        <AboutHero />
        <VisionSection />
        <CoreValuesSection />
        <FoundersSection />
        <Footer />
      </div>
    </>
  );
}
