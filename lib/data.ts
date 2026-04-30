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
        "https://drive.usercontent.google.com/u/0/uc?id=1SrwHnR1LOLkworK90KpgFf4fZ3PGXloM&export=download",
    resumeViewUrl:
        "https://drive.google.com/file/d/1SrwHnR1LOLkworK90KpgFf4fZ3PGXloM/view",
    resumeEmbedUrl:
        "https://drive.google.com/file/d/1SrwHnR1LOLkworK90KpgFf4fZ3PGXloM/preview",
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
        name: "Node.js & Express",
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
        id: "genai-llms",
        name: "GenAI & LLMs",
        iconName: "Bot",
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
        name: "Redux & Zustand",
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
        desc: "Birdeye is a B2B SaaS platform that helps **100,000+ businesses** manage their online reputation, social media, and customer experience from a single dashboard. I work on the social product, where the core challenge is enabling businesses to create, schedule, and publish content at massive scale across channels. I've built **AI-powered content generation pipelines** using multi-LLM orchestration, media processing microservices with Sharp, FFmpeg, and S3 achieving up to **70% size reduction** and **~3x faster uploads**, and **micro-frontend architectures** using Webpack Module Federation that power **10M+ social posts annually**, contributing **$4M+ in ARR**. I also strengthened client-side security by remediating a **CVSS 8.5 cross-origin vulnerability**, upgrading **70+ vulnerable npm packages**, and achieving **Google CASA compliance**.",
        technologies: [
            { label: "React", iconName: "SiReact", brandColor: "#61dafb" },
            {
                label: "TypeScript",
                iconName: "SiTypescript",
                brandColor: "#3178c6",
            },
            {
                label: "JavaScript",
                iconName: "SiJavascript",
                brandColor: "#f7df1e",
            },
            {
                label: "Node.js",
                iconName: "SiNodedotjs",
                brandColor: "#5fa04e",
            },
            { label: "Express", iconName: "SiExpress", brandColor: "#ffffff" },
            { label: "NestJS", iconName: "SiNestjs", brandColor: "#e0234e" },
            { label: "Redux Saga", iconName: "SiRedux", brandColor: "#764abc" },
            { label: "Webpack", iconName: "SiWebpack", brandColor: "#8dd6f9" },
            { label: "AWS S3", iconName: "SiAmazons3", brandColor: "#ff9900" },
            { label: "FFmpeg", iconName: "SiFFmpeg", brandColor: "#007808" },
            {
                label: "Puppeteer",
                iconName: "SiPuppeteer",
                brandColor: "#40b5a4",
            },
            {
                label: "GitHub Actions",
                iconName: "SiGithubactions",
                brandColor: "#2088ff",
            },
        ],
    },
    {
        id: "oorjan",
        role: "Software Development Engineer",
        company: "Oorjan",
        period: "Sep 2022 - Jul 2024",
        gradient: "from-[#11998e] to-[#38ef7d]",
        logo: "/images/logos/oorjan.jpg",
        desc: "Oorjan is a cleantech company providing solar energy solutions across residential and commercial segments in India. The engineering challenge was replacing fragmented manual workflows with unified digital products. I built an **AMC management platform** with OTP auth, role-based access, and automated notifications handling **300+ projects** and reducing resolution time by **40%**. Migrated the legacy Cordova monitoring app to **Ionic React** with Highcharts for real-time energy analytics, driving **10K+ downloads**. I also migrated the company blog from WordPress to **Next.js with SSG**, Strapi CMS, and GraphQL, cutting load times by **40%** and bounce rates by **60%**, and built mobile-first field survey tooling with Expo and React Native that increased daily site coverage.",
        technologies: [
            { label: "React", iconName: "SiReact", brandColor: "#61dafb" },
            {
                label: "React Native",
                iconName: "SiReact",
                brandColor: "#61dafb",
            },
            {
                label: "TypeScript",
                iconName: "SiTypescript",
                brandColor: "#3178c6",
            },
            {
                label: "Next.js",
                iconName: "SiNextdotjs",
                brandColor: "#ffffff",
            },
            {
                label: "Node.js",
                iconName: "SiNodedotjs",
                brandColor: "#5fa04e",
            },
            { label: "GraphQL", iconName: "SiGraphql", brandColor: "#e535ab" },
            {
                label: "PostgreSQL",
                iconName: "SiPostgresql",
                brandColor: "#336791",
            },
            { label: "Hasura", iconName: "SiHasura", brandColor: "#1eb4d4" },
            { label: "Ionic", iconName: "SiIonic", brandColor: "#3880ff" },
            {
                label: "Firebase",
                iconName: "SiFirebase",
                brandColor: "#ffca28",
            },
            { label: "Expo", iconName: "SiExpo", brandColor: "#000020" },
            { label: "Strapi", iconName: "SiStrapi", brandColor: "#4945ff" },
        ],
    },
    {
        id: "raftlabs",
        role: "React.js Developer",
        company: "RaftLabs",
        period: "Jan 2022 - May 2022",
        gradient: "from-[#f43b47] to-[#453a94]",
        logo: "/images/logos/raftlabs.jpg",
        desc: "RaftLabs is a product studio that builds client-facing SaaS products across healthcare and remote work. I worked on a **HIPAA-compliant telehealth platform** serving **150+ hospitals** and **50+ clinics**, building core modules like patient dashboards, appointment scheduling, and real-time video consultations using Agora.io SDK that lifted patient engagement by **30%**. I also developed a **hybrid remote-work platform** with immersive 3D meeting rooms and dynamic 2D virtual offices using Konva.js, implemented native desktop features like system tray, notifications, and file management via **Electron**, and integrated **multi-cloud storage** across AWS S3, Google Drive, and Dropbox to consolidate distributed team assets into a single access point.",
        technologies: [
            { label: "React", iconName: "SiReact", brandColor: "#61dafb" },
            {
                label: "TypeScript",
                iconName: "SiTypescript",
                brandColor: "#3178c6",
            },
            {
                label: "Electron",
                iconName: "SiElectron",
                brandColor: "#47848f",
            },
            { label: "GraphQL", iconName: "SiGraphql", brandColor: "#e535ab" },
            { label: "Konva.js", iconName: "SiKonva", brandColor: "#0d83cd" },
            { label: "Agora SDK", brandColor: "#099dfd" },
            { label: "AWS S3", iconName: "SiAmazons3", brandColor: "#ff9900" },
            { label: "Redux", iconName: "SiRedux", brandColor: "#764abc" },
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
