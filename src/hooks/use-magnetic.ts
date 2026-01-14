import { useMotionValue } from "framer-motion"

export function useMagnetic(strength = 0.35) {
    const mx = useMotionValue(0)
    const my = useMotionValue(0)

    const onMove = (e: React.MouseEvent<HTMLElement>) => {
        const el = e.currentTarget
        const r = el.getBoundingClientRect()
        const dx = e.clientX - (r.left + r.width / 2)
        const dy = e.clientY - (r.top + r.height / 2)

        mx.set(dx * strength)
        my.set(dy * strength)
    }

    const onLeave = () => {
        mx.set(0)
        my.set(0)
    }

    return { mx, my, onMove, onLeave }
}
