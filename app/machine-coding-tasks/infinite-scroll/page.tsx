import InfiniteScroll from "@/components/machine-coding-tasks/infinit-scroll/InfiniteScroll";
import LearningDisclosureInfiniteScroll from "@/components/machine-coding-tasks/infinit-scroll/LearningDisclosureInfiniteScroll";
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

      <div className="py-4">
        <LearningDisclosureInfiniteScroll title="⚙️ How I Built This: Deep Dive into Infinite Scroll Logic">
          <h3 className="text-lg font-bold text-blue-400 mb-4">
            The Thought Process and Implementation
          </h3>
          <p className="mb-4 text-neutral-400">
            The core challenge was to load data *only* when the user approaches
            the end of the current list. I chose to use the modern{" "}
            **`IntersectionObserver` API** instead of relying on
            performance-costly scroll event listeners.
          </p>

          {/* -------------------------------------- */}
          <h4 className="font-bold text-neutral-300 mb-2">
            1. IntersectionObserver as the Trigger 🧠
          </h4>
          <p className="mb-4 text-neutral-400">
            The `IntersectionObserver` is the star of the show. I attached a
            tiny, invisible **`div`** (referenced by `observerRef`) at the
            bottom of the post list, which acts as the **scroll-end sensor**.
          </p>
          <div className="bg-neutral-800 p-3 rounded-md mb-4 text-xs md:text-sm ">
            <p className="font-semibold text-neutral-200 mb-1">How it Works:</p>
            <ul className="list-disc list-inside ml-2 space-y-1 text-neutral-400">
              <li>
                **The Trigger:** The observer's callback executes when the
                `observerRef` element enters the viewport.
              </li>
              <li>
                **The Lookahead (`rootMargin`):** Using{" "}
                <code className="text-blue-300 bg-neutral-700/50 p-0.5 rounded ">
                  rootMargin: "100px"
                </code>{" "}
                tells the observer to trigger the fetch **100 pixels before**
                the element is fully visible. This pre-loading minimizes waiting
                time, creating a seamless feel.
              </li>
            </ul>
          </div>

          {/* -------------------------------------- */}
          <h4 className="font-bold text-neutral-300 mb-2">
            2. Managing `fetchPosts` and State 🎣
          </h4>
          <p className="mb-3 text-neutral-400">
            The `fetchPosts` function is wrapped in `useCallback` for
            performance. It relies on three critical state variables to manage
            the flow and API requests:
          </p>
          <ul className="ml-4 list-disc list-inside text-neutral-400 space-y-1">
            <li>
              <strong className="text-neutral-100">`loading`</strong>: A simple
              boolean flag that prevents the `fetchPosts` function from running
              if an API call is already in flight (crucial for **debouncing**).
            </li>
            <li>
              <strong className="text-neutral-100">`hasMore`</strong>: Becomes
              `false` when the last API response returns a batch smaller than
              `BATCH_SIZE`, gracefully stopping all future fetches.
            </li>
            <li>
              <strong className="text-neutral-100">`skip`</strong>: Manages the
              API offset, which looks like{" "}
              <code className="text-blue-300 bg-neutral-700/50 p-0.5 rounded">
                skip=${`{skip}`}
              </code>
              , and is incremented by `BATCH_SIZE` (10) after each successful
              data load to fetch the next set of posts.
            </li>
          </ul>

          {/* -------------------------------------- */}
          <h4 className="font-bold text-neutral-300 mt-4 mb-2">
            3. Learning Resource 🔗
          </h4>
          <span className="flex flex-col md:flex-row gap-x-2">
            <p className="mb-1 text-neutral-400">
              This implementation pattern was solidified after studying this
              guide:
            </p>
            <a
              href="https://dev.to/producthackers/intersection-observer-using-react-49ko"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline text-sm hover:text-blue-300"
            >
              Intersection Observer using React (dev.to)
            </a>
          </span>
        </LearningDisclosureInfiniteScroll>
      </div>

      <section className="border border-neutral-800 rounded-lg shadow-sm shadow-neutral-700 p-4">
        <InfiniteScroll />
      </section>
    </main>
  );
}

export default InfiniteScrollPage;
