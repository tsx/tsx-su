import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from "@/consts";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = await getCollection("blog");

  const sortedPosts = posts
    .sort((a, b) => {
      const dateA = a.slug.match(/^(\d{4}-\d{2}-\d{2})/)?.[1] ?? "";
      const dateB = b.slug.match(/^(\d{4}-\d{2}-\d{2})/)?.[1] ?? "";
      return dateB.localeCompare(dateA);
    })
    .slice(0, 10);

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site ?? SITE_URL,
    items: sortedPosts.map((post) => {
      const dateMatch = post.slug.match(/^(\d{4}-\d{2}-\d{2})/);
      const pubDate = dateMatch ? new Date(dateMatch[1]!) : new Date();
      const urlSlug = post.slug.replace(/^\d{4}-\d{2}-\d{2}-/, "");

      return {
        title: post.data.title,
        pubDate,
        link: `/${urlSlug}/`,
        description: post.data.excerpt,
        categories: post.data.category ? [post.data.category] : [],
      };
    }),
  });
}
