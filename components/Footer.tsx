import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 py-8 border-t border-gray-700 text-sm text-gray-400">
      <div className="flex gap-8">
        <Link href="/about" className="hover:text-white">
          About
        </Link>
        <Link href="/projects" className="hover:text-white">
          Projects
        </Link>
        <Link href="/services" className="hover:text-white">
          Services
        </Link>
        <Link href="/contact" className="hover:text-white">
          Contact
        </Link>
      </div>

      <div className="flex gap-6">
        <Link
          href="https://github.com/mohnishgorana1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          GitHub
        </Link>
        <Link
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          LinkedIn
        </Link>
        <Link href="mailto:mohnishgorana1@gmail.com" className="hover:text-white">
          Email
        </Link>
      </div>

      <p className="mt-4">
        &copy; {new Date().getFullYear()} Mohnish Gorana. All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
