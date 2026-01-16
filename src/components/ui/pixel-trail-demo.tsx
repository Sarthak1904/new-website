"use client";

import { useScreenSize } from "@/components/hooks/use-screen-size"
import { PixelTrail } from "@/components/ui/pixel-trail"

const PixelTrailDemo: React.FC = () => {
    const screenSize = useScreenSize()

    return (
        <div className="relative w-full h-screen overflow-hidden bg-[#dcddd7] text-black flex flex-col font-calendas">
            <div className="absolute inset-0 z-0">
                <PixelTrail
                    pixelSize={screenSize.lessThan('md') ? 48 : 80}
                    fadeDuration={0}
                    delay={1200}
                    pixelClassName="rounded-full bg-[#ffa04f]"
                />
            </div>

            <div className="relative z-10 flex-1 flex flex-col items-center justify-center pointer-events-none space-y-2 md:space-y-8">
                <h2 className="text-3xl sm:text-5xl md:text-7xl tracking-tight">
                    fancy ✽ components
                </h2>
                <p className="text-xs md:text-2xl">
                    with react, motion, and typrscript.
                </p>
            </div>

            <p className="absolute bottom-4 right-4 z-10 text-xs md:text-base pointer-events-none">
                make the web fun again.
            </p>
        </div>
    )
}

export { PixelTrailDemo }
