import { partners } from "@/lib/site-data";

/**
 * Continuous horizontal marquee of partner logos.
 * Duplicated track gives a seamless loop; pauses on hover.
 */
export function PartnerMarquee({ heading = "Trusted by sponsors, CROs and IRBs" }: { heading?: string }) {
  const row = partners.slice(0, 30);
  const half = Math.ceil(row.length / 2);
  const rows = [row.slice(0, half), row.slice(half)];

  return (
    <div>
      <div className="text-center">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Our Partners</div>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">{heading}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
          A selection of pharmaceutical sponsors, contract research organizations and review boards our team
          has worked with across more than two decades of clinical research.
        </p>
      </div>

      <div className="relative mt-10 space-y-4 overflow-hidden rounded-2xl border border-border bg-card py-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-card to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-card to-transparent" />
        {rows.map((logos, i) => (
          <div key={i} className="group flex overflow-hidden">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="flex shrink-0 items-center gap-4 pr-4 group-hover:[animation-play-state:paused]"
                style={{
                  animation: `hmd-marquee ${i === 0 ? 42 : 52}s linear infinite`,
                  animationDirection: i === 1 ? "reverse" : "normal",
                }}
              >
                {logos.map((p) => (
                  <div
                    key={`${copy}-${p.name}`}
                    className="flex h-20 w-36 shrink-0 items-center justify-center rounded-xl border border-border/70 bg-background px-4 shadow-sm transition hover:-translate-y-0.5 hover:border-secondary/60 hover:shadow-md"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="max-h-10 w-auto object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
