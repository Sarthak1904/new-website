import { useEffect } from "react"
import { MotionValue, useMotionValue } from "framer-motion"

type SmoothCursor = {
    x: MotionValue<number>
    y: MotionValue<number>
    vx: MotionValue<number>
    vy: MotionValue<number>
}

export function useSmoothCursor({
    speed = 0.14, // lower = more floaty
    enable = true
} = {}): SmoothCursor {
    const x = useMotionValue(-9999)
    const y = useMotionValue(-9999)

    const vx = useMotionValue(0)
    const vy = useMotionValue(0)

    useEffect(() => {
        if (!enable) return

        let targetX = -9999
        let targetY = -9999
        let raf = 0

        const onMove = (e: PointerEvent) => {
            targetX = e.clientX
            targetY = e.clientY
        }

        const loop = () => {
            const cx = x.get()
            const cy = y.get()

            const dx = targetX - cx
            const dy = targetY - cy

            const nx = cx + dx * speed
            const ny = cy + dy * speed

            // velocity (for squash/stretch, etc.)
            vx.set(nx - cx)
            vy.set(ny - cy)

            x.set(nx)
            y.set(ny)

            raf = requestAnimationFrame(loop)
        }

        window.addEventListener("pointermove", onMove, { passive: true })
        raf = requestAnimationFrame(loop)

        return () => {
            window.removeEventListener("pointermove", onMove)
            cancelAnimationFrame(raf)
        }
    }, [enable, speed, x, y, vx, vy])

    return { x, y, vx, vy }
}
