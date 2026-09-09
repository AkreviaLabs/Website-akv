import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Understanding AI Agents and the Model Context Protocol (MCP)",
  description: "An in-depth look at how AI agents can leverage the Model Context Protocol.",
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
                Understanding AI Agents and the Model Context Protocol (MCP)
              </h1>
              <div className="mt-6 flex items-center gap-x-4 font-mono text-xs uppercase tracking-[0.14em]">
                <time dateTime="2024-05-10" className="text-muted-foreground">May 10, 2024</time>
                <span className="text-accent">AI</span>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="mt-16 max-w-3xl space-y-6 text-lg text-muted-foreground">
              <p>
                Artificial Intelligence is moving beyond basic chat interfaces into the realm of <strong className="font-medium text-foreground">Agents</strong>—systems that can plan, reason, and take actions in the real world. However, a significant bottleneck has been giving these agents standardized access to local data, development environments, and APIs.
              </p>
              <p>
                Enter the <strong className="font-medium text-foreground">Model Context Protocol (MCP)</strong>. Open-sourced by Anthropic, MCP is an open standard designed to solve the "context bottleneck". It provides a universal architecture for connecting AI assistants to data sources.
              </p>
              <h3 className="text-2xl font-medium tracking-tight text-foreground pt-4">Why MCP Matters</h3>
              <ul className="list-inside list-disc space-y-2">
                <li><strong className="font-medium text-foreground">Standardization:</strong> Instead of building custom integrations for every tool (GitHub, Google Drive, local file systems, databases), developers can write a single MCP server. Any MCP-compatible client (like Claude Desktop or IDEs) can then instantly connect to that data.</li>
                <li><strong className="font-medium text-foreground">Security:</strong> The protocol acts as a secure boundary. The AI client requests context, and the local MCP server decides exactly what to share, maintaining user control over sensitive data.</li>
                <li><strong className="font-medium text-foreground">Agentic Autonomy:</strong> With rich, structured context, AI agents can make better decisions, reducing hallucinations and enabling them to perform complex workflows autonomously.</li>
              </ul>
              <p className="pt-4">
                As we build software at Akrevia, leveraging standards like MCP will be crucial in developing the next generation of intelligent, context-aware applications for our clients.
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
