"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { sectionReveal } from "@/lib/motions"
import Image from "next/image"

const experiences = [
    {
        id: "02",
        role: "Ambassador",
        company: "@ Figma",
        hoverColor: "#E10600",
        textColor: "#FFFFFF"
    },
    {
        id: "03",
        role: "UX Design",
        company: "@ Oshkosh",
        hoverColor: "#CBFF58",
        textColor: "#000000"
    },
    {
        id: "04",
        role: "UX Design",
        company: "@ BMW",
        hoverColor: "#00B4D8",
        textColor: "#FFFFFF"
    }
]

export function ExperienceSection() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    return (
        <motion.section
            variants={sectionReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="w-full max-w-[70%] mx-auto px-6 py-32"
        >
            <h2 className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-8">Journey</h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Left Column - Main Cards */}
                <div className="lg:col-span-7 space-y-6">
                    <motion.div
                        whileHover={{ scale: 1.005 }}
                        className="relative bg-[#FF6600] rounded-[2.5rem] p-10 overflow-hidden min-h-[340px] flex flex-col justify-between transition-all duration-300 shadow-xl shadow-orange-500/10"
                    >
                        <div className="relative z-10">
                            <h3 className="text-white text-4xl font-bold tracking-tight mb-1">UX Design Intern</h3>
                            <p className="text-white/90 text-xl font-medium">@ Amazon Rufus AI</p>
                        </div>

                        <div className="relative z-10 inline-flex items-center self-start px-6 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 shadow-lg">
                            <span className="text-white font-bold text-base tracking-tight">Summer 2025</span>
                        </div>

                        {/* Large Background Number */}
                        <span className="absolute -right-4 -bottom-4 text-[12rem] font-bold text-white/10 pointer-events-none select-none leading-none tracking-tighter">
                            01
                        </span>
                    </motion.div>

                    {/* Secondary Experience Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                onMouseEnter={() => setHoveredIdx(idx)}
                                onMouseLeave={() => setHoveredIdx(null)}
                                animate={{
                                    scale: hoveredIdx === idx ? 1.15 : 1,
                                    backgroundColor: hoveredIdx === idx ? exp.hoverColor : "#F8F8F8",
                                    filter: hoveredIdx !== null && hoveredIdx !== idx ? "blur(4px)" : "blur(0px)",
                                    zIndex: hoveredIdx === idx ? 20 : 1,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30,
                                    backgroundColor: { duration: 0.2 }
                                }}
                                className="relative rounded-[2rem] p-8 flex flex-col items-start min-h-[220px] cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
                            >
                                <motion.span
                                    animate={{
                                        color: hoveredIdx === idx
                                            ? idx === 1 ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.3)"
                                            : "rgba(156, 163, 175, 0.2)"
                                    }}
                                    className="text-5xl font-bold mb-auto tracking-tight select-none pointer-events-none"
                                >
                                    {exp.id}
                                </motion.span>
                                <div className="space-y-0.5">
                                    <motion.p
                                        animate={{ color: hoveredIdx === idx ? exp.textColor : "rgba(107, 114, 128, 0.8)" }}
                                        className="font-medium text-sm tracking-tight"
                                    >
                                        {exp.role}
                                    </motion.p>
                                    <motion.h4
                                        animate={{ color: hoveredIdx === idx ? exp.textColor : "#111827" }}
                                        className="font-bold text-lg leading-tight"
                                    >
                                        {exp.company}
                                    </motion.h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Text and Image - Tightened Spacing */}
                <div className="lg:col-span-5 flex flex-col pt-2">
                    <div className="space-y-6">
                        <p className="text-[#888] text-sm leading-relaxed max-w-[90%] font-medium">
                            Designed AI-powered elements for Amazon Shopping by aligning visual design, user insights, and LLM capabilities into cohesive, scalable tools across the app.
                        </p>
                        <p className="text-[#888] text-sm leading-relaxed max-w-[90%] font-medium">
                            Led motion interactions, information layouts, and architecture flows.
                        </p>
                    </div>

                    {/* Gallery Area - Moved up */}
                    <div className="relative mt-8 h-[220px]">
                        <div className="flex gap-4 h-full">
                            {/* Blue masked image */}
                            <div className="w-1/3 h-full relative rounded-3xl overflow-hidden shadow-sm">
                                <Image
                                    src="https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=688&auto=format&fit=crop"
                                    alt="Office detail"
                                    fill
                                    sizes="20vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-[#0055FF]/15 mix-blend-multiply" />
                            </div>
                            <div className="w-1/3 h-full relative rounded-3xl overflow-hidden shadow-sm">
                                <Image
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop"
                                    alt="Team discussion"
                                    fill
                                    sizes="20vw"
                                    className="object-cover"
                                />
                            </div>
                            <div className="w-1/3 h-full relative rounded-3xl overflow-hidden shadow-sm">
                                <Image
                                    src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1470&auto=format&fit=crop"
                                    alt="Office space"
                                    fill
                                    sizes="20vw"
                                    className="object-cover grayscale brightness-110"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Moved "See all" Button - 75% width */}
                    <div className="mt-8 flex justify-center">
                        <button className="w-3/4 bg-black hover:bg-black/90 text-white py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-lg">
                            See all
                        </button>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
