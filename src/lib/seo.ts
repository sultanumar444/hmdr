import { business } from "./site-data";

export type SeoInput = {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
  noindex?: boolean;
};

export function buildHead({ title, description, path, ogType = "website", noindex }: SeoInput) {
  const fullTitle = title.includes(business.name) ? title : `${title} | ${business.name}`;
  const meta: Array<Record<string, string>> = [
    { title: fullTitle },
    { name: "description", content: description },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:type", content: ogType },
    { property: "og:url", content: path },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
  ];
  if (noindex) meta.push({ name: "robots", content: "noindex, nofollow" });
  return {
    meta,
    links: [{ rel: "canonical", href: path }],
  };
}
