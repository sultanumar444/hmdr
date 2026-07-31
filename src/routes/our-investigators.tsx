import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, PageHeader, Prose, RelatedLinks } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ContactCTA } from "@/components/site/CTA";
import { buildHead } from "@/lib/seo";
import { business, images } from "@/lib/site-data";
import teamImg from "@/assets/team-collaboration.jpg";

export const Route = createFileRoute("/our-investigators")({
  head: () => buildHead({
    title: `Our Investigators | ${business.name}`,
    description: `Meet the principal investigator and research team at ${business.name} — physician-led clinical trials in ${business.city}, ${business.regionShort}.`,
    path: "/our-investigators",
  }),
  component: InvestigatorsPage,
});

const credentials = [
  "40+ years of medical practice experience",
  "25+ years of clinical research leadership",
  "Board-certified Family Physician (FAAFP)",
  "Former Chief Medical Officer roles in nutraceutical and pharmaceutical industry",
  "Published author and international lecturer on clinical research",
  "Expert witness in dietary supplement and pharmaceutical litigation",
];

const focusAreas = [
  "Anti-Infectives & Vaccines",
  "Cardiology & Metabolic",
  "Dermatology",
  "Endocrinology (Diabetes)",
  "Gastroenterology",
  "Internal Medicine",
  "Musculoskeletal",
  "Nutrition & Dietary Supplements",
  "OB/GYN & Women's Health",
  "Pediatrics",
  "Respiratory (Asthma, COPD)",
];

function InvestigatorsPage() {
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ label: "Our Investigators" }]} />
      <Section className="pt-6">
        <PageHeader
          eyebrow="Our Team"
          title="Our Investigators"
          intro="Physician-led clinical research guided by decades of therapeutic-area expertise and a professional research staff."
        />
      </Section>

      {/* Principal Investigator */}
      <Section>
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
          <div>
            <img
              src={images.doctorPortrait}
              alt={business.physician}
              className="w-full rounded-2xl border border-border object-cover shadow-md"
            />
            <div className="mt-4 rounded-xl border border-border bg-card p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-secondary">Principal Investigator</div>
              <div className="mt-1 text-lg font-semibold">{business.physician}</div>
              <div className="mt-1 text-sm text-muted-foreground">Medical Director · {business.name}</div>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-secondary">Meet the Doctor</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">{business.physician}</h2>
            <Prose>
              <p>
                {business.physician} is an internationally recognized research physician with more than
                40 years of experience in the medical field and 25 years leading clinical research programs.
                He founded {business.name} to bring rigorously conducted, physician-led clinical trials to
                the {business.city} community and to serve as a trusted authority for sponsors, attorneys
                and healthcare professionals seeking research and regulatory expertise.
              </p>
              <p>
                As Principal Investigator, Dr. Heuer personally oversees study design review, informed consent,
                participant safety and data integrity. His broad therapeutic-area exposure — from anti-infectives
                and dermatology to endocrinology, gastroenterology and nutritional science — has contributed to
                more than 100 funded research projects during his career.
              </p>
              <p>
                Beyond active investigation, Dr. Heuer provides expert witness testimony in matters involving
                dietary supplements, pharmaceutical safety and clinical research standards, and advises
                organizations on regulatory strategy and product development.
              </p>
            </Prose>

            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {credentials.map((c) => (
                <div key={c} className="flex items-start gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm">
                  <span aria-hidden className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                  <span>{c}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/about" className="inline-flex items-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                Full biography
              </Link>
              <Link to="/expert-witness-services" className="inline-flex items-center rounded-md border border-input bg-background px-4 py-2.5 text-sm font-medium hover:bg-accent">
                Expert Witness Services
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Research team */}
      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <img src={teamImg} alt="HMD Research clinical team" className="rounded-2xl border border-border shadow-sm" />
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-secondary">Research Staff</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">Experienced Clinical Research Coordinators</h2>
            <Prose>
              <p>
                Our clinical research coordinators (CRCs) manage day-to-day study operations under the
                Principal Investigator's supervision. Each coordinator is trained in Good Clinical Practice
                (GCP), protocol adherence, informed consent, adverse-event documentation and source-data
                verification.
              </p>
              <p>
                The team works closely with sponsors, CROs and regulatory monitors to maintain data quality
                and participant safety throughout the lifecycle of every trial.
              </p>
            </Prose>
          </div>
        </div>
      </Section>

      {/* Therapeutic focus */}
      <Section>
        <h2 className="text-2xl font-semibold tracking-tight">Therapeutic areas of investigator experience</h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">
          Dr. Heuer's investigator experience spans a wide range of therapeutic areas across more than 100 funded projects.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {focusAreas.map((a) => (
            <div key={a} className="rounded-lg border border-border bg-card px-4 py-3 text-sm">
              {a}
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <RelatedLinks
          links={[
            { to: "/about", label: "About HMD Research", desc: "Our mission and research center." },
            { to: "/research-experience", label: "Research experience", desc: "Therapeutic-area depth by category." },
            { to: "/for-sponsors-and-cros", label: "For Sponsors & CROs", desc: "Partner with our investigator team." },
          ]}
        />
      </Section>

      <Section><ContactCTA /></Section>
    </SiteLayout>
  );
}
