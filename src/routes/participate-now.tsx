import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, PageHeader, Prose, RelatedLinks } from "@/components/site/Layout";
import { InterestForm, ReviewedLabel } from "@/components/site/CTA";
import { FAQ, faqJsonLd } from "@/components/site/FAQ";
import { buildHead } from "@/lib/seo";
import { jsonLdScript } from "@/components/site/JsonLd";
import { breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { business } from "@/lib/site-data";
import heroImg from "@/assets/team-collaboration.jpg";
import mentorImg from "@/assets/modern-medicine.jpg";
import practiceImg from "@/assets/orlando-office.jpg";
import { BookOpen, ClipboardCheck, GraduationCap, HandCoins, Handshake, LineChart, ShieldCheck, Users } from "lucide-react";

const path = "/participate-now";

const faqs = [
  { q: "Do I need prior research experience to become an investigator?", a: "No. Many physicians start as a sub-investigator on a study while an experienced Principal Investigator retains oversight. Good Clinical Practice training and protocol-specific training are provided before you begin." },
  { q: "How much time does research add to my week?", a: "It depends on the protocol and how many participants you enroll. Coordinators handle scheduling, source documentation and data entry, so most of your time is spent on medical decisions, safety review and participant visits." },
  { q: "Can my patients participate in studies?", a: "Yes, when they meet the protocol's eligibility criteria and choose to enroll. Referring physicians stay informed and patients continue their regular care with you." },
  { q: "Who handles regulatory submissions and sponsor contracts?", a: "Our research team manages IRB submissions, essential documents, sponsor and CRO communication, budgets and contracts." },
  { q: "What specialties are most in demand?", a: "Primary care and internal medicine, dermatology, endocrinology and diabetes, gastroenterology, respiratory and women's health are consistently in demand for Phase II–IV programs." },
];

export const Route = createFileRoute("/participate-now")({
  head: () => ({
    ...buildHead({
      title: "Participate Now | Become an Investigator with HMD Research",
      description:
        "Physicians and practices in Central Florida: partner with HMD Research as an investigator or referring provider. Training, coordinator support, regulatory management and sponsor access.",
      path,
    }),
    scripts: [
      jsonLdScript(faqJsonLd(faqs)),
      jsonLdScript(
        breadcrumbJsonLd([
          { label: "Home", url: "/" },
          { label: "Participate Now", url: path },
        ]),
      ),
    ],
  }),
  component: Page,
});

const benefits = [
  { icon: BookOpen, t: "Access to emerging therapies", d: "Offer your patients access to investigational treatments before they reach general practice." },
  { icon: GraduationCap, t: "Training and mentorship", d: "GCP and protocol training, with mentorship from an investigator with 25+ years of research leadership." },
  { icon: Users, t: "Coordinator support", d: "Experienced coordinators manage scheduling, source documentation, data entry and monitoring visits." },
  { icon: ClipboardCheck, t: "Regulatory handled", d: "IRB submissions, essential documents and sponsor communication are managed by our research team." },
  { icon: HandCoins, t: "New practice revenue", d: "Sponsor-funded research adds a revenue stream that is independent of insurance reimbursement." },
  { icon: LineChart, t: "Sponsor relationships", d: "Established relationships with sponsors and CROs across multiple therapeutic areas." },
];

const paths = [
  {
    icon: Handshake,
    t: "Sub-investigator",
    d: "Join an active protocol at our Orlando site with oversight from the Principal Investigator. The most common entry point.",
  },
  {
    icon: ShieldCheck,
    t: "Principal Investigator",
    d: "Lead a study with full operational and regulatory support from our research staff and coordinators.",
  },
  {
    icon: Users,
    t: "Referring physician",
    d: "Keep your practice focus and refer eligible patients. You stay informed and patients continue care with you.",
  },
];

const steps = [
  { n: "01", t: "Introductory conversation", d: "We discuss your specialty, patient population and how much time you want to commit." },
  { n: "02", t: "Fit and feasibility", d: "We match you to protocols that suit your practice and confirm study requirements." },
  { n: "03", t: "Training & documentation", d: "GCP training, CV and licensure documentation, financial disclosure and delegation of authority." },
  { n: "04", t: "First study", d: "You begin as sub-investigator or PI with coordinator and regulatory support in place." },
];

function Page() {
  return (
    <SiteLayout>
      <Section className="pt-6">
        <PageHeader
          eyebrow="Participate now"
          title="Become an investigator with HMD Research"
          intro={`Bring clinical research into your practice without building an infrastructure from scratch. ${business.name} provides the coordinators, regulatory management and sponsor relationships — you provide the medical expertise.`}
          image={heroImg}
        />
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-secondary">Why research</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Practice medicine at the front edge of it</h2>
            <Prose>
              <p>
                Clinical research lets you evaluate tomorrow's therapies with today's patients, deepen your
                therapeutic expertise and contribute to the evidence base your specialty relies on.
              </p>
              <p>
                Most physicians hesitate because of the perceived administrative burden. That burden is exactly
                what our site absorbs: regulatory submissions, monitoring, source documentation and sponsor
                reporting are handled by our research team.
              </p>
            </Prose>
          </div>
          <img src={mentorImg} alt="Physician and research coordinator reviewing a protocol" className="rounded-2xl border border-border shadow-sm" />
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold tracking-tight">What we provide</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
        <h2 className="text-2xl font-semibold tracking-tight">Ways to participate</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {paths.map((p) => (
            <div key={p.t} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <p.icon aria-hidden className="h-6 w-6 text-secondary" />
              <div className="mt-3 text-lg font-semibold">{p.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <img src={practiceImg} alt="HMD Research site in Orlando, Florida" className="order-2 rounded-2xl border border-border shadow-sm md:order-1" />
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-semibold tracking-tight">Getting started</h2>
            <div className="mt-6 space-y-4">
              {steps.map((s) => (
                <div key={s.n} className="flex gap-4">
                  <div className="text-sm font-semibold text-secondary">{s.n}</div>
                  <div>
                    <div className="font-semibold">{s.t}</div>
                    <p className="text-sm text-muted-foreground">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <FAQ items={faqs} title="Investigator questions" />
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Start the conversation</h2>
            <p className="mt-3 text-muted-foreground">
              Tell us about your specialty and practice. We will follow up to discuss protocols that fit your
              patient population.
            </p>
            <div className="mt-6 space-y-1 text-sm">
              <div className="font-semibold">{business.name}</div>
              <div className="text-muted-foreground">{business.addressLine1}</div>
              <div className="text-muted-foreground">{business.cityStateZip}</div>
              {business.phoneHref ? (
                <a href={business.phoneHref} data-cta="phone-click" className="block text-secondary hover:underline">{business.phone}</a>
              ) : null}
            </div>
            <Link to="/for-healthcare-professionals" className="mt-6 inline-flex items-center rounded-md border border-input bg-background px-4 py-2.5 text-sm font-medium hover:bg-accent">
              For healthcare professionals
            </Link>
          </div>
          <InterestForm variant="referral" />
        </div>
        <ReviewedLabel />
      </Section>

      <RelatedLinks
        links={[
          { to: "/for-sponsors-and-cros", label: "Sponsors & CROs", desc: "Site capabilities and therapeutic experience." },
          { to: "/our-investigators", label: "Our investigators", desc: "Meet the investigator and research staff." },
          { to: "/research-experience", label: "Research experience", desc: "Therapeutic-area depth by category." },
        ]}
      />
    </SiteLayout>
  );
}
