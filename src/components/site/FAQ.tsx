import type { ReactNode } from "react";

export type FAQItem = { q: string; a: ReactNode };

export function FAQ({ items, title = "Frequently asked questions" }: { items: FAQItem[]; title?: string }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <dl className="mt-6 divide-y divide-border rounded-lg border border-border bg-card">
        {items.map((it, i) => (
          <details key={i} className="group p-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-medium text-foreground">
              <span>{it.q}</span>
              <span className="mt-1 text-muted-foreground transition-transform group-open:rotate-45">+</span>
            </summary>
            <dd className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{it.a}</dd>
          </details>
        ))}
      </dl>
    </div>
  );
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}
