"use client";

import { Calendar, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { TechBadge } from "@/components/ui/tech-badge";
import { Tile } from "@/components/ui/tile";
import { EXPERIENCES } from "@/lib/data";
import { highlightText } from "@/lib/highlight-text";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { useExperienceExpanded } from "./experience-context";

const INITIAL_COUNT = 1;

export function ExperienceCards() {
    const { expanded } = useExperienceExpanded();
    const items = expanded ? EXPERIENCES : EXPERIENCES.slice(0, INITIAL_COUNT);

    return (
        <>
            {items.map((exp) => {
                const isCurrent = exp.period.includes("Present");

                return (
                    <Tile
                        key={exp.id}
                        size="6x2"
                        className={cn(
                            "group row-span-2 flex-col justify-start",
                            isCurrent &&
                                "border-[var(--accent)]/25 bg-[var(--accent)]/[0.08]",
                        )}
                    >
                        <div
                            className={cn(
                                "pointer-events-none absolute top-0 right-0 size-72 rounded-full bg-linear-to-br opacity-[0.12] blur-[100px] transition-opacity duration-500 group-hover:opacity-[0.25]",
                                exp.gradient,
                            )}
                        />

                        <div className="relative z-20 flex w-full flex-col gap-5 sm:gap-8 md:flex-row md:items-start">
                            <div className="flex shrink-0 flex-col gap-2.5 md:w-56">
                                <div className="flex items-center gap-3">
                                    {exp.logo ? (
                                        <div className="relative size-10 shrink-0 overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm dark:border-white/10">
                                            <Image
                                                src={exp.logo}
                                                alt={`${exp.company} logo`}
                                                fill
                                                sizes="40px"
                                                className="object-contain p-1"
                                            />
                                        </div>
                                    ) : (
                                        <div
                                            className={cn(
                                                "flex size-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white shadow-sm bg-linear-to-br",
                                                exp.gradient,
                                            )}
                                            aria-hidden="true"
                                        >
                                            {exp.company.charAt(0)}
                                        </div>
                                    )}
                                    <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white sm:text-xl">
                                        {exp.company}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 text-[11px] font-semibold tracking-widest text-zinc-500 uppercase">
                                    <Calendar
                                        size={14}
                                        strokeWidth={2}
                                        className={
                                            isCurrent
                                                ? "text-[var(--accent)]"
                                                : "text-zinc-500"
                                        }
                                    />
                                    <span
                                        className={
                                            isCurrent
                                                ? "text-[var(--accent)]"
                                                : ""
                                        }
                                    >
                                        {exp.period}
                                    </span>
                                </div>
                            </div>

                            <div className="flex-1">
                                <h3 className="mb-3 text-base font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-lg">
                                    {exp.role}
                                </h3>
                                <p className="mb-4 max-w-3xl text-[15px] leading-relaxed text-pretty text-zinc-600/80 dark:text-zinc-300/80">
                                    {highlightText(exp.desc)}
                                </p>
                                <ul className="space-y-2.5">
                                    {exp.highlights.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-start gap-3 text-[13.5px] text-zinc-500 dark:text-zinc-400 sm:text-[14px]"
                                        >
                                            <div
                                                className={cn(
                                                    "mt-[7px] size-1.5 shrink-0 rounded-full shadow-[0_0_6px_currentColor]",
                                                    isCurrent
                                                        ? "bg-[var(--accent)] text-[var(--accent)]"
                                                        : "bg-zinc-500 text-zinc-500",
                                                )}
                                            />
                                            <span className="leading-relaxed">
                                                {highlightText(item)}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {exp.technologies.length > 0 && (
                                    <div className="mt-5 flex flex-wrap gap-1.5">
                                        {exp.technologies.map((tech) => (
                                            <TechBadge
                                                key={tech.label}
                                                label={tech.label}
                                                brandColor={tech.brandColor}
                                                icon={
                                                    tech.iconName
                                                        ? getIcon(tech.iconName)
                                                        : undefined
                                                }
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </Tile>
                );
            })}
        </>
    );
}

export function ExperienceToggle() {
    const { expanded, toggle } = useExperienceExpanded();
    const hasMore = EXPERIENCES.length > INITIAL_COUNT;

    if (!hasMore) return null;

    return (
        <div className="flex justify-center pt-4">
            <button
                type="button"
                onClick={toggle}
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
    );
}
