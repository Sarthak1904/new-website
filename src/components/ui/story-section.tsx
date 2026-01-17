"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function StorySection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (

        <section id="story" ref={containerRef} className="relative py-32 bg-white overflow-hidden">
            {/* Middle Right Book/Card */}
            <motion.div
                className="absolute top-[45%] right-[5%] w-40 z-0 hidden lg:block"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="bg-white p-4 shadow-xl rotate-12 rounded border transform hover:rotate-0 transition-transform duration-500">
                    <p className="font-serif text-sm italic">"Good design is obvious. Great design is transparent."</p>
                </div>
            </motion.div>

            {/* Main Content Column */}
            <div className="relative z-10 max-w-2xl mx-auto px-6 flex flex-col gap-24">
                {/* Intro & Philosophy */}
                <div className="space-y-8">
                    <div className="flex justify-center mb-8">
                        <span className="text-4xl">🍃</span>
                    </div>
                    <ScrollReveal className="text-2xl md:text-3xl font-semibold text-center font-serif text-black">
                        I’ve always been drawn to <span className="relative inline-block px-2 ml-1"><span className="relative z-10">beautiful things</span><span className="absolute inset-0 bg-blue-200/60 -skew-y-2 rounded-sm" /></span>.
                    </ScrollReveal>
                    <ScrollReveal className="text-neutral-600 text-lg">
                        not just because they look good, but because beauty reflects <span className="relative inline-block px-1"><span className="relative z-10">intention and care</span><span className="absolute inset-0 bg-blue-100/60 skew-y-1 rounded-sm" /></span>. Whether it’s software, systems, or experiences, I believe great work comes from choosing the right tools and shaping them deliberately in service of a <span className="relative inline-block px-1"><span className="relative z-10">clear vision</span><span className="absolute inset-0 bg-blue-100/60 -skew-x-6 rounded-sm" /></span>. For me, beauty is never decorative. It’s <span className="relative inline-block px-1"><span className="relative z-10">functional, thoughtful, and earned</span><span className="absolute inset-0 bg-blue-100/60 skew-x-3 rounded-sm" /></span>.
                    </ScrollReveal>

                    <div className="flex justify-center gap-4 py-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center border shadow-sm">
                                <div className="w-4 h-4 bg-neutral-300 rounded-sm" />
                            </div>
                        ))}
                    </div>


                    <ScrollReveal className="text-neutral-600 text-lg">
                        I see building software as an ongoing process of imagining the best possible experience and steadily moving toward it—refining, rebuilding, and learning until things feel inevitable. That process is fueled by <span className="relative inline-block px-1"><span className="relative z-10">curiosity and persistence</span><span className="absolute inset-0 bg-yellow-200/60 skew-y-1 rounded-sm" /></span>, especially through uncertainty and moments when giving up feels easier.
                    </ScrollReveal>
                </div>

                {/* Professional Background */}
                <div className="space-y-6 relative">
                    {/* Circle Decoration */}
                    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 opacity-10 pointer-events-none" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" stroke="currentColor" fill="none" />
                    </svg>

                    {/* IU Logo - Absolute Positioned */}
                    <motion.div
                        className="absolute -right-12 -top-16 w-32 md:w-40 opacity-20 hidden md:block pointer-events-none select-none mix-blend-multiply"
                        initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
                        whileInView={{ opacity: 0.2, rotate: 12, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img
                            src="/images/iu-logo.png"
                            alt="Indiana University Logo"
                            className="w-full h-auto"
                        />
                    </motion.div>

                    <ScrollReveal className="text-neutral-600 text-lg">
                        I graduated with a <span className="relative inline-block px-1"><span className="relative z-10">Master’s degree in Computer Science</span><span className="absolute inset-0 bg-yellow-200/60 -skew-x-2 rounded-sm" /></span> from Indiana University Bloomington in May 2025. I am currently working as a <span className="relative inline-block px-1"><span className="relative z-10">Software Engineer at Interlinked</span><span className="absolute inset-0 bg-yellow-200/60 skew-x-2 rounded-sm" /></span>, where I build and scale cloud-native systems that integrate climate, vegetation, and geospatial signals into reliable, real-world platforms.
                    </ScrollReveal>

                    <ScrollReveal className="text-neutral-600 text-lg font-medium">
                        What ties my work together is a respect for craft and a belief that great systems should feel intuitive, resilient, and human. I follow one simple rule: <span className="relative inline-block px-1"><span className="relative z-10">work and grow</span><span className="absolute inset-0 bg-blue-200/60 -skew-y-1 rounded-sm" /></span>.
                    </ScrollReveal>
                </div>

                {/* Footer CTA */}
            </div>
        </section>
    );
}
