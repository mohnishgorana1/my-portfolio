"use client";
import TabForm from "@/components/machine-coding-tasks/TabForm/TabForm";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { TbForms } from "react-icons/tb";

export default function TabFormPage() {
  return (
    <main className="min-h-screen w-full py-10 md:px-6 lg:px-12 bg-gradient-to-br from-indigo-50 via-slate-50 to-cyan-50">
      
      {/* --- Header Section --- */}
      <article className="flex flex-col md:flex-row w-full gap-6 md:items-center justify-between mb-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="hidden md:flex items-center justify-center p-4 bg-white/60 shadow-indigo-100 backdrop-blur-md rounded-2xl shadow-sm border border-white/50">
                <TbForms className="text-4xl text-indigo-600" />
            </div>
            
            <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">
                    MULTI-STEP TAB FORM
                </h1>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
                    A segmented form wizard with state preservation across tabs. Features <strong className="text-indigo-600">controlled inputs</strong>, complex nested state, and smooth transitions.
                </p>
            </div>
        </div>

        <Link
          href="https://github.com/mohnishgorana1/my-portfolio/tree/master/components/machine-coding-tasks/TabForm"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto md:mx-0 inline-flex items-center gap-2 text-indigo-600 hover:border-indigo-300 hover:text-indigo-800 font-semibold bg-indigo-50 px-5 py-2.5 rounded-full border border-indigo-100 hover:bg-indigo-100 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
        >
          <FaGithub className="text-lg" />
          View Source Code
        </Link>
      </article>

      {/* --- Feature Cards --- */}
      <section className="grid md:grid-cols-3 gap-4 max-w-7xl mx-auto mb-10">
        <div className="bg-white/40 backdrop-blur-sm border border-white/50 p-4 rounded-2xl hover:bg-white/60 transition-colors group">
            <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs group-hover:scale-110 transition-transform">1</span>
                <h3 className="font-bold text-slate-700 text-sm">State Persistence</h3>
            </div>
            <p className="text-xs text-slate-500 pl-11">
                Data remains intact when switching between tabs, allowing users to review and edit freely.
            </p>
        </div>
        
        <div className="bg-white/40 backdrop-blur-sm border border-white/50 p-4 rounded-2xl hover:bg-white/60 transition-colors group">
            <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold text-xs group-hover:scale-110 transition-transform">2</span>
                <h3 className="font-bold text-slate-700 text-sm">Controlled Inputs</h3>
            </div>
            <p className="text-xs text-slate-500 pl-11">
                Every input field, checkbox, and radio button is fully controlled via a central React state.
            </p>
        </div>

        <div className="bg-white/40 backdrop-blur-sm border border-white/50 p-4 rounded-2xl hover:bg-white/60 transition-colors group">
             <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-xs group-hover:scale-110 transition-transform">3</span>
                <h3 className="font-bold text-slate-700 text-sm">Smooth Navigation</h3>
            </div>
            <p className="text-xs text-slate-500 pl-11">
                Navigate using either the tab headers or the bottom action buttons for a seamless flow.
            </p>
        </div>
      </section>

      {/* --- Main Component --- */}
      <div className="max-w-7xl mx-auto">
        <TabForm />
      </div>
    </main>
  );
}