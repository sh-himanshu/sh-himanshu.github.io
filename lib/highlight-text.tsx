import type { ReactNode } from "react";

const TECH_KEYWORDS = [
    "Redux Saga",
    "React Native",
    "Agora APIs",
    "Agora SDK",
    "SuperTokens",
    "TypeScript",
    "JavaScript",
    "PostgreSQL",
    "Ghost CMS",
    "Razorpay",
    "GraphQL",
    "Node.js",
    "Next.js",
    "Hasura",
    "React",
    "HIPAA",
    "Redux",
    "Expo",
    "SaaS",
    "S3",
];

function buildHighlightRegex(): RegExp {
    const escaped = TECH_KEYWORDS.map((k) => {
        const esc = k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        // Use word boundary at start; only add trailing \b if term ends with a word char
        if (/\w$/.test(k)) return `\\b${esc}\\b`;
        return `\\b${esc}`;
    });
    // Metric pattern: optional ~, digits with commas, optional +, optional %
    const metricPattern = "~?\\d[\\d,]*\\+?%?";
    const combined = [...escaped, metricPattern].join("|");
    return new RegExp(`(${combined})`, "g");
}

const HIGHLIGHT_REGEX = buildHighlightRegex();

export function highlightText(text: string): ReactNode {
    const parts = text.split(HIGHLIGHT_REGEX);

    if (parts.length === 1) return text;

    const result: ReactNode[] = [];
    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (i % 2 === 1) {
            result.push(
                <strong
                    key={part}
                    className="font-semibold text-zinc-900 dark:text-white"
                >
                    {part}
                </strong>,
            );
        } else if (part) {
            result.push(part);
        }
    }
    return result;
}
