"use client"

import { motion, useSpring, useTransform } from "framer-motion"
import { useSmoothCursor } from "@/hooks/use-smooth-cursor"

export function SmoothCursor() {
    const { x, y, vx, vy } = useSmoothCursor({ speed: 0.16 })

    // smooth the follower a bit more (nice “GSAP” glide)
    const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.3 })
    const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.3 })

    // velocity -> stretch/squash
    const v = useTransform([vx, vy], ([a, b]) => Math.min(20, Math.hypot(Number(a), Number(b))))
    const scaleX = useTransform(v, [0, 20], [1, 1.25])
    const scaleY = useTransform(v, [0, 20], [1, 0.85])

    return (
        <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[9999]"
            style={{
                translateX: sx,
                translateY: sy
            }}
        >
            <motion.div
                className="h-4 w-4 rounded-full bg-foreground/70 backdrop-blur"
                style={{
                    x: -8,
                    y: -8,
                    scaleX,
                    scaleY
                }}
            />
        </motion.div>
    )
}
