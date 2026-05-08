import { Reveal } from "@/components/reveal";
import { betaGoodFor, betaCautionFor } from "@/content/landing";
import { Check, AlertTriangle } from "lucide-react";

export function BetaTransparency() {
  return (
    <section id="beta" className="landing-dark landing-section border-b border-white/10">
      <Reveal className="landing-container landing-reveal">
        <div className="mx-auto max-w-3xl text-center">
          <p className="landing-label">Beta transparency</p>
          <h2 className="landing-heading mx-auto">Built in public beta, with transparent limits.</h2>
          <p className="landing-description mx-auto mt-4">
            Opslin is currently beta software. Some features may have bugs, downtime, incomplete
            edge-case handling, or breaking changes. We are actively improving deployment reliability,
            database workflows, SSL automation, buildpack support, and dashboard UX.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          <Reveal className="landing-reveal" delay={0}>
            <div className="landing-card h-full border-emerald-500/15 bg-emerald-500/[0.04] hover:border-emerald-500/25 hover:bg-emerald-500/[0.06]">
              <div className="flex items-center gap-3 border-b border-emerald-500/10 pb-5">
                <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Check className="size-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">Good for</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {betaGoodFor.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-zinc-300">
                    <Check className="size-4 shrink-0 text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="landing-reveal" delay={100}>
            <div className="landing-card h-full border-amber-500/15 bg-amber-500/[0.04] hover:border-amber-500/25 hover:bg-amber-500/[0.06]">
              <div className="flex items-center gap-3 border-b border-amber-500/10 pb-5">
                <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                  <AlertTriangle className="size-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">Use caution for</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {betaCautionFor.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-zinc-300">
                    <AlertTriangle className="size-4 shrink-0 text-amber-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
}
