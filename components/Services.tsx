import Section from "./Section";

const services = [
  {
    title: "Custom Software & Internal Tools",
    body: "CRMs, dashboards, and business tools built around your workflow. Especially strong at systems for teams that work in the field, where reliability and offline access matter.",
  },
  {
    title: "Web & Mobile Apps",
    body: "Fast, modern websites and cross-platform mobile apps, built to perform and scale.",
  },
  {
    title: "Backend & Systems Engineering",
    body: "High-performance, reliable backends, APIs, and integrations — the engine behind software that just works.",
  },
];

export default function Services() {
  return (
    <Section id="services" index="01" label="Services" title="What we do">
      <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
        {services.map((service, i) => (
          <article
            key={service.title}
            className="group bg-canvas p-8 transition-colors hover:bg-accent-soft"
            data-reveal
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="font-mono text-xs text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-lg font-semibold tracking-tight">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {service.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
