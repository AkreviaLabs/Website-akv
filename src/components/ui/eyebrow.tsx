import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
      {children}
    </div>
  );
}
