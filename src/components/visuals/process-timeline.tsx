"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";
import { useMounted } from "@/lib/use-mounted";

type Step = { index: string; title: string; description: string };

const VERTICAL_PATH =
  "M16,0 C0,50 32,100 16,150 C0,200 32,250 16,300 C0,350 32,400 16,400";

export function ProcessTimeline({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const mounted = useMounted();
  const reducedMotionPref = useReducedMotion();
  const reduceMotion = mounted && reducedMotionPref;
  const [reached, setReached] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.3"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setReached(Math.round(v * (steps.length - 1)));
  });

  const progress = reduceMotion ? 1 : scrollYProgress;

  return (
    <div ref={ref} className="relative mt-20 max-w-xl">
      <div className="absolute top-0 bottom-4 left-0 w-8" aria-hidden>
        <svg
          viewBox="0 0 32 400"
          preserveAspectRatio="none"
          className="h-full w-full overflow-visible"
        >
          <path
            d={VERTICAL_PATH}
            fill="none"
            className="stroke-border"
            strokeWidth={1}
          />
          <motion.path
            d={VERTICAL_PATH}
            fill="none"
            className="stroke-accent"
            strokeWidth={1.5}
            style={{ pathLength: progress }}
          />
        </svg>
      </div>

      <div className="flex flex-col gap-10">
        {steps.map((step, i) => {
          const isDone = i <= reached || reduceMotion;
          return (
            <Reveal key={step.index} delay={i * 0.1} className="relative pl-12">
              <span
                className={cn(
                  "absolute top-0 left-0 z-10 flex h-8 w-8 items-center justify-center border bg-background font-mono text-xs transition-colors duration-300",
                  isDone
                    ? "border-accent text-accent"
                    : "border-border text-muted-foreground",
                )}
              >
                {step.index}
              </span>

              <p className="text-lg font-medium tracking-tight">
                {step.title}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
