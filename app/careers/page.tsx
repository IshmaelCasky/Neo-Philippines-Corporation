"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import GlobalScrollObserver from "@/components/GlobalScrollObserver";
import ParallaxBackground from "@/components/ParallaxBackground";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";

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
                 {/* <span className="block text-[#FFE11E] font-bold tracking-[0.2em] uppercase mb-4 reveal-on-scroll">
                    Join Our Team
                </span> */}
                <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 reveal-on-scroll leading-tight">
                   Build a Sustainable Future with Us
                </h1>
                <p className="text-zinc-200 text-lg md:text-xl font-light max-w-2xl mx-auto reveal-on-scroll delay-100">
                    Be part of a dynamic organization driven by excellence, innovation, and a commitment to sustainable growth.
                </p>
            </div>
        </section>

        {/* ABOUT NEO COLLAGE SECTION */}
        <section className="py-24 px-4 md:px-12 bg-white relative z-20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 reveal-on-scroll">
                    <span className="text-xs font-bold tracking-widest text-[#0B143F]/60 uppercase mb-4 block">
                        Our Culture
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#0B143F] mb-6">
                        Life at Neo
                    </h2>
                    <p className="text-[#0B143F]/70 text-lg leading-relaxed max-w-2xl mx-auto">
                        We believe that our people are our greatest asset. Here is a glimpse into the collaborative, dynamic, and passionate environment that drives our success.
                    </p>
                </div>

                {/* Bento Box Collage Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
                    {/* Large Hero Card */}
                    <div className="col-span-2 row-span-2 bg-zinc-200 rounded-3xl reveal-on-scroll shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden relative group">
                        <ImageCarousel 
                            images={[
                                "/neo/1d12c171-7c7d-4e71-85e9-84907c4dad0c.jpeg",
                                "/neo/27562766-9731-4c8b-951c-614eeac6a70a.jpeg",
                                "/neo/2a0273a9-9081-4de8-9b3c-cad479e0f941.jpeg",
                                "/neo/3c9d03b1-9feb-497f-8e78-558fe4042d77 (1).jpeg",
                                "/neo/3c9d03b1-9feb-497f-8e78-558fe4042d77.jpeg",
                            ]}
                            interval={5000}
                            delay={0}
                        />
                    </div>
                    
                    {/* Tall Vertical Card */}
                    <div className="col-span-1 row-span-2 bg-zinc-200 rounded-3xl reveal-on-scroll shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden relative group">
                        <ImageCarousel 
                            images={[
                                "/neo/44aadcf0-9e0c-407a-a366-388e70e845e2.jpeg",
                                "/neo/52e60033-9e2e-4c9b-acf9-4568f8990569.jpeg",
                                "/neo/5c77c026-b6c7-4cc9-a344-76ee88ae23f0.jpeg",
                                "/neo/6a76fc54-43a7-44e0-a367-883f4ed25469.jpeg",
                            ]}
                            interval={5500}
                            delay={500}
                        />
                    </div>
                    
                    {/* Square Card 1 */}
                    <div className="col-span-1 row-span-1 bg-zinc-200 rounded-3xl reveal-on-scroll shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden relative group">
                        <ImageCarousel 
                            images={[
                                "/neo/72c5e8d1-561a-4889-bc35-2b1ba30ca9ea.jpeg",
                                "/neo/8815c3c3-318a-4a74-ad44-fe4df0309f35.jpeg",
                                "/neo/8c459aaf-c9e5-4d66-a245-a933e48a237a.jpeg",
                                "/neo/950e4d61-abbd-4cec-aafb-f9b8ed616633.jpeg",
                            ]}
                            interval={6000}
                            delay={1000}
                        />
                    </div>
                    
                    {/* Square Card 2 */}
                    <div className="col-span-1 row-span-1 bg-zinc-200 rounded-3xl reveal-on-scroll shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden relative group">
                        <ImageCarousel 
                            images={[
                                "/neo/9838631a-0954-4894-9f60-34c9bc0ca27e.jpeg",
                                "/neo/b8d47d3d-5722-44bb-a4a5-06ad537e42e6.jpeg",
                                "/neo/d47886ee-fdff-4ebb-8f8e-45239cf41e80.jpeg",
                                "/neo/d84af2d6-5fc6-4a09-a710-1db2352b33c1.jpeg",
                            ]}
                            interval={4800}
                            delay={1500}
                        />
                    </div>
                    
                    {/* Wide Landscape Card */}
                    <div className="col-span-2 md:col-span-3 row-span-1 bg-zinc-200 rounded-3xl reveal-on-scroll shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden relative group">
                        <ImageCarousel 
                            images={[
                                "/neo/c03dfd8b-45ca-48f1-b9a2-250ae5f0185a.jpeg",
                                "/neo/db1fdc04-c496-4d3d-8d28-26d436099c72.jpeg",
                                "/neo/df188b5e-cfb2-4aaf-8686-feedb3a5420b.jpeg",
                                "/neo/eb3525f5-45b4-4006-bdc0-90eed7f5e368.jpeg",
                            ]}
                            interval={5200}
                            delay={2000}
                        />
                    </div>
                    
                    {/* Square Card 3 */}
                    <div className="col-span-2 md:col-span-1 row-span-1 bg-zinc-200 rounded-3xl reveal-on-scroll shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden relative group">
                        <ImageCarousel 
                            images={[
                                "/neo/f0a14e84-d6de-43e7-bb2b-807d0e360c5d.jpeg",
                                "/neo/f70c6ada-6a78-4fec-886d-1af61b67b6fc.jpeg",
                                "/neo/fc6c7b1f-6752-428c-bc88-b14e8163ec02.jpeg",
                                "/neo/2c487acc-d4f3-4ba2-81b8-dc628db7e4c0.jpeg",
                            ]}
                            interval={5800}
                            delay={2500}
                        />
                    </div>
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
