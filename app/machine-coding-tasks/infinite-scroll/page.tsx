import InfiniteScroll from "@/components/machine-coding-tasks/infinit-scroll/InfiniteScroll";
import React from "react";

function InfiniteScrollPage() {
  return (
    <main className="space-y-6 md:px-6 lg:px-12">
      {/* --- Description Section --- */}
      <article className="space-y-2 text-base text-gray-400">
        <h1 className="my-4 text-2xl md:text-3xl font-bold text-neutral-100 text-center">
          INFINITE SCROLL
        </h1>
        <p className="text-gray-200 text-sm md:text-base">
          This demo showcases a **dynamic Infinite Scroll** component built with{" "}
          <strong>React</strong> and <strong>Tailwind CSS</strong>. Items are
          fetched in **batches from a remote API**, and new data loads
          automatically as the user scrolls down the page. A **loading shimmer**
          indicates ongoing fetches, and the component gracefully handles the
          end of data.
        </p>
        <ul className="ml-2 list-disc list-inside text-xs md:text-base">
          <li>
            1. Automatically fetches and appends posts in **batches of 10**,
            reducing initial load time and improving performance.
          </li>
          <li>
            2. Fetching is triggered when the user scrolls to the bottom of the
            list, providing a seamless infinite scroll experience.
          </li>
          <li>
            3. Includes a **loading shimmer animation** to indicate that new
            content is being loaded.
          </li>
          <li>
            4. Handles end-of-data gracefully with a message indicating **no
            more posts**.
          </li>
          <li>
            5. Each post displays its title, body, tags, reactions
            (likes/dislikes), views, and the user ID, providing a realistic feed
            UI.
          </li>
        </ul>
        <p className="text-neutral-400 text-xs md:text-sm ">
          👉 You can check out the source code here:{" "}
          <a
            href="https://github.com/mohnishgorana1/my-portfolio/blob/master/components/machine-coding-tasks/infinite-scroll"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            GitHub Link
          </a>
        </p>
        <p className="text-neutral-500 text-xs md:text-sm text-justify">
          ⚡ Note: Built entirely with <strong>React + Tailwind CSS</strong>.
          The focus is on efficient data fetching, smooth scroll experience,
          proper state management, and realistic UI behavior without using
          external UI libraries.
        </p>
      </article>

      {/* --- Demo Section --- */}
      <section className="border border-neutral-800 rounded-lg shadow-sm shadow-neutral-700 p-4">
        <InfiniteScroll />
      </section>
    </main>
  );
}

export default InfiniteScrollPage;
