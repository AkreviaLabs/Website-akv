import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes from Akrevia on the engineering problems we solve — offline-first architecture, backend systems, and building software that works in the real world.",
};

export default function BlogPage() {
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
              <h1 className="mt-6 max-w-xl text-balance text-4xl font-medium tracking-tight md:text-6xl">
                Notes on building precise software.
              </h1>
              <p className="mt-6 max-w-md text-balance text-base text-muted-foreground md:text-lg">
                Writing on the engineering problems we solve, as we solve
                them.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              <Reveal delay={0.2} className="group relative flex flex-col items-start justify-between border border-border bg-background p-6 transition-colors hover:border-accent">
                <div className="flex items-center gap-x-4 font-mono text-xs uppercase tracking-[0.14em]">
                  <time dateTime="2024-05-10" className="text-muted-foreground">May 10, 2024</time>
                  <span className="text-accent">AI</span>
                </div>
                <div className="group relative">
                  <h3 className="mt-5 text-xl font-medium tracking-tight text-foreground transition-colors group-hover:text-accent">
                    <Link href="/blog/ai-agent-mcp">
                      <span className="absolute inset-0" />
                      Understanding AI Agents and the Model Context Protocol (MCP)
                    </Link>
                  </h3>
                  <p className="mt-4 line-clamp-3 text-base text-muted-foreground">
                    An in-depth look at how AI agents can leverage the Model Context Protocol to seamlessly integrate with local and remote data sources, expanding their capabilities beyond standard chat interfaces.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.3} className="group relative flex flex-col items-start justify-between border border-border bg-background p-6 transition-colors hover:border-accent">
                <div className="flex items-center gap-x-4 font-mono text-xs uppercase tracking-[0.14em]">
                  <time dateTime="2024-05-15" className="text-muted-foreground">May 15, 2024</time>
                  <span className="text-accent">AI</span>
                </div>
                <div className="group relative">
                  <h3 className="mt-5 text-xl font-medium tracking-tight text-foreground transition-colors group-hover:text-accent">
                    <Link href="/blog/gpt-astra">
                      <span className="absolute inset-0" />
                      The Future of Voice and Vision: GPT-4o vs Google Project Astra
                    </Link>
                  </h3>
                  <p className="mt-4 line-clamp-3 text-base text-muted-foreground">
                    Comparing the latest real-time multimodal capabilities of OpenAI's GPT-4o and Google's Project Astra. What do these advancements mean for developers and end-users?
                  </p>
                </div>
              </Reveal>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
