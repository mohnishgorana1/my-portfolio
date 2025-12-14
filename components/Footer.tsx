// Footer.tsx
import Link from "next/link";

const Footer = () => {
  const linkClassNames = `text-gray-700 dark:text-gray-400/80 hover:text-gray-900 dark:hover:text-white transition-colors hover:scale-105 duration-300 ease-in-out`;
  return (
    // Apply a dark background to the footer and adjust hover colors
    <footer className="flex flex-col items-center justify-between gap-4 py-4 sm:py-8 text-sm bg-background border-t border-gray-300/50 dark:border-gray-700/60 dark:border-gray-800">
      <div
        className="flex gap-8 font-medium
       "
      >
        {/* Navigation Links */}
        <Link href="/about" className={linkClassNames}>
          About
        </Link>
        <Link href="/projects" className={linkClassNames}>
          Projects
        </Link>
        <Link href="/machine-coding-tasks" className={linkClassNames}>
          Machine Coding
        </Link>
        <Link href="/contact" className={linkClassNames}>
          Contact
        </Link>
      </div>

      <div className="flex gap-6">
        {/* Social Links */}
        <Link
          href="https://github.com/mohnishgorana1"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassNames}
        >
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/mohnish-gorana/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassNames}
        >
          LinkedIn
        </Link>
        <Link href="mailto:mohnishgorana1@gmail.com" className={linkClassNames}>
          Email
        </Link>
      </div>

      <p className="mt-4 text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Mohnish Gorana. All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
