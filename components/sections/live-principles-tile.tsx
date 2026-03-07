"use client";

import { useEffect, useState } from "react";

import { LIVE_TILE_STATES } from "@/lib/data";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

const AUTO_ROTATE_MS = 3200;

function getSlideClasses(distance: number) {
  if (distance === 0) {
    return "translate-y-0 opacity-100 scale-100 blur-0";
  }

  if (distance === 1) {
    return "translate-y-[112%] opacity-0 scale-[0.98] blur-[1px]";
  }

  return "-translate-y-[112%] opacity-0 scale-[1.02] blur-[1px]";
}

export function LivePrinciplesTile() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    syncPreference();
    mediaQuery.addEventListener("change", syncPreference);

    return () => {
      mediaQuery.removeEventListener("change", syncPreference);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || isPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => {
        return (currentIndex + 1) % LIVE_TILE_STATES.length;
      });
    }, AUTO_ROTATE_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isPaused, prefersReducedMotion]);

  const activeState = LIVE_TILE_STATES[activeIndex];

  return (
    <div
      className="flex h-full flex-col gap-5"
      onPointerEnter={() => setIsPaused(true)}
      onPointerLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-xs font-semibold tracking-[0.24em] text-zinc-400 uppercase">
            Operating principles
          </span>
          <h3 className="mt-3 max-w-[12ch] text-2xl font-bold tracking-tight text-white sm:max-w-none sm:text-3xl">
            Performance shapes every UI decision.
          </h3>
        </div>

        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-[0.24em] text-zinc-300 uppercase shadow-[0_10px_24px_rgba(0,0,0,0.18)] backdrop-blur-md">
          Live
        </div>
      </div>

      <div className="mt-auto flex flex-col gap-4">
        <div className="relative h-56 overflow-hidden rounded-[1.75rem] sm:h-60">
          {LIVE_TILE_STATES.map((state, index) => {
            const Icon = getIcon(state.iconName);
            const distance =
              (index - activeIndex + LIVE_TILE_STATES.length) %
              LIVE_TILE_STATES.length;

            return (
              <article
                key={state.id}
                aria-hidden={distance !== 0}
                className={cn(
                  "absolute inset-0 flex h-full flex-col justify-between rounded-[inherit] border bg-linear-to-br p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_18px_40px_rgba(0,0,0,0.2)] transition-[transform,opacity,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform sm:p-6",
                  state.gradient,
                  state.borderColor,
                  getSlideClasses(distance),
                  distance === 0
                    ? "pointer-events-auto"
                    : "pointer-events-none",
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-start gap-4">
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-3 shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
                      <Icon size={24} className={state.iconColor} />
                    </div>

                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold tracking-[0.22em] text-white/45 uppercase">
                        Principle {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="mt-2 text-lg font-semibold text-white sm:text-xl">
                        {state.title}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full border border-white/10 bg-white/8 px-2.5 py-1 text-[10px] font-semibold tracking-[0.22em] text-white/55 uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <p
                  className={cn(
                    "max-w-[24ch] text-sm leading-6 sm:text-base",
                    state.descColor,
                  )}
                >
                  {state.desc}
                </p>
              </article>
            );
          })}
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {LIVE_TILE_STATES.map((state, index) => (
              <button
                key={state.id}
                type="button"
                aria-label={`Show ${state.title}`}
                aria-pressed={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "h-2.5 rounded-full border border-white/10 bg-white/10 transition-all duration-300 ease-out focus-visible:ring-2 focus-visible:ring-[#68c7ff]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none",
                  activeIndex === index
                    ? "w-10 bg-white/80"
                    : "w-2.5 hover:bg-white/25",
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              setActiveIndex((currentIndex) => {
                return (currentIndex + 1) % LIVE_TILE_STATES.length;
              });
            }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3.5 py-2 text-[11px] font-semibold tracking-[0.22em] text-zinc-200 uppercase shadow-[0_10px_24px_rgba(0,0,0,0.16)] transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#68c7ff]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none"
          >
            Next
          </button>
        </div>

        <div className="flex items-center justify-between gap-4 text-[11px] font-medium tracking-[0.18em] text-zinc-500 uppercase">
          <span>{activeState.title}</span>
          <span>
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(LIVE_TILE_STATES.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}
