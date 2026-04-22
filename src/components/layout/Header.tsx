"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Linkedin, Mail, Menu, X } from "react-feather";
import BrandLogo from "@/assets/brand-logo.svg";
import { navLinks } from "@/lib/data";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Header() {
  const containerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.from(".brand-link",          { opacity: 0, y: -20, duration: 0.7 })
      .from(".nav-list-item",       { opacity: 0, y: -16, duration: 0.5, stagger: 0.1 }, "-=0.4")
      .from(".header-social-icons", { opacity: 0, y: -16, duration: 0.5 }, "-=0.25")
      .from(".hamburger-btn",       { opacity: 0, duration: 0.4 }, "-=0.4");
  }, { scope: containerRef });

  return (
    <header ref={containerRef} className="header-container">
      <div className="container header-inner">
        <Link href="/" className="brand-link group" aria-label="Sharad Kant — Home">
          <div className="brand-logo">
            <BrandLogo aria-hidden="true" className="w-full h-full" />
          </div>
          <div className="brand-text">
            <span className="brand-name">Sharad Kant</span>
            <span className="brand-tagline">Branding &amp; Product Designer</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-6 md:gap-10" aria-label="Main navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.label} className="nav-list-item">
                <a
                  href={link.href}
                  className={link.active ? "nav-link-active" : "nav-link"}
                  aria-current={link.active ? "page" : undefined}
                >
                  {link.label}
                </a>
                {link.active && <span className="nav-active-indicator" aria-hidden="true" />}
              </li>
            ))}
          </ul>

          <div className="header-social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="header-social-link" aria-label="LinkedIn profile" title="LinkedIn">
              <Linkedin size={20} aria-hidden="true" />
            </a>
            <a href="mailto:hello@sharadkant.com"
              className="header-social-link" aria-label="Send an email" title="Email">
              <Mail size={20} aria-hidden="true" />
            </a>
          </div>
        </nav>

        {/* Hamburger — mobile only */}
        <button
          className="hamburger-btn sm:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? " mobile-menu-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="container mobile-menu-inner">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`mobile-nav-link${link.active ? " mobile-nav-link-active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-nav-social">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="header-social-link" aria-label="LinkedIn profile">
              <Linkedin size={20} aria-hidden="true" />
            </a>
            <a href="mailto:hello@sharadkant.com"
              className="header-social-link" aria-label="Send an email">
              <Mail size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
