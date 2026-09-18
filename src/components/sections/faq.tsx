import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { FaqItem } from "@/components/ui/faq-item";

const FAQS = [
  {
    question: "How is Akrevia different from a typical dev agency?",
    answer:
      "The team is led and managed by two engineers who write the code themselves. No account managers, no outsourced work, no outsourced junior developers you'll never meet.",
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
      "Yes. We can make almost any tool work offline — inventory systems, field data collection, order capture, and more — not just CRMs. If your team works where the network is unreliable, we can build for it.",
  },
  {
    question: "Where are you based, and do you work with remote clients?",
    answer:
      "We're based in Delhi and work with clients across India and remotely.",
  },
  {
    question: "How do you price projects?",
    answer:
      "We price by the project, not by the hour. After a first conversation, we give you a clear scope and a fixed cost up front, so there are no surprise bills.",
  },
  {
    question: "What happens after the software is built?",
    answer:
      "We don't disappear at launch. We offer ongoing maintenance so your system stays secure, updated, and keeps evolving as your business changes.",
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
