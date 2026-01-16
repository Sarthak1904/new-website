// components/ui/tube-cursor.tsx
"use client";

import { useEffect, useRef } from "react";

type TubesCursorProps = {
    title?: string;
    subtitle?: string;
    caption?: string;
    initialColors?: string[];   // tubes base colors
    lightColors?: string[];     // lights colors
    lightIntensity?: number;    // lights intensity
    titleSize?: string;         // Tailwind text size classes
    subtitleSize?: string;
    captionSize?: string;
    enableRandomizeOnClick?: boolean;
    className?: string;         // extra classes for wrapper
};

const TubesCursor = ({
    title = "Ready to",
    subtitle = "Start?",
    caption = "Click to remix colors",
    initialColors = ["#f967fb", "#53bc28", "#6958d5"],
    lightColors = ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"],
    lightIntensity = 200,
    titleSize = "text-5xl md:text-7xl",
    subtitleSize = "text-5xl md:text-7xl",
    captionSize = "text-lg",
    enableRandomizeOnClick = true,
    className = "",
}: TubesCursorProps) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const appRef = useRef<any>(null);

    useEffect(() => {
        let removeClick: (() => void) | null = null;
        let destroyed = false;

        (async () => {
            try {
                // Using new Function to bypass TypeScript and Turbopack import validation for URL modules
                const mod = await (new Function('return import("https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js")')());
                const TubesCursorCtor = mod.default ?? mod;

                if (!canvasRef.current || destroyed) return;

                const app = TubesCursorCtor(canvasRef.current, {
                    tubes: {
                        colors: initialColors,
                        lights: {
                            intensity: lightIntensity,
                            colors: lightColors,
                        },
                    },
                });

                appRef.current = app;

                if (enableRandomizeOnClick) {
                    const handler = () => {
                        const colors = randomColors(initialColors.length);
                        const lights = randomColors(lightColors.length);
                        app.tubes.setColors(colors);
                        app.tubes.setLightsColors(lights);
                    };
                    document.body.addEventListener("click", handler);
                    removeClick = () =>
                        document.body.removeEventListener("click", handler);
                }
            } catch (err) {
                console.error("Failed to load TubesCursor module:", err);
            }
        })();

        return () => {
            destroyed = true;
            if (removeClick) removeClick();
            try {
                appRef.current?.dispose?.();
                appRef.current = null;
            } catch {
                // ignore
            }
        };
    }, [initialColors, lightColors, lightIntensity, enableRandomizeOnClick]);

    return (
        <div className={`relative h-full w-full overflow-hidden bg-black ${className}`}>
            {/* Background canvas - changed to absolute to stay in container */}
            <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full opacity-60" />

            {/* Hero text */}
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-6 select-none pointer-events-none">
                <h2
                    className={`m-0 p-0 text-white font-bold uppercase leading-none drop-shadow-[0_0_20px_rgba(0,0,0,1)] text-center ${titleSize}`}
                >
                    {title}
                </h2>
                <h2
                    className={`m-0 p-0 text-white font-bold uppercase leading-none drop-shadow-[0_0_20px_rgba(0,0,0,1)] text-center ${subtitleSize}`}
                >
                    {subtitle}
                </h2>
                <p
                    className={`m-0 p-0 text-white/60 font-medium tracking-wide drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] ${captionSize}`}
                >
                    {caption}
                </p>

                <button className="pointer-events-auto mt-4 bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl">
                    Get in touch
                </button>
            </div>
        </div>
    );
};

function randomColors(count: number) {
    return new Array(count).fill(0).map(
        () =>
            "#" +
            Math.floor(Math.random() * 16777215)
                .toString(16)
                .padStart(6, "0")
    );
}

export { TubesCursor };
