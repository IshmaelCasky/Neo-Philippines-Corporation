import ParallaxBackground from "@/components/ParallaxBackground";
import GlobalScrollObserver from "@/components/GlobalScrollObserver";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import BusinessUnitsSection from "@/components/BusinessUnitsSection";
import FoundersSection from "@/components/FoundersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>

      <GlobalScrollObserver />
      <ParallaxBackground />
      <div className="max-w-[1440px] mx-auto relative z-10 bg-white shadow-2xl shadow-blue-900/5">
        <Header />
        <HeroSection />
        <VisionSection />
        <CoreValuesSection />
        <BusinessUnitsSection />
        <FoundersSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
