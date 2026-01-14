"use client"

import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "@/components/ui/hero-section";
import { ProjectShowcase } from "@/components/ui/project-showcase";
import { LogoCloud } from "@/components/ui/logo-cloud-2";
import { ExperienceSection } from "@/components/ui/experience-section";
import { pageTransition, sectionReveal } from "@/lib/motions";
import { SmoothCursor } from "@/components/ui/cursor/smooth-cursor";
import { CursorSpotlight } from "@/components/ui/cursor/cursor-spotlight";

export default function Home() {
  return (
    <AnimatePresence>
      <SmoothCursor />
      <CursorSpotlight />
      <motion.main
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-col items-center"
      >
        <HeroSection />

        <ProjectShowcase />

        <motion.section
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="w-full py-16"
        >
          <LogoCloud />
        </motion.section>

        <ExperienceSection />
      </motion.main>
    </AnimatePresence>
  );
}
