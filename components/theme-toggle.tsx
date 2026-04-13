"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="flex size-9 items-center justify-center rounded-xl">
                <div className="size-[17px]" />
            </div>
        );
    }

    const isDark = theme === "dark";

    return (
        <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            className={cn(
                "flex size-9 items-center justify-center rounded-xl transition-all duration-200 focus-visible:ring-2 focus-visible:outline-none",
                "text-zinc-600 hover:bg-black/[0.05] hover:text-zinc-900",
                "dark:text-zinc-500 dark:hover:bg-white/[0.05] dark:hover:text-zinc-300",
                "focus-visible:ring-[var(--accent-muted)]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]",
            )}
        >
            {isDark ? (
                <Sun size={17} strokeWidth={1.75} />
            ) : (
                <Moon size={17} strokeWidth={1.75} />
            )}
        </button>
    );
}
