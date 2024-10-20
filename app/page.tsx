"use client";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsMovingCarousel from "@/components/SkillsMovingCarousel";
import WhatICanOffer from "@/components/WhatICanOffer";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-[500px]">
      <section className="px-4 md:px-8">
        <HeroSection />
      </section>
      <section className="flex flex-col">
        <SkillsMovingCarousel />
      </section>
      <section className="flex flex-col my-auto mx-auto max-w-[90vw]">
        <WhatICanOffer />
      </section>
      <section className="flex flex-col my-auto mx-auto h-auto py-8">
        <ProjectsSection />
      </section>
    </main>
  );
}
