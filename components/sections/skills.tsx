"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { MetroIcon } from "@/components/ui/metro-icon";
import { Tile } from "@/components/ui/tile";
import { SKILLS } from "@/lib/data";
import { getIcon } from "@/lib/icons";

const INITIAL_COUNT = 4;

export function SkillsSection() {
    const [expanded, setExpanded] = useState(false);
    const items = expanded ? SKILLS : SKILLS.slice(0, INITIAL_COUNT);
    const hasMore = SKILLS.length > INITIAL_COUNT;

    return (
        <>
            {items.map((skill) => {
                const Icon = getIcon(skill.iconName);
                return (
                    <Tile key={skill.id} size={skill.size} className="group">
                        <div className="mt-auto flex w-full items-end justify-between gap-4">
                            <span className="z-20 min-w-0 text-xl font-bold tracking-tight text-balance text-zinc-900 drop-shadow-md transition-transform duration-300 ease-out group-hover:translate-x-1 dark:text-white">
                                {skill.name}
                            </span>
                            <MetroIcon icon={Icon} gradient={skill.gradient} />
                        </div>
                    </Tile>
                );
            })}

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
