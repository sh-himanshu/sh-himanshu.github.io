import { ArrowLeft, ExternalLink, GitFork, Star } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Background } from "@/components/sections/background";
import { fetchRepoReadme } from "@/lib/github";
import { Github } from "@/lib/icons";
import { getProjects } from "@/lib/projects";

export const dynamicParams = false;

export async function generateStaticParams() {
    const projects = await getProjects();
    return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const projects = await getProjects();
    const project = projects.find((p) => p.slug === slug);
    if (!project) return { title: "Project Not Found" };

    return {
        title: `${project.title} — Himanshu Sharma`,
        description: project.desc,
    };
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const projects = await getProjects();
    const project = projects.find((p) => p.slug === slug);

    if (!project) notFound();

    const readme = await fetchRepoReadme(project.owner, project.repo);

    return (
        <div className="min-h-screen text-zinc-200 selection:bg-[var(--accent)]/30 selection:text-white">
            <Background />

            <main className="relative z-10 mx-auto w-full max-w-[68rem] px-(--page-gutter) pt-8 pb-24 sm:pt-12 sm:pb-32">
                {/* Back navigation */}
                <Link
                    href="/#projects"
                    className="group mb-8 inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.05] px-4 py-2 text-sm font-medium text-zinc-400 backdrop-blur-md transition-all duration-200 hover:border-white/[0.2] hover:bg-white/[0.1] hover:text-white"
                >
                    <ArrowLeft
                        size={16}
                        className="transition-transform duration-200 group-hover:-translate-x-0.5"
                    />
                    Back to Projects
                </Link>

                {/* Project header card */}
                <div
                    className="mb-8 overflow-hidden rounded-[var(--tile-radius)] border-2 bg-zinc-900/70 p-[var(--tile-padding)] backdrop-blur-xl"
                    style={{
                        borderColor: `color-mix(in oklch, ${project.languageColor} 40%, transparent)`,
                    }}
                >
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0 flex-1">
                            <h1 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                {project.title}
                            </h1>
                            <p className="mb-4 max-w-2xl text-[15px] leading-relaxed text-zinc-400">
                                {project.desc}
                            </p>

                            {/* Language + stats */}
                            <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
                                <div className="flex items-center gap-1.5">
                                    <span
                                        className="size-3 rounded-full shadow-[0_0_6px_currentColor]"
                                        style={{
                                            backgroundColor:
                                                project.languageColor,
                                            color: project.languageColor,
                                        }}
                                    />
                                    <span className="font-medium text-zinc-300">
                                        {project.language}
                                    </span>
                                </div>
                                {project.stars > 0 && (
                                    <span className="flex items-center gap-1 text-zinc-400">
                                        <Star size={14} />
                                        {project.stars}
                                    </span>
                                )}
                                {project.forks > 0 && (
                                    <span className="flex items-center gap-1 text-zinc-400">
                                        <GitFork size={14} />
                                        {project.forks}
                                    </span>
                                )}
                            </div>

                            {/* Topics */}
                            {project.topics.length > 0 && (
                                <div className="mt-4 flex flex-wrap gap-1.5">
                                    {project.topics.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-md border border-white/[0.08] bg-white/[0.05] px-2.5 py-0.5 text-[11px] font-medium text-zinc-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Action buttons */}
                        <div className="flex shrink-0 flex-row gap-3 sm:flex-col">
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.06] px-5 py-2.5 text-[14px] font-medium text-zinc-200 transition-all duration-200 hover:border-white/[0.22] hover:bg-white/[0.12] hover:text-white"
                            >
                                <Github size={16} />
                                Source
                            </a>
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_0_30px_rgba(37,99,235,0.25)] transition-all duration-200 hover:bg-[var(--accent-muted)] hover:shadow-[0_0_40px_rgba(37,99,235,0.35)]"
                                >
                                    <ExternalLink size={16} />
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* README content */}
                {readme ? (
                    <div className="overflow-hidden rounded-[var(--tile-radius)] border border-white/[0.09] bg-zinc-900/70 p-[var(--tile-padding)] backdrop-blur-xl">
                        <div className="readme-prose">
                            <Markdown remarkPlugins={[remarkGfm]}>
                                {readme}
                            </Markdown>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center rounded-[var(--tile-radius)] border border-white/[0.09] bg-zinc-900/70 px-8 py-16 text-center backdrop-blur-xl">
                        <p className="text-lg font-medium text-zinc-400">
                            No README available for this project.
                        </p>
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--accent)] transition-colors hover:text-[var(--accent-muted)]"
                        >
                            <Github size={16} />
                            View on GitHub
                        </a>
                    </div>
                )}
            </main>
        </div>
    );
}
