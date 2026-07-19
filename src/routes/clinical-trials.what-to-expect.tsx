import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, buildArticleHeadScripts } from "@/components/site/ArticlePage";
import { buildHead } from "@/lib/seo";

const path = "/clinical-trials/what-to-expect";
const crumbs = [{ label: "Clinical Trials" }, { label: "What to Expect" }];
const crumbUrls = [
  { label: "Home", url: "/" },
  { label: "Clinical Trials", url: "/clinical-trials/how-clinical-trials-work" },
  { label: "What to Expect", url: path },
];

const steps = [
  { t: "Find a study", d: "Browse recruiting studies or ask the research team about upcoming opportunities." },
  { t: "Submit interest", d: "Reach out through a study interest form or by phone." },
  { t: "Phone prescreen", d: "A short conversation to review basic eligibility." },
  { t: "Initial visit", d: "Meet the research team, ask questions and review informed consent." },
  { t: "Informed consent", d: "Sign the consent form once your questions have been answered." },
  { t: "Eligibility procedures", d: "Complete study-specific screening steps, such as vitals or labs." },
  { t: "Scheduled visits", d: "Follow the visit schedule described in the protocol." },
  { t: "Follow-up", d: "Complete any follow-up visits or calls before the study ends for you." },
];

export const Route = createFileRoute("/clinical-trials/what-to-expect")({
  head: () => ({
    ...buildHead({
      title: "What to Expect in a Clinical Trial",
      description: "A step-by-step overview of what participation in a clinical trial usually involves, from first interest to follow-up.",
      path,
    }),
    scripts: buildArticleHeadScripts(crumbUrls),
  }),
  component: Page,
});

function Page() {
  return (
    <ArticlePage
      eyebrow="Participant education"
      title="What to Expect in a Clinical Trial"
      intro="Every study is different, but most follow a similar path. Here is a visual outline of the participant journey."
      crumbs={crumbs}
      crumbUrls={crumbUrls}
      related={[
        { to: "/clinical-trials/clinical-trial-eligibility", label: "Clinical trial eligibility" },
        { to: "/clinical-trials/clinical-trial-safety", label: "Clinical trial safety" },
        { to: "/patient-resources", label: "Patient resources and checklists" },
      ]}
    >
      <ol className="space-y-4">
        {steps.map((s, i) => (
          <li key={i} className="flex gap-4 rounded-lg border border-border bg-card p-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
              {i + 1}
            </div>
            <div>
              <div className="font-semibold">{s.t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.d}</div>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8 rounded-xl border border-dashed border-border bg-muted/30 p-6">
        <div className="text-sm font-semibold">Downloadable checklist (placeholder)</div>
        <div className="mt-1 text-sm text-muted-foreground">
          What to Bring to a Clinical Trial Screening Visit — coming soon.
        </div>
        <button
          type="button"
          data-cta="resource-download"
          className="mt-3 inline-flex items-center rounded-md border border-input bg-background px-3 py-1.5 text-sm hover:bg-accent"
        >
          Download checklist
        </button>
      </div>
    </ArticlePage>
  );
}
