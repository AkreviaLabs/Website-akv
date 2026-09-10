"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { useMounted } from "@/lib/use-mounted";

const LOG_LINES = [
  { text: "checking build", delay: 0 },
  { text: "running tests", delay: 0.4 },
  { text: "syncing services", delay: 0.8 },
  { text: "deployment complete", delay: 1.2 },
];

const METRICS = [
  { label: "BUILD", value: "PASS" },
  { label: "TESTS", value: "PASSING" },
  { label: "API", value: "ONLINE" },
  { label: "SYNC", value: "READY" },
];

const META = [
  { label: "branch", value: "production" },
  { label: "status", value: "ready" },
];

const COMMITS = [
  { label: "fix / sync" },
  { label: "feat / api" },
  { label: "refactor / mobile" },
  { label: "release / production", active: true },
];

const CORNER_MARKS = [
  "-top-2 -left-2",
  "-top-2 -right-2",
  "-bottom-2 -left-2",
  "-bottom-2 -right-2",
];

export function HeroConsole() {
  const mounted = useMounted();
  const reducedMotionPref = useReducedMotion();
  const reduceMotion = mounted && reducedMotionPref;

  const fade = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: reduceMotion ? 0 : delay, duration: 0.35 },
  });

  return (
    <div className="relative">
      <div className="absolute -inset-px -z-10 grid-overlay opacity-40" aria-hidden />

      <p className="mb-2.5 font-mono text-[13px] uppercase tracking-[0.14em] text-muted-foreground/70">
        System / 001
      </p>

      <div className="relative border border-border bg-card font-mono text-[16px] leading-relaxed">
        {CORNER_MARKS.map((pos) => (
          <span
            key={pos}
            className={cn(
              "pointer-events-none absolute h-3 w-3 text-muted-foreground/30",
              pos,
            )}
            aria-hidden
          >
            <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
            <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
          </span>
        ))}

        <div className="flex items-center justify-between border-b border-border px-6 py-3.5 text-[14px] uppercase tracking-[0.14em] text-muted-foreground">
          <span className="flex items-center gap-4">
            <span className="flex items-center gap-1.5" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-[#ec6a5e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#f4bf4f]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#61c454]" />
            </span>
            <span>Akrevia / Production</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 bg-accent" aria-hidden />
            Live
          </span>
        </div>

        <div className="space-y-2 px-6 py-6">
          <p className="text-muted-foreground">
            <span className="text-accent">$</span> akrevia deploy --production
          </p>
          {LOG_LINES.map((line) => (
            <motion.p
              key={line.text}
              initial={reduceMotion ? false : { opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.35,
                delay: reduceMotion ? 0 : line.delay,
                ease: "easeOut",
              }}
              className="text-muted-foreground"
            >
              <span className="text-foreground/40">&gt;</span> {line.text}
            </motion.p>
          ))}
          <motion.span
            {...fade(1.6)}
            className="inline-block h-3.5 w-1.5 translate-y-0.5 bg-accent motion-safe:animate-pulse"
            aria-hidden
            style={{ animationDuration: "1.1s" }}
          />
        </div>

        <div className="grid grid-cols-2 border-t border-border">
          {METRICS.map((row, i) => (
            <motion.div
              key={row.label}
              {...fade(1.7 + i * 0.1)}
              className="border-r border-b border-border px-5 py-3.5 [&:nth-child(2n)]:border-r-0 [&:nth-last-child(-n+2)]:border-b-0"
            >
              <p className="text-[12px] tracking-[0.14em] text-muted-foreground">
                {row.label}
              </p>
              <p
                className={cn(
                  "mt-1",
                  (row.label === "API" || row.label === "SYNC") &&
                    "text-accent",
                )}
              >
                {row.value}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fade(2.15)}
          className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-border px-6 py-3.5 text-[13px] text-muted-foreground"
        >
          {META.map((m) => (
            <span key={m.label}>
              {m.label} <span className="text-foreground/70">{m.value}</span>
            </span>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center">
        <motion.span
          {...fade(2.3)}
          className="h-5 w-px bg-border"
          aria-hidden
        />
      </div>

      <div className="relative grid grid-cols-4">
        <span
          className="absolute top-[3px] right-[12.5%] left-[12.5%] h-px bg-border"
          aria-hidden
        />
        {COMMITS.map((commit, i) => (
          <motion.div
            key={commit.label}
            {...fade(2.3 + i * 0.1)}
            className="relative z-10 flex flex-col items-center gap-2 text-center"
          >
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full border",
                commit.active
                  ? "border-accent bg-accent"
                  : "border-muted-foreground/50 bg-background",
              )}
              aria-hidden
            />
            <span
              className={cn(
                "font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground",
                commit.active && "text-accent",
              )}
            >
              {commit.label}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div
        {...fade(2.7)}
        className="mt-5 flex items-center justify-between font-mono text-[12px] uppercase tracking-[0.1em] text-muted-foreground"
      >
        <span>System / Ready</span>
        <span>Delhi, India</span>
      </motion.div>
    </div>
  );
}
