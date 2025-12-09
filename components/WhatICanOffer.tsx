"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/lib/constants";

function WhatICanOffer() {
  const leftServices = services.slice(0, 3);
  const rightServices = services.slice(3, 6);

  return (
    <section
      className={`bg-background/50 dark:bg-background/30 border-t
        py-10 overflow-hidden`}
      id="services"
    >
      <h2 className={`text-3xl md:text-5xl text-blue-500 font-extrabold mx-auto mb-12 text-center`}>
        What I Offer
      </h2>

      <div className="mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-0 items-center">
          <div className="flex flex-col gap-6 md:pr-12">
            {leftServices.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index}
                align="right"
              />
            ))}
          </div>

          {/* CENTER HUB (The Circle) */}
          <div className="hidden md:flex flex-col items-center justify-center h-full relative">
            {/* Vertical Line */}
            <div
              className={`absolute inset-y-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500/50 to-transparent`}
            />

            {/* The Circle Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className={`relative z-10 flex items-center justify-center w-32 h-32 rounded-full 
                bg-white border-4 border-gray-300 shadow-xl 
                dark:bg-neutral-900 dark:border-neutral-800 
                dark:shadow-[0_0_30px_rgba(37,99,235,0.3)] 
                `}
            >
              <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-pulse" />
              <div className="text-center">
                <span className="block text-blue-500 text-lg font-bold tracking-wide uppercase">
                  My
                </span>
                <span className="block text-gray-900 font-bold text-lg tracking-tight dark:text-white">
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
}: {
  service: any;
  index: number;
  align: "left" | "right";
}) => {
  const isLeft = align === "right";

  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-2xl border transition-colors ease-in duration-500 backdrop-blur-lg flex flex-col justify-between 
        bg-white border-gray-200 shadow-lg hover:border-blue-400
        dark:bg-neutral-900 dark:border-neutral-800 dark:hover:border-blue-500/50 dark:shadow-md dark:hover:shadow-blue-500/40`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 dark:from-blue-500/30" />

      <div
        className={`relative z-10 p-6 flex flex-col gap-3 flex-1 justify-center ${
          isLeft ? "md:items-end md:text-right" : "md:items-start md:text-left"
        } items-center text-center`}
      >
        <div
          className={`mb-2 p-3 rounded-lg transition-all bg-gray-100 group-hover:bg-blue-100 dark:bg-neutral-800 dark:group-hover:bg-blue-500/20`}
        >
          <Icon
            className={`w-8 h-8 text-blue-600 group-hover:text-blue-500 dark:text-blue-400 dark:group-hover:text-blue-300`}
          />
        </div>

        <h3
          className={`text-xl font-bold mb-2 transition-colors text-gray-900 dark:text-white text-balance`}
        >
          {service.title}
        </h3>

        <p
          className={`text-sm leading-relaxed flex-grow text-gray-600 dark:text-neutral-400`}
        >
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};

export default WhatICanOffer;
