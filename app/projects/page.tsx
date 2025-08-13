"use client";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Project() {
  return (
    <main>
      <section className="w-full mx-auto py-20 md:py-15 px-4 bg-gradient-to-b from-black from-10% via-violet-950 via-70% to-[#33006F] to-90%">
        <h1 className="text-3xl md:text-7xl font-bold text-center text-white animate-pulse">
          The Ultimate <br /> Full Stack Projects
        </h1>
        <p className="max-w-3xl text-base md:text-xl mt-8 text-justify dark:text-neutral-200 mx-auto">
          Explore a collection of full stack web applications built using modern
          frameworks and technologies. From seamless user interfaces to powerful
          backends, each project showcases my skills in MERN stack, Next.js,
          database design, cloud storage, and more.
        </p>
        <p className="max-w-3xl text-base md:text-xl mt-4 text-justify dark:text-neutral-200 mx-auto">
          Whether it's designing responsive websites, developing dynamic web
          apps, or optimizing user experiences, my projects demonstrate a strong
          commitment to high-quality, scalable solutions.
        </p>
      </section>
      {/* projects listing */}
      <section className="py-10 md:py-10 mx-auto bg-neutral-900 space-y-20">
        <div className="hidden md:flex items-center justify-center">
          <h1 className="text-2xl lg:text-5xl text-center ">Featured Project</h1>
        </div>
        <div className="px-4 lg:px-24  flex flex-col items-center gap-y-8 ">
          <div className="flex flex-col items-center gap-y-8">
            <span className="flex text-xl py-1 px-4 rounded-xl bg-gradient-to-r from-purple-500 from-10% via-violet-700 via-40% to to-pink-600 to-80% hover:from-pink-600 hover:via-violet-400 hover:to-purple-500 duration-500  ease-linear">
              <span>Explore My Projects &nbsp; </span>
              <span className="hidden md:flex">
                Innovative Solutions Crafted with Passion and Expertise
              </span>
            </span>
          </div>
          {/* projects card */}
          <section className="mt-12 flex flex-col items-center justify-center w-full">
            <div className="w-full grid md:grid-cols-2 gap-16">
              {projects.map((project, idx) => {
                const { link, thumbnail, title, description, techStacks } =
                  project;
                return (
                  <Link
                    key={idx}
                    className="rounded-2xl w-full h-[80vh] group shadow-sm shadow-white hover:shadow-md hover:shadow-white group"
                    href={`/projects/${idx + 1}`}
                  >
                    <div className="flex flex-col h-full items-center rounded-2xl p-2">
                      <section className="h-[60%] group-hover:h-[55%] w-full duration-500">
                        <Image
                          src={thumbnail}
                          alt="thumbnail"
                          width={1000}
                          height={1000}
                          className="h-full object-cover md:opacity-30 opacity-65 group-hover:opacity-100 duration-200 ease-linear"
                        />
                      </section>
                      <section className="rounded-b-2xl w-full h-[40%] group-hover:h-[45%] duration-500 bg-[#090909] py-4 flex flex-col items-center justify-center gap-y-4">
                        <div className="max-w-full flex flex-wrap ">
                          {techStacks.map(
                            (icon) =>
                              icon && (
                                <span
                                  key={icon}
                                  className="flex rounded-full border p-2 -ml-2 bg-[#00040ad3] hover:scale-125 duration-200"
                                >
                                  <Image
                                    src={icon}
                                    alt={icon}
                                    width={20}
                                    height={18}
                                  />
                                </span>
                              )
                          )}
                        </div>
                        <h1 className="text-2xl md:text-4xl text-center group-hover:font-bold duration-0">
                          {title}
                        </h1>
                        <h2 className="text-white hidden duration-500 group-hover:flex text-opacity-55 overflow-hidden text-xs md:text-sm">
                          {description}
                        </h2>
                      </section>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Project;
