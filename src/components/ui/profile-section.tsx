"use client";

import { motion } from "framer-motion";
import { profileCardAnimation } from "@/lib/motions";
import Image from "next/image";
import { Plus, Linkedin, Instagram } from "lucide-react";

export function ProfileSection() {
    return (
        <section className="w-full max-w-[70%] mx-auto px-6 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Column - Bio Text */}
                <div className="relative space-y-10">
                    <h2 className="text-muted-foreground text-sm font-medium tracking-wide uppercase">Profile</h2>
                    <div className="relative">
                        <h2 className="text-xl leading-[1.6] font-semibold tracking-tight text-foreground">
                            I am Sarthak. I craft clean code, and chase muddy trails. Writing scalable software with a love for clean architecture. Caffeinated, country-obsessed, and creatively off-center.
                        </h2>
                    </div>

                    {/* Action Row */}
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-4 items-center mr-4">
                            <a
                                href="https://www.linkedin.com/in/sarchou/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 rounded-full border-4 border-white bg-[#0A66C2] flex items-center justify-center overflow-hidden shadow-lg z-10 transition-transform hover:scale-110 active:scale-95"
                            >
                                <Linkedin className="text-white fill-white" size={24} />
                            </a>
                            <a
                                href="https://www.instagram.com/sc.uncaptured/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 rounded-[1.25rem] border-4 border-white bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center shadow-lg z-20 overflow-hidden rotate-[-5deg] transition-transform hover:scale-110 active:scale-95"
                            >
                                <Instagram className="text-white" size={24} />
                            </a>
                        </div>



                        <button className="bg-[#262626] text-white px-8 py-4 rounded-full text-base font-bold hover:bg-black transition-colors shadow-lg">
                            About Me
                        </button>
                    </div>
                </div>

                {/* Right Column - Rotated Profile Card */}
                <div className="flex justify-center lg:justify-end">
                    <motion.div
                        variants={profileCardAnimation}
                        initial="hidden"
                        whileInView="show"
                        whileHover="hover"
                        viewport={{ once: true }}
                        className="relative w-full max-w-[380px] bg-white rounded-[2.5rem] p-4 shadow-2xl shadow-black/5 border border-gray-100 cursor-pointer"
                    >
                        {/* Profile Image Container */}
                        <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#1A1A1A]">
                            <Image
                                src="/images/sarthak-profile.jpg"
                                alt="Sarthak"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute top-6 left-6 z-10">
                                <h3 className="text-white text-2xl font-bold tracking-tight">Sarthak</h3>
                            </div>
                        </div>

                        {/* Card Footer */}
                        <div className="flex items-center justify-between px-2 pt-6 pb-2">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                    <Image
                                        src="/images/sarthak-profile.jpg"
                                        alt="Avatar"
                                        width={40}
                                        height={40}
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-[13px] font-bold text-gray-900 leading-none">@sarchou</p>
                                    <p className="text-[11px] font-medium text-gray-400 mt-1">LinkedIn</p>
                                </div>
                            </div>

                            <a
                                href="https://www.linkedin.com/in/sarchou/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-2xl text-[13px] font-bold hover:bg-neutral-800 transition-colors"
                            >
                                <Plus size={16} />
                                Connect
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
