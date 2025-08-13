import { AcademicCard, AcademicsSection } from "@/components/AcademicCard";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { academics } from "@/lib/constants";
import Link from "next/link";
import React from "react";

function About() {
  return (
    <main className="w-full">
      <section className="">
        <BackgroundBeamsWithCollision className="flex flex-col items-center pt-10 lg:pt-16 gap-y-7">
          <h1 className="text-5xl relative z-20 md:text-6xl lg:text-7xl font-bold text-center text-white font-sans tracking-tight pt-8 sm:pt-0">
            About Me
          </h1>
          <div className="[filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))] flex flex-col gap-y-3 max-w-[90vw] lg:max-w-[60vw] text-justify pb-8">
            <h2 className="text-2xl">I&apos;m Mohnish Gorana</h2>
            <h3 className="text-[16px] lg:text-lg opacity-70">
              A passionate full-stack developer with a strong foundation in
              building dynamic and responsive web applications. With expertise
              in {""}
              <strong className="underline">
                MERN stack, Next.js, and modern front-end frameworks.
              </strong>{" "}
              {""}
              <br />I love crafting user-friendly interfaces and scalable
              backends that bring ideas to life.
            </h3>
            <h4 className="text-[16px] lg:text-lg opacity-70 italic">
              When I'm not coding, you can find me exploring new technologies,
              enhancing my skills, and keeping up with the latest trends in the
              web development world.
            </h4>
            <div className="mt-6">
              <Link
                href="https://drive.google.com/file/d/12oBFs2RA19N4HajZU4Qu0PlTkDCEN9DY/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="px-6 py-2 bg-gradient-to-r from-blue-600 via-purple-500 to-90% to-purple-700 hover:from-purple-700 hover:via-blue-800 hover:to-violet-800 duration-500 delay-100 text-white font-semibold rounded-md shadow-lg hover:shadow-xl "
              >
                Download Resume
              </Link>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </section>

      <section className="py-14 md:py-20 w-full flex flex-col gap-y-8 md:gap-y-12 items-center bg-neutral-900">
        <h2 className="text-3xl md:text-5xl font-bold md:mb-8 text-center ">
          Academic Qualifications
        </h2>
        <div className="min-w-[90vw] lg:min-w-[75vw] flex flex-col gap-y-6 items-center justify-center px-3">
          {academics.map((academic, idx) => (
            <AcademicCard key={idx} {...academic} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
