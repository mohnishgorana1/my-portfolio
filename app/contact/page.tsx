"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { MdCall, MdOutlineEmail } from "react-icons/md";

function ContactUs() {
  return (
    <main className="w-full bg-gray-400 text-gray-900">
      {/* Navbar */}
      <section className="relative">
        <Navbar />
      </section>

      {/* Contact Container */}
      <section className="pt-28 lg:pt-40 pb-20 flex flex-col items-center gap-y-10 relative overflow-hidden z-0 bg-gray-100/70 backdrop-blur-md">
        {/* ======================================= */}
        {/* === MAIN BACKGROUND SHAPES (RINGS/BLOBS) === */}
        {/* ======================================= */}

        {/* Blue Circle 1 (Top Left) */}
        <div
          className="
          absolute top-17 left-12 w-80 h-80 rounded-full 
          bg-blue-500 blur-3xl opacity-70 
          animate-blob 
          filter mix-blend-multiply
          z-[-10]" // Card se neeche
        />

        {/* Blue Circle 2 (Bottom Right) */}
        <div
          className="
          absolute bottom-5 right-3 w-96 h-96 rounded-full 
          bg-blue-500 blur-3xl opacity-50 
          animate-blob delay-1000 
          filter mix-blend-multiply
          z-[-10]"
        />

        {/* ======================================= */}
        {/* === END BACKGROUND SHAPES === */}
        {/* ======================================= */}

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-5xl md:text-6xl lg:text-7xl font-bold text-center text-blue-600 tracking-tight"
        >
          Contact Me
        </motion.h1>

        {/* Glassmorphic Card (Enhanced) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.01 }}
          className="
            relative z-20 
            bg-gray-300/50
            backdrop-blur-3xl 
            rounded-3xl 
            border border-gray-300
            shadow-gray-500/50 
            shadow-[0_20px_70px_rgba(0,0,0,0.2)] 
            
            p-8 md:p-12 
            flex flex-col gap-y-8
            max-w-[95vw] lg:max-w-[650px] 
            transition-all duration-300
          "
        >
          {/* Intro Text */}
          <p className="text-lg md:text-xl opacity-80 leading-relaxed text-justify">
            Whether you’re looking to start a project, collaborate on something
            amazing, or simply say hello — I’d love to hear from you. I’m always
            open to new opportunities and exciting challenges.
          </p>

          {/* Availability */}
          <div className="flex flex-col items-center mt-2">
            <p
              className="text-sm md:text-base text-gray-700 font-medium 
            bg-white/70 px-4 py-2 rounded-full border border-white/50 shadow-md"
            >
              🟢 Available for Work & Freelance Projects
            </p>
          </div>

          <div className="flex flex-col gap-y-6">
            <section className="flex flex-col gap-y-6 md:flex-row md:justify-between md:items-center">
              <div className="flex flex-col">
                <h3 className="text-xl md:text-2xl font-semibold flex gap-x-2 items-center">
                  Email <MdOutlineEmail className="mt-0.5" />{" "}
                </h3>
                <Link
                  href="mailto:mohnishgorana1@gmail.com"
                  className="text-lg mt-1 text-blue-600 hover:text-blue-700 underline font-bold"
                >
                  mohnishgorana1@gmail.com
                </Link>
              </div>

              <div className="flex flex-col">
                <h3 className="text-xl md:text-2xl font-semibold flex gap-x-2 items-center">Phone <MdCall /></h3>
                <Link
                  href="tel:+917999517181"
                  className="text-lg mt-1 text-blue-600 hover:text-blue-700 underline font-bold"
                >
                  +91 7999517181
                </Link>
              </div>
            </section>
            <section className="flex justify-between items-center gap-x-5">
              <div className="flex flex-col gap-y-1">
                <h3 className="text-xl md:text-2xl font-semibold">
                  Location 📍
                </h3>
                <p className="text-gray-700 text-lg font-bold">
                  Neemuch, Madhya Pradesh, India
                </p>
              </div>
              <div className="flex flex-col items-end gap-y-1 font-bold text-xl">
                <Link
                  href="https://github.com/mohnishgorana1"
                  target="_blank"
                  className="flex gap-2 items-center text-gray-800 hover:text-blue-700 transition-colors"
                >
                  GitHub <FaGithub />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/mohnish-gorana/"
                  target="_blank"
                  className="flex gap-2 items-center text-blue-800 hover:text-blue-700 transition-colors"
                >
                  LinkedIn <FaLinkedinIn />
                </Link>
              </div>
            </section>
          </div>

          {/* Social Links */}
        </motion.div>
      </section>
    </main>
  );
}

export default ContactUs;
