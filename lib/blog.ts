import { readdir } from "node:fs/promises";
import path from "node:path";
import type { ComponentType } from "react";

const BLOG_DIRECTORY = path.join(process.cwd(), "content/blog");

export type BlogPostMetadata = {
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
};

export type BlogPost = BlogPostMetadata & {
  slug: string;
  Content: ComponentType;
};

type BlogPostModule = {
  default: ComponentType;
  metadata: BlogPostMetadata;
};

export async function getBlogSlugs() {
  const files = await readdir(BLOG_DIRECTORY);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return null;
  }

  try {
    const post = (await import(`@/content/blog/${slug}.mdx`)) as BlogPostModule;

    return {
      slug,
      ...post.metadata,
      Content: post.default,
    };
  } catch {
    return null;
  }
}

export async function getBlogPosts() {
  const slugs = await getBlogSlugs();
  const posts = await Promise.all(slugs.map((slug) => getBlogPost(slug)));

  return posts
    .filter((post): post is BlogPost => post !== null)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}
