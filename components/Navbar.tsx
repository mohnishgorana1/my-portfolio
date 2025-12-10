"use client";
import { useState } from "react";
import Link from "next/link";
import { Code, Menu, NotebookText, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const navItems = [
  { name: "Projects", href: "/projects", icon: Code },
  { name: "Blogs", href: "/blogs", icon: NotebookText },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/mohnishgorana1",
    icon: BsGithub,
    isExternal: true,
    color: "#181717",
    darkModeColor: "#FFFFFF",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mohnish-gorana/",
    icon: BsLinkedin,
    isExternal: true,
    color: "#0A66C2",
  },
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
  // Base class for social icon links
  const socialIconBaseClass = `
    p-2 rounded-full transition-colors 
  `;
  return (
    <nav className={navContainerClasses}>
      {/* Centered container with max width */}
      <div className="">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Name */}
          {/* <Link
            href="/"
            className="text-2xl font-extrabold 
                       text-foreground hover:text-blue-500 transition-colors flex gap-x-1"
          >
            <span className="">Mohnish Gorana</span>

            <span className="text-blue-500">.</span>
          </Link> */}
          <Link
            href="/"
            className="group relative text-2xl font-extrabold 
                        text-foreground transition-colors flex gap-x-1"
          >
            <span
              className="group-hover:text-blue-400 transition-colors"
            >
              Mohnish Gorana
            </span>
            <span className="text-blue-500">.</span>
            <span
              className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 dark:bg-blue-400 transition-all duration-300 group-hover:w-full rounded-full"
            ></span>
          </Link>

          {/* Desktop Links and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium hover:text-blue-600 duration-300 ease-in-out ${linkClass}`}
              >
                {item.name}
              </Link>
            ))}

            {/* Social Icons (Desktop: Icon Only) */}
            <div className="flex items-center space-x-2">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className={socialIconBaseClass}
                    // Adding title for native tooltip hint on hover
                    title={item.name}
                    // Adding aria-label for accessibility
                    aria-label={item.name}
                  >
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="p-2 rounded-lg 
                      bg-gray-200 hover:bg-gray-300 
                    dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors"
                      aria-label="Toggle navigation menu "
                    >
                      {item.name === "GitHub" ? (
                        <Icon
                          className={` hover:scale-105 text-${item.color} dark:text-${item.darkModeColor}`}
                          size={16}
                        />
                      ) : (
                        <Icon
                          className="hover:scale-105"
                          style={{ color: item.color }}
                          size={16}
                        />
                      )}
                    </button>
                  </Link>
                );
              })}
            </div>
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
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Sliding down from the top) */}
      {isOpen && (
        <div
          className={`md:hidden absolute w-full left-0 z-40 transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100 top-[100%]"
              : "max-h-0 opacity-0 overflow-hidden top-[100%]"
          } bg-card border-t border-border shadow-xl`}
        >
          <div className="flex flex-col p-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`py-2 px-3 block text-base font-medium ${linkClass} hover:bg-secondary rounded-lg flex items-center gap-2`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className={`py-2 px-3 block text-base font-medium ${linkClass} hover:bg-secondary/50 rounded-lg flex items-center gap-2`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name === "GitHub" ? (
                    <Icon
                      className={`h-5 w-5 text-${item.color} dark:text-${item.darkModeColor}`}
                    />
                  ) : (
                    <Icon className="h-5 w-5" style={{ color: item.color }} />
                  )}
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
