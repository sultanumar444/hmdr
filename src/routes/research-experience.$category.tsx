import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout, Section, PageHeader } from "@/components/site/Layout";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { ContactCTA, EmptyStudies, ReviewedLabel } from "@/components/site/CTA";
import { FAQ, faqJsonLd } from "@/components/site/FAQ";
import { buildHead } from "@/lib/seo";
import { jsonLdScript } from "@/components/site/JsonLd";
import { researchCategories, studies } from "@/lib/site-data";

const faqs = [
  { q: "Does past experience mean a study is currently recruiting?", a: "No. Past experience describes areas the research team has worked in; it does not imply active enrollment. Current opportunities are listed on the Orlando clinical research page." },
  { q: "Can sponsors ask for details on prior work?", a: "Yes. Sponsors and CROs are welcome to contact the team to discuss experience relevant to a specific opportunity." },
];

export const Route = createFileRoute("/research-experience/$category")({
  loader: ({ params }) => {
    const cat = researchCategories.find((c) => c.slug === params.category);
    if (!cat) throw notFound();
    return cat;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Not found" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const path = `/research-experience/${params.category}`;
    return {
      ...buildHead({
        title: `${loaderData.name} Research Experience`,
        description: `Research experience in ${loaderData.name.toLowerCase()} — ${loaderData.summary}`,
        path,
      }),
      scripts: [
        jsonLdScript(faqJsonLd(faqs)),
        jsonLdScript(breadcrumbJsonLd([
          { label: "Home", url: "/" },
          { label: "Research Experience", url: "/research-experience" },
          { label: loaderData.name, url: path },
        ])),
      ],
    };
  },
  component: Page,
});

function Page() {
  const cat = Route.useLoaderData();
  const current = studies.filter((s) => s.category === cat.slug);
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ label: "Research Experience", to: "/research-experience" }, { label: cat.name }]} />
      <Section className="pt-6">
        <PageHeader eyebrow="Research category" title={`${cat.name} Research`} intro={cat.summary} />
      </Section>
      <Section>
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6 text-[15px] leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold">Examples of relevant research areas</h2>
              <ul className="mt-3 list-disc space-y-1 pl-6 text-muted-foreground">
                {cat.areas.map((a: string) => <li key={a}>{a}</li>)}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Physician and team experience</h2>
              <p className="mt-3 text-muted-foreground">
                The Heuer M.D. Research team has clinical and product-research experience in {cat.name.toLowerCase()}. Prior experience is described here for context and does not imply active recruitment in every area.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Current studies in this category</h2>
              <div className="mt-3">
                {current.length === 0 ? (
                  <EmptyStudies note={`No ${cat.name.toLowerCase()} studies are currently listed. Contact the Orlando team to be notified when one opens.`} />
                ) : null}
              </div>
            </div>
          </div>
          <aside className="space-y-4 text-sm">
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Related</div>
              <ul className="mt-3 space-y-2">
                <li><Link to="/for-sponsors-and-cros" className="hover:underline">Sponsor & CRO consulting</Link></li>
                <li><Link to="/for-attorneys" className="hover:underline">Attorney consulting</Link></li>
                <li><Link to="/orlando-clinical-research" className="hover:underline">Orlando clinical research</Link></li>
                <li><Link to="/research-experience" className="hover:underline">All research categories</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>
      <Section>
        <FAQ items={faqs} />
      </Section>
      <Section>
        <ContactCTA heading="Discuss a research opportunity" body={`Speak with the team about ${cat.name.toLowerCase()} research experience.`} />
        <ReviewedLabel />
      </Section>
    </SiteLayout>
  );
}
