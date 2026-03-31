const GITHUB_USERNAME = "sh-himanshu";

interface GitHubPinnedRepo {
    name: string;
    description: string | null;
    url: string;
    homepageUrl: string | null;
    stargazerCount: number;
    forkCount: number;
    primaryLanguage: { name: string; color: string } | null;
    repositoryTopics: {
        nodes: Array<{ topic: { name: string } }>;
    };
    openGraphImageUrl: string;
}

interface GitHubGraphQLResponse {
    data: {
        user: {
            pinnedItems: {
                nodes: GitHubPinnedRepo[];
            };
        };
    };
}

export interface PinnedProject {
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

const PINNED_REPOS_QUERY = `
{
  user(login: "${GITHUB_USERNAME}") {
    pinnedItems(first: 6, types: [REPOSITORY]) {
      nodes {
        ... on Repository {
          name
          description
          url
          homepageUrl
          stargazerCount
          forkCount
          primaryLanguage { name color }
          repositoryTopics(first: 10) {
            nodes { topic { name } }
          }
          openGraphImageUrl
        }
      }
    }
  }
}
`;

export async function fetchPinnedProjects(): Promise<PinnedProject[]> {
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
        console.warn(
            "GITHUB_TOKEN not set — falling back to empty projects list.",
        );
        return [];
    }

    const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: PINNED_REPOS_QUERY }),
    });

    if (!res.ok) {
        console.error(`GitHub API error: ${res.status} ${res.statusText}`);
        return [];
    }

    const json: GitHubGraphQLResponse = await res.json();
    const nodes = json.data.user.pinnedItems.nodes;

    return nodes.map((repo) => {
        // Extract owner from URL: https://github.com/owner/repo
        const urlParts = repo.url.split("/");
        const owner = urlParts[3];
        const repoName = urlParts[4];

        return {
            slug: repo.name,
            title: repo.name
                .split("-")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" "),
            desc: repo.description?.trim() || "",
            language: repo.primaryLanguage?.name || "Unknown",
            languageColor: repo.primaryLanguage?.color || "#6b7280",
            stars: repo.stargazerCount,
            forks: repo.forkCount,
            topics: repo.repositoryTopics.nodes.map((n) => n.topic.name),
            githubUrl: repo.url,
            liveUrl: repo.homepageUrl || undefined,
            imageUrl: repo.openGraphImageUrl,
            owner,
            repo: repoName,
        };
    });
}

export async function fetchRepoReadme(
    owner: string,
    repo: string,
): Promise<string | null> {
    const token = process.env.GITHUB_TOKEN;
    if (!token) return null;

    const res = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/readme`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/vnd.github.raw+json",
            },
        },
    );

    if (!res.ok) return null;
    const markdown = await res.text();
    return resolveRelativeUrls(markdown, owner, repo);
}

/**
 * Rewrites relative image/link URLs in markdown to absolute GitHub raw URLs
 * so that screenshots and other assets render correctly outside GitHub.
 */
function resolveRelativeUrls(
    markdown: string,
    owner: string,
    repo: string,
): string {
    const rawBase = `https://raw.githubusercontent.com/${owner}/${repo}/HEAD`;

    return markdown
        .replace(
            /!\[([^\]]*)\]\((?!https?:\/\/|\/\/|#)([^)]+)\)/g,
            (_, alt, path) => {
                const cleanPath = path.replace(/^\.\//, "");
                return `![${alt}](${rawBase}/${cleanPath})`;
            },
        )
        .replace(
            /(<img\s[^>]*src=["'])(?!https?:\/\/|\/\/|#)([^"']+)(["'])/gi,
            (_, prefix, path, suffix) => {
                const cleanPath = path.replace(/^\.\//, "");
                return `${prefix}${rawBase}/${cleanPath}${suffix}`;
            },
        );
}
