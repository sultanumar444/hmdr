import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, PageHeader } from "@/components/site/Layout";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { ContactCTA, ReviewedLabel } from "@/components/site/CTA";
import { buildHead } from "@/lib/seo";
import { jsonLdScript } from "@/components/site/JsonLd";

const path = "/patient-resources";

const cards = [
  { to: "/clinical-trials/how-clinical-trials-work", title: "How Clinical Trials Work", desc: "A plain-language overview." },
  { to: "/clinical-trials/clinical-trial-eligibility", title: "Eligibility", desc: "How criteria are set and why they matter." },
  { to: "/clinical-trials/clinical-trial-safety", title: "Safety", desc: "Informed consent, ethics review and participant rights." },
  { to: "/clinical-trials/clinical-trial-compensation", title: "Compensation", desc: "How compensation typically works — and its limits." },
  { to: "/clinical-trials/what-to-expect", title: "What to Expect", desc: "Step-by-step overview of the participant journey." },
  { to: "/clinical-trials/participant-faq", title: "Participant FAQ", desc: "Common questions asked by potential participants." },
  { to: "/clinical-trials/healthy-volunteer-studies", title: "Healthy Volunteer Studies", desc: "What healthy-volunteer research involves." },
  { to: "/orlando-clinical-research", title: "Current Orlando Studies", desc: "Studies recruiting in Orlando and Central Florida." },
  { to: "/locations/orlando", title: "Contact the Research Team", desc: "Location, hours and contact options." },
];

const downloads = [
  "Clinical Trial Questions Checklist",
  "Screening Visit Checklist",
  "Clinical Research Terms Guide",
  "Participant Rights Overview",
];

export const Route = createFileRoute("/patient-resources")({
  head: () => ({
    ...buildHead({
      title: "Patient Resources for Clinical Trial Participants",
      description: "Educational resources for patients considering clinical trial participation, including eligibility, safety, compensation and what to expect.",
      path,
    }),
    scripts: [jsonLdScript(breadcrumbJsonLd([
      { label: "Home", url: "/" },
      { label: "Patient Resources", url: path },
    ]))],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ label: "Patient Resources" }]} />
      <Section className="pt-6">
        <PageHeader
          title="Patient Resources"
          intro="Plain-language guides for people considering clinical trial participation. Written for participants, not researchers."
        />
      </Section>
      <Section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/20"
            >
              <div className="font-semibold">{c.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </Link>
          ))}
        </div>
      </Section>
      <Section>
        <h2 className="text-2xl font-semibold tracking-tight">Downloadable resources</h2>
        <p className="mt-2 text-muted-foreground">Placeholders for participant-friendly guides.</p>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {downloads.map((d) => (
            <div key={d} className="flex items-center justify-between rounded-lg border border-dashed border-border bg-muted/30 p-4">
              <div className="text-sm font-medium">{d}</div>
              <button
                type="button"
                data-cta="resource-download"
                className="rounded-md border border-input bg-background px-3 py-1.5 text-sm hover:bg-accent"
              >
                Download
              </button>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <ContactCTA />
        <ReviewedLabel />
      </Section>
    </SiteLayout>
  );
}
