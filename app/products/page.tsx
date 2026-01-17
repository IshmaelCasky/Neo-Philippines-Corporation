import GlobalScrollObserver from "@/components/GlobalScrollObserver";
import ParallaxBackground from "@/components/ParallaxBackground";
import ProductsListSection from "@/components/ProductsListSection";
import Footer from "@/components/Footer";

export default function ProductsPage() {
  return (
    <main>
      <GlobalScrollObserver />
      <ParallaxBackground />
      <div className="max-w-[1440px] mx-auto relative z-10 bg-white shadow-2xl shadow-blue-900/5 min-h-screen flex flex-col">
        <div className="flex-grow">
            <ProductsListSection />
        </div>
        <Footer />
      </div>
    </main>
  );
}
