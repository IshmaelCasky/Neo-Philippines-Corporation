import Link from "next/link";
import HeroCarousel from "./HeroCarousel";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen md:min-h-[900px] grid grid-cols-1 md:grid-cols-12 border-b border-[#0B143F]/10 overflow-hidden">
      {/* Left Content */}
      <div className="col-span-1 md:col-span-7 relative z-20 bg-white px-6 py-20 md:p-16 flex flex-col justify-center border-r border-[#0B143F]/10">
        {/* Decorative Noodle SVG */}
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 z-0"
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

        <div className="relative z-10 mt-12 md:mt-0">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0B143F]/10 bg-blue-50/50 backdrop-blur-md mb-6 md:mb-8 reveal-on-scroll active">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFE11E] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0B143F]"></span>
            </span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-semibold text-[#0B143F]">
              Partner with us now
            </span>
          </div> */}

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-light text-[#0B143F] leading-[1] tracking-tight mb-6 md:mb-8">
            <span className="reveal-text">
              <span>Driving</span>
            </span>
            
            <span className="reveal-text pr-4">
              <span className="delay-100 w-[100%] font-serif italic text-[#0B143F]">
                Sustainable
              </span>
            </span>
           
            <span className="reveal-text">
              <span className="delay-200">Growth.</span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-zinc-500 text-base md:text-xl max-w-md mb-8 md:mb-12 leading-relaxed reveal-on-scroll delay-300">
            a diversified company based in Davao, Philippines, with business interests in Customs Brokerage, Food Manufacturing, and General Merchandise. 
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 reveal-on-scroll delay-300">
            <Link
              href="/about/company"
              className="group relative px-8 py-4 bg-[#0B143F] text-white rounded-lg overflow-hidden transition-transform active:scale-95 btn-beam shadow-xl shadow-blue-900/20 w-full sm:w-auto text-center inline-flex justify-center items-center"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-semibold">
                Discover Who We Are
                <iconify-icon icon="lucide:arrow-right" className="text-lg" />
              </span>
              <div className="absolute inset-0 bg-[#FFE11E] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 z-0 mix-blend-multiply"></div>
            </Link>

            <Link
              href="#contact"
              className="px-8 py-4 bg-transparent border border-[#0B143F]/20 text-[#0B143F] rounded-lg hover:bg-zinc-50 transition-colors text-xs uppercase tracking-widest font-semibold w-full sm:w-auto text-center inline-flex justify-center items-center"
            >
              Partner With Us
            </Link>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="absolute bottom-8 left-6 md:left-16 flex gap-8 md:gap-12 opacity-60">
          <div>
            <span className="block text-xl md:text-2xl font-serif text-[#0B143F]">
              2035
            </span>
            <span className="text-[9px] uppercase tracking-widest text-zinc-500">
              Vision Goal
            </span>
          </div>
          <div>
            <span className="block text-xl md:text-2xl font-serif text-[#0B143F]">
              100%
            </span>
            <span className="text-[9px] uppercase tracking-widest text-zinc-500">
              Commitment
            </span>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="col-span-1 md:col-span-5 relative bg-zinc-100 overflow-hidden min-h-[300px] md:min-h-[400px]">
        <HeroCarousel />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B143F]/20 to-transparent"></div>

        {/* Status Card */}
        <div className="hidden sm:block absolute bottom-8 right-8 md:bottom-12 md:right-12 bg-white/90 backdrop-blur p-4 md:p-6 rounded-none border border-[#0B143F]/10 w-64 shadow-2xl reveal-on-scroll delay-200">
          <div className="flex items-start justify-between mb-4">
            <iconify-icon
              icon="lucide:package"
              className="text-3xl text-[#FFE11E]"
            />
            <span className="text-[10px] font-mono text-[#0B143F]">
              STATUS: ACTIVE
            </span>
          </div>
          <p className="text-xs md:text-sm text-zinc-600 font-sans leading-relaxed">
            Optimizing supply chains across Mindanao for rapid distribution.
          </p>
        </div>
      </div>
    </section>
  );
}
