"use client";

import { useEffect, useRef, useState } from "react";

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
        <div className="pointer-events-none fixed inset-x-0 top-0 z-50 px-(--page-gutter) pt-4 md:pt-6">
            <nav
                aria-label="Primary"
                className={cn(
                    "pointer-events-auto mx-auto w-fit rounded-full border px-2 py-2 backdrop-blur-xl transition-all duration-300 ease-out md:backdrop-blur-2xl",
                    "border-white/10 bg-zinc-900/72 shadow-[0_10px_40px_rgba(0,0,0,0.35)]",
                    isScrolled
                        ? "translate-y-0"
                        : "md:border-white/5 md:bg-zinc-950/40 md:shadow-[0_6px_24px_rgba(0,0,0,0.2)]",
                )}
            >
                <ul className="relative flex items-center justify-center gap-1 px-0 py-0 md:gap-2">
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
                                        "flex items-center justify-center gap-2 rounded-full px-3 py-2 transition-all duration-200 focus-visible:ring-2 focus-visible:outline-none md:px-4",
                                        "focus-visible:ring-[#68c7ff]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]",
                                        isActive
                                            ? "border border-[#0078d4]/30 bg-[#0078d4]/20 text-blue-50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
                                            : "text-zinc-400 hover:bg-white/5 hover:text-zinc-100",
                                    )}
                                    onClick={() => haptic(16)}
                                >
                                    <Icon size={18} />
                                    <span
                                        className={cn(
                                            "hidden text-sm tracking-wide lg:inline",
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
                </ul>
            </nav>
        </div>
    );
}
