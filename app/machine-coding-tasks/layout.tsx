"use client";
import { TextScramble } from "@/components/ui/text-scramble";
import { machineCodingTaskConfigs } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { TbPlayerTrackNextFilled } from "react-icons/tb";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [currentTaskName, setCurrentTaskName] = useState<string | undefined>(
    ""
  );

  const BASE_PATH = "/machine-coding-tasks";

  useEffect(() => {
    if (!pathname) return;
    const currentPage = pathname.split("/").filter(Boolean).pop();
    const formattedPage = currentPage
      ? currentPage.replace(/-/g, " ").toUpperCase()
      : "";

    setCurrentTaskName(formattedPage);
  }, [pathname]); // only run when pathname changes

  const currentIndex = machineCodingTaskConfigs.findIndex((task) =>
    pathname.endsWith(task.path)
  );

  const nextPath =
    currentIndex !== -1 && currentIndex < machineCodingTaskConfigs.length - 1
      ? `${BASE_PATH}/${machineCodingTaskConfigs[currentIndex + 1].path}`
      : BASE_PATH; // If last, go to homepage

  const nextLabel =
    currentIndex !== -1 && currentIndex < machineCodingTaskConfigs.length - 1
      ? `${machineCodingTaskConfigs[currentIndex + 1].name} `
      : "Back to Home";

  // If we are on the base homepage, don’t show next link
  const isHomePage = pathname === BASE_PATH || pathname === `${BASE_PATH}/`;

  return (
    <main className="">
      <section className="my-4 md:my-6 mx-4 md:mx-8 px-2 shadow-sm shadow-neutral-900 pb-2 rounded-b-xl flex items-baseline justify-between">
        <TextScramble
          duration={1}
          speed={0.02}
          className="font-mono text-neutral-500 hover:text-neutral-100 duration-700 ease-out uppercase font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl"
        >
          {`MACHINE CODING TASK`}
        </TextScramble>

        {!isHomePage && (
          <Link
            href={nextPath}
            className="text-xs sm:text-sm font-medium text-neutral-400 hover:text-pink-500 transition-all flex items-center gap-x-1 group"
          >
            <span className="group-hover:underline underline-offset-4">
              {nextLabel}
            </span>
            <TbPlayerTrackNextFilled className="text-pink-600 group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        )}
      </section>
      <div className="space-y-4 mx-auto  px-1 sm:px-4 py-4 md:py-2">
        <div className="my-4">{children}</div>
      </div>
    </main>
  );
}
