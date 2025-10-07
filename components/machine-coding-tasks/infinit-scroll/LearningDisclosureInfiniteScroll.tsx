"use client";

import { useState } from "react";

function LearningDisclosureInfiniteScroll({
  title,
  children,
}: {
  title: string;
  children: any;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-neutral-800 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-3 font-semibold text-neutral-100 bg-neutral-900 hover:bg-neutral-800 transition-colors duration-200 flex justify-between items-center"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 text-sm bg-neutral-900 border-t border-neutral-800">
          {children}
        </div>
      )}
    </div>
  );
}

export default LearningDisclosureInfiniteScroll;
