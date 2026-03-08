"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  interval?: number;
  altPrefix?: string;
  delay?: number;
}

export default function ImageCarousel({ images, interval = 5000, altPrefix = "Neo Image", delay = 0 }: ImageCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hasStarted, setHasStarted] = useState(delay === 0);

  useEffect(() => {
    let startTimeout: NodeJS.Timeout;
    if (delay > 0) {
        startTimeout = setTimeout(() => {
            setHasStarted(true);
        }, delay);
    }

    return () => {
        if (startTimeout) clearTimeout(startTimeout);
    }
  }, [delay])

  useEffect(() => {
    if (!hasStarted) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, hasStarted]);

  return (
    <div className="absolute inset-0">
      {images.map((src, index) => (
        <div
          key={src}
          className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
        >
          <Image
            src={src}
            alt={`${altPrefix} ${index + 1}`}
            fill
            className="object-cover md:group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      ))}
    </div>
  );
}
