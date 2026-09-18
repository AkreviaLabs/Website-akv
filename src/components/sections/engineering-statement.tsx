import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

export function EngineeringStatement() {
  return (
    <section className="border-b border-border py-24 md:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          <Reveal>
            <Eyebrow>Approach</Eyebrow>
          </Reveal>

          <Reveal delay={0.1} className="max-w-2xl">
            <h2 className="text-balance text-3xl font-medium tracking-tight md:text-4xl">
              Software should fit the way your business actually works.
            </h2>
            <div className="mt-6 flex max-w-xl flex-col gap-4 text-balance text-base text-muted-foreground md:text-lg">
              <p>
                Most software fails quietly &mdash; not because the code is
                wrong, but because it was built around an assumption that
                didn&rsquo;t hold. Before we write a line of code, we study the
                workflow it needs to support: who touches it, where it breaks,
                and what happens when the network doesn&rsquo;t. Then we build
                the system around that reality.
              </p>
              <p>
                When your daily operations run smoothly, your business can grow. By removing friction and bottlenecks, we give your team the foundation they need to handle higher volume and take on more business without things breaking down.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
