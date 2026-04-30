import type { ReactNode } from "react";

const BOLD_REGEX = /\*\*(.+?)\*\*/g;

export function highlightText(text: string): ReactNode {
    const parts = text.split(BOLD_REGEX);

    if (parts.length === 1) return text;

    const result: ReactNode[] = [];
    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (i % 2 === 1) {
            result.push(
                <strong
                    key={`${i}-${part}`}
                    className="font-semibold text-zinc-800 dark:text-zinc-100"
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
