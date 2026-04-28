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

export interface ExperienceTech {
    label: string;
    iconName?: string;
    brandColor?: string;
}

export interface Experience {
    id: string;
    role: string;
    company: string;
    period: string;
    gradient: string;
    logo?: string;
    desc: string;
    highlights: string[];
    technologies: ExperienceTech[];
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
    name: "Himanshu Sharma",
    title: "Software Engineer",
    location: "Gurugram, India",
    email: "aGltYW5zaHUuc2gxMjIwQGdtYWlsLmNvbQ==",
    phone: "KzkxIDgwNTgwMDk0MTU=",
    resumeUrl:
        "https://drive.google.com/file/d/1XKRV9VYyTcVfL54lCX3Ln0LxH-GcPgrF/view",
    availability: "OPEN TO WORK",
    description:
        "Frontend-focused Full-Stack Engineer with 4+ years building scalable, high-performance web applications using JavaScript, React, Node.js, and Express.\n\nSkilled in frontend architecture, Backend-for-Frontend (BFF) patterns, server-side rendering, AI/LLM integration, performance optimization, and automated testing.\n\nProven track record of owning features end-to-end and shipping AI-driven products — from multi-LLM orchestration systems powering 10M+ social posts annually to platforms serving 100,000+ businesses.\n\nOpen to roles involving scalable systems, AI-driven workflows, and products where engineering meets real business impact.\n\nLet's talk: reach out via the contact form.",
} as const;

export const NAV_ITEMS: NavItem[] = [
    { id: "hero", label: "Home", iconName: "Home" },
    { id: "about", label: "About", iconName: "User" },
    { id: "projects", label: "Projects", iconName: "Layers" },
    { id: "experience", label: "Experience", iconName: "Briefcase" },
    { id: "contact", label: "Contact", iconName: "Mail" },
];

export const SOCIAL_LINKS: SocialLink[] = [
    {
        id: "github",
        label: "GitHub",
        href: "https://github.com/sh-himanshu",
        iconName: "Github",
        color: "solid",
    },
    {
        id: "linkedin",
        label: "LinkedIn",
        href: "https://linkedin.com/in/sh-himanshu",
        iconName: "Linkedin",
        color: "blue",
    },
    {
        id: "x",
        label: "X",
        href: "https://x.com/himanshu_1220",
        iconName: "XTwitter",
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
        id: "react-native",
        name: "React Native & Expo",
        iconName: "Smartphone",
        size: "2x1",
        gradient: "from-[#bc4e9c] to-[#f80759]",
    },
    {
        id: "graphql",
        name: "GraphQL & Hasura",
        iconName: "Database",
        size: "2x1",
        gradient: "from-[#e535ab] to-[#1eb4d4]",
    },
    {
        id: "git-cicd",
        name: "Git & CI/CD",
        iconName: "Terminal",
        size: "2x1",
        gradient: "from-[#f43b47] to-[#453a94]",
    },
    {
        id: "redux",
        name: "Redux & State Mgmt",
        iconName: "Layers",
        size: "2x1",
        gradient: "from-[#764abc] to-[#593d88]",
    },
];

export const EXPERIENCES: Experience[] = [
    {
        id: "birdeye",
        role: "Software Frontend Engineer",
        company: "Birdeye",
        period: "Jul 2024 - Present",
        gradient: "from-[#00a4ef] to-[#0078d4]",
        logo: "/images/logos/birdeye.jpg",
        desc: "Building scalable frontend systems and AI-powered features for a B2B SaaS platform serving 100,000+ businesses, contributing $6M+ in annual recurring revenue.",
        highlights: [
            "Architected a multi-LLM orchestration system in Node.js/Express with async event-driven architecture, powering AI-driven content generation across 10M+ social posts annually.",
            "Led a major UX overhaul of social engagement, built multi-format export (PDF/PNG/PPT), integrated TikTok support, and migrated monolith to micro-frontend with Module Federation.",
            "Built a GitHub Actions code review workflow combining rule-based parsing with AI to detect recurring bugs and security issues, cutting regressions by 30%.",
            "Resolved a CVSS 8.5 cross-origin vulnerability, patched session-hijacking flaws, and drove Google CASA compliance by remediating OWASP Top 10 findings across the platform.",
        ],
        technologies: [
            { label: "React", iconName: "Globe", brandColor: "#61dafb" },
            { label: "TypeScript", iconName: "Code", brandColor: "#3178c6" },
            { label: "Redux Saga", iconName: "Layers", brandColor: "#764abc" },
            { label: "JavaScript", iconName: "Code", brandColor: "#f7df1e" },
        ],
    },
    {
        id: "oorjan",
        role: "Software Development Engineer",
        company: "Oorjan",
        period: "Sep 2022 - Jul 2024",
        gradient: "from-[#11998e] to-[#38ef7d]",
        logo: "/images/logos/oorjan.jpg",
        desc: "Built scalable web and mobile products across multiple cleantech product lines, managing 300+ projects and driving 10K+ app downloads.",
        highlights: [
            "Built a solar AMC management platform with OTP auth, role-based access, and automated notifications, managing 300+ projects and reducing resolution time by 40%.",
            "Migrated Solar Monitoring App from Cordova to Ionic React with Redux and Highcharts for real-time energy monitoring, driving 10K+ downloads with Firebase analytics.",
            "Migrated blog from WordPress to Next.js with SSG, Strapi CMS, GraphQL, and React Query, reducing load times by 40% and bounce rates by 60%.",
            "Built a mobile survey app with Expo SDK, React Native, and Drizzle ORM; integrated native device APIs and shortest-path routing, increasing daily site coverage.",
        ],
        technologies: [
            { label: "React", iconName: "Globe", brandColor: "#61dafb" },
            {
                label: "React Native",
                iconName: "Smartphone",
                brandColor: "#61dafb",
            },
            { label: "TypeScript", iconName: "Code", brandColor: "#3178c6" },
            { label: "Node.js", iconName: "Terminal", brandColor: "#5fa04e" },
            {
                label: "PostgreSQL",
                iconName: "Database",
                brandColor: "#336791",
            },
            { label: "Hasura", iconName: "Database", brandColor: "#1eb4d4" },
            { label: "Next.js", iconName: "Globe", brandColor: "#ffffff" },
            { label: "Expo", iconName: "Smartphone", brandColor: "#000020" },
        ],
    },
    {
        id: "raftlabs",
        role: "React.js Developer",
        company: "RaftLabs",
        period: "Jan 2022 - May 2022",
        gradient: "from-[#f43b47] to-[#453a94]",
        logo: "/images/logos/raftlabs.jpg",
        desc: "Developed frontend modules for client-facing SaaS products across healthcare and remote work, serving 150+ hospitals and 50+ clinics.",
        highlights: [
            "Built core modules — patient dashboard, appointment scheduling, and real-time video consultations using Agora.io SDK for a HIPAA-compliant telehealth platform, lifting patient engagement by 30%.",
            "Developed a hybrid remote-work platform using React and Electron; built immersive 3D meeting rooms and dynamic 2D virtual offices with Konva.js, and integrated multi-cloud storage (AWS S3, Google Drive, Dropbox).",
        ],
        technologies: [
            { label: "React", iconName: "Globe", brandColor: "#61dafb" },
            { label: "TypeScript", iconName: "Code", brandColor: "#3178c6" },
            { label: "GraphQL", iconName: "Database", brandColor: "#e535ab" },
            { label: "Agora SDK" },
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
