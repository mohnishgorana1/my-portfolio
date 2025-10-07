import ChipsInput from "@/components/machine-coding-tasks/chips-input/ChipsInput";
import React from "react";
import { MdCancel } from "react-icons/md";

function ChipsInputPage() {
  return (
    <main className="space-y-6 md:px-6 lg:px-12">
      {/* --- Description Section --- */}
      <article className="space-y-2 text-base text-gray-400">
        <h1 className="my-4 text-2xl md:text-3xl font-bold text-neutral-100 text-center">
          CHIPS INPUT
        </h1>
        <p className="text-gray-200">
          A dynamic <strong>Chips Input</strong> component that allows users to
          enter multiple values as chips by pressing <kbd>Enter</kbd>. Each chip
          can be deleted individually.
        </p>
        <ul className="ml-2 list-disc list-inside">
          <li>1. Type a value and press Enter to add it as a chip.</li>
          <li className="space-x-2">
            2. Each chip can be removed by clicking the delete{" "}
            <MdCancel className="text-red-500 inline mb-1" /> icon.
          </li>
          <li>
            3. On clicking Submit, the entered chips are displayed as submitted
            data.
          </li>
        </ul>
        <p className="text-neutral-400">
          👉 You can check out the source code here:{" "}
          <a
            href="https://github.com/mohnishgorana1/my-portfolio/blob/master/components/machine-coding-tasks/chips-input"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            GitHub Link
          </a>
        </p>
        <span className="text-neutral-500">
          ⚡ Note: Built entirely using <strong>React + Tailwind CSS</strong>{" "}
          without using any external UI libraries.
        </span>
      </article>

      {/* --- Demo Section --- */}
      <section className="border border-neutral-800 rounded-lg shadow-sm shadow-neutral-700 p-4">
        <ChipsInput />
      </section>
    </main>
  );
}

export default ChipsInputPage;
