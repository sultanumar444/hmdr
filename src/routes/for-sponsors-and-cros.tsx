import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, PageHeader, Prose, RelatedLinks } from "@/components/site/Layout";
import { ReviewedLabel, InterestForm } from "@/components/site/CTA";
import { PartnerMarquee } from "@/components/site/PartnerMarquee";
import { buildHead } from "@/lib/seo";
import { jsonLdScript } from "@/components/site/JsonLd";
import { breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { business } from "@/lib/site-data";
import heroImg from "@/assets/team-collaboration.jpg";
import opsImg from "@/assets/modern-medicine.jpg";
import recruitImg from "@/assets/participant-education.jpg";
import facilityImg from "@/assets/orlando-office.jpg";
import {
  Users,
  ClipboardCheck,
  FlaskConical,
  ShieldCheck,
  Timer,
  FileCheck2,
  Microscope,
  Snowflake,
  MonitorCheck,
  Building2,
  Stethoscope,
  BarChart3,
} from "lucide-react";

const path = "/for-sponsors-and-cros";

export const Route = createFileRoute("/for-sponsors-and-cros")({
  head: () => ({
    ...buildHead({
      title: "Sponsors & CROs | Site Capabilities in Orlando, FL",
      description:
        "HMD Research site capabilities for sponsors and CROs: therapeutic experience, recruitment, startup timelines, regulatory documentation, facilities and data quality in Orlando, Florida.",
      path,
    }),
    scripts: [
      jsonLdScript(
        breadcrumbJsonLd([
          { label: "Home", url: "/" },
          { label: "Sponsors & CROs", url: path },
        ]),
      ),
    ],
  }),
  component: Page,
});

const metrics = [
  { v: "100+", l: "Funded research projects" },
  { v: "25+", l: "Years of research leadership" },
  { v: "II–IV", l: "Phases conducted on site" },
  { v: "1", l: "Physician-led Orlando site" },
];

const capabilities = [
  { icon: FlaskConical, t: "Therapeutic experience", d: "Dermatology, respiratory, endocrinology and diabetes, gastroenterology, anti-infectives and vaccines, nutrition and consumer health." },
  { icon: Timer, t: "Study startup", d: "Responsive feasibility turnaround, budget and contract review, and coordinated regulatory startup activities." },
  { icon: Users, t: "Participant recruitment", d: "Established Central Florida community reach with quality prescreening that protects randomization rates." },
  { icon: ClipboardCheck, t: "Protocol execution", d: "Trained coordinators, visit-window discipline and consistent source documentation practices." },
  { icon: FileCheck2, t: "Regulatory & essential documents", d: "IRB submissions, delegation logs, source templates and monitor-ready binders." },
  { icon: ShieldCheck, t: "Participant safety", d: "Investigator oversight of consent, eligibility confirmation and adverse-event review." },
  { icon: BarChart3, t: "Data quality", d: "Timely EDC entry and source practices designed to reduce queries and protocol deviations." },
  { icon: MonitorCheck, t: "Monitoring support", d: "Space and scheduling for on-site monitoring visits, plus remote monitoring cooperation." },
  { icon: Stethoscope, t: "Retention", d: "A participant-centered approach that supports adherence through the final visit." },
];

const facilities = [
  { icon: Building2, t: "Private exam & assessment rooms", d: "Dedicated rooms for screening visits, assessments and participant privacy." },
  { icon: Microscope, t: "On-site sample processing", d: "Centrifuge and processing workflow for study-required laboratory samples." },
  { icon: Snowflake, t: "Temperature-controlled storage", d: "Monitored refrigerated and frozen storage for investigational product and samples." },
  { icon: ShieldCheck, t: "Controlled drug storage", d: "Secured, access-limited investigational product storage with accountability logs." },
  { icon: MonitorCheck, t: "Monitor workspace", d: "Workspace for monitoring visits with secure access to source documentation." },
  { icon: FileCheck2, t: "Records security", d: "Locked, access-controlled retention of essential documents and participant records." },
];

const therapeutic = [
  "Anti-Infectives & Vaccines",
  "Cardiology & Metabolic",
  "Dermatology",
  "Endocrinology / Diabetes",
  "Gastroenterology",
  "Internal Medicine",
  "Musculoskeletal",
  "Nutrition & Consumer Health",
  "OB/GYN & Women's Health",
  "Pediatrics",
  "Respiratory (Asthma, COPD)",
  "Healthy Volunteer Studies",
];

const steps = [
  { n: "01", t: "Feasibility", d: "Share the synopsis. We assess therapeutic fit, population access and realistic enrollment projections." },
  { n: "02", t: "Startup", d: "Budget and contract review, IRB submission support and site-specific document preparation." },
  { n: "03", t: "Site initiation", d: "Team training, delegation of authority, source finalization and supply readiness." },
  { n: "04", t: "Enrollment", d: "Community outreach and prescreening that prioritizes qualified, retainable participants." },
  { n: "05", t: "Conduct & monitoring", d: "Protocol-adherent visits, prompt data entry and cooperative monitoring." },
  { n: "06", t: "Close-out", d: "Query resolution, drug accountability reconciliation and archival per sponsor requirements." },
];

function Page() {
  return (
    <SiteLayout>
      <Section className="pt-6">
        <PageHeader
          eyebrow="For sponsors & CROs"
          title="Site capabilities built for clean data and predictable enrollment"
          intro={`${business.name} is a physician-led clinical research site in ${business.city}, ${business.regionShort} conducting Phase II–IV and consumer-health studies with experienced coordinators and investigator oversight on every visit.`}
          image={heroImg}
        />
      </Section>

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.l} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="text-3xl font-semibold text-secondary">{m.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{m.l}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-secondary">Why partner with us</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">A single site, accountable end to end</h2>
            <Prose>
              <p>
                Sponsors and CROs work directly with the people conducting the study. Our Principal Investigator
                reviews eligibility and safety personally, and the same coordinators who screen participants
                carry them through to the final visit.
              </p>
              <p>
                That continuity is what keeps screen-failure rates, protocol deviations and query volume down.
                We would rather enroll fewer, well-qualified participants than inflate a screening number and
                lose them mid-study.
              </p>
            </Prose>
          </div>
          <img src={opsImg} alt="Clinical research operations at HMD Research" className="rounded-2xl border border-border shadow-sm" />
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold tracking-tight">Core site capabilities</h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">
          Operational strengths across startup, conduct and close-out.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <div key={c.t} className="rounded-xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <c.icon aria-hidden className="h-6 w-6 text-secondary" />
              <div className="mt-3 font-semibold">{c.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold tracking-tight">Therapeutic experience</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {therapeutic.map((t) => (
            <div key={t} className="rounded-lg border border-border bg-card px-4 py-3 text-sm shadow-sm">{t}</div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <img src={facilityImg} alt="HMD Research facility in Orlando, Florida" className="order-2 rounded-2xl border border-border shadow-sm md:order-1" />
          <div className="order-1 md:order-2">
            <div className="text-xs font-semibold uppercase tracking-widest text-secondary">Facility</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Equipment & infrastructure</h2>
            <ul className="mt-6 space-y-4">
              {facilities.map((f) => (
                <li key={f.t} className="flex gap-3">
                  <f.icon aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <div className="text-sm font-semibold">{f.t}</div>
                    <p className="text-sm text-muted-foreground">{f.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold tracking-tight">How a study runs with us</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="text-xs font-semibold tracking-widest text-secondary">{s.n}</div>
              <div className="mt-2 font-semibold">{s.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-secondary">Recruitment</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Central Florida patient access</h2>
            <Prose>
              <p>
                Orlando is a large, diverse and highly accessible metro. Our outreach combines a long-standing
                local patient community, physician referral relationships and targeted digital campaigns, with
                prescreening handled by coordinators rather than a call centre.
              </p>
            </Prose>
          </div>
          <img src={recruitImg} alt="Participant prescreening conversation" className="rounded-2xl border border-border shadow-sm" />
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-6">
          <div className="text-sm font-semibold">Capabilities statement</div>
          <p className="mt-1 text-sm text-muted-foreground">
            A downloadable capabilities statement is available on request — contact us and we will send the current version.
          </p>
          <Link
            to="/contact"
            data-cta="resource-download"
            className="mt-3 inline-flex items-center rounded-md border border-input bg-background px-3 py-1.5 text-sm hover:bg-accent"
          >
            Request capabilities statement
          </Link>
        </div>
      </Section>

      <Section>
        <PartnerMarquee />
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Discuss a research opportunity</h2>
            <p className="mt-3 text-muted-foreground">
              Send a synopsis or protocol summary and we will respond with therapeutic fit, feasibility notes
              and realistic enrollment expectations.
            </p>
            <div className="mt-6 space-y-1 text-sm">
              <div className="font-semibold">{business.name}</div>
              <div className="text-muted-foreground">{business.addressLine1}</div>
              <div className="text-muted-foreground">{business.cityStateZip}</div>
              {business.phoneHref ? (
                <a href={business.phoneHref} className="block text-secondary hover:underline">{business.phone}</a>
              ) : null}
            </div>
          </div>
          <InterestForm variant="sponsor" />
        </div>
        <ReviewedLabel />
      </Section>

      <RelatedLinks
        links={[
          { to: "/participate-now", label: "Become an investigator", desc: "Physicians interested in research partnership." },
          { to: "/our-investigators", label: "Our investigators", desc: "Investigator and coordinator experience." },
          { to: "/current-studies", label: "Current studies", desc: "What is recruiting at the Orlando site." },
        ]}
      />
    </SiteLayout>
  );
}
