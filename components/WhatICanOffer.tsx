import React from "react";
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";
import { services } from "@/lib/constants";
import { div } from "framer-motion/client";
import { FocusCards } from "./ui/focus-cards";

function WhatICanOffer() {
  return (
    <section className="">
      <div>
        <LampContainer>
          <h1
            className="z-50 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center  font-medium tracking-tight text-transparent text-5xl md:text-7xl text-slate-200"
          >
            Services <br /> I can offer to you
          </h1>
        </LampContainer>
      </div>
      <div className="bg-slate-950 pt-8 sm:py-12 sm:pb-24">
        <FocusCards cards={services} />
      </div>
    </section>
  );
}

export default WhatICanOffer;
