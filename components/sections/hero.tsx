import { ArrowDown, ChevronRight, Download, MapPin } from "lucide-react";
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
                <div className="relative z-10 flex h-full flex-col items-center justify-center gap-5 md:flex-row md:items-center md:gap-8 md:justify-between">
                    {/* Profile pic - first on mobile, right side on md+ */}
                    <div className="shrink-0 md:order-last">
                        <div className="relative size-30 overflow-hidden rounded-full border-2 border-black/[0.08] bg-zinc-100/80 shadow-[0_0_80px_rgba(37,99,235,0.08),0_24px_60px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.04] ring-offset-4 ring-offset-transparent transition-transform duration-500 ease-out group-hover:scale-[1.03] sm:size-36 md:size-48 lg:size-56 dark:border-white/[0.12] dark:bg-zinc-950/80 dark:shadow-[0_0_80px_rgba(37,99,235,0.15),0_24px_60px_rgba(0,0,0,0.4)] dark:ring-white/[0.06]">
                            <Image
                                src={profilePortrait}
                                alt={`${SITE_CONFIG.name} portrait illustration`}
                                fill
                                loading="eager"
                                sizes="(min-width: 1280px) 14rem, (min-width: 768px) 12rem, 7.5rem"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex max-w-2xl min-w-0 flex-col items-center justify-center text-center md:flex-1 md:items-start md:text-left">
                        {/* Badge - visible on mobile below profile pic, and on md+ above name */}
                        <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 shadow-[0_0_20px_rgba(16,185,129,0.08)] md:mb-5">
                            <div className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                            <span className="text-[11px] font-semibold tracking-widest text-emerald-700 dark:text-emerald-300 uppercase">
                                {SITE_CONFIG.availability}
                            </span>
                        </div>

                        <h1 className="text-[2.5rem] leading-[1] font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl lg:text-[4.25rem]">
                            {SITE_CONFIG.name}
                        </h1>

                        <h2 className="mt-2 text-lg leading-tight font-medium tracking-tight text-zinc-500 dark:text-zinc-400 sm:text-xl md:mt-3 lg:text-2xl">
                            Senior Full-Stack Developer
                        </h2>

                        <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:mt-8 md:justify-start">
                            <a
                                href="#projects"
                                className="group/cta inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-7 py-3 text-[15px] font-semibold text-white shadow-[0_0_20px_rgba(37,99,235,0.15),0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-[var(--accent-muted)] hover:shadow-[0_0_28px_rgba(37,99,235,0.25),0_8px_24px_rgba(0,0,0,0.2)] focus-visible:ring-2 focus-visible:ring-[var(--accent-muted)]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)] focus-visible:outline-none sm:w-auto"
                            >
                                View Work
                                <ArrowDown
                                    size={16}
                                    className="transition-transform duration-200 group-hover/cta:translate-y-0.5"
                                />
                            </a>
                            <a
                                href={SITE_CONFIG.resumeUrl}
                                download
                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-black/[0.1] bg-black/[0.04] px-7 py-3 text-[15px] font-medium text-zinc-700 transition-all duration-200 hover:border-black/[0.18] hover:bg-black/[0.08] hover:text-zinc-900 focus-visible:ring-2 focus-visible:ring-[var(--accent-muted)]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)] focus-visible:outline-none sm:w-auto dark:border-white/[0.12] dark:bg-white/[0.06] dark:text-zinc-200 dark:hover:border-white/[0.22] dark:hover:bg-white/[0.12] dark:hover:text-white"
                            >
                                <Download size={16} /> Resume
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
                <div className="my-auto flex flex-col items-center gap-2 transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
                    <MapPin
                        size={28}
                        strokeWidth={1.75}
                        className="text-zinc-500 transition-colors group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-white"
                    />
                    <span className="text-sm mt-2 font-medium tracking-wide text-zinc-500 dark:text-zinc-400">
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
                            size={44}
                            className="my-auto drop-shadow-md transition-transform duration-300 ease-out group-hover:scale-110"
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
                        <span className="mb-1.5 block text-[11px] font-semibold tracking-widest text-teal-600/80 dark:text-teal-300/80 uppercase">
                            Get in Touch
                        </span>
                        <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-2xl">
                            Let&apos;s Talk
                        </span>
                    </div>
                    <div className="flex size-12 items-center justify-center rounded-full border border-black/[0.08] bg-black/[0.06] transition-all duration-200 group-hover:bg-black/[0.1] group-hover:shadow-[0_0_16px_rgba(0,0,0,0.06)] dark:border-white/[0.12] dark:bg-white/[0.1] dark:group-hover:bg-white/[0.2] dark:group-hover:shadow-[0_0_16px_rgba(255,255,255,0.1)]">
                        <ChevronRight
                            size={24}
                            className="text-zinc-900 transition-transform duration-200 ease-out group-hover:translate-x-0.5 dark:text-white"
                        />
                    </div>
                </div>
            </Tile>
        </>
    );
}
