import type { StaticImageData } from "next/image";

import ecostoreCover from "../public/images/projects/ecostore.svg";
import findashCover from "../public/images/projects/findash.svg";
import fluentUIKitCover from "../public/images/projects/fluent-ui-kit.svg";
import nexusOsCover from "../public/images/projects/nexus-os.svg";

import type { TileColor, TileSize } from "@/lib/data";

export interface Project {
  slug: string;
  title: string;
  desc: string;
  fullDesc: string;
  technologies: string[];
  features: string[];
  size: TileSize;
  image: StaticImageData;
  color: TileColor;
  liveUrl: string;
  githubUrl: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "nexus-os",
    title: "Nexus OS",
    desc: "A web-based desktop environment simulating a modern operating system with window management.",
    fullDesc:
      "Nexus OS is a comprehensive web-based desktop environment that pushes the browser into OS territory. It ships a resilient window manager, a virtual file system, widget surfaces, and an integrated terminal while keeping interactions responsive through aggressive render-scope control.",
    technologies: ["React", "TypeScript", "Zustand", "Framer Motion"],
    features: [
      "Draggable and resizable windows",
      "Virtual file system backed by IndexedDB",
      "Theme-aware desktop widgets",
      "Integrated rich text editor and terminal",
    ],
    size: "4x2",
    image: nexusOsCover,
    color: "purple",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "fluent-ui-kit",
    title: "Fluent UI Kit",
    desc: "React component library aligned to Fluent Design with robust accessibility defaults.",
    fullDesc:
      "Fluent UI Kit is a design-system driven React library built around composable primitives, strong accessibility defaults, and flexible theming. The system is optimized for documentation, rapid adoption, and low-friction integration across product teams.",
    technologies: ["React", "Tailwind CSS", "Storybook", "TypeScript"],
    features: [
      "40+ accessible components",
      "Dark mode and theming tokens",
      "Glass and acrylic-inspired material system",
      "Comprehensive docs and usage recipes",
    ],
    size: "2x2",
    color: "blue",
    image: fluentUIKitCover,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "findash",
    title: "FinDash",
    desc: "Real-time financial dashboard with high-frequency market visualizations.",
    fullDesc:
      "FinDash is a performance-first financial dashboard for traders and analysts. It combines websocket streams, charting surfaces, and customizable workspaces into a single interface that stays readable and responsive during high-volume data updates.",
    technologies: ["Next.js", "Three.js/WebGL", "WebSockets", "Tailwind CSS"],
    features: [
      "Real-time market data streaming",
      "60fps chart rendering pipeline",
      "Customizable dashboard layouts",
      "Automated signal and anomaly alerts",
    ],
    size: "2x2",
    color: "green",
    image: findashCover,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "ecostore",
    title: "EcoStore",
    desc: "Headless e-commerce storefront for sustainable and organic goods.",
    fullDesc:
      "EcoStore is a statically generated commerce experience focused on conversion speed, editorial storytelling, and search visibility. The stack combines a fast storefront shell with a headless commerce backend and carefully tuned product discovery flows.",
    technologies: ["Next.js", "Shopify Storefront API", "GraphQL", "Stripe"],
    features: [
      "Sub-second statically generated pages",
      "Advanced faceted product filtering",
      "Persistent cart experience",
      "Streamlined Stripe checkout flow",
    ],
    size: "4x2",
    image: ecostoreCover,
    color: "teal",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}
