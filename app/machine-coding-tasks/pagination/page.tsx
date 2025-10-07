import Pagination from "@/components/machine-coding-tasks/Pagination/Pagination";
import React from "react";

function PaginationPage() {
  return (
    <main className="space-y-6 md:px-6 lg:px-12">
      {/* --- Description Section --- */}
      <article className="space-y-2">
        <h1 className="my-4 text-2xl md:text-3xl font-bold text-neutral-100 text-center">
          Pagination
        </h1>
        <p className="text-base text-gray-400">
          This demonstration uses **frontend pagination**. Products are fetched
          once from the <strong>*dummyjson.com*</strong> API (100 items) and
          then sliced locally to display *10 products per page*.
        </p>
        <span className="text-neutral-500">10 Products per page</span>
      </article>

      {/* --- Demo Section --- */}
      <section className="border border-neutral-800 rounded-lg shadow-sm shadow-neutral-700 p-4">
        <Pagination />
      </section>
    </main>
  );
}

export default PaginationPage;
