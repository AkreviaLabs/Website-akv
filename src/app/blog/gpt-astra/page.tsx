import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "The Future of Voice and Vision: GPT-4o vs Google Project Astra",
  description: "Comparing the latest real-time multimodal capabilities.",
};

export default function BlogPost() {
  return (
    <>
      <Navbar />
      <main>
        <Section className="border-b-0 pt-32 pb-20 md:pt-44 md:pb-28">
          <Container>
            <Reveal>
              <Eyebrow>Blog</Eyebrow>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-6 max-w-3xl text-balance text-4xl font-medium tracking-tight md:text-5xl">
                The Future of Voice and Vision: GPT-4o vs Google Project Astra
              </h1>
              <div className="mt-6 flex items-center gap-x-4 font-mono text-xs uppercase tracking-[0.14em]">
                <time dateTime="2024-05-15" className="text-muted-foreground">May 15, 2024</time>
                <span className="text-accent">AI</span>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="mt-16 max-w-3xl space-y-6 text-lg text-muted-foreground">
              <p>
                May 2024 brought a seismic shift in how we interact with Artificial Intelligence. Within 24 hours of each other, OpenAI unveiled <strong className="font-medium text-foreground">GPT-4o</strong> and Google showcased <strong className="font-medium text-foreground">Project Astra</strong>, redefining the benchmark for multimodal AI.
              </p>
              <h3 className="text-2xl font-medium tracking-tight text-foreground pt-4">GPT-4o: Omni-modal Real-time Interaction</h3>
              <p>
                GPT-4o ("o" for omni) processes audio, vision, and text in real-time, natively. The latency for audio responses has dropped to ~320 milliseconds—similar to human conversation. It can detect emotion, handle interruptions gracefully, and analyze live video feeds from a smartphone camera.
              </p>
              <h3 className="text-2xl font-medium tracking-tight text-foreground pt-4">Google Project Astra: The Universal Assistant</h3>
              <p>
                Unveiled at Google I/O, Project Astra represents Google's vision for a universal AI agent. Astra demonstrated incredible continuous video understanding, where the agent could recall where objects were placed (like a user's glasses) and identify components of complex diagrams in real-time.
              </p>
              <h3 className="text-2xl font-medium tracking-tight text-foreground pt-4">The Implications for Software Engineering</h3>
              <p>
                For studios like Akrevia, these advancements open entirely new paradigms for software interfaces:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li><strong className="font-medium text-foreground">Frictionless Field Tools:</strong> Imagine offline-first apps where field workers can simply point their camera and talk naturally to diagnose machinery, rather than filling out complex forms.</li>
                <li><strong className="font-medium text-foreground">Accessibility:</strong> Real-time vision-to-voice changes how visually impaired users interact with software.</li>
              </ul>
              <p className="pt-4">
                The race to ultra-low latency, multimodal AI is on, and the possibilities for custom software are boundless.
              </p>
              <div className="mt-10">
                <Link href="/blog" className="text-accent hover:underline">
                  &larr; Back to Blog
                </Link>
              </div>
            </Reveal>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
