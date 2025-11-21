"use client";
import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaFolder, FaGithub, FaHome, FaLinkedin, FaUser } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

const navLinks = [
  { id: 1, label: "Home", link: "/", icon: FaHome },
  {
    id: 2,
    label: "About",
    icon: FaUser,
    link: "/about",
  },
  {
    id: 3,
    label: "Projects",
    icon: FaFolder,
    link: "/projects",
  },

  {
    id: 5,
    label: "GitHub",
    icon: SiGithub, // react-icons
    link: "https://github.com/mohnishgorana1",
  },
  {
    id: 6,
    label: "LinkedIn",
    icon: FaLinkedin, // react-icons
    link: "https://www.linkedin.com/in/mohnish-gorana-804374340/",
  },
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
      <h3
        className={`${sizeClass} font-bold tracking-tight flex items-baseline gap-1.5`}
      >
        <span className="text-slate-800">Mohnish</span>
        <span className="hidden sm:inline text-indigo-600">Gorana</span>
      </h3>
    </Link>
  );

  const NavItem = ({ item, isMobile }: { item: any; isMobile?: boolean }) => {
    const isExternal = item.link.startsWith("http");
    const Icon = item.icon;
    const showIconOnDesktop = isExternal; // show icon only for external links on desktop
    const showLabelOnDesktop = !isExternal; // show label only for internal links on desktop

    return (
      <Link
        href={item.link}
        onClick={closeMenu}
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={`
          flex items-center md:gap-2 gap-4 px-3 my-1 md:my-0 py-3 md:py-1.5 rounded-lg font-medium
          transition duration-200

          ${
            isMobile
              ? "text-xl p-3 hover:bg-sky-100/70 border-b border-gray-200/50"
              : "bg-gray-200/50 border border-gray-400/40 shadow-sm hover:bg-gray-300/70 text-slate-700 hover:text-slate-950"
          }
        `}
      >
        {/* Mobile: always show icon (if provided) + label */}
        {isMobile && Icon && (
          <Icon
            className={`text-2xl ${
              item.label === "LinkedIn" ? "text-blue-700" : "text-black"
            }`}
          />
        )}

        {/* Desktop: show icon only for external/social links */}
        {!isMobile && showIconOnDesktop && Icon && (
          <Icon
            className={`text-xl ${
              item.label === "LinkedIn" ? "text-blue-700" : "text-black"
            }`}
          />
        )}

        {/* Labels */}
        {isMobile ? (
          <span>{item.label}</span>
        ) : (
          showLabelOnDesktop && <span>{item.label}</span>
        )}
      </Link>
    );
  };

  return (
    <header className="md:max-w-6xl mx-auto absolute top-3 left-1 right-1 md:left-0 md:right-0 z-50 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 border border-gray-200/40 hover:shadow-gray-400 shadow-sm transition-all duration-500 ease-out rounded-xl">
      <div className="px-4 sm:px-6 lg:px-8 py-2 md:py-2">
        <div className="flex justify-between items-center">
          <Logo />

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navLinks.map((item) => (
              <NavItem key={item.id} item={item} />
            ))}
          </nav>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1 rounded-full text-gray-800 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6"/> : <MenuIcon className="h-6 w-6"/>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      {isMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 h-[calc(100vh-4rem)] bg-white/95 backdrop-blur-md transition-opacity duration-300 ease-in-out py-4 shadow-2xl overflow-y-auto">
          <div className="flex flex-col space-y-2 px-4">
            {navLinks.map((item) => (
              <NavItem key={item.id} item={item} isMobile />
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
