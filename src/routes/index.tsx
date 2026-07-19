import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, PageHeader } from "@/components/site/Layout";
import { ContactCTA, EmptyStudies } from "@/components/site/CTA";
import { FAQ, faqJsonLd } from "@/components/site/FAQ";
import { buildHead } from "@/lib/seo";
import { jsonLdScript } from "@/components/site/JsonLd";
import { areasServed, business, researchCategories, studies } from "@/lib/site-data";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: business.name,
  areaServed: "Orlando, Florida and Central Florida",
  medicalSpecialty: "Clinical Research",
};

const homeFaqs = [
  { q: "Where is Heuer M.D. Research located?", a: `${business.name} is located in ${business.city}, ${business.regionShort}. Detailed address and directions are available on the Orlando location page once verified.` },
  { q: "How do I find a clinical trial in Orlando?", a: "You can review currently recruiting studies on the Orlando clinical research page, or contact the team to be notified when a relevant study opens." },
  { q: "Is compensation offered for participation?", a: "Some studies may offer compensation for time and travel. It varies by study and is not guaranteed. The research team can explain the specifics before enrollment." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    ...buildHead({
      title: `${business.name} | Clinical Trials in Orlando, FL`,
      description:
        "Explore physician-led clinical trials in Orlando and professional expert-witness, regulatory and clinical-research consulting services.",
      path: "/",
    }),
    scripts: [jsonLdScript(orgJsonLd), jsonLdScript(faqJsonLd(homeFaqs.map((f) => ({ q: f.q, a: f.a }))))],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
              Physician-led · {business.city}, {business.regionShort}
            </div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Clinical research and clinical trials in Orlando, Florida
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              {business.name} connects eligible participants across Central Florida with
              physician-led clinical research, and supports sponsors, CROs and legal teams
              with regulatory and expert-witness expertise.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/orlando-clinical-research"
                className="inline-flex items-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Explore Orlando studies
              </Link>
              <Link
                to="/clinical-trials/how-clinical-trials-work"
                className="inline-flex items-center rounded-md border border-input bg-background px-4 py-2.5 text-sm font-medium hover:bg-accent"
              >
                How clinical trials work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <Section>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { to: "/orlando-clinical-research", title: "Orlando Clinical Research", body: "Learn about studies recruiting in Orlando and Central Florida." },
            { to: "/locations/orlando", title: "Orlando Location", body: "Directions, hours and how to reach the research team." },
            { to: "/patient-resources", title: "Patient Resources", body: "Guides that explain eligibility, safety and what to expect." },
          ].map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-foreground/20"
            >
              <div className="text-base font-semibold group-hover:text-foreground">{c.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Current studies */}
      <Section>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Currently recruiting studies</h2>
            <p className="mt-2 text-muted-foreground">Studies open to new participants in Orlando and surrounding areas.</p>
          </div>
          <Link to="/orlando-clinical-research" className="hidden text-sm font-medium underline-offset-4 hover:underline md:inline">
            View all Orlando studies
          </Link>
        </div>
        <div className="mt-6">
          {studies.length === 0 ? <EmptyStudies /> : null}
        </div>
      </Section>

      {/* Research categories */}
      <Section>
        <h2 className="text-2xl font-semibold tracking-tight">Research experience</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Selected areas where the {business.name} team has conducted research.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {researchCategories.slice(0, 6).map((cat) => (
            <Link
              key={cat.slug}
              to="/research-experience/$category"
              params={{ category: cat.slug }}
              className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/20"
            >
              <div className="font-semibold">{cat.name}</div>
              <p className="mt-2 text-sm text-muted-foreground">{cat.summary}</p>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link to="/research-experience" className="text-sm font-medium underline-offset-4 hover:underline">
            Explore all research categories →
          </Link>
        </div>
      </Section>

      {/* Professional services */}
      <Section>
        <h2 className="text-2xl font-semibold tracking-tight">For sponsors, attorneys and healthcare professionals</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { to: "/for-sponsors-and-cros", title: "Sponsors & CROs", body: "Site capabilities, therapeutic experience and study startup support." },
            { to: "/for-attorneys", title: "Attorneys", body: "Medical, regulatory and product-claim expertise for legal teams." },
            { to: "/for-healthcare-professionals", title: "Healthcare Professionals", body: "Refer patients or collaborate on research opportunities." },
          ].map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-foreground/20"
              data-cta="professional-service-click"
            >
              <div className="text-base font-semibold">{c.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Areas served */}
      <Section>
        <h2 className="text-2xl font-semibold tracking-tight">Serving Orlando and Central Florida</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Participants often travel to the Orlando research site from surrounding communities.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2 text-sm">
          {areasServed.map((a) => (
            <li key={a} className="rounded-full border border-border bg-card px-3 py-1 text-muted-foreground">
              {a}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <FAQ items={homeFaqs} />
      </Section>

      <Section>
        <ContactCTA />
      </Section>
    </SiteLayout>
  );
}
