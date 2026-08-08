import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, PageHeader, Prose, RelatedLinks } from "@/components/site/Layout";
import { InterestForm, ReviewedLabel } from "@/components/site/CTA";
import { buildHead } from "@/lib/seo";
import { jsonLdScript } from "@/components/site/JsonLd";
import { breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { business, currentTrials, trialSlug } from "@/lib/site-data";
import heroImg from "@/assets/hero-research.jpg";
import consentImg from "@/assets/consent-clipboard.jpg";
import { CalendarCheck, ClipboardList, HeartHandshake, PhoneCall, ShieldCheck, Stethoscope } from "lucide-react";

const path = "/enroll-now";

export const Route = createFileRoute("/enroll-now")({
  head: () => ({
    ...buildHead({
      title: "Enroll Now | Join a Clinical Trial in Orlando, FL",
      description:
        "Enroll in a clinical trial at HMD Research in Orlando, Florida. See what is recruiting, check basic eligibility and start with a short, no-obligation prescreening conversation.",
      path,
    }),
    scripts: [
      jsonLdScript(
        breadcrumbJsonLd([
          { label: "Home", url: "/" },
          { label: "Enroll Now", url: path },
        ]),
      ),
    ],
  }),
  component: Page,
});

const steps = [
  { icon: ClipboardList, t: "1. Submit your interest", d: "Share your name, contact details and the study or health area you are interested in." },
  { icon: PhoneCall, t: "2. Short prescreening call", d: "A coordinator reviews basic eligibility questions with you. It takes only a few minutes." },
  { icon: CalendarCheck, t: "3. Screening visit", d: "If a study looks like a fit, we schedule an in-person visit and review the consent form with you." },
  { icon: Stethoscope, t: "4. Study visits", d: "If you qualify and choose to continue, your visit schedule is set with your coordinator." },
];

const benefits = [
  { icon: ShieldCheck, t: "No cost to participate", d: "Study-related visits and procedures are provided at no cost. Insurance is usually not required." },
  { icon: HeartHandshake, t: "Attentive study care", d: "Regular visits with a physician-led team, plus direct contact with your coordinator." },
  { icon: CalendarCheck, t: "Possible compensation", d: "Many studies offer compensation for time and travel, usually tied to completed visits." },
];

const recruiting = currentTrials.slice(0, 6);

function Page() {
  return (
    <SiteLayout>
      <Section className="pt-6">
        <PageHeader
          eyebrow="Enroll now"
          title="Start your enrollment in an Orlando clinical trial"
          intro="Two minutes is all it takes to begin. Tell us how to reach you, and a research coordinator will walk you through eligibility, visits and what participation involves — with no obligation."
          image={heroImg}
        />
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">How enrollment works</h2>
            <p className="mt-3 text-muted-foreground">
              Every step is voluntary. You can stop at any point, and nothing happens until you have read and
              signed an informed consent form.
            </p>
            <div className="mt-8 space-y-5">
              {steps.map((s) => (
                <div key={s.t} className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
                  <s.icon aria-hidden className="mt-0.5 h-6 w-6 shrink-0 text-secondary" />
                  <div>
                    <div className="font-semibold">{s.t}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div id="enroll-form">
            <InterestForm variant="participant" />
            <div className="mt-4 rounded-xl border border-border bg-card p-5 text-sm shadow-sm">
              <div className="font-semibold">Prefer to call?</div>
              <p className="mt-1 text-muted-foreground">{business.hours}</p>
              {business.phoneHref ? (
                <a href={business.phoneHref} data-cta="phone-click" className="mt-2 inline-block font-semibold text-secondary hover:underline">
                  {business.phone}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold tracking-tight">Why people enroll</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.t} className="rounded-xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <b.icon aria-hidden className="h-6 w-6 text-secondary" />
              <div className="mt-3 font-semibold">{b.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Enrolling studies</h2>
            <p className="mt-2 text-muted-foreground">Select a study to review details and eligibility.</p>
          </div>
          <Link to="/current-studies" className="text-sm font-semibold text-secondary hover:underline">
            View all studies →
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {recruiting.map((t) => (
            <Link
              key={t.name}
              to="/clinical-trials/studies/$slug"
              params={{ slug: trialSlug(t.name) }}
              className="rounded-xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-secondary">{t.status}</div>
              <div className="mt-2 font-semibold">{t.name}</div>
              <p className="mt-2 text-sm text-muted-foreground">Review eligibility and visit details →</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <img src={consentImg} alt="Reviewing an informed consent form" className="rounded-2xl border border-border shadow-sm" />
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-secondary">Informed consent</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">You decide, at every step</h2>
            <Prose>
              <p>
                Before any study procedure, the research team reviews an informed consent document with you that
                explains the purpose of the study, the visit schedule, possible risks and benefits, and your
                rights as a participant.
              </p>
              <p>
                In most cases you can take the form home to review it. Participation is voluntary and you may
                withdraw at any time without affecting your regular medical care.
              </p>
            </Prose>
            <Link to="/clinical-trials/what-to-expect" className="mt-5 inline-flex items-center rounded-md border border-input bg-background px-4 py-2.5 text-sm font-medium hover:bg-accent">
              What to expect
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl bg-primary p-8 text-primary-foreground md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-primary-foreground md:text-3xl">Ready to enroll?</h2>
          <p className="mt-3 max-w-2xl text-primary-foreground/85">
            Submit the form above or call the Orlando research team. There is no cost and no obligation to
            complete prescreening.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#enroll-form" className="inline-flex items-center rounded-md bg-secondary px-4 py-2.5 text-sm font-semibold text-secondary-foreground hover:bg-secondary/90">
              Complete the form
            </a>
            {business.phoneHref ? (
              <a href={business.phoneHref} data-cta="phone-click" className="inline-flex items-center rounded-md border border-white/40 px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-white/10">
                Call {business.phone}
              </a>
            ) : null}
          </div>
        </div>
        <ReviewedLabel />
      </Section>

      <RelatedLinks
        links={[
          { to: "/clinical-trials/clinical-trial-eligibility", label: "Eligibility basics", desc: "How study criteria are decided." },
          { to: "/faq", label: "Participant FAQ", desc: "Cost, compensation, privacy and safety." },
          { to: "/patient-resources", label: "Patient resources", desc: "Guides for people considering a study." },
        ]}
      />
    </SiteLayout>
  );
}
