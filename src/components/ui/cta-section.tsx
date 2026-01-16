import { TubesCursor } from "./tube-cursor";

import { motion } from "framer-motion";
import { sectionReveal } from "@/lib/motions";

export default function CTASection() {
    return (
        <motion.section
            variants={sectionReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="w-full py-24 bg-black text-white flex flex-col items-center justify-center text-center px-4"
        >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Let's Build Something Together</h2>
            <p className="text-xl text-neutral-400 mb-10 max-w-2xl">
                I'm always open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to chat.
            </p>
            <a
                href="mailto:hello@example.com"
                className="bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-neutral-200 transition-colors shadow-xl"
            >
                Get in Touch
            </a>
        </motion.section>
    );
}
