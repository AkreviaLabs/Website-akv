"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Navbar />
      <main>
        <Section className="border-b-0 pt-32 pb-20 md:pt-44 md:pb-28 min-h-[70vh] flex flex-col justify-center">
          <Container>
            <Reveal>
              <h1 className="text-balance text-5xl font-medium tracking-tight md:text-6xl text-foreground">
                Something went wrong.
              </h1>
              <p className="mt-6 max-w-md text-balance text-base text-muted-foreground md:text-lg">
                We encountered an unexpected error. Please try again or return to the homepage.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-8 flex gap-4">
              <button
                onClick={() => reset()}
                className="inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground/90 w-fit"
              >
                Try again
              </button>
              <Link
                href="/"
                className="inline-flex items-center gap-2 border border-border bg-transparent px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent/10 hover:border-accent hover:text-accent w-fit"
              >
                Back to Home
              </Link>
            </Reveal>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
