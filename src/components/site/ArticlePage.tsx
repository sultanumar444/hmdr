import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { SiteLayout, Section, PageHeader } from "./Layout";
import { Breadcrumbs, breadcrumbJsonLd, type Crumb } from "./Breadcrumbs";
import { ContactCTA, ReviewedLabel } from "./CTA";
import { jsonLdScript } from "./JsonLd";
import { faqJsonLd, FAQ, type FAQItem } from "./FAQ";

export type RelatedLink = { to: string; label: string; params?: Record<string, string> };

export function ArticlePage({
  eyebrow,
  title,
  intro,
  crumbs,
  crumbUrls,
  children,
  faqs,
  related,
  hideCTA,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  crumbs: Crumb[];
  crumbUrls: { label: string; url: string }[];
  children: ReactNode;
  faqs?: FAQItem[];
  related?: RelatedLink[];
  hideCTA?: boolean;
}) {
  return (
    <SiteLayout>
      <Breadcrumbs items={crumbs} />
      <Section className="pt-6">
        <PageHeader eyebrow={eyebrow} title={title} intro={intro} />
      </Section>
      <Section>
        <div className="grid gap-10 md:grid-cols-3">
          <article className="md:col-span-2 space-y-5 text-[15px] leading-relaxed text-foreground/90">
            {children}
          </article>
          <aside className="space-y-4 text-sm">
            {related && related.length > 0 ? (
              <div className="rounded-xl border border-border bg-card p-5">
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Related</div>
                <ul className="mt-3 space-y-2">
                  {related.map((r, i) => (
                    <li key={i}>
                      {r.params ? (
                        <Link
                          to={r.to as any}
                          params={r.params as any}
                          className="text-foreground/90 hover:text-foreground hover:underline"
                        >
                          {r.label}
                        </Link>
                      ) : (
                        <Link to={r.to as any} className="text-foreground/90 hover:text-foreground hover:underline">
                          {r.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>
      </Section>
      {faqs && faqs.length > 0 ? (
        <Section>
          <FAQ items={faqs} />
        </Section>
      ) : null}
      {!hideCTA ? (
        <Section>
          <ContactCTA />
          <ReviewedLabel />
        </Section>
      ) : null}
      <BreadcrumbLd items={crumbUrls} />
    </SiteLayout>
  );
}

function BreadcrumbLd({ items }: { items: { label: string; url: string }[] }) {
  // Rendered by head() scripts normally; this is a no-op JSX helper kept for API symmetry.
  void items;
  return null;
}

export function buildArticleHeadScripts(
  crumbUrls: { label: string; url: string }[],
  faqs?: FAQItem[],
) {
  const scripts = [jsonLdScript(breadcrumbJsonLd(crumbUrls))];
  if (faqs && faqs.length > 0) {
    scripts.push(
      jsonLdScript(
        faqJsonLd(
          faqs.map((f) => ({
            q: f.q,
            a: typeof f.a === "string" ? f.a : "",
          })),
        ),
      ),
    );
  }
  return scripts;
}
