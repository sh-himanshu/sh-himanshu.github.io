import { ArrowUpRight, Download, House } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { ResumeViewer } from "@/components/resume-viewer";
import { Background } from "@/components/sections/background";
import { SITE_CONFIG } from "@/lib/data";

export const metadata: Metadata = {
    title: `Resume | ${SITE_CONFIG.name}`,
    description: `Preview and download ${SITE_CONFIG.name}'s resume.`,
};

export default function ResumePage() {
    return (
        <div className="min-h-screen overflow-x-hidden text-zinc-800 selection:bg-[var(--accent)]/30 selection:text-white dark:text-zinc-200">
            <Background />

            <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-[60rem] flex-col px-(--page-gutter) py-8 sm:py-10">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/70 px-4 py-2 text-sm font-medium text-zinc-700 shadow-[0_12px_36px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-black/[0.14] hover:text-zinc-950 dark:border-white/[0.1] dark:bg-zinc-900/60 dark:text-zinc-200 dark:hover:border-white/[0.18] dark:hover:text-white"
                    >
                        <House size={15} />
                        Back Home
                    </Link>

                    <div className="flex items-center gap-2">
                        <a
                            href={SITE_CONFIG.resumeViewUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/70 px-4 py-2 text-sm font-medium text-zinc-700 shadow-[0_12px_36px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-black/[0.14] hover:text-zinc-950 dark:border-white/[0.1] dark:bg-zinc-900/60 dark:text-zinc-200 dark:hover:border-white/[0.16] dark:hover:text-white"
                        >
                            <ArrowUpRight size={15} />
                            Open in Drive
                        </a>
                        <a
                            href={SITE_CONFIG.resumeUrl}
                            className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white shadow-[0_0_24px_rgba(37,99,235,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--accent-muted)]"
                        >
                            <Download size={15} />
                            Download
                        </a>
                    </div>
                </div>

                <div className="flex-1 overflow-hidden rounded-[2rem] border border-black/[0.08] bg-white/60 shadow-[0_24px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl dark:border-white/[0.08] dark:bg-zinc-900/50 dark:shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
                    <ResumeViewer
                        src={SITE_CONFIG.resumeEmbedUrl}
                        title={`${SITE_CONFIG.name} resume preview`}
                    />
                </div>
            </main>
        </div>
    );
}
