import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, buildArticleHeadScripts } from "@/components/site/ArticlePage";
import { buildHead } from "@/lib/seo";

const path = "/clinical-trials/clinical-trial-compensation";
const crumbs = [{ label: "Clinical Trials" }, { label: "Compensation" }];
const crumbUrls = [
  { label: "Home", url: "/" },
  { label: "Clinical Trials", url: "/clinical-trials/how-clinical-trials-work" },
  { label: "Compensation", url: path },
];

const faqs = [
  { q: "Are all clinical trials paid?", a: "No. Some studies offer compensation and some do not. It depends on the sponsor, the design of the study and the level of participant time involved." },
  { q: "When is compensation typically paid?", a: "Compensation is usually tied to completed visits and is paid on a schedule described in the informed consent document." },
];

export const Route = createFileRoute("/clinical-trials/clinical-trial-compensation")({
  head: () => ({
    ...buildHead({
      title: "Clinical Trial Compensation",
      description: "How clinical trial compensation typically works, what it usually covers and why it varies by study.",
      path,
    }),
    scripts: buildArticleHeadScripts(crumbUrls, faqs),
  }),
  component: Page,
});

function Page() {
  return (
    <ArticlePage
      eyebrow="Participant education"
      title="Clinical Trial Compensation"
      intro="Some clinical trials offer compensation for a participant's time and travel. It varies by study and is never guaranteed."
      crumbs={crumbs}
      crumbUrls={crumbUrls}
      faqs={faqs}
      related={[
        { to: "/clinical-trials/what-to-expect", label: "What to expect step by step" },
        { to: "/clinical-trials/participant-faq", label: "Participant FAQ" },
        { to: "/orlando-clinical-research", label: "View recruiting clinical trials in Orlando" },
      ]}
    >
      <p>Compensation in a clinical trial is generally intended to acknowledge the time and effort of participation — it is not a payment for the investigational product itself.</p>

      <h2 className="text-xl font-semibold">A few things to know</h2>
      <ul className="list-disc space-y-1 pl-6">
        <li>Some studies may offer compensation, and some do not.</li>
        <li>Compensation varies by study, sponsor and level of participation.</li>
        <li>Compensation is often tied to time, travel or completed visits.</li>
        <li>Compensation is not guaranteed. Enrollment in any specific study is also not guaranteed.</li>
        <li>The research team can explain study-specific details before you enroll.</li>
      </ul>

      <p className="text-sm text-muted-foreground">Wording such as "get paid to join a clinical trial" oversimplifies how compensation actually works. Please review the informed consent document for the specific study you are considering.</p>
    </ArticlePage>
  );
}
