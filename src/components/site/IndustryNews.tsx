import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getIndustryNews } from "@/lib/industry-news.functions";

function formatDate(value: string | null) {
  if (!value) return null;
  const t = Date.parse(value);
  if (Number.isNaN(t)) return null;
  return new Date(t).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function useIndustryNews() {
  const fetchNews = useServerFn(getIndustryNews);
  return useQuery({
    queryKey: ["industry-news"],
    queryFn: () => fetchNews(),
    staleTime: 30 * 60 * 1000,
    retry: 1,
  });
}

/** Compact scrolling ticker of the latest industry headlines. */
export function IndustryNewsTicker() {
  const { data } = useIndustryNews();
  const items = data ?? [];
  if (items.length === 0) return null;

  return (
    <div className="border-y border-border bg-card">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-2.5">
        <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-secondary-foreground">
          Industry news
        </span>
        <div className="group relative flex-1 overflow-hidden">
          <div
            className="flex w-max items-center gap-10 whitespace-nowrap group-hover:[animation-play-state:paused]"
            style={{ animation: "hmd-marquee 260s linear infinite" }}
          >
            {[0, 1].map((copy) => (
              <div key={copy} aria-hidden={copy === 1} className="flex items-center gap-10">
                {items.map((n) => (
                  <a
                    key={`${copy}-${n.link}`}
                    href={n.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    <span className="font-medium text-foreground/70">{n.source}:</span> {n.title}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Full list of live headlines from public regulatory and research feeds. */
export function IndustryNewsFeed() {
  const { data, isLoading, isError } = useIndustryNews();
  const items = data ?? [];

  return (
    <div>
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Live industry headlines</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Automatically updated from public FDA, NIH and ClinicalTrials.gov feeds. External sources, not
          affiliated with HMD Research.
        </p>
      </div>

      {isLoading && (
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-20 animate-pulse rounded-xl border border-border bg-muted/40" />
          ))}
        </div>
      )}

      {!isLoading && items.length === 0 && (
        <div className="mt-6 rounded-xl border border-dashed border-border p-6 text-sm text-muted-foreground">
          {isError
            ? "Industry headlines are temporarily unavailable. Please check back shortly."
            : "No headlines available right now."}
        </div>
      )}

      {items.length > 0 && (
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {items.map((n) => (
            <a
              key={n.link}
              href={n.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-border bg-card p-5 transition hover:border-secondary/60 hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="rounded-full bg-primary/10 px-2 py-0.5 font-medium text-primary">{n.source}</span>
                {formatDate(n.date) && <span>{formatDate(n.date)}</span>}
              </div>
              <div className="mt-2 font-medium group-hover:text-primary">{n.title}</div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
