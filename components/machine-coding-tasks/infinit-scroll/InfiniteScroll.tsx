"use client";

import { TextShimmer } from "@/components/ui/text-shimmer";
import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

const BATCH_SIZE = 10; // Number of posts per load

function InfiniteScroll() {
  const [posts, setPosts] = useState<any[]>([]);
  const [skip, setSkip] = useState(0); // offset for API
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const fetchPosts = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      // simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 4000)); // 1 second delay

      const response = await axios.get(`
            https://dummyjson.com/posts?limit=${BATCH_SIZE}&skip=${skip}`);

      const newPosts: any[] = response.data.posts;
      console.log(newPosts);

      setPosts((prevPosts): any => [...prevPosts, ...newPosts]);
      setSkip((prev) => prev + BATCH_SIZE);

      if (newPosts.length < BATCH_SIZE) {
        setHasMore(false); // no more posts
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [skip, loading, hasMore]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchPosts(); // fetch trigger hota hai jab ref element viewport me dikhe
        }
      },
      { rootMargin: "100px" } // thoda pehle trigger karne ke liye margin
    );

    if (observerRef.current) observer.observe(observerRef.current);

    // returning cleanup fn to unobserve our target when the component unmount
    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [fetchPosts]);

  // initial fetch
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <main className="w-full">
      <section>
        <h1 className="text-xl md:text-2xl font-extrabold text-center mt-6 text-indigo-400 tracking-wide">
          🚀 Infinite Scroll Feed
        </h1>
        <p className="text-center text-gray-400 text-sm mt-1">
          Keep scrolling — more posts will load automatically!
        </p>
      </section>
      <section className="space-y-6 my-4">
        {posts &&
          posts.length > 0 &&
          posts.map((post, idx) => {
            const { id, title, body, tags, reactions, views, userId } = post;
            return (
              <div
                key={id}
                className="max-w-full md:max-w-lg lg:max-w-md mx-auto flex flex-col items-start px-4 rounded-lg my-2 border border-neutral-900 py-4 shadow shadow-neutral-500 bg-neutral-900 hover:shadow-neutral-300 hover:shadow-md duration-200 ease-in-out space-y-3"
              >
                <section className="flex justify-between items-baseline w-full gap-x-12">
                  <h2 className="text-lg font-semibold">
                    {idx + 1}. {title}
                  </h2>
                  <h1 className="text-[10px] md:text-xs opacity-70">
                    User Id: {userId}
                  </h1>
                </section>
                <p className="text-sm my-4 opacity-75">{body}</p>
                <span className="flex flex-wrap gap-2">
                  {tags &&
                    tags.length > 0 &&
                    tags.map((tag: string | null) => (
                      <span
                        key={tag}
                        className="bg-neutral-800 rounded-lg px-2 text-xs py-0.5"
                      >
                        #{tag}
                      </span>
                    ))}
                </span>
                <section className="w-full flex items-center justify-between gap-x-2 text-sm">
                  <span className="gap-x-4 flex items-center">
                    <p className="flex items-center gap-x-0.5">
                      <AiFillLike /> {reactions?.likes ?? 0}
                    </p>
                    <p className="flex items-center gap-x-0.5">
                      <AiFillDislike /> {reactions?.dislikes ?? 0}
                    </p>
                  </span>
                  <p className="text-xs opacity-40">Views: {views}</p>
                </section>
              </div>
            );
          })}
      </section>

      {loading && (
        <div className="mx-auto w-full flex items-center justify-center">
          <TextShimmer
            className="text-center font-mono text-base md:text-xl lg:my-4"
            duration={1}
          >
            Loading...
          </TextShimmer>
        </div>
      )}

      {hasMore && <div ref={observerRef} className="h-6"></div>}

      {!hasMore && (
        <p className="text-center text-gray-400 my-4">No more posts to show</p>
      )}
    </main>
  );
}

export default InfiniteScroll;
