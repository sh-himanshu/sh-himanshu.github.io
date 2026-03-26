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

            const mutation = new MutationObserver((mutations) => {
                for (const m of mutations) {
                    for (const node of m.addedNodes) {
                        if (!(node instanceof HTMLElement)) continue;
                        const targets = node.matches("[data-reveal]")
                            ? [node]
                            : Array.from(
                                  node.querySelectorAll<HTMLElement>(
                                      "[data-reveal]",
                                  ),
                              );
                        for (const el of targets) {
                            el.dataset.revealed = "true";
                        }
                    }
                }
            });
            mutation.observe(container, { childList: true, subtree: true });

            return () => mutation.disconnect();
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

            const rect = element.getBoundingClientRect();
            if (rect.bottom < 0) {
                element.dataset.revealed = "true";
            } else {
                observer.observe(element);
            }
        });

        const mutation = new MutationObserver((mutations) => {
            for (const m of mutations) {
                for (const node of m.addedNodes) {
                    if (!(node instanceof HTMLElement)) continue;
                    const targets = node.matches("[data-reveal]")
                        ? [node]
                        : Array.from(
                              node.querySelectorAll<HTMLElement>(
                                  "[data-reveal]",
                              ),
                          );
                    for (const el of targets) {
                        if (!el.dataset.revealed) {
                            observer.observe(el);
                        }
                    }
                }
            }
        });
        mutation.observe(container, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
            mutation.disconnect();
        };
    }, []);

    return containerRef;
}
