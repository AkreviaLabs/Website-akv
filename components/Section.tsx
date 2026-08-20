import type { ReactNode } from "react";

type Props = {
  id: string;
  /** Small mono index, e.g. "01" */
  index: string;
  /** Mono eyebrow label next to the index */
  label: string;
  /** Section heading */
  title: string;
  children: ReactNode;
  className?: string;
};

/** Shared section shell: anchor id, mono eyebrow, heading, consistent spacing. */
export default function Section({
  id,
  index,
  label,
  title,
  children,
  className = "",
}: Props) {
  return (
    <section
      id={id}
      className={`border-t border-line px-6 py-20 sm:py-28 ${className}`}
    >
      <div className="mx-auto max-w-5xl">
        <div data-reveal>
          <p className="font-mono text-xs tracking-[0.2em] uppercase">
            <span className="text-muted">{index}</span>
            <span className="mx-2 text-line">/</span>
            <span className="text-accent">{label}</span>
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="mt-12 sm:mt-16">{children}</div>
      </div>
    </section>
  );
}
