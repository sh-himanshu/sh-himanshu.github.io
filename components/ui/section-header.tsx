interface SectionHeaderProps {
    title: string;
    headingId: string;
}

export function SectionHeader({ title, headingId }: SectionHeaderProps) {
    return (
        <div
            className="reveal-on-scroll flex items-center gap-4 px-1 sm:px-2"
            data-reveal
        >
            <h2
                className="text-2xl font-bold tracking-tight text-balance text-white drop-shadow-md sm:text-3xl lg:text-4xl"
                id={headingId}
            >
                {title}
            </h2>
            <div className="mt-2 h-px flex-1 bg-linear-to-r from-white/30 via-white/5 to-transparent shadow-[0_1px_2px_rgba(255,255,255,0.1)]" />
        </div>
    );
}
