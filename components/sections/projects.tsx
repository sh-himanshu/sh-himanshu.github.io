import { ArrowUpRight } from "lucide-react";

import { ProjectImage } from "@/components/ui/project-image";
import { Tile } from "@/components/ui/tile";
import { PROJECTS } from "@/lib/projects";

export function ProjectsSection() {
  return (
    <>
      {PROJECTS.map((project) => (
        <Tile
          key={project.slug}
          size={project.size}
          color={project.color}
          href={`/projects/${project.slug}`}
          ariaLabel={`Open ${project.title} project details`}
          className="group"
          contentClassName="p-0"
        >
          <div className="absolute inset-0 z-0">
            <ProjectImage
              src={project.image}
              alt={`${project.title} project preview`}
              sizes="(min-width: 1280px) 32vw, (min-width: 768px) 50vw, 100vw"
              className="size-full"
              imageClassName="size-full object-cover"
            />
            <div className="absolute inset-0 z-10 bg-linear-to-t from-zinc-950 via-zinc-950/28 to-transparent" />
          </div>

          <div className="relative z-20 mt-auto flex h-full items-end justify-between gap-4 p-5 sm:p-7">
            <div className="min-w-0">
              <h3 className="mb-2 text-xl font-bold text-white drop-shadow-md sm:text-2xl">
                {project.title}
              </h3>
              <p className="line-clamp-3 max-w-full text-sm font-medium text-zinc-300 sm:max-w-[90%]">
                {project.desc}
              </p>
            </div>
            <div className="hidden rounded-full bg-white/92 p-3 text-zinc-950 shadow-[0_12px_28px_rgba(0,0,0,0.28)] transition-transform duration-300 ease-out group-hover:-translate-y-0.5 sm:block">
              <ArrowUpRight size={22} strokeWidth={2.5} />
            </div>
          </div>
        </Tile>
      ))}
    </>
  );
}
