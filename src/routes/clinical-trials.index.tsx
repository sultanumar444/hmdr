import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, PageHeader } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ContactCTA, InterestForm } from "@/components/site/CTA";
import { buildHead } from "@/lib/seo";
import { currentTrials, images } from "@/lib/site-data";
import { PartnerMarquee } from "@/components/site/PartnerMarquee";
import { FlaskConical, Users, Eye, ShieldCheck, HeartPulse, ClipboardCheck, Microscope } from "lucide-react";

export const Route = createFileRoute("/clinical-trials/")({
  head: () => buildHead({
    title: "Clinical Research Trials | HMD Research",
    description:
      "Current and past clinical trials at HMD Research in Orlando, FL. Learn about types of clinical trials, phases, and why to participate.",
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
          intro="HMD Research conducts Clinical Trial Research with the purpose of advancing modern medicine."
          image={images.clinicalTrialHero}
        />
      </Section>

      <Section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Current Clinical Trials</h2>
            <p className="mt-2 text-muted-foreground">Select a study to learn more.</p>
          </div>
          <Link
            to="/current-studies"
            className="hidden whitespace-nowrap text-sm font-semibold text-primary hover:underline sm:inline-block"
          >
            View all studies →
          </Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentTrials.slice(0, 6).map((t) => (
            <Link
              key={t.slug}
              to="/clinical-trials/studies/$slug"
              params={{ slug: t.slug }}
              className="group overflow-hidden rounded-xl border border-border bg-card transition hover:border-primary/40 hover:shadow-md"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={t.image} alt={t.name} className="h-full w-full object-cover transition group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="font-semibold">{t.name}</div>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{t.shortSummary}</p>
                <span className="mt-3 inline-block text-sm font-medium text-primary group-hover:underline">View study details →</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center sm:hidden">
          <Link to="/current-studies" className="text-sm font-semibold text-primary hover:underline">
            View all studies →
          </Link>
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-border bg-card p-6 md:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={images.medicalTeam}
                alt="HMD Research clinical trial team in Orlando"
                className="h-64 w-full object-cover md:h-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
                <div className="text-sm font-semibold uppercase tracking-wider opacity-90">Orlando, FL</div>
                <div className="text-lg font-semibold">Advancing medicine through research</div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary/15 px-3 py-1 text-xs font-semibold text-secondary">
                <Microscope className="h-3.5 w-3.5" />
                About our research
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">HMD Research: Clinical Trials</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Clinical trials are supervised research studies conducted to collect and analyze data based on a
                pre-defined plan or protocol. These trials have played a vital role in our society due to their
                impact on determining the safety and efficacy of new treatments and devices on the market.
              </p>
              <p className="mt-4 italic text-foreground/90">
                “HMD Research conducts Clinical Trial Research with the purpose of advancing modern medicine.”
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Medications that treat illnesses and the different forms of physical therapy practiced today have
                been made available to the general public due to the clinical trials that have supported them.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <TrialHighlights
        heading="Understanding Clinical Trials"
        intro="Different study designs answer different research questions. Explore the essentials of trial participation."
      />


      <Section>
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Phases of Clinical Research</h2>
          <p className="mt-2 text-muted-foreground">Each phase has a specific goal in evaluating a new therapy.</p>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              phase: "I",
              title: "Safety & Dosing",
              desc: "Testing for safety and dosing on an inpatient basis with a small group of volunteers.",
              icon: ShieldCheck,
            },
            {
              phase: "II",
              title: "Efficacy & Toxicity",
              desc: "Evaluation of safety, efficacy and toxicity in a larger group with the target condition.",
              icon: FlaskConical,
            },
            {
              phase: "III",
              title: "Large Group Efficacy",
              desc: "Determination of treatment efficacy on large patient groups compared to standard care.",
              icon: ClipboardCheck,
            },
            {
              phase: "IV",
              title: "Post-Market Surveillance",
              desc: "Continued surveillance of treatment post approval for sale in the general population.",
              icon: HeartPulse,
            },
          ].map((item) => (
            <div
              key={item.phase}
              className="relative overflow-hidden rounded-xl border border-border bg-card p-6 transition hover:border-primary/30 hover:shadow-sm"
            >
              <div className="absolute right-4 top-4 text-5xl font-bold text-primary/10">{item.phase}</div>
              <div className="relative">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/15 text-secondary">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-sm font-bold text-primary">Phase {item.phase}</span>
                </div>
                <h3 className="mt-1 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="relative overflow-hidden rounded-2xl bg-primary text-primary-foreground">
          <div className="absolute inset-0 opacity-20">
            <img
              src={images.vaccine}
              alt="Clinical research participant support"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
          <div className="relative grid gap-8 p-6 md:p-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold">
                <HeartPulse className="h-3.5 w-3.5" />
                Participant care
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">Why Participate?</h2>
              <p className="mt-4 max-w-xl leading-relaxed opacity-95">
                When you qualify for a clinical study, you gain access to medical care from experts on your
                particular condition at no cost to you. Health insurance is not required.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Access to investigational therapies and expert monitoring",
                  "No cost for study-related care or procedures",
                  "Contribute to medical knowledge that helps others",
                  "Flexible scheduling with a local Orlando research team",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-foreground/20 text-xs font-bold">✓</span>
                    <span className="opacity-95">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  to="/current-studies"
                  className="inline-flex items-center gap-2 rounded-md bg-primary-foreground px-5 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-primary-foreground/90"
                >
                  See current studies
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-xl bg-primary-foreground/10 p-6 backdrop-blur-sm">
                <div className="text-sm font-semibold uppercase tracking-wider opacity-80">Questions?</div>
                <p className="mt-2 opacity-95">
                  Our research coordinators can explain the informed consent process, screening steps, and what to expect during a study.
                </p>
                <Link
                  to="/clinical-trials/participant-faq"
                  className="mt-4 inline-block text-sm font-semibold underline underline-offset-4 opacity-95 hover:opacity-100"
                >
                  Read the participant FAQ →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <PartnerMarquee />

      <Section>
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-3"><ContactCTA /></div>
          <div className="md:col-span-2"><InterestForm /></div>
        </div>
      </Section>
    </SiteLayout>
  );
}
