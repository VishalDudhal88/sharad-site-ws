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
<<<<<<< HEAD
          <a href="https://webster.co.in/" className="footer-credit-link" target="_blank">Webster</a>
=======
          <a href="#" className="footer-credit-link">Webster</a>
>>>>>>> 6cbee9ac89c34e68205e519d3cdeb49b52beae36
        </p>

        <div className="footer-peacock">
          <Image
            src="/images/feather.png"
            alt="Decorative peacock feather"
<<<<<<< HEAD
            width={65}
=======
            width={55}
>>>>>>> 6cbee9ac89c34e68205e519d3cdeb49b52beae36
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
