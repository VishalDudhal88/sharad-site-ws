"use client";

import { useRef } from "react";
import FilterPill from "@/components/ui/FilterPill";
import { filterOptions } from "@/lib/data";
import { gsap, useGSAP } from "@/lib/gsap";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.fromTo(
      ".hero-headline-line",
      { opacity: 0, y: 56, filter: "blur(8px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.85, stagger: 0.18, clearProps: "filter" }
    ).fromTo(
      ".filter-pill",
      { opacity: 0, y: 20, scale: 0.94 },
      { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.1 },
      "-=0.3"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="hero-section">
      <div className="container">
      <h1 className="hero-headline-wrapper">
        <span className="hero-headline-line">
          Never work hard to seek rewards,
        </span>
        <span className="hero-headline-line">
          Work harder to seek{" "}
          <span className="text-primary">fulfilment!</span>
        </span>
      </h1>

      <div className="filter-pills-container">
        {filterOptions.map((option) => (
          <FilterPill key={option.label} label={option.label} href={option.href} />
        ))}
      </div>
      </div>
    </section>
  );
}
