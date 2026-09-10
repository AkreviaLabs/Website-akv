import Link from "next/link";
import { Container } from "./container";

const LINKS = [
  { href: "/work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#approach", label: "Approach" },
  { href: "/#about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="py-16">
      <Container>
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div>
            <p className="font-mono text-sm font-medium tracking-[0.14em]">
              AKREVIA
            </p>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Software engineering studio.
              <br />
              Delhi, India
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-border pt-6 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>akrevia.in</span>
          <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link
              href="mailto:admin@akrevia.in"
              className="transition-colors hover:text-foreground"
            >
              admin@akrevia.in
            </Link>
            <span>Delhi, India</span>
          </span>
          <span>&copy; {new Date().getFullYear()} Akrevia Labs LLP</span>
        </div>
      </Container>
    </footer>
  );
}
