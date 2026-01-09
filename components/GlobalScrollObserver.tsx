"use client";

import { useEffect } from "react";

export default function GlobalScrollObserver() {
  useEffect(() => {
    // 1. Scroll Reveal Observer
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    document
      .querySelectorAll(".reveal-on-scroll")
      .forEach((el) => observer.observe(el));

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return null;
}
