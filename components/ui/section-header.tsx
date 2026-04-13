interface SectionHeaderProps {
    title: string;
    headingId: string;
    number?: string;
}

export function SectionHeader({
    title,
    headingId,
    number,
}: SectionHeaderProps) {
    return (
        <div
            className="reveal-on-scroll flex items-center gap-4 px-1"
            data-reveal
        >
            <h2
                className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-2xl"
                id={headingId}
            >
                {title}
            </h2>
            <div className="mt-0.5 h-px flex-1 bg-linear-to-r from-black/10 via-black/5 to-transparent dark:from-white/15 dark:via-white/5" />
        </div>
    );
}
