import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, buildArticleHeadScripts } from "@/components/site/ArticlePage";
import { buildHead } from "@/lib/seo";

const path = "/privacy-policy";
const crumbUrls = [{ label: "Home", url: "/" }, { label: "Privacy Policy", url: path }];

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    ...buildHead({
      title: "Privacy Policy",
      description: "How Heuer M.D. Research handles information collected through this website.",
      path,
    }),
    scripts: buildArticleHeadScripts(crumbUrls),
  }),
  component: () => (
    <ArticlePage
      title="Privacy Policy"
      crumbs={[{ label: "Privacy Policy" }]}
      crumbUrls={crumbUrls}
      hideCTA
    >
      <p>This placeholder privacy policy describes how information submitted through this website may be handled. A finalized policy — reviewed by qualified counsel — will replace this text.</p>
      <h2 className="text-xl font-semibold">Information collected</h2>
      <p>Information you provide through contact forms is used to respond to your request. Please avoid sending sensitive medical details through this website.</p>
      <h2 className="text-xl font-semibold">Cookies</h2>
      <p>The website may use cookies for basic functionality. No analytics or advertising trackers are enabled by default.</p>
      <h2 className="text-xl font-semibold">Contact</h2>
      <p>Contact the Heuer M.D. Research team through the Orlando location page with any privacy questions.</p>
    </ArticlePage>
  ),
});
