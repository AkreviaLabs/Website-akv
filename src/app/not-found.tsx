import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <Section className="border-b-0 pt-32 pb-20 md:pt-44 md:pb-28 min-h-[70vh] flex flex-col justify-center">
          <Container>
            <Reveal>
              <h1 className="text-balance text-6xl font-medium tracking-tight md:text-8xl text-foreground">
                404
              </h1>
              <p className="mt-6 max-w-md text-balance text-base text-muted-foreground md:text-lg">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <Link
                href="/"
                className="mt-8 inline-flex items-center gap-2 border border-border bg-transparent px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent/10 hover:border-accent hover:text-accent w-fit"
              >
                &larr; Back to Home
              </Link>
            </Reveal>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
