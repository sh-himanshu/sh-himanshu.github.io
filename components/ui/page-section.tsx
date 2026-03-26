import type { ReactNode } from "react";

import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

export const PAGE_GRID_CLASS =
    "grid auto-rows-[minmax(10rem,auto)] grid-flow-dense grid-cols-2 gap-[var(--tile-gap)] sm:auto-rows-[minmax(11rem,auto)] md:grid-cols-4 lg:grid-cols-6";

interface PageSectionProps {
    id: string;
    title: string;
    children: ReactNode;
    className?: string;
    gridClassName?: string;
}

export function PageSection({
    id,
    title,
    children,
    className,
    gridClassName,
}: PageSectionProps) {
    return (
        <section
            id={id}
            aria-labelledby={`${id}-heading`}
            className={cn(
                "scroll-mt-32 space-y-6 pt-(--section-gap)",
                className,
            )}
        >
            <SectionHeader title={title} headingId={`${id}-heading`} />
            <div className={cn(PAGE_GRID_CLASS, gridClassName)}>{children}</div>
        </section>
    );
}
