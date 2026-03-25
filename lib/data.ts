export interface NavItem {
    id: string;
    label: string;
    iconName: string;
}

export interface SocialLink {
    id: string;
    label: string;
    href: string;
    iconName: string;
    color: TileColor;
}

export interface Skill {
    id: string;
    name: string;
    iconName: string;
    size: TileSize;
    gradient: string;
}

export type TileSize =
    | "1x1"
    | "2x1"
    | "2x2"
    | "3x1"
    | "4x2"
    | "6x1"
    | "6x2"
    | "6x3";

export type TileColor =
    | "default"
    | "blue"
    | "purple"
    | "green"
    | "teal"
    | "orange"
    | "red"
    | "solid";

export interface Experience {
    id: string;
    role: string;
    company: string;
    period: string;
    gradient: string;
    desc: string;
    highlights: string[];
}

export interface LiveTileState {
    id: string;
    title: string;
    desc: string;
    iconName: string;
    color: TileColor;
    gradient: string;
    borderColor: string;
    iconColor: string;
    descColor: string;
}

// --- Constants ---

export const SITE_CONFIG = {
    name: "Alex Developer",
    title: "Software Engineer",
    location: "Seattle, WA",
    email: "hello@example.com",
    phone: "+1 (555) 000-0000",
    resumeUrl:
        "https://drive.google.com/uc?export=download&id=1vVL9G0t-H99QSifRNha-2yAJxGdVDuiL",
    availability: "Available for hire",
    description:
        "Software Engineer crafting fluid digital experiences. Specializing in React, Next.js, TypeScript, and modern web technologies.",
} as const;

export const NAV_ITEMS: NavItem[] = [
    { id: "hero", label: "Home", iconName: "Home" },
    { id: "about", label: "About", iconName: "User" },
    { id: "skills", label: "Skills", iconName: "Code" },
    { id: "projects", label: "Projects", iconName: "Layers" },
    { id: "experience", label: "Experience", iconName: "Briefcase" },
    { id: "contact", label: "Contact", iconName: "Mail" },
];

export const SOCIAL_LINKS: SocialLink[] = [
    {
        id: "github",
        label: "GitHub",
        href: "https://github.com",
        iconName: "Github",
        color: "solid",
    },
    {
        id: "linkedin",
        label: "LinkedIn",
        href: "https://linkedin.com",
        iconName: "Linkedin",
        color: "blue",
    },
    {
        id: "twitter",
        label: "Twitter",
        href: "https://twitter.com",
        iconName: "Twitter",
        color: "default",
    },
];

export const SKILLS: Skill[] = [
    {
        id: "react-next",
        name: "React & Next.js",
        iconName: "Globe",
        size: "2x1",
        gradient: "from-[#00c6ff] to-[#0072ff]",
    },
    {
        id: "typescript",
        name: "TypeScript",
        iconName: "Code",
        size: "2x1",
        gradient: "from-[#3178c6] to-[#235a97]",
    },
    {
        id: "tailwind",
        name: "Tailwind CSS",
        iconName: "Palette",
        size: "2x1",
        gradient: "from-[#38bdf8] to-[#0ea5e9]",
    },
    {
        id: "node-api",
        name: "Node.js & API",
        iconName: "Database",
        size: "2x1",
        gradient: "from-[#11998e] to-[#38ef7d]",
    },
    {
        id: "design",
        name: "UI/UX Design",
        iconName: "Smartphone",
        size: "2x1",
        gradient: "from-[#bc4e9c] to-[#f80759]",
    },
    {
        id: "systems",
        name: "System Arch",
        iconName: "Cpu",
        size: "2x1",
        gradient: "from-[#f12711] to-[#f5af19]",
    },
    {
        id: "git-cicd",
        name: "Git & CI/CD",
        iconName: "Terminal",
        size: "2x1",
        gradient: "from-[#f43b47] to-[#453a94]",
    },
    {
        id: "algorithms",
        name: "Data Structures & Algorithms",
        iconName: "Brain",
        size: "2x1",
        gradient: "from-[#f5af19] to-[#227bc3]",
    },
];

export const EXPERIENCES: Experience[] = [
    {
        id: "microsoft",
        role: "Senior Frontend Engineer",
        company: "Microsoft",
        period: "2021 - Present",
        gradient: "from-[#00a4ef] to-[#0078d4]",
        desc: "Leading development of Fluent UI React components for enterprise applications.",
        highlights: [
            "Architected highly reusable React components used by 50+ internal teams.",
            "Improved rendering performance of data-heavy grids by 45% using virtualization.",
            "Mentored a team of 4 junior developers in modern React patterns and TypeScript.",
        ],
    },
    {
        id: "vercel",
        role: "Full Stack Developer",
        company: "Vercel",
        period: "2019 - 2021",
        gradient: "from-[#111] to-[#333]",
        desc: "Contributed to core dashboard features and optimized deployment pipelines.",
        highlights: [
            "Built interactive analytics dashboards using Next.js and SWR.",
            "Implemented seamless edge-caching strategies reducing latency by 200ms.",
        ],
    },
    {
        id: "creative-agency",
        role: "Web Developer",
        company: "Creative Agency Co.",
        period: "2017 - 2019",
        gradient: "from-[#ff0084] to-[#33001b]",
        desc: "Built high-performance marketing sites and interactive web experiences.",
        highlights: [
            "Developed award-winning Awwwards landing pages with Three.js and GSAP.",
            "Streamlined client handoff processes by introducing Figma to the design pipeline.",
        ],
    },
];

export const LIVE_TILE_STATES: LiveTileState[] = [
    {
        id: "systems",
        title: "Systems Thinker",
        desc: "Building components that scale gracefully.",
        iconName: "Layers",
        color: "purple",
        gradient: "from-purple-500/20 to-purple-800/20",
        borderColor: "border-purple-400/20",
        iconColor: "text-purple-200",
        descColor: "text-purple-200/80",
    },
    {
        id: "automation",
        title: "AI & Automation",
        desc: "Integrating smart ML workflows seamlessly.",
        iconName: "Bot",
        color: "blue",
        gradient: "from-blue-500/20 to-blue-800/20",
        borderColor: "border-blue-400/20",
        iconColor: "text-blue-200",
        descColor: "text-blue-200/80",
    },
    {
        id: "algorithms",
        title: "DSA Enthusiast",
        desc: "Writing highly optimized, clean code.",
        iconName: "Code",
        color: "green",
        gradient: "from-emerald-500/20 to-emerald-800/20",
        borderColor: "border-emerald-400/20",
        iconColor: "text-emerald-200",
        descColor: "text-emerald-200/80",
    },
];
