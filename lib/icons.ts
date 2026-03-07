import {
  Home,
  User,
  Code,
  Briefcase,
  Layers,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Terminal,
  Globe,
  Database,
  Palette,
  Cpu,
  Smartphone,
  Bot,
  type LucideIcon,
  Brain,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Home,
  User,
  Code,
  Briefcase,
  Layers,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Terminal,
  Globe,
  Database,
  Palette,
  Cpu,
  Smartphone,
  Bot,
  Brain,
};

export function getIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? Code;
}

export type { LucideIcon };
