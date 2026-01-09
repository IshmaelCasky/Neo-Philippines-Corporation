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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 reveal-on-scroll">
          <div>
            <span className="text-[10px] font-mono text-zinc-400 block mb-4">
              02 / CORE VALUES
            </span>
            <h3 className="text-3xl md:text-5xl font-serif text-[#0B143F] mb-4">
              The Cornerstone of Success
            </h3>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-md">
              These principles are the bedrock of our culture, guiding every
              decision we make to ensure sustainable impact.
            </p>
          </div>
          <div className="h-px flex-1 bg-[#0B143F]/10 ml-8 hidden md:block self-center"></div>
        </div>

        {/* Values Grid */}
        <div
          ref={groupRef}
          className="spotlight-group grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]"
        >
          {/* 1. God-centeredness (Featured - 2x2) */}
          <div
            className="spotlight-card col-span-1 md:col-span-2 row-span-auto md:row-span-2 bg-white p-6 md:p-10 rounded-2xl flex flex-col justify-between group hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 reveal-on-scroll"
            style={{ "--mouse-x": "0px", "--mouse-y": "0px" } as React.CSSProperties}
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-xl flex items-center justify-center text-[#0B143F] group-hover:scale-110 transition-transform duration-500">
                <iconify-icon
                  icon="lucide:heart-handshake"
                  className="text-2xl md:text-3xl"
                />
              </div>
              <span className="text-[10px] font-bold text-zinc-300 font-mono">
                01
              </span>
            </div>
            <div className="mt-8">
              <h4 className="text-2xl md:text-3xl font-serif text-[#0B143F] mb-4 group-hover:text-[#0B143F] transition-colors">
                God-centeredness
              </h4>
              <p className="text-sm md:text-base text-zinc-500 leading-relaxed max-w-lg group-hover:text-zinc-700 transition-colors">
                Our foundation is built on faith. We place spiritual values at
                the center of our operations, ensuring that our growth honors
                our Creator and serves our community with humility and grace.
              </p>
            </div>
          </div>

          {/* 2. Trustworthiness (1x1) */}
          <div className="spotlight-card bg-white p-6 md:p-8 rounded-2xl flex flex-col gap-4 group hover:-translate-y-1 transition-transform duration-300 reveal-on-scroll delay-100">
            <div className="flex justify-between items-start">
              <iconify-icon
                icon="lucide:shield"
                className="text-2xl md:text-3xl text-[#0B143F] group-hover:text-[#FFE11E] transition-colors"
              />
              <span className="text-[10px] font-bold text-zinc-300 font-mono">
                02
              </span>
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-bold text-[#0B143F] mb-2">
                Trustworthiness
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                We are reliable and dependable. Our stakeholders can count on us to deliver on our promises, every time.
              </p>
            </div>
          </div>

          {/* 3. Integrity (1x1) */}
          <div className="spotlight-card bg-white p-6 md:p-8 rounded-2xl flex flex-col gap-4 group hover:-translate-y-1 transition-transform duration-300 reveal-on-scroll delay-200">
            <div className="flex justify-between items-start">
              <iconify-icon
                icon="lucide:shield-check"
                className="text-2xl md:text-3xl text-[#0B143F] group-hover:text-[#FFE11E] transition-colors"
              />
              <span className="text-[10px] font-bold text-zinc-300 font-mono">
                03
              </span>
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-bold text-[#0B143F] mb-2">
                Integrity
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Building relationships on transparency. We do what is right, even when no one is watching.
              </p>
            </div>
          </div>

          {/* 4. Excellence (1x1) */}
          <div className="spotlight-card bg-white p-6 md:p-8 rounded-2xl flex flex-col gap-4 group hover:-translate-y-1 transition-transform duration-300 reveal-on-scroll delay-300">
            <div className="flex justify-between items-start">
              <iconify-icon
                icon="lucide:medal"
                className="text-2xl md:text-3xl text-[#0B143F] group-hover:text-[#FFE11E] transition-colors"
              />
              <span className="text-[10px] font-bold text-zinc-300 font-mono">
                04
              </span>
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-bold text-[#0B143F] mb-2">
                Excellence
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                We refuse to settle for mediocrity. Every product and service aims for the highest standard.
              </p>
            </div>
          </div>

          {/* 5. Responsibility (2x1) */}
          <div className="spotlight-card col-span-1 md:col-span-2 bg-white p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6 group hover:-translate-y-1 transition-transform duration-300 reveal-on-scroll delay-100">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#0B143F] group-hover:scale-110 transition-transform duration-500 shrink-0">
              <iconify-icon
                icon="lucide:users"
                className="text-2xl md:text-3xl"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-between mb-2">
                <h4 className="text-lg md:text-xl font-bold text-[#0B143F]">
                  Responsibility
                </h4>
                <span className="text-[10px] font-bold text-zinc-300 font-mono hidden md:block">
                  05
                </span>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Accountable to our partners, community, and environment. We own our actions and their outcomes.
              </p>
            </div>
          </div>

          {/* 7. Passionate (2x1) [MOVED UP] */}
          <div className="spotlight-card col-span-1 md:col-span-2 bg-white p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6 group hover:-translate-y-1 transition-transform duration-300 reveal-on-scroll delay-200">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#0B143F] group-hover:scale-110 transition-transform duration-500 shrink-0">
              <iconify-icon
                icon="lucide:zap"
                className="text-2xl md:text-3xl"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-between mb-2">
                <h4 className="text-lg md:text-xl font-bold text-[#0B143F]">
                  Passionate
                </h4>
                <span className="text-[10px] font-bold text-zinc-300 font-mono hidden md:block">
                  06
                </span>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Driven by enthusiasm and dedication. We pour our hearts into everything we do to create lasting impact.
              </p>
            </div>
          </div>

          {/* 6. Discipline (1x1) [MOVED DOWN] */}
          <div className="spotlight-card bg-white p-6 md:p-8 rounded-2xl flex flex-col gap-4 group hover:-translate-y-1 transition-transform duration-300 reveal-on-scroll delay-300">
            <div className="flex justify-between items-start">
              <iconify-icon
                icon="lucide:scale"
                className="text-2xl md:text-3xl text-[#0B143F] group-hover:text-[#FFE11E] transition-colors"
              />
              <span className="text-[10px] font-bold text-zinc-300 font-mono">
                07
              </span>
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-bold text-[#0B143F] mb-2">
                Discipline
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Consistent adherence to standards. Efficiency is born from orderly conduct and focused effort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
