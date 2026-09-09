import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { FaqItem } from "@/components/ui/faq-item";

const FAQS = [
  {
    question: "How is Akrevia different from a typical dev agency?",
    answer:
      "The team is led and managed by two engineers who write the code themselves. No account managers, no outsourced work, no bench of developers you'll never meet.",
  },
  {
    question: "What does a typical engagement look like?",
    answer:
      "We start by understanding your workflow, then scope a build around it with clear milestones. Timelines depend on scope — we'll give you a straight answer after the first conversation.",
  },
  {
    question: "Do you work with early-stage companies?",
    answer:
      "Yes. We're set up to work directly with founders and operators, not just teams that already have dedicated technical staff.",
  },
  {
    question: "Can you build offline-first software outside of CRMs?",
    answer:
      "Offline-first is an architecture, not a product category. We apply it to inventory systems, field data collection, logistics tools — anything that has to keep working without a signal.",
  },
  {
    question: "Where are you based, and do you work with remote clients?",
    answer:
      "We're based in Delhi and work with clients across India and remotely.",
  },
  {
    question: "How do you price projects?",
    answer:
      "Project-based, scoped after we understand the work. We don't do open-ended hourly billing.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-b border-border py-24 md:py-32">
      <Container>
        <Reveal>
          <Eyebrow>Questions</Eyebrow>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-lg text-balance text-3xl font-medium tracking-tight md:text-4xl">
            Frequently asked.
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="mt-16 divide-y divide-border border-t border-border">
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.question}
              index={String(i + 1).padStart(2, "0")}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
