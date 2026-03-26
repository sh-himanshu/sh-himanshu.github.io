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

const INITIAL_COUNT = 2;

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
                            isCurrent && "border-[#0078d4]/30 bg-[#0078d4]/10",
                        )}
                    >
                        <div
                            className={cn(
                                "pointer-events-none absolute top-0 right-0 size-80 rounded-full bg-linear-to-br opacity-10 blur-[100px] transition-opacity duration-700 group-hover:opacity-30",
                                exp.gradient,
                            )}
                        />

                        <div className="relative z-20 flex w-full flex-col gap-5 sm:gap-10 md:flex-row md:items-start">
                            <div className="flex shrink-0 flex-col gap-2 md:w-64">
                                <div className="flex items-center gap-3">
                                    {exp.logo ? (
                                        <div className="relative size-10 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white shadow-sm">
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
                                                "flex size-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white shadow-sm bg-linear-to-br",
                                                exp.gradient,
                                            )}
                                            aria-hidden="true"
                                        >
                                            {exp.company.charAt(0)}
                                        </div>
                                    )}
                                    <span className="text-xl font-bold tracking-tight text-zinc-900 drop-shadow-sm sm:text-3xl dark:text-white">
                                        {exp.company}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-zinc-500 uppercase sm:text-sm dark:text-zinc-400">
                                    <Calendar
                                        size={16}
                                        className={
                                            isCurrent
                                                ? "text-[#0078d4]"
                                                : "text-zinc-400 dark:text-white/60"
                                        }
                                    />
                                    <span
                                        className={
                                            isCurrent ? "text-[#0078d4]" : ""
                                        }
                                    >
                                        {exp.period}
                                    </span>
                                </div>
                            </div>

                            <div className="flex-1">
                                <h3 className="mb-4 text-lg font-bold tracking-tight text-zinc-900 sm:text-2xl dark:text-white">
                                    {exp.role}
                                </h3>
                                <p className="mb-5 max-w-3xl text-base font-medium text-pretty text-zinc-600 sm:text-[17px] dark:text-zinc-300">
                                    {highlightText(exp.desc)}
                                </p>
                                <ul className="space-y-3">
                                    {exp.highlights.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-start gap-3 text-sm text-zinc-500 sm:gap-4 sm:text-[15px] dark:text-zinc-400/90"
                                        >
                                            <div
                                                className={cn(
                                                    "mt-2 size-1.5 shrink-0 rounded-full",
                                                    isCurrent
                                                        ? "bg-[#0078d4]"
                                                        : "bg-zinc-400 dark:bg-white/30 dark:shadow-[0_0_8px_rgba(255,255,255,0.5)]",
                                                )}
                                            />
                                            <span className="leading-relaxed">
                                                {highlightText(item)}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {exp.technologies.length > 0 && (
                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {exp.technologies.map((tech) => (
                                            <TechBadge
                                                key={tech.label}
                                                label={tech.label}
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
    );
}
