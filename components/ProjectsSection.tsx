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
      relative w-full py-24 px-4 lg:px-24 
      bg-gradient-to-br from-blue-100 via-fuchsia-200/30 to-indigo-200
      overflow-hidden
    "
    >
      {/* SOFT BACKGROUND ORNAMENTS */}
      <div className="absolute top-10 -left-10 w-60 h-60 bg-blue-500/50 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-10 -right-10 w-72 h-72 bg-blue-500/50 blur-3xl rounded-full pointer-events-none" />

      {/* SECTION HEADING */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl lg:text-6xl font-extrabold text-gray-900 text-center"
      >
        Featured Projects
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-700 text-lg lg:text-xl text-center mt-4 max-w-2xl mx-auto"
      >
        A selection of my finest and most impactful work — built with modern
        tech, precision, and creativity.
      </motion.p>

      {/* PROJECT LIST */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mt-16 auto-rows-fr">
        {topProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: true }}
            // 2. Add h-full here to make the wrapper fill the grid cell height
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
