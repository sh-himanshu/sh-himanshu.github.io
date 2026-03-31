import { Tile } from "@/components/ui/tile";

const HighLight = ({ children }: { children: React.ReactNode }) => {
    return <span className="text-zinc-200 font-semibold">{children}</span>;
};

export function AboutSection() {
    const exp: number = +(
        (Date.now() - new Date(2022, 0, 15).getTime()) /
        (1000 * 60 * 60 * 24 * 365.25)
    ).toFixed(1);
    return (
        <Tile size="6x2" className="row-span-3 md:row-span-2">
            <div className="space-y-4">
                <p className="text-lg leading-snug font-medium tracking-tight text-white sm:text-xl">
                    Most developers start with code. I start with understanding
                    what actually matters to users, then build for it.
                </p>

                <div className="space-y-3.5 text-[15px] leading-relaxed text-zinc-400 sm:text-base">
                    <p>
                        Over <HighLight>{exp}+ years</HighLight>, I've shipped
                        web, mobile, and desktop products across{" "}
                        <HighLight>cleantech</HighLight> and{" "}
                        <HighLight>B2B SaaS</HighLight>. I'm the person who
                        simplifies messy systems, fixes what breaks at scale,
                        and asks "why are we building this?" before "how?"
                    </p>

                    <p>
                        At Birdeye, I build scalable frontend systems serving{" "}
                        <HighLight>100,000+</HighLight> businesses with{" "}
                        <HighLight>
                            React, TypeScript, and Redux Saga and Node.js
                        </HighLight>{" "}
                        while also working on the less visible but crucial parts
                        like{" "}
                        <HighLight>
                            performance, security and system design
                        </HighLight>
                        .
                    </p>

                    <p>
                        Pre-AI, good engineering was about clean code. Post-AI,
                        it's about speed with clarity. I use AI to move faster
                        without cutting corners, reviewing better, shipping
                        smarter and operating with leverage.
                    </p>

                    <p className="text-zinc-300">
                        Open to roles involving scalable systems, AI-driven
                        workflows, and products where engineering meets real
                        business impact!
                    </p>
                </div>
            </div>
        </Tile>
    );
}
