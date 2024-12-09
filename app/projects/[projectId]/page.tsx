"use client";
import { projects } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProjectDescription({ params }: { params: { projectId: string } }) {
  const projectId = params.projectId;
  const currentProject = projects.find((project) => project.id === projectId);
  const {
    id,
    title,
    link,
    thumbnail,
    description,
    shortDescription,
    detailedDescription,
    techStacks,
    githubRepositoryUrl,
  } = currentProject;

  return (
    <main className="w-full min-h-[90vh]  relative flex flex-col items-center gap-y-8">
      <header className="px-4 lg:px-8 w-full lg:pl-3 py-12 text-2xl lg:text-4xl flex flex-col items-center  gap-y-8 bg-black bg-dot-pink-300/[0.2]">
        <h1 className="bg-gradient-to-r from-purple-900 to to-blue-500 w-fit px-4 py-1 rounded-xl font-serif">
          {title}
        </h1>
        <h2 className="text-xl lg:text-3xl text--center font-bold font-sans">
          {shortDescription}
        </h2>
        <div className="w-full md:w-[60%] p-2   rounded-2xl shadow-sm shadow-neutral-300 hover:shadow-md hover:shadow-white ">
          <Image
            src={thumbnail}
            height={1000}
            width={1000}
            alt="image"
            className="object-contain w-full  rounded-xl"
          />
        </div>
      </header>

      <div className="py-4 lg:py-16 px-4 w-full md:w-[80%] flex flex-col items-center justify-center gap-y-12">
        <div className="md:self-start flex flex-col md:flex-row gap-x-5 gap-y-5">
          <Link
            href={githubRepositoryUrl}
            className=" border py-1 px-8 rounded-xl bg-purple-500 border-transparent"
          >
            Source Code
          </Link>
          <Link
            href={link}
            className="self-start border py-1 px-8 rounded-xl bg-blue-600 border-transparent"
          >
            View Project
          </Link>
        </div>
        <h3 className="text-justify text-xl tracking-tight">{detailedDescription}</h3>
        <div className="self-start flex flex-wrap gap-x-12 justify-center gap-y-4 items-center">
          <h2 className="text-xl font-semibold ">Technologies Used</h2>
          <div className="max-w-full flex flex-wrap ">
            {techStacks.map(
              (icon) =>
                icon && (
                  <span
                    key={icon}
                    className="flex rounded-full border p-2 -ml-2 bg-[#00040ad3] hover:scale-125 duration-200"
                  >
                    <Image src={icon} alt={icon} width={20} height={18} />
                  </span>
                )
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProjectDescription;
