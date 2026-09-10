import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

const CAPABILITIES = [
  {
    index: "01",
    title: "Custom Software",
    items: ["CRMs", "Internal tools", "Business systems", "Dashboards"],
  },
  {
    index: "02",
    title: "Web & Mobile",
    items: [
      "Web applications",
      "Mobile products",
      "Cross-platform apps",
      "Design systems",
    ],
  },
  {
    index: "03",
    title: "Backend & Systems",
    items: [
      "APIs",
      "Integrations",
      "Infrastructure",
      "Performance-critical systems",
    ],
  },
  {
    index: "04",
    title: "Offline-first",
    items: [
      "Field-team applications",
      "Local-first sync",
      "Unreliable-network handling",
    ],
  },
];

export function WhatWeBuild() {
  return (
    <section id="services" className="border-b border-border py-24 md:py-32">
      <Container>
        <Reveal>
          <Eyebrow>What we build</Eyebrow>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-lg text-balance text-3xl font-medium tracking-tight md:text-4xl">
            Four categories. One team building all of them.
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-border border-t border-border">
          {CAPABILITIES.map((cap, i) => (
            <Reveal key={cap.index} delay={i * 0.06}>
              <div className="grid gap-4 py-8 sm:grid-cols-[100px_1fr] sm:gap-8 md:py-10">
                <span className="font-mono text-sm text-muted-foreground">
                  {cap.index}
                </span>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                    {cap.title}
                  </h3>
                  <ul className="flex flex-wrap gap-x-6 gap-y-1.5 font-mono text-sm text-muted-foreground">
                    {cap.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
