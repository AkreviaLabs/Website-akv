"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { useMounted } from "@/lib/use-mounted";

const variants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const mounted = useMounted();
  const reducedMotionPref = useReducedMotion();
  const reduceMotion = mounted && reducedMotionPref;

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
