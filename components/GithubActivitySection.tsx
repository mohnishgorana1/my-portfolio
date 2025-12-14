// src/components/GithubActivitySection.jsx

"use client";
import React, { useState, useEffect } from "react";
// Import Framer Motion components
import { motion, AnimatePresence } from "framer-motion";
import { BsGithub } from "react-icons/bs";

const GITHUB_USERNAME = "mohnishgorana1";
const API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=10`;
const CYCLE_INTERVAL_MS = 6000; // 6 seconds

// --- REVISED Animation variants for the upward scrolling effect ---
const activityVariants = {
  // New activity enters from below the viewport
  enter: {
    y: "100%", // Start completely below the container
    opacity: 0,
    filter: "blur(4px)",
  },
  // The moment the new activity becomes visible
  center: {
    zIndex: 1,
    y: 0, // Moves up to the center (visible position)
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,

      //   duration: 0.7, // Smoother slide-up duration
      //   ease: "easeOut",
    },
  },
  // Old activity slides out through the top of the viewport
  exit: {
    zIndex: 0,
    y: "-100%", // Slides completely out through the top
    opacity: 0,
    filter: "blur(4px)",
    transition: {
      duration: 0.5, // Smoother slide-up duration
      ease: "easeIn",
    },
  },
};

const GithubActivitySection = () => {
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [key, setKey] = useState(0);
  const [error, setError] = useState(null);

  // --- Data Fetching Logic (unchanged) ---
  const fetchGithubActivity = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        const message =
          response.status === 403
            ? "GitHub API rate limit exceeded. Try again later."
            : `GitHub API returned status: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();

      const filteredActivities = data
        .filter(
          (event) => event.type === "PushEvent" || event.type === "CreateEvent"
        )
        .slice(0, 5);

      setActivities(filteredActivities);
      if (filteredActivities.length > 0) {
        setKey(0); // Initialize key
      }
    } catch (err) {
      console.error("Error fetching GitHub activity:", err);
      setError(err.message || "Failed to load GitHub activity.");
    } finally {
      setIsLoading(false);
    }
  };

  // 1. Initial Data Fetch (unchanged)
  useEffect(() => {
    fetchGithubActivity();
  }, []);

  // 2. Auto-Cycling Logic (uses setKey to trigger transition)
  useEffect(() => {
    if (activities.length === 0) return;

    const interval = setInterval(() => {
      // Cycle the key to force the animation. The content index is derived from this key.
      setKey((prevKey) => prevKey + 1);
    }, CYCLE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [activities.length]);

  // --- Helper to render the current card ---
  // We use the key to get the index, ensuring it loops back to 0.
  const currentActivityIndex = key % activities.length;
  const currentActivity = activities[currentActivityIndex];

  // --- Rendering States (unchanged) ---

  if (isLoading) {
    return (
      <div className="text-center py-8 min-h-[150px] mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          My Latest GitHub Activity
        </h2>
        <p className="text-gray-500">Loading recent GitHub activity...</p>
      </div>
    );
  }

  if (error || activities.length === 0 || !currentActivity) {
    return (
      <div className="text-center py-8 min-h-[150px] mx-auto">
        {/* <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          My Latest GitHub Activity
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
           {error ? `Error: ${error}` : "No recent public activity found."} 
        </p> */}
      </div>
    );
  }

  // Define details for the currently active card (unchanged)
  const isPushEvent = currentActivity.type === "PushEvent";
  const latestCommit = isPushEvent
    ? currentActivity.payload?.commits?.[0]
    : null;
  const hasCommits = isPushEvent && latestCommit;

  // --- Main Render (Single, Cycling Card with Animation) ---

  return (
    <div className="py-8 px-4 md:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        {/* Main Heading Restored and Styled */}
        <h2 className="self-center text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white flex justify-center items-end gap-4">
          <BsGithub className="size-6 mb-1 " />
          My Latest GitHub Activity
          <BsGithub className="size-6 mb-1 " />
        </h2>

        {/* --- Animated Ticker Container --- */}
        <div
          className="relative overflow-hidden mx-auto p-4 rounded-lg  backdrop-blur-md bg-white/10 dark:bg-gray-800/20 shadow-lg shadow-gray-200 dark:shadow-gray-900/50"
          style={{
            height: "100px", // Fixed height to create the viewport for scrolling
          }}
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentActivity.id} // Use the activity ID as the key for stability, or key for cycling
              variants={activityVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute top-[18px] left-0 w-full"
            >
              <div className="flex justify-between items-end space-x-4 px-2 md:px-4">
                {/* Event Type and Repo Name */}
                <div>
                  <span className="text-sm font-semibold uppercase text-blue-500 dark:text-blue-400">
                    {isPushEvent
                      ? "Code Push"
                      : currentActivity.type.replace("Event", "")}
                  </span>
                  <h3 className="text-lg font-medium mt-0 text-gray-900 dark:text-white truncate">
                    <a
                      href={`https://github.com/${currentActivity.repo.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {currentActivity.repo.name}
                    </a>
                  </h3>
                </div>

                {/* Timestamp */}
                <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap mb-1">
                  {new Date(currentActivity.created_at).toLocaleDateString()}
                </span>
              </div>

              {/* Display commit messages or CreateEvent details */}
              <div className="mt-1 pt-2 border-t border-gray-200 dark:border-gray-800 mx-2 md:mx-4">
                {hasCommits && (
                  <p className="text-sm italic text-gray-700 dark:text-gray-300 truncate">
                    <span className="font-semibold mr-1">Commit:</span>
                    {latestCommit.message}
                    <a
                      href={`https://github.com/${currentActivity.repo.name}/commit/${latestCommit.sha}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-500 hover:text-blue-700 ml-2"
                    >
                      (view)
                    </a>
                  </p>
                )}

                {currentActivity.type === "CreateEvent" &&
                  currentActivity.payload?.ref_type === "repository" && (
                    <p className="text-sm italic text-gray-600 dark:text-gray-400">
                      <span className="font-semibold mr-1">Action:</span>{" "}
                      Created a new repository.
                    </p>
                  )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default GithubActivitySection;
