'use client';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import * as React from 'react';
import {
  SiAmazonwebservices,
  SiAngular,
  SiDocker,
  SiGithubcopilot,
  SiGnubash,
  SiMake,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRollupdotjs,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
  SiWebpack,
} from 'react-icons/si';

type Bubble = {
  id: string;
  x: number; // px
  y: number; // px
  size: number; // px
  delay: number;
  duration: number;
  rotate: number;
  type: 'icon' | 'img';
  Icon?: React.ComponentType<{ className?: string }>;
  img?: string;
  alt?: string;
  brandColor?: string;
};

type IconEntry = { Icon: React.ComponentType<{ className?: string }>; label?: string };
type ImgEntry = { src: string; alt?: string };

export interface FloatingTechCloudProps {
  className?: string;
  /**
   * Icons to render. Supports:
   * - React components (e.g., SiReact)
   * - { Icon, label }
   * - image paths as string or { src, alt }
   */
  icons?: Array<IconEntry | ImgEntry | React.ComponentType<{ className?: string }> | string>;
  /** number of bubbles (default: icons.length or 8) */
  count?: number;
  /** min/max bubble diameter in px */
  minSize?: number;
  maxSize?: number;
  /** optional padding (percent of container) to keep bubbles away from edges */
  edgePaddingPct?: number;
}

const DEFAULT_ICONS: Array<IconEntry> = [
  { Icon: SiReact, label: 'React' },
  { Icon: SiTailwindcss, label: 'Tailwind CSS' },
  { Icon: SiNodedotjs, label: 'Node.js' },
  { Icon: SiPostgresql, label: 'PostgreSQL' },
  { Icon: SiDocker, label: 'Docker' },
  { Icon: SiAmazonwebservices, label: 'AWS' },
  { Icon: SiTypescript, label: 'TypeScript' },
  { Icon: SiGithubcopilot, label: 'GitHub Copilot' },
  { Icon: SiNextdotjs, label: 'Next.js' },
  { Icon: SiPython, label: 'Python' },
  { Icon: SiGnubash, label: 'Bash' },
  { Icon: SiMake, label: 'Make' },
  { Icon: SiNestjs, label: 'Nest.js' },
  { Icon: SiAngular, label: 'Angular' },
  { Icon: SiStorybook, label: 'Storybook' },
  { Icon: SiWebpack, label: 'Webpack' },
  { Icon: SiRollupdotjs, label: 'Rollup' },
];

