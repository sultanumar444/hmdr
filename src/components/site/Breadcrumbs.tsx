// Legacy Breadcrumbs API. The visible breadcrumb now renders inside the
// PageHeader hero bar, so this component intentionally returns null.
// The `breadcrumbJsonLd` helper below is still used by route heads for schema.
export type Crumb = { label: string; to?: string };

export function Breadcrumbs(_props: { items: Crumb[] }) {
  return null;
}

export function breadcrumbJsonLd(items: { label: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      item: it.url,
    })),
  };
}
