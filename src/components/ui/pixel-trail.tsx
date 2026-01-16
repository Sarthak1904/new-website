"use client"

import React, { useCallback, useMemo, useRef, useState, useEffect } from "react"
import { motion, useAnimationControls } from "framer-motion"
import { v4 as uuidv4 } from "uuid"

interface PixelTrailProps {
    pixelSize?: number
    fadeDuration?: number
    delay?: number
    className?: string
    pixelClassName?: string
}

export const PixelTrail: React.FC<PixelTrailProps> = ({
    pixelSize = 40,
    fadeDuration = 500,
    delay = 0,
    className = "",
    pixelClassName = "",
}) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const trailId = useRef(uuidv4())
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    useEffect(() => {
        if (!containerRef.current) return
        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setDimensions({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                })
            }
        })
        resizeObserver.observe(containerRef.current)
        return () => resizeObserver.disconnect()
    }, [])

    const { width, height } = dimensions
    const cols = Math.ceil(width / pixelSize)
    const rows = Math.ceil(height / pixelSize)

    const onMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (!containerRef.current) return
            const rect = containerRef.current.getBoundingClientRect()
            const x = Math.floor((e.clientX - rect.left) / pixelSize)
            const y = Math.floor((e.clientY - rect.top) / pixelSize)
            const el = document.getElementById(`${trailId.current}-${x}-${y}`) as any
            el?.__animate?.()
        },
        [pixelSize]
    )

    return (
        <div
            ref={containerRef}
            onMouseMove={onMove}
            className={`absolute inset-0 overflow-hidden ${className}`}
        >
            {Array.from({ length: rows }).map((_, y) => (
                <div key={y} className="flex">
                    {Array.from({ length: cols }).map((_, x) => (
                        <PixelDot
                            key={`${x}-${y}`}
                            id={`${trailId.current}-${x}-${y}`}
                            size={pixelSize}
                            fadeDuration={fadeDuration}
                            delay={delay}
                            className={pixelClassName}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}

interface PixelDotProps {
    id: string
    size: number
    fadeDuration: number
    delay: number
    className?: string
}

const PixelDot: React.FC<PixelDotProps> = ({ id, size, fadeDuration, delay, className }) => {
    const controls = useAnimationControls()

    const animate = useCallback(() => {
        controls.start({
            opacity: [1, 0],
            scale: [1, 0.6],
            transition: { duration: fadeDuration / 1000, delay: delay / 1000 },
        })
    }, [controls, fadeDuration, delay])

    const ref = useCallback((node: HTMLDivElement | null) => {
        if (node) (node as any).__animate = animate
    }, [animate])

    return (
        <motion.div
            id={id}
            ref={ref}
            initial={{ opacity: 0 }}
            animate={controls}
            style={{ width: size, height: size }}
            className={`rounded-full pointer-events-none ${className}`}
        />
    )
}
