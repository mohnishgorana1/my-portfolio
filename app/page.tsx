import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsMovingCarousel from "@/components/SkillsMovingCarousel";
import WhatICanOffer from "@/components/WhatICanOffer";

export default function Home() {
  return (
    <main className="">
      <section className="md:px-4 lg:px-8 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
        <Navbar />
        <HeroSection />
      </section>
      <section className="flex flex-col my-auto mx-auto h-auto">
        <ProjectsSection />
      </section>
      <section className="flex flex-col my-auto mx-auto">
        <WhatICanOffer />
      </section>
    </main>
  );
}
