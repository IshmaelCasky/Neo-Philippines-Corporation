"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Only run on desktop
    const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isDesktop) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Direct, instant movement using translate3d for performance
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);
    
    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    // Hover detection
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".spotlight-card") ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA"
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @media (hover: hover) and (pointer: fine) {
          body, a, button, input, textarea {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Main Cursor Container - Moves Instantly */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 will-change-transform ${
          hidden ? "opacity-0" : "opacity-100"
        }`}
        style={{ left: 0, top: 0 }} // Reset position to work purely with transform
      >
        <div className="relative flex items-center justify-center">
          {/* Default Dot */}
          <div
            className={`absolute w-3 h-3 bg-[#0B143F] rounded-full transition-all duration-200 ease-out ${
              hovered ? "opacity-0 scale-50" : "opacity-100 scale-100"
            }`}
          />

          {/* Hover Ring */}
          <div
            className={`absolute w-8 h-8 rounded-full border border-[#0B143F] transition-all duration-200 ease-out ${
              hovered
                ? "scale-[2.5] bg-[#FFE11E]/20 border-transparent"
                : "scale-0 opacity-0"
            } ${clicking ? "scale-[2]" : ""}`}
          />
        </div>
      </div>
    </>
  );
}

