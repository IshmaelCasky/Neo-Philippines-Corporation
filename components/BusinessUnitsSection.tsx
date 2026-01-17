"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const BUSINESS_UNITS = [
  {
    name: "Foods",
    category: "Core Division",
    description: "Is the food manufacturing leg of NEO Philippines Corporation, focused on producing safe, high-quality, and market-driven food products. The business emphasizes quality assurance, operational efficiency, and compliance with food safety standards while supporting local suppliers and sustainable economic growth in Mindanao.",
    image: "https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?q=80&w=2670&auto=format&fit=crop",
    delay: "0",
    theme: "yellow"
  },
  {
    name: "Customs Brokerage Solutions",
    category: "Logistics & Trade",
    description: "Provides reliable and compliant customs brokerage and trade facilitation services. Guided by regulatory expertise and a client-focused approach, the business enables efficient import and export operations while minimizing risks, delays, and logistics costs.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop",
    delay: "100",
    theme: "white"
  },
  {
    name: "General Merchandise",
    category: "Retail & Trade",
    description: "Handles the sourcing and distribution of a wide range of products for retail and institutional markets. The business prioritizes quality, efficient procurement, and dependable supply chain management to deliver consistent value and support diversified commercial growth.",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2670&auto=format&fit=crop",
    delay: "200",
    theme: "white"
  }
];

export default function BusinessUnitsSection() {
  const groupRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Reveal on scroll observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = groupRef.current?.querySelectorAll(".reveal-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={groupRef}
      className="py-20 px-4 md:py-32 md:px-12 bg-zinc-50 border-b border-[#0B143F]/5 relative z-20 overflow-hidden"
    >
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0B143F]/10 to-transparent"></div>
        
      {/* Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-8 border-b border-zinc-200 reveal-on-scroll">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-[#0B143F]/30"></span>
            <span className="text-xs font-bold tracking-widest text-[#0B143F]/60 uppercase">
              Business Units
            </span>
          </div>
          <h3 className="text-4xl md:text-6xl font-serif text-[#0B143F] leading-tight">
            Our Offerings
          </h3>
        </div>
        <p className="md:max-w-xs text-[#0B143F]/60 text-sm mt-6 md:mt-0 font-light leading-relaxed">
            Diversified solutions driving growth and sustainability across key industries in the region.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
        {BUSINESS_UNITS.map((unit, index) => (
          <div 
            key={unit.name}
            className={`
              group relative h-[500px] md:h-[600px] bg-[#0B143F] rounded-2xl overflow-hidden cursor-pointer 
              reveal-on-scroll hover:shadow-2xl hover:shadow-[#0B143F]/20 transition-all duration-700
            `}
            style={{ transitionDelay: `${unit.delay}ms` }}
          >
            {/* Image Layer */}
            <div className="absolute inset-0 z-0">
              <Image
                src={unit.image}
                alt={unit.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              {/* Overlay - Darkens on hover for text readability */}
              {/* Overlay - Optimized: Removed mix-blend-mode for performance */}
              <div className="absolute inset-0 bg-[#0B143F]/30 transition-colors duration-500 group-hover:bg-[#0B143F]/10"></div>
              
              {/* Gradient Overlay - Always present but adjusts */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B143F] via-[#0B143F]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
            </div>

            {/* Content Container */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
              {/* Category Tag */}
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 items-start flex">
                <span className={`
                    inline-block px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-sm mb-4
                    ${unit.theme === 'yellow' ? 'bg-[#FFE11E] text-[#0B143F]' : 'bg-white text-[#0B143F]'}
                    shadow-lg
                `}>
                  {unit.category}
                </span>
              </div>

              {/* Title & Description Wrapper */}
              <div className="transform translate-y-32 group-hover:translate-y-0 transition-transform duration-500 ease-out will-change-transform">
                <h4 className="text-2xl md:text-3xl font-serif text-white mb-4 leading-tight group-hover:text-[#FFE11E] transition-colors duration-300">
                  {unit.name}
                </h4>
                
                {/* Description - Optimized: Uses opacity fade only. Parent translation handles the "slide up" effect. */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                  <div className="overflow-hidden">
                    <p className="text-zinc-300 text-sm leading-relaxed border-l-2 border-[#FFE11E]/30 pl-4 mb-2">
                        {unit.description}
                    </p>
                    {/* Learn More Text */}
                    <div className="flex items-center gap-2 text-[#FFE11E] text-xs font-bold tracking-widest mt-4">
                        LEARN MORE <span className="text-lg">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Border Glow Effect on Hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FFE11E]/20 rounded-2xl transition-colors duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
