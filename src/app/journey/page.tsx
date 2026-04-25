import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JourneyHeroSection from "@/components/sections/JourneyHeroSection";
import ToolsSection from "@/components/sections/ToolsSection";
import WorkExperienceSection from "@/components/sections/WorkExperienceSection";
import CollaborationsSection from "@/components/sections/CollaborationsSection";

export const metadata: Metadata = {
  title: "Journey — Sharad Kant",
  description:
    "15+ years of product design, brand identity, and growth design across SaaS, blockchain, and consumer platforms.",
};

export default function JourneyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-surface">
        <JourneyHeroSection />
        <ToolsSection />
        <WorkExperienceSection />
        <CollaborationsSection />
      </main>
      <Footer />
    </>
  );
}
