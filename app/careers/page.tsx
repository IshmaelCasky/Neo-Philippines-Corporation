"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import GlobalScrollObserver from "@/components/GlobalScrollObserver";
import ParallaxBackground from "@/components/ParallaxBackground";
import Footer from "@/components/Footer";

const VALUES = [
  {
    title: "Growth & Development",
    description: "We invest in our people, providing continuous learning opportunities and clear career pathways.",
    icon: "📈",
  },
  {
    title: "Innovation",
    description: "We challenge the status quo and encourage creative solutions to drive industry progress.",
    icon: "💡",
  },
  {
    title: "Community",
    description: "We are committed to making a positive impact on the communities we serve and the environment.",
    icon: "🤝",
  }
];

export default function CareersPage() {
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
        
        {/* HERO SECTION */}
        <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center">
             {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                    alt="Careers at Neo Philippines"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-[#0B143F]/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B143F] via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 text-center max-w-4xl px-4">
                 <span className="block text-[#FFE11E] font-bold tracking-[0.2em] uppercase mb-4 reveal-on-scroll">
                    Join Our Team
                </span>
                <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 reveal-on-scroll leading-tight">
                    Build the Future With Us
                </h1>
                <p className="text-zinc-200 text-lg md:text-xl font-light max-w-2xl mx-auto reveal-on-scroll delay-100">
                    Be part of a dynamic organization driven by excellence, innovation, and a commitment to sustainable growth.
                </p>
            </div>
        </section>

        {/* VALUES SECTION */}
        <section className="py-24 px-4 md:px-12 bg-white">
             <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-4xl font-serif text-[#0B143F] mb-4">Why Join Neo?</h2>
                     <p className="text-[#0B143F]/60 max-w-2xl mx-auto">
                        We offer more than just a job. We offer a career where you can grow, make an impact, and be part of a supportive family.
                     </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {VALUES.map((value, idx) => (
                        <div key={idx} className="p-8 border border-zinc-100 bg-zinc-50/50 rounded-sm hover:shadow-lg transition-all duration-300 group">
                            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                            <h3 className="text-xl font-serif text-[#0B143F] mb-3">{value.title}</h3>
                            <p className="text-[#0B143F]/70 text-sm leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
             </div>
        </section>

        {/* GENERAL APPLICATION SECTION */}
        <section className="py-24 px-4 md:px-12 bg-[#0B143F]/5">
            <div className="max-w-4xl mx-auto text-center">
                 <span className="text-xs font-bold tracking-widest text-[#0B143F]/60 uppercase mb-4 block reveal-on-scroll">
                    Work With Us
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-[#0B143F] mb-8 reveal-on-scroll">
                    Start Your Journey Here
                </h2>
                <p className="text-[#0B143F]/70 text-lg leading-relaxed mb-12 reveal-on-scroll max-w-2xl mx-auto">
                    We are always looking for passionate, talented, and driven individuals to join our growing team. 
                    If you share our values and want to make a difference, we want to hear from you.
                </p>

                <div className="bg-white p-8 md:p-12 rounded-sm shadow-xl reveal-on-scroll border border-[#0B143F]/5">
                    <h3 className="text-2xl font-serif text-[#0B143F] mb-4">
                        Send Your Application
                    </h3>
                    <p className="text-[#0B143F]/60 mb-8 max-w-lg mx-auto">
                        Please send your resume and a brief cover letter telling us about yourself and how you can contribute to our team.
                    </p>

                    <a href="mailto:careers@neophilippines.com" className="mt-6 text-lg font-bold text-[#0B143F] hover:text-[#FFE11E] transition-colors border-b-2 border-[#FFE11E]">
                        careers@neophilippines.com
                    </a>
                </div>
            </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
