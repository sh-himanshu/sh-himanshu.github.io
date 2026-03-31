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
                "border-white/[0.07] bg-white/[0.04] text-zinc-400 hover:border-white/[0.14] hover:bg-white/[0.07] hover:text-zinc-200",
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
