import React from "react";
import MultiStepProgressForm from "./MultiStepForm";
import ProgressBarLine from "./ProgressBarLine";

function ProgressBar() {
  return (
    <main className="min-h-72 grid gap-x-3 gap-y-3 mb-5">
      <div className="space-y-4 bg-neutral-900 px-4 py-2 lg:pt-4 pb-6 rounded-sm md:rounded-xl flex flex-col items-center gap-y-4">
        {/* bar graph type */}
        <ProgressBarLine />
      </div>

      <div className="space-y-4 bg-neutral-900 px-4 py-2 lg:pt-4 pb-6 rounded-sm md:rounded-xl">
        {/* a form progress animations  */}
        <MultiStepProgressForm />
      </div>
    </main>
  );
}

export default ProgressBar;
