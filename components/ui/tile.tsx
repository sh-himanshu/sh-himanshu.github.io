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
    default: "border-white/[0.08] bg-zinc-900/40 text-zinc-100",
    blue: "border-[#0078d4]/30 bg-[#0078d4]/20 text-blue-50",
    purple: "border-purple-400/20 bg-purple-900/30 text-purple-50",
    green: "border-emerald-400/20 bg-emerald-900/30 text-emerald-50",
    teal: "border-teal-400/20 bg-teal-900/30 text-teal-50",
    orange: "border-orange-400/20 bg-orange-900/30 text-orange-50",
    red: "border-rose-400/20 bg-rose-900/30 text-rose-50",
    solid: "border-transparent bg-zinc-100 text-zinc-950",
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
        "reveal-on-scroll group relative flex min-h-0 w-full flex-col overflow-hidden rounded-[var(--tile-radius)] border backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.24)] transition-transform duration-300 ease-out will-change-transform md:backdrop-blur-2xl",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[radial-gradient(320px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(255,255,255,0.14),transparent_65%)] before:opacity-0 before:transition-opacity before:duration-300 before:content-['']",
        "after:pointer-events-none after:absolute after:inset-px after:rounded-[calc(var(--tile-radius)-2px)] after:border after:border-white/6 after:content-['']",
        "hover:before:opacity-100",
        isInteractive &&
            "cursor-pointer hover:-translate-y-1 hover:border-white/16 hover:before:opacity-100 active:translate-y-0 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#68c7ff]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]",
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
