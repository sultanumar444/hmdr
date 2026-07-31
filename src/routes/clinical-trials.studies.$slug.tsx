import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout, Section, PageHeader, RelatedLinks } from "@/components/site/Layout";
import { ContactCTA, InterestForm } from "@/components/site/CTA";
import { buildHead } from "@/lib/seo";
import { findTrial, currentTrials } from "@/lib/site-data";

export const Route = createFileRoute("/clinical-trials/studies/$slug")({
  loader: ({ params }) => {
    const trial = findTrial(params.slug);
    if (!trial) throw notFound();
    return { trial };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Study Not Found | HMD Research" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const t = loaderData.trial;
    return buildHead({
      title: `${t.name} Clinical Trial in Orlando`,
      description: t.shortSummary,
      path: `/clinical-trials/studies/${t.slug}`,
      ogType: "article",
    });
  },
  component: StudyDetailPage,
  notFoundComponent: NotFound,
});

function NotFound() {
  return (
    <SiteLayout>
      <Section className="pt-6">
        <PageHeader
          eyebrow="Clinical Trials"
          title="Study not found"
          intro="This study does not match any current or completed trial in our records."
        />
      </Section>
      <Section>
        <Link to="/clinical-trials" className="text-primary hover:underline">← Back to all studies</Link>
      </Section>
    </SiteLayout>
  );
}

function StudyDetailPage() {
  const { trial } = Route.useLoaderData();
  const isRecruiting = trial.status === "recruiting";

  return (
    <SiteLayout>
      <Section className="pt-6">
        <PageHeader
          eyebrow={isRecruiting ? "Currently Recruiting" : "Completed Study"}
          title={`${trial.name} Clinical Trial`}
          intro={trial.shortSummary}
          image={trial.image}
        />
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-3">
          <article className="md:col-span-2 space-y-8 text-[15px] leading-relaxed text-foreground/90">
            <div className="overflow-hidden rounded-xl border border-border">
              <img src={trial.image} alt={trial.name} className="h-72 w-full object-cover" />
            </div>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">About this study</h2>
              <p className="mt-3">{trial.about}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Who may qualify</h2>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                {trial.whoMayQualify.map((c: string) => <li key={c}>{c}</li>)}
              </ul>
              <p className="mt-3 text-sm text-muted-foreground">
                Final eligibility is determined during prescreening and the in-person screening visit. Enrollment
                in any specific study is never guaranteed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">What to expect</h2>
              <ol className="mt-3 list-decimal space-y-1 pl-6">
                {trial.whatToExpect.map((s: string) => <li key={s}>{s}</li>)}
              </ol>
            </section>

            {trial.compensationNote ? (
              <section className="rounded-xl border border-border bg-muted/40 p-5">
                <h3 className="font-semibold">Compensation</h3>
                <p className="mt-2 text-sm text-muted-foreground">{trial.compensationNote}</p>
              </section>
            ) : null}

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Location</h2>
              <p className="mt-3">
                All study visits take place at HMD Research, 6001 Vineland Road, Suite 104, Orlando, FL 32819.
              </p>
            </section>
          </article>

          <aside className="space-y-6">
            <div className={`rounded-xl border p-5 ${isRecruiting ? "border-primary/40 bg-primary/5" : "border-border bg-muted/30"}`}>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Status</div>
              <div className="mt-1 text-lg font-semibold">
                {isRecruiting ? "Currently Recruiting" : "Completed"}
              </div>
              {isRecruiting ? (
                <>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Interested in this study? Reach out to our Orlando research team for a prescreening conversation.
                  </p>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                  >
                    Ask about this study
                  </Link>
                </>
              ) : (
                <p className="mt-3 text-sm text-muted-foreground">
                  Enrollment for this study has closed. Contact us to hear about future opportunities in this area.
                </p>
              )}
            </div>

            <InterestForm />
          </aside>
        </div>
      </Section>

      <RelatedLinks
        heading="Other currently recruiting studies"
        links={currentTrials
          .filter((t) => t.slug !== trial.slug)
          .slice(0, 6)
          .map((t) => ({
            to: "/clinical-trials/studies/$slug" as const,
            params: { slug: t.slug },
            label: t.name,
            desc: t.shortSummary,
          }))}
      />

      <Section>
        <ContactCTA />
      </Section>
    </SiteLayout>
  );
}
