import TabForm from "@/components/machine-coding-tasks/TabForm/TabForm";
import React from "react";

function MachineCodingTasks() {
  return (
    <main className="w-full min-h-[99vh] ">
      <div className="mx-auto max-w-2xl md:max-w-3xl lg:max-w-6xl ">
        <section className="my-4">
        <h1 className="text-center font-semibold text-2xl sm:text-3xl md:text-4xl">Machine Coding Tasks</h1>
      </section>
      <section>
        <TabForm />
      </section>
      </div>
    </main>
  );
}

export default MachineCodingTasks;
