"use client";
import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const navLinks = [
  { id: 1, label: "Home", link: "/" },
  { id: 2, label: "About", link: "/about" },
  { id: 3, label: "Projects", link: "/projects" },
  { id: 4, label: "Contact", link: "/contact" },
  { id: 5, label: "Coding Tasks", link: "/machine-coding-tasks" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsMenuOpen(false);

  const Logo = ({ sizeClass = "text-xl md:text-2xl" }) => (
    <Link
      href={"/"}
      className="cursor-pointer flex gap-x-3 items-center group"
      onClick={closeMenu}
    >
      <div className="relative overflow-hidden rounded-full border-2 border-white shadow-md shadow-slate-200 transition-transform duration-300 ease-out group-hover:scale-105">
        <Image
          src={"/assets/profile-pic-(1).png"}
          alt="Mohnish Gorana's Avatar"
          className="object-cover"
          width={40}
          height={40}
        />
      </div>
      {/* Clean Two-Tone Text instead of Gradient */}
      <h3
        className={`${sizeClass} font-bold tracking-tight flex items-baseline gap-1.5`}
      >
        <span className="text-slate-800">Mohnish</span>
        <span className="hidden sm:inline text-indigo-600">Gorana</span>
      </h3>
    </Link>
  );

  const NavItem = ({ item }) => (
    <Link
      href={item.link}
      onClick={closeMenu}
      className={`px-3 py-1.5 rounded-lg font-medium transition duration-200 border bg-white/40 border-gray-300 hover:bg-gray-300 text-indigo-900 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
        pathname === item.link ? "bg-gray-300" : ""
      }`}
    >
      {item.label}
    </Link>
  );

  return (
    <header className="md:max-w-6xl mx-auto absolute top-3 left-1 right-1 md:left-0 md:right-0 z-50 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300  border border-gray/30 hover:shadow-gray-400 shadow-sm transition-all duration-500 ease-out rounded-xl cursor-pointer">
      <div className="px-4 sm:px-6 lg:px-8 py-1 md:py-2">
        <div className="flex justify-between items-center">
          <Logo />
          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navLinks.map((item, idx) => (
              <NavItem key={idx} item={item} />
            ))}
          </nav>

          {/* Right: Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full text-gray-800 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Sheet Replacement) */}
      {isMenuOpen && (
        <div className="md:hidden absolute left-0 right-0  h-[calc(100vh-4rem)] bg-white/95 backdrop-blur-md transition-opacity duration-300 ease-in-out py-4 shadow-2xl overflow-y-auto">
          <div className="flex flex-col space-y-2 px-4">
            {navLinks.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                onClick={closeMenu}
                className="text-xl font-semibold text-gray-800 p-3 rounded-xl transition duration-150 hover:bg-sky-100/70 border-b border-gray-200/50"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
