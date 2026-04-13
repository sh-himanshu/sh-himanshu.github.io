"use client";

import { useEffect, useRef, useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { NAV_ITEMS } from "@/lib/data";
import { haptic } from "@/lib/haptic/haptic";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

const sectionIds = NAV_ITEMS.map((item) => item.id);

export function Navbar() {
    const activeSection = useScrollSpy(sectionIds);
    const [isScrolled, setIsScrolled] = useState(false);
    const frameRef = useRef<number | null>(null);

    useEffect(() => {
        const updateScrolled = () => {
            setIsScrolled(window.scrollY > 32);
            frameRef.current = null;
        };

        const handleScroll = () => {
            if (frameRef.current !== null) {
                return;
            }
            frameRef.current = window.requestAnimationFrame(updateScrolled);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            if (frameRef.current !== null) {
                window.cancelAnimationFrame(frameRef.current);
            }
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="pointer-events-none fixed inset-x-0 top-0 z-50 px-(--page-gutter) pt-4 md:pt-5">
            <nav
                aria-label="Primary"
                className={cn(
                    "pointer-events-auto mx-auto w-fit rounded-2xl border px-1.5 py-1.5 backdrop-blur-2xl transition-all duration-300 ease-out",
                    isScrolled
                        ? "border-black/[0.06] bg-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.5)] dark:border-white/[0.08] dark:bg-zinc-900/80 dark:shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.04)]"
                        : "border-black/[0.04] bg-white/50 shadow-[0_4px_16px_rgba(0,0,0,0.04)] dark:border-white/[0.04] dark:bg-zinc-950/50 dark:shadow-[0_4px_16px_rgba(0,0,0,0.2)]",
                )}
            >
                <ul className="relative flex items-center justify-center gap-0.5 px-0 py-0 md:gap-1">
                    {NAV_ITEMS.map((item) => {
                        const Icon = getIcon(item.iconName);
                        const isActive = activeSection === item.id;

                        return (
                            <li key={item.id} className="relative z-10">
                                <a
                                    href={`#${item.id}`}
                                    aria-current={
                                        isActive ? "location" : undefined
                                    }
                                    className={cn(
                                        "flex items-center justify-center gap-2 rounded-xl px-3 py-2 transition-all duration-200 focus-visible:ring-2 focus-visible:outline-none md:px-3.5",
                                        "focus-visible:ring-[var(--accent-muted)]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]",
                                        isActive
                                            ? "bg-black/[0.06] text-zinc-900 shadow-[inset_0_1px_0_rgba(0,0,0,0.03)] dark:bg-white/[0.1] dark:text-white dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                                            : "text-zinc-500 hover:bg-black/[0.04] hover:text-zinc-700 dark:hover:bg-white/[0.05] dark:hover:text-zinc-300",
                                    )}
                                    onClick={() => haptic(16)}
                                >
                                    <Icon
                                        size={17}
                                        strokeWidth={isActive ? 2.25 : 1.75}
                                    />
                                    <span
                                        className={cn(
                                            "hidden text-[13px] tracking-wide lg:inline",
                                            isActive
                                                ? "font-semibold"
                                                : "font-medium",
                                        )}
                                    >
                                        {item.label}
                                    </span>
                                </a>
                            </li>
                        );
                    })}
                    <li className="relative z-10">
                        <ThemeToggle />
                    </li>
                </ul>
            </nav>
        </div>
    );
}
