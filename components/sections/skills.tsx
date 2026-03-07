import { Tile } from "@/components/ui/tile";
import { MetroIcon } from "@/components/ui/metro-icon";
import { SKILLS } from "@/lib/data";
import { getIcon } from "@/lib/icons";

export function SkillsSection() {
  return (
    <>
      {SKILLS.map((skill) => {
        const Icon = getIcon(skill.iconName);
        return (
          <Tile key={skill.id} size={skill.size} className="group">
            <div className="mt-auto flex w-full items-end justify-between gap-4">
              <span className="z-20 min-w-0 text-xl font-bold tracking-tight text-balance text-white drop-shadow-md transition-transform duration-300 ease-out group-hover:translate-x-1">
                {skill.name}
              </span>
              <MetroIcon icon={Icon} gradient={skill.gradient} />
            </div>
          </Tile>
        );
      })}
    </>
  );
}
