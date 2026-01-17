"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CompanyOverviewSection() {
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
        <section ref={sectionRef} className="py-24 px-6 md:py-32 md:px-12 bg-white relative z-20">
             <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Image Composition */}
                <div className="relative h-[500px] w-full reveal-on-scroll group">
                     <div className="absolute inset-0 bg-[#0B143F] rounded-sm transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                     <div className="absolute inset-0 overflow-hidden rounded-sm">
                        <Image
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                            alt="Neo Philippines Headquarters"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                        />
                         <div className="absolute inset-0 bg-[#0B143F]/20 group-hover:bg-transparent transition-colors duration-500"></div>
                     </div>
                </div>

                {/* Text Content */}
                <div className="reveal-on-scroll delay-100">
                    <span className="text-[10px] font-mono text-[#0B143F]/60 block mb-6 tracking-widest uppercase">
                        Who We Are
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#0B143F] mb-8 leading-tight">
                        Empowering Communities, <br/>
                        <span className="italic text-[#FFE11E] drop-shadow-sm">Fueling Growth.</span>
                    </h2>
                    <p className="text-[#0B143F]/70 text-lg leading-relaxed mb-6 font-light">
                        Neo Philippines Corporation is a diversified conglomerate dedicated to driving sustainable development in Mindanao and beyond. 
                    </p>
                    <p className="text-[#0B143F]/70 text-lg leading-relaxed mb-10 font-light">
                         From ensuring food security to streamlining global trade, our business units work in synergy to create value for our partners and prosperity for our people.
                    </p>

                    <div className="flex flex-wrap gap-8 mb-10 border-t border-[#0B143F]/10 pt-8">
                         <div>
                            <span className="block text-3xl font-serif text-[#0B143F]">15+</span>
                            <span className="text-[10px] uppercase tracking-widest text-[#0B143F]/50">Years of Service</span>
                         </div>
                         <div>
                            <span className="block text-3xl font-serif text-[#0B143F]">3</span>
                             <span className="text-[10px] uppercase tracking-widest text-[#0B143F]/50">Key Industries</span>
                         </div>
                         <div>
                            <span className="block text-3xl font-serif text-[#0B143F]">100%</span>
                             <span className="text-[10px] uppercase tracking-widest text-[#0B143F]/50">Filipino Owned</span>
                         </div>
                    </div>

                    <Link 
                        href="/about/company"
                        className="inline-flex items-center gap-2 text-[#0B143F] font-bold text-xs uppercase tracking-widest hover:text-[#FFE11E] transition-colors group"
                    >
                        Read Our Story
                        <iconify-icon icon="lucide:arrow-right" class="text-lg group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
             </div>
        </section>
    );
}
