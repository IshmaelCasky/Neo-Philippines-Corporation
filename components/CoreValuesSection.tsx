"use client";

import { useEffect, useRef } from "react";

export default function CoreValuesSection() {
  const groupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isDesktop = window.matchMedia("(hover: hover)").matches;
    if (!isDesktop || !groupRef.current) return;

    const group = groupRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const cards = group.querySelectorAll<HTMLDivElement>(".spotlight-card");
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
    <section className="py-20 px-4 md:py-32 md:px-12 relative z-10 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="absolute inset-0 pattern-grid pointer-events-none"></div>

      {/* Decorative Noodle */}
      <svg
        className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20 z-0 scale-x-[-1]"
        viewBox="0 0 800 800"
      >
        <path
          d="M-100,100 C200,100 200,400 500,400 C800,400 800,700 1100,700"
          fill="none"
          stroke="#0B143F"
          strokeWidth="1"
          className="noodle-path"
        />
      </svg>

      {/* Gradient Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0B143F] rounded-full blur-[120px] opacity-[0.03] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FFE11E] rounded-full blur-[120px] opacity-[0.04] -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 reveal-on-scroll">
          <div>
            <span className="text-xs font-mono text-zinc-400 block mb-2 uppercase tracking-widest">
              Core Values
            </span>
            <h3 className="text-3xl md:text-4xl font-serif text-[#0B143F]">
              The Cornerstone of Success
            </h3>
          </div>
          <p className="text-xs md:text-sm text-zinc-500 leading-relaxed max-w-sm mt-4 md:mt-0">
            These principles are the bedrock of our culture, guiding every
            decision we make to ensure sustainable impact.
          </p>
        </div>

        {/* Horizontal Tree Layout (Desktop Focus) */}
        <div className="hidden md:block relative mt-32 mb-16 w-full max-w-5xl mx-auto h-[260px]">
          {/* Main Horizontal Trunk */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-[#0B143F]/0 via-[#0B143F]/20 to-[#0B143F]/0 -translate-y-1/2"></div>
          
          <div className="flex items-center justify-between relative z-10 w-full h-full px-6">
            
            {/* 1. God-centeredness (Top Branch) */}
            <div className="relative group w-12 flex flex-col items-center justify-center">
               <div className="absolute bottom-1/2 left-1/2 w-[2px] h-12 bg-[#0B143F]/20 -translate-x-1/2"></div>
               <div className="w-12 h-12 bg-white border-2 border-[#0B143F]/10 text-[#0B143F] rounded-full flex justify-center items-center group-hover:bg-[#0B143F] group-hover:text-white transition-all shadow-md z-10 relative">
                 <iconify-icon icon="lucide:heart-handshake" className="text-xl" />
               </div>
               <h4 className="text-sm font-bold text-[#0B143F] leading-snug absolute bottom-[calc(50%+3.5rem)] text-center w-36 -ml-12">
                 God-centeredness
               </h4>
            </div>

            {/* 2. Trustworthiness (Bottom Branch) */}
            <div className="relative group w-12 flex flex-col items-center justify-center">
               <div className="absolute top-1/2 left-1/2 w-[2px] h-12 bg-[#0B143F]/20 -translate-x-1/2"></div>
               <div className="w-12 h-12 bg-white border-2 border-[#0B143F]/10 text-[#0B143F] rounded-full flex justify-center items-center group-hover:bg-[#0B143F] group-hover:text-white transition-all shadow-md z-10 relative">
                 <iconify-icon icon="lucide:shield" className="text-xl" />
               </div>
               <h4 className="text-sm font-bold text-[#0B143F] leading-snug absolute top-[calc(50%+3.5rem)] text-center w-32 -ml-10">
                 Trustworthiness
               </h4>
            </div>

            {/* 3. Integrity (Top Branch) */}
            <div className="relative group w-12 flex flex-col items-center justify-center">
               <div className="absolute bottom-1/2 left-1/2 w-[2px] h-12 bg-[#0B143F]/20 -translate-x-1/2"></div>
               <div className="w-12 h-12 bg-white border-2 border-[#0B143F]/10 text-[#0B143F] rounded-full flex justify-center items-center group-hover:bg-[#0B143F] group-hover:text-white transition-all shadow-md z-10 relative">
                 <iconify-icon icon="lucide:shield-check" className="text-xl" />
               </div>
               <h4 className="text-sm font-bold text-[#0B143F] leading-snug absolute bottom-[calc(50%+3.5rem)] text-center w-32 -ml-10">
                 Integrity
               </h4>
            </div>

            {/* 4. Excellence (Bottom Branch) */}
            <div className="relative group w-12 flex flex-col items-center justify-center">
               <div className="absolute top-1/2 left-1/2 w-[2px] h-12 bg-[#0B143F]/20 -translate-x-1/2"></div>
               <div className="w-12 h-12 bg-white border-2 border-[#0B143F]/10 text-[#0B143F] rounded-full flex justify-center items-center group-hover:bg-[#0B143F] group-hover:text-white transition-all shadow-md z-10 relative">
                 <iconify-icon icon="lucide:medal" className="text-xl" />
               </div>
               <h4 className="text-sm font-bold text-[#0B143F] leading-snug absolute top-[calc(50%+3.5rem)] text-center w-32 -ml-10">
                 Excellence
               </h4>
            </div>

            {/* 5. Responsibility (Top Branch) */}
            <div className="relative group w-12 flex flex-col items-center justify-center">
               <div className="absolute bottom-1/2 left-1/2 w-[2px] h-12 bg-[#0B143F]/20 -translate-x-1/2"></div>
               <div className="w-12 h-12 bg-white border-2 border-[#0B143F]/10 text-[#0B143F] rounded-full flex justify-center items-center group-hover:bg-[#0B143F] group-hover:text-white transition-all shadow-md z-10 relative">
                 <iconify-icon icon="lucide:users" className="text-xl" />
               </div>
               <h4 className="text-sm font-bold text-[#0B143F] leading-snug absolute bottom-[calc(50%+3.5rem)] text-center w-32 -ml-10">
                 Responsibility
               </h4>
            </div>

            {/* 6. Passionate (Bottom Branch) */}
            <div className="relative group w-12 flex flex-col items-center justify-center">
               <div className="absolute top-1/2 left-1/2 w-[2px] h-12 bg-[#0B143F]/20 -translate-x-1/2"></div>
               <div className="w-12 h-12 bg-white border-2 border-[#0B143F]/10 text-[#0B143F] rounded-full flex justify-center items-center group-hover:bg-[#0B143F] group-hover:text-white transition-all shadow-md z-10 relative">
                 <iconify-icon icon="lucide:zap" className="text-xl" />
               </div>
               <h4 className="text-sm font-bold text-[#0B143F] leading-snug absolute top-[calc(50%+3.5rem)] text-center w-32 -ml-10">
                 Passionate
               </h4>
            </div>

            {/* 7. Discipline (Top Branch) */}
            <div className="relative group w-12 flex flex-col items-center justify-center">
               <div className="absolute bottom-1/2 left-1/2 w-[2px] h-12 bg-[#0B143F]/20 -translate-x-1/2"></div>
               <div className="w-12 h-12 bg-white border-2 border-[#0B143F]/10 text-[#0B143F] rounded-full flex justify-center items-center group-hover:bg-[#0B143F] group-hover:text-white transition-all shadow-md z-10 relative">
                 <iconify-icon icon="lucide:scale" className="text-xl" />
               </div>
               <h4 className="text-sm font-bold text-[#0B143F] leading-snug absolute bottom-[calc(50%+3.5rem)] text-center w-32 -ml-10">
                 Discipline
               </h4>
            </div>

          </div>
        </div>

        {/* Tree Layout (Mobile Fallback) */}
        <div className="md:hidden relative mt-16 w-full max-w-sm mx-auto pb-8 pl-8">
          <div className="absolute top-0 bottom-0 left-4 w-[2px] bg-gradient-to-b from-[#0B143F]/0 via-[#0B143F]/20 to-[#0B143F]/0 rounded-full"></div>
          <div className="flex flex-col gap-8 relative z-10 w-full">
            
            {/* 1 */}
            <div className="flex items-center gap-6 w-full relative group">
              <div className="absolute top-1/2 left-[-2rem] w-8 h-[2px] bg-[#0B143F]/20 -translate-y-1/2"></div>
              <div className="w-10 h-10 bg-white border-2 border-[#0B143F]/10 text-[#0B143F] rounded-full flex justify-center items-center group-hover:bg-[#0B143F] group-hover:text-white transition-all shadow-md z-10 shrink-0">
                 <iconify-icon icon="lucide:heart-handshake" className="text-lg" />
              </div>
              <h4 className="text-sm font-bold text-[#0B143F] leading-snug">God-centeredness</h4>
            </div>

            {/* 2 */}
            <div className="flex items-center gap-6 w-full relative group">
              <div className="absolute top-1/2 left-[-2rem] w-8 h-[2px] bg-[#0B143F]/20 -translate-y-1/2"></div>
              <div className="w-10 h-10 bg-white border-2 border-[#0B143F]/10 text-[#0B143F] rounded-full flex justify-center items-center group-hover:bg-[#0B143F] group-hover:text-white transition-all shadow-md z-10 shrink-0">
                 <iconify-icon icon="lucide:shield" className="text-lg" />
              </div>
              <h4 className="text-sm font-bold text-[#0B143F] leading-snug">Trustworthiness</h4>
            </div>

            {/* 3 */}
            <div className="flex items-center gap-6 w-full relative group">
              <div className="absolute top-1/2 left-[-2rem] w-8 h-[2px] bg-[#0B143F]/20 -translate-y-1/2"></div>
              <div className="w-10 h-10 bg-white border-2 border-[#0B143F]/10 text-[#0B143F] rounded-full flex justify-center items-center group-hover:bg-[#0B143F] group-hover:text-white transition-all shadow-md z-10 shrink-0">
                 <iconify-icon icon="lucide:shield-check" className="text-lg" />
              </div>
              <h4 className="text-sm font-bold text-[#0B143F] leading-snug">Integrity</h4>
            </div>

            {/* 4 */}
            <div className="flex items-center gap-6 w-full relative group">
              <div className="absolute top-1/2 left-[-2rem] w-8 h-[2px] bg-[#0B143F]/20 -translate-y-1/2"></div>
              <div className="w-10 h-10 bg-white border-2 border-[#0B143F]/10 text-[#0B143F] rounded-full flex justify-center items-center group-hover:bg-[#0B143F] group-hover:text-white transition-all shadow-md z-10 shrink-0">
                 <iconify-icon icon="lucide:medal" className="text-lg" />
              </div>
              <h4 className="text-sm font-bold text-[#0B143F] leading-snug">Excellence</h4>
            </div>

            {/* 5 */}
            <div className="flex items-center gap-6 w-full relative group">
              <div className="absolute top-1/2 left-[-2rem] w-8 h-[2px] bg-[#0B143F]/20 -translate-y-1/2"></div>
              <div className="w-10 h-10 bg-white border-2 border-[#0B143F]/10 text-[#0B143F] rounded-full flex justify-center items-center group-hover:bg-[#0B143F] group-hover:text-white transition-all shadow-md z-10 shrink-0">
                 <iconify-icon icon="lucide:users" className="text-lg" />
              </div>
              <h4 className="text-sm font-bold text-[#0B143F] leading-snug">Responsibility</h4>
            </div>

            {/* 6 */}
            <div className="flex items-center gap-6 w-full relative group">
              <div className="absolute top-1/2 left-[-2rem] w-8 h-[2px] bg-[#0B143F]/20 -translate-y-1/2"></div>
              <div className="w-10 h-10 bg-white border-2 border-[#0B143F]/10 text-[#0B143F] rounded-full flex justify-center items-center group-hover:bg-[#0B143F] group-hover:text-white transition-all shadow-md z-10 shrink-0">
                 <iconify-icon icon="lucide:zap" className="text-lg" />
              </div>
              <h4 className="text-sm font-bold text-[#0B143F] leading-snug">Passionate</h4>
            </div>

            {/* 7 */}
            <div className="flex items-center gap-6 w-full relative group">
              <div className="absolute top-1/2 left-[-2rem] w-8 h-[2px] bg-[#0B143F]/20 -translate-y-1/2"></div>
              <div className="w-10 h-10 bg-white border-2 border-[#0B143F]/10 text-[#0B143F] rounded-full flex justify-center items-center group-hover:bg-[#0B143F] group-hover:text-white transition-all shadow-md z-10 shrink-0">
                 <iconify-icon icon="lucide:scale" className="text-lg" />
              </div>
              <h4 className="text-sm font-bold text-[#0B143F] leading-snug">Discipline</h4>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
