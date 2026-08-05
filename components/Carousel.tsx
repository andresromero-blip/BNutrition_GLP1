"use client";

import { useRef } from "react";
import type { ReactNode } from "react";

// Generic horizontal scroll-snap carousel with prev/next arrow controls,
// matching the "Controles slider" pattern used throughout the Figma file
// (Con proteína / Con fibra / Conoce recetas sections).
export default function Carousel({
  children,
  arrowColor = "text-bn-olive-light",
}: {
  children: ReactNode;
  arrowColor?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-carousel-item]");
    const step = card ? card.offsetWidth + 18 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <div
        ref={trackRef}
        className="w-full flex gap-[18px] md:gap-[59px] overflow-x-auto snap-x snap-mandatory scroll-px-6 px-6 md:px-0 md:justify-center [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
      <div className="flex items-center gap-[15px] md:gap-[25px]">
        <button
          type="button"
          aria-label="Anterior"
          onClick={() => scrollByCard(-1)}
          className={arrowColor}
        >
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" className="md:w-[56px] md:h-[56px]">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
            <path d="M13 9l-3 3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Siguiente"
          onClick={() => scrollByCard(1)}
          className={arrowColor}
        >
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" className="md:w-[56px] md:h-[56px]">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
            <path d="M11 9l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
