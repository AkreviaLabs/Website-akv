"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Container } from "@/components/layout/container";
import { HeroConsole } from "@/components/visuals/hero-console";
import { Eyebrow } from "@/components/ui/eyebrow";
import ShapeGrid from "@/components/visuals/ShapeGrid";
import { useMounted } from "@/lib/use-mounted";
import { DelayedHighlighter } from "@/components/ui/delayed-highlighter";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Hero() {
  const reducedMotionPref = useReducedMotion();
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();
  const isDark = mounted && resolvedTheme === "dark";
  const reduceMotion = mounted && reducedMotionPref;

  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden border-b border-border pt-24 pb-14 md:pt-20">
      <div className="absolute inset-0" aria-hidden>
        <ShapeGrid
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor={isDark ? "#333333" : "#dcdcd7"}
          hoverFillColor={isDark ? "#f7f7f5" : "#222222"}
          shape="square"
          hoverTrailAmount={5}
        />
      </div>

      <Container className="relative grid max-w-[1440px] gap-14 pointer-events-none lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
        <motion.div
          variants={container}
          initial={reduceMotion ? "show" : "hidden"}
          animate="show"
        >
          <motion.div variants={item}>
            <Eyebrow>Akrevia / Software Engineering</Eyebrow>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-balance text-[46px] font-medium leading-[1.02] tracking-tight sm:text-[58px] md:text-[68px] lg:text-[74px] xl:text-[82px]"
          >
            Software built
            <br />
            with{" "}
            <DelayedHighlighter
              action="underline"
              color="#FF9800"
              isView
              animationDuration={700}
              iterations={2}
            >
              precision
            </DelayedHighlighter>
            .
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-balance text-lg text-muted-foreground md:text-xl"
          >
            Akrevia builds reliable web, mobile, and backend systems for
            businesses that need software to work in the real world.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <Link
              href="/contact"
              className="group pointer-events-auto inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground/90"
            >
              Let&rsquo;s talk
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
            <Link
              href="#services"
              className="group pointer-events-auto inline-flex items-center gap-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              Explore capabilities
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.25, ease: "easeOut" }}
        >
          <HeroConsole />
        </motion.div>
      </Container>

      <div className="absolute inset-x-0 bottom-7 hidden justify-center lg:flex">
        <div className="flex flex-col items-center gap-1.5 text-muted-foreground">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em]">
            Scroll
          </span>
          <ChevronDown
            size={14}
            className="motion-safe:animate-bounce"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
