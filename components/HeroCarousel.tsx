"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/herocarousel/1311b544-eb32-48f6-87dc-6d094529a127.jpeg",
    alt: "Manufacturing",
  },
  {
    src: "/herocarousel/52e60033-9e2e-4c9b-acf9-4568f8990569.jpeg",
    alt: "Logistics",
  },
  {
    src: "/herocarousel/7c80fe38-3863-42ac-9c91-326737ed4acb.jpeg",
    alt: "Merchandise",
  },
  {
    src: "/herocarousel/524819d0-6b47-4c49-9d5c-fe59c61b5a0d.jpeg",
    alt: "Brokerage",
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
            className="object-cover grayscale"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
