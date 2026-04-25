"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { collaborations } from "@/lib/journey-data";

function CollaborationCard({ collab }: { readonly collab: (typeof collaborations)[number] }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, y: 32, scale: 0.97 });

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
    <div ref={ref} className="collaboration-card">
      {collab.label && <p className="collaboration-card-label">{collab.label}</p>}
      <Image
        src={collab.logoSrc}
        alt={collab.logoAlt}
        width={collab.logoWidth}
        height={collab.logoHeight}
        className="object-contain max-w-full max-h-[12rem]"
      />
    </div>
  );
}

export default function CollaborationsSection() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".collaborations-title", {
      opacity: 0,
      y: 16,
      duration: 0.6,
      ease: "expo.out",
      scrollTrigger: { trigger: ".collaborations-title", start: "top 88%", once: true },
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="collaborations-section">
      <div className="container">
        <h2 className="collaborations-title">Notable Collaborations</h2>
        <div className="collaborations-grid">
          {collaborations.map((collab) => (
            <CollaborationCard key={collab.id} collab={collab} />
          ))}
        </div>
      </div>
      <p className="text-center mt-[7rem] mb-[2rem]">
        <Image src="/images/journey/feather-black.svg" alt="Feather" width="65" height="88" className="inline-block"/>
      </p>
    </section>
  );
}
