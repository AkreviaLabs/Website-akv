import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

const TEAM = [
  {
    name: "Prateek Kumar",
    role: "Backend & Systems",
    bio: "Builds the infrastructure and APIs underneath — the parts that have to hold up under load.",
    stack: [
      "Go",
      "C++",
      "Python",
      "APIs",
      "Databases",
      "Distributed systems",
    ],
  },
  {
    name: "Kumar Gautam",
    role: "Full-stack & Mobile",
    bio: "Builds the interfaces people actually touch — web and mobile, online or off.",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "React Native",
      "Flutter",
      "Offline-first architecture",
    ],
  },
];

export function Team() {
  return (
    <section id="about" className="border-b border-border py-24 md:py-32">
      <Container>
        <Reveal>
          <Eyebrow>Team</Eyebrow>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-lg text-balance text-3xl font-medium tracking-tight md:text-4xl">
            Led and managed by us.
          </h2>
          <p className="mt-6 max-w-xl text-balance text-base text-muted-foreground md:text-lg">
            Akrevia is directed by two engineers who scope, build, and ship
            the work themselves &mdash; no account managers, no handoffs to
            someone else.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
          {TEAM.map((person, i) => (
            <Reveal
              key={person.name}
              delay={i * 0.1}
              className="bg-background p-6 md:p-10"
            >
              <p className="text-xl font-medium tracking-tight">
                {person.name}
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-accent">
                {person.role}
              </p>
              <p className="mt-4 max-w-sm text-sm text-muted-foreground">
                {person.bio}
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-border pt-5 font-mono text-xs text-muted-foreground">
                {person.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
