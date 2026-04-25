"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { tools } from "@/lib/journey-data";

export default function ToolsSection() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".tools-card", {
      opacity: 0,
      y: 24,
      duration: 0.7,
      ease: "expo.out",
      scrollTrigger: { trigger: ".tools-card", start: "top 88%", once: true },
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="tools-section">
      <div className="container">
        <div className="tools-card">
          <p className="tools-label">Preferred Tools &amp; Knowledge Base</p>
          <div className="tools-grid">
            {tools.map((tool) => (
              <div key={tool.label} className="tool-item">
                <div
                  className="tool-icon"
                  style={tool.bgColor ? { backgroundColor: tool.bgColor } : undefined}
                >
                  <Image
                    src={tool.iconSrc}
                    alt={tool.label}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="tool-label">
                  {tool.label}
                  {tool.labelLine2 && (
                    <>
                      <br />
                      {tool.labelLine2}
                    </>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
