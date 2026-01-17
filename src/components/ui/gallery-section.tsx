"use client"

import { BentoCell, BentoGrid, ContainerScale, ContainerScroll } from "@/components/ui/hero-gallery-scroll-animation"
import { Button } from "@/components/ui/button"

const IMAGES = [
    "/images/about-profile.png",
    "https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?q=80&w=2368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW98ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww",
]

export function GallerySection() {
    return (
        <ContainerScroll className="h-[400vh] bg-white relative">
            <div className="sticky top-0 left-0 h-screen w-full overflow-hidden">
                {/* Layered Content */}
                <div className="relative w-full h-full">
                    {/* Bento Grid Layer */}
                    <div className="absolute inset-0 z-0">
                        <BentoGrid className="h-full w-full p-6 md:p-12">
                            {IMAGES.map((imageUrl, index) => (
                                <BentoCell
                                    key={index}
                                    className="overflow-hidden rounded-2xl shadow-2xl border border-gray-100"
                                >
                                    <img
                                        className="size-full object-cover object-center"
                                        src={imageUrl}
                                        alt={`Gallery image ${index + 1}`}
                                    />
                                </BentoCell>
                            ))}
                        </BentoGrid>
                    </div>

                    {/* Text/Overlay Layer */}
                    <div className="absolute inset-0 z-10">
                        <ContainerScale className="text-center">
                            <h1 className="max-w-2xl text-2xl md:text-4xl font-semibold font-serif text-black mx-auto drop-shadow-sm leading-tight">
                                Snippets from my Recent Expedition
                            </h1>
                            <p className="my-4 max-w-lg text-neutral-600 text-sm md:text-base px-4 mx-auto leading-relaxed">
                                Recent escapes that spark creativity and connect me with nature
                            </p>
                        </ContainerScale>
                    </div>
                </div>
            </div>
        </ContainerScroll>
    )
}
