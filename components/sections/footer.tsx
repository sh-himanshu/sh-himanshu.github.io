"use client";

import { SITE_CONFIG } from "@/lib/data";

const BUILD_YEAR = new Date().getFullYear();

export function Footer() {
    return (
        <footer className="relative z-10 mt-12 flex flex-col items-center gap-3 border-t border-white/10 bg-zinc-950/80 px-(--page-gutter) py-10 text-center text-[15px] text-zinc-500 backdrop-blur-xl md:py-10 md:backdrop-blur-2xl">
            <p className="font-medium tracking-wide">
                &copy; {BUILD_YEAR} {SITE_CONFIG.name}. All rights reserved.
            </p>
        </footer>
    );
}
