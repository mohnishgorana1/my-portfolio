"use client";
import { machineCodingTaskConfigs } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function MachineCodingTasks() {
  const pathname = usePathname();

  return (
    <main className="w-full py-10  bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
        {machineCodingTaskConfigs.map((task) => (
          <Link
            key={task.path}
            href={`${pathname}/${task.path}`}
            className="group relative overflow-hidden 
                       bg-white/40 dark:bg-gray-800/40 
                       backdrop-filter backdrop-blur-lg 
                       border border-white/50 dark:border-gray-700/50 
                       rounded-3xl p-6 
                       shadow-xl shadow-blue-200/30 dark:shadow-gray-900/40 
                       hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-300/40 
                       transition-all duration-300 ease-in-out 
                       flex items-center justify-between"
          >
            {/* Optional: Add a subtle background shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              {" "}
              {/* Ensure content is above shine effect */}
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                {task.name}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 flex items-center gap-2">
                Click to open this task
                <span className="group-hover:translate-x-1 transition-transform duration-200 ease-out">
                  →
                </span>
              </p>
            </div>
            <ArrowRight className="relative z-10 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-transform group-hover:translate-x-2" />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default MachineCodingTasks;
