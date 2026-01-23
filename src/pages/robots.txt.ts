import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  const sitemap = new URL("/sitemap-index.xml", import.meta.env.SITE);

  return new Response(`User-agent: *
Allow: /

Sitemap: ${sitemap}
`);
};
