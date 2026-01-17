"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const transition = {
    type: "spring" as const,
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

export const MenuItem = ({
    setActive,
    active,
    item,
    href,
    children,
    cta,
}: {
    setActive: (item: string) => void;
    active: string | null;
    item: string;
    href?: string;
    children?: React.ReactNode;
    cta?: boolean;
}) => {
    const pathname = usePathname();
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (pathname === "/" && href === "/#contact") {
            e.preventDefault();
            const elem = document.getElementById("contact");
            if (elem) {
                elem.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <div onMouseEnter={() => setActive(item)} className="relative ">
            {href ? (
                <Link href={href} onClick={handleScroll} className={cta
                    ? "block px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-bold shadow-lg hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-[1.03]"
                    : "cursor-pointer text-black hover:opacity-[0.9] dark:text-white font-medium"
                }>
                    <motion.p transition={{ duration: 0.3 }}>
                        {item}
                    </motion.p>
                </Link>
            ) : (
                <motion.p
                    transition={{ duration: 0.3 }}
                    className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white font-medium"
                >
                    {item}
                </motion.p>
            )}
            {active !== null && children && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={transition}
                >
                    {active === item && (
                        <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
                            <motion.div
                                transition={transition}
                                layoutId="active" // layoutId ensures smooth animation
                                className="bg-white/100 dark:bg-black/100 backdrop-blur-2xl rounded-2xl overflow-hidden border border-black/[0.1] dark:border-white/[0.1] shadow-xl"
                            >
                                <motion.div
                                    layout // layout ensures smooth animation
                                    className="w-max h-full p-4"
                                >
                                    {children}
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            )}
            {!cta && ((active === item) || (active === null && href && usePathname() === href)) && (
                <motion.div
                    layoutId="navbar-active"
                    className="absolute left-0 right-0 -bottom-[1px] h-[3px] bg-blue-500 rounded-full"
                    transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30
                    }}
                />
            )}
        </div>
    );
};

export const Menu = ({
    setActive,
    children,
}: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
}) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)} // resets the state
            className="relative rounded-full border border-black/[0.1] dark:bg-black dark:border-white/[0.2] bg-white/70 backdrop-blur-md shadow-input flex justify-center items-center space-x-8 px-8 py-3 "
        >
            {children}
        </nav>
    );
};

export const ProductItem = ({
    title,
    description,
    href,
    src,
}: {
    title: string;
    description: string;
    href: string;
    src: string;
}) => {
    return (
        <Link href={href} className="flex space-x-2">
            <Image
                src={src}
                width={140}
                height={70}
                alt={title}
                className="flex-shrink-0 rounded-md shadow-2xl"
            />
            <div>
                <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
                    {title}
                </h4>
                <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
                    {description}
                </p>
            </div>
        </Link>
    );
};

export const HoveredLink = ({ children, ...rest }: any) => {
    return (
        <Link
            {...rest}
            className="text-neutral-700 dark:text-neutral-200 hover:text-black "
        >
            {children}
        </Link>
    );
};
