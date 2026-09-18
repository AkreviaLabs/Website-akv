import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/mdx";

// Configure default styles for MDX elements using Tailwind prose or custom mapping
const mdxComponents = {
  h2: (props: any) => <h2 className="text-3xl font-medium tracking-tight text-foreground pt-8 pb-4" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-medium tracking-tight text-foreground pt-6 pb-3" {...props} />,
  p: (props: any) => <p className="pb-4" {...props} />,
  ul: (props: any) => <ul className="list-inside list-disc space-y-2 pb-4" {...props} />,
  li: (props: any) => <li className="pl-2" {...props} />,
  strong: (props: any) => <strong className="font-medium text-foreground" {...props} />,
  a: (props: any) => <a className="text-accent hover:underline" {...props} />,
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);
  if (!post) return { title: "Post Not Found" };
  
  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <Section className="border-b-0 pt-32 pb-20 md:pt-44 md:pb-28">
          <Container>
            <Reveal>
              <Link href="/blog" className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground">
                &larr; Back to Blog
              </Link>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-6 max-w-3xl text-balance text-4xl font-medium tracking-tight md:text-5xl">
                {post.title}
              </h1>
              <div className="mt-6 flex items-center gap-x-4 font-mono text-xs uppercase tracking-[0.14em]">
                <time dateTime={post.date} className="text-muted-foreground">
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </time>
                <span className="text-accent">{post.category}</span>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="mt-16 max-w-3xl text-lg text-muted-foreground">
              <MDXRemote source={post.content} components={mdxComponents} />
            </Reveal>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
