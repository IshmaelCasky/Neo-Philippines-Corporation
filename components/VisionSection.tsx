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
      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Vision Box */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-[#0B143F]/5 border border-[#0B143F]/10 flex flex-col gap-6 items-start hover:shadow-2xl transition-all duration-300">
          <div className="sonar-emitter w-12 h-12 rounded-full border border-[#0B143F]/10 flex items-center justify-center text-[#0B143F] bg-white relative">
          
            <iconify-icon
              icon="lucide:eye"
              className="text-2xl relative z-10"
            />
          </div>
          <span className="text-xs md:text-sm font-mono tracking-widest text-[#0B143F] uppercase font-bold">
            Our Vision
          </span>
          <h2 className="text-xl md:text-2xl lg:text-3xl leading-relaxed tracking-tight font-serif text-[#0B143F]">
            By 2035, NEO Philippines Corporation envisions as a leading and reliable enterprise in food manufacturing, customs brokerage, and general merchandise, driving sustainable growth across Mindanao.
          </h2>
        </div>

        {/* Mission Box */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-[#0B143F]/5 border border-[#0B143F]/10 flex flex-col gap-6 items-start hover:shadow-2xl transition-all duration-300 reveal-on-scroll">
          <div className="sonar-emitter w-12 h-12 rounded-full border border-[#0B143F]/10 flex items-center justify-center text-[#0B143F] bg-white relative">
           
            <iconify-icon
              icon="lucide:target"
              className="text-2xl relative z-10"
            />
          </div>
          <span className="text-xs md:text-sm font-mono tracking-widest text-[#0B143F] uppercase font-bold">
            Our Mission
          </span>
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed tracking-tight font-serif text-[#0B143F]">
            NEO Philippines Corporation is committed to delivering quality services, fostering strong partnerships, and upholding a culture of excellence to support inclusive growth and sustainable impact.
          </p>
        </div>
      </div>
    </section>
  );
}
