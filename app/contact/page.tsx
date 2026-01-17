"use client";

import { useEffect, useRef } from "react";
import GlobalScrollObserver from "@/components/GlobalScrollObserver";
import ParallaxBackground from "@/components/ParallaxBackground";
import Footer from "@/components/Footer";

export default function ContactPage() {
    const sectionRef = useRef<HTMLDivElement>(null);

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
    <main>
      <GlobalScrollObserver />
      <ParallaxBackground />
      <div ref={sectionRef} className="max-w-[1440px] mx-auto relative z-10 bg-white shadow-2xl shadow-blue-900/5 min-h-screen flex flex-col">
        
        <div className="flex-grow">
            <section className="bg-[#0B143F] py-24 px-6 md:py-32 md:px-12 relative overflow-hidden min-h-[80vh] flex items-center">
                {/* Gradient Blob */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#FFE11E] rounded-full blur-[100px] md:blur-[150px] opacity-5 pointer-events-none"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 relative z-10 w-full max-w-7xl mx-auto">
                    {/* Left Content */}
                    <div className="reveal-on-scroll flex flex-col justify-center">
                    <span className="text-[10px] font-mono text-[#FFE11E] block mb-6 tracking-widest uppercase">
                        Get In Touch
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
                        Let's Start a Conversation.
                    </h1>
                    <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-12 max-w-lg font-light">
                        Have a question or proposal? We'd love to hear from you. Reach out to us and we'll respond as soon as we can.
                    </p>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="flex items-start gap-6 text-white/80 group">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FFE11E] group-hover:text-[#0B143F] transition-colors shrink-0 border border-white/10">
                            <iconify-icon icon="lucide:map-pin" width="20" height="20" />
                        </div>
                        <div>
                            <h5 className="text-base font-bold text-white mb-2">
                            Headquarters
                            </h5>
                            <p className="text-white/50 leading-relaxed">
                            123 Industrial Ave, Davao City
                            <br />
                            Mindanao, Philippines 8000
                            </p>
                        </div>
                        </div>
                        
                        <div className="flex items-start gap-6 text-white/80 group">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FFE11E] group-hover:text-[#0B143F] transition-colors shrink-0 border border-white/10">
                            <iconify-icon icon="lucide:mail" width="20" height="20" />
                        </div>
                        <div>
                            <h5 className="text-base font-bold text-white mb-2">General Inquiries</h5>
                            <a href="mailto:info@neophilippines.com" className="text-white/50 hover:text-[#FFE11E] transition-colors">
                            info@neophilippines.com
                            </a>
                        </div>
                        </div>

                         <div className="flex items-start gap-6 text-white/80 group">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FFE11E] group-hover:text-[#0B143F] transition-colors shrink-0 border border-white/10">
                            <iconify-icon icon="lucide:phone" width="20" height="20" />
                        </div>
                        <div>
                            <h5 className="text-base font-bold text-white mb-2">Phone</h5>
                            <a href="tel:+63822223333" className="text-white/50 hover:text-[#FFE11E] transition-colors">
                            +63 (82) 222-3333
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>

                    {/* Right Form */}
                    <div className="bg-white p-8 md:p-12 rounded-sm shadow-2xl reveal-on-scroll delay-100 self-center">
                    <h3 className="text-2xl font-serif text-[#0B143F] mb-8">Send us a message</h3>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-xs uppercase tracking-widest text-[#0B143F]/50 font-bold">
                            First Name
                            </label>
                            <input
                            type="text"
                            className="w-full bg-zinc-50 border-b border-zinc-200 p-3 text-[#0B143F] placeholder-zinc-400 focus:outline-none focus:border-[#0B143F] transition-colors"
                            placeholder="John"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs uppercase tracking-widest text-[#0B143F]/50 font-bold">
                            Last Name
                            </label>
                            <input
                            type="text"
                            className="w-full bg-zinc-50 border-b border-zinc-200 p-3 text-[#0B143F] placeholder-zinc-400 focus:outline-none focus:border-[#0B143F] transition-colors"
                            placeholder="Doe"
                            />
                        </div>
                        </div>
                        <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-widest text-[#0B143F]/50 font-bold">
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="w-full bg-zinc-50 border-b border-zinc-200 p-3 text-[#0B143F] placeholder-zinc-400 focus:outline-none focus:border-[#0B143F] transition-colors"
                            placeholder="john@company.com"
                        />
                        </div>
                        <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-widest text-[#0B143F]/50 font-bold">
                            Message
                        </label>
                        <textarea
                            className="w-full bg-zinc-50 border-b border-zinc-200 p-3 text-[#0B143F] placeholder-zinc-400 focus:outline-none focus:border-[#0B143F] transition-colors resize-none h-32"
                            placeholder="How can we help you?"
                        />
                        </div>
                        <button
                        type="button"
                        className="group w-full py-4 bg-[#0B143F] text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-[#FFE11E] hover:text-[#0B143F] transition-colors flex items-center justify-center gap-2"
                        >
                        Send Message
                        <iconify-icon
                            icon="lucide:send"
                            width="16"
                            className="group-hover:translate-x-1 transition-transform"
                        />
                        </button>
                    </form>
                    </div>
                </div>
            </section>
        </div>
        <Footer />
      </div>
    </main>
  );
}
