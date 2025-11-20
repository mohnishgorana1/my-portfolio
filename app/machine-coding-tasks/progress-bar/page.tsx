"use client";
import MultiStepProgressForm from "@/components/machine-coding-tasks/progress-bar/MultiStepForm";
import ProgressBarLine from "@/components/machine-coding-tasks/progress-bar/ProgressBarLine";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { TbProgress } from "react-icons/tb";

function ProgressBarPage() {
  return (
    <main className="min-h-screen w-full md:px-6 lg:px-12 bg-gradient-to-br from-indigo-50 via-slate-50 to-purple-50">
      {/* --- Description Section --- */}
      <article className="flex flex-col md:flex-row w-full gap-4 md:items-center mb-12">
        <div className="hidden md:flex items-center justify-center p-3 lg:-ml-3 bg-gray-300/40 shadow-indigo-400 backdrop-blur-sm rounded-2xl shadow-sm ">
          <TbProgress className="text-3xl text-indigo-600" />
        </div>
        <p className="text-slate-600 text-sm md:text-base lg:text-lg leading-relaxed">
          Showcasing two types of{" "}
          <strong className="text-indigo-600">Progress Implementations</strong>{" "}
          built with React & Tailwind. <br /> A dynamic percentage bar and a multi-step
          form wizard, featuring smooth state transitions and glassmorphic UI.
        </p>
        <Link
          href="https://github.com/mohnishgorana1/my-portfolio/tree/master/components/machine-coding-tasks/progress-bar"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto md:ml-auto inline-flex items-center gap-2 text-indigo-600 hover:border-indigo-300 hover:text-indigo-800 font-semibold bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100 hover:bg-indigo-100 transition-colors duration-300 ease-in-out shadow-sm hover:shadow-md"
        >
          <FaGithub />
          View Source Code
        </Link>
      </article>

      <div className="space-y-10 mx-auto">
        {/* Section 1: Linear Progress */}
        <section className="relative overflow-hidden rounded-3xl border border-white/60 bg-indigo-300/40 backdrop-blur-xl shadow-xl shadow-indigo-100/50 p-1 sm:p-6 transition-all hover:bg-indigo-500/40">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl pointer-events-none"></div>

          <article className="px-4 pt-2 mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-700 mb-2 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 text-xs">
                1
              </span>
              Dynamic Percentage Bar
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
              Visually represents completion using a horizontal fill animation.
              Perfect for file uploads or task tracking.
            </p>
          </article>

          <div className="mt-2 flex flex-col items-center justify-center py-6 rounded-2xl bg-white/50 border border-white/60 shadow-inner">
            <ProgressBarLine />
          </div>
        </section>

        {/* Section 2: Multi-Step Form */}
        <section className="relative overflow-hidden rounded-3xl border border-white/60 bg-indigo-400/40 backdrop-blur-xl shadow-xl shadow-indigo-100/50 p-1 sm:p-6 transition-all hover:bg-indigo-500/40">
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none"></div>

          <article className="px-4 pt-2 mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-700 mb-2 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 text-xs">
                2
              </span>
              Multi-Step Form Wizard
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
              A step-based workflow collecting data across Personal, Education,
              and Address sections.
            </p>
          </article>

          <div className="mt-2 flex flex-col items-center justify-center py-6 rounded-2xl bg-white/50 border border-white/60 shadow-inner">
            <MultiStepProgressForm />
          </div>
        </section>
      </div>
    </main>
  );
}

export default ProgressBarPage;
