"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop",
    alt: "Manufacturing",
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop",
    alt: "Logistics",
  },
  {
    src: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2670&auto=format&fit=crop",
    alt: "Merchandise",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="hero-carousel"
      className="absolute inset-0 grayscale contrast-125 opacity-90"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.alt}
          className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
