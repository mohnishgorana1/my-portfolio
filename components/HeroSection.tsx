import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

function HeroSection() {
  return (
    <>
      <div className="w-full bg-[#000000] bg-grid-gray-700/[0.1] relative flex flex-col py-20 md:py-24 ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>

        <section className="flex items-center justify-center md:grid md:grid-cols-6 md:items-start ">
          <div className="md:col-span-4 px-4 flex flex-col items-start gap-y-6  ">
            <h1 className="flex flex-col gap-y-1 group">
              <span className="text-[#dadadab0] group-hover:text-white duration-300 ease-in-out text-4xl sm:text-5xl md:text-7xl z-20">
                Hi there,
              </span>
              <span className="text-[#dadadab0] group-hover:text-white duration-300 ease-in-out text-2xl sm:text-5xl md:text-7xl z-20">
                {`I'm Mohnish Gorana`}
              </span>
            </h1>
            <div className="space-y-3 text-xl md:text-3xl">
              <TextGenerateEffect
                className="text-[#e1e1e1af]"
                words="Transforming Ideas into Digital Solutions💡"
              />

              <h4 className="text-xl text-[#e1e1e193]">
                With expertise in MERN and Next.js,
                <br />
                <span className="hidden md:flex ">
                  I develop scalable and efficient web applications that drive
                  business growth and user engagement.
                </span>
              </h4>
            </div>
            <Link
              href={"/projects"}
              className="p-[1px] border rounded-lg 
            bg-gradient-to-br from-purple-700 via-blue-600 to-pink-600 self-center md:self-start"
            >
              <button
                className="inline-flex h-10 md:h-12 animate-shimmer items-center justify-center rounded-lg 
                    border border-slate-600 font-semibold 
                    bg-[linear-gradient(110deg,#000103,45%,#1e2631,60%,#000103)] 
                    bg-[length:250%_100%] 
                    px-6 text-slate-300 sm:text-slate-300 hover:text-white transition-colors 
                    focus:outline-none focus:ring-0 focus:ring-slate-200 focus:ring-offset-1 focus:ring-offset-slate-50"
              >
                View My Work
              </button>
            </Link>
          </div>
          <div className="hidden md:flex md:col-span-2 px-4 ">
            <Image
              src={"/assets/avatar.jpg"}
              alt="Hero"
              className="self-end object-contain h-[450px] z-10 rounded-3xl  animate-shimmer duration-300"
              width={800}
              height={800}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default HeroSection;
