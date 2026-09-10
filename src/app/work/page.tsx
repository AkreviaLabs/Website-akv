import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects from Akrevia — custom software, offline-first CRMs, and backend systems built for businesses that need software to work in the real world.",
};


export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section className="border-b-0 pt-32 pb-16 md:pt-44 md:pb-20">
          <Container>
            <Reveal>
              <Eyebrow>Work</Eyebrow>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-6 max-w-xl text-balance text-4xl font-medium tracking-tight md:text-6xl">
                What we build.
              </h1>
              <p className="mt-6 max-w-md text-balance text-base text-muted-foreground md:text-lg">
                Examples of the kinds of systems we build &mdash; for field
                operations, retail, and logistics.
              </p>
            </Reveal>
          </Container>
        </Section>

        <Section className="py-16 md:py-20">
          <Container>
            <div className="divide-y divide-border border-t border-border">
              {PROJECTS.map((project, i) => (
                <Reveal key={project.index} delay={i * 0.08} className="py-10 md:py-12">
                  <div className="grid gap-6 lg:grid-cols-[100px_1fr_280px]">
                    <span className="font-mono text-sm text-muted-foreground">
                      {project.index}
                    </span>

                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                        {project.category}
                      </p>
                      <h2 className="mt-2 text-2xl font-medium tracking-tight">
                        {project.name}
                      </h2>
                      <p className="mt-4 max-w-lg text-balance text-base text-muted-foreground">
                        {project.description}
                      </p>
                    </div>

                    <ul className="flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-xs text-muted-foreground lg:flex-col lg:items-end lg:text-right">
                      {project.stack.map((tool) => (
                        <li key={tool}>{tool}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
