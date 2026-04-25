"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { workExperience, type ExperienceEra } from "@/lib/journey-data";
import ExperienceCard from "@/components/ui/ExperienceCard";

function EraBlock({ era }: { readonly era: ExperienceEra }) {
  return (
    <div className="experience-era" data-index={era.index}>
      <div className="experience-era-header">
        <span className="experience-era-label">{era.label}</span>
      </div>
      <div className="experience-cards-grid">
        {era.entries.map((entry) => (
          <ExperienceCard key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
}

export default function WorkExperienceSection() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".experience-section-title", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "expo.out",
      scrollTrigger: { trigger: ".experience-section-title", start: "top 88%", once: true },
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="experience-section">
      <div className="container">
        <h2 className="experience-section-title">Work Experience</h2>
        {workExperience.map((era) => (
          <EraBlock key={era.label} era={era} />
        ))}
      </div>
    </section>
  );
}
