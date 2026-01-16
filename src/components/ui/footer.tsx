"use client";

import React from "react";
import { motion } from "framer-motion";
import { PixelTrail } from "./pixel-trail";

export function Footer() {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("sarthakchoudhary830@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer className="w-full bg-[#e0e0da] py-32 px-10 md:px-20 relative overflow-hidden flex flex-col items-center justify-center min-h-[60vh]">
            <PixelTrail
                pixelSize={48}
                fadeDuration={600}
                delay={0}
                pixelClassName="bg-[#fb923c]"
            />

            <div className="max-w-7xl w-full mx-auto flex flex-col items-center relative z-10 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-6"
                >
                    <h2 className="text-5xl md:text-8xl font-semibold tracking-tighter text-black text-center mb-8">
                        Glad you made it to the end!
                    </h2>

                    <div className="flex flex-col items-center w-fit">
                        <p className="text-lg md:text-xl text-neutral-500 text-center mb-8 whitespace-nowrap">
                            Let’s create something amazing together.
                        </p>

                        <div className="pt-0 w-full flex justify-center pointer-events-auto">
                            <button
                                onClick={handleCopy}
                                className="bg-white text-black w-[80%] py-4 rounded-full text-sm font-semibold shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
                            >
                                <span>{copied ? "Copied!" : "sarthakchoudhary830@gmail.com"}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>


        </footer >
    );
}
