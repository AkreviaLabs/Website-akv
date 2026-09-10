"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { useMounted } from "@/lib/use-mounted";

const STEPS = [
  { label: "Online", detail: "Connection active" },
  { label: "Data captured", detail: "Form submitted on device" },
  { label: "Offline", detail: "Signal lost" },
  { label: "Local storage", detail: "Write persisted to device" },
  { label: "Connection restored", detail: "Signal reacquired" },
  { label: "Sync", detail: "Queued writes reconciled" },
  { label: "Up to date", detail: "Server and device match" },
];

const STEP_MS = 1400;

export function OfflineSequence() {
  const mounted = useMounted();
  const reducedMotionPref = useReducedMotion();
  const reduceMotion = mounted && reducedMotionPref;
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setActive((v) => (v + 1) % (STEPS.length + 1));
    }, STEP_MS);
    return () => clearInterval(id);
  }, [reduceMotion]);

  const reached = reduceMotion ? STEPS.length - 1 : Math.min(active, STEPS.length - 1);
  const progress = reduceMotion ? 1 : Math.min(active, STEPS.length - 1) / (STEPS.length - 1);

  return (
    <div className="grid gap-12 md:grid-cols-[1fr_320px]">
      <div className="relative pl-8">
        <div className="absolute top-1 left-[3px] bottom-1 w-px bg-border" aria-hidden />
        <motion.div
          className="absolute top-1 left-[3px] w-px bg-accent"
          style={{ transformOrigin: "top" }}
          animate={{ scaleY: progress }}
          initial={false}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          aria-hidden
        />

        <ol className="space-y-7">
          {STEPS.map((step, i) => {
            const isDone = i <= reached;
            const isCurrent = i === reached;
            return (
              <li key={step.label} className="relative">
                <span
                  className={cn(
                    "absolute -left-8 top-1.5 h-[7px] w-[7px] -translate-x-1/2 rounded-full border transition-colors duration-300",
                    isDone
                      ? "border-accent bg-accent"
                      : "border-border bg-background",
                  )}
                  aria-hidden
                />
                <p
                  className={cn(
                    "font-mono text-sm uppercase tracking-[0.1em] transition-colors duration-300",
                    isDone ? "text-foreground" : "text-muted-foreground",
                    isCurrent && "text-accent",
                  )}
                >
                  {step.label}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {step.detail}
                </p>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="h-fit border border-border bg-card font-mono text-xs">
        <div className="border-b border-border px-4 py-2.5 uppercase tracking-[0.14em] text-muted-foreground">
          sync_log
        </div>
        <div className="space-y-1.5 px-4 py-4">
          {STEPS.slice(0, reached + 1).map((step, i) => (
            <p key={step.label} className="flex items-start gap-2 text-muted-foreground">
              <span className="text-foreground/30">
                [{String(i).padStart(2, "0")}]
              </span>
              <span className={i === reached ? "text-accent" : undefined}>
                {step.label.toLowerCase().replace(/ /g, "_")}
              </span>
            </p>
          ))}
          {reached < STEPS.length - 1 && (
            <span
              className="inline-block h-3 w-1.5 translate-y-0.5 animate-pulse bg-accent"
              aria-hidden
            />
          )}
        </div>
      </div>
    </div>
  );
}
