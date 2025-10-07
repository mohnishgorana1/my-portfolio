import Pagination from "@/components/machine-coding-tasks/Pagination/Pagination";
import React from "react";

function PaginationPage() {
  return (
    <main className="space-y-6 md:px-6 lg:px-12">
      {/* --- Description Section --- */}
      <article className="space-y-2">
        <h1 className="my-4 text-2xl md:text-3xl font-bold text-neutral-100 text-center">
          PAGINATION
        </h1>
        <p className="text-gray-200 text-xs sm:text-sm md:text-base ">
          A fully functional <strong>Frontend Pagination System</strong> built
          using <strong>React</strong> and <strong>Tailwind CSS</strong>. It
          efficiently handles large datasets by dividing them into smaller,
          manageable pages that can be easily navigated using intuitive
          controls.
        </p>
        <span className="text-neutral-500 text-xs sm:text-sm">10 Products per page</span>
        <ul className="ml-2 list-disc list-inside text-xs sm:text-sm md:text-base">
          <li>
            1. Fetches product data once from <strong>dummyjson.com</strong>{" "}
            (100 items total).
          </li>
          <li>
            2. Displays <strong>10 products per page</strong> using local
            slicing for fast and responsive navigation.
          </li>
          <li>
            3. Includes <strong>Next</strong>, <strong>Previous</strong>, and{" "}
            <strong>Direct Page</strong> navigation controls for an enhanced
            user experience.
          </li>
          <li>
            4. No additional re-fetching — only local pagination ensures smooth
            transitions.
          </li>
        </ul>

        <p className="text-neutral-400 text-xs sm:text-sm">
          👉 You can check out the full source code here:{" "}
          <a
            href="https://github.com/mohnishgorana1/my-portfolio/tree/master/components/machine-coding-tasks/Pagination"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            GitHub Link
          </a>
        </p>

        <span className="text-neutral-500 text-xs sm:text-sm">
          ⚡ Note: Built purely with <strong>React + Tailwind CSS</strong>{" "}
          without using any third-party pagination or UI libraries. The focus is
          on understanding how to handle client-side data efficiently and
          provide a seamless user interaction.
        </span>
      </article>

      {/* --- Demo Section --- */}
      <section className="border border-neutral-800 rounded-lg shadow-sm shadow-neutral-700 p-4">
        <Pagination />
      </section>
    </main>
  );
}

export default PaginationPage;
