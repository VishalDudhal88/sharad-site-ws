"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import type { ExperienceEntry } from "@/lib/journey-data";

type ExperienceCardProps = {
  readonly entry: ExperienceEntry;
};

export default function ExperienceCard({ entry }: ExperienceCardProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, y: 40, scale: 0.97 });

    ScrollTrigger.create({
      trigger: el,
      start: "top 92%",
      once: true,
      onEnter: () => {
        gsap.to(el, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "expo.out" });
      },
    });
  }, { scope: ref });

  return (
    <article ref={ref} className="experience-card">
      <div className="experience-card-top">
        <div className="flex items-center gap-6">
        <div
          className="experience-card-logo"
          style={entry.logoBg ? { backgroundColor: entry.logoBg } : undefined}
        >
          <Image
            src={entry.logoSrc}
            alt={`${entry.company} logo`}
            width={56}
            height={56}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
        <h3 className="experience-card-name">{entry.company}</h3>
        <p className="experience-card-role">{entry.role}</p>
        </div>
        </div>
        <span className="experience-card-date">{entry.dateRange}</span>
      </div>
      
      {entry.description && (                
          <p className="experience-card-description">{entry.description}</p>        
      )}
<div className="experience-card-divider" />
      <div className="experience-card-footer">        
        <div className="experience-card-meta">
          <div>Industry : <span>{entry.industry}</span></div>
          <div>Location : <span>{entry.location}</span></div>
        </div>
        {entry.flagSrc && (
          <div className="experience-card-flag">
            <Image
              src={entry.flagSrc}
              alt={entry.flagAlt}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </article>
  );
}
