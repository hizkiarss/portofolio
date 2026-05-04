"use client"
import React from 'react';
import AnimatedContent from "@/app/components/animation/animatedContent";
import WithoutScrollAnimatedContent from "./animation/WithoutScrollAnimatedContent";

type FadeInAnimationProps = {
    children: React.ReactNode;
    vertical?: boolean;
    scroll?: boolean;
    delay?:number;
};

function FadeInAnimation({ children, vertical = true, scroll = true, delay=0.3 }: FadeInAnimationProps) {
    const direction: "vertical" | "horizontal" = vertical ? "vertical" : "horizontal";

    const commonProps = {
        distance: 150,
        direction,
        reverse: false,
        duration: 1.5,
        initialOpacity: 0,
        animateOpacity: true,
        scale: 1.1,
        threshold: 0.2,
        delay: delay,
    };

    const Wrapper = scroll ? AnimatedContent : WithoutScrollAnimatedContent;

    return <Wrapper {...commonProps}>{children}</Wrapper>;
}

export default FadeInAnimation;
