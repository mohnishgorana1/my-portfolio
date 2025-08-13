import React from "react";
import { projects } from "@/lib/constants";
import { HoverEffect } from "./ui/card-hover-effect";
import ProjectCard from "./ProjectCard";
import { FocusCards } from "./ui/focus-cards";
import { FocusCardsProjects } from "./ui/focus-cards-projects";

function ProjectsSection() {
  return (
    <section className="px-4 lg:px-24 py-20  flex flex-col items-center gap-y-8 ">
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-5xl lg:text-8xl font-bold opacity-80">Projects</h1>
        <span className="flex text-xl py-1 px-4 rounded-xl bg-gradient-to-r from-purple-500 from-10% via-violet-700 via-40% to to-pink-600 to-80% hover:from-pink-600 hover:via-violet-400 hover:to-purple-500 duration-700  ease-linear">
          <span>Explore My Projects &nbsp; </span>
          <span className="hidden md:flex">
            Innovative Solutions Crafted with Passion and Expertise
          </span>
        </span>
      </div>
      {/* projects card */}
      <section className="mt-12 flex flex-col items-center justify-center w-full">
        <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-16">
          {projects.map((project, idx) => (
            <ProjectCard project={project} key={idx} />
          ))}
        </div>
      </section>
      {/* <FocusCardsProjects cards={projects} /> */}
    </section>
  );
}

export default ProjectsSection;
