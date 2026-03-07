"use client";

import type { ReactNode } from "react";

import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";

interface RevealContainerProps {
  children: ReactNode;
}

export function RevealContainer({ children }: RevealContainerProps) {
  const containerRef = useRevealOnScroll<HTMLDivElement>();

  return <div ref={containerRef}>{children}</div>;
}
