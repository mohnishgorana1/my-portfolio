"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
  const [isSideSheetOpen, setIsSideSheetOpen] = useState(false);
  const navLinks = [
    {
      id: 1,
      label: "Home",
      link: "/",
    },
    {
      id: 2,
      label: "About",
      link: "/about",
    },
    {
      id: 3,
      label: "Contact",
      link: "/contact",
    },
    {
      id: 4,
      label: "Projects",
      link: "/projects",
    },
  ];
  return (
    <header className="px-4 md:px-8 lg:px-12 h-14 lg:h-16 flex items-center justify-between  hover:shadow-md hover:shadow-[#8d8d8d] duration-500 hover:bg-[#0c0c0c] rounded-full">
      {/* logo */}
      <div>
        <Link href={"/"}>
          <h3 className="text-[28px] sm:text-4xl font-extrabold tracking-wide brightness-125">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent flex gap-x-2 h-12 ">
              <span>Mohnish</span>
              <span>Gorana</span>
            </span>
          </h3>
        </Link>
      </div>

      {/* mobile */}
      <div className="md:hidden flex items-center justify-between gap-x-2 ">
        <Sheet open={isSideSheetOpen} onOpenChange={setIsSideSheetOpen}>
          <SheetTrigger asChild>
            <GiHamburgerMenu className="text-white text-xl" />
          </SheetTrigger>

          <SheetContent
            side={"right"}
            className="bg-[#020202] text-white w-full h-[100vh]"
          >
            <div className="h-full flex flex-col justify-between gap-y-8 py-6 ">
              <div className="flex gay-y-12 flex-col">
                <Link
                  href={"/"}
                  className="flex items-center justify-center w-full mb-12"
                  onClick={() => setIsSideSheetOpen(false)}
                >
                  <h3 className="text-[30px] sm:text-4xl font-extrabold tracking-wide brightness-125">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent flex gap-x-1 h-12 ">
                      <span>Mohnish</span>
                      <span>Gorana</span>
                    </span>
                  </h3>
                </Link>
                <div className="flex flex-col justify-between gap-y-1 ">
                  {navLinks.map((navItem, idx) => (
                    <Link
                      key={idx}
                      href={navItem.link}
                      onClick={() => setIsSideSheetOpen(false)}
                      className="w-fit flex items-center my-1 text-lg font-semibold dark:text-white border-b dark:hover:border-b-white hover:border-b-gray-950 duration-200"
                    >
                      {navItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* desktop */}
      <div className="hidden md:flex items-center gap-x-12 ">
        <nav className="flex gap-x-8 items-center">
          {navLinks.map((navItem, idx) => (
            <Link
              key={idx}
              href={navItem.link}
              className="text-white bg-transparent px-2 rounded-md border-b-transparent border-b-2 hover:border-white hover:border-b-2 font-semibold"
            >
              {navItem.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
