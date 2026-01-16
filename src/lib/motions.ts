import { Variants } from "framer-motion"

export const heroText: Variants = {
    hidden: {
        opacity: 0,
        y: 24,
        filter: "blur(6px)"
    },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1]
        }
    }
}

export const floatingOrb: Variants = {
    animate: {
        y: [0, -20, 0],
        x: [0, 10, 0],
        transition: {
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
}

export const ctaButton: Variants = {
    rest: { scale: 1 },
    hover: {
        scale: 1.04,
        boxShadow: "0px 20px 40px rgba(124,58,237,0.35)",
        transition: { type: "spring", stiffness: 300 } as any
    },
    tap: { scale: 0.97 }
}

export const sectionReveal: Variants = {
    hidden: {
        opacity: 0,
        y: 40
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
        }
    }
}

export const projectItem: Variants = {
    rest: {
        backgroundColor: "rgba(255,255,255,0)",
        x: 0
    },
    hover: {
        backgroundColor: "rgba(124,58,237,0.06)",
        x: 6,
        transition: { duration: 0.3 }
    }
}

export const underline: Variants = {
    rest: { scaleX: 0 },
    hover: {
        scaleX: 1,
        transformOrigin: "left",
        transition: { duration: 0.4, ease: "easeOut" }
    }
}

export const logoDrift: Variants = {
    animate: {
        x: ["0%", "-50%"],
        transition: {
            duration: 30,
            repeat: Infinity,
            ease: "linear"
        }
    }
}

export const timelineItem: Variants = {
    inactive: {
        scale: 0.96,
        opacity: 0.6
    },
    active: {
        scale: 1,
        opacity: 1,
        boxShadow: "0px 30px 60px rgba(124,58,237,0.25)",
        transition: { type: "spring", stiffness: 200 } as any
    }
}

export const pageTransition: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
    exit: { opacity: 0, y: -20 }
}

export const profileCardAnimation: Variants = {
    hidden: { opacity: 0, rotate: 0, scale: 0.9 },
    show: {
        opacity: 1,
        rotate: 3,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    },
    hover: {
        scale: 1.05,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 20
        }
    }
}
