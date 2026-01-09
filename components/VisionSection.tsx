"use client";

import { useEffect, useRef } from "react";

export default function VisionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !textRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      let percentage =
        (windowHeight - rect.top) / (windowHeight + rect.height * 0.5);
      percentage = Math.max(0, Math.min(1, percentage));
      const position = 100 - percentage * 100;

      requestAnimationFrame(() => {
        if (textRef.current) {
          textRef.current.style.backgroundPosition = `${position}% 0`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="vision"
      className="py-20 px-6 md:py-32 md:px-16 bg-white border-b border-[#0B143F]/10 relative overflow-hidden"
    >
      {/* Marquee Background */}
      <div className="absolute top-12 left-0 w-full overflow-hidden opacity-[0.03] pointer-events-none select-none z-0">
        <div className="animate-marquee-ltr flex items-center gap-24 whitespace-nowrap">
          <span className="text-9xl font-serif text-[#0B143F]">VISION 2035</span>
          <span className="text-9xl font-serif text-[#0B143F]">
            INCLUSIVE GROWTH
          </span>
          <span className="text-9xl font-serif text-[#0B143F]">MINDANAO</span>
          <span className="text-9xl font-serif text-[#0B143F]">VISION 2035</span>
          <span className="text-9xl font-serif text-[#0B143F]">
            INCLUSIVE GROWTH
          </span>
          <span className="text-9xl font-serif text-[#0B143F]">MINDANAO</span>
        </div>
      </div>

      {/* Section Label */}
      <div className="absolute top-8 left-6 md:top-12 md:left-12 relative z-10">
        <span className="text-[10px] font-mono text-zinc-400">
          01 / VISION &amp; MISSION
        </span>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto text-center sticky top-24 relative z-10">
        {/* Sonar Icon */}
        <div className="mb-8 md:mb-12 flex justify-center">
          <div className="sonar-emitter w-12 h-12 md:w-16 md:h-16 rounded-full border border-[#0B143F]/10 flex items-center justify-center text-[#0B143F] bg-white relative">
            <div className="sonar-wave"></div>
            <iconify-icon
              icon="lucide:target"
              className="text-2xl md:text-3xl relative z-10"
            />
          </div>
        </div>

        {/* Vision Statement */}
        <h2
          ref={textRef}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight font-serif text-[#0B143F] scroll-scrub-text pb-8 md:pb-12"
        >
         By 2035, NEO Philippines Corporation envisions as a leading and reliable enterprise in food manufacturing, customs brokerage, and general merchandise, driving sustainable growth across Mindanao.
        </h2>

        {/* Mission */}
        <div className="flex justify-center gap-12 mt-4 md:mt-8 reveal-on-scroll">
          <div className="text-left max-w-xs px-4 md:px-0">
            <h4 className="text-sm uppercase tracking-widest font-bold text-[#0B143F] mb-3">
              Our Mission
            </h4>
            <p className="text-sm text-zinc-500 leading-relaxed">
             NEO Philippines Corporation is committed to delivering quality services, fostering strong partnerships, and upholding a culture of excellence to support inclusive growth and sustainable impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
