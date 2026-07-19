import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, buildArticleHeadScripts } from "@/components/site/ArticlePage";
import { EmptyStudies } from "@/components/site/CTA";
import { buildHead } from "@/lib/seo";
import { studies } from "@/lib/site-data";

const path = "/clinical-trials/healthy-volunteer-studies";
const crumbs = [{ label: "Clinical Trials" }, { label: "Healthy Volunteer Studies" }];
const crumbUrls = [
  { label: "Home", url: "/" },
  { label: "Clinical Trials", url: "/clinical-trials/how-clinical-trials-work" },
  { label: "Healthy Volunteer Studies", url: path },
];

const faqs = [
  { q: "Am I always considered a 'healthy volunteer'?", a: "Not necessarily. Each study has its own definition based on the protocol and prescreening evaluation." },
  { q: "Are healthy volunteer studies always available?", a: "No. Availability depends on the studies currently open at the research center." },
];

export const Route = createFileRoute("/clinical-trials/healthy-volunteer-studies")({
  head: () => ({
    ...buildHead({
      title: "Healthy Volunteer Clinical Studies",
      description: "What healthy-volunteer studies involve, who may qualify and how to learn about opportunities in Orlando.",
      path,
    }),
    scripts: buildArticleHeadScripts(crumbUrls, faqs),
  }),
  component: Page,
});

function Page() {
  const healthy = studies.filter((s) => s.category === "healthy-volunteer");
  return (
    <ArticlePage
      eyebrow="Participant education"
      title="Healthy Volunteer Studies"
      intro="Healthy-volunteer studies involve participants who do not have the condition being studied. They help researchers understand how a product behaves in a general population."
      crumbs={crumbs}
      crumbUrls={crumbUrls}
      faqs={faqs}
      related={[
        { to: "/clinical-trials/clinical-trial-eligibility", label: "Clinical trial eligibility" },
        { to: "/clinical-trials/clinical-trial-compensation", label: "Clinical trial compensation" },
        { to: "/orlando-clinical-research", label: "Orlando clinical research" },
      ]}
    >
      <h2 className="text-xl font-semibold">Who may be considered a healthy volunteer</h2>
      <p>Definitions vary by study, but healthy volunteers are generally adults without the specific condition being investigated. Prescreening confirms whether a person fits the definition used in that study's protocol.</p>

      <h2 className="text-xl font-semibold">Why these studies are conducted</h2>
      <p>Some products need to be evaluated in people without the condition of interest — for example, to understand baseline effects, tolerability or how a product is processed by the body.</p>

      <h2 className="text-xl font-semibold">Screening expectations and time commitment</h2>
      <p>Screening typically includes a health questionnaire and, depending on the study, basic vitals or lab work. Time commitment varies — some studies are a single visit, others involve several visits over time.</p>

      <h2 className="text-xl font-semibold">Compensation</h2>
      <p>Some healthy-volunteer studies may offer compensation for time and travel. Compensation is not guaranteed and varies by study.</p>

      <h2 className="text-xl font-semibold">Current opportunities</h2>
      {healthy.length === 0 ? (
        <EmptyStudies note="No healthy-volunteer studies are currently listed. Contact the Orlando team to be notified when one opens." />
      ) : null}
    </ArticlePage>
  );
}
