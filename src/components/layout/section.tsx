import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  dark,
  grid,
  children,
}: {
  id?: string;
  className?: string;
  dark?: boolean;
  grid?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative border-b border-border py-20 md:py-28",
        dark && "dark bg-background text-foreground",
        grid && "grid-overlay",
        className,
      )}
    >
      {children}
    </section>
  );
}
