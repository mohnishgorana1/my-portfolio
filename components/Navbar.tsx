"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Projects", href: "/projects" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Class for the main navigation bar container
  const navContainerClasses = `
    sticky top-0 z-50 transition-all duration-300 
    bg-background/95 backdrop-blur-md border-b border-border/50 
    shadow-sm dark:shadow-zinc-900/50 px-2 rounded-md
  `;

  // Class for individual links
  const linkClass = `
    dark:text-white/80 dark:hover:text-white
  `;

  return (
    <nav className={navContainerClasses}>
      {/* Centered container with max width */}
      <div className="">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Name */}
          <Link 
            href="/" 
            className="text-2xl font-extrabold 
                       text-foreground hover:text-blue-500 transition-colors flex gap-x-1"
          >
            Mohnish Gorana<span className="text-blue-500">.</span>
          </Link>

          {/* Desktop Links and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className={linkClass}>
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button (Visible only on small screens) */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-foreground hover:bg-secondary dark:hover:bg-zinc-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Sliding down from the top) */}
      {isOpen && (
        <div className="md:hidden absolute w-full left-0 z-40 
                       bg-card border-t border-border shadow-xl">
          <div className="flex flex-col p-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`py-2 px-3 block text-base ${linkClass}`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;