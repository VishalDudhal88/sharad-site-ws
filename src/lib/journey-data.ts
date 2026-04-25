export type ServicePillar = {
  readonly title: string;
  readonly titleLine2?: string;
  readonly description: string;
  readonly iconSrc: string;
  readonly iconAlt: string;
};

export const servicePillars: ServicePillar[] = [
  {
    title: "Product",
    titleLine2: "Design",
    description: "UX Strategy, Interaction Design, Design Systems, User Research",
    iconSrc: "/images/journey/product-icon.svg",
    iconAlt: "Product Design illustration",
  },
  {
    title: "Brand &",
    titleLine2: "Identity",
    description: "Visual Identity, Brand Strategy, Storytelling",
    iconSrc: "/images/journey/icon-brand-identity.png",
    iconAlt: "Brand & Identity illustration",
  },
  {
    title: "Business &",
    titleLine2: "Growth",
    description: "Product Strategy, GTM Strategy, Growth Design",
    iconSrc: "/images/journey/business-icon.svg",
    iconAlt: "Business & Growth illustration",
  },
];

export type Tool = {
  readonly label: string;
  readonly labelLine2?: string;
  readonly iconSrc: string;
  readonly bgColor?: string;
};

export const tools: Tool[] = [
  { label: "Figma",     iconSrc: "/images/journey/figma-icon.svg" },
  { label: "Adobe",     labelLine2: "Suite",  iconSrc: "/images/journey/adobe.svg" },
  { label: "Notion",    iconSrc: "/images/journey/tool-notion.png" },
  { label: "Diffusion", labelLine2: "Bee",    iconSrc: "/images/journey/diffusion.svg" },
  { label: "Gemini",    labelLine2: "Pro",    iconSrc: "/images/journey/gemine-icon.svg" },
  { label: "Procreate", iconSrc: "/images/journey/procreate.svg" },
  { label: "Jira",      iconSrc: "/images/journey/jeera-icon.svg",   bgColor: "#ffffff" },
  { label: "Claude",    iconSrc: "/images/journey/claude-icon.svg", bgColor: "#ffffff" },
  { label: "Sketch",    iconSrc: "/images/journey/sketch-icon.svg" },
  { label: "Comfy",     iconSrc: "/images/journey/comfy.svg" },
];

export type ExperienceEntry = {
  readonly id: string;
  readonly company: string;
  readonly role: string;
  readonly dateRange: string;
  readonly industry: string;
  readonly location: string;
  readonly description?: string;
  readonly logoSrc: string;
  readonly logoBg?: string;
  readonly flagSrc: string;
  readonly flagAlt: string;
};

export type ExperienceEra = {
  readonly label: string;
  readonly entries: ExperienceEntry[];
  readonly index: number;
};

