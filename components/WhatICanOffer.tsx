"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/lib/constants"; // Ensure path is correct
import { Sun, Moon } from "lucide-react";

function WhatICanOffer() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Split services into Left (0,1,2) and Right (3,4,5)
  const leftServices = services.slice(0, 3);
  const rightServices = services.slice(3, 6);

  return (
    <section
      className={`${
        theme === "dark"
          ? "bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-950"
          : "bg-gray-200"
      } 
      py-10 px-4 md:px-8 overflow-hidden`}
      id="services"
    >
      <div className="grid grid-cols-12 max-w-7xl mx-auto mb-12 relative">
        {/* Title Section (Mobile only - distinct header) */}
        <div className="col-span-11">
          <h2
            className={`text-3xl font-bold md:text-5xl ${
              theme === "dark"
                ? "text-blue-500"
                : "text-blue-700 font-extrabold"
            }`}
          >
            What I Offer
          </h2>
        </div>
        {/* THEME TOGGLE BUTTON */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="col-span-1 p-2 rounded-full border bg-neutral-900 border-neutral-700 text-white
          hover:bg-neutral-800 transition md:absolute md:right-0 md:top-1"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-blue-400" />
          ) : (
            <Moon className="w-5 h-5 text-neutral-200" />
          )}
        </button>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-0 items-center">
          <div className="flex flex-col gap-6 md:pr-12">
            {leftServices.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index}
                align="right"
                theme={theme}
              />
            ))}
          </div>

          {/* CENTER HUB (The Circle from your reference) */}
          <div className="hidden md:flex flex-col items-center justify-center h-full relative">
            {/* Vertical Line */}
            <div
              className={`absolute inset-y-0 w-[1px] bg-gradient-to-b ${
                theme === "dark"
                  ? "from-transparent via-blue-500/50 to-transparent"
                  : "from-transparent via-blue-500 to-transparent"
              } `}
            />

            {/* The Circle Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className={`relative z-10 flex items-center justify-center w-32 h-32 rounded-full bg-neutral-900 border-4 border-neutral-800 ${
                theme === "dark"
                  ? "shadow-[0_0_30px_rgba(37,99,235,0.3)]"
                  : "shadow-[0_0_50px_rgba(37,99,235,1)]"
              }`}
            >
              <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-pulse" />
              <div className="text-center">
                <span className="block text-blue-500 text-lg font-bold tracking-wide uppercase">
                  My
                </span>
                <span className="block text-white font-bold text-lg tracking-tight">
                  SERVICES
                </span>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col gap-6 md:pl-12">
            {rightServices.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index + 3}
                align="left"
                theme={theme}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ServiceCard = ({
  service,
  index,
  align,
  theme,
}: {
  service: any;
  index: number;
  align: "left" | "right";
  theme: "light" | "dark";
}) => {
  const isLeft = align === "right"; 

  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      // REMOVED min-h-[220px] here. We rely on content and flex alignment.
      className={`group relative overflow-hidden rounded-2xl border transition-colors ease-in duration-500 backdrop-blur-lg flex flex-col justify-between ${
        theme === "dark"
          ? "bg-neutral-900 border-neutral-800 hover:border-blue-500/50 shadow-md hover:shadow-blue-500/40"
          : "bg-gray-300 border-neutral-400/50 hover:border-blue-400 shadow-md shadow-blue-500/40"
      }`}
    >
      {/* Hover Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content Container (flex-1 ensures it fills the entire height of the card) */}
      <div
        className={`relative z-10 p-6 flex flex-col gap-3 flex-1 justify-center ${
          // Added justify-center for balanced look
          isLeft ? "md:items-end md:text-right" : "md:items-start md:text-left"
        } items-center text-center`}
      >
        <div
          className={`mb-2 p-3 rounded-lg transition-all ${
            theme === "dark"
              ? "bg-neutral-800 group-hover:bg-blue-500/20"
              : "bg-white group-hover:bg-blue-100"
          }`}
        >
          <Icon
            className={`w-8 h-8 ${
              theme === "dark"
                ? "text-blue-400 group-hover:text-blue-300"
                : "text-blue-600"
            }`}
          />
        </div>

        <h3
          className={`text-xl font-bold mb-2 transition-colors ${
            theme === "dark" ? "text-white" : "text-neutral-900"
          } text-balance`} // text-balance for better title wrapping
        >
          {service.title}
        </h3>

        <p
          className={`text-sm leading-relaxed ${
            theme === "dark" ? "text-neutral-400" : "text-neutral-700"
          } flex-grow`} // Added flex-grow to ensure description takes remaining vertical space if needed
        >
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};

export default WhatICanOffer;
