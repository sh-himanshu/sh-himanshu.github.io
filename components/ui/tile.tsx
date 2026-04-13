"use client";

import Link from "next/link";
import { type PointerEvent, type ReactNode, useEffect, useRef } from "react";
import type { TileColor, TileSize } from "@/lib/data";
import { haptic } from "@/lib/haptic/haptic";
import { cn } from "@/lib/utils";

const SIZE_CLASSES: Record<TileSize, string> = {
    "1x1": "col-span-1 row-span-1",
    "2x1": "col-span-2 row-span-1",
    "2x2": "col-span-2 row-span-2",
    "3x1": "col-span-2 row-span-1 md:col-span-3",
    "4x2": "col-span-2 row-span-2 md:col-span-4",
    "6x1": "col-span-2 row-span-1 md:col-span-4 lg:col-span-6",
    "6x2": "col-span-2 row-span-2 md:col-span-4 lg:col-span-6",
    "6x3": "col-span-2 row-span-3 md:col-span-4 lg:col-span-6",
};

const COLOR_CLASSES: Record<TileColor, string> = {
    default:
        "border-black/[0.06] bg-white/55 text-zinc-900 dark:border-white/[0.09] dark:bg-zinc-900/40 dark:text-zinc-100",
    blue: "border-blue-400/20 bg-blue-500/12 text-[#0058a3] dark:border-blue-400/30 dark:bg-blue-500/20 dark:text-blue-50",
    purple: "border-purple-400/15 bg-purple-500/12 text-purple-900 dark:border-purple-400/25 dark:bg-purple-500/20 dark:text-purple-50",
    green: "border-emerald-400/15 bg-emerald-500/12 text-emerald-900 dark:border-emerald-400/25 dark:bg-emerald-500/20 dark:text-emerald-50",
    teal: "border-teal-400/15 bg-teal-500/12 text-teal-900 dark:border-teal-400/20 dark:bg-teal-950/80 dark:text-teal-50",
    orange: "border-orange-400/15 bg-orange-500/12 text-orange-900 dark:border-orange-400/25 dark:bg-orange-500/20 dark:text-orange-50",
    red: "border-rose-400/15 bg-rose-500/12 text-rose-900 dark:border-rose-400/25 dark:bg-rose-500/20 dark:text-rose-50",
    solid: "border-white/[0.06] bg-zinc-900 text-zinc-100 dark:bg-zinc-900/40 dark:text-zinc-50",
};

interface TileProps {
    size?: TileSize;
    color?: TileColor;
    className?: string;
    contentClassName?: string;
    children: ReactNode;
    onClick?: () => void;
    href?: string;
    ariaLabel?: string;
    id?: string;
}

function isNativeHref(href: string) {
    return /^(https?:|mailto:|tel:|#)/.test(href);
}

function isExternalHref(href: string) {
    return /^https?:/.test(href);
}

export function Tile({
    size = "1x1",
    color = "default",
    className,
    contentClassName,
    children,
    onClick,
    href,
    ariaLabel,
    id,
}: TileProps) {
    const tileRef = useRef<HTMLElement>(null);
    const frameRef = useRef<number | null>(null);
    const pointerRef = useRef({ x: 0, y: 0 });
    const canTrackPointerRef = useRef(false);

    useEffect(() => {
        const finePointer = window.matchMedia(
            "(hover: hover) and (pointer: fine)",
        );
        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        );

        const updatePreference = () => {
            canTrackPointerRef.current =
                finePointer.matches && !reducedMotion.matches;
        };

        updatePreference();
        finePointer.addEventListener("change", updatePreference);
        reducedMotion.addEventListener("change", updatePreference);

        return () => {
            if (frameRef.current !== null) {
                window.cancelAnimationFrame(frameRef.current);
            }
            finePointer.removeEventListener("change", updatePreference);
            reducedMotion.removeEventListener("change", updatePreference);
        };
    }, []);

    const syncPointerPosition = () => {
        if (!tileRef.current) {
            return;
        }

        tileRef.current.style.setProperty(
            "--mouse-x",
            `${pointerRef.current.x}px`,
        );
        tileRef.current.style.setProperty(
            "--mouse-y",
            `${pointerRef.current.y}px`,
        );
        frameRef.current = null;
    };

    const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
        if (!canTrackPointerRef.current || !tileRef.current) {
            return;
        }

        const bounds = tileRef.current.getBoundingClientRect();
        pointerRef.current = {
            x: event.clientX - bounds.left,
            y: event.clientY - bounds.top,
        };

        if (frameRef.current === null) {
            frameRef.current =
                window.requestAnimationFrame(syncPointerPosition);
        }
    };

    const isInteractive = Boolean(onClick || href);
    const pointerProps = { onPointerMove: handlePointerMove };

    const sharedClasses = cn(
        "reveal-on-scroll group relative flex min-h-0 w-full flex-col overflow-hidden rounded-[var(--tile-radius)] border backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.03)] transition-all duration-300 ease-out md:backdrop-blur-2xl dark:shadow-[0_8px_40px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.03)]",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[radial-gradient(300px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(0,0,0,0.03),transparent_60%)] before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] dark:before:bg-[radial-gradient(300px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(255,255,255,0.06),transparent_60%)]",
        "after:pointer-events-none after:absolute after:inset-px after:rounded-[calc(var(--tile-radius)-1px)] after:border after:border-black/[0.03] after:content-[''] dark:after:border-white/[0.05]",
        "hover:before:opacity-100",
        isInteractive &&
            "cursor-pointer hover:-translate-y-0.5 hover:border-black/[0.12] hover:shadow-[0_16px_60px_rgba(0,0,0,0.1)] hover:before:opacity-100 active:translate-y-0 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-muted)]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)] dark:hover:border-white/[0.16] dark:hover:shadow-[0_16px_60px_rgba(0,0,0,0.35)]",
        SIZE_CLASSES[size],
        COLOR_CLASSES[color],
        className,
    );

    const content = (
        <div
            className={cn(
                "relative z-10 flex h-full min-h-0 w-full flex-col p-(--tile-padding)",
                contentClassName,
            )}
        >
            {children}
        </div>
    );

    if (href) {
        if (isNativeHref(href)) {
            return (
                <a
                    ref={tileRef as React.RefObject<HTMLAnchorElement>}
                    id={id}
                    href={href}
                    aria-label={ariaLabel}
                    target={isExternalHref(href) ? "_blank" : undefined}
                    rel={isExternalHref(href) ? "noreferrer" : undefined}
                    onClick={() => haptic(16)}
                    className={sharedClasses}
                    data-reveal
                    {...pointerProps}
                >
                    {content}
                </a>
            );
        }

        return (
            <Link
                ref={tileRef as React.RefObject<HTMLAnchorElement>}
                id={id}
                href={href}
                aria-label={ariaLabel}
                onClick={() => haptic(16)}
                className={sharedClasses}
                data-reveal
                {...pointerProps}
            >
                {content}
            </Link>
        );
    }

    if (onClick) {
        return (
            <button
                ref={tileRef as React.RefObject<HTMLButtonElement>}
                type="button"
                id={id}
                aria-label={ariaLabel}
                onClick={() => {
                    haptic(18);
                    onClick();
                }}
                className={sharedClasses}
                data-reveal
                {...pointerProps}
            >
                {content}
            </button>
        );
    }

    return (
        <div
            ref={tileRef as React.RefObject<HTMLDivElement>}
            id={id}
            className={sharedClasses}
            data-reveal
            {...pointerProps}
        >
            {content}
        </div>
    );
}
