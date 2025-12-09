import AboutSection from "@/components/AboutSection";
import ContactMe from "@/components/ContactMe";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsMovingCarousel from "@/components/SkillsMovingCarousel";
import WhatICanOffer from "@/components/WhatICanOffer";

export default function Home() {
  return (
    <main className="">
      <section className="">
        <HeroSection />
      </section>
      <section id="about" className="py-16">
        <AboutSection />
      </section>
      <section className="flex flex-col my-auto mx-auto h-auto">
        <ProjectsSection />
      </section>
      <section id="contact" className="py-16">
        <ContactMe />
      </section>
      <section className="">
        <WhatICanOffer />
      </section>
    </main>
  );
}
