"use client";
import Navbar from "@/components/Navbar";
import { TextScramble } from "@/components/ui/text-scramble";
import { machineCodingTaskConfigs } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbPlayerTrackNextFilled } from "react-icons/tb";

export default function MachineCodingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const BASE_PATH = "/machine-coding-tasks";

  // --- LOGIC START ---

  // 1. Determine current page slug
  const currentPageSlug = pathname?.split("/").filter(Boolean).pop();

  // 2. Check if we are on the main listing page
  // (Check if the last segment is strictly 'machine-coding-tasks')
  const isHomePage = currentPageSlug === "machine-coding-tasks";

  // 3. Format the name directly
  const currentTaskName = currentPageSlug
    ? currentPageSlug.replace(/-/g, " ").toUpperCase()
    : "";

  // 4. Calculate Next Logic
  const currentIndex = machineCodingTaskConfigs.findIndex((task) =>
    pathname.endsWith(task.path)
  );

  const nextPath =
    currentIndex !== -1 && currentIndex < machineCodingTaskConfigs.length - 1
      ? `${BASE_PATH}/${machineCodingTaskConfigs[currentIndex + 1].path}`
      : BASE_PATH;

  const nextLabel =
    currentIndex !== -1 && currentIndex < machineCodingTaskConfigs.length - 1
      ? `${machineCodingTaskConfigs[currentIndex + 1].name} `
      : "Back to Home";

  // --- LOGIC END ---

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <header className="mt-24 px-2 pt-2 pb-4 flex items-end justify-between mx-auto max-w-7xl">
        <Link
          href={
            isHomePage
              ? BASE_PATH
              : `${BASE_PATH}/${
                  machineCodingTaskConfigs[currentIndex]?.path ?? ""
                }`
          }
          className="group relative"
        >
          {/* Small Label above title */}
          <span className="block text-[10px] sm:text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-1 group-hover:text-blue-400 transition-colors">
            {isHomePage ? "Dashboard" : "Current Challenge"}
          </span>

          {/* Main Title with Gradient */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-600 group-hover:to-blue-600 transition-all duration-300">
            {currentTaskName}
          </h1>

          {/* Animated Underline */}
          <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-blue-600 transition-all duration-300 group-hover:w-full rounded-full opacity-80"></span>
        </Link>

        {!isHomePage && (
          <Link
            href={nextPath}
            className="flex items-center gap-x-2 group pl-4 pb-1"
          >
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5 group-hover:text-blue-500 transition-colors">
                Next Up
              </span>
              <span className="text-xs sm:text-sm font-bold text-gray-600 group-hover:text-blue-700 transition-colors underline-offset-4 group-hover:underline">
                {nextLabel}
              </span>
            </div>
            <div className="bg-white p-1.5 rounded-full shadow-sm border border-gray-200 group-hover:border-blue-200 group-hover:bg-blue-50 transition-all">
              <TbPlayerTrackNextFilled className="text-gray-400 w-3 h-3 sm:w-4 sm:h-4 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </Link>
        )}
      </header>

      <div className="space-y-4 mx-auto px-2 sm:px-4 py-4 md:py-2">
        <div className="my-4">{children}</div>
      </div>
    </main>
  );
}
