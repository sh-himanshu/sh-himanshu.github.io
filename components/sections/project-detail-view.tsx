import { ArrowLeft, CheckCircle2, ExternalLink, Play } from "lucide-react";
import Link from "next/link";

import { ProjectImage } from "@/components/ui/project-image";
import { Github } from "@/lib/icons";
import type { Project } from "@/lib/projects";

interface ProjectDetailViewProps {
    project: Project;
}

export function ProjectDetailView({ project }: ProjectDetailViewProps) {
    const hasLiveDemo = project.liveUrl.startsWith("http");
    const hasSourceCode = project.githubUrl.startsWith("http");

    return (
        <article className="min-h-screen bg-[#050505] text-zinc-200">
            <div className="relative h-[clamp(18rem,48vw,32rem)] w-full overflow-hidden">
                <ProjectImage
                    src={project.image}
                    alt={`${project.title} hero preview`}
                    sizes="100vw"
                    className="absolute inset-0 size-full"
                    imageClassName="size-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-[#050505]/40 to-transparent" />

                <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-(--page-gutter) pt-4 sm:pt-6">
                    <Link
                        href="/#projects"
                        className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/60 px-4 py-2.5 text-sm font-semibold text-white shadow-lg backdrop-blur-md transition-colors hover:bg-zinc-950/75 focus-visible:ring-2 focus-visible:ring-[#68c7ff]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none"
                    >
                        <ArrowLeft
                            size={18}
                            className="transition-transform duration-300 ease-out group-hover:-translate-x-1"
                        />
                        Back to projects
                    </Link>
                </div>
            </div>

            <div className="relative z-10 mx-auto -mt-16 max-w-5xl px-(--page-gutter) pb-16 sm:-mt-20 sm:pb-20">
                <div className="overflow-hidden rounded-4xl border border-white/10 bg-[#0b0f17]/88 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-8 lg:p-10">
                    <header className="space-y-6">
                        <div className="space-y-3">
                            <p className="text-xs font-semibold tracking-[0.24em] text-zinc-400 uppercase">
                                Case study
                            </p>
                            <h1 className="text-3xl font-extrabold tracking-tight text-balance text-white drop-shadow-lg sm:text-5xl">
                                {project.title}
                            </h1>
                            <p className="max-w-3xl text-base leading-relaxed font-medium text-pretty text-zinc-300 sm:text-lg">
                                {project.fullDesc}
                            </p>
                        </div>

                        <ul
                            className="flex flex-wrap gap-2"
                            aria-label="Technologies used"
                        >
                            {project.technologies.map((tech) => (
                                <li key={tech}>
                                    <span className="inline-flex rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-sm font-semibold text-zinc-200">
                                        {tech}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </header>

                    <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)]">
                        <section className="flex flex-col gap-5">
                            <h2 className="border-b border-white/10 pb-3 text-xl font-bold tracking-wide text-white">
                                Key Features
                            </h2>
                            <ul className="space-y-4">
                                {project.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-start gap-3 text-zinc-300"
                                    >
                                        <CheckCircle2
                                            size={22}
                                            className="mt-0.5 shrink-0 rounded-full text-[#0078d4] shadow-sm"
                                        />
                                        <span className="leading-snug">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <aside className="flex flex-col gap-8">
                            <div className="rounded-3xl border border-white/10 bg-white/3 p-5">
                                <h2 className="text-lg font-semibold text-white">
                                    Delivery Snapshot
                                </h2>
                                <p className="mt-3 text-sm leading-7 text-zinc-300">
                                    {project.desc}
                                </p>
                            </div>

                            <div className="flex flex-col gap-3">
                                {hasLiveDemo ? (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0078d4] px-4 py-3.5 font-bold text-white shadow-[0_4px_14px_rgba(0,120,212,0.3)] transition-colors hover:bg-[#0078d4]/85 focus-visible:ring-2 focus-visible:ring-[#68c7ff]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none"
                                    >
                                        <Play
                                            size={18}
                                            className="fill-white"
                                        />{" "}
                                        Live Demo
                                        <ExternalLink size={16} />
                                    </a>
                                ) : (
                                    <span className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/4 px-4 py-3.5 font-semibold text-zinc-300">
                                        <Play
                                            size={18}
                                            className="fill-current"
                                        />{" "}
                                        Private build
                                    </span>
                                )}

                                {hasSourceCode ? (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-zinc-800 px-4 py-3.5 font-bold text-white shadow-lg transition-colors hover:bg-zinc-700 focus-visible:ring-2 focus-visible:ring-[#68c7ff]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none"
                                    >
                                        <Github size={18} /> Source Code
                                        <ExternalLink size={16} />
                                    </a>
                                ) : (
                                    <span className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/4 px-4 py-3.5 font-semibold text-zinc-300">
                                        <Github size={18} /> Source available on
                                        request
                                    </span>
                                )}
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </article>
    );
}
