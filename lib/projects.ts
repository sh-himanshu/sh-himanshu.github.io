import { fetchPinnedProjects, type PinnedProject } from "./github";

export interface Project {
    slug: string;
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
    owner: string;
    repo: string;
}

function toProject(p: PinnedProject): Project {
    return {
        slug: p.slug,
        title: p.title,
        desc: p.desc,
        language: p.language,
        languageColor: p.languageColor,
        stars: p.stars,
        forks: p.forks,
        topics: p.topics,
        githubUrl: p.githubUrl,
        liveUrl: p.liveUrl,
        imageUrl: p.imageUrl,
        owner: p.owner,
        repo: p.repo,
    };
}

/** Fallback data used when GITHUB_TOKEN is not available (e.g. local dev without token). */
const FALLBACK_PROJECTS: Project[] = [
    {
        slug: "pay-watch",
        title: "Pay Watch",
        desc: "Connect your Gmail and PayWatch automatically finds every bill, tracks due dates, and catches price increases before they cost you money.",
        language: "TypeScript",
        languageColor: "#3178c6",
        stars: 0,
        forks: 0,
        topics: [
            "nextjs",
            "supabase",
            "typescript",
            "agent-orchestration",
            "finance",
        ],
        githubUrl: "https://github.com/sh-himanshu/pay-watch",
        liveUrl: "https://paywatch.sh-himanshu.com/",
        imageUrl:
            "https://opengraph.githubassets.com/6fe9e114075d1b57d08b17432421cb92e85f3b27fc81a2fc641b29f668c34a2d/sh-himanshu/pay-watch",
        owner: "sh-himanshu",
        repo: "pay-watch",
    },
    {
        slug: "agent-agno",
        title: "Agent Agno",
        desc: "Collection of AI agents built using Agno Agentic framework.",
        language: "Python",
        languageColor: "#3572A5",
        stars: 0,
        forks: 0,
        topics: ["agent", "agno", "python"],
        githubUrl: "https://github.com/sh-himanshu/agent-agno",
        imageUrl:
            "https://opengraph.githubassets.com/636567b2ab2c4556e4e4c2d7ecf87156642313a1d5c2ad974be947485c7330ba/sh-himanshu/agent-agno",
        owner: "sh-himanshu",
        repo: "agent-agno",
    },
    {
        slug: "auto-cut",
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
            "https://opengraph.githubassets.com/e2298550c5ece8bfb7ff50b41f4fe3397a8e2e8f8a3cc387b163e68e035c4d3f/sh-himanshu/auto-cut",
        owner: "sh-himanshu",
        repo: "auto-cut",
    },
    {
        slug: "iytdl",
        title: "Iytdl",
        desc: "A production-ready Python library that wraps yt-dlp with an async, inline-friendly interface for Pyrogram Telegram bots.",
        language: "Python",
        languageColor: "#3572A5",
        stars: 55,
        forks: 24,
        topics: ["python", "youtube", "yt-dlp", "pyrogram"],
        githubUrl: "https://github.com/iytdl/iytdl",
        imageUrl:
            "https://opengraph.githubassets.com/3a374b9810ae5a291bf0a1e58d11b582da972f84f9ba2dd797106c53a1113025/iytdl/iytdl",
        owner: "iytdl",
        repo: "iytdl",
    },
    {
        slug: "shorty",
        title: "Shorty",
        desc: "Shorty is a chrome extension that allows users to effortlessly shorten URLs and quickly copy the shortened link with just a few clicks.",
        language: "HTML",
        languageColor: "#e34c26",
        stars: 0,
        forks: 0,
        topics: [],
        githubUrl: "https://github.com/sh-himanshu/shorty",
        imageUrl:
            "https://opengraph.githubassets.com/dc33b143b9b009c4bab455fd06de07c0bf61c19a1e56ce0f1a781c8b495ecd84/sh-himanshu/shorty",
        owner: "sh-himanshu",
        repo: "shorty",
    },
    {
        slug: "userge-x",
        title: "Userge X",
        desc: "Extensible Telegram UserBot that provides a modular plugin architecture for automating tasks, managing groups.",
        language: "Python",
        languageColor: "#3572A5",
        stars: 131,
        forks: 451,
        topics: ["pyrogram", "telegram", "userbot", "heroku"],
        githubUrl: "https://github.com/sh-himanshu/userge-x",
        imageUrl:
            "https://opengraph.githubassets.com/fe48edbdd20e5890903ca75b38a5a9598a5673815e8f64357f2fd057eb9f054a/sh-himanshu/userge-x",
        owner: "sh-himanshu",
        repo: "userge-x",
    },
];

export async function getProjects(): Promise<Project[]> {
    const pinned = await fetchPinnedProjects();
    if (pinned.length > 0) {
        return pinned.map(toProject);
    }
    return FALLBACK_PROJECTS;
}
