import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteLayout, Section, PageHeader } from "@/components/site/Layout";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { ReviewedLabel } from "@/components/site/CTA";
import { buildHead } from "@/lib/seo";
import { jsonLdScript } from "@/components/site/JsonLd";
import { glossary } from "@/lib/site-data";

const path = "/research-glossary";

export const Route = createFileRoute("/research-glossary")({
  head: () => ({
    ...buildHead({
      title: "Clinical Research Glossary",
      description: "Plain-language definitions for common clinical research terms — from adverse events to randomization and informed consent.",
      path,
    }),
    scripts: [jsonLdScript(breadcrumbJsonLd([
      { label: "Home", url: "/" },
      { label: "Research Glossary", url: path },
    ]))],
  }),
  component: Page,
});

function Page() {
  const [query, setQuery] = useState("");
  const grouped = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = q
      ? glossary.filter(
          (g) =>
            g.term.toLowerCase().includes(q) || g.definition.toLowerCase().includes(q),
        )
      : glossary;
    const map = new Map<string, typeof glossary>();
    for (const item of filtered) {
      const letter = item.term[0].toUpperCase();
      if (!map.has(letter)) map.set(letter, []);
      map.get(letter)!.push(item);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [query]);

  return (
    <SiteLayout>
      <Breadcrumbs items={[{ label: "Research Glossary" }]} />
      <Section className="pt-6">
        <PageHeader
          title="Clinical Research Glossary"
          intro="Plain-language definitions for common terms you may hear in a clinical trial."
        />
      </Section>
      <Section>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <input
            type="search"
            placeholder="Search terms…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm md:max-w-sm"
          />
          <nav className="flex flex-wrap gap-1 text-sm">
            {grouped.map(([letter]) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="rounded-md border border-border bg-card px-2 py-1 text-muted-foreground hover:text-foreground"
              >
                {letter}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 space-y-8">
          {grouped.map(([letter, items]) => (
            <div key={letter} id={`letter-${letter}`}>
              <h2 className="text-xl font-semibold">{letter}</h2>
              <dl className="mt-3 divide-y divide-border rounded-lg border border-border bg-card">
                {items.map((it) => (
                  <div key={it.term} className="p-4">
                    <dt className="font-medium">{it.term}</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">{it.definition}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
        <ReviewedLabel />
      </Section>
    </SiteLayout>
  );
}
