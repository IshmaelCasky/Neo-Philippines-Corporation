"use client";

import { useEffect, useRef } from "react";

export default function AboutHero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Simple parallax or fade-in effect if needed
    const title = titleRef.current;
    if (title) {
        title.style.opacity = "0";
        title.style.transform = "translateY(20px)";
        setTimeout(() => {
            title.style.transition = "all 1s ease-out";
            title.style.opacity = "1";
            title.style.transform = "translateY(0)";
        }, 100);
    }
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#0B143F]">
      {/* Background Elements */}
      <div className="absolute inset-0 pattern-grid-dark opacity-20 pointer-events-none mix-blend-overlay"></div>
      
      {/* Animated Gradient Blobs */}
      <div className="absolute -top-[30%] -left-[10%] w-[80%] h-[80%] bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute top-[20%] right-[10%] w-[60%] h-[60%] bg-gradient-to-bl from-[#FFE11E]/20 to-orange-500/20 rounded-full blur-[100px] pointer-events-none animate-float-slow delay-1000"></div>
      <div className="absolute -bottom-[20%] left-[20%] w-[70%] h-[70%] bg-gradient-to-t from-cyan-500/20 to-blue-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slower delay-700"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full border border-[#FFE11E]/30 bg-[#FFE11E]/10 backdrop-blur-sm text-[#FFE11E] text-xs font-bold tracking-[0.3em] uppercase mb-8 shadow-lg shadow-[#FFE11E]/5 animate-fade-in-up">
            Learn More About Us
        </span>
        <h1 
            ref={titleRef}
            className="text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[0.9] tracking-tight drop-shadow-2xl"
        >
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white/80">Company</span>
        </h1>
        <div className="text-blue-100/90 text-sm md:text-lg lg:text-lg max-w-6xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200 space-y-4 text-justify md:text-center">
          <p>
            NEO Philippines Corporation is a diversified company based in Davao, Philippines, with business interests in Customs Brokerage, Food Manufacturing, and General Merchandise. Founded by young and empowered visionaries, NEO embodies a deep commitment to uplifting lives through inclusive growth and shared opportunities.
          </p>
          <p>
            Guided by its name, NEO, a symbol of new beginnings, the company strives to illuminate communities, spark progress, and become a beacon of empowerment for individuals and businesses alike. At its core, NEO Philippines champions a mission rooted in innovation, social responsibility, and transformative leadership, driving sustainable development across sectors while staying anchored in its local heritage and values.
          </p>
        </div>
      </div>

       {/* Decorative Noodle */}
       <svg
          className="absolute bottom-0 left-0 w-full h-[150px] text-zinc-50 pointer-events-none"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
    </section>
  );
}
