"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function StorySection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
        <section ref={containerRef} className="relative py-32 bg-white overflow-hidden">
            {/* Decorative Elements - Absolute Positioned */}
            {/* Top Left Paintings */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-20 left-[-5%] md:left-[5%] w-48 md:w-64 z-0 hidden lg:block"
            >
                <img
                    src="https://images.unsplash.com/photo-1577720580479-7d839d829c73?q=80&w=1000&auto=format&fit=crop"
                    alt="Classic Art 1"
                    className="rounded-lg shadow-xl rotate-[-6deg]"
                />
                <img
                    src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=1000&auto=format&fit=crop"
                    alt="Classic Art 2"
                    className="absolute top-10 left-32 rounded-lg shadow-xl rotate-[12deg] w-40"
                />
            </motion.div>

            {/* Top Right iMac/Aa */}
            <motion.div
                style={{ y: y2 }}
                className="absolute top-40 right-[-5%] md:right-[10%] w-40 z-0 hidden lg:block"
            >
                <div className="relative">
                    <img
                        src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1000&auto=format&fit=crop"
                        alt="Retro Computer"
                        className="rounded-lg shadow-lg rotate-[15deg] w-full"
                    />
                    <div className="text-8xl font-serif absolute -bottom-10 -right-10 opacity-20 transform rotate-12">Aa</div>
                </div>
            </motion.div>

            {/* Middle Left Photo */}
            <motion.div
                className="absolute top-[35%] left-[2%] md:left-[10%] w-48 z-0 hidden lg:block"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <img
                    src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop"
                    alt="Camera"
                    className="rounded-lg shadow-xl -rotate-3"
                />
            </motion.div>

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

                {/* Intro */}
                <div className="space-y-8">
                    <div className="flex justify-center mb-8">
                        <span className="text-4xl">🍃</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-center font-serif">
                        I've always loved beautiful things.
                    </h3>
                    <p className="text-neutral-600 leading-relaxed text-lg">
                        <span className="bg-neutral-200 px-1 rounded mx-1">Not just because they're pretty,</span>
                        because beauty reflects intention and care. Finding the right materials, tools, or systems and putting them in service of a clear vision, that's where true art lives. For me, great beauty is not decorative.
                    </p>

                    <div className="flex justify-center gap-4 py-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center border shadow-sm">
                                <div className="w-4 h-4 bg-neutral-300 rounded-sm" />
                            </div>
                        ))}
                    </div>

                    <p className="text-neutral-600 leading-relaxed text-lg font-light italic">
                        moving toward that ideal, no matter how many times it must be rebuilt. An ongoing process of shaping ideas until they finally feel inevitable. - Sarthak
                    </p>
                </div>

                {/* Learning */}
                <div className="space-y-4">
                    <p className="text-neutral-600 leading-relaxed text-lg">
                        Learning is what fuels that process. That's why the only rule I follow is simple: work and <span className="bg-blue-100 px-1 rounded">grow</span>. Through uncertainty, ambiguity, and the urge to give up.
                    </p>
                </div>

                {/* Architecture to UX */}
                <div className="space-y-6 relative">
                    <p className="text-neutral-600 leading-relaxed text-lg">
                        I was born and raised in India, where I spent my days between debate tournaments and my drawing tablet. At the time, I didn't know a creative career could be possible, so my curious heart chose what seemed like the closest "real" path, Engineering.
                    </p>

                    {/* Circle Decoration */}
                    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 opacity-10 pointer-events-none" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" stroke="currentColor" fill="none" />
                    </svg>

                    <p className="text-neutral-600 leading-relaxed text-lg">
                        During my first year, I stumbled upon <span className="font-semibold underline decoration-wavy decoration-blue-400">Software Engineering</span> through small conversations, a discipline that combined everything I loved: logic, people, and creativity.
                    </p>

                    <h4 className="text-2xl font-bold text-center py-6">
                        It felt like coming home to a craft I didn't know had a name.
                    </h4>
                </div>

                {/* Experience Grid (Text-based) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-neutral-500">
                    <div className="bg-neutral-50 p-6 rounded-2xl">
                        <p>Since then, I've collaborated with companies to build scalable systems and intuitive interfaces.</p>
                    </div>
                    <div className="bg-neutral-50 p-6 rounded-2xl">
                        <p>I also joined developer communities, serving as a mentor and organizing workshops to help others grow.</p>
                    </div>
                    <div className="bg-neutral-50 p-6 rounded-2xl">
                        <p>In the summer of 2025, I interned at a top tech firm, reimagining how humans interact with intelligent systems.</p>
                    </div>
                    <div className="bg-neutral-50 p-6 rounded-2xl">
                        <p>I see my work as the intersection of craft, thinking, and empathy. And as a developer, I'll always be hungry for learning.</p>
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="text-center pt-20 pb-10">
                    <h2 className="text-5xl md:text-6xl font-semibold mb-8 tracking-tight">
                        Be part of my<br />journey!
                    </h2>
                    <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
                        Let's Talk! <ArrowRight size={20} />
                    </button>
                </div>

            </div>
        </section>
    );
}
