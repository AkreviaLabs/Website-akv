import {
  Atom,
  Triangle,
  FileCode2,
  Wind,
  Smartphone,
  AppWindow,
  Zap,
  Cpu,
  Hexagon,
  Braces,
  Database,
  Flame,
  Leaf,
  Container as ContainerIcon,
  Cloud,
  Monitor,
  Layers,
  Server,
  Network,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { TechStackOrbit } from "@/components/visuals/tech-stack-orbit";

type Tool = { name: string; icon: LucideIcon };

const STACK: { category: string; icon: LucideIcon; tools: Tool[] }[] = [
  {
    category: "Frontend",
    icon: Monitor,
    tools: [
      { name: "React", icon: Atom },
      { name: "Next.js", icon: Triangle },
      { name: "TypeScript", icon: FileCode2 },
      { name: "Tailwind CSS", icon: Wind },
    ],
  },
  {
    category: "Mobile",
    icon: Layers,
    tools: [
      { name: "React Native", icon: Smartphone },
      { name: "Flutter", icon: AppWindow },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    tools: [
      { name: "Go", icon: Zap },
      { name: "C++", icon: Cpu },
      { name: "Node.js", icon: Hexagon },
      { name: "Python", icon: Braces },
    ],
  },
  {
    category: "Infrastructure",
    icon: Network,
    tools: [
      { name: "PostgreSQL", icon: Database },
      { name: "Redis", icon: Flame },
      { name: "MongoDB", icon: Leaf },
      { name: "Docker", icon: ContainerIcon },
      { name: "AWS", icon: Cloud },
    ],
  },
];

export function Technology() {
  return (
    <section className="border-b border-border py-24 md:py-32">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Reveal>
              <Eyebrow>Technology</Eyebrow>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-6 text-balance text-3xl font-medium tracking-tight lg:whitespace-nowrap md:text-4xl">
                A focused, deliberate stack.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="hidden shrink-0 sm:block lg:w-[480px]">
            <div className="flex h-[360px] items-center justify-center overflow-hidden md:h-[460px]">
              <div
                className="w-[640px] shrink-0 origin-center"
                style={{ transform: "scale(0.68)" }}
              >
                <TechStackOrbit />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STACK.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.08}>
              <p className="flex items-center gap-2 border-b border-border pb-3 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                <group.icon size={14} className="shrink-0 text-accent" aria-hidden />
                {group.category}
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {group.tools.map((tool) => (
                  <li key={tool.name} className="flex items-center gap-2.5">
                    <tool.icon
                      size={15}
                      className="shrink-0 text-muted-foreground"
                      aria-hidden
                    />
                    {tool.name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
