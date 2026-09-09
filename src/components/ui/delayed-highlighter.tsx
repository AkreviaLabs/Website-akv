"use client";

import { useEffect, useRef, useState, type ComponentProps } from "react";
import { useInView } from "motion/react";
import { Highlighter } from "@/components/ui/highlighter";

/**
 * Wraps Highlighter but waits until the surrounding text has scrolled
 * into view AND its entrance animation (Reveal / motion stagger) has had
 * time to settle before mounting the annotation. rough-notation measures
 * the target's position on mount, so drawing too early — before the
 * transform-based reveal finishes — puts the underline in the wrong spot.
 */
export function DelayedHighlighter({
  children,
  delay = 700,
  ...props
}: ComponentProps<typeof Highlighter> & { delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const id = setTimeout(() => setReady(true), delay);
    return () => clearTimeout(id);
  }, [inView, delay]);

  if (!ready) {
    return <span ref={ref}>{children}</span>;
  }

  return <Highlighter {...props}>{children}</Highlighter>;
}
