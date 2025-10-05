"use client";
import React, { useState } from "react";

function ProgressBarLine() {
  const [currentProgress, setCurrentProgress] = useState<number>(5);

  const handleProgress = (type: "increment" | "decrement") => {
    setCurrentProgress((prevProgress: number) => {
      const step = 10;
      if (type === "increment") {
        return Math.min(100, prevProgress + step);
      } else {
        return Math.max(0, prevProgress - step);
      }
    });
  };
  return (
    <main className="flex flex-col gap-y-4 w-full">
      <h1 className="font-bold text-lg md:text-xl text-center text-indigo-500 ">
        Progress Bar
      </h1>
      <div className="flex flex-col items-center justify-center my-8">
        <div className="rounded-3xl h-8 border border-gray-300 w-[90%] md:w-[50vw] p-[1px]">
          <div
            className={`bg-green-500 h-full rounded-3xl transition-all duration-300 ease-out flex items-center justify-end pr-2 ${
              currentProgress < 1 && "hidden"
            }`}
            style={{ width: `${currentProgress}%` }}
          >
            {currentProgress > 5 && (
              <span className="text-white text-xs font-semibold">
                {currentProgress}%
              </span>
            )}
          </div>
        </div>
        <div className="mt-4 space-x-3">
          <button
            onClick={() => handleProgress("decrement")}
            disabled={currentProgress === 0}
            className={`h-10 px-6 rounded-full text-white font-semibold transition-colors duration-200 ${
              currentProgress === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-orange-600 hover:bg-orange-700 active:bg-orange-800"
            }`}
          >
            -10%
          </button>
          <button
            onClick={() => handleProgress("increment")}
            disabled={currentProgress === 100}
            className={`h-10 px-6 rounded-full text-white font-semibold transition-colors duration-200 ${
              currentProgress === 100
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
            }`}
          >
            +10%
          </button>
        </div>
      </div>
    </main>
  );
}

export default ProgressBarLine;
