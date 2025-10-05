"use client";
import NESTEDCHECKBOX from "@/components/machine-coding-tasks/nested-checkbox/nested-checkbox";
import OTPINPUT from "@/components/machine-coding-tasks/OTPINPUT/Otp-input";
import Pagination from "@/components/machine-coding-tasks/Pagination/Pagination";
import TabForm from "@/components/machine-coding-tasks/TabForm/TabForm";
import { TextScramble } from "@/components/ui/text-scramble";
import React from "react";

function MachineCodingTasks() {
  const machineCodingTaskConfigs = [
    {
      name: "TAB FORM",
      component: <TabForm />,
    },
    {
      name: "PAGINATION",
      component: <Pagination />,
    },
    {
      name: "OTP INPUT",
      component: <OTPINPUT />,
    },
    {
      name: "NESTED CHECKBOX",
      component: <NESTEDCHECKBOX />,
    },
  ];

  return (
    <main className="w-full min-h-[99vh] ">
      <section className="my-4 md:my-6">
        <TextScramble
          duration={1}
          speed={0.02}
          className="font-mono text-neutral-500 hover:text-neutral-100 duration-700 ease-out uppercase text-center font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl"
        >
          Machine Coding Tasks
        </TextScramble>
      </section>
      <section className="space-y-8 px-2 md:px-6 lg:px-12 ">
        {machineCodingTaskConfigs.map((c) => (
          <div className="space-y-4 mx-auto border px-4 py-4 md:py-2 rounded-lg shadow-sm shadow-neutral-600 border-neutral-800">
            <h1 className="text-2xl  font-bold">{c.name}</h1>
            {c.name === "TAB FORM" && (
              <article className="space-y-2">
                <p className="text-base text-gray-400">
                  This demonstration showcases a{" "}
                  <strong className="text-gray-200">Multi-Step Tab Form</strong>{" "}
                  built using React and Tailwind CSS. It allows users to fill
                  out data in different sections: <em>Profile</em>,{" "}
                  <em>Interests</em>, and <em>Settings</em>. Navigation between
                  steps is done via tab buttons as well as{" "}
                  <strong>Next / Prev</strong> buttons, and the final step
                  provides a <strong>Submit</strong> button that logs the
                  collected data.
                </p>
                <p className="text-neutral-400">
                  👉 You can check out the full source code here:{" "}
                  <a
                    href="https://github.com/mohnishgorana1/my-portfolio/tree/master/components/machine-coding-tasks/TabForm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    GitHub Link
                  </a>
                </p>
                <span className="text-neutral-500">
                  ⚡ Note: No shadcn or external UI library has been used. The
                  form is implemented entirely with plain React + Tailwind CSS.
                </span>
              </article>
            )}
            {c.name === "PAGINATION" && (
              <article className="space-y-2">
                <p className="text-base text-gray-400">
                  This demonstration uses **frontend pagination**. Products are
                  fetched once from the <strong>*dummyjson.com*</strong> API
                  (100 items) and then sliced locally to display *10 products
                  per page*.
                </p>
                <span className="text-neutral-500">10 Products per page</span>
              </article>
            )}
            {c.name === "OTP INPUT" && (
              <article className="space-y-2">
                <p className="text-base text-gray-400">
                  This demonstration showcases a simple{" "}
                  <strong>OTP (One-Time Password) Input</strong> component where
                  users can enter <strong>5 digits</strong>. It automatically
                  moves focus to the next box when typing and supports backspace
                  navigation. On completing the last input, the OTP can be
                  submitted automatically.
                </p>
                <p className="text-neutral-400">
                  👉 You can check out the source code here:{" "}
                  <a
                    href="https://github.com/mohnishgorana1/my-portfolio/blob/master/components/machine-coding-tasks/OTPINPUT/Otp-input.tsx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    GitHub Link
                  </a>
                </p>
                <span className="text-neutral-500">
                  ⚡ Note: I have not used any shadcn or other UI library. The
                  entire OTP component is built using plain React + Tailwind
                  CSS.
                </span>
              </article>
            )}
            {c.name === "NESTED CHECKBOX" && (
              <article className="space-y-2 text-base text-gray-400">
                <p className="text-gray-200">
                  A Checkbox that can be nested with any number of levels where:
                </p>
                <ul className="ml-2">
                  <li>
                    1. If a checkbox is checked / unchecked, all of its
                    descedants should become checked/unchecked.
                  </li>
                  <li>
                    2. If all the descedants of a checkbox are checked, that
                    checkbox should be checked.
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
                  ⚡ Note: I have not used any shadcn or other UI library. The
                  entire "Nested Checkbox" component is built using plain React + Tailwind
                  CSS.
                </span>
              </article>
            )}
            <div className="mb-4">{c.component}</div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default MachineCodingTasks;
