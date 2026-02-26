"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050a25] text-white pt-0 pb-12 border-t border-white/5 overflow-hidden relative">
      <div className="absolute inset-0 pattern-grid-dark pointer-events-none"></div>

      {/* Marquee Banner */}
      <div className="w-full py-3 overflow-hidden mb-16 relative z-20">
      </div>

      <div className="px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-5">
            <Link
              href="#"
              className="inline-flex items-center gap-4 bg-white px-5 py-2.5 rounded-2xl mb-8 shadow-lg shadow-blue-900/20 hover:scale-105 transition-transform duration-300"
            >
              <Image
                src="/logo.png"
                alt="Neo Philippines Corporation"
                width={120}
                height={120}
                className="h-20 w-auto md:h-24"
              />
              <div className="flex flex-col justify-center border-l border-[#0B143F]/20 pl-4 h-20 md:h-24">
                <span className="block text-base md:text-lg uppercase tracking-widest text-[#0B143F] font-bold leading-none mb-1">
                  Neo
                </span>
                <span className="block text-base md:text-lg uppercase tracking-widest text-[#0B143F] font-bold leading-none">
                  Philippines
                </span>
                <span className="block text-[11px] md:text-xs uppercase tracking-widest text-zinc-400 font-sans leading-none mt-1">
                  Corporation
                </span>
              </div>
            </Link>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Delivering quality services in food manufacturing, custom solutions, and general merchandise. Committed to Mindanao&apos;s sustainable growth through innovation and integrity.
            </p>
          </div>

          {/* Sitemap */}
          <div className="col-span-1 md:col-span-2 md:col-start-7">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-[#FFE11E]">
              Sitemap
            </h4>
            <ul className="space-y-4 text-xs text-zinc-400 font-medium">
              <li>
                <Link
                  href="/"
                  className="hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  Products & Services
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-[#FFE11E]">
              Connect
            </h4>
            <div className="flex flex-col gap-4">
              <Link
                href="#"
                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
              >
                <iconify-icon
                  icon="lucide:facebook"
                  className="text-lg group-hover:text-[#FFE11E] transition-colors"
                />
                <span className="text-xs">Facebook</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/neo-philippines-corporation/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
              >
                <iconify-icon
                  icon="lucide:linkedin"
                  className="text-lg group-hover:text-[#FFE11E] transition-colors"
                />
                <span className="text-xs">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Back to Top */}
          <div className="col-span-1 md:col-span-2 flex flex-col justify-start md:items-end">
            <button
              onClick={handleScrollToTop}
              className="group flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 hover:text-[#FFE11E] transition-colors mt-0 md:mt-1"
            >
              Back to Top
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#FFE11E] group-hover:bg-[#FFE11E] group-hover:text-[#0B143F] transition-all">
                <iconify-icon icon="lucide:arrow-up" />
              </div>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col justify-center items-center gap-4 text-[10px] text-white/30 font-mono uppercase tracking-widest text-center">
          <span>© Neo Philippines Corporation. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
