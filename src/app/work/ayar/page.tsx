import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Ayar Brand Identity — Sharad Kant",
  description:
    "Xeni is the world's leading white label travel selling platform, offering no-code, low-code and API solutions for selling bookable travel at wholesale rates. Xeni's white label platform is a B2B solution that powers subscribers to instantly resell travel online to their audiences. Subscribers can launch their own booking engine, complete with a full suite of bookable inventory at wholesale rates.",
};

/* ─── Colour palettes ─── */
const palettes = [
  {
    name: "Palette 1 — Attributes",
    attrs: "Premium, Luxurious, Ambitious, Creative, Warmth",
    primary: "#4B2659",
    light: "#D9C9DE",
    secondary: "#8B1A1A",
    dark: "#1A1214",
    block1: "#4B2659",
    block2: "#8B1A1A",
  },
  {
    name: "Palette 2 : Attributes",
    attrs: "Premium, Modern, Calm, Confidence, Loyalty",
    primary: "#1A237E",
    light: "#E8EAF6",
    secondary: "#C9A96E",
    dark: "#0D1216",
    block1: "#1A237E",
    block2: "#C9A96E",
  },
  {
    name: "Palette 3 : Attributes",
    attrs: "Premium Max, Luxurious, Impactful, Rich",
    primary: "#111111",
    light: "#D8D8D8",
    secondary: "#C9A96E",
    dark: "#0A0A0A",
    block1: "#111111",
    block2: "#C9A96E",
  },
];

/* ─── Rejected palette colour pairs (24 items) ─── */
const rejectedColors = [
  "#E8A020", "#D4821A", "#1A237E", "#C9A96E", "#8B2020", "#4B2659",
  "#1A5C1A", "#C0C0C0", "#E8A020", "#1A6B8B", "#111111", "#8B6B2A",
  "#E8A020", "#8B2020", "#2A5C8B", "#C9A96E", "#4B2659", "#1A6B1A",
  "#8B8B8B", "#E8C840", "#C1440F", "#2A1A6B", "#6B4B2A", "#888888",
];

export default function AyarCaseStudy() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ══ 1. HERO ══ */}
        <section className="case-study__hero">
          <div className="case-study__hero-inner">
            <div className="case-study__hero-left">
              <h1 className="case-study__hero-title">Ayar</h1>
              <div className="case-study__hero-meta">
                <p className="case-study__hero-desc">
                  Xeni is the world's leading <u>white label travel selling platform</u>, offering no-code, low-code and API solutions for selling bookable travel at wholesale rates. Xeni's white label platform is a B2B solution that powers subscribers to instantly resell travel online to their audiences. Subscribers can launch their own booking engine, complete with a full suite of bookable inventory at wholesale rates.
                </p>
                <div className="case-study__hero-stats">
                  <div className="case-study__stat">
                    <span className="case-study__stat-value">500+</span>
                    <span className="case-study__stat-label">Screens, Layouts<br/>& Components</span>
                  </div>
                  <div className="case-study__stat">
                    <span className="case-study__stat-value">70+</span>
                    <span className="case-study__stat-label">Countries, <br/>
Global Reach </span>
                  </div>
                  <div className="case-study__stat">
                    <span className="case-study__stat-value">Work</span>
                    <span className="case-study__stat-label">Product Design &<br/>
Branding Identity</span>
                  </div>
                  <div className="case-study__stat">
                    <span className="case-study__stat-value">Industry</span>
                    <span className="case-study__stat-label">Travel,<br/> 
White Label</span>
                  </div>
                  <div className="case-study__stat">
                    <span className="case-study__stat-value">Location</span>
                    <span className="case-study__stat-label">New York, 
