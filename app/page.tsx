"use client";
import HeroSection from "@/components/HeroSection";
import SkillsMovingCarousel from "@/components/SkillsMovingCarousel";
import WhatICanOffer from "@/components/WhatICanOffer";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-[500px]">
      <section className="px-4 md:px-8">
        <HeroSection />
      </section>
      <section className="flex flex-col my-auto mx-auto">
        <SkillsMovingCarousel />
      </section>
      <section className="flex flex-col my-auto mx-auto ">
        <WhatICanOffer />
      </section>
    </main>
  );
}
