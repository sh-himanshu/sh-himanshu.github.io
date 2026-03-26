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
        "https://drive.google.com/uc?export=download&id=1vVL9G0t-H99QSifRNha-2yAJxGdVDuiL",
    availability: "Available for hire",
    description:
        "Most developers start with code. I start with understanding what actually matters to users, then build for it.\n\nOver 4+ years, I've shipped web, mobile, and desktop products used by thousands across cleantech and B2B SaaS — including platforms now serving 100,000+ businesses.\n\nI'm the person who simplifies messy systems, fixes what breaks at scale, and asks \"why are we building this?\" before \"how?\"\n\nAt Birdeye, I build scalable frontend systems with React, TypeScript, and Redux Saga, along with the less visible work: performance tuning, secure architecture, and system design.\n\nPre-AI, good engineering was about clean code.\nPost-AI, it's about speed with clarity.\n\nI use AI to move faster without cutting corners — reviewing better, shipping smarter, and operating with leverage.\n\nOpen to roles involving scalable systems, AI-driven workflows, and products where engineering meets real business impact.\n\nLet's talk: reach out via the contact form.",
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
        desc: "Building and scaling frontend systems for a SaaS platform serving over 100,000 businesses using React, TypeScript, and Redux Saga.",
        highlights: [
            "Architecting reusable, performant component libraries for cross-team adoption.",
            "Improving rendering performance and reducing layout shift in data-intensive dashboards.",
            "Implementing secure data handling practices and frontend observability tooling.",
            "Collaborating closely with backend and design teams to drive product quality.",
        ],
        technologies: [
            { label: "React", iconName: "Globe" },
            { label: "TypeScript", iconName: "Code" },
            { label: "Redux Saga", iconName: "Layers" },
            { label: "JavaScript", iconName: "Code" },
        ],
    },
    {
        id: "oorjan",
        role: "Software Development Engineer",
        company: "Oorjan",
        period: "Sep 2022 - Jul 2024",
        gradient: "from-[#11998e] to-[#38ef7d]",
        logo: "/images/logos/oorjan.jpg",
        desc: "Worked across multiple product lines building scalable solutions for the cleantech domain using React, React Native, TypeScript, and Node.js.",
        highlights: [
            "Built a full-stack after-sales support platform (Greencare) with PostgreSQL, Hasura, S3, and SuperTokens auth.",
            "Developed a cross-platform solar monitoring mobile app with React Native, Expo, Agora APIs, and Razorpay payments.",
            "Migrated a Ghost CMS blog to a custom Next.js frontend, improving load speed and SEO.",
            "Led development of a field survey tool, reducing manual data entry by ~60% through reusable form components.",
        ],
        technologies: [
            { label: "React", iconName: "Globe" },
            { label: "React Native", iconName: "Smartphone" },
            { label: "TypeScript", iconName: "Code" },
            { label: "Node.js", iconName: "Terminal" },
            { label: "PostgreSQL", iconName: "Database" },
            { label: "Hasura", iconName: "Database" },
            { label: "Next.js", iconName: "Globe" },
            { label: "Expo", iconName: "Smartphone" },
        ],
    },
    {
        id: "raftlabs",
        role: "React.js Developer",
        company: "RaftLabs",
        period: "Jan 2022 - May 2022",
        gradient: "from-[#f43b47] to-[#453a94]",
        logo: "/images/logos/raftlabs.jpg",
        desc: "Contributed to frontend development across multiple client-facing SaaS products using React, TypeScript, and GraphQL.",
        highlights: [
            "Built a HIPAA-compliant telehealth platform with real-time video (Agora SDK), role-based access, and encrypted communication.",
            "Developed core UI modules for a hybrid remote-work platform including dashboards, seat booking, and notification workflows.",
        ],
        technologies: [
            { label: "React", iconName: "Globe" },
            { label: "TypeScript", iconName: "Code" },
            { label: "GraphQL", iconName: "Database" },
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