USA</span>
                  </div>
                  <div className="case-study__stat">
                    <span className="case-study__stat-value">Website</span>
                    <span className="case-study__stat-label">www.xeni.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="case-study__hero-card">
              <div className="case-study__hero-card-inner">
              <Image
                src="/images/case-studies/ayar/ayar-banner.png"
                alt="Ayar brand identity overview"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="case-study__hero-card-img"
                width="299"
                height="351"
                priority
              />
              </div>
            </div>
          </div>
        </section>

        {/* ══ 2. SCOPE ══ */}
        <section className="cs-scope ayar-scope">
          <div className="cs-scope__inner">
            <h2 className="cs-scope__heading">Scope</h2>
            <p className="cs-scope__body">
              Ayar sought a brand identity that positioned them as a premium player in the artisanal leather and fashion space. The goal was to conceptualise a strong visual identity with a  mark that felt both "Modern" and "Environmentally Conscious," appealing to a demographic that values longevity over fast fashion.
            </p>
          </div>
        </section>

        {/* ══ 3. COMPETITIVE LANDSCAPE + BRAND POSITIONING ══ */}
        <section className="cs-research">
          {/* Left — Competitive Landscape */}  
          <div className="cs-research__left container">
            <h2 className="cs-research__heading">Competitive Landscape</h2>
            <Image src="/images/case-studies/ayar/compet.png" alt="Competitive landscape for Ayar" width={657} height={452} />
          </div>

          {/* Right — Brand Identity Positioning */}
          <div className="cs-research__right">
            <h2 className="cs-research__heading cs-research__heading--light">
              Ayar Brand Identity Positioning
            </h2>
            <div className="cs-axes">
             <Image src="/images/case-studies/ayar/ayar-right.svg" alt="Competitive landscape for Ayar" width={657} height={452} />
            </div>
          </div>
        </section>

        {/* ══ 4. USER PERSONAS ══ */}
        <section className="cs-personas">
          <div className="container">
            <h2 className="section-heading">User Personas</h2>
            <p className="section-subheading">These are few of the research based personas generated for the brand Ayar.</p>
