import { LivePrinciplesTile } from "@/components/sections/live-principles-tile";
import { Tile } from "@/components/ui/tile";

export function AboutSection() {
    return (
        <>
            <Tile size="4x2" className="row-span-3 md:row-span-2">
                <h3 className="mb-5 text-2xl font-bold tracking-tight text-white drop-shadow-sm sm:text-3xl">
                    Beyond the code
                </h3>
                <div className="space-y-4 text-base leading-relaxed font-normal text-zinc-300/90 sm:text-[17px]">
                    <p>
                        I&apos;m a frontend specialist with over 5 years of
                        experience building scalable web applications. My
                        philosophy centers on creating interfaces that feel
                        natural, fast, and accessible under real product
                        constraints. I draw heavy inspiration from systemic
                        design languages like Microsoft&apos;s{" "}
                        <strong className="font-semibold text-white">
                            Fluent Design
                        </strong>{" "}
                        and Apple&apos;s HIG, but I translate those ideas into
                        practical UI systems rather than surface-level
                        aesthetics.
                    </p>
                    <p>
                        My work usually starts with eliminating render waste,
                        tightening layout systems, and clarifying interaction
                        states before adding new surface polish. The result is
                        UI that looks intentional and stays stable on mobile,
                        tablet, and desktop.
                    </p>
                </div>
            </Tile>

            <Tile
                size="2x2"
                color="default"
                className="row-span-3 md:row-span-2"
            >
                <LivePrinciplesTile />
            </Tile>
        </>
    );
}
