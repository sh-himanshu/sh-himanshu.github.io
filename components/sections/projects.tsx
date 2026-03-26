"use client";

import {
    ChevronDown,
    ChevronUp,
    ExternalLink,
    GitFork,
    PlayCircle,
    Star,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Github } from "@/lib/icons";
import { PROJECTS } from "@/lib/projects";

const INITIAL_COUNT = 3;

export function ProjectsSection() {
    const [expanded, setExpanded] = useState(false);
    const items = expanded ? PROJECTS : PROJECTS.slice(0, INITIAL_COUNT);
    const hasMore = PROJECTS.length > INITIAL_COUNT;

    return (
        <>
            {items.map((project) => (
                <div
                    key={project.title}
                    className="reveal-on-scroll group flex flex-col overflow-hidden rounded-[var(--tile-radius)] border border-white/[0.08] bg-zinc-900/65 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-zinc-900/80 hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
                    data-reveal
                >
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden border-b border-white/[0.08]">
                        <Image
                            src={project.imageUrl}
                            alt={`${project.title} preview`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 rounded-full bg-white px-4 py-2 font-medium text-black transition-colors hover:bg-zinc-200"
                                >
                                    <PlayCircle size={18} />
                                    Live Demo
                                </a>
                            )}
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full border border-white/20 bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                            >
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-5">
                        <div className="mb-2 flex items-start justify-between">
                            <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-blue-400">
                                {project.title}
                            </h3>
                            <div className="flex gap-2">
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-zinc-400 transition-colors hover:text-white"
                                    title="Source Code"
                                >
                                    <Github size={18} />
                                </a>
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-zinc-400 transition-colors hover:text-white"
                                        title="Live Site"
                                    >
                                        <ExternalLink size={18} />
                                    </a>
                                )}
                            </div>
                        </div>

                        <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-300 line-clamp-3">
                            {project.desc}
                        </p>

                        {/* Tags */}
                        {project.topics.length > 0 && (
                            <div className="mb-4 flex flex-wrap gap-2">
                                {project.topics.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-md border border-white/[0.08] bg-white/10 px-2 py-1 text-[11px] text-zinc-200 shadow-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Footer */}
                        <div className="flex items-center justify-between border-t border-white/[0.08] pt-3 text-xs text-zinc-400">
                            <div className="flex items-center gap-1.5">
                                <span
                                    className="size-2.5 rounded-full"
                                    style={{
                                        backgroundColor: project.languageColor,
                                    }}
                                />
                                <span className="text-zinc-200">
                                    {project.language}
                                </span>
                            </div>

                            <div className="flex items-center gap-4">
                                {project.stars > 0 && (
                                    <span className="flex items-center gap-1">
                                        <Star size={14} />
                                        {project.stars}
                                    </span>
                                )}
                                {project.forks > 0 && (
                                    <span className="flex items-center gap-1">
                                        <GitFork size={14} />
                                        {project.forks}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {hasMore && (
                <div className="col-span-full flex justify-center">
                    <button
                        type="button"
                        onClick={() => setExpanded((prev) => !prev)}
                        className="flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/60 px-6 py-2.5 text-sm font-medium text-zinc-300 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-zinc-900/80 hover:text-white"
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
