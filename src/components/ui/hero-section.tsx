'use client';

// Imports update
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { heroText, floatingOrb, ctaButton } from '@/lib/motions';

const greetings = [
  { text: "Hello", lang: "English" },
  { text: "你好", lang: "Mandarin Chinese" },
  { text: "नमस्ते", lang: "Hindi" },
  { text: "Hola", lang: "Spanish" },
  { text: "Bonjour", lang: "French" },
  { text: "مرحبا", lang: "Arabic" },
  { text: "नমস্কার", lang: "Bengali" },
  { text: "Olá", lang: "Portuguese" },
  { text: "Здравствуйте", lang: "Russian" },
  { text: "سلام", lang: "Urdu" },
  { text: "Halo", lang: "Indonesian" },
  { text: "Hallo", lang: "German" },
  { text: "こんにちは", lang: "Japanese" },
  { text: "Jambo", lang: "Swahili" },
  { text: "नमस्कार", lang: "Marathi" },
  { text: "నమస్కారం", lang: "Telugu" },
  { text: "Merhaba", lang: "Turkish" },
  { text: "வணக்கம்", lang: "Tamil" },
  { text: "Xin chào", lang: "Vietnamese" },
  { text: "안녕하세요", lang: "Korean" },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const transformX = useTransform(x, [-50, 50], [-8, 8])
  const transformY = useTransform(y, [-50, 50], [-8, 8])

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <section className="relative bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] w-full bg-no-repeat bg-cover bg-center text-sm min-h-screen flex flex-col items-center justify-center py-20 px-4 overflow-hidden">
      {/* Hero Background Glow (Floating Orb) */}
      <motion.div
        variants={floatingOrb}
        animate="animate"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-purple-400/20 blur-[120px] pointer-events-none"
      />

      <motion.div
        variants={heroText}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center"
      >
        <div className="flex items-center justify-center border border-orange-400 bg-orange-500 backdrop-blur-sm rounded-full w-auto mx-auto px-6 py-2 transition-colors cursor-default shadow-lg shadow-orange-500/20">
          <div className="relative flex items-center justify-center min-h-[24px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="font-medium text-white whitespace-nowrap sm:whitespace-normal text-center"
              >
                {greetings[index].text}
                <span className="text-xs text-orange-100 ml-2 font-normal opacity-80">
                  ({greetings[index].lang})
                </span>
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        <motion.h1
          initial="hidden"
          animate="visible"
          whileHover="hover"
          transition={{ staggerChildren: 0.12 }}
          className="text-4xl md:text-7xl font-semibold tracking-tight max-w-[1000px] text-center mx-auto mt-8 text-foreground flex flex-col items-center gap-y-2 cursor-default"
        >
          {/* Line 1 */}
          <div className="flex flex-wrap justify-center gap-x-3">
            {["Hi", "there!"].map((word, i) => (
              <motion.span
                key={`l1-${i}`}
                variants={{
                  hidden: { y: 20, opacity: 0, filter: "blur(10px)" },
                  visible: {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: { duration: 0.8, ease: "easeOut" }
                  },
                  hover: {
                    y: -5,
                    transition: { duration: 0.3, repeat: 0, ease: "easeInOut" },
                  },
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Line 2 */}
          <div className="flex flex-wrap justify-center gap-x-3">
            {["I'm", "Sarthak", "Choudhary"].map((word, i) => (
              <motion.span
                key={`l2-${i}`}
                variants={{
                  hidden: { y: 20, opacity: 0, filter: "blur(10px)" },
                  visible: {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: { duration: 0.8, ease: "easeOut" }
                  },
                  hover: {
                    y: -5,
                    transition: { duration: 0.3, repeat: 0, ease: "easeInOut" },
                  },
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.h1>

        <p className="text-sm md:text-base mx-auto max-w-3xl text-center mt-6 max-md:px-2 text-muted-foreground leading-relaxed">
          Building thoughtful software that quietly makes the world better, where quality, purpose, and care guide every decision.
        </p>

        <div className="mx-auto w-full flex items-center justify-center gap-3 mt-8">
          <motion.button
            variants={ctaButton}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            style={{ x: transformX, y: transformY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium transition-all shadow-sm"
          >
            Resume
          </motion.button>
          <motion.button
            variants={ctaButton}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="flex items-center gap-2 border border-border hover:bg-secondary rounded-full px-8 py-3 transition-colors text-foreground"
          >
            <span> Sarthak.AI</span>
            <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M1.25.5 4.75 4l-3.5 3.5" stroke="currentColor" strokeOpacity=".6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
