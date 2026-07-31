import { createServerFn } from "@tanstack/react-start";

export type FeedItem = {
  title: string;
  link: string;
  source: string;
  date: string | null;
};

const FEEDS = [
  { source: "FDA Press Announcements", url: "https://www.fda.gov/about-fda/contact-fda/stay-informed/rss-feeds/press-releases/rss.xml" },
  { source: "NIH Research News", url: "https://www.nih.gov/news-events/news-releases/feed.xml" },
  { source: "ClinicalTrials.gov Updates", url: "https://clinicaltrials.gov/api/rss?cond=&locStr=Orlando%2C+Florida&dateField=StudyFirstPostDate" },
];

function decode(v: string) {
  return v
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .trim();
}

function tag(block: string, name: string) {
  const m = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, "i"));
  return m ? decode(m[1]) : "";
}

function parseFeed(xml: string, source: string): FeedItem[] {
  const blocks = xml.match(/<(item|entry)[\s\S]*?<\/(item|entry)>/gi) ?? [];
  return blocks.slice(0, 8).map((b) => {
    const linkTag = tag(b, "link");
    const href = linkTag || (b.match(/<link[^>]*href="([^"]+)"/i)?.[1] ?? "");
    return {
      title: tag(b, "title"),
      link: href,
      source,
      date: tag(b, "pubDate") || tag(b, "updated") || tag(b, "published") || null,
    };
  }).filter((i) => i.title && i.link);
}

export const getIndustryNews = createServerFn({ method: "GET" }).handler(async (): Promise<FeedItem[]> => {
  const results = await Promise.all(
    FEEDS.map(async (f) => {
      try {
        const res = await fetch(f.url, {
          headers: { "user-agent": "HMD-Research-Site/1.0", accept: "application/rss+xml, application/xml, text/xml" },
          signal: AbortSignal.timeout(6000),
        });
        if (!res.ok) return [];
        return parseFeed(await res.text(), f.source);
      } catch {
        return [];
      }
    }),
  );

  const items = results.flat();
  items.sort((a, b) => {
    const ta = a.date ? Date.parse(a.date) : 0;
    const tb = b.date ? Date.parse(b.date) : 0;
    return tb - ta;
  });
  return items.slice(0, 12);
});
