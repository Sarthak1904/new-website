"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-fit mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Home" href="/">
                    <div className="text-sm p-4 w-[25rem]">
                        <Link href="/" className="flex flex-col items-center gap-4">
                            <Image
                                src="/images/home-preview.png"
                                width={400}
                                height={200}
                                alt="Home"
                                className="rounded-lg object-cover shadow-md w-full h-[12rem]"
                            />
                            <div className="text-center">
                                <h4 className="text-lg font-bold text-black dark:text-white">Home</h4>
                                <p className="text-neutral-700 text-sm dark:text-neutral-300">
                                    Return to the landing page.
                                </p>
                            </div>
                        </Link>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="About" href="/about">
                    <div className="text-sm p-4 w-[25rem]">
                        <Link href="/about" className="flex flex-col items-center gap-4">
                            <Image
                                src="/images/about-preview-new.png"
                                width={400}
                                height={200}
                                alt="Sarthak"
                                className="rounded-lg object-cover shadow-md w-full h-[12rem]"
                            />
                            <h4 className="text-lg font-bold text-black dark:text-white">About Me</h4>
                        </Link>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Sarthak.ai" href="/sarthak-ai">
                    <div className="text-sm p-4 w-[25rem]">
                        <Link href="/sarthak-ai" className="flex flex-col items-center gap-4">
                            <Image
                                src="/images/sarthak-ai-preview.png"
                                width={400}
                                height={200}
                                alt="Experience"
                                className="rounded-lg object-cover shadow-md w-full h-[12rem]"
                            />
                            <div className="text-center">
                                <h4 className="text-lg font-bold text-black dark:text-white">Experience</h4>
                                <p className="text-neutral-700 text-sm dark:text-neutral-300">
                                    My professional journey.
                                </p>
                            </div>
                        </Link>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Connect" href="/#contact" cta={true} />
            </Menu>
        </div >
    );
}
