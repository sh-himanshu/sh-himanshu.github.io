import { Tile } from "@/components/ui/tile";

const HighLight = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className="text-zinc-800 dark:text-zinc-200 font-semibold">
            {children}
        </span>
    );
};

export function AboutSection() {
    const exp: number = +(
        (Date.now() - new Date(2022, 0, 15).getTime()) /
        (1000 * 60 * 60 * 24 * 365.25)
    ).toFixed(1);
    return (
        <Tile size="6x2">
            <div className="space-y-4">
                <p className="text-lg leading-snug font-medium tracking-tight text-zinc-900 dark:text-white sm:text-xl">
                    Frontend-focused <HighLight>Full-Stack Engineer</HighLight>{" "}
                    with <HighLight>{exp}+ years</HighLight> building scalable,
                    high-performance web applications.
                </p>

                <div className="space-y-3.5 text-[15px] leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-base">
                    <p>
                        Skilled in <HighLight>frontend architecture</HighLight>,{" "}
                        <HighLight>
                            Backend-for-Frontend (BFF) patterns
                        </HighLight>
                        , server-side rendering,{" "}
                        <HighLight>AI/LLM integration</HighLight>, performance
                        optimization, and automated testing. Proven track record
                        of owning features end-to-end and shipping AI-driven
                        products.
                    </p>

                    <p>
                        I've shipped products across{" "}
                        <HighLight>cleantech</HighLight> and{" "}
                        <HighLight>B2B SaaS</HighLight> — from multi-LLM
                        orchestration systems powering{" "}
                        <HighLight>10M+ social posts</HighLight> annually to
                        platforms serving{" "}
                        <HighLight>100,000+ businesses</HighLight>, using{" "}
                        <HighLight>
                            JavaScript, React, Node.js, and Express
                        </HighLight>
                        .
                    </p>

                    <p className="text-zinc-600 dark:text-zinc-300">
                        Open to roles involving scalable systems, AI-driven
                        workflows, and products where engineering meets real
                        business impact!
                    </p>
                </div>
            </div>
        </Tile>
    );
}
