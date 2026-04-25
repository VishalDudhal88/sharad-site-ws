export type ProjectTag = {
  label: string;
};

export type Project = {
  id: string;
  title: string;
  industry: string;
  flagSrc: string;
  flagAlt: string;
  tags: ProjectTag[];
  image:string;
  imageVariant:
    | "ayar-split"
    | "baza"
    | "multiple-brands"
    | "xeni"
    | "soma"
    | "eagle"
    | "bird"
    | "risepath";
};

export const projects: Project[] = [
  {
    id: "ayar",
    title: "AYAR",
    industry: "Apparel, Fashion",
    flagSrc: "/images/india-flag.png",
    flagAlt: "India flag",
    tags: [{ label: "Brand Identity" }, { label: "Logo Design" }],
    image: "/images/ayar2.png",
    imageVariant: "ayar-split",
  },
  {
    id: "baza-foundation",
    title: "BAZA FOUNDATION",
    industry: "NPO, Blockchain",
    flagSrc: "/images/us-flag.png",
    flagAlt: "US flag",
    tags: [
      { label: "Brand Identity" },
      { label: "GTM" },
      { label: "Product Design" },
    ],
    image:"/images/baza.svg",
    imageVariant: "baza",
  },
  {
    id: "multiple-brands",
    title: "MULTIPLE BRANDS",
    industry: "Non Profit & Social Cause Organisations",
    flagSrc: "/images/us-flag.png",
    flagAlt: "US flag",
    tags: [{ label: "Marketing" }, { label: "Ads" }],
    image: "/images/99designs.svg",
    imageVariant: "multiple-brands",
  },
  {
    id: "xeni",
    title: "XENI",
    industry: "Travel, White-Label",
    flagSrc: "/images/us-flag.png",
    flagAlt: "US flag",
    tags: [{ label: "Product Design" }, { label: "GTM Strategy" }],
    image:"/images/xeni-img.png",
    imageVariant: "xeni",
  },
  {
    id: "soma-therapies",
    title: "SOMA THERAPIES",
    industry: "Health, Wellness",
    flagSrc: "/images/us-flag.png",
    flagAlt: "US flag",
    tags: [{ label: "Brand Identity" }, { label: "Logo Design" }, { label: "Strategy" }],
    image:"/images/soma-logo.svg",
    imageVariant: "soma",
  },
  {
    id: "eagle",
    title: "EAGLE",
    industry: "Technology",
    flagSrc: "/images/india-flag.png",
    flagAlt: "India flag",
    tags: [{ label: "Brand Identity" }, { label: "Strategy" }, { label: "Design" }],
    image: "/images//eagle-logo.svg",
    imageVariant: "eagle",
  },
  {
    id: "bird",
    title: "BIRD",
    industry: "Media & Entertainment",
    flagSrc: "/images/india-flag.png",
    flagAlt: "India flag",
    tags: [{ label: "Brand Identity" }, { label: "Illustration" }, { label: "Design" }],
    image:"/images/bird-illustration.jpg",
    imageVariant: "bird",
  },
  {
    id: "risepath",
    title: "RISEPATH",
    industry: "SaaS, Management",
    flagSrc: "/images/india-flag.png",
    flagAlt: "India flag",
    tags: [{ label: "Product Design" }, { label: "Brand Identity" }],
    image: "RisePath.svg",
    imageVariant: "risepath",
  },
];

export const navLinks = [
  { label: "Work", href: "/" },
  { label: "Journey", href: "/journey" },
  { label: "Resources", href: "/resources" },
];

export const filterOptions = [
  { label: "Work", href: "#work" },
  { label: "Industry", href: "#industry" },
  { label: "Geo Location", href: "#geo" },
];
