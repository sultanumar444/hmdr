import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-lg text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved. Here are some places to try:
        </p>
        <ul className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
          <li><Link to="/" className="rounded-md border border-border bg-card px-3 py-2 hover:bg-accent block">Homepage</Link></li>
          <li><Link to="/orlando-clinical-research" className="rounded-md border border-border bg-card px-3 py-2 hover:bg-accent block">Orlando clinical research</Link></li>
          <li><Link to="/patient-resources" className="rounded-md border border-border bg-card px-3 py-2 hover:bg-accent block">Patient resources</Link></li>
          <li><Link to="/locations/orlando" className="rounded-md border border-border bg-card px-3 py-2 hover:bg-accent block">Contact the team</Link></li>
        </ul>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "HMD Research | Clinical Trials in Orlando, FL" },
      { name: "description", content: "Physician-led clinical trials in Orlando and Central Florida, plus expert-witness and regulatory consulting for sponsors, CROs and attorneys." },
      { property: "og:site_name", content: "HMD Research" },
      { property: "og:title", content: "HMD Research | Clinical Trials in Orlando, FL" },
      { property: "og:description", content: "Physician-led clinical trials in Orlando and Central Florida, plus expert-witness and regulatory consulting for sponsors, CROs and attorneys." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "HMD Research | Clinical Trials in Orlando, FL" },
      { name: "twitter:description", content: "Physician-led clinical trials in Orlando and Central Florida, plus expert-witness and regulatory consulting for sponsors, CROs and attorneys." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/85c19b74-e52c-44f6-a081-6ce1622d365f/id-preview-00abca00--a32bfe45-32fa-460b-8a72-6cdfba574016.lovable.app-1784540077489.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/85c19b74-e52c-44f6-a081-6ce1622d365f/id-preview-00abca00--a32bfe45-32fa-460b-8a72-6cdfba574016.lovable.app-1784540077489.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" },
      { rel: "icon", href: "/hmd-logo.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/hmd-logo.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
