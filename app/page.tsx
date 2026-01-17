import ParallaxBackground from "@/components/ParallaxBackground";
import GlobalScrollObserver from "@/components/GlobalScrollObserver";

import HeroSection from "@/components/HeroSection";
import CompanyOverviewSection from "@/components/CompanyOverviewSection";
import BusinessUnitsSection from "@/components/BusinessUnitsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>

      <GlobalScrollObserver />
      <ParallaxBackground />
      <div className="max-w-[1440px] mx-auto relative z-10 bg-white shadow-2xl shadow-blue-900/5">
        <HeroSection />
        <CompanyOverviewSection />
        <BusinessUnitsSection />

        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
