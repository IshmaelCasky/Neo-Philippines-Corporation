"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const managementRow1 = [
  {
    name: "Hannie Jean Trangia-Elisan",
    role: "CEO & President",
    source: "/management/HANNIE.jpeg",
  },
  {
    name: "Reymond L. Pepito",
    role: "COO & Vice-President",
    source: "/management/REYMOND.jpeg",
  },
];

const managementRow2 = [
  {
    name: "Atty. Madel M. Cervantes",
    role: "Director for Legal",
    source: "/management/MADEL.jpeg",
  },
  {
    name: "Ric Dickson T. Elisan",
    role: "Director for Admin Services",
    source: "/management/RIC.jpeg",
  },
  {
    name: "Hernan O. Bucoy",
    role: "Director for Communications and Social Impact",
    source: "/management/HERNAN.jpeg",
  },
  {
    name: "Helen Grace T. Tan",
    role: "Director for Finance",
    source: "/management/HELEN.jpeg",
  },
];

export default function FoundersSection() {
  const groupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isDesktop = window.matchMedia("(hover: hover)").matches;
    if (!isDesktop || !groupRef.current) return;

    const group = groupRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const cards = group.querySelectorAll<HTMLDivElement>(".spotlight-card-dark");
      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardX = e.clientX - cardRect.left;
        const cardY = e.clientY - cardRect.top;
        card.style.setProperty("--mouse-x", `${cardX}px`);
        card.style.setProperty("--mouse-y", `${cardY}px`);
      });
    };

    group.addEventListener("mousemove", handleMouseMove);
    return () => group.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="management" className="py-24 px-4 md:py-32 md:px-12 bg-[#0B143F] relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pattern-grid-dark pointer-events-none opacity-10"></div>
      
      {/* Gradient Blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#FFE11E]/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow delay-1000"></div>

      {/* Decorative Noodle */}
      <svg
        className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-[0.03] z-0 rotate-180"
        viewBox="0 0 800 800"
      >
        <path
          d="M-100,100 C200,100 200,400 500,400 C800,400 800,700 1100,700"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
      </svg>

      {/* Background Text */}
      <div className="absolute right-0 bottom-0 text-[12rem] md:text-[24rem] font-serif text-white opacity-[0.015] leading-none pointer-events-none select-none z-0">
        LEAD
      </div>

      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24 reveal-on-scroll relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFE11E] animate-pulse"></span>
          <span className="text-[10px] font-mono text-zinc-300 tracking-widest uppercase">
             Leadership
          </span>
        </div>
        
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">Management</span>
        </h3>
        <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
          Visionaries committed to excellence, steering our organization towards sustainable development and lasting impact in the region.
        </p>
      </div>

      {/* Management Content */}
      <div ref={groupRef} className="relative z-10 space-y-8 spotlight-group max-w-7xl mx-auto perspective-1000">
        {/* Row 1: 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {managementRow1.map((manager, index) => (
            <div
              key={manager.name}
              className="spotlight-card-dark group relative p-8 md:p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center reveal-on-scroll hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#FFE11E]/5"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative mb-8 inline-block">
                <div className="absolute inset-0 bg-[#FFE11E] rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-gradient-to-b from-white/10 to-transparent rounded-full overflow-hidden border border-white/20 p-1 group-hover:border-[#FFE11E]/50 transition-colors duration-500">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <Image
                      src={manager.source}
                      alt={manager.name}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>

              <h4 className="text-xl md:text-2xl font-serif text-white mb-3 group-hover:text-[#FFE11E] transition-colors duration-300">
                {manager.name}
              </h4>
              <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 block group-hover:text-white transition-colors duration-300">
                {manager.role}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
          {managementRow2.map((manager, index) => (
            <div
              key={manager.name}
              className="spotlight-card-dark group relative p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center reveal-on-scroll hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="w-24 h-24 md:w-28 md:h-28 mx-auto bg-gradient-to-b from-white/10 to-transparent rounded-full overflow-hidden border border-white/20 p-1 group-hover:border-blue-400/50 transition-colors duration-500">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <Image
                      src={manager.source}
                      alt={manager.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>

              <h4 className="text-lg md:text-xl font-serif text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                {manager.name}
              </h4>
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 block break-words h-8 flex items-center justify-center group-hover:text-white transition-colors duration-300 leading-tight">
                {manager.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
