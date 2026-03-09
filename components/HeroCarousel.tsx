"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/herocarousel/Gemini_Generated_Image_4p21vc4p21vc4p21.png",
    alt: "Manufacturing",
  },
  {
    src: "/herocarousel/52e60033-9e2e-4c9b-acf9-4568f8990569.jpeg",
    alt: "Logistics",
  },
  {
    src: "/herocarousel/Gemini_Generated_Image_t7zbsqt7zbsqt7zb.png",
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
