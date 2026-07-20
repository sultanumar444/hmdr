import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, PageHeader, Prose, RelatedLinks } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ContactCTA, InterestForm } from "@/components/site/CTA";
import { buildHead } from "@/lib/seo";
import { completedTrialDetails, currentTrials, images, partners } from "@/lib/site-data";


export const Route = createFileRoute("/clinical-trials/")({
  head: () => buildHead({
    title: "Clinical Research Trials | Heuer M.D. Research",
    description:
      "Current and past clinical trials at Heuer M.D. Research in Orlando, FL. Learn about types of clinical trials, phases, and why to participate.",
    path: "/clinical-trials",
  }),
  component: ClinicalTrialsIndex,
});

function ClinicalTrialsIndex() {
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ label: "Clinical Trials" }]} />
      <Section className="pt-6">
        <PageHeader
          eyebrow="Research"
          title="Clinical Research Trials"
          intro="Heuer M.D. Research conducts clinical trial research with the purpose of advancing modern medicine."
          image={images.clinicalTrialHero}
        />
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold tracking-tight">Current Clinical Trials</h2>
        <p className="mt-2 text-muted-foreground">Select a study to learn more.</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentTrials.map((t) => (
            <div key={t.name} className="group overflow-hidden rounded-xl border border-border bg-card transition hover:border-foreground/20 hover:shadow-md">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={t.image} alt={t.name} className="h-full w-full object-cover transition group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="font-semibold">{t.name}</div>
                <Link to="/contact" className="mt-3 inline-block text-sm font-medium text-primary hover:underline">Ask about this study →</Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold tracking-tight">Completed Clinical Trials</h2>
        <ul className="mt-6 grid gap-x-6 gap-y-2 text-sm text-muted-foreground sm:grid-cols-2 md:grid-cols-3">
          {completedTrials.map((t) => <li key={t}>• {t}</li>)}
        </ul>
      </Section>

      <Section>
        <Prose>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Heuer M.D. Research: Clinical Trials</h2>
          <p><em>"Heuer M.D. Research conducts Clinical Trial Research with the purpose of advancing modern medicine."</em></p>
          <p>
            Clinical trials are supervised research studies conducted to collect and analyze data based on a
            pre-defined plan or protocol. These trials have played a vital role in our society due to their
            impact on determining the safety and efficacy of new treatments and devices on the market.
            Medications that treat illnesses and the different forms of physical therapy practiced today have
            been made available to the general public due to the clinical trials that have supported them.
          </p>
          <h3 className="text-xl font-semibold text-foreground">Types of Clinical Trials</h3>
          <p><strong>Open Label Trials:</strong> All information related to treatment is disclosed to both researcher and patient. No placebos or control treatments are used.</p>
          <p><strong>Controlled Trials:</strong> Participants are divided into two groups — one receives the proposed treatment while the control group receives a placebo. Often conducted as double-blind studies.</p>
          <h3 className="text-xl font-semibold text-foreground">Phases of Clinical Research</h3>
          <ul>
            <li>Phase I: Testing for safety and dosing on an inpatient basis</li>
            <li>Phase II: Evaluation of safety, efficacy and toxicity</li>
            <li>Phase III: Determination of treatment efficacy on large patient groups</li>
            <li>Phase IV: Continued surveillance of treatment post approval for sale</li>
          </ul>
          <h3 className="text-xl font-semibold text-foreground">Why Participate?</h3>
          <p>
            When you qualify for a clinical study, you gain access to medical care from experts on your
            particular condition at no cost to you. Health insurance is not required.
          </p>
        </Prose>
      </Section>

      <Section>
        <h2 className="text-center text-xl font-semibold tracking-tight uppercase text-muted-foreground">Our Partners</h2>
        <div className="mt-8 grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {partners.map((p) => (
            <div key={p.name} className="flex items-center justify-center rounded-lg border border-border bg-white p-3">
              <img src={p.image} alt={p.name} loading="lazy" className="max-h-12 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0" />
            </div>
          ))}
        </div>
      </Section>

      <RelatedLinks
        heading="Learn about clinical trial participation"
        links={[
          { to: "/clinical-trials/how-clinical-trials-work", label: "How Clinical Trials Work", desc: "Phases, protocols and oversight explained in plain language." },
          { to: "/clinical-trials/clinical-trial-eligibility", label: "Eligibility Criteria", desc: "Who qualifies to join and why criteria matter for participant safety." },
          { to: "/clinical-trials/what-to-expect", label: "What to Expect", desc: "A step-by-step overview of your visit journey." },
          { to: "/clinical-trials/clinical-trial-safety", label: "Safety & Oversight", desc: "Informed consent, ethics boards and participant rights." },
          { to: "/clinical-trials/clinical-trial-compensation", label: "Compensation", desc: "How compensation for time and travel typically works." },
          { to: "/clinical-trials/participant-faq", label: "Participant FAQ", desc: "Common questions from potential participants." },
        ]}
      />

      <RelatedLinks
        heading="Research areas & practice"
        links={[
          { to: "/research-experience", label: "All Research Areas", desc: "Explore therapeutic areas we work across." },
          { to: "/orlando-clinical-research", label: "Orlando Clinical Research", desc: "Local Central Florida clinical research information." },
          { to: "/for-sponsors-and-cros", label: "For Sponsors & CROs", desc: "Site capabilities and study operations." },
          { to: "/for-healthcare-professionals", label: "For Healthcare Professionals", desc: "Refer patients or explore collaboration." },
          { to: "/patient-resources", label: "Patient Resources", desc: "Guides and checklists for participants." },
          { to: "/research-glossary", label: "Research Glossary", desc: "Definitions for common clinical research terms." },
        ]}
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-3"><ContactCTA /></div>
          <div className="md:col-span-2"><InterestForm /></div>
        </div>
      </Section>
    </SiteLayout>
  );
}

