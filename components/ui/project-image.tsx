import Image, { type StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

interface ProjectImageProps {
  src: StaticImageData;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
}

export function ProjectImage({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "100vw",
}: ProjectImageProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        src={src}
        className={cn("object-cover", imageClassName)}
      />
    </div>
  );
}
