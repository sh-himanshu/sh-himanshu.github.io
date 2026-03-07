import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetroIconProps {
  icon: LucideIcon;
  gradient: string;
}

export function MetroIcon({ icon: Icon, gradient }: MetroIconProps) {
  return (
    <div
      className={cn(
        "relative flex size-14 items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-linear-to-br shadow-[0_8px_16px_rgba(0,0,0,0.32)] transition-transform duration-300 ease-out group-hover:scale-105",
        gradient,
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 z-10 rounded-2xl bg-linear-to-b from-white/50 to-transparent opacity-50 mix-blend-overlay" />
      <div className="absolute inset-0 z-10 rounded-2xl shadow-[inset_0_-4px_8px_rgba(0,0,0,0.4)]" />
      <div className="absolute inset-y-0 -left-[120%] z-20 w-[160%] -skew-x-12 bg-linear-to-r from-transparent via-white/18 to-transparent transition-transform duration-500 ease-out group-hover:translate-x-[88%]" />

      <Icon
        className="relative z-30 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
        size={28}
        strokeWidth={2.5}
      />
    </div>
  );
}
