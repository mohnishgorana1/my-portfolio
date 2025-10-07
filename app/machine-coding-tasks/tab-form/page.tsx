import React from "react";
import TabForm from "@/components/machine-coding-tasks/TabForm/TabForm";

export default function TabFormPage() {
  return (
    <main className="space-y-6 md:px-6 lg:px-12">
      {/* --- Description Section --- */}
      <article className="space-y-2">
        <h1 className="my-4 text-2xl md:text-3xl font-bold text-neutral-100 text-center">
          Multi-Step Tab Form
        </h1>

        <p className="text-base text-gray-400">
          This demonstration showcases a{" "}
          <strong className="text-gray-200">Multi-Step Tab Form</strong> built
          using <strong>React</strong> and <strong>Tailwind CSS</strong>. It
          allows users to fill out data in different sections —{" "}
          <em>Profile</em>, <em>Interests</em>, and <em>Settings</em>. Navigation
          between steps is done via <strong>tab buttons</strong> as well as{" "}
          <strong>Next / Prev</strong> buttons, and the final step provides a{" "}
          <strong>Submit</strong> button that logs the collected data.
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

        <span className="text-neutral-500 block">
          ⚡ Note: No Shadcn or external UI library has been used. The form is
          implemented entirely with plain React + Tailwind CSS.
        </span>
      </article>

      {/* --- Demo Section --- */}
      <section className="border border-neutral-800 rounded-lg shadow-sm shadow-neutral-700 p-4">
        <TabForm />
      </section>
    </main>
  );
}
