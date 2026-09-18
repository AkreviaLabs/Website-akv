import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { DelayedHighlighter } from "@/components/ui/delayed-highlighter";
import { OfflineSequence } from "@/components/visuals/offline-sequence";

export function OfflineFirst() {
  return (
    <Section dark grid>
      <Container className="relative">
        <Reveal>
          <Eyebrow>Our specialty</Eyebrow>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-xl text-balance text-3xl font-medium tracking-tight md:text-4xl">
            Software that doesn&rsquo;t stop when the{" "}
            <DelayedHighlighter
              action="underline"
              color="#FF9800"
              isView
              animationDuration={700}
              iterations={2}
            >
              signal
            </DelayedHighlighter>{" "}
            does.
          </h2>
          <p className="mt-6 max-w-xl text-balance text-base text-muted-foreground md:text-lg">
            Field teams don&rsquo;t get to choose their network conditions. We
            build CRMs and business tools that keep working offline, then
            sync automatically the moment connectivity returns.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-16">
          <OfflineSequence />
        </Reveal>
      </Container>
    </Section>
  );
}
