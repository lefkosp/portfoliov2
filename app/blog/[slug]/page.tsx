import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogSlugs } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const { Content } = post;

  return (
    <section className="w-full px-6 pt-16 lg:px-margin-edge lg:pt-24">
      <div className="mb-16 grid w-full grid-cols-4 gap-gutter lg:grid-cols-12">
        <div className="col-span-4 lg:col-span-2">
          <Link
            href="/blog"
            className="group flex items-center gap-3 font-mono text-technical-mono uppercase text-on-surface-variant transition-colors duration-150 hover:text-accent"
          >
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-150 group-hover:-translate-x-1"
            >
              ←
            </span>
            BACK / LOGS
          </Link>
        </div>
      </div>

      <article className="grid w-full grid-cols-4 gap-gutter lg:grid-cols-12">
        <div className="col-span-4 lg:col-span-2">
          <h2 className="flex items-center gap-2 font-display text-label-caps uppercase text-accent">
            <span className="h-[1px] w-4 bg-accent" /> ENTRY
          </h2>
        </div>

        <div className="col-span-4 lg:col-span-8">
          <header className="mb-20 flex flex-col gap-8 border-b border-surface-variant pb-12">
            <div className="flex items-center gap-4 font-mono text-technical-mono uppercase text-outline">
              <span>{post.publishedAt}</span>
              <span>{"//"}</span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="font-display text-headline-xl leading-tight text-foreground">
              {post.title}
            </h1>
            <p className="max-w-[42rem] font-sans text-body-lg text-on-surface-variant">
              {post.description}
            </p>
          </header>

          <div>
            <Content />
          </div>
        </div>
      </article>
    </section>
  );
}
