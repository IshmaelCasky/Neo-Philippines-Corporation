"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const BUSINESS_UNITS = [
  {
    id: "neo-foods",
    name: "Neo Foods",
    category: "Core Division",
    description: "Focused on producing safe, high-quality, and market-driven food products. The business emphasizes quality assurance, operational efficiency, and compliance with food safety standards while supporting local suppliers and sustainable economic growth in Mindanao.",
    image: "/neofoods/641062463_1445156670954876_8433701722556515240_n.jpg",
    images: [
      "/neofoods/627143108_1425251079612102_2159817774040676409_n.jpg",
      "/neofoods/628810496_1433861612084382_124673081441229579_n.jpg",
      "/neofoods/631117237_1434063618730848_2258793262584719228_n.jpg",
      "/neofoods/631170764_1430232525780624_540129197166834614_n.jpg",
      "/neofoods/631649347_1434063442064199_2428965413396850485_n.jpg",
      "/neofoods/631968683_1433861518751058_249339250437141867_n.jpg",
      "/neofoods/631999034_1433861525417724_876361251250306492_n.jpg",
      "/neofoods/632323525_1435868611883682_8914616882562019021_n.jpg",
      "/neofoods/633704202_1436155745188302_5250831615802197355_n.jpg",
      "/neofoods/641062463_1445156670954876_8433701722556515240_n.jpg",
      "/neofoods/642279333_1445148567622353_8993529413841437908_n.jpg"
    ],
    details: [
        "Quality Assurance & Safety Standards",
        "Operational Efficiency",
        "Local Supplier Support",
        "Sustainable Growth"
    ]
  },
  {
    id: "neo-customs",
    name: "Neo Solutions",
    category: "Logistics & Trade",
    description: "Provides reliable and compliant customs brokerage and trade facilitation services. Guided by regulatory expertise and a client-focused approach, the business enables efficient import and export operations while minimizing risks, delays, and logistics costs.",
    image: "/neosolutions/Gemini_Generated_Image_ecp3vvecp3vvecp3.png",
    images: [
      "/neosolutions/Gemini_Generated_Image_ecp3vvecp3vvecp3.png",
      "/neosolutions/Gemini_Generated_Image_ecp3vvecp3vvecp3 (1).png",
      "/neosolutions/Gemini_Generated_Image_7asy7f7asy7f7asy.png",
      "/neosolutions/Gemini_Generated_Image_7asy7f7asy7f7asy copy.png"
    ],
    details: [
        "Import & Export Operations",
        "Regulatory Expertise",
        "Risk Minimization",
        "Cost-Effective Logistics"
    ]
  },
  {
    id: "neo-general",
    name: "Neo Merchandise",
    category: "Retail & Trade",
    description: "Handles the sourcing and distribution of a wide range of products for retail and institutional markets. The business prioritizes quality, efficient procurement, and dependable supply chain management to deliver consistent value and support diversified commercial growth.",
    image: "/neomerchandise/e717dc4b-82ba-4469-9f3e-dd988387641d.jpeg",
    images: [
      "/neomerchandise/e717dc4b-82ba-4469-9f3e-dd988387641d.jpeg",
      "/neomerchandise/41559654-e468-4ddb-97a0-f12b1b7e0726.jpeg",
      "/neomerchandise/5be69952-4d40-4ca7-bdd7-e8244d51e6bf.jpeg",
      "/neomerchandise/7fa9ed61-0aaf-483b-9f02-6d3ff6526394.jpeg"
    ],
    details: [
        "Sourcing & Distribution",
        "Supply Chain Management",
        "Institutional Markets",
        "Commercial Growth Support"
    ]
  }
];

function ImageCarousel({ images, alt }: { images: string[], alt: string }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    useEffect(() => {
        const timer = setInterval(goToNext, 4000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="relative w-full h-full overflow-hidden group bg-black md:rounded-2xl">
            {/* Blurred ambient background layer */}
            {images.map((src, idx) => (
                <div
                    key={`bg-${src}`}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                        idx === currentIndex ? "opacity-50 scale-110 z-0" : "opacity-0 scale-100 z-0"
                    }`}
                >
                    <Image
                        src={src}
                        alt=""
                        fill
                        className="object-cover blur-2xl saturate-150"
                    />
                </div>
            ))}
            
            {/* Inner aesthetic container for the main image */}
            <div className="absolute inset-4 md:inset-8 z-10 flex items-center justify-center">
                {images.map((src, idx) => (
                    <div 
                        key={`img-container-${src}`}
                        className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                            idx === currentIndex ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none"
                        }`}
                    >
                        <Image
                            src={src}
                            alt={`${alt} ${idx + 1}`}
                            fill
                            className="object-contain object-center drop-shadow-2xl"
                        />
                    </div>
                ))}
            </div>
            
            {/* Arrow Navigation */}
            <button 
                onClick={goToPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 backdrop-blur-md opacity-0 group-hover:opacity-100 border border-white/10 shadow-lg"
                aria-label="Previous image"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button 
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 backdrop-blur-md opacity-0 group-hover:opacity-100 border border-white/10 shadow-lg"
                aria-label="Next image"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>

            {/* Dot Navigation */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20 px-4 py-3 rounded-2xl bg-black/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-xl border border-white/10 translate-y-4 group-hover:translate-y-0">
                {images.map((_, idx) => (
                    <button
                        key={`dot-${idx}`}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                            idx === currentIndex ? "bg-white w-8" : "bg-white/40 hover:bg-white/80 w-1.5"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
            
            {/* Subtle overlay gradient to ensure controls contrast well */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 transition-opacity duration-500 pointer-events-none z-10 opacity-0 group-hover:opacity-100"></div>
        </div>
    );
}

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
                 {/* <div className="flex items-center gap-2 mb-6 reveal-on-scroll">
                    <span className="w-8 h-[1px] bg-[#0B143F]/30"></span>
                    <span className="text-xs font-bold tracking-widest text-[#0B143F]/60 uppercase">
                      Our Solutions
                    </span>
                 </div> */}
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
                        <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-sm overflow-hidden">
                           {"images" in unit && unit.images ? (
                               <ImageCarousel images={unit.images} alt={unit.name} />
                           ) : (
                               <div className="relative w-full h-full group">
                                   <Image
                                        src={unit.image}
                                        alt={unit.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                   />
                                   <div className="absolute inset-0 bg-[#0B143F]/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                               </div>
                           )}
                        </div>

                        {/* Content Side */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center">
                            {/* <span className="text-[#FFE11E] font-bold tracking-widest text-xs uppercase mb-4 block">
                                {unit.category}
                            </span> */}
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

                             <Link href="/contact" className="self-start px-8 py-3 border border-[#0B143F]/20 text-[#0B143F] text-xs font-bold uppercase tracking-widest hover:bg-[#0B143F] hover:text-white transition-all duration-300 inline-block text-center">
                                Contact for {unit.name}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
