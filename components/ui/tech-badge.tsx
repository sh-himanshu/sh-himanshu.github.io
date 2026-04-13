import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
    label: string;
    icon?: LucideIcon;
    brandColor?: string;
    className?: string;
}

export function TechBadge({
    label,
    icon: Icon,
    brandColor,
    className,
}: TechBadgeProps) {
    return (
        <span
            title={label}
            className={cn(
                "group/badge inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-[11px] font-medium transition-colors duration-200",
                "border-black/[0.06] bg-black/[0.03] text-zinc-500 hover:border-black/[0.12] hover:bg-black/[0.06] hover:text-zinc-700 dark:border-white/[0.07] dark:bg-white/[0.04] dark:text-zinc-400 dark:hover:border-white/[0.14] dark:hover:bg-white/[0.07] dark:hover:text-zinc-200",
                className,
            )}
        >
            {Icon && (
                <Icon
                    size={12}
                    strokeWidth={1.75}
                    className="shrink-0 transition-colors duration-200"
                    style={brandColor ? { color: brandColor } : undefined}
                    aria-hidden="true"
                />
            )}
            {label}
        </span>
    );
}
