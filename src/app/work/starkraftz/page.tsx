import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import MasonryGallery from "./MasonryGallery";

export const metadata: Metadata = {
  title: "Starkraftz — Sharad Kant",
  description:
    "Case study: Product Design & Branding Identity for Starkraftz, a digital-first brand built around productivity and mental clarity.",
};

export default function StarkraftzCaseStudy() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ══ 1. HERO ══ */}
        <section className="case-study__hero">
          <div className="case-study__hero-inner">
            <div className="case-study__hero-left">
              <h1 className="case-study__hero-title text-black">Starkraftz</h1>
              <div className="case-study__hero-meta">
                <p className="case-study__hero-desc">
                  Starkraftz is a digital-first brand that deconstructs the
                  psychology of productivity through visual storytelling. They
                  bridge the gap between high-performance theory and the messy
                  reality of the daily grind. By using a mix of humor and
                  &ldquo;scroll-stopping&rdquo; illustrations, the brand builds
                  a community around the idea of finding mental clarity&mdash;or
                  &ldquo;Moksha&rdquo;&mdash;amidst the chaos of modern work
                  life.
                </p>
                <div className="case-study__hero-stats">
                  <div className="case-study__stat">
                    <span className="case-study__stat-value">500+</span>
                    <span className="case-study__stat-label">
                      Screens, Layouts
                      <br />&amp; Components
                    </span>
                  </div>
                  <div className="case-study__stat">
                    <span className="case-study__stat-value">70+</span>
                    <span className="case-study__stat-label">
                      Countries,
                      <br />Global Reach
                    </span>
                  </div>
                  <div className="case-study__stat">
                    <span className="case-study__stat-value">Work</span>
                    <span className="case-study__stat-label">
                      Product Design &amp;
                      <br />Branding Identity
                    </span>
                  </div>
                  <div className="case-study__stat">
                    <span className="case-study__stat-value">Industry</span>
                    <span className="case-study__stat-label">
                      Travel,
                      <br />White Label
                    </span>
                  </div>
                  <div className="case-study__stat">
                    <span className="case-study__stat-value">Location</span>
                    <span className="case-study__stat-label">
                      New York,
                      <br />USA
                    </span>
                  </div>
                  <div className="case-study__stat">
                    <span className="case-study__stat-value">Website</span>
                    <span className="case-study__stat-label">
                      <a
                        href="https://www.xeni.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.xeni.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="case-study__hero-card">
              <div className="case-study__hero-card-inner">
                <Image src="/images/case-studies/starkraftz/starkraftz.svg"
                                alt="Ayar brand identity overview"
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                className="case-study__hero-card-img"
                                width="409"
                                height="100"
                                priority
                              />
              </div>
            </div>
          </div>
        </section>

        {/* ══ 2. SCOPE ══ */}
        <section className="cs-scope bg-[#55B9C5]">
          <div className="cs-scope__inner">
            <h2 className="cs-scope__heading">Scope</h2>
            <p className="cs-scope__body">
              I was responsible for the ongoing creation of a custom vector
              asset library for the brand&rsquo;s social channels, translating
              complex behavioral habits into a series of high-engagement
              illustrations.
            </p>
          </div>
        </section>

        {/* ══ 3. RDNA ILLUSTRATION SERIES ══ */}
        <section className="cs-rdna">
          <div className="cs-rdna__inner">
            <div className="cs-rdna__left">
              <h2 className="cs-rdna__heading">
                RDNA&nbsp;: RNR
                <br />
                Diagnostics
                <br />
                Networks Analysis
              </h2>
              <p className="cs-rdna__desc">
                A series of hand drawn &amp; through provoking artwork based on
                modern flat design illustrations with attributes &amp;
                messaging&nbsp;:
              </p>
              <ul className="cs-rdna__list">
                <li className="cs-rdna__list-item">
                  Prioritise Time Management
                </li>
                <li className="cs-rdna__list-item">
                  Importance of To-Do List
                </li>
                <li className="cs-rdna__list-item">Self Dependence</li>
                <li className="cs-rdna__list-item">
                  Workload Stress Reduction
                </li>
              </ul>
            </div>
            <div className="cs-rdna__right">
              <div className="cs-rdna__grid-top">
                <div className="cs-rdna__tile cs-rdna__tile--blue p-20" >
                  <Image src="/images/case-studies/starkraftz/img1.svg"
                    alt="RDNA Illustration"
                    width="200"
                    height="600"                    
                  />
                </div>
                <div className="cs-rdna__tile cs-rdna__tile--pink" >
                  <Image src="/images/case-studies/starkraftz/img2.svg"
                    alt="RDNA Illustration" className="p-10"
                    fill
                  />
                </div>                
              </div>             
            </div>
          </div>
        </section>
        
        {/* ══ 5. MASONRY ILLUSTRATION GALLERY ══ */}

        <section className="container">
          
        <MasonryGallery />
      </section>
      </main>
      <Footer />
    </>
  );
}
