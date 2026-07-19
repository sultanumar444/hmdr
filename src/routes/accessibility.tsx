import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, buildArticleHeadScripts } from "@/components/site/ArticlePage";
import { buildHead } from "@/lib/seo";

const path = "/accessibility";
const crumbUrls = [{ label: "Home", url: "/" }, { label: "Accessibility", url: path }];

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    ...buildHead({
      title: "Accessibility",
      description: "Our commitment to making this website and the Orlando research center usable for everyone.",
      path,
    }),
    scripts: buildArticleHeadScripts(crumbUrls),
  }),
  component: () => (
    <ArticlePage
      title="Accessibility"
      crumbs={[{ label: "Accessibility" }]}
      crumbUrls={crumbUrls}
      hideCTA
    >
      <p>Heuer M.D. Research is committed to making this website and the Orlando research center usable for everyone. We aim for reasonable conformance with WCAG accessibility guidance and welcome feedback.</p>
      <h2 className="text-xl font-semibold">Feedback</h2>
      <p>If you encounter an accessibility barrier or would like to request a reasonable accommodation, please contact the Orlando team through the location page.</p>
    </ArticlePage>
  ),
});
