import { ChevronRight, Download, MapPin } from "lucide-react";
import Image from "next/image";
import { Tile } from "@/components/ui/tile";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/data";
import { getIcon } from "@/lib/icons";
import profilePortrait from "../../public/images/profile.png";

export function HeroSection() {
    return (
        <>
            <Tile
                size="6x2"
                color="default"
                className="group row-span-3 md:row-span-2"
            >
                <div className="relative z-10 flex h-full flex-col items-center justify-center gap-8 md:flex-row md:items-center md:justify-between">
                    <div className="order-first shrink-0 md:order-last">
                        <div className="relative size-30 overflow-hidden rounded-full border-4 border-black/10 bg-white/80 shadow-[0_24px_60px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-out group-hover:scale-[1.02] sm:size-36 md:size-52 lg:size-60 dark:border-white/10 dark:bg-zinc-950/80 dark:shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
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
                        <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1.5 shadow-lg shadow-black/5 backdrop-blur-md dark:border-white/15 dark:bg-zinc-950/60 dark:shadow-black/40">
                            <div className="size-2 animate-pulse rounded-full bg-green-400" />
                            <span className="text-xs font-semibold tracking-wider text-zinc-700 uppercase dark:text-zinc-200">
                                {SITE_CONFIG.availability}
                            </span>
                        </div>

                        <h1 className="text-4xl font-extrabold tracking-tighter text-zinc-900 drop-shadow-2xl sm:text-5xl lg:text-7xl dark:text-white">
                            {SITE_CONFIG.name}
                        </h1>

                        <h2 className="mt-2 max-w-[16ch] text-xl leading-[1.1] font-bold tracking-tight text-balance text-zinc-600 sm:max-w-none sm:text-3xl lg:text-4xl dark:text-zinc-300">
                            I build frontend systems that don&apos;t break at
                            scale
                        </h2>

                        <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
                            <a
                                href="#projects"
                                className="inline-flex w-full items-center justify-center rounded-xl bg-zinc-900 px-7 py-3 font-bold text-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-colors hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-zinc-900/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none sm:w-auto dark:bg-white dark:text-zinc-950 dark:shadow-[0_8px_24px_rgba(255,255,255,0.18)] dark:hover:bg-zinc-200 dark:focus-visible:ring-white/70 dark:focus-visible:ring-offset-[#050505]"
                            >
                                View Work
                            </a>
                            <a
                                href={SITE_CONFIG.resumeUrl}
                                download
                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-black/10 bg-white/60 px-7 py-3 font-medium text-zinc-900 shadow-lg backdrop-blur-md transition-colors hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-[#0078d4]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none sm:w-auto dark:border-white/10 dark:bg-zinc-950/60 dark:text-white dark:hover:bg-white/10 dark:focus-visible:ring-[#68c7ff]/70 dark:focus-visible:ring-offset-[#050505]"
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
                        className="text-zinc-500 drop-shadow-md transition-colors group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-white"
                    />
                    <span className="text-sm font-semibold tracking-wide text-zinc-600 dark:text-zinc-300">
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
                        <span className="text-2xl font-bold tracking-tight text-zinc-900 drop-shadow-sm sm:text-3xl dark:text-white">
                            Let&apos;s Talk
                        </span>
                    </div>
                    <div className="flex size-14 items-center justify-center rounded-full border border-black/10 bg-black/10 shadow-lg backdrop-blur-md transition-colors group-hover:bg-black/20 dark:border-white/10 dark:bg-white/20 dark:group-hover:bg-white/30">
                        <ChevronRight
                            size={28}
                            className="text-zinc-900 transition-transform duration-300 ease-out group-hover:translate-x-1 dark:text-white"
                        />
                    </div>
                </div>
            </Tile>
        </>
    );
}
