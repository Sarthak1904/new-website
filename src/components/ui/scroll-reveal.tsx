"use client";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import React, { useRef, ReactNode, JSX } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    enableBlur?: boolean;
}

export const ScrollReveal = ({ children, className }: ScrollRevealProps) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.9", "start 0.25"],
    });

    // Calculate total number of words for the progress mapping
    const countWords = (node: ReactNode): number => {
        if (typeof node === "string") {
            return node.trim().split(/\s+/).length;
        }
        if (React.isValidElement(node)) {
            const element = node as React.ReactElement<{ children?: ReactNode }>;
            if (element.props.children) {
                if (Array.isArray(element.props.children)) {
                    return element.props.children.reduce((acc: number, child: ReactNode) => acc + countWords(child), 0);
                }
                return countWords(element.props.children);
            }
        }
        if (Array.isArray(node)) {
            return node.reduce((acc, child) => acc + countWords(child), 0);
        }
        return 0;
    };

    const totalWords = countWords(children);
    let globalWordIndex = 0;

    const processNode = (node: ReactNode): ReactNode => {
        if (typeof node === "string") {
            const words = node.trim().split(/\s+/);
            return words.map((word, i) => {
                const currentIndex = globalWordIndex;
                globalWordIndex++;

                const start = currentIndex / totalWords;
                const end = start + (1 / totalWords);

                // Preserve space after word unless it's the last one in this string chunk
                // Actually, flex-wrap gap usually handles spaces, or we need to add explicit spaces.
                // For simplicity in this layout (flex-wrap), we'll wrap each word. 
                // Adding a space manually is safer for "inline" flows but here we used flex previously.
                // Let's stick to inline-block behavior if possible or just standard spans with spaces.
                // The previous implementation used `flex flex-wrap`.
                // If we have nested spans, strict flex-wrap might break inline flow of "highlighter".
                // We should probably NOT use flex on the container if we want to support inline spans correctly.
                // We'll switch to standard inline text rendering and insert spaces.

                return (
                    <React.Fragment key={currentIndex}>
                        <Word progress={scrollYProgress} range={[start, end]}>
                            {word}
                        </Word>
                        {' '}
                    </React.Fragment>
                );
            });
        }

        if (React.isValidElement(node)) {
            const childProps = node.props as { children?: ReactNode }; // Type assertion

            // If it's a "highlighter" span, we want to keep it.
            // We process its children.
            if (childProps.children) {
                let newChildren: ReactNode;
                if (Array.isArray(childProps.children)) {
                    newChildren = childProps.children.map((child, i) => <React.Fragment key={i}>{processNode(child)}</React.Fragment>);
                } else {
                    newChildren = processNode(childProps.children);
                }

                return React.cloneElement(node, {}, newChildren);
            }
            return node; // No children to process (e.g. self-closing)
        }

        if (Array.isArray(node)) {
            return node.map((child, i) => <React.Fragment key={i}>{processNode(child)}</React.Fragment>);
        }

        return node;
    };


    return (
        <p ref={container} className={`leading-relaxed ${className}`}>
            {processNode(children)}
        </p>
    );
};

const Word = ({
    children,
    progress,
    range,
}: {
    children: string;
    progress: MotionValue<number>;
    range: [number, number];
}) => {
    const opacity = useTransform(progress, range, [0.2, 1]); // Grey to Black
    return (
        <span className="relative inline-block">
            <span className="absolute opacity-20">{children}</span>
            <motion.span style={{ opacity: opacity }} className="text-black">
                {children}
            </motion.span>
        </span>
    );
};
