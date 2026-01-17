import AboutSection1 from "@/components/ui/about-section-1";
import StorySection from "@/components/ui/story-section";
import { GallerySection } from "@/components/ui/gallery-section";
import { Footer } from "@/components/ui/footer";

export default function AboutPage() {
    return (
        <main>
            <AboutSection1 />
            <StorySection />
            <GallerySection />
            <Footer />
        </main>
    );
}
