import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { ProcessTimeline } from "@/components/visuals/process-timeline";

const STEPS = [
  {
    index: "01",
    title: "Understand",
    description: "Map the actual workflow, not the assumed one.",
  },
  {
    index: "02",
    title: "Engineer",
    description: "Design the system around how the work really happens.",
  },
  {
    index: "03",
    title: "Ship",
    description: "Deliver working software, not a demo.",
  },
  {
    index: "04",
    title: "Improve",
    description: "Maintain and evolve it as the business changes.",
  },
];

export function HowWeWork() {
  return (
    <section id="approach" className="border-b border-border py-24 md:py-32">
      <Container>
        <Reveal>
          <Eyebrow>How we work</Eyebrow>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-lg text-balance text-3xl font-medium tracking-tight md:text-4xl">
            Engineered to move fast, without cutting corners.
          </h2>
          <p className="mt-6 max-w-xl text-balance text-base text-muted-foreground md:text-lg">
            No handoffs, no waiting on approvals, no miscommunication between teams. Work moves in short, direct cycles &mdash;
            understood, engineered, shipped, improved &mdash; so we build and ship faster without cutting corners on quality.
          </p>
        </Reveal>

        <ProcessTimeline steps={STEPS} />
      </Container>
    </section>
  );
}