<div className="cs-personas__grid">
            {/* Persona 1 — Sandeep */}
            <div className="cs-persona-card cs-persona-card--pink">
              <div className="cs-card-inner">
              <div className="cs-persona__header">
                <Image className="cs-persona__photo cs-img-placeholder" src="/images/case-studies/ayar/prof1.png" alt="Sandeep Bishnoi" width={250} height={250} />
                <div>
                  <p className="cs-persona__name">Sandeep<br />Bishnoi</p>
                  <p className="cs-persona__demographics">
                    25 Years<br />Single<br />B-Tech Graduate<br />Born in Gurgaon<br />Works at a Call Centre
                  </p>
                </div>
              </div>
              
              <div>
                <p className="cs-persona__section-title">Story</p>
                <p className="cs-persona__section-body">
                  Sandeep is a B-Tech graduate working in a call center after missing
                  campus placement. As the youngest child, he is secular but
                  occasionally joins his family in prayer.
                </p>
              </div>
              <div className="cs-card-bottom">
              <div>
                <p className="cs-persona__section-title">Requirements / Needs</p>
                <p className="cs-persona__section-body">
                  Wants an MNC career to support family, buy quality goods, and
                  maintain steady cash flow.
                </p>
              </div>
              <div>
                <p className="cs-persona__section-title">His Differentiator</p>
                <p className="cs-persona__section-body">
                  Ambitious but lacks steady drive; constantly looks for shortcuts
                  and easy ways to success.
                </p>
              </div>
              <div>
                <p className="cs-persona__section-title">Motivation to interact with Ayar</p>
                <p className="cs-persona__section-body">
                  Seeks premium products through sales with easy returns and
                  friendly, fun communication.
                </p>
              </div>
              </div>
            </div>
            </div>

            {/* Persona 2 — Nitin */}
            <div className="cs-persona-card cs-persona-card--green">
              <div className="cs-card-inner">
              <div className="cs-persona__header">
                <Image className="cs-persona__photo cs-img-placeholder" src="/images/case-studies/ayar/prof2.png" alt="Sandeep Bishnoi" width={250} height={250} />
                <div>
                  <p className="cs-persona__name">Nitin<br />Khurana</p>
                  <p className="cs-persona__demographics">
                    28 Years<br />In a relationship<br />H.M. Graduate<br />Lives in Mumbai<br />Flight attendant
                  </p>
                </div>
              </div>
              
              <div>
                <p className="cs-persona__section-title">Story</p>
                <p className="cs-persona__section-body">
                  Nitin is a hotel management graduate and flight attendant flying
                  global routes. He loves shopping in new cities to collect cultural
                  mementos of his travels.
                </p>
              </div>
              <div className="cs-card-bottom">
              <div>
                <p className="cs-persona__section-title">Requirements / Needs</p>
                <p className="cs-persona__section-body">
                  Aims to buy a private home once financially secure and dreams of
                  becoming a professional pilot.
                </p>
              </div>
              <div>
                <p className="cs-persona__section-title">His Differentiator</p>
                <p className="cs-persona__section-body">
                  Driven by a superiority complex; he invests in premium quality and
                  hates cheap, flimsy materials.
                </p>
              </div>
              <div>
                <p className="cs-persona__section-title">Motivation to interact with Ayar</p>
                <p className="cs-persona__section-body">
                  Drawn to the utilitarian aesthetics of the products and expects
                  professional, clear communication.
                </p>
              </div>
              </div>
            </div>
            </div>

            {/* Persona 3 — Ankit */}
            <div className="cs-persona-card cs-persona-card--gray">
              <div className="cs-card-inner">
              <div className="cs-persona__header">
                <Image className="cs-persona__photo cs-img-placeholder" src="/images/case-studies/ayar/prof3.png" alt="Sandeep Bishnoi" width={250} height={250} />
                <div>
                  <p className="cs-persona__name">Ankit<br />Sharma</p>
                  <p className="cs-persona__demographics">
                    33 Years<br />Married<br />M.com / Certified CA<br />Lives in Bangalore<br />Manager at CA Firm
                  </p>
                </div>
              </div>
              
              <div>
                <p className="cs-persona__section-title">Story</p>
                <p className="cs-persona__section-body">
                  Ankit worked his way from a Gwalior middle-class background to
                  owning a home in Bangalore. He lives with his wife and enjoys the
                  occasional vacation.
                </p>
              </div>
              <div className="cs-card-bottom">
              <div>
                <p className="cs-persona__section-title">Requirements / Needs</p>
                <p className="cs-persona__section-body">
                  Aspires to become an entrepreneur by starting a CA firm and is
                  currently saving for a new car.
                </p>
              </div>
              <div>
                <p className="cs-persona__section-title">His Differentiator</p>
                <p className="cs-persona__section-body">
                  Exhibits a highly professional, neat, and organised nature in all
                  of his daily interactions.
                </p>
              </div>
              <div>
                <p className="cs-persona__section-title">Motivation to interact with Ayar</p>
                <p className="cs-persona__section-body">
                  Seeks simple, comfortable products to organise gear and expects
                  professional service quality.
                </p>
              </div>
              </div>
            </div>
            </div>
