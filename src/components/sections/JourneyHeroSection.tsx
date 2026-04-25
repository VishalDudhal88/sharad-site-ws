"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { servicePillars } from "@/lib/journey-data";

export default function JourneyHeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(".journey-hero-photo",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "expo.out", delay: 0.2 }
    );
  }, { scope: heroRef });

  useGSAP(() => {
    gsap.fromTo(".journey-bio-heading",
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.7, ease: "expo.out",
        scrollTrigger: { trigger: ".journey-bio-heading", start: "top 88%", once: true } }
    );
    gsap.fromTo(".journey-bio-body",
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6, ease: "expo.out", delay: 0.1,
        scrollTrigger: { trigger: ".journey-bio-body", start: "top 88%", once: true } }
    );
    gsap.fromTo(".service-pillar",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "expo.out", stagger: 0.1,
        scrollTrigger: { trigger: ".service-pillars-grid", start: "top 85%", once: true } }
    );
  }, { scope: aboutRef });

  return (
    <>
      {/* Dark hero with portrait */}
      <div ref={heroRef} className="journey-hero">
        {/* Floating sketch elements */}
        
        {/* Portrait */}
        <Image
          src="/images/journey/banner/sharad.webp"
          alt="Sharad Kant"
          width={480}
          height={600}
          className="journey-hero-photo"
          priority
        />
      </div>

      {/* Bio + Service Pillars */}
      <section ref={aboutRef} className="journey-about">
        <div className="container">
          <div className="journey-about-grid">
            {/* Bio */}
            <div>
              <h2 className="journey-bio-heading">
                Product Design Leader with 15+ years of experience across SaaS, blockchain, and
                consumer platforms.
              </h2>
              <p className="journey-bio-body">
                Proven track record in building brands, scaling products, and leading
                cross-functional teams globally.
              </p>
            </div>

            {/* Service Pillars */}
            <div className="service-pillars-grid">
              {servicePillars.map((pillar) => (
                <div key={pillar.title} className="service-pillar">
                  <div className="flex items-center gap-6">
                  <Image
                    src={pillar.iconSrc}
                    alt={pillar.iconAlt}
                    width={88}
                    height={88}
                    className="service-pillar-icon"
                  />
                  <h3 className="service-pillar-title">
                    {pillar.title}
                    {pillar.titleLine2 && (
                      <>
                        <br />
                        {pillar.titleLine2}
                      </>
                    )}
                  </h3>
                  </div>
                  <p className="service-pillar-body">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
