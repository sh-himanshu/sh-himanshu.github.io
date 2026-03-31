"use client";

import { SITE_CONFIG } from "@/lib/data";

const BUILD_YEAR = new Date().getFullYear();

export function Footer() {
    return (
        <footer className="relative z-10 mt-16 border-t border-white/[0.06] px-(--page-gutter) py-8 text-center backdrop-blur-2xl">
            <p className="text-[13px] font-medium tracking-wide text-zinc-600">
                &copy; {BUILD_YEAR} {SITE_CONFIG.name}
            </p>
        </footer>
    );
}
