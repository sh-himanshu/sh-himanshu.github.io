import { ChevronRight, Download, MapPin } from "lucide-react";
import Image from "next/image";
import { Tile } from "@/components/ui/tile";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/data";
import { getIcon } from "@/lib/icons";
import profilePortrait from "../../public/images/profile.jpeg";

export function HeroSection() {
    return (
        <>
            <Tile
                size="6x2"
                color="default"
                className="group row-span-3 md:row-span-2"
            >
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
                >
                    <div className="hero-card-pattern-glow absolute inset-0" />
                    <div className="hero-card-pattern-grid absolute inset-0" />
                    <div className="hero-card-pattern-hud absolute inset-0" />
                    <div className="hero-card-pattern-orbit absolute inset-0" />
                    <div className="hero-card-pattern-scan absolute inset-0 motion-reduce:hidden" />
                </div>

                <div className="relative z-10 flex h-full flex-col items-center justify-center gap-8 md:flex-row md:items-center md:justify-between">
                    <div className="order-first shrink-0 md:order-last">
                        <div className="relative size-30 overflow-hidden rounded-full border-4 border-white/10 bg-zinc-950/80 shadow-[0_24px_60px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out group-hover:scale-[1.02] sm:size-36 md:size-52 lg:size-60">
                            <Image
                                src={profilePortrait}
                                alt={`${SITE_CONFIG.name} portrait illustration`}
                                fill
                                loading="eager"
                                sizes="(min-width: 1280px) 15rem, (min-width: 768px) 13rem, 9rem"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex max-w-2xl min-w-0 flex-1 flex-col items-center justify-center text-center md:items-start md:text-left">
                        <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-zinc-950/60 px-3 py-1.5 shadow-lg shadow-black/40 backdrop-blur-md">
                            <div className="size-2 animate-pulse rounded-full bg-green-400" />
                            <span className="text-xs font-semibold tracking-wider text-zinc-200 uppercase">
                                {SITE_CONFIG.availability}
                            </span>
                        </div>

                        <h2 className="max-w-[13ch] text-3xl leading-[1.02] font-extrabold tracking-tighter text-balance text-white drop-shadow-2xl sm:max-w-none sm:text-5xl lg:text-6xl">
                            Software Engineer crafting fluid digital
                            experiences.
                        </h2>

                        <p className="mt-5 max-w-2xl text-sm leading-7 text-pretty text-zinc-300 sm:text-base lg:text-lg">
                            I design polished product surfaces, reduce rendering
                            cost before it becomes visible debt, and build
                            interfaces that stay fast under real-world load.
                        </p>

                        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-zinc-300 md:justify-start">
                            <span className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5">
                                React 19
                            </span>
                            <span className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5">
                                Next.js 16
                            </span>
                            <span className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5">
                                TypeScript
                            </span>
                        </div>

                        <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
                            <a
                                href="#projects"
                                className="inline-flex w-full items-center justify-center rounded-xl bg-white px-7 py-3 font-bold text-zinc-950 shadow-[0_8px_24px_rgba(255,255,255,0.18)] transition-colors hover:bg-zinc-200 focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none sm:w-auto"
                            >
                                View Work
                            </a>
                            <a
                                href={SITE_CONFIG.resumeUrl}
                                download
                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-zinc-950/60 px-7 py-3 font-medium text-white shadow-lg backdrop-blur-md transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#68c7ff]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none sm:w-auto"
                            >
                                <Download size={18} /> Resume
                            </a>
                        </div>
                    </div>
                </div>
            </Tile>

            <Tile
                size="1x1"
                color="default"
                className="flex items-center justify-center text-center"
            >
                <div className="my-auto flex flex-col items-center gap-3 transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
                    <MapPin
                        size={32}
                        className="text-zinc-400 drop-shadow-md transition-colors group-hover:text-white"
                    />
                    <span className="text-sm font-semibold tracking-wide text-zinc-300">
                        {SITE_CONFIG.location}
                    </span>
                </div>
            </Tile>

            {SOCIAL_LINKS.map((link) => {
                const Icon = getIcon(link.iconName);

                return (
                    <Tile
                        key={link.id}
                        size="1x1"
                        color={link.color}
                        href={link.href}
                        ariaLabel={`Visit ${link.label}`}
                        className="flex items-center justify-center"
                    >
                        <Icon
                            size={52}
                            className="my-auto drop-shadow-md transition-transform duration-300 ease-out group-hover:scale-105"
                        />
                    </Tile>
                );
            })}

            <Tile
                size="2x1"
                color="teal"
                href="#contact"
                ariaLabel="Jump to contact section"
                className="group"
            >
                <div className="mt-auto flex w-full items-center justify-between gap-4">
                    <div className="min-w-0">
                        <span className="mb-1 block text-sm font-semibold tracking-wide text-teal-200/80 uppercase">
                            Collaborate
                        </span>
                        <span className="text-2xl font-bold tracking-tight text-white drop-shadow-sm sm:text-3xl">
                            Let&apos;s Talk
                        </span>
                    </div>
                    <div className="flex size-14 items-center justify-center rounded-full border border-white/10 bg-white/20 shadow-lg backdrop-blur-md transition-colors group-hover:bg-white/30">
                        <ChevronRight
                            size={28}
                            className="text-white transition-transform duration-300 ease-out group-hover:translate-x-1"
                        />
                    </div>
                </div>
            </Tile>
        </>
    );
}
