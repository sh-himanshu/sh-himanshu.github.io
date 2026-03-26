export interface Project {
    title: string;
    desc: string;
    language: string;
    languageColor: string;
    stars: number;
    forks: number;
    topics: string[];
    githubUrl: string;
    liveUrl?: string;
    imageUrl: string;
}

export const PROJECTS: Project[] = [
    {
        title: "Userge-X",
        desc: "Extensible Telegram UserBot that provides a modular plugin architecture for automating tasks, managing groups.",
        language: "Python",
        languageColor: "#3572A5",
        stars: 131,
        forks: 451,
        topics: ["pyrogram", "telegram", "userbot", "heroku"],
        githubUrl: "https://github.com/sh-himanshu/userge-x",
        imageUrl:
            "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop",
    },
    {
        title: "iytdl",
        desc: "A production-ready Python library that wraps yt-dlp with an async, inline-friendly interface for Pyrogram Telegram bots.",
        language: "Python",
        languageColor: "#3572A5",
        stars: 55,
        forks: 24,
        topics: ["python", "youtube", "yt-dlp", "pyrogram"],
        githubUrl: "https://github.com/iytdl/iytdl",
        imageUrl:
            "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=600&auto=format&fit=crop",
    },
    {
        title: "Fired Up Pizza",
        desc: "eCommerce website for pizza ordering, complete with seamless and secure payments through PayPal's API integration.",
        language: "JavaScript",
        languageColor: "#f1e05a",
        stars: 0,
        forks: 0,
        topics: ["react", "redux", "nextjs", "paypal"],
        githubUrl: "https://github.com/sh-himanshu/fired-up-pizza",
        imageUrl:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop",
    },
    {
        title: "Auto Cut",
        desc: "Remove image backgrounds directly in your browser with multiple AI models, no data sent to any server.",
        language: "TypeScript",
        languageColor: "#3178c6",
        stars: 0,
        forks: 0,
        topics: ["image-processing", "nextjs"],
        githubUrl: "https://github.com/sh-himanshu/auto-cut",
        liveUrl: "https://sh-himanshu.github.io/auto-cut/",
        imageUrl:
            "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=600&auto=format&fit=crop",
    },
    {
        title: "Agent Agno",
        desc: "Collection of AI agents built using the Agno agentic framework.",
        language: "Python",
        languageColor: "#3572A5",
        stars: 0,
        forks: 0,
        topics: ["agent", "agno", "python"],
        githubUrl: "https://github.com/sh-himanshu/agent-agno",
        imageUrl:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop",
    },
    {
        title: "Shorty",
        desc: "A Chrome extension that allows users to effortlessly shorten URLs and quickly copy the shortened link with just a few clicks.",
        language: "HTML",
        languageColor: "#e34c26",
        stars: 0,
        forks: 0,
        topics: [],
        githubUrl: "https://github.com/sh-himanshu/shorty",
        imageUrl:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop",
    },
];
