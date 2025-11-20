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
} from "react-icons/si";
import { ArrowRight, Code2Icon, CodeIcon, Dot, DotIcon } from "lucide-react";

function HeroSection() {
  const words = "Architecting Scalable, High-Performance Web Solutions 💻";

  return (
    <section className=" md:mx-auto w-full py-24 md:py-32 border-b border-gray-200 flex flex-col md:flex-row justify-between md:gap-x-2">
      <div className="px-6 flex flex-col items-start gap-y-8">
        {/* HEADINGS */}
        <div className="flex flex-col gap-y-2">
          <h1 className="text-gray-900 text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
            Hi there,
          </h1>

          <h2 className="text-gray-800 text-4xl sm:text-6xl md:text-7xl font-extrabold leading-none">
            I'm Mohnish Gorana
          </h2>
        </div>
        {/* TEXT LOOP */}
        <TextLoop className="w-[90vw] md:w-[420px] py-1.5 px-3  text-xl md:text-2xl text-gray-800 bg-gray-200 font-mono font-bold rounded-lg">
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
          <TextGenerateEffect
            className="text-gray-900 text-2xl md:text-4xl font-bold tracking-tight"
            words={words}
          />

          <p className="text-lg md:text-xl text-gray-700 leading-normal">
            I specialize in MERN and Next.js, crafting scalable, efficient, and
            high-performance web applications with clean architecture and a
            focus on developer experience.
          </p>
        </div>
        {/* BUTTONS */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 pt-6">
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
              className="relative inline-flex h-12 md:h-14 items-center justify-center overflow-hidden rounded-xl bg-blue-600 px-8 font-medium text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
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
              className="inline-flex h-12 md:h-14 items-center justify-center rounded-xl border border-blue-200 bg-white px-8 font-medium text-blue-600 shadow-sm transition-colors duration-300 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2"
            >
              <span className="mr-2">Machine Coding Tasks</span>
              <Code2Icon />
            </motion.button>
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE → ORBITING TECH ICONS */}
      <div className="md:max-w-full relative hidden md:flex md:h-[500px] md:w-[500px] items-center justify-center">
        <div className="relative h-[500px] w-full overflow-hidden text-7xl ">
          <OrbitingCircles>
            <SiNextdotjs className="cursor-pointer rounded-full p-1 size-10 border-2 border-black text-black" />
            <SiReact className="cursor-pointer rounded-full p-1 size-10 border-2 border-blue-700 text-blue-700" />
            <SiTailwindcss className="cursor-pointer rounded-full p-1 size-10 border-2 border-blue-700 text-blue-900" />
            <SiExpress className="cursor-pointer rounded-full p-1 size-10 border-2 border-black text-black" />
            <SiHtml5 className="cursor-pointer rounded-full p-1 size-10 border-2 border-orange-700 text-orange-700" />
          </OrbitingCircles>
          <OrbitingCircles radius={70} reverse>
            <SiMongodb className="cursor-pointer rounded-full p-1 size-10 border-2 border-green-700 text-green-700" />
            <SiGithub className="cursor-pointer rounded-full p-1 size-10 border-2 border-black text-black" />
            <SiNodedotjs className="cursor-pointer rounded-full p-1 size-10 border-2 border-green-700 text-green-700" />
            <SiTypescript className="cursor-pointer rounded-full p-1 size-10 border-2 border-blue-700 text-blue-800" />
            <SiRedux className="cursor-pointer rounded-full p-1 size-10 border-2 border-purple-700 text-purple-800" />
          </OrbitingCircles>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
