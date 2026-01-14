'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { sectionReveal } from '@/lib/motions';

export function AboutSection() {
    return (
        <motion.section
            variants={sectionReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="relative w-full max-w-5xl mx-auto px-6 py-32"
        >
            <div className="space-y-0">
                <h2 className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-8">About</h2>

                <div className="border-t border-border pt-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        {/* Left: Text Content */}
                        <div className="flex flex-col gap-8">
                            <div className="space-y-6">
                                <p className="text-xl md:text-2xl text-foreground font-medium leading-tight tracking-tight">
                                    I'm a passionate developer focused on building pixel-perfect, high-performance web applications.
                                </p>

                                <p className="text-muted-foreground leading-relaxed">
                                    With a deep love for clean code and premium aesthetics, I strive to create digital experiences that are not only functional but also visually stunning. My approach blends technical expertise with a keen eye for design, ensuring every project I touch is built to the highest standards.
                                </p>

                                <p className="text-muted-foreground leading-relaxed">
                                    Whether it's crafting intricate animations or architectural layout, I'm dedicated to delivering excellence.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-8 pt-4 border-t border-border/50">
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">Location</h4>
                                    <p className="text-foreground font-medium">San Francisco, CA</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">Experience</h4>
                                    <p className="text-foreground font-medium">5+ Years</p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Polaroid Image Content */}
                        <div className="relative flex justify-center items-center py-12">
                            {/* Grid Background Effect */}
                            <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 rounded-3xl" />

                            <motion.div
                                initial={{ rotate: -2, y: 20, opacity: 0 }}
                                whileInView={{ rotate: -2, y: 0, opacity: 1 }}
                                whileHover={{ rotate: 0, scale: 1.02 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="relative bg-white p-4 pb-16 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-black/5 max-w-[320px] w-full"
                            >
                                {/* Sticky Note */}
                                <motion.div
                                    initial={{ x: -20, y: -20, rotate: -15 }}
                                    whileInView={{ x: 0, y: 0, rotate: -12 }}
                                    whileHover={{ rotate: -5, scale: 1.1 }}
                                    className="absolute -top-10 -left-10 z-20 w-32 h-32 bg-[#FFFD8D] shadow-lg p-4 flex items-center justify-center transform"
                                >
                                    <span className="text-black/80 font-[family-name:var(--font-gochi-hand)] text-xl leading-tight text-center select-none -rotate-2">
                                        Make it simple!
                                    </span>
                                    {/* Sticky Note Pin/Shadow effect */}
                                    <div className="absolute top-0 right-0 w-8 h-8 bg-black/5" />
                                </motion.div>

                                {/* The Image */}
                                <div className="aspect-square overflow-hidden bg-muted border border-black/5">
                                    <img
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                                        alt="Professional Portrait"
                                        className="object-cover w-full h-full grayscale"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Polaroid Label */}
                                <div className="absolute bottom-4 left-0 w-full text-center">
                                    <span className="text-2xl text-black/70 font-[family-name:var(--font-gochi-hand)] select-none tracking-wide">
                                        me.jpeg
                                    </span>
                                </div>
                            </motion.div>

                            {/* Decorative Atmospheric Shadows */}
                            <div className="absolute -bottom-10 -right-10 h-48 w-48 bg-primary/5 rounded-full blur-3xl -z-20" />
                            <div className="absolute -top-10 -left-10 h-48 w-48 bg-purple-500/5 rounded-full blur-3xl -z-20" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
