import React from "react";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { LampContainer } from "./ui/lamp";
import { SparklesCore } from "./ui/sparkles";

const skills = [
  {
    title: "NEXT JS",
    logo: "/assets/icons/next.svg",
  },
  {
    title: "React",
    logo: "/assets/icons/react-icon.svg",
  },
  {
    title: "Express JS",
    logo: "/assets/icons/exp1.svg",
  },
  {
    title: "MongoDB",
    logo: "/assets/icons/",
  },
  {
    title: "Typescript",
    logo: "/assets/icons/",
  },
  {
    title: "Javascript",
    logo: "/assets/icons/",
  },
  {
    title: "Tailwind CSS",
    logo: "/assets/icons/",
  },
  {
    title: "NODE JS",
    logo: "/assets/icons/",
  },
];

function SkillsMovingCarousel() {
  return (
    <div>
      <HeroHighlight className="flex items-center h-full pt-12 flex-col gap-y-12">
        <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="text-3xl md:text-4xl lg:text-7xl opacity-70 ">
            <p>Skills to Watch Out</p>
          </h1>
        </div>
        <InfiniteMovingCards items={skills} speed="normal" />
      </HeroHighlight>
    </div>
  );
}

export default SkillsMovingCarousel;
