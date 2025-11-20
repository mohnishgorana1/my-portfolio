import InfiniteScroll from "@/components/machine-coding-tasks/infinit-scroll/InfiniteScroll";
import LearningDisclosureInfiniteScroll from "@/components/machine-coding-tasks/infinit-scroll/LearningDisclosureInfiniteScroll";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

function InfiniteScrollPage() {
  return (
    <main className="min-h-screen w-full py-8 md:px-6 md:mx-2 bg-gradient-to-br from-fuchsia-50 via-violet-50 to-indigo-50">
      {/* --- Description Section --- */}
      <article className="grid md:grid-cols-6 mb-10 ">
        <div className="md:col-span-4 flex flex-col">
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            This demo showcases a{" "}
            <strong className="text-indigo-600">dynamic Infinite Scroll</strong>{" "}
            component built with <strong>React</strong> and{" "}
            <strong>Tailwind CSS</strong>. <br /> Items are fetched in{" "}
            <span className="bg-white px-2 py-0.5 rounded border border-slate-200 shadow-sm font-mono text-xs text-indigo-500">
              batches
            </span>{" "}
            from a remote API, and new data loads automatically as you scroll.
          </p>
          <div className="self-center md:self-auto flex items-center px-2 gap-5 my-6 text-sm">
            <Link
              href="https://github.com/mohnishgorana1/my-portfolio/blob/master/components/machine-coding-tasks/infinite-scroll"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-indigo-600 hover:border-indigo-300 hover:text-indigo-800 font-semibold bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100 hover:bg-indigo-100 transition-colors duration-300 ease-in-out"
            >
              <FaGithub />
              View Source Code
            </Link>
            <span className="inline-flex items-center gap-2 text-slate-700 font-semibold bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100 hover:bg-indigo-100 transition-colors">
              ⚡ No external UI libraries used
            </span>
          </div>
        </div>

        <div className="md:col-span-2 bg-white/40 backdrop-blur-md rounded-2xl border-white/60 shadow-sm border">
          <h3 className="font-bold text-slate-700 mb-3 flex items-center gap-2">
            ✨ Key Features
          </h3>
          <ul className="space-y-2 text-xs md:text-sm text-slate-600">
            <li className="flex gap-2 items-start">
              <span className="text-indigo-500 mt-0.5">01.</span>
              <span>
                Fetches posts in <strong>batches of 10</strong> for performance.
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-indigo-500 mt-0.5">02.</span>
              <span>
                <strong>IntersectionObserver</strong> triggers fetching
                seamlessly.
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-indigo-500 mt-0.5">03.</span>
              <span>
                <strong>Shimmer animation</strong> during network requests.
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-indigo-500 mt-0.5">04.</span>
              <span>
                Graceful <strong>End-of-data</strong> handling.
              </span>
            </li>
          </ul>
        </div>
      </article>

      {/* --- Technical Deep Dive (Disclosure) --- */}
      <div className="max-w-7xl mx-auto mb-8">
        <LearningDisclosureInfiniteScroll title="⚙️ How I Built This: Deep Dive into Infinite Scroll Logic">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-indigo-600 mb-2">
                The Thought Process and Implementation
              </h3>
              <p className="text-slate-600 leading-relaxed">
                The core challenge was to load data *only* when the user
                approaches the end of the current list. I chose to use the
                modern{" "}
                <strong className="text-slate-800 bg-indigo-50 px-1 rounded">
                  IntersectionObserver API
                </strong>
                [Image of intersection observer diagram] instead of relying on
                performance-costly scroll event listeners.
              </p>
            </div>

            {/* -------------------------------------- */}
            <div>
              <h4 className="font-bold text-slate-700 mb-2 flex items-center gap-2">
                <span className="bg-slate-100 text-slate-500 w-6 h-6 rounded-full flex items-center justify-center text-xs">
                  1
                </span>
                IntersectionObserver as the Trigger 🧠
              </h4>
              <p className="mb-3 text-slate-600">
                The `IntersectionObserver` is the star of the show. I attached a
                tiny, invisible **`div`** (referenced by `observerRef`) at the
                bottom of the post list, which acts as the **scroll-end
                sensor**.
              </p>
              <div className="bg-indigo-50/50 border border-indigo-100 p-4 rounded-xl text-xs md:text-sm shadow-sm">
                <p className="font-bold text-indigo-900 mb-2">How it Works:</p>
                <ul className="list-disc list-inside ml-2 space-y-2 text-slate-600">
                  <li>
                    <strong className="text-indigo-700">The Trigger:</strong>{" "}
                    The observer's callback executes when the `observerRef`
                    element enters the viewport.
                  </li>
                  <li>
                    <strong className="text-indigo-700">
                      The Lookahead (`rootMargin`):
                    </strong>{" "}
                    Using{" "}
                    <code className="text-pink-600 bg-white border border-pink-100 px-1 py-0.5 rounded font-mono">
                      rootMargin: "100px"
                    </code>{" "}
                    tells the observer to trigger the fetch **100 pixels
                    before** the element is fully visible. This pre-loading
                    minimizes waiting time, creating a seamless feel.
                  </li>
                </ul>
              </div>
            </div>

            {/* --- NEW ALGORITHM SECTION --- */}
            <div>
              <h4 className="font-bold text-slate-700 mb-2 flex items-center gap-2">
                <span className="bg-slate-100 text-slate-500 w-6 h-6 rounded-full flex items-center justify-center text-xs">
                  2
                </span>
                High-Level Algorithm: The Fetch Loop 🔄
              </h4>
              <p className="mb-3 text-slate-600">
                The `fetchPosts` logic runs this high-level sequence of steps to
                manage the data fetching and flow control:
              </p>
              <ol className="ml-1 list-decimal list-inside text-slate-600 space-y-2 bg-white/60 border border-white/50 p-5 rounded-xl text-xs md:text-sm shadow-sm">
                <li>
                  <strong className="text-slate-800">Check Status:</strong>{" "}
                  Check if{" "}
                  <code className="text-amber-600 bg-amber-50 px-1 rounded">
                    loading
                  </code>{" "}
                  is `true` OR{" "}
                  <code className="text-amber-600 bg-amber-50 px-1 rounded">
                    hasMore
                  </code>{" "}
                  is `false`. If either,{" "}
                  <strong className="text-red-500">EXIT</strong> (Prevent
                  duplicate/unnecessary calls).
                </li>
                <li>
                  <strong className="text-slate-800">Start Loading:</strong> Set{" "}
                  <code className="text-blue-600 bg-blue-50 px-1 rounded">
                    loading = true
                  </code>
                  .
                </li>
                <li>
                  <strong className="text-slate-800">API Call:</strong> Fetch
                  data using the current{" "}
                  <code className="text-purple-600 bg-purple-50 px-1 rounded">
                    skip
                  </code>{" "}
                  value.
                </li>
                <li>
                  <strong className="text-slate-800">Update State:</strong>{" "}
                  Append{" "}
                  <code className="text-emerald-600 bg-emerald-50 px-1 rounded">
                    newPosts
                  </code>{" "}
                  to the main posts array.
                </li>
                <li>
                  <strong className="text-slate-800">Update Offset:</strong>{" "}
                  Increment{" "}
                  <code className="text-purple-600 bg-purple-50 px-1 rounded">
                    skip
                  </code>{" "}
                  by BATCH_SIZE.
                </li>
                <li>
                  <strong className="text-slate-800">End Check:</strong> If the
                  received batch is smaller than the limit, set{" "}
                  <code className="text-slate-800 bg-slate-100 px-1 rounded">
                    hasMore = false
                  </code>
                  .
                </li>
                <li>
                  <strong className="text-slate-800">Finish:</strong> Set{" "}
                  <code className="text-blue-600 bg-blue-50 px-1 rounded">
                    loading = false
                  </code>
                  .
                </li>
              </ol>
            </div>

            {/* -------------------------------------- */}
            <div>
              <h4 className="font-bold text-slate-700 mb-2 flex items-center gap-2">
                <span className="bg-slate-100 text-slate-500 w-6 h-6 rounded-full flex items-center justify-center text-xs">
                  3
                </span>
                Managing State Variables 🎣
              </h4>
              <p className="mb-3 text-slate-600">
                The `fetchPosts` function is wrapped in `useCallback` for
                performance. It relies on three critical state variables:
              </p>
              <ul className="ml-4 list-disc list-inside text-slate-600 space-y-2 text-sm">
                <li>
                  <code className="text-indigo-600 font-bold bg-indigo-50 px-1 rounded">
                    loading
                  </code>
                  : Prevents duplicate API calls (debouncing).
                </li>
                <li>
                  <code className="text-indigo-600 font-bold bg-indigo-50 px-1 rounded">
                    hasMore
                  </code>
                  : Gracefully stops fetching when the API runs dry.
                </li>
                <li>
                  <code className="text-indigo-600 font-bold bg-indigo-50 px-1 rounded">
                    skip
                  </code>
                  : Manages the pagination offset.
                </li>
              </ul>
            </div>

            {/* -------------------------------------- */}
            <div className="pt-4 border-t border-slate-100">
              <p className="text-slate-500 text-sm">
                This implementation pattern was solidified after studying:{" "}
                <a
                  href="https://dev.to/producthackers/intersection-observer-using-react-49ko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:text-indigo-700 font-medium underline underline-offset-2"
                >
                  Intersection Observer using React (dev.to)
                </a>
              </p>
            </div>
          </div>
        </LearningDisclosureInfiniteScroll>
      </div>

      {/* --- Demo Section --- */}
      <section className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl border border-white/60 bg-white/30 backdrop-blur-xl shadow-2xl shadow-indigo-200/40 p-1 sm:p-4">
        {/* Decorative Blobs */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-purple-300/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-indigo-300/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <InfiniteScroll />
        </div>
      </section>
    </main>
  );
}

export default InfiniteScrollPage;
