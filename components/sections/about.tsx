import { Tile } from "@/components/ui/tile";

export function AboutSection() {
    return (
        <Tile size="6x2" className="row-span-3 md:row-span-2">
            <div className="space-y-4 text-base leading-relaxed font-normal text-zinc-600 sm:text-[17px] dark:text-zinc-300/90">
                <p>
                    Most developers start with code. I start with understanding
                    what actually matters to users, then build for it.
                </p>

                <p>
                    Over 4+ years, I've shipped web, mobile, and desktop
                    products across cleantech and B2B SaaS. I'm the person who
                    simplifies messy systems, fixes what breaks at scale, and
                    asks "why are we building this?" before "how?"
                </p>

                <p>
                    At Birdeye, I build scalable frontend systems serving
                    100,000+ businesses with React, TypeScript, and Redux Saga,
                    while also working on the less visible but crucial parts
                    like performance, security and system design.
                </p>

                <p>
                    Pre-AI, good engineering was about clean code. Post-AI, it's
                    about speed with clarity.
                </p>

                <p>
                    I use AI to move faster without cutting corners, reviewing
                    better, shipping smarter, and operating with leverage.
                </p>

                <p>
                    Open to roles involving scalable systems, AI-driven
                    workflows, and products where engineering meets real
                    business impact!
                </p>
            </div>
        </Tile>
    );
}
