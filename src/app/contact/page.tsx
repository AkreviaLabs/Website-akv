import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Akrevia what you're trying to build. We're a software engineering studio in Delhi, India, led by two engineers.",
};

const EMAILS = [
  { label: "General", email: "admin@akrevia.in" },
  { label: "Prateek", email: "prateek@akrevia.in" },
  { label: "Gautam", email: "gautam@akrevia.in" },
];

const PHONES = [
  { label: "Prateek", number: "+91 93184 21533" },
  { label: "Gautam", number: "+91 87890 34782" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section dark className="border-b-0 pt-32 pb-14 md:pt-44 md:pb-16">
          <Container>
            <Reveal>
              <Eyebrow>Contact</Eyebrow>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-6 text-balance text-4xl font-medium tracking-tight md:text-6xl">
                Have a workflow that needs better software?
              </h1>
            </Reveal>
          </Container>
        </Section>

        <Section className="pt-14 pb-20 md:pt-16 md:pb-28">
          <Container>
            <div className="grid gap-16 lg:grid-cols-[1fr_320px]">
              <Reveal>
                <ContactForm />
              </Reveal>

              <div className="flex flex-col gap-10 border-t border-border pt-10 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
                <Reveal>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    Email
                  </p>
                  <ul className="mt-3 space-y-2">
                    {EMAILS.map((item) => (
                      <li key={item.email} className="flex items-baseline gap-2">
                        <Link
                          href={`mailto:${item.email}`}
                          className="text-lg text-foreground transition-colors hover:text-accent"
                        >
                          {item.email}
                        </Link>
                        <span className="text-xs text-muted-foreground">
                          {item.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal delay={0.08}>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    Phone
                  </p>
                  <ul className="mt-3 space-y-2">
                    {PHONES.map((item) => (
                      <li key={item.number} className="flex items-baseline gap-2">
                        <Link
                          href={`tel:${item.number.replace(/\s/g, "")}`}
                          className="text-lg text-foreground transition-colors hover:text-accent"
                        >
                          {item.number}
                        </Link>
                        <span className="text-xs text-muted-foreground">
                          {item.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal delay={0.16}>
                  <p className="text-sm text-muted-foreground">
                    Based in Delhi, working with clients anywhere.
                  </p>
                </Reveal>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
