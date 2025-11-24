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
  const {
    title,
    images,
    video,
    shortVideo,
    shortDescription,
    techStacks,
    id,
    slug,
  } = project;

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
            console.log("Video play prevented:", error);
          });
        } else {
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

  const handleVideoLoadedData = () => {
    setIsVideoLoaded(true);
  };
  return (
    <div
      onClick={() => router.push(`/projects/${slug}`)}
      className="group cursor-pointer w-full h-full flex flex-col rounded-[1.5rem] bg-gray-100/50 backdrop-blur-xl shadow-xl hover:shadow-2xl shadow-gray-400 hover:shadow-gray-600 transition-all duration-500 overflow-hidden"
    >
      {/* TOP SECTION: VIDEO/IMAGE */}
      <section className="relative w-full h-64 shrink-0 overflow-hidden">
        {videoSource ? (
          <>
            <video
              ref={videoRef}
              src={videoSource}
              muted
              loop
              playsInline
              preload="none"
              onLoadedData={handleVideoLoadedData}
              className="absolute inset-0 w-full h-full object-cover opacity-90 blur-[1px] transition-all duration-1000 group-hover:blur-0 group-hover:opacity-100 group-hover:scale-105"
            />
            {!isVideoLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200/90 animate-pulse">
                {images && images.length > 0 && (
                  <Image
                    src={images[0]}
                    alt={`${title} placeholder`}
                    fill
                    className="object-cover opacity-30"
                  />
                )}
              </div>
            )}
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

      {/* BOTTOM SECTION: DESCRIPTION */}
      <section
        className="w-full p-6 flex flex-col flex-1 relative z-20 bg-white/30 backdrop-blur-2xl border-t border-white/50"
      >
        <h2
          className="text-2xl lg:text-3xl font-semibold text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors duration-300"
        >
          {title}
        </h2>

        {/* Description */}
        <p
          className="text-gray-600 text-base lg:text-lg leading-relaxed mt-3 line-clamp-3"
        >
          {shortDescription}
        </p>

        {/* Tech Stack – iOS Glass Pills */}
        <div className="flex flex-wrap mt-4">
          {project.techStacks.map((tech, idx) => {
            const techData = techStacksMap[tech];
            if (!techData) return null;

            const Icon = techData.icon;
            const color = techData.color;

            return (
              <div
                key={idx}
                className="group/tech flex items-center -ml-2 p-1.5  bg-gray-100 backdrop-blur-xl border border-gray-300 rounded-full shadow-sm hover:shadow-md hover:bg-gray-200 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Icon */}
                <div
                  className="w-7 h-7 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-white shadow-sm"
                >
                  <Icon size={20} color={color} />
                </div>

                {/* Tech Name */}
                <span
                  style={{ color }}
                  className="max-w-0 opacity-0 ml-0 group-hover/tech:max-w-xs group-hover/tech:opacity-100 group-hover/tech:mx-3 transition-all duration-500 text-xs font-semibold whitespace-nowrap"
                >
                  {tech}
                </span>
              </div>
            );
          })}
        </div>

        {/* Button – iOS Blue Button */}
        <div className="mt-auto pt-6">
          <Link
            href={`/projects/${slug}`}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-x-2 px-5 py-2.5 text-sm font-semibold text-blue-600 bg-blue-50 border border-blue-200 rounded-full shadow-sm hover:bg-blue-600 hover:text-white hover:border-transparent transition-all duration-300 group"
          >
            View Details
            <ArrowRightCircle
              className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectCard;
