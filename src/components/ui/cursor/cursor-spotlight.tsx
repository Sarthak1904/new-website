"use client"

import { motion, useSpring, useMotionTemplate } from "framer-motion"
import { useSmoothCursor } from "@/hooks/use-smooth-cursor"

export function CursorSpotlight() {
    const { x, y } = useSmoothCursor({ speed: 0.08 })
    const sx = useSpring(x, { stiffness: 90, damping: 25 })
    const sy = useSpring(y, { stiffness: 90, damping: 25 })

    const bg = useMotionTemplate`radial-gradient(600px circle at ${sx}px ${sy}px, rgba(124,58,237,0.18), transparent 55%)`

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-0"
            style={{ background: bg }}
        />
    )
}
