"use client";
import { machineCodingTaskConfigs } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function MachineCodingTasks() {
  const pathname = usePathname();

  return (
    <main className="w-full min-h-[99vh] ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {machineCodingTaskConfigs.map((task) => (
          <Link
            key={task.path}
            href={`${pathname}/${task.path}`}
            className="group border border-neutral-800 rounded-2xl p-6 hover:bg-neutral-950 transition duration-300 shadow-md shadow-neutral-800 hover:shadow-indigo-900 flex items-center justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold text-neutral-100 group-hover:text-indigo-500">
                {task.name}
              </h2>
              <p className="text-sm text-neutral-500 mt-1">
                Click to open this task →
              </p>
            </div>
            <ArrowRight className="text-neutral-500 group-hover:text-indigo-400 transition-transform group-hover:translate-x-1" />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default MachineCodingTasks;
