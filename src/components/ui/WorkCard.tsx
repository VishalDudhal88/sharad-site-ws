"use client";

import { useRef } from "react";
import { type Project } from "@/lib/data";
import FlagAvatar from "@/components/ui/FlagAvatar";
import TagList from "@/components/ui/TagList";
import Image from "next/image";
import {
  AyarCardImage,
  BazaCardImage,
  MultipleBrandsCardImage,
  XeniCardImage,
  SomaCardImage,
  EagleCardImage,
  BirdCardImage,
  RisepathCardImage,
} from "@/components/ui/CardImages";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

type WorkCardProps = {
  readonly project: Project;
};

// Captured once at module load — used to gate cards behind hero completion
const PAGE_LOAD_TIME = Date.now();
const HERO_COMPLETE_MS = 1600;

function CardImageSwitch({ variant }: { readonly variant: Project["imageVariant"] }) {
  switch (variant) {
    case "ayar-split":       return <AyarCardImage />;
    case "baza":             return <BazaCardImage />;
    case "multiple-brands":  return <MultipleBrandsCardImage />;
    case "xeni":             return <XeniCardImage />;
    case "soma":             return <SomaCardImage />;
    case "eagle":            return <EagleCardImage />;
    case "bird":             return <BirdCardImage />;
    case "risepath":         return <RisepathCardImage />;
    default:                 return null;
  }
}

export default function WorkCard({ project }: WorkCardProps) {
  const { title, industry, flagSrc, flagAlt, tags, image, imageVariant } = project;
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    // Start hidden
    gsap.set(el, { opacity: 0, y: 52, scale: 0.96 });

    ScrollTrigger.create({
      trigger: el,
      start: "top 92%",
      once: true,
      onEnter: () => {
        // Remaining ms of hero animation at the moment this card enters view
        const delay = Math.max(0, HERO_COMPLETE_MS - (Date.now() - PAGE_LOAD_TIME)) / 1000;
        gsap.to(el, { opacity: 1, y: 0, scale: 1, duration: 0.65, delay, ease: "expo.out" });
      },
    });
  }, { scope: ref });

  return (
    <article ref={ref} className="work-card group cursor-pointer">
      <CardImageSwitch variant={imageVariant} />
      
      <div className="work-card-content">
        <div className="work-card-header">
          <div className="work-card-header-text">
            <h3 className="work-card-title">{title}</h3>
            <p className="work-card-industry">{industry}</p>
          </div>
          <FlagAvatar src={flagSrc} alt={flagAlt} />
        </div>
        <TagList tags={tags} />
      </div>
    </article>
  );
}
