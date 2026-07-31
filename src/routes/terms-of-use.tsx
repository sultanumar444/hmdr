import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, buildArticleHeadScripts } from "@/components/site/ArticlePage";
import { buildHead } from "@/lib/seo";

const path = "/terms-of-use";
const crumbUrls = [{ label: "Home", url: "/" }, { label: "Terms of Use", url: path }];

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    ...buildHead({
      title: "Terms of Use",
      description: "Terms governing the use of the HMD Research website.",
      path,
    }),
    scripts: buildArticleHeadScripts(crumbUrls),
  }),
  component: () => (
    <ArticlePage
      title="Terms of Use"
      crumbs={[{ label: "Terms of Use" }]}
      crumbUrls={crumbUrls}
      hideCTA
    >
      <p>This placeholder terms document will be replaced by finalized language reviewed by qualified counsel. It sets baseline expectations for users of this website.</p>
      <h2 className="text-xl font-semibold">Educational content only</h2>
      <p>Content on this website is educational and is not a substitute for medical, legal or regulatory advice.</p>
      <h2 className="text-xl font-semibold">No guarantees</h2>
      <p>References to clinical trials, eligibility and compensation are general. Enrollment, eligibility and compensation are never guaranteed.</p>
    </ArticlePage>
  ),
});
