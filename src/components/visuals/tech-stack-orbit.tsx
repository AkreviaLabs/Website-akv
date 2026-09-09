import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiGo,
  SiPostgresql,
  SiDocker,
  SiPython,
  SiMongodb,
} from "react-icons/si";
import type { IconType } from "react-icons";

const INNER_RING = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: undefined },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
];

const OUTER_RING = [
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Go", icon: SiGo, color: "#00ADD8" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];

function ringPositions(count: number, radius: number) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (360 / count) * i - 90;
    return {
      angle,
      style: {
        transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
      },
    };
  });
}

function OrbitBadge({
  name,
  icon: Icon,
  color,
}: {
  name: string;
  icon: IconType;
  color?: string;
}) {
  return (
    <div
      title={name}
      className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm"
    >
      <Icon size={26} aria-hidden style={color ? { color } : undefined} />
    </div>
  );
}

export function TechStackOrbit() {
  const inner = ringPositions(INNER_RING.length, 130);
  const outer = ringPositions(OUTER_RING.length, 245);

  return (
    <div className="relative flex h-[600px] w-full items-center justify-center overflow-hidden md:h-[680px]">
      <svg
        className="pointer-events-none absolute inset-0 size-full"
        aria-hidden
      >
        <circle cx="50%" cy="50%" r={130} fill="none" className="stroke-border" strokeWidth={1} />
        <circle cx="50%" cy="50%" r={245} fill="none" className="stroke-border" strokeWidth={1} />
      </svg>

      <div className="absolute z-10 flex flex-col items-center gap-1.5 border border-border bg-card px-6 py-4 text-center">
        <span className="h-2 w-2 bg-accent" aria-hidden />
        <p className="font-mono text-sm uppercase tracking-[0.14em] text-muted-foreground">
          Akrevia
        </p>
        <p className="font-mono text-sm uppercase tracking-[0.14em] text-foreground">
          Stack
        </p>
      </div>

      <div className="absolute inset-0" aria-hidden>
        {INNER_RING.map((tool, i) => (
          <div
            key={tool.name}
            className="absolute top-1/2 left-1/2 -mt-[32px] -ml-[32px]"
            style={inner[i].style}
          >
            <OrbitBadge name={tool.name} icon={tool.icon} color={tool.color} />
          </div>
        ))}
        {OUTER_RING.map((tool, i) => (
          <div
            key={tool.name}
            className="absolute top-1/2 left-1/2 -mt-[32px] -ml-[32px]"
            style={outer[i].style}
          >
            <OrbitBadge name={tool.name} icon={tool.icon} color={tool.color} />
          </div>
        ))}
      </div>
    </div>
  );
}
