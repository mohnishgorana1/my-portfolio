import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 py-4 sm:py-8 text-sm text-slate-800 font-medium">
      <div className="flex gap-8">
        <Link href="/about" className="hover:text-slate-950">
          About
        </Link>
        <Link href="/projects" className="hover:text-slate-950">
          Projects
        </Link>
        <Link href="/services" className="hover:text-slate-950">
          Services
        </Link>
        <Link href="/contact" className="hover:text-slate-950">
          Contact
        </Link>
      </div>

      <div className="flex gap-6">
        <Link
          href="https://github.com/mohnishgorana1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-950"
        >
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/mohnish-gorana/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-950"
        >
          LinkedIn
        </Link>
        <Link href="mailto:mohnishgorana1@gmail.com" className="hover:text-slate-950">
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
