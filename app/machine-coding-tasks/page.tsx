"use client";
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
  ];

  return (
    <main className="w-full min-h-[99vh] ">
      <section className="my-4">
        <TextScramble
          duration={1}
          speed={0.02}
          className="font-mono uppercase text-center font-semibold text-xl sm:text-2xl md:text-3xl"
        >
          Machine Coding Tasks
        </TextScramble>
      </section>
      <section className="space-y-8 px-2 md:px-6 lg:px-12 ">
        {machineCodingTaskConfigs.map((c) => (
          <div className="space-y-4 mx-auto border px-4 py-4 md:py-2 rounded-lg shadow-sm shadow-neutral-600 border-neutral-800">
            <h1 className="text-2xl">{c.name}</h1>
            {c.name === "PAGINATION" && (
              <div className="space-y-2">
                <p className="font-medium text-base text-gray-400">
                  This demonstration uses **frontend pagination**. Products are
                  fetched once from the <strong>*dummyjson.com*</strong> API
                  (100 items) and then sliced locally to display *10 products
                  per page*.
                </p>
                <span className="text-neutral-500">10 Products per page</span>
              </div>
            )}
            {c.name === "OTP INPUT" && (
              <div className="space-y-2">
                <p className="font-medium text-base text-gray-400">
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
              </div>
            )}

            <div className="mb-4">{c.component}</div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default MachineCodingTasks;
