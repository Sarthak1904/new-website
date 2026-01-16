"use client"

import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "@/components/ui/hero-section";
import { ProjectShowcase } from "@/components/ui/project-showcase";
import { LogoCloud } from "@/components/ui/logo-cloud-2";
import { ExperienceSection } from "@/components/ui/experience-section";
import { ProfileSection } from "@/components/ui/profile-section";
import { Footer } from "@/components/ui/footer";

import { pageTransition, sectionReveal } from "@/lib/motions";

export default function Home() {
  return (
    <AnimatePresence>
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
        <ProfileSection />

        <Footer />

      </motion.main>
    </AnimatePresence>
  );
}
