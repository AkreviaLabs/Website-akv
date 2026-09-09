"use client";

import { useId, useState } from "react";
import { motion } from "motion/react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function FaqItem({
  index,
  question,
  answer,
}: {
  index: string;
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="py-6 md:py-7">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="grid w-full grid-cols-[48px_1fr_24px] items-start gap-2 text-left sm:grid-cols-[64px_1fr_24px]"
      >
        <span className="font-mono text-sm text-muted-foreground">
          {index}
        </span>
        <span className="text-base font-medium tracking-tight md:text-lg">
          {question}
        </span>
        <Plus
          size={18}
          className={cn(
            "mt-0.5 shrink-0 text-muted-foreground transition-transform duration-300",
            open && "rotate-45 text-accent",
          )}
          aria-hidden
        />
      </button>

      <motion.div
        id={panelId}
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="grid grid-cols-[48px_1fr] gap-2 pt-4 sm:grid-cols-[64px_1fr]">
          <span aria-hidden />
          <span className="max-w-xl text-balance text-sm text-muted-foreground md:text-base">
            {answer}
          </span>
        </p>
      </motion.div>
    </div>
  );
}
