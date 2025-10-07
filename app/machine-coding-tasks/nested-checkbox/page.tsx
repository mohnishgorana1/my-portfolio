import NESTEDCHECKBOX from "@/components/machine-coding-tasks/nested-checkbox/nested-checkbox";
import React from "react";

function NestedCheckboxPage() {
  return (
    <main className="space-y-6 md:px-6 lg:px-12">
      {/* --- Description Section --- */}
      <article className="space-y-2 text-base text-gray-400">
        <h1 className="my-4 text-2xl md:text-3xl font-bold text-neutral-100 text-center">
          NESTED CHECKBOX
        </h1>
        <p className="text-gray-200">
          A Checkbox that can be nested with any number of levels where:
        </p>
        <ul className="ml-2">
          <li>
            1. If a checkbox is checked / unchecked, all of its descedants
            should become checked/unchecked.
          </li>
          <li>
            2. If all the descedants of a checkbox are checked, that checkbox
            should be checked.
          </li>
          <li>
            3. If any of the descedants of a checkbox is unchecked, that
            checkbox should also be unchecked.
          </li>
        </ul>
        <p className="text-neutral-400">
          👉 You can check out the source code here:{" "}
          <a
            href="https://github.com/mohnishgorana1/my-portfolio/blob/master/components/machine-coding-tasks/nested-checkbox"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            GitHub Link
          </a>
        </p>
        <span className="text-neutral-500">
          ⚡ Note: I have not used any shadcn or other UI library. The entire
          "Nested Checkbox" component is built using plain React + Tailwind CSS.
        </span>
      </article>

      {/* --- Demo Section --- */}
      <section className="border border-neutral-800 rounded-lg shadow-sm shadow-neutral-700 p-4">
        <NESTEDCHECKBOX />
      </section>
    </main>
  );
}

export default NestedCheckboxPage;
