"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 32,
      duration: 0.75,
      ease: "expo.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        once: true,
      },
    });
  }, { scope: containerRef });

  return (
    <footer ref={containerRef} className="footer-container">
      <div className="container footer-inner">
        <p className="footer-credit-text">
          In Collaboration with{" "}
          <a href="#" className="footer-credit-link">Webster</a>
        </p>

        <div className="footer-peacock">
          <Image
            src="/images/feather.png"
            alt="Decorative peacock feather"
            width={55}
            height={88}
            className="footer-peacock-image"
          />
        </div>

        <div className="footer-social-links">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="footer-social-link" aria-label="LinkedIn profile">
            LinkedIn
          </a>
          <a href="mailto:hello@sharadkant.com"
            className="footer-social-link" aria-label="Send an email">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
