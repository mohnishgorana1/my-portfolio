"use client";

import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/constants";
import React, { useState } from "react"; // 1. Import useState
import { motion, AnimatePresence } from "framer-motion"; // 2. Import AnimatePresence
import { TextLoop } from "@/components/ui/text-loop";

export default function ProjectsPage() {
  // 3. State to track which card is hovered
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Floating Shapes and Navbar code remains same... */}
      <motion.div
        // initial={{ opacity: 0, scale: 0.8 }}
        // whileInView={{ opacity: 0.4, scale: 1.2 }}
        // // viewport={{ once: true }}
        // transition={{ duration: 0.3}}
        className="absolute top-20 animate-pulse left-1/3 w-80 h-80 rounded-full bg-purple-500/50 dark:bg-purple-600/10 blur-3xl"
      />
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.4, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.4 }}
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-300/40 dark:bg-blue-600/30 blur-3xl"
      /> */}

      {/* Hero Section (Unchanged) */}
      <section className="w-full mx-auto pt-32 pb-12 px-4 text-center relative z-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-7xl font-extrabold text-gray-900 dark:text-gray-50"
        >
          The Ultimate <br /> Full Stack Projects
        </motion.h1>

        {/* ... (Existing Desktop/Mobile Hero Text code) ... */}
        {/* DESKTOP ONLY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="hidden w-full lg:grid grid-cols-12 gap-x-2 mt-10 text-2xl md:text-4xl font-semibold text-gray-900 dark:text-gray-200"
        >
          <span className="col-span-7 text-end">
            Building the web&apos;s future with
          </span>{" "}
          <TextLoop
            interval={2}
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
          <p className="max-w-3xl text-base md:text-xl mt-8 text-gray-700 dark:text-gray-400 mx-auto">
            A hand-picked collection of full stack applications...
          </p>
        </motion.div>
      </section>

      {/* Wavy Divider (Unchanged) */}
      <div className="hidden md:flex overflow-hidden">
        <svg
          className="w-full h-20 text-gray-300 dark:text-gray-900"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,32L48,64C96,96,192,160,288,170.7C384,181,480,139,576,128C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64V0H0Z"
          />
        </svg>
      </div>

      <section className="flex justify-center mt-4 relative z-20 ">
        <motion.span
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-2xl font-medium py-2 px-6 
            rounded-full bg-gradient-to-r from-purple-500 via-violet-600 to-pink-500
            text-white shadow-md shadow-purple-300/30"
        >
          ✨ Featured Projects
        </motion.span>
      </section>

      {/* --- PROJECTS GRID WITH HOVER EFFECT --- */}
      <section className="py-20 lg:px-24 relative z-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.slug || index} // Ensure unique key
              className="relative group block p-1 h-full w-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* 4. The Sliding Background Animation */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-gray-300 dark:bg-slate-800/[0.8] block rounded-[1.8rem]"
                    layoutId="hoverBackground" // This ID makes it slide between items
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.1 },
                    }}
                  />
                )}
              </AnimatePresence>

              {/* 5. The Project Card (Must be on top) */}
              <div className="relative z-20 h-full">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}