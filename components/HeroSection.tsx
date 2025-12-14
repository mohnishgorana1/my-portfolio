"use client";
import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";
import { TextLoop } from "./ui/text-loop";
import { OrbitingCircles } from "./ui/orbiting-circles";
import {
  SiNextdotjs,
  SiReact,
  SiMongodb,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiRedux,
  SiGithub,
  SiHtml5,
  SiFramer,
} from "react-icons/si";
import { ArrowRight, Code2Icon } from "lucide-react";
import { techStacksMap } from "@/lib/constants";

function HeroSection() {
  const words = "Architecting Scalable, High-Performance Web Solutions 💻";
  return (
    <section className="w-full py-16 dark:border-gray-700 flex flex-col md:flex-row justify-between md:gap-x-2 bg-background ">
      <div className="flex flex-col items-start gap-y-8">
        {/* HEADINGS */}
        <div className="flex flex-col gap-y-2">
          <h1
            className="text-gray-900 dark:text-gray-50 // ⬅️ Updated text color
                       text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight"
          >
            Hi there,
          </h1>

          <h2
            className="text-gray-800 dark:text-gray-200 // ⬅️ Updated text color
                       text-4xl sm:text-6xl md:text-7xl font-extrabold leading-none"
          >
            I'm Mohnish Gorana
          </h2>
        </div>
        {/* TEXT LOOP */}
        <TextLoop
          className="w-[90vw] md:w-[420px] py-1.5 px-3 
                     text-xl md:text-2xl 
                     text-gray-800 dark:text-gray-200 // ⬅️ Updated text color
                     bg-gray-200 dark:bg-gray-800 // ⬅️ Updated background color
                     font-mono font-bold rounded-full"
        >
          <span className="text-gray-900 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            MERN Stack Developer
          </span>
          <span className="text-gray-900 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Designing clean UI components
          </span>
          <span className="text-gray-900 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Frontend React Developer
          </span>
        </TextLoop>
        {/* TAGLINE + DESCRIPTION */}
        <div className="space-y-5 max-w-2xl">
          <p
            className="text-lg md:text-xl 
                       text-gray-700 dark:text-gray-400 // ⬅️ Updated text color
                       leading-normal"
          >
            I specialize in MERN and Next.js, crafting scalable, efficient, and
            high-performance web applications with clean architecture and a
            focus on developer experience.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 pt-6">
          {/* Primary Button: View My Work (Already good, but added shadow/focus update) */}
          <Link href="/projects">
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                duration: 0.5,
                stiffness: 100,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex h-12 md:h-14 items-center justify-center overflow-hidden rounded-full bg-blue-600 px-8 font-medium text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-950" // ⬅️ Updated focus ring offset
            >
              <span className="mr-2">View My Work</span>
              <ArrowRight />
            </motion.button>
          </Link>
          {/* Secondary Button: Machine Coding Tasks */}
          <Link href="/machine-coding-tasks">
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                duration: 0.5,
                stiffness: 100,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex h-12 md:h-14 items-center justify-center rounded-full 
                         border border-blue-200 dark:border-blue-700 
                         bg-white dark:bg-gray-900 
                         px-8 font-medium 
                         text-blue-600 dark:text-blue-400 /
                         shadow-sm 
                         transition-colors duration-300 
                         hover:bg-blue-50 dark:hover:bg-blue-900/50
                         hover:text-blue-700 dark:hover:text-blue-300
                         hover:border-blue-300 dark:hover:border-blue-500
                         focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 dark:focus:ring-offset-gray-950"
            >
              <span className="mr-2">Machine Coding Tasks</span>
              <Code2Icon />
            </motion.button>
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE → ORBITING TECH ICONS */}
      <div className="md:max-w-full relative hidden md:flex md:h-[500px] md:w-[500px] items-center justify-center">
        <div className="relative h-[500px] w-full overflow-hidden text-6xl ">
          <OrbitingCircles>
            <SiNextdotjs className="bg-background rounded-full p-2 border-2 size-10 border-black text-black dark:bg-black dark:text-white" />
            <SiNodedotjs className="bg-background rounded-full p-2 border-2 size-10 text-green-700 border-green-700 dark:bg-green-700 dark:text-white" />
            <SiReact className="bg-background rounded-full p-2 border-2 size-10 border-cyan-700 text-cyan-700 dark:bg-cyan-700 dark:text-white" />
            <SiExpress strokeWidth="1" className="bg-background rounded-full p-2 border-2 size-10 border-black text-black dark:text-black dark:border-white dark:bg-white " />
            <SiTailwindcss className="bg-background rounded-full p-2 border-2 size-10 border-blue-700 text-blue-700 dark:bg-blue-700 dark:text-white" />
            <SiMongodb className="bg-background rounded-full p-2 border-2 size-10 border-green-500  text-green-700 dark:bg-green-500 dark:text-white" />
          </OrbitingCircles>
          <OrbitingCircles radius={70} reverse>
            <SiHtml5 className="bg-background rounded-full p-2 border-2 size-10 border-orange-500 text-orange-500 dark:bg-orange-500 dark:text-white" />
            <SiFramer className="bg-background rounded-full p-2 border-2 size-10 border-fuchsia-600 text-fuchsia-600 dark:bg-fuchsia-500 dark:text-white" />
            <SiGithub className="bg-background rounded-full p-2 border-2 size-10 border-black text-black dark:bg-black dark:text-white" />
            <SiTypescript className="bg-background rounded-full p-2 border-2 size-10 border-blue-500 text-blue-500 dark:bg-blue-500 dark:text-white" />
            <SiRedux className="bg-background rounded-full p-2 border-2 size-10 border-purple-700 text-purple-700 dark:text-white dark:bg-purple-700" />
          </OrbitingCircles>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
