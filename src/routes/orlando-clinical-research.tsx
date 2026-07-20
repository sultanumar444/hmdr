import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, PageHeader, RelatedLinks } from "@/components/site/Layout";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { ContactCTA, EmptyStudies, InterestForm, ReviewedLabel } from "@/components/site/CTA";
import { FAQ, faqJsonLd } from "@/components/site/FAQ";
import { buildHead } from "@/lib/seo";
import { jsonLdScript } from "@/components/site/JsonLd";
import { areasServed, business, researchCategories, studies } from "@/lib/site-data";
import orlandoImg from "@/assets/orlando-office.jpg";


const faqs = [
  { q: "Where is Heuer M.D. Research located in Orlando?", a: "The research center is based in Orlando, Florida. Detailed directions are available on the Orlando location page." },
  { q: "How can I find clinical trials near me in Orlando?", a: "You can review currently recruiting studies on this page or contact the team directly. New opportunities are added as they open." },
  { q: "Are clinical trials available to residents outside Orlando?", a: "Yes. Participants regularly travel from surrounding Central Florida communities. Some studies have distance-based requirements — the research team can review specifics with you." },
  { q: "Do I need a physician referral?", a: "A referral is not usually required. You can contact the research team directly to ask about a study." },
  { q: "How do I contact the Orlando research team?", a: "Use the study interest form on this page or the contact options on the Orlando location page." },
  { q: "What areas of Central Florida does the research center serve?", a: "The center welcomes participants from Orlando and surrounding areas including Winter Park, Maitland, Altamonte Springs, Kissimmee, Lake Mary, Sanford, Oviedo and Winter Garden." },
];

export const Route = createFileRoute("/orlando-clinical-research")({
  head: () => ({
    ...buildHead({
      title: "Clinical Trials in Orlando, Florida",
      description:
        "Physician-led clinical research and clinical trials in Orlando and Central Florida. Learn what participation involves and speak with the local research team.",
      path: "/orlando-clinical-research",
    }),
    scripts: [
      jsonLdScript(faqJsonLd(faqs.map((f) => ({ q: f.q, a: f.a })))),
      jsonLdScript(breadcrumbJsonLd([
        { label: "Home", url: "/" },
        { label: "Orlando Clinical Research", url: "/orlando-clinical-research" },
      ])),
    ],
  }),
  component: OrlandoCR,
});

function OrlandoCR() {
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ label: "Orlando Clinical Research" }]} />
      <Section className="pt-6">
        <PageHeader
          eyebrow={`${business.city}, ${business.regionShort}`}
          title="Clinical Research and Clinical Trials in Orlando, Florida"
          intro={`${business.name} connects eligible participants in Orlando and surrounding Central Florida communities with physician-led clinical research opportunities. Visitors can explore currently recruiting studies, learn what participation involves and speak directly with the local research team.`}
        />
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <img src={orlandoImg} alt="Heuer M.D. Research Orlando office" loading="lazy" width={1600} height={1000} className="rounded-2xl border border-border object-cover shadow-md" />
          <div>
            <div className="text-xs font-medium uppercase tracking-widest text-secondary">Central Florida</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">A physician-led clinical research center in Orlando</h2>
            <p className="mt-3 text-muted-foreground">
              Our Orlando site is a purpose-built clinical research center serving Greater Orlando, Winter Park, Kissimmee, Lake Mary, and the wider Central Florida region. We recruit participants for pharmaceutical, dietary-supplement and consumer-health research across a wide range of therapeutic areas.
            </p>
            <p className="mt-3 text-muted-foreground">
              Every study is conducted under an ethics-committee-reviewed protocol with informed consent. Study-related visits and procedures are provided at no cost to participants.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold tracking-tight">Currently recruiting studies</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Studies listed below are open to new participants. Enrollment for any specific study is not guaranteed.
        </p>
        <div className="mt-6">
          {studies.length === 0 ? <EmptyStudies /> : null}
        </div>
      </Section>


      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">What participation involves</h2>
            <p className="mt-3 text-muted-foreground">
              Every study is different, but most follow a similar pattern: a phone prescreen, an initial visit, informed consent, eligibility procedures and scheduled follow-up.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>· Voluntary participation with the right to withdraw at any time</li>
              <li>· Study-related visits and procedures at no cost to the participant</li>
              <li>· Ethics-committee reviewed protocols and informed consent</li>
              <li>· Compensation for time and travel when the study offers it</li>
            </ul>
            <div className="mt-5">
              <Link to="/clinical-trials/what-to-expect" className="text-sm font-medium underline-offset-4 hover:underline">
                Read what to expect step by step →
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Why Orlando participants choose the center</h2>
            <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
              <li>· Physician-led team with experience across multiple research areas</li>
              <li>· Clear, unhurried informed-consent conversations</li>
              <li>· Local Orlando location convenient to Central Florida residents</li>
              <li>· Respect for participant time, privacy and questions</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold tracking-tight">Physician and research team</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Studies at {business.name} are led by {business.physician} and supported by an experienced clinical research team including coordinators trained in Good Clinical Practice. The physician-led approach means participants speak with clinicians who can answer medical questions in plain language.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold tracking-tight">Research categories</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {researchCategories.map((c) => (
            <Link
              key={c.slug}
              to="/research-experience/$category"
              params={{ category: c.slug }}
              className="rounded-lg border border-border bg-card p-4 text-sm transition-colors hover:border-foreground/20"
            >
              <div className="font-medium">{c.name}</div>
              <div className="mt-1 text-muted-foreground">{c.summary}</div>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Directions and local map</h2>
            <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl border border-dashed border-border bg-muted/40">
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                Map placeholder — verified address required
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              A verified map and Get Directions button will appear here once the location is confirmed.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Office hours</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              {business.hours ?? "Office hours will be published once verified. Please contact the team to schedule."}
            </p>
            <h3 className="mt-6 font-medium">Parking and arrival</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {business.parking ?? "Parking and arrival information will be added once verified."}
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold tracking-tight">Greater Orlando service area</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Participants often travel to the Orlando research site from a wide range of nearby communities.
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
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-3">
            <FAQ items={faqs} title="Local clinical-trial FAQ" />
          </div>
          <div className="md:col-span-2">
            <InterestForm variant="participant" />
            <div className="mt-6">
              <Link to="/patient-resources" className="text-sm font-medium underline-offset-4 hover:underline">
                Browse participant education resources →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <ContactCTA />
        <ReviewedLabel />
      </Section>
    </SiteLayout>
  );
}
