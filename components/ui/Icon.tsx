"use client";

import { useEffect, useRef, useState } from "react";
import { brandIcons, type BrandIconName } from "@/lib/brandIcons";

interface IconProps {
  name: BrandIconName;
  size?: number;
  className?: string;
  /** Animacja „rysowania" przy wejściu w viewport. Wyłącz dla wariantu statycznego. */
  animate?: boolean;
}

/**
 * Jeden zestaw ikon marki (źródło: Google Drive „web SVG").
 * Renderuje inline SVG, by CSS mógł sterować konturem (data-stroke),
 * akcentem sygnałowym (data-accent / data-fill-accent) i animacją linii
 * (data-draw + --len). Rysowanie odpala się, gdy ikona wejdzie w widok.
 */
export default function Icon({ name, size = 24, className = "", animate = true }: IconProps) {
  const ref = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    if (!animate) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setDrawn(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [animate]);

  const stateClass = animate ? (drawn ? "is-drawn" : "") : "is-static";

  return (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`brand-icon ${stateClass} ${className}`}
      aria-hidden="true"
      focusable="false"
      dangerouslySetInnerHTML={{ __html: brandIcons[name] }}
    />
  );
}