export const workExperience: ExperienceEra[] = [
  {
    index:1,
    label: "2005 – 2015",
    entries: [
      {
        id: "amateur-freelancing",
        company: "Amateur\nFreelancing",
        role: "",
        dateRange: "2008 – 2012",
        industry: "Multiple Industries",
        location: "India",
        logoSrc: "/images/journey/flag-india.png",
        flagSrc: "",
        flagAlt: "India flag",
      },
      {
        id: "professional-freelancing",
        company: "Professional\nFreelancing",
        role: "",
        dateRange: "2012 – 2014",
        industry: "Multiple Industries",
        location: "Global",
        logoSrc: "/images/journey/globe.png",
        flagSrc: "",
        flagAlt: "Global",
      },
      {
        id: "zebrogs-tech",
        company: "Zebrogs Tech",
        role: "Graphic Designer",
        dateRange: "2014 – 2015",
        industry: "IT Services",
        location: "India",
        logoSrc: "/images/journey/logo-zebrogs.png",
        flagSrc: "/images/journey/flag-india.png",
        flagAlt: "India flag",
      },
    ],
  },
  {
    index:2,
    label: "2015 – 2020",
    entries: [
      {
        id: "wish-a-design",
        company: "Wish A Design",
        role: "Managing Director",
        dateRange: "2015 – 2017",
        industry: "Multiple Industries",
        location: "India",
        description:
          "Founded multi-disciplinary agency. Scaled from college startup to managing IT services for a global clientele.",
        logoSrc: "/images/journey/logo-wish-a-design.png",
        logoBg: "#22304b",
        flagSrc: "/images/journey/flag-india.png",
        flagAlt: "India flag",
      },
      {
        id: "ekata-social",
        company: "Ekata Social LLC",
        role: "Senior Product Designer",
        dateRange: "2017 – 2018",
        industry: "Multiple Industries",
        location: "India",
        description:
          "Community & social tech. Designed end-to-end consumer platform and brand identity, boosting engagement.",
        logoSrc: "/images/journey/logo-ekata.png",
        flagSrc: "/images/journey/flag-india.png",
        flagAlt: "India flag",
      },
      {
        id: "cryptonia-poker",
        company: "Cryptonia Poker",
        role: "Senior Product Designer",
        dateRange: "2018 – 2018",
        industry: "Multiple Industries",
        location: "UAE",
        description:
          "Led branding & front-end design for a blockchain based gambling platform, Reducing CAC & Improving retention.",
        logoSrc: "/images/journey/logo-cryptonia.png",
        logoBg: "#304fff",
        flagSrc: "/images/journey/flag-uae.png",
        flagAlt: "UAE flag",
      },
      {
        id: "baza-foundation",
        company: "Baza Foundation",
        role: "Senior Product Designer",
        dateRange: "2018 – 2020",
        industry: "Multiple Industries",
        location: "US",
        description:
          "NPO & Community platform — UBI with Blockchain. Led the design for brand identity and full consumer product.",
        logoSrc: "/images/baza.svg",
        flagSrc: "/images/journey/flag-us.png",
        flagAlt: "US flag",
      },
    ],
  },
  {
    index:3,
    label: "2020 – 2025",
    entries: [
      {
        id: "livo",
        company: "Livo",
        role: "Design Head",
        dateRange: "2020 – 2022",
        industry: "Multiple Industries",
        location: "Denmark",
        description:
          "Logistics & Product Transport. Redesigned brand, web & app with Danish team. Boosted sales impact.",
        logoSrc: "/images/journey/logo-livo.png",
        flagSrc: "/images/journey/flag-denmark.png",
        flagAlt: "Denmark flag",
      },
      {
        id: "xeni",
        company: "Xeni",
        role: "Lead Product Designer",
        dateRange: "2022 – 2025",
        industry: "Travel, White-Label",
        location: "US",
        description:
          "White-label travel. Re-positioned identity. Designed end-to-end booking engine, XeniPay and Expedition Travel platforms.",
        logoSrc: "/images/xeni-img.png",
        logoBg: "#FF9D00",
        flagSrc: "/images/journey/flag-us.png",
        flagAlt: "US flag",
      },
    ],
  },
  {
    index:4,
    label: "2025 – Present",
    entries: [
      {
        id: "roger-n-reckon",
        company: "Roger N Reckon",
        role: "Product Head & Advisor",
        dateRange: "2025 – 2026",
        industry: "Multiple Industries",
        location: "India",
        description:
          "Hardware ecosystem startup. Led brand identity, product design, service, sales & UX strategies. Now Advisor.",
        logoSrc: "/images/journey/flag-india.png",
        flagSrc: "/images/journey/flag-india.png",
        flagAlt: "India flag",
      },
    ],
  },
];

export type Collaboration = {
  readonly id: string;
  readonly name: string;
  readonly logoSrc: string;
  readonly logoAlt: string;
  readonly logoWidth: number;
  readonly logoHeight: number;
  readonly label?: string;
};

export const collaborations: Collaboration[] = [
  {
    id: "bhartiya",
    name: "Bhartiya Vimanpatan",
    logoSrc: "/images/journey/collab-dell.png",
    logoAlt: "Bhartiya Vimanpatan",
    logoWidth: 149,
    logoHeight: 32,
  },
  {
    id: "dell",
    name: "Dell Technologies",
    logoSrc: "/images/journey/collab-bakers-circle.png",
    logoAlt: "Dell Technologies",
    logoWidth: 180,
    logoHeight: 80,
  },
  {
    id: "bakers-circle",
    name: "Baker's Circle",
    logoSrc: "/images/journey/bakers.png",
    logoAlt: "Baker's Circle",
    logoWidth: 160,
    logoHeight: 80,
  },
  {
    id: "eu-bureau",
    name: "EU Bureau",
    logoSrc: "/images/journey/bureau.png",
    logoAlt: "EU Bureau",
    logoWidth: 160,
    logoHeight: 90,
  },
  {
    id: "facebook-99designs",
    name: "Facebook / 99designs",
    logoSrc: "/images/journey/facebook.svg",
    logoAlt: "Facebook collaboration",
    logoWidth: 160,
    logoHeight: 80,
  },
  
];
