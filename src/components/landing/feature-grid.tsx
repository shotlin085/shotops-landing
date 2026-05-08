import { Reveal } from "@/components/reveal";
import { features, type FeatureStatus } from "@/content/landing";

function StatusBadge({ status }: { status: FeatureStatus }) {
  if (status === "beta") {
    return (
      <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-indigo-600">
        Beta
      </span>
    );
  }
  return (
    <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-amber-700">
      Planned
    </span>
  );
}

export function FeatureGrid() {
  return (
    <section id="features" className="landing-dark landing-section border-b border-white/10">
      <Reveal className="landing-container landing-reveal">
        <div className="mx-auto max-w-3xl text-center">
          <p className="landing-label">Features</p>
          <h2 className="landing-heading mx-auto">Everything you need to manage deployments.</h2>
          <p className="landing-description mx-auto mt-4">
            Each feature is labeled with its current status. Beta features are available now.
            Planned features are on the roadmap.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} className="landing-reveal" delay={index * 70}>
                <article className="landing-card group relative h-full overflow-hidden border-zinc-800 bg-white/[0.055] hover:bg-white/[0.075]">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-indigo-400">
                      <Icon className="size-5" />
                    </div>
                    <StatusBadge status={feature.status} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{feature.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
