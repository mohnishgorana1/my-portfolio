import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProjectCard({ project }: any) {
  const { link, thumbnail, title, description, techStacks } = project;
  return (
    <Link
      className="rounded-2xl w-full h-[80vh] group shadow-sm shadow-white hover:shadow-md ease-in hover:shadow-white group"
      href={link}
    >
      <div className="flex flex-col h-full items-center rounded-2xl p-2">
        <section className="h-[60%] group-hover:h-[58%] w-full duration-1000">
          <Image
            src={thumbnail}
            alt="thumbnail"
            width={1000}
            height={1000}
            className="h-full object-cover md:opacity-30 opacity-65 group-hover:opacity-100 duration-200 ease-linear"
          />
        </section>
        <section className="rounded-b-2xl w-full h-[40%] group-hover:h-[42%] duration-1000 ease-out bg-[#090909] py-4 flex flex-col items-center justify-center gap-y-4">
          <div className="max-w-full flex flex-wrap ">
            {techStacks.map(
              (icon:any) =>
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
          <h1 className="text-2xl md:text-4xl text-center duration-1000">
            {title}
          </h1>
          <h2 className="text-white hidden duration-1000 group-hover:flex text-opacity-55 overflow-hidden text-sm">
            {description}
          </h2>
        </section>
      </div>
    </Link>
  );
}

export default ProjectCard;
