import Pagination from "@/components/machine-coding-tasks/Pagination/Pagination";
import React from "react";

function PaginationPage() {
  return (
    <main className="min-h-screen w-full py-8 md:px-6 md:mx-2 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      {/* --- Description Section --- */}
      <article className="md:grid md:grid-cols-5 mb-8 ">
        <div className="md:col-span-4 space-y-4">
          <p className=" text-base sm:text-lg text-slate-600 leading-relaxed ">
            A fully functional{" "}
            <strong className="text-blue-600">
              Frontend Pagination System
            </strong>{" "}
            built using <strong>React</strong> and <strong>Tailwind CSS</strong>
            . <br className="hidden md:flex" /> It efficiently handles large
            datasets by dividing them into smaller, manageable pages.
          </p>
          <div className="flex flex-col sm:flex-row items-start md:items-center gap-4 text-xs sm:text-sm text-slate-500">
            <span className="px-3 py-1 bg-white rounded-full border border-slate-200 shadow-sm">
              📦 10 Products per page
            </span>
            <span className="px-3 py-1 bg-white rounded-full border border-slate-200 shadow-sm">
              ⚡ Client-side slicing
            </span>
          </div>
          <p className="text-sm sm:text-base text-slate-500 mt-4">
            👉 You can check out the full source code here:{" "}
            <a
              href="https://github.com/mohnishgorana1/my-portfolio/tree/master/components/machine-coding-tasks/Pagination"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 font-medium underline decoration-blue-300 underline-offset-4 transition-colors"
            >
              GitHub Link
            </a>
          </p>
        </div>

        <ul className="col-span-1 hidden md:flex md:flex-col gap-1 text-base text-slate-500 mt-2">
          <li>• Fetches 100 items once</li>
          <li>• No re-fetching</li>
          <li>• Instant transitions</li>
        </ul>
      </article>

      {/* --- Demo Section --- */}
      {/* Glass Container for the Component */}
      <section className=" relative overflow-hidden rounded-3xl border border-blue-800/60 bg-white/30 backdrop-blur-xl shadow-xl shadow-blue-100/50 p-1">
        {/* Decorative Gradients */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <Pagination />
        </div>
      </section>
    </main>
  );
}

export default PaginationPage;
