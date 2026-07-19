import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, buildArticleHeadScripts } from "@/components/site/ArticlePage";
import { buildHead } from "@/lib/seo";

const path = "/clinical-trials/how-clinical-trials-work";
const crumbs = [{ label: "Clinical Trials", to: "/clinical-trials/how-clinical-trials-work" }, { label: "How Clinical Trials Work" }];
const crumbUrls = [
  { label: "Home", url: "/" },
  { label: "Clinical Trials", url: "/clinical-trials/how-clinical-trials-work" },
  { label: "How Clinical Trials Work", url: path },
];

const faqs = [
  { q: "Are clinical trials safe?", a: "Trials are conducted under written protocols reviewed by ethics committees, and participants receive informed consent explaining possible risks and benefits. No study is entirely risk-free." },
  { q: "Do I keep seeing my regular doctor?", a: "Yes. Participation in a research study is not a substitute for regular medical care." },
];

export const Route = createFileRoute("/clinical-trials/how-clinical-trials-work")({
  head: () => ({
    ...buildHead({
      title: "How Clinical Trials Work",
      description: "A plain-language overview of clinical trial phases, screening, informed consent and what participation involves.",
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
      title="How Clinical Trials Work"
      intro="Clinical trials help answer questions about whether a product or approach is safe and effective. Here is what participation typically involves."
      crumbs={crumbs}
      crumbUrls={crumbUrls}
      faqs={faqs}
      related={[
        { to: "/clinical-trials/clinical-trial-eligibility", label: "Learn how clinical trial eligibility works" },
        { to: "/clinical-trials/what-to-expect", label: "What to expect step by step" },
        { to: "/clinical-trials/clinical-trial-safety", label: "Clinical trial safety" },
        { to: "/orlando-clinical-research", label: "View recruiting clinical trials in Orlando" },
      ]}
    >
      <h2 className="text-xl font-semibold">What a clinical trial is</h2>
      <p>A clinical trial is a research study that involves human volunteers and follows a written plan (called a protocol). Trials are how researchers learn whether a product or approach is safe and how well it works.</p>

      <h2 className="text-xl font-semibold">Why clinical trials are conducted</h2>
      <p>Trials answer specific questions. Some evaluate whether a new therapy is safe. Others compare an approach to an existing standard. Others gather information about how a product performs in a broader group of people.</p>

      <h2 className="text-xl font-semibold">Common trial phases</h2>
      <p>Phase 1 studies focus on safety in a small group. Phase 2 studies look at whether a product works and continue to evaluate safety. Phase 3 studies test the product in a larger group. Phase 4 studies gather information after a product is available.</p>

      <h2 className="text-xl font-semibold">Screening and informed consent</h2>
      <p>Before joining a study, participants go through screening to determine whether the study is a fit. Informed consent is an ongoing conversation, documented by a written form, that explains the study, its risks and benefits, and the participant's rights.</p>

      <h2 className="text-xl font-semibold">Study visits and follow-up</h2>
      <p>Some studies involve a single visit; others include multiple visits over weeks or months. The protocol describes what happens at each visit and how follow-up is handled.</p>

      <h2 className="text-xl font-semibold">Participant rights</h2>
      <p>Participation is voluntary. You can ask questions at any time, decline to answer any question, and withdraw from a study at any point without needing to justify your decision.</p>

      <h2 className="text-xl font-semibold">Questions to ask the research team</h2>
      <ul className="list-disc space-y-1 pl-6">
        <li>What is the purpose of this study?</li>
        <li>What will I be asked to do, and for how long?</li>
        <li>What are the possible risks and benefits?</li>
        <li>How is my privacy protected?</li>
        <li>What happens if I want to stop?</li>
      </ul>
    </ArticlePage>
  );
}
