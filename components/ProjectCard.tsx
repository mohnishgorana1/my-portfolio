import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProjectCard({ project }: any) {
  const { link, thumbnail, title, description } = project;
  return (
    <Link className="rounded-2xl w-full h-[450px] group shadow-sm shadow-white hover:shadow-md hover:shadow-white group" href={link}>
      <div className="flex flex-col h-full items-center rounded-2xl p-2">
        <section className="h-[350px] group-hover:h-[300px] w-full duration-500">
          <Image
            src={thumbnail}
            alt="thumbnail"
            width={1000}
            height={1000}
            className="object-cover h-[90%] md:opacity-30 opacity-65 group-hover:opacity-100 duration-200 ease-linear rounded-3xl"
          />
        </section>
        <section className="w-full h-[100px] group-hover:h-[150px] duration-500 bg-[#090909] py-4 flex flex-col items-center gap-y-4">
          <h1 className="text-2xl md:text-4xl text-center group-hover:font-bold duration-0">{title}</h1>
          <h2 className="text-white hidden duration-500 group-hover:flex text-opacity-55 overflow-hidden text-sm">{description}</h2>
        </section>
      </div>
    </Link>
  );
}

export default ProjectCard;
