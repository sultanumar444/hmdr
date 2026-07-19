import { createFileRoute } from "@tanstack/react-router";

const path = "/sitemap.xml";

const staticPaths = [
  "/",
  "/orlando-clinical-research",
  "/locations/orlando",
  "/clinical-trials/how-clinical-trials-work",
  "/clinical-trials/clinical-trial-eligibility",
  "/clinical-trials/clinical-trial-compensation",
  "/clinical-trials/clinical-trial-safety",
  "/clinical-trials/what-to-expect",
  "/clinical-trials/participant-faq",
  "/clinical-trials/healthy-volunteer-studies",
  "/research-experience",
  "/for-sponsors-and-cros",
  "/for-attorneys",
  "/for-healthcare-professionals",
  "/patient-resources",
  "/research-glossary",
  "/blog",
  "/privacy-policy",
  "/terms-of-use",
  "/accessibility",
  "/medical-disclaimer",
];

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

export const Route = createFileRoute("/sitemap[.]xml")({
  server: {
    handlers: {
      GET: async () => {
        const { researchCategories, blogPosts } = await import("@/lib/site-data");
        const all: string[] = [
          ...staticPaths,
          ...researchCategories.map((c) => `/research-experience/${c.slug}`),
          ...blogPosts.map((p) => `/blog/${p.slug}`),
        ];
        const urls = all
          .map(
            (p) =>
              `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
void path;
