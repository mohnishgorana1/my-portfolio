"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { techStacksMap } from "@/lib/constants";
import { ArrowRight, ArrowRightCircle } from "lucide-react";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  project: {
    id: string | number;
    title: string;
    link: string;
    thumbnail: string;
    shortDescription: string;
    techStacks: string[]; // now string keys like "next", "tailwind"
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const router = useRouter();
  const { title, link, thumbnail, shortDescription, techStacks, id } = project;

  return (
    <div
      onClick={() => router.push(`/projects/${id}`)}
      className="group cursor-pointer relative flex flex-col lg:flex-row items-center bg-white rounded-3xl shadow-lg hover:shadow-xl shadow-gray-300 transition-shadow duration-500 overflow-hidden"
    >
      {/* Image */}
      <section className="relative w-full lg:w-1/2 h-64 lg:h-80 overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </section>

      {/* Info */}
      <section className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center gap-y-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          {title}
        </h2>
        <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
          {shortDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap mt-2">
          {project.techStacks.map((tech, idx) => {
            const techData = techStacksMap[tech];
            if (!techData) return null;

            const Icon = techData.icon;
            const color = techData.color;

            return (
              <div
                key={idx}
                className={`${
                  idx > 0 && "-ml-2"
                } p-3  bg-gray-100 rounded-full border border-gray-500/50 flex items-center justify-center hover:scale-125 duration-300 ease-out`}
              >
                <Icon size={25} color={color} />
              </div>
            );
          })}
        </div>

        {/* Button */}
        <Link
          href={`/projects/${id}`}
          className="mt-4 mr-auto py-1.5 px-2 text-blue-600 hover:text-white border border-blue-700 hover:border-transparent duration-300 ease-in hover:bg-blue-500 rounded-lg font-medium cursor-pointer flex items-center gap-x-2"
        >
          View Project Details <ArrowRightCircle />
        </Link>
      </section>
    </div>
  );
};

export default ProjectCard;