</div>
          </div>
        </section>

        {/* ══ 5. BRAND LOGO CONCEPT SKETCH DRAFTS ══ */}
        <section className="cs-sketches">
          <div className="cs-inner">
            <h2 className="cs-heading" style={{ fontSize: "1.75rem" }}>
              Brand Logo Concept Sketch Drafts
            </h2>
            <p className="cs-sketches__theme">Theme - Modern Geometric</p>

            {/* Concepts A, B, C */}
            <div className="cs-concept-row-3">
              {["A", "B", "C"].map((letter) => (
                <div key={letter} className="cs-concept-box">
                  <p className="cs-concept-box__title">Concept {letter}</p>
                  <p className="cs-concept-box__meta">
                    <strong>Construction</strong> – &apos;A&apos; &amp; &apos;R&apos; from brand name AYAR<br />
                    <strong>Ideology</strong> – Solid bold letter with weight behind
                  </p>
                  <div className="cs-concept-img-grid">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="cs-concept-img-tile cs-img-placeholder" />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Concepts D & E */}
            <div className="cs-concept-row-2">
              <div className="cs-concept-box">
                <p className="cs-concept-box__title">Concept D</p>
                <p className="cs-concept-box__meta">
                  <strong>Construction</strong> – &apos;A&apos; &amp; &apos;R&apos; from brand name AYAR<br />
                  <strong>Ideology</strong> – Solid bold letter with weight behind geometrics shapes.
                </p>
                <div className="cs-concept-img-grid">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="cs-concept-img-tile cs-img-placeholder" />
                  ))}
                </div>
              </div>
              <div className="cs-concept-box">
                <p className="cs-concept-box__title">Concept E</p>
                <p className="cs-concept-box__meta">
                  <strong>Construction</strong> – &apos;A&apos; &amp; &apos;R&apos; from brand name AYAR<br />
                  <strong>Ideology</strong> – Solid bold letter with weight behind geometrics shapes.
                </p>
                <div className="cs-concept-img-grid">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="cs-concept-img-tile cs-img-placeholder" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 6. OTHER CONCEPT DRAFTS ══ */}
        <section className="cs-other-drafts">
          <div className="cs-inner">
            <h2 className="cs-other-drafts__heading">Other Concept Drafts</h2>
            <div className="cs-draft-grid">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="cs-draft-tile cs-img-placeholder" />
              ))}
            </div>
          </div>
        </section>

        {/* ══ 7. BRAND IDEATION — VARIANTS ══ */}
        <section className="cs-variants">
          <div className="cs-variants__grid">

            {/* Variant 1 — Modern Geometric */}
            <div className="cs-variant-card">
              <div className="cs-variant-card__header">
                <p className="cs-variant-card__label">Variant 1</p>
                <h3 className="cs-variant-card__title">Modern Geometric</h3>
              </div>
              <div className="cs-variant-card__main">
                <Image
                  src="/images/ayar2.png"
                  alt="Variant 1 Modern Geometric"
                  fill
                  sizes="33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="cs-variant-card__sub-grid">
                <div className="cs-variant-card__sub-tile cs-img-placeholder" />
                <div className="cs-variant-card__sub-tile cs-img-placeholder" />
              </div>
            </div>

            {/* Variant 2 — Ultra Premium */}
            <div className="cs-variant-card">
              <div className="cs-variant-card__header">
                <p className="cs-variant-card__label">Variant 2</p>
                <h3 className="cs-variant-card__title">Ultra Premium</h3>
              </div>
              <div className="cs-variant-card__main" style={{ background: "#111111" }}>
                <Image
                  src="/images/ayar-leather.jpg"
                  alt="Variant 2 Ultra Premium"
                  fill
                  sizes="33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="cs-variant-card__sub-grid">
                <div className="cs-variant-card__sub-tile cs-img-placeholder" />
                <div className="cs-variant-card__sub-tile cs-img-placeholder" />
              </div>
            </div>

            {/* Variant 3 — Environment Friendly */}
            <div className="cs-variant-card">
              <div className="cs-variant-card__header">
                <p className="cs-variant-card__label">Variant 3</p>
                <h3 className="cs-variant-card__title">Environment Friendly</h3>
              </div>
              <div className="cs-variant-card__main">
                <Image
                  src="/images/ayar-leaves.webp"
                  alt="Variant 3 Environment Friendly"
                  fill
                  sizes="33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="cs-variant-card__sub-grid">
                <div className="cs-variant-card__sub-tile cs-img-placeholder" />
                <div className="cs-variant-card__sub-tile cs-img-placeholder" />
              </div>
            </div>

          </div>
        </section>

        {/* ══ 8. WE HAVE A WINNER ══ */}
        <section className="cs-winner">
          <h2 className="cs-winner__heading">We have a winner</h2>
          <p className="cs-winner__quote">
            Richard &amp; Yogita are long term professionals in their field and best
            thing about that is they knew exactly what they wanted to convey in brand
            identity.
          </p>
          <div className="cs-winner__image">
            <Image
              src="/images/ayar-leaves.webp"
              alt="Winner reveal — Ayar logo on leaves"
              fill
              sizes="90vw"
              style={{ objectFit: "cover" }}
              priority={false}
            />
          </div>

          {/* Logo Construction */}
          <div className="cs-logo-construction">
            <div>
              <p className="cs-construction__label">Vertical</p>
              <p className="cs-construction__sublabel">Logo Construction</p>
              <div className="cs-construction__diagram cs-img-placeholder" />
            </div>
            <div>
              <p className="cs-construction__label">Horizontal</p>
              <p className="cs-construction__sublabel">Logo Construction</p>
              <div className="cs-construction__diagram cs-img-placeholder" />
            </div>
          </div>
        </section>

        {/* ══ 9. COLOUR PALETTE EXPLORATION ══ */}
        <section className="cs-palettes">
          <h2 className="cs-palettes__heading">Colour Palette Exploration</h2>
          <p className="cs-palettes__subtext">
            This clarity allowed me to break away from the traditional back and forth
            drafting process..
          </p>
          <div className="cs-palettes__grid">
            {palettes.map((p) => (
              <div key={p.name} className="cs-palette-card">
                <div className="cs-palette-card__header">
                  <p className="cs-palette-card__name">{p.name}</p>
                  <p className="cs-palette-card__attrs">{p.attrs}</p>
                </div>
                <div className="cs-palette-card__swatches">
                  <div className="cs-swatch-circle" style={{ backgroundColor: p.primary }} />
                  <span className="cs-swatch-label">Primary</span>
                  <div className="cs-swatch-circle" style={{ backgroundColor: p.light }} />
                  <span className="cs-swatch-label">Light</span>
                  <div className="cs-swatch-circle" style={{ backgroundColor: p.secondary }} />
                  <span className="cs-swatch-label">Secondary</span>
                  <div className="cs-swatch-circle" style={{ backgroundColor: p.dark }} />
                  <span className="cs-swatch-label">Dark</span>
                </div>
                <div className="cs-palette-card__blocks">
                  <div className="cs-palette-block" style={{ backgroundColor: p.block1 }} />
                  <div className="cs-palette-block" style={{ backgroundColor: p.block2 }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ 10. REJECTED PALETTE ══ */}
        <section className="cs-rejected">
          <div className="cs-inner">
            <h2 className="cs-rejected__heading">Rejected Palette</h2>
            <div className="cs-rejected__grid">
              {rejectedColors.map((hex, i) => (
                <div
                  key={i}
                  className="cs-rejected__item"
                  style={{ backgroundColor: hex, color: "rgba(255,255,255,0.7)" }}
                >
                  AYAR
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 11. FINAL LOGO ══ */}
        <section className="cs-final-logo">
          <h2 className="cs-final-logo__heading">Final Logo</h2>
          <div className="cs-final-grid">
            {/* Row 1 */}
            <div className="cs-final-tile" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/images/ayar-logo.png"
                alt="Ayar final logo on white"
                fill
                sizes="25vw"
                className="cs-final-tile__img--contain"
              />
            </div>
            <div className="cs-final-tile" style={{ aspectRatio: "4/3", background: "#C9A96E" }}>
              <Image
                src="/images/ayar.png"
                alt="Ayar logo on packaging"
                fill
                sizes="25vw"
                className="cs-final-tile__img--contain"
              />
            </div>
            <div className="cs-final-tile cs-final-tile--tall" style={{ aspectRatio: "unset", gridRow: "span 2" }}>
              <Image
                src="/images/ayar2.png"
                alt="Ayar logo mark circle"
                fill
                sizes="25vw"
                className="cs-final-tile__img"
              />
            </div>
            <div className="cs-final-tile" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/images/ayar-leather.jpg"
                alt="Ayar logo on leather"
                fill
                sizes="25vw"
                className="cs-final-tile__img"
              />
            </div>
            {/* Row 2 */}
            <div className="cs-final-tile" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/images/ayar-leaves.webp"
                alt="Ayar brand in nature"
                fill
                sizes="25vw"
                className="cs-final-tile__img"
              />
            </div>
            <div className="cs-final-tile cs-final-tile--span2" style={{ aspectRatio: "2/1" }}>
              <Image
                src="/images/ayar2.png"
                alt="Ayar wordmark horizontal"
                fill
                sizes="50vw"
                className="cs-final-tile__img--contain"
              />
            </div>
          </div>
        </section>

        {/* ══ 12. BRAND GUIDE PREVIEW ══ */}
        <section className="cs-brand-guide">
          <h2 className="cs-brand-guide__heading">Brand Guide Preview</h2>
          <p className="cs-brand-guide__body">
            This clarity allowed me to break away from the traditional back and forth
            drafting process. Instead, we sat down for one-on-one collaborative
            sessions where I sketched out ideas in real-time based on our
            conversation. This was a phenomenal success, as it allowed us to align
            on the final design much faster than a standard drafting cycle.
          </p>
          <div className="cs-guide-grid">
            {/* Row 1 */}
            <div className="cs-guide-slide" style={{ background: "#1A237E" }}>
              <div style={{ padding: "1.5rem", color: "#fff", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <p style={{ fontSize: "0.6875rem", color: "#C9A96E", fontWeight: 700, marginBottom: "0.25rem" }}>Brand</p>
                <p style={{ fontSize: "1.25rem", fontWeight: 700 }}>Guidelines</p>
                <p style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.6)", marginTop: "0.25rem" }}>A Visual Brand Guide by Sharad Kant</p>
              </div>
            </div>
            <div className="cs-guide-slide">
              <div style={{ padding: "1.5rem", height: "100%", display: "flex", flexDirection: "column" }}>
                <p style={{ fontSize: "0.75rem", color: "#C9A96E", fontWeight: 700, marginBottom: "0.75rem" }}>INDEX</p>
                {["Brand Brief", "Brand Strategy", "Consumer Personas", "Keywords / Attributes", "Brand Directions", "Brand Identity", "Logo Design", "Color Palette", "Brand Pattern", "Typography System", "Mockups", "Conclusion"].map((item, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #eee", padding: "0.2rem 0", fontSize: "0.625rem", color: "#444" }}>
                    <span>{item}</span>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="cs-guide-slide" style={{ background: "#1A237E" }}>
              <div style={{ padding: "1.5rem", color: "#fff", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <p style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.5)", marginBottom: "0.5rem" }}>AYAR IS NOT A</p>
                <p style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.1 }}>BRAND<br />BUT A<br />FEELING</p>
              </div>
            </div>
            {/* Row 2 */}
            <div className="cs-guide-slide">
              <div style={{ padding: "1.25rem", height: "100%", display: "flex", flexDirection: "column" }}>
                <p style={{ fontSize: "0.625rem", color: "#C9A96E", fontWeight: 700, marginBottom: "0.75rem" }}>TYPOGRAPHY SYSTEM</p>
                {["Bold", "Semibold", "Medium", "Regular", "Light"].map((w, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                    <span style={{ fontSize: "0.625rem", color: "#666" }}>Aa</span>
                    <span style={{ fontSize: `${0.8 - i * 0.08}rem`, fontWeight: 700 - i * 100 > 0 ? 700 - i * 100 : 400, color: "#0D1525" }}>Montserrat {w}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="cs-guide-slide">
              <div style={{ padding: "1.25rem", height: "100%", display: "flex", flexDirection: "column" }}>
                <p style={{ fontSize: "0.625rem", color: "#C9A96E", fontWeight: 700, marginBottom: "0.75rem" }}>LOGO VARIANT</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.5rem", flex: 1 }}>
                  {["V1", "V2", "V3"].map((v) => (
                    <div key={v} style={{ background: "#F5F5F5", borderRadius: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6875rem", color: "#293790", fontWeight: 700 }}>{v}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className="cs-guide-slide">
              <div style={{ padding: "1.25rem", height: "100%", display: "flex", flexDirection: "column" }}>
                <p style={{ fontSize: "0.625rem", color: "#C9A96E", fontWeight: 700, marginBottom: "0.75rem" }}>TYPEFACE : MONTSERRAT</p>
                <div style={{ display: "flex", flexWrap: "wrap", fontSize: "0.5rem", color: "#444", lineHeight: 1.8, fontWeight: 600 }}>
                  {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((c) => (
                    <span key={c} style={{ marginRight: "0.3rem" }}>{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 13. WALLET DESIGN ══ */}
        <section className="cs-wallet">
          <h2 className="cs-wallet__heading">Wallet Design</h2>
          <div className="cs-wallet__layout">
            <div>{/* intentionally empty — dark bg fills left */}</div>
            <div className="cs-wallet__grid">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="cs-wallet__sketch cs-img-placeholder" />
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
