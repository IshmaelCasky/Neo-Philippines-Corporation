"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const BUSINESS_UNITS = [
  {
    id: "neo-foods",
    name: "Foods",
    category: "Core Division",
    description: "Is the food manufacturing leg of NEO Philippines Corporation, focused on producing safe, high-quality, and market-driven food products. The business emphasizes quality assurance, operational efficiency, and compliance with food safety standards while supporting local suppliers and sustainable economic growth in Mindanao.",
    image: "https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?q=80&w=2670&auto=format&fit=crop",
    details: [
        "Quality Assurance & Safety Standards",
        "Operational Efficiency",
        "Local Supplier Support",
        "Sustainable Growth"
    ]
  },
  {
    id: "neo-customs",
    name: "Customs Brokerage Solutions",
    category: "Logistics & Trade",
    description: "Provides reliable and compliant customs brokerage and trade facilitation services. Guided by regulatory expertise and a client-focused approach, the business enables efficient import and export operations while minimizing risks, delays, and logistics costs.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop",
    details: [
        "Import & Export Operations",
        "Regulatory Expertise",
        "Risk Minimization",
        "Cost-Effective Logistics"
    ]
  },
  {
    id: "neo-general",
    name: "General Merchandise",
    category: "Retail & Trade",
    description: "Handles the sourcing and distribution of a wide range of products for retail and institutional markets. The business prioritizes quality, efficient procurement, and dependable supply chain management to deliver consistent value and support diversified commercial growth.",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2670&auto=format&fit=crop",
    details: [
        "Sourcing & Distribution",
        "Supply Chain Management",
        "Institutional Markets",
        "Commercial Growth Support"
    ]
  }
];

export default function ProductsListSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll(".reveal-on-scroll");
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-4 md:px-12 bg-white relative z-20">
            <div className="max-w-7xl mx-auto mb-20">
                 <div className="flex items-center gap-2 mb-6 reveal-on-scroll">
                    <span className="w-8 h-[1px] bg-[#0B143F]/30"></span>
                    <span className="text-xs font-bold tracking-widest text-[#0B143F]/60 uppercase">
                      Our Solutions
                    </span>
                 </div>
                 <h1 className="text-5xl md:text-7xl font-serif text-[#0B143F] mb-8 reveal-on-scroll leading-tight">
                    Products &<br/> Services
                 </h1>
                 <p className="text-lg text-[#0B143F]/60 max-w-2xl font-light reveal-on-scroll">
                    We deliver excellence across multiple sectors, driving innovation and sustainable growth for our partners and communities.
                 </p>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col gap-24">
                {BUSINESS_UNITS.map((unit, index) => (
                    <div 
                        id={unit.id}
                        key={unit.name} 
                        className={`
                            flex flex-col gap-8 md:gap-16 items-center reveal-on-scroll transition-all duration-1000
                            ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}
                        `}
                    >
                        {/* Image Side */}
                        <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-sm overflow-hidden group">
                           <Image
                                src={unit.image}
                                alt={unit.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                           />
                           <div className="absolute inset-0 bg-[#0B143F]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center">
                            <span className="text-[#FFE11E] font-bold tracking-widest text-xs uppercase mb-4 block">
                                {unit.category}
                            </span>
                            <h2 className="text-3xl md:text-4xl font-serif text-[#0B143F] mb-6">
                                {unit.name}
                            </h2>
                            <p className="text-[#0B143F]/70 leading-relaxed mb-8 text-lg font-light">
                                {unit.description}
                            </p>
                            
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {unit.details.map((detail) => (
                                    <li key={detail} className="flex items-center gap-3 text-sm text-[#0B143F]/80 font-medium">
                                        <span className="w-1.5 h-1.5 bg-[#FFE11E] rounded-full"></span>
                                        {detail}
                                    </li>
                                ))}
                            </ul>

                             <button className="self-start px-8 py-3 border border-[#0B143F]/20 text-[#0B143F] text-xs font-bold uppercase tracking-widest hover:bg-[#0B143F] hover:text-white transition-all duration-300">
                                Contact for {unit.name}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
