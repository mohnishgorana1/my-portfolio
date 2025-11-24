"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { techStacksMap } from "@/lib/constants";
import { ArrowRightCircle } from "lucide-react";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  project: {
    id: string | number;
    title: string;
    slug: string;
    link: string;
    images: string[];
    video?: string;
    shortVideo?: string;
    shortDescription: string;
    techStacks: string[];
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const router = useRouter();
  const { title, images, video, shortVideo, shortDescription, techStacks, id, slug } = project;

  const videoSource = shortVideo || video;

  // 🎥 REF & STATE FOR VIDEO INTERSECTION
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement || !videoSource) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // Play when in viewport
          videoElement.play().catch((error) => {
            // Auto-play was prevented (usually due to browser policies if not muted)
            console.log("Video play prevented:", error);
          });
          setIsVideoLoaded(true); // Optional: useful if you want to lazy load source
        } else {
          // Pause when out of viewport to save resources
          videoElement.pause();
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the video is visible
      }
    );

    observer.observe(videoElement);

    return () => {
      if (videoElement) observer.unobserve(videoElement);
    };
  }, [videoSource]);

  return (
    <div
      onClick={() => router.push(`/projects/${slug}`)}
      className="group cursor-pointer w-full flex flex-col lg:flex-row items-stretch rounded-[2rem] border border-white/20 bg-white/80 backdrop-blur-xl shadow-xl hover:shadow-2xl shadow-gray-200/50 transition-all duration-500 overflow-hidden"
    >
      {/* left section: video/image */}
      <section className="relative w-full lg:w-1/2 h-64 lg:h-auto overflow-hidden border-b lg:border-b-0 lg:border-r border-gray-200/50">
        {videoSource ? (
          <>
            <video
              ref={videoRef} // 👈 Added Ref here
              src={videoSource}
              muted
              loop
              playsInline
              preload="none" // 👈 Don't download until we need it (optional optimization)
              className="absolute inset-0 w-full h-full object-cover opacity-80 blur-[1px] scale-110 transition-all duration-1000 group-hover:blur-0 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent z-10" />
          </>
        ) : images && images.length > 0 ? (
          <Image
            src={images[0]}
            alt={`${title} preview`}
            fill
            className="object-cover opacity-60 blur-[2px] grayscale scale-110 transition-all duration-1000 group-hover:blur-0 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-gray-500">
            No Preview
          </div>
        )}
      </section>

      {/* right section: Project brief description */}
      <section className="w-full lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center gap-y-5 relative z-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
          {title}
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed font-medium">
          {shortDescription}
        </p>

        {/* Tech Stack Pills with Individual Expand Effect */}
        <div className="flex flex-wrap mt-2">
          {project.techStacks.map((tech, idx) => {
            const techData = techStacksMap[tech];
            if (!techData) return null;
            const Icon = techData.icon;
            const color = techData.color;

            return (
              <div
                key={idx}
                className="group/tech flex items-center p-2 bg-white/80 backdrop-blur-sm border border-gray-400/60 rounded-full shadow-sm hover:shadow-md transition-all duration-500 ease-in-out cursor-pointer overflow-hidden hover:pr-4 -ml-2.5 hover:-mx-0"
              >
                {/* Icon Wrapper */}
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 group-hover/tech:bg-white transition-colors duration-300">
                  <Icon size={20} color={color} />
                </div>

                <span
                  style={{ color: color }}
                  className={`max-w-0 overflow-hidden opacity-0 group-hover/tech:max-w-xs group-hover/tech:opacity-100 group-hover/tech:ml-2 transition-all duration-500 ease-in-out whitespace-nowrap text-sm font-semibold `}
                >
                  {tech}
                </span>
              </div>
            );
          })}
        </div>

        <Link
          href={`/projects/${slug}`}
          className="mt-4 mr-auto py-2 px-5 text-blue-600 font-semibold rounded-full border border-blue-100 bg-blue-50 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all duration-300 flex items-center gap-x-2 group/btn"
          onClick={(e) => e.stopPropagation()}
        >
          View Details
          <ArrowRightCircle className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </section>
    </div>
  );
};

export default ProjectCard;
