import Section from "./Section";
import { mailto, site } from "@/lib/site";

export default function Contact() {
  return (
    <Section
      id="contact"
      index="03"
      label="Contact"
      title="Let's build something that works"
    >
      <div className="grid gap-12 sm:grid-cols-2 sm:gap-16">
        <div data-reveal>
          <h3 className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
            Email
          </h3>
          <ul className="mt-4 space-y-3">
            {site.emails.map((item) => (
              <li key={item.address}>
                <a
                  href={`mailto:${item.address}`}
                  className="text-base underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  {item.address}
                </a>
                <span className="ml-2 text-xs text-muted">{item.label}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-10 font-mono text-xs tracking-[0.2em] text-muted uppercase">
            Phone
          </h3>
          <ul className="mt-4 space-y-3">
            {site.phones.map((item) => (
              <li key={item.tel}>
                <a
                  href={`tel:${item.tel}`}
                  className="text-base underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  {item.display}
                </a>
                <span className="ml-2 text-xs text-muted">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal style={{ transitionDelay: "80ms" }}>
          <a
            href={mailto}
            className="inline-flex rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Email us
          </a>

          <div className="mt-10 border-t border-line pt-6">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              LinkedIn ↗
            </a>
            <p className="mt-6 text-sm text-muted">
              Based in Delhi, working with clients anywhere.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
