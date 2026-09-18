import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { getBlogPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes from Akrevia on the engineering problems we solve — offline-first architecture, backend systems, and building software that works in the real world.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <>
      <Navbar />
      <main>
        <Section className="border-b-0 pt-32 pb-20 md:pt-44 md:pb-28">
          <Container>
            <Reveal>
              <Eyebrow>Blog</Eyebrow>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-6 max-w-xl text-balance text-4xl font-medium tracking-tight md:text-6xl">
                Notes on building precise software.
              </h1>
              <p className="mt-6 max-w-md text-balance text-base text-muted-foreground md:text-lg">
                Writing on the engineering problems we solve, as we solve
                them.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={0.2 + i * 0.1} className="group relative flex flex-col items-start justify-between border border-border bg-background p-6 transition-colors hover:border-accent">
                  <div className="flex items-center gap-x-4 font-mono text-xs uppercase tracking-[0.14em]">
                    <time dateTime={post.date} className="text-muted-foreground">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                    <span className="text-accent">{post.category}</span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-5 text-xl font-medium tracking-tight text-foreground transition-colors group-hover:text-accent">
                      <Link href={`/blog/${post.slug}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-4 line-clamp-3 text-base text-muted-foreground">
                      {post.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
