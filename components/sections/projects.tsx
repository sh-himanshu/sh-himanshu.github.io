"use client";

import {
    ChevronDown,
    ChevronUp,
    ExternalLink,
    GitFork,
    Star,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Github } from "@/lib/icons";
import type { Project } from "@/lib/projects";

const INITIAL_COUNT = 3;

export function ProjectsSection({ projects }: { projects: Project[] }) {
    const [expanded, setExpanded] = useState(false);
    const items = expanded ? projects : projects.slice(0, INITIAL_COUNT);
    const hasMore = projects.length > INITIAL_COUNT;

    return (
        <>
            {items.map((project) => (
                <article
                    key={project.slug}
                    className="reveal-on-scroll group relative flex flex-col overflow-hidden rounded-[var(--tile-radius)] border-2 bg-white/70 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:bg-zinc-900/70 dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                    style={{
                        borderColor: `color-mix(in oklch, ${project.languageColor} 40%, transparent)`,
                    }}
                    data-reveal
                >
                    <div className="flex flex-1 flex-col p-[var(--tile-padding)]">
                        <div className="mb-3 flex items-start justify-between gap-3">
                            <Link
                                href={`/projects/${project.slug}`}
                                className="text-[17px] font-semibold leading-tight tracking-tight text-zinc-900 hover:text-[var(--accent)] transition-colors dark:text-white"
                            >
                                {project.title}
                            </Link>
                            <div className="flex shrink-0 items-center gap-0.5">
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex size-8 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-black/[0.05] hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/[0.08] dark:hover:text-white"
                                    title="Source Code"
                                >
                                    <Github size={16} />
                                </a>
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex size-8 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-black/[0.05] hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/[0.08] dark:hover:text-white"
                                        title="Live Site"
                                    >
                                        <ExternalLink size={15} />
                                    </a>
                                )}
                            </div>
                        </div>

                        <Link
                            href={`/projects/${project.slug}`}
                            className="mb-4 flex-1 text-[13.5px] leading-relaxed text-zinc-500 line-clamp-3 hover:text-zinc-600 transition-colors dark:text-zinc-400 dark:hover:text-zinc-300"
                        >
                            {project.desc}
                        </Link>

                        {project.topics.length > 0 && (
                            <div className="mb-4 flex flex-wrap gap-1.5">
                                {project.topics.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-md border border-black/[0.06] bg-black/[0.03] px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:border-white/[0.08] dark:bg-white/[0.05] dark:text-zinc-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        <div className="mt-auto flex items-center justify-between border-t border-black/[0.06] pt-3 text-xs text-zinc-500 dark:border-white/[0.07] dark:text-zinc-500">
                            <div className="flex items-center gap-1.5">
                                <span
                                    className="size-2.5 rounded-full shadow-[0_0_6px_currentColor]"
                                    style={{
                                        backgroundColor: project.languageColor,
                                        color: project.languageColor,
                                    }}
                                />
                                <span className="font-medium text-zinc-600 dark:text-zinc-300">
                                    {project.language}
                                </span>
                            </div>

                            <div className="flex items-center gap-3.5">
                                {project.stars > 0 && (
                                    <span className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
                                        <Star size={13} />
                                        {project.stars}
                                    </span>
                                )}
                                {project.forks > 0 && (
                                    <span className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
                                        <GitFork size={13} />
                                        {project.forks}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </article>
            ))}

            {hasMore && (
                <div className="col-span-full flex justify-center pt-2">
                    <button
                        type="button"
                        onClick={() => setExpanded((prev) => !prev)}
                        className="flex items-center gap-2 rounded-xl border border-black/[0.08] bg-black/[0.04] px-6 py-2.5 text-sm font-medium text-zinc-600 transition-all duration-200 hover:border-black/[0.15] hover:bg-black/[0.07] hover:text-zinc-900 dark:border-white/[0.1] dark:bg-white/[0.05] dark:text-zinc-300 dark:hover:border-white/[0.18] dark:hover:bg-white/[0.1] dark:hover:text-white"
                    >
                        {expanded ? (
                            <>
                                Show Less <ChevronUp size={16} />
                            </>
                        ) : (
                            <>
                                View More <ChevronDown size={16} />
                            </>
                        )}
                    </button>
                </div>
            )}
        </>
    );
}
