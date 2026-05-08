import { Check, Cloud, Server, ShieldCheck, Wifi } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { architectureNodes, architectureTrustPoints } from "@/content/landing";

const nodeIcons = [Server, Wifi, Cloud];

export function ArchitectureSection() {
  return (
    <section id="architecture" className="landing-section border-b border-black/10 bg-[#EFE9DE]">
      <Reveal className="landing-container landing-reveal">
        <div className="mx-auto max-w-3xl text-center">
          <p className="landing-label">Architecture</p>
          <h2 className="landing-heading mx-auto">Built for developers who want control without manual operations.</h2>
          <p className="landing-description mx-auto mt-4">
            Opslin does not host your app workloads. Your applications stay on your own infrastructure.
            The control plane manages orchestration only.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {architectureNodes.map((node, index) => {
            const Icon = nodeIcons[index];
            return (
              <Reveal key={node.title} className="landing-reveal" delay={index * 100}>
                <article className="landing-card h-full text-center">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-indigo-500/15 bg-indigo-500/10 text-indigo-600">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.15em] text-zinc-950">{node.title}</h3>
                  <p className="mt-1 text-xs font-medium text-indigo-600">{node.subtitle}</p>
                  <p className="mt-4 text-sm leading-6 text-zinc-600">{node.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Connection arrows between cards */}
        <div className="mt-2 hidden items-center justify-center gap-2 lg:flex">
          <div className="h-px flex-1 max-w-48 border-t-2 border-dashed border-indigo-500/40" />
          <ShieldCheck className="size-5 text-indigo-500" />
          <div className="h-px flex-1 max-w-48 border-t-2 border-dashed border-indigo-500/40" />
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {architectureTrustPoints.map((point, index) => (
            <Reveal
              key={point}
              className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white/55 px-4 py-3 text-sm text-zinc-700 shadow-sm backdrop-blur"
              delay={index * 50}
            >
              <Check className="size-4 shrink-0 text-emerald-600" />
              {point}
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
