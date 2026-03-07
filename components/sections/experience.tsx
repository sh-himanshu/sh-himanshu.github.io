import { Tile } from "@/components/ui/tile";
import { EXPERIENCES } from "@/lib/data";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  return (
    <>
      {EXPERIENCES.map((exp) => {
        const isCurrent = exp.period.includes("Present");

        return (
          <Tile
            key={exp.id}
            size="6x2"
            className={cn(
              "group row-span-4 flex-col justify-start overflow-visible md:row-span-2",
              isCurrent && "border-[#0078d4]/30 bg-[#0078d4]/10",
            )}
          >
            <div
              className={cn(
                "pointer-events-none absolute top-0 right-0 size-80 rounded-full bg-linear-to-br opacity-10 blur-[100px] transition-opacity duration-700 group-hover:opacity-30",
                exp.gradient,
              )}
            />

            <div className="relative z-20 flex w-full flex-col gap-5 sm:gap-10 md:flex-row md:items-start">
              <div className="flex shrink-0 flex-col gap-2 md:w-64">
                <span className="text-xl font-bold tracking-tight text-white drop-shadow-sm sm:text-3xl">
                  {exp.company}
                </span>
                <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-zinc-400 uppercase sm:text-sm">
                  <Calendar
                    size={16}
                    className={isCurrent ? "text-[#0078d4]" : "text-white/60"}
                  />
                  <span className={isCurrent ? "text-[#0078d4]" : ""}>
                    {exp.period}
                  </span>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="mb-4 text-lg font-bold tracking-tight text-white sm:text-2xl">
                  {exp.role}
                </h3>
                <p className="mb-5 max-w-3xl text-base font-medium text-pretty text-zinc-300 sm:text-[17px]">
                  {exp.desc}
                </p>
                <ul className="space-y-3">
                  {exp.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-zinc-400/90 sm:gap-4 sm:text-[15px]"
                    >
                      <div
                        className={cn(
                          "mt-2 size-1.5 shrink-0 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]",
                          isCurrent ? "bg-[#0078d4]" : "bg-white/30",
                        )}
                      />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Tile>
        );
      })}
    </>
  );
}
