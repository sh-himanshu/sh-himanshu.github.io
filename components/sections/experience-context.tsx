"use client";

import { createContext, type ReactNode, useContext, useState } from "react";

interface ExperienceExpandedContextValue {
    expanded: boolean;
    toggle: () => void;
}

const ExperienceExpandedContext =
    createContext<ExperienceExpandedContextValue | null>(null);

export function useExperienceExpanded() {
    const ctx = useContext(ExperienceExpandedContext);
    if (!ctx)
        throw new Error(
            "useExperienceExpanded must be used within ExperienceExpandedProvider",
        );
    return ctx;
}

export function ExperienceExpandedProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [expanded, setExpanded] = useState(false);

    return (
        <ExperienceExpandedContext.Provider
            value={{
                expanded,
                toggle: () => setExpanded((prev) => !prev),
            }}
        >
            {children}
        </ExperienceExpandedContext.Provider>
    );
}
