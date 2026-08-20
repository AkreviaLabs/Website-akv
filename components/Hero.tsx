import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6">
      {/* Precision motif: fine grid, faded out at the edges. Pure CSS, no image. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_70%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-line) 1px, transparent 1px), linear-gradient(to bottom, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative mx-auto max-w-5xl py-24 sm:py-36">
        <p
          className="font-mono text-xs tracking-[0.2em] text-muted uppercase"
          data-reveal
        >
          Software Studio
          <span className="mx-2 text-line">/</span>
          <span className="text-accent">{site.location}</span>
        </p>

        <h1
          className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl sm:leading-[1.05]"
          data-reveal
        >
          Software that does exactly what your business needs.
        </h1>

        <p
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:mt-8 sm:text-lg"
          data-reveal
        >
          We build custom websites, apps, and internal tools for businesses that
          want technology built precisely around how they actually work — not
          generic software you bend your process around.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4" data-reveal>
          <a
            href="#contact"
            className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Get in touch
          </a>
          <a
            href="#services"
            className="rounded-md border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-ink"
          >
            What we do
          </a>
        </div>
      </div>
    </section>
  );
}
