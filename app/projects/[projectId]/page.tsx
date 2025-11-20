// projects/[projectId]/page.tsx
"use client";

import { projects, techStacksMap } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

function ProjectDetails({ params }: { params: { projectId: string } }) {
  const projectId = params.projectId;
  const currentProject = projects.find((project) => project.id === projectId);

  if (!currentProject) return <div>Project not found</div>;

  const {
    title,
    link,
    thumbnail,
    shortDescription,
    detailedDescription,
    techStacks,
    githubRepositoryUrl,
  } = currentProject;

  return (
    <main className="w-full min-h-[90vh] bg-gray-50 flex flex-col items-center gap-y-12 py-12 px-4 lg:px-20">
      <Navbar />
      {/* Header */}
      <header className="pt-12 w-full flex flex-col items-center gap-y-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="h-12 md:h-20 text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500"
        >
          {title}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-700 font-medium"
        >
          {shortDescription}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full md:w-3/5 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <Image
            src={thumbnail}
            alt={title}
            width={1200}
            height={800}
            className="w-full h-auto object-cover rounded-xl"
          />
        </motion.div>
      </header>

      {/* Links */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 items-center justify-center"
      >
        <Link
          href={githubRepositoryUrl}
          className="px-6 py-2 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-900 transition"
        >
          Source Code
        </Link>
        <Link
          href={link}
          className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          View Project
        </Link>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="w-full md:w-4/5 bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
      >
        <p className="text-gray-700 text-justify text-base md:text-lg leading-relaxed">
          {detailedDescription}
        </p>
      </motion.div>

      {/* Technologies Used */}
      <section className="w-full md:w-4/5 flex flex-col gap-y-6">
        <h3 className="text-2xl font-bold text-gray-800">Technologies Used</h3>
        <div className="flex flex-wrap gap-4">
          {techStacks &&
            techStacks.map((tech, idx) => {
              const techData = techStacksMap[tech];
              if (!techData) return null;
              const Icon = techData.icon;
              const color = techData.color;

              return (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center justify-center gap-2 bg-gray-100 px-4 py-2 rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <Icon size={24} color={color} />
                  <span className="font-semibold text-gray-800">{tech}</span>
                </motion.div>
              );
            })}
        </div>
      </section>
    </main>
  );
}

export default ProjectDetails;
