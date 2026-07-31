import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, PageHeader, RelatedLinks } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ContactCTA } from "@/components/site/CTA";
import { buildHead } from "@/lib/seo";
import { business, currentTrials } from "@/lib/site-data";

export const Route = createFileRoute("/current-studies")({
  head: () => buildHead({
    title: `Current Studies | ${business.name}`,
    description: `Currently recruiting clinical studies at ${business.name} in ${business.city}, ${business.regionShort}. Review eligibility and request more information.`,
    path: "/current-studies",
  }),
  component: CurrentStudiesPage,
});

function CurrentStudiesPage() {
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ label: "Current Studies" }]} />
      <Section className="pt-6">
        <PageHeader
          eyebrow="Now Recruiting"
          title="Current Clinical Studies"
          intro={`Active clinical trials currently enrolling participants at our ${business.city} research center. Select a study to review who may qualify and what to expect.`}
        />
      </Section>

      <Section>
        {currentTrials.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border bg-card p-10 text-center">
            <h2 className="text-xl font-semibold">No studies currently recruiting</h2>
            <p className="mt-2 text-muted-foreground">
              New studies open regularly. Contact us to be considered for upcoming trials.
            </p>
            <Link to="/contact" className="mt-4 inline-block rounded-md bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground">
              Contact the research team
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {currentTrials.slice(0, 6).map((t) => (
              <Link
                key={t.slug}
                to="/clinical-trials/studies/$slug"
                params={{ slug: t.slug }}
                className="group overflow-hidden rounded-xl border border-border bg-card transition hover:border-foreground/20 hover:shadow-md"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img src={t.image} alt={t.name} className="h-full w-full object-cover transition group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="inline-flex items-center rounded-full bg-secondary/15 px-2.5 py-0.5 text-xs font-semibold text-secondary">
                    Recruiting
                  </div>
                  <div className="mt-2 text-lg font-semibold group-hover:text-foreground">{t.name}</div>
                  {t.shortSummary ? (
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{t.shortSummary}</p>
                  ) : null}
                  <div className="mt-4 text-sm font-medium text-primary group-hover:underline">Learn more →</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Section>

      <Section>
        <RelatedLinks
          links={[
            { to: "/clinical-trials/clinical-trial-eligibility", label: "Eligibility criteria", desc: "Who qualifies to join a study." },
            { to: "/clinical-trials/what-to-expect", label: "What to expect", desc: "Timeline for a typical study visit." },
            { to: "/clinical-trials/clinical-trial-compensation", label: "Compensation", desc: "How time & travel may be reimbursed." },
          ]}
        />
      </Section>

      <Section><ContactCTA /></Section>
    </SiteLayout>
  );
}
