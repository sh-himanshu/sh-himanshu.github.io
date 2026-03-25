import {
    Bot,
    Brain,
    Briefcase,
    Code,
    Cpu,
    createLucideIcon,
    Database,
    Globe,
    Home,
    Layers,
    type LucideIcon,
    Mail,
    Palette,
    Smartphone,
    Terminal,
    User,
} from "lucide-react";

const Github = createLucideIcon("Github", [
    [
        "path",
        {
            d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
            key: "1",
        },
    ],
    ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "2" }],
]);

const Linkedin = createLucideIcon("Linkedin", [
    [
        "path",
        {
            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
            key: "1",
        },
    ],
    ["rect", { width: "4", height: "12", x: "2", y: "9", key: "2" }],
    ["circle", { cx: "4", cy: "4", r: "2", key: "3" }],
]);

const XTwitter = createLucideIcon("XTwitter", [
    [
        "path",
        {
            d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
            fill: "currentColor",
            stroke: "none",
            key: "1",
        },
    ],
]);

const ICON_MAP: Record<string, LucideIcon> = {
    Home,
    User,
    Code,
    Briefcase,
    Layers,
    Mail,
    Github,
    Linkedin,
    XTwitter,
    Terminal,
    Globe,
    Database,
    Palette,
    Cpu,
    Smartphone,
    Bot,
    Brain,
};

export function getIcon(name: string): LucideIcon {
    return ICON_MAP[name] ?? Code;
}

export type { LucideIcon };
export { Github };
