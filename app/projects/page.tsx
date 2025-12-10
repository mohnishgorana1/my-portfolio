"use client";

import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/constants";
import React from "react";
import { motion } from "framer-motion";
import { TextLoop } from "@/components/ui/text-loop";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background ">
     

      {/* Hero Section */}
      <section className="w-full mx-auto pt-16 pb-12 text-center relative z-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          // Updated: text-gray-900 -> dark:text-gray-50
          className="text-4xl md:text-7xl font-extrabold text-gray-900 dark:text-gray-50"
        >
          The Ultimate <br /> Full Stack Projects
        </motion.h1>

        {/* DESKTOP ONLY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          // Updated: text-gray-900 -> dark:text-gray-200
          className="hidden w-full lg:grid grid-cols-12 gap-x-2 mt-10 text-2xl md:text-4xl font-semibold text-gray-900 dark:text-gray-200"
        >
          <span className="col-span-7 text-end">
            Building the web&apos;s future with
          </span>{" "}
          <TextLoop
            interval={1.3}
            // TextLoop children likely render with the parent's color but keeping the emphasis color.
            className="col-span-5 text-purple-600 font-bold inline-block text-start"
          >
            <span>Full Stack Power</span> <span>Modern Design</span>{" "}
            <span>Unmatched Passion</span>{" "}
          </TextLoop>
        </motion.div>

        {/* MOBILE ONLY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="lg:hidden w-full mt-10 text-2xl md:text-4xl font-semibold text-gray-900 dark:text-gray-200"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            // Updated: text-gray-700 -> dark:text-gray-400
            className="max-w-3xl text-base md:text-xl mt-8 text-gray-700 dark:text-gray-400 mx-auto"
          >
            A hand-picked collection of full stack applications showcasing clean
            architecture, modern UI, scalable backends, and real-world
            integrations.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            // Updated: text-gray-700 -> dark:text-gray-400
            className="max-w-3xl text-base md:text-xl mt-4 text-gray-700 dark:text-gray-400 mx-auto"
          >
            Built using Next.js, TypeScript, MongoDB, Tailwind CSS, and cloud
            technologies.
          </motion.p>
        </motion.div>
      </section>

      {/* Wavy Divider */}
      <div className="overflow-hidden ">
        <svg
          // Updated: text-gray-300 -> dark:text-gray-900 for a subtle dark color, or dark:text-gray-950 to match bg
          className="w-full h-20 text-gray-300 dark:hidden md:hidden" 
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,32L48,64C96,96,192,160,288,170.7C384,181,480,139,576,128C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64V0H0Z"
          />
        </svg>
      </div>

      {/* Badge (The badge itself uses a gradient and white text, so no changes needed there) */}
      <section className="flex justify-center mt-4 relative z-20 ">
        <motion.button
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-2xl font-medium py-2 px-6 
            rounded-full bg-gradient-to-r from-purple-500 via-violet-600 to-pink-500
            text-white shadow-md shadow-purple-300/30"
        >
          ✨ Featured Projects
        </motion.button>
      </section>

      {/* Projects Grid (ProjectCard component will need to handle dark mode internally for card background/text) */}
      <section className="py-20 px-4 md:px-0 relative z-20">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Note: ProjectCard component itself must be updated for dark mode compatibility. */}
          {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}