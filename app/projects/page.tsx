"use client";

import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/constants";
import React, { useState } from "react"; // 1. Import useState
import { motion, AnimatePresence } from "framer-motion"; // 2. Import AnimatePresence
import { TextLoop } from "@/components/ui/text-loop";
import ProjectsSection from "@/components/ProjectsSection";

export default function ProjectsPage() {
  // 3. State to track which card is hovered
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Projects Section */}
      <ProjectsSection isHome={false} />
    </main>
  );
}
