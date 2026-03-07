"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: readonly string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const syncFromHash = () => {
      const hashId = window.location.hash.replace(/^#/, "");

      if (hashId && sectionIds.includes(hashId)) {
        setActiveId(hashId);
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [sectionIds]);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((entryA, entryB) => {
            if (entryA.intersectionRatio !== entryB.intersectionRatio) {
              return entryB.intersectionRatio - entryA.intersectionRatio;
            }

            return (
              Math.abs(entryA.boundingClientRect.top) -
              Math.abs(entryB.boundingClientRect.top)
            );
          });

        const nextActive = visibleEntries[0]?.target.id;
        if (nextActive) {
          setActiveId(nextActive);
        }
      },
      {
        rootMargin: "-28% 0px -52% 0px",
        threshold: [0.16, 0.35, 0.6, 0.85],
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