export function FloatingTechCloud({ className, icons, count, minSize = 64, maxSize = 112, edgePaddingPct = 6 }: FloatingTechCloudProps) {
  const [mounted, setMounted] = React.useState(false);
  const [bubbles, setBubbles] = React.useState<Bubble[]>([]);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  const iconList = React.useMemo(() => {
    const raw = icons ?? DEFAULT_ICONS;
    // Normalize to either IconEntry or ImgEntry
    const norm: Array<IconEntry | ImgEntry> = raw.map((i) => {
      if (typeof i === 'string') return { src: i };
      if (typeof i === 'function') return { Icon: i };
      if ('Icon' in (i as any)) return i as IconEntry;
      return i as ImgEntry;
    });
    const n = count ?? norm.length ?? 8;
    const out: Array<IconEntry | ImgEntry> = [];
    for (let i = 0; i < n; i++) out.push(norm[i % norm.length]);
    return out;
  }, [icons, count]);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Brand colors for known icons
  const getBrandClass = React.useCallback((Icon?: React.ComponentType<any>) => {
    switch (Icon) {
      case SiReact:
        return 'text-[#61DAFB]';
      case SiTypescript:
        return 'text-[#3178C6]';
      case SiTailwindcss:
        return 'text-[#38BDF8]';
      case SiNodedotjs:
        return 'text-[#5FA04E]';
      case SiPostgresql:
        return 'text-[#336791]';
      case SiDocker:
        return 'text-[#2496ED]';
      case SiAmazonwebservices:
        return 'text-[#FF9900]';
      case SiGithubcopilot:
        return 'text-[#22A7F2]';
      case SiNextdotjs:
        return 'text-black-800';
      case SiPython:
        return 'text-[#3776AB]';
      case SiGnubash:
        return 'text-[#4EAA25]';
      case SiMake:
        return 'text-[#6D4AFF]';
      case SiNestjs:
        return 'text-[#E0234E]';
      case SiAngular:
        return 'text-[#DD0031]';
      case SiStorybook:
        return 'text-[#FF4785]';
      case SiWebpack:
        return 'text-[#8DD6F9]';
      case SiRollupdotjs:
        return 'text-[#EC4A3F]';
      default:
        return 'text-foreground/80';
    }
  }, []);

  const getBrandHex = React.useCallback((Icon?: React.ComponentType<any>): string | undefined => {
    switch (Icon) {
      case SiReact:
        return '#61DAFB';
      case SiTypescript:
        return '#3178C6';
      case SiTailwindcss:
        return '#38BDF8';
      case SiNodedotjs:
        return '#5FA04E';
      case SiPostgresql:
        return '#336791';
      case SiDocker:
        return '#2496ED';
      case SiAmazonwebservices:
        return '#FF9900';
      case SiGithubcopilot:
        return '#22A7F2';
      case SiNextdotjs:
        return '#696969';
      case SiPython:
        return '#3776AB';
      case SiGnubash:
        return '#4EAA25';
      case SiMake:
        return '#6D4AFF';
      case SiNestjs:
        return '#E0234E';
      case SiAngular:
        return '#DD0031';
      case SiStorybook:
        return '#FF4785';
      case SiWebpack:
        return '#8DD6F9';
      case SiRollupdotjs:
        return '#EC4A3F';
      default:
        return undefined;
    }
  }, []);

  // Generate non-overlapping positions using rejection sampling in px space
  const generateLayout = React.useCallback(() => {
    const el = containerRef.current;
    if (!mounted || !el) return;
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    if (width === 0 || height === 0) return;

    const rand = (min: number, max: number) => Math.random() * (max - min) + min;
    const padX = (edgePaddingPct / 100) * width;
    const padY = (edgePaddingPct / 100) * height;
    const maxAttempts = 4000;
    const allowedOverlapRatio = 0.25;

    // Responsive sizing: scale bubble sizes with container width (baseline ~ 480px)
    const baseline = 480;
    const scale = Math.min(1.4, Math.max(0.75, width / baseline));
    const rMin = minSize * scale;
    const rMax = maxSize * scale;

    const items: Bubble[] = [];
    let attempts = 0;
    for (let idx = 0; idx < iconList.length; idx++) {
      const ic = iconList[idx];
      const isIcon = (ic as IconEntry).Icon !== undefined;
      const idSeed = isIcon ? (ic as IconEntry).Icon.name : (ic as ImgEntry).src;
      const delay = rand(0, 2.0);
      const duration = rand(7, 12);
      const rotate = rand(-10, 10);
      const size = rand(rMin, rMax);

      let placed = false;
      while (!placed && attempts < maxAttempts) {
        attempts++;
        const x = rand(padX, width - padX);
        const y = rand(padY, height - padY);
        const r1 = size / 2;
        let ok = true;
        for (const other of items) {
          const r2 = other.size / 2;
          const dx = x - other.x;
          const dy = y - other.y;
          const dist = Math.hypot(dx, dy);
          const minDist = r1 + r2 - allowedOverlapRatio * Math.min(size, other.size);
          if (dist < minDist) {
            ok = false;
            break;
          }
        }
        if (ok) {
          items.push({
            id: `${idx}-${idSeed}-${Math.round(x)}-${Math.round(y)}`,
            x,
            y,
            size,
            delay,
            duration,
            rotate,
            type: isIcon ? 'icon' : 'img',
            Icon: isIcon ? (ic as IconEntry).Icon : undefined,
            img: isIcon ? undefined : (ic as ImgEntry).src,
            alt: isIcon ? (ic as IconEntry).label : (ic as ImgEntry).alt,
            brandColor: isIcon ? getBrandHex((ic as IconEntry).Icon) : undefined,
          });
          placed = true;
        }
      }
      if (!placed) {
        // Fallback: place anywhere with padding if we couldn't satisfy constraints
        const x = rand(padX, width - padX);
        const y = rand(padY, height - padY);
        items.push({
          id: `${idx}-${idSeed}-${Math.round(x)}-${Math.round(y)}`,
          x,
          y,
          size,
          delay,
          duration,
          rotate,
          type: isIcon ? 'icon' : 'img',
          Icon: isIcon ? (ic as IconEntry).Icon : undefined,
          img: isIcon ? undefined : (ic as ImgEntry).src,
          alt: isIcon ? (ic as IconEntry).label : (ic as ImgEntry).alt,
          brandColor: isIcon ? getBrandHex((ic as IconEntry).Icon) : undefined,
        });
      }
    }
    setBubbles(items);
  }, [mounted, iconList, minSize, maxSize, edgePaddingPct, getBrandHex]);

  React.useEffect(() => {
    generateLayout();
  }, [generateLayout]);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const RO = (window as any).ResizeObserver;
    if (!RO) return;
    const ro = new RO(() => generateLayout());
    ro.observe(el);
    return () => ro.disconnect();
  }, [generateLayout]);

  return (
    <div ref={containerRef} className={cn('relative h-full w-full overflow-visible select-none', className)}>
      <TooltipProvider delayDuration={200} disableHoverableContent>
        {mounted &&
          bubbles.map((b) => (
            <Tooltip key={b.id}>
              <TooltipTrigger asChild>
                <motion.div
                  className={cn(
                    'group pointer-events-auto absolute grid place-items-center overflow-hidden rounded-full border shadow-sm',
                    'bg-card/60 border-border/60 supports-[backdrop-filter]:bg-card/60 backdrop-blur',
                    // On hover: color the bubble with brand and lighten it
                    'hover:border-[var(--brand)]/40 hover:bg-[var(--brand)]'
                  )}
                  style={{
                    left: b.x,
                    top: b.y,
                    width: b.size,
                    height: b.size,
                    transform: 'translate(-50%, -50%)',
                    // expose brand color as CSS var for hover styling
                    ['--brand' as any]: b.brandColor ?? 'var(--primary)',
                  }}
                  initial={{ y: 0, x: 0, rotate: 0, opacity: 1, scale: 0.85 }}
                  animate={{
                    y: [0, -10, 0, 8, 0],
                    x: [0, 6, 0, -4, 0],
                    rotate: [0, b.rotate, -b.rotate / 2, 0],
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: b.duration,
                    delay: b.delay,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                  }}
                >
                  <div className='relative grid size-full place-items-center'>
                    {b.type === 'icon' && b.Icon ? (
                      <span className='flex h-[90%] w-[90%] items-center justify-center overflow-hidden text-[200%] leading-none'>
                        {/* Default: brand-colored icon; on hover: swap to foreground while bubble becomes brand-tinted */}
                        <b.Icon className={cn('transition-colors duration-200', getBrandClass(b.Icon), 'group-hover:text-foreground')} />
                      </span>
                    ) : (
                      <img src={b.img} alt={b.alt ?? ''} className='max-h-[70%] max-w-[70%] object-contain drop-shadow' draggable={false} />
                    )}
                  </div>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent sideOffset={8}>{b.alt ?? ''}</TooltipContent>
            </Tooltip>
          ))}
      </TooltipProvider>
    </div>
  );
}

export default FloatingTechCloud;
