"use client";

import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/constants";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  const topProjects = projects.slice(0, 2);

  return (
    <section
      className="
      relative w-full py-24
      bg-background overflow-hidden 
    "
    >
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-gray-50 text-center"
      >
        Featured Projects
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-700 dark:text-gray-400 text-lg lg:text-xl text-center mt-4 max-w-2xl mx-auto"
      >
        A selection of my finest and most impactful work — built with modern
        tech, precision, and creativity.
      </motion.p>

      {/* PROJECT LIST */}
      <div className="md:px-16 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mt-16 auto-rows-fr ">
        {topProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;