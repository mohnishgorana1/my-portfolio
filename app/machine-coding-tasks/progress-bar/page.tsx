import MultiStepProgressForm from "@/components/machine-coding-tasks/progress-bar/MultiStepForm";
import ProgressBar from "@/components/machine-coding-tasks/progress-bar/ProgressBar";
import ProgressBarLine from "@/components/machine-coding-tasks/progress-bar/ProgressBarLine";
import React from "react";

function ProgressBarPage() {
  return (
    <main className="space-y-6 md:px-6 lg:px-12">
      {/* --- Description Section --- */}
      <article className="space-y-2">
        <h1 className="my-4 text-2xl md:text-3xl font-bold text-neutral-100 text-center">
          PROGRESS BAR
        </h1>

        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
          This page showcases two types of{" "}
          <strong className="text-gray-200">
            Progress Bar Implementations
          </strong>
          . Both are built using <strong>React</strong> and{" "}
          <strong>Tailwind CSS</strong> to demonstrate different approaches: a{" "}
          <em>Dynamic Percentage Progress Bar</em> and a{" "}
          <em>Multi-Step Form Progress Indicator</em>.
        </p>

        <p className="text-sm sm:text-base  text-neutral-400">
          👉 You can check out the full source code here:{" "}
          <a
            href="https://github.com/mohnishgorana1/my-portfolio/tree/master/components/machine-coding-tasks/progress-bar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            GitHub Link
          </a>
        </p>

        <span className="text-xs sm:text-sm  text-neutral-500 block">
          ⚡ Note: No external UI library (like Shadcn or MUI) is used. The
          animations and transitions are entirely crafted using plain React
          hooks and Tailwind CSS utilities.
        </span>
      </article>

      <div className="space-y-6">
        <section className="border border-neutral-800 rounded-lg shadow-sm shadow-neutral-700 p-4">
          <article>
            <h2 className="text-lg sm:text-xl  font-semibold text-indigo-400 mb-2">
              1️⃣ Dynamic Percentage Progress Bar
            </h2>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              This progress bar visually represents completion using a{" "}
              <strong>horizontal fill animation</strong>. You can increase or
              decrease the progress in 10% steps using the provided buttons.
              It's a simple yet effective way to display task completion, file
              upload status, or any percentage-based metric.
            </p>
          </article>
          <div className="mt-4  bg-neutral-900 px-4 py-2 lg:pt-4 pb-6 rounded-sm md:rounded-xl flex flex-col items-center gap-y-4">
            <ProgressBarLine />
          </div>
        </section>

        <section className="border border-neutral-800 rounded-lg shadow-sm shadow-neutral-700 p-4">
          <article>
            <h2 className="text-lg sm:text-xl font-semibold text-indigo-400 mb-2">
              2️⃣ Multi-Step Progress Form
            </h2>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              This section demonstrates a{" "}
              <strong>step-based progress bar</strong> integrated into a form
              workflow. Each step collects user details like{" "}
              <em>Personal Info</em>, <em>Education</em>, and <em>Address</em>.
              The stepper dynamically updates as you move through each form
              step, visually indicating progress and completion.
            </p>
          </article>
          <div className="mt-4 space-y-4 bg-neutral-900 px-4 py-2 lg:pt-4 pb-6 rounded-sm md:rounded-xl">
            <MultiStepProgressForm />
          </div>
        </section>
      </div>
    </main>
  );
}

export default ProgressBarPage;
