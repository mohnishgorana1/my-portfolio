"use client";
import { ImagesSlider } from "@/components/ui/images-slider";
import React from "react";
import { motion } from "framer-motion";
import { contactBgImages } from "@/lib/constants";
import { Spotlight } from "@/components/ui/Spotlight";
import Link from "next/link";

function ContactUs() {
  return (
    <main>
      <section className="py-10 md:py-20 px-4 bg-gradient-to-b from-black from-50% to-90% to-slate-950 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Get In Touch</h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl mb-12">
            Whether you have a question, want to collaborate, or just want to
            say hi, feel free to reach out. I’m always open to discussing new
            projects, creative ideas, or opportunities to be part of your
            vision.
          </p>
          <div className="mt-8 flex flex-col gap-y-8 md:flex-row justify-center gap-x-14">
            <div className="flex flex-col items-start">
              <h3 className="text-2xl font-semibold">Email</h3>
              <Link
                href="mailto:your-email@example.com"
                className="text-lg mt-2 text-purple-400 hover:text-purple-500"
              >
                mohnishgorana@example.com
              </Link>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-2xl font-semibold">Phone</h3>
              <Link
                href="tel:+917999517181"
                className="text-lg mt-2 text-purple-400 hover:text-purple-500"
              >
                +91 7999517181
              </Link>
            </div>
          </div>
          <div className="mt-16 flex items-center justify-center gap-x-4 ">
            <h3 className="text-2xl font-semibold ">Or Find Me On</h3>
            <div className="flex justify-center gap-x-6">
              <Link
                href="https://github.com/mohnishgorana1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-purple-400 hover:text-purple-500"
              >
                GitHub
              </Link>
              {/* <Link
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-purple-400 hover:text-purple-500"
              >
                LinkedIn
              </Link> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactUs;
