"use client";
import ChipsInput from "@/components/machine-coding-tasks/chips-input/ChipsInput";
import { Cross, CrossIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { TbTags } from "react-icons/tb";

function ChipsInputPage() {
  return (
    <main className="min-h-screen w-full pb-10 md:px-6 bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50">
      {/* --- Header Section --- */}
      <article className="flex flex-col md:flex-row w-full gap-6 md:items-center justify-between mb-4">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div className="hidden md:flex items-center justify-center p-4 bg-white/60 shadow-blue-100 backdrop-blur-md rounded-2xl shadow-sm border border-white/50 hover:bg-blue-100">
            <TbTags className="text-4xl text-blue-600" />
          </div>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
            A dynamic input component that tokenizes text into chips on{" "}
            <kbd className="font-mono bg-slate-200 px-1 rounded text-xs">
              Enter
            </kbd>
            . Perfect for tagging systems, email recipients, or categories.
          </p>
        </div>

        <Link
          href="https://github.com/mohnishgorana1/my-portfolio/blob/master/components/machine-coding-tasks/chips-input"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto md:mx-0 inline-flex items-center gap-2 text-blue-600 hover:border-blue-300 hover:text-blue-800 font-semibold bg-blue-50 px-5 py-2.5 rounded-full border border-blue-100 hover:bg-blue-100 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
        >
          <FaGithub className="text-lg" />
          View Source Code
        </Link>
      </article>

      {/* --- Feature Cards --- */}
      <section className="grid md:grid-cols-3 gap-4 max-w-7xl mx-auto mb-10">
        <div className="bg-white/40 backdrop-blur-sm border border-white/50 p-4 rounded-2xl hover:bg-white/60 transition-colors group">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
              ↵
            </span>
            <h3 className="font-bold text-slate-700 text-sm">Enter to Add</h3>
          </div>
          <p className="text-xs text-slate-500 pl-11">
            Type any value and press Enter to instantly convert it into a
            removable chip.
          </p>
        </div>

        <div className="bg-white/40 backdrop-blur-sm border border-white/50 p-4 rounded-2xl hover:bg-white/60 transition-colors group">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
              <MdCancel />
            </span>
            <h3 className="font-bold text-slate-700 text-sm">
              Click to Remove
            </h3>
          </div>
          <p className="text-xs text-slate-500 pl-11">
            Easily remove chips by clicking the cancel icon on individual items.
          </p>
        </div>

        <div className="bg-white/40 backdrop-blur-sm border border-white/50 p-4 rounded-2xl hover:bg-white/60 transition-colors group">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
              !
            </span>
            <h3 className="font-bold text-slate-700 text-sm">Validation</h3>
          </div>
          <p className="text-xs text-slate-500 pl-11">
            Prevents empty strings and duplicate entries to ensure clean data.
          </p>
        </div>
      </section>

      {/* --- Main Component --- */}
      <div className="max-w-7xl mx-auto">
        <ChipsInput />
      </div>
    </main>
  );
}

export default ChipsInputPage;
