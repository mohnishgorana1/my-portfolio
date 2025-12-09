"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Prevent layout shift while theme loads
    return <div className="w-10 h-10" />;
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-all duration-300 w-10 h-10 flex items-center justify-center
                 bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-200 
                 
                 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-700"
      aria-label="Toggle theme"
    >
      {/* Lucide icon is animated for a smooth toggle */}
      <span className="absolute">
        {theme === "light" ? (
          <Moon className="h-5 w-5 rotate-0 scale-100 transition-all duration-500" />
        ) : (
          <Sun className="h-5 w-5 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
        )}
      </span>
      
      {/* Placeholder for the opposite icon to ensure smooth transition */}
      <span className="absolute opacity-0">
        {theme === "dark" ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;