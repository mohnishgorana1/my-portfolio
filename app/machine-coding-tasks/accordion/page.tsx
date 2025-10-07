import Accordian, {
  ACCORDIAN_DATA,
} from "@/components/machine-coding-tasks/accordian/Accordion";
import React from "react";

function AccordionPage() {
  return (
    <main className="space-y-6 md:px-6 lg:px-12">
      {/* --- Description Section --- */}
      <article className="space-y-2 text-base text-gray-400">
        <h1 className="my-4 text-2xl md:text-3xl font-bold text-neutral-100 text-center">
          ACCORDION
        </h1>
        <p className="text-gray-200">
          A reusable <strong>Accordion Component</strong> that displays
          structured information in collapsible sections. Clicking on a section
          title expands its content while keeping the UI clean and organized.
        </p>
        <ul className="ml-2 list-disc list-inside">
          <li>
            1. Displays multiple accordion items such as HTML, CSS, JavaScript,
            etc.
          </li>
          <li>
            2. Expanding one section smoothly reveals its detailed content.
          </li>
          <li>
            3. Ideal for FAQs, documentation, or topic-based content
            organization.
          </li>
        </ul>
        <p className="text-neutral-400">
          👉 You can check out the source code here:{" "}
          <a
            href="https://github.com/mohnishgorana1/my-portfolio/blob/master/components/machine-coding-tasks/accordion"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            GitHub Link
          </a>
        </p>
        <span className="text-neutral-500">
          ⚡ Note: Developed using <strong>React + Tailwind CSS</strong> with
          smooth expand/collapse animations and a minimalist design without
          using any kind of UI Library like Shadcn.
        </span>
      </article>

      {/* --- Demo Section --- */}
      <section className="border border-neutral-800 rounded-lg shadow-sm shadow-neutral-700 p-4">
        <Accordian />
      </section>
    </main>
  );
}

export default AccordionPage;
