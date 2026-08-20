import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <a href="#top" className="font-semibold tracking-tight text-ink">
          {site.name}
          <span className="text-accent">.</span>
        </a>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
          <a
            href={`mailto:${site.email}`}
            className="underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            {site.email}
          </a>
          <span>{site.location}</span>
          <span>© 2026 {site.name}</span>
        </div>
      </div>
    </footer>
  );
}
