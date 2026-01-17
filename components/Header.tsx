"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  // Handle scroll effect for sticky/transparent header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "About Us",
      href: "/about/company",
      children: [
        { label: "The Company", href: "/about/company", className: "text-sm font-extrabold" },
        { label: "VMC", href: "/about/company#vision", className: "" },
        { label: "The Management", href: "/about/company#management", className: "" },
      ],
    },
    { label: "Products and Services", href: "/products" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-[#0B143F]/5 ${
          isScrolled
            ? "py-4 px-4 md:px-12 shadow-sm"
            : "py-6 px-4 md:py-8 md:px-12 shadow-sm"
        }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <Image
              src="/logo.png"
              alt="Neo Philippines Corporation Logo"
              width={98}
              height={98}
              className={`transition-all duration-300 object-contain ${
                isScrolled ? "h-10 w-auto" : "h-14 w-auto md:h-16 md:w-auto"
              }`}
            />
            <div
              className={`hidden md:flex flex-col justify-center border-l border-[#0B143F]/20 pl-3 h-10 transition-opacity duration-300 ${
                isScrolled ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
              }`}
            >
              <span className="block text-[10px] uppercase tracking-[0.2em] text-[#0B143F] font-bold leading-none">
                Neo
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-[#0B143F] font-bold leading-none mt-1">
                Philippines
              </span>
              <span className="block text-[8px] uppercase tracking-[0.2em] text-zinc-400 font-medium leading-none mt-1">
                Corporation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group h-full flex items-center"
                onMouseEnter={() => item.children && setIsAboutDropdownOpen(true)}
                onMouseLeave={() => item.children && setIsAboutDropdownOpen(false)}
              >
                <Link
                  href={item.href}
                  className="relative text-xs font-bold uppercase tracking-widest text-[#0B143F] transition-colors py-2 group-hover:text-[#FFE11E]"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FFE11E] transition-all duration-300 group-hover:w-full"></span>
                </Link>

                {item.children && (
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-white/95 backdrop-blur-sm shadow-xl border border-gray-100 rounded-sm py-3 transform transition-all duration-300 origin-top ${
                      isAboutDropdownOpen
                        ? "opacity-100 scale-100 translate-y-0 visible"
                        : "opacity-0 scale-95 -translate-y-2 invisible"
                    }`}
                  >
                    {/* Decorative Triangle */}
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-t border-l border-gray-100"></div>
                    
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className={`block px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B143F] hover:bg-gray-50 hover:text-[#FFE11E] transition-colors ${child.className || ""}`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Call To Action Button (Optional - adds premium feel) */}
            <Link 
              href="/contact"
              className={`hidden xl:inline-block px-6 py-2 border border-[#0B143F] text-[#0B143F] text-xs font-bold uppercase tracking-widest hover:bg-[#0B143F] hover:text-white transition-all duration-300 ${
                isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden text-[#0B143F] hover:text-[#FFE11E] transition-colors p-2"
          >
            <iconify-icon icon="heroicons:bars-3-bottom-right" width="28" height="28"></iconify-icon>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#0B143F] z-[60] transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute top-6 right-4">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white hover:text-[#FFE11E] transition-colors"
          >
            <iconify-icon icon="heroicons:x-mark" width="32" height="32"></iconify-icon>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="text-center">
              {item.children ? (
                <div className="flex flex-col gap-4">
                  <span className="text-xl uppercase tracking-widest font-bold text-white/50">
                    {item.label}
                  </span>
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg text-white hover:text-[#FFE11E] transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl uppercase tracking-widest font-bold text-white hover:text-[#FFE11E] transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
