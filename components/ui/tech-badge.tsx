import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
    label: string;
    icon?: LucideIcon;
    className?: string;
}

export function TechBadge({ label, icon: Icon, className }: TechBadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
                "border-white/10 bg-white/6 text-zinc-300",
                className,
            )}
        >
            {Icon && (
                <Icon
                    size={13}
                    strokeWidth={2}
                    className="shrink-0 opacity-70"
                    aria-hidden="true"
                />
            )}
            {label}
        </span>
    );
}
