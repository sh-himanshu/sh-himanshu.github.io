"use client";

import { useEffect, useRef } from "react";

export function useRevealOnScroll<T extends HTMLElement>() {
    const containerRef = useRef<T>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        const elements = Array.from(
            container.querySelectorAll<HTMLElement>("[data-reveal]"),
        );

        if (!elements.length) {
            return;
        }

        if (reducedMotion) {
            elements.forEach((element) => {
                element.dataset.revealed = "true";
            });
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        (entry.target as HTMLElement).dataset.revealed = "true";
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
        );

        elements.forEach((element, index) => {
            element.style.setProperty(
                "--reveal-delay",
                `${Math.min(index * 40, 240)}ms`,
            );
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return containerRef;
}
