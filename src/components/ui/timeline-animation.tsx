"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TimelineContentProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    animationNum?: number;
    customVariants?: any;
    timelineRef?: any;
    as?: any;
}

export const TimelineContent = ({
    children,
    className,
    style,
    as: Component = "div",
    ...props
}: TimelineContentProps) => {
    return (
        <Component className={cn(className)} style={style} {...props}>
            {children}
        </Component>
    );
};
