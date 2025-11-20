"use client";
import NESTEDCHECKBOX from "@/components/machine-coding-tasks/nested-checkbox/nested-checkbox";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { TbHierarchy2 } from "react-icons/tb";

function NestedCheckboxPage() {
  return (
    <main className="min-h-screen w-full py-10 md:px-6 lg:px-12 bg-gradient-to-br from-violet-50 via-slate-50 to-purple-50">
      {/* --- Header Section --- */}
      <article className="flex flex-col md:flex-row w-full gap-6 md:items-center justify-between mb-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div className="hidden md:flex items-center justify-center p-4 bg-white/60 shadow-violet-100 backdrop-blur-md rounded-2xl shadow-sm border border-white/50">
            <TbHierarchy2 className="text-4xl text-violet-600" />
          </div>

          <div className="space-y-2">
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
              A recursive tree component where{" "}
              <strong className="text-violet-600">
                parent state depends on children
              </strong>
              , and{" "}
              <strong className="text-violet-600">
                children inherit from parents
              </strong>
              .
            </p>
          </div>
        </div>

        <Link
          href="https://github.com/mohnishgorana1/my-portfolio/blob/master/components/machine-coding-tasks/nested-checkbox"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto md:mx-0 inline-flex items-center gap-2 text-violet-600 hover:border-violet-300 hover:text-violet-800 font-semibold bg-violet-50 px-5 py-2.5 rounded-full border border-violet-100 hover:bg-violet-100 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
        >
          <FaGithub className="text-lg" />
          View Source Code
        </Link>
      </article>

      {/* --- Feature Cards --- */}
      <section className="grid md:grid-cols-3 gap-4 max-w-7xl mx-auto mb-10">
        <div className="bg-white/40 backdrop-blur-sm border border-white/50 p-4 rounded-2xl hover:bg-white/60 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-violet-500"></span>
            <h3 className="font-bold text-slate-700 text-sm">Downward Flow</h3>
          </div>
          <p className="text-xs text-slate-500 pl-4">
            Checking a parent automatically checks <strong>all</strong> of its
            descendants recursively.
          </p>
        </div>

        <div className="bg-white/40 backdrop-blur-sm border border-white/50 p-4 rounded-2xl hover:bg-white/60 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            <h3 className="font-bold text-slate-700 text-sm">Upward Flow</h3>
          </div>
          <p className="text-xs text-slate-500 pl-4">
            If <strong>all</strong> descendants are checked manually, the parent
            becomes checked automatically.
          </p>
        </div>

        <div className="bg-white/40 backdrop-blur-sm border border-white/50 p-4 rounded-2xl hover:bg-white/60 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-slate-500"></span>
            <h3 className="font-bold text-slate-700 text-sm">
              Indeterminate Logic
            </h3>
          </div>
          <p className="text-xs text-slate-500 pl-4">
            Unchecking any single descendant will automatically uncheck the
            parent node.
          </p>
        </div>
      </section>

      {/* --- Main Component --- */}
      <div className="max-w-7xl mx-auto">
        <NESTEDCHECKBOX />
      </div>
    </main>
  );
}

export default NestedCheckboxPage;
