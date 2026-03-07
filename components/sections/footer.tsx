import { SITE_CONFIG } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative z-10 mt-12 flex flex-col items-center gap-3 border-t border-white/10 bg-zinc-950/80 px-(--page-gutter) py-10 text-center text-[15px] text-zinc-500 backdrop-blur-xl md:py-10 md:backdrop-blur-2xl">
      <p className="font-medium tracking-wide">
        &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
        reserved.
      </p>
      <p className="flex items-center justify-center gap-1.5">
        Built with a performance-first layout system inspired by{" "}
        <span className="font-bold text-zinc-300 drop-shadow-sm">
          Windows Metro
        </span>{" "}
        &amp;{" "}
        <span className="font-bold text-zinc-300 drop-shadow-sm">
          Fluent Design 2
        </span>
        .
      </p>
    </footer>
  );
}
