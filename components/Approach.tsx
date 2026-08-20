import Section from "./Section";

const steps = [
  {
    title: "Understand",
    body: "We learn how your business actually runs before writing a line of code.",
  },
  {
    title: "Build",
    body: "We build it precisely, keep you updated, and ship working software fast.",
  },
  {
    title: "Support",
    body: "We stay on to maintain, fix, and improve what we've built.",
  },
];

export default function Approach() {
  return (
    <Section id="approach" index="02" label="Approach" title="How we work">
      <ol className="grid gap-10 sm:grid-cols-3 sm:gap-8">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="border-t border-line pt-6 sm:border-t-2 sm:border-t-accent"
            data-reveal
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="font-mono text-xs tracking-[0.2em] text-muted">
              STEP {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-lg font-semibold tracking-tight">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
