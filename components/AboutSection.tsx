import Link from "next/link";
import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { AcademicCard } from "./AcademicCard";
import { academics } from "@/lib/constants";

function AboutSection() {
  return (
    <main className="w-full bg-background dark:text-zinc-50 mx-auto">
      <div
        className="backdrop-blur-3xl rounded-2xl p-6 flex flex-col gap-y-4
          bg-gradient-to-br from-white/40 via-white/20 to-white/10 dark:from-zinc-900/40 dark:via-zinc-900/20 dark:to-zinc-900/10
          border-l-4 border-blue-500
          shadow-[0_8px_32px_rgba(0,0,0,0.15)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.05)]
          text-gray-800 dark:text-zinc-100"
      >
        {/* <h2 className="text-2xl font-bold tracking-wide">
            I&apos;m Mohnish Gorana
          </h2> */}

        {/* <h3 className="text-[16px] lg:text-lg opacity-80 leading-relaxed">
            A passionate full-stack developer skilled in
            <strong className="underline font-semibold">
              {" "}
              MERN Stack, Next.js, and modern UI frameworks.
            </strong>
            <br />I build intuitive interfaces and scalable backends.
          </h3> */}

        <h4 className="text-[16px] lg:text-lg opacity-70 italic text-gray-900 dark:text-zinc-400 leading-relaxed">
          When I'm not coding, I explore new tech, upgrade my skills, and stay
          updated with the latest trends in web dev.
        </h4>

        <Link
          href="/about#academic-qualifications" // Assuming the full page is /about
          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium underline text-sm transition-colors"
        >
          View Academic Qualifications →
        </Link>

        <Link
          href="https://drive.google.com/file/d/1fGSpqQ_NLIMY-fd879HgINXnoUIKzoYX/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="self-start px-6 py-2 bg-blue-600 hover:bg-blue-700 duration-300 text-white font-semibold rounded-md shadow-md hover:shadow-lg"
        >
          Download Resume
        </Link>
      </div>
    </main>
  );
}

export default AboutSection;
