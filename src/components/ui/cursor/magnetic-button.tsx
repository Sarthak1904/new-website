"use client"

import { motion, useSpring } from "framer-motion"
import { useMagnetic } from "@/hooks/use-magnetic"
import { cn } from "@/lib/utils"

export function MagneticButton({
    children,
    className,
    ...props
}: {
    children: React.ReactNode,
    className?: string
} & React.ComponentPropsWithoutRef<typeof motion.button>) {
    const { mx, my, onMove, onLeave } = useMagnetic(0.3)

    const x = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.2 })
    const y = useSpring(my, { stiffness: 220, damping: 18, mass: 0.2 })

    return (
        <motion.button
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ x, y }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className={cn("rounded-full px-6 py-3 bg-primary text-primary-foreground", className)}
            {...props}
        >
            {children}
        </motion.button>
    )
}
