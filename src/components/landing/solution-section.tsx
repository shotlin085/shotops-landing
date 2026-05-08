import { Reveal } from "@/components/reveal";
import { solutionSteps } from "@/content/landing";
import { Server, Download, GitBranch, Rocket, Settings, Activity } from "lucide-react";

const icons = [Server, Download, GitBranch, Rocket, Settings, Activity];

export function SolutionSection() {
  return (
    <section className="landing-dark landing-section border-b border-white/10">
      <Reveal className="landing-container landing-reveal">
        <div className="mx-auto max-w-3xl text-center">
          <p className="landing-label">The solution</p>
          <h2 className="landing-heading mx-auto">
            Opslin turns a Linux server into a managed deployment workspace.
          </h2>
          <p className="landing-description mx-auto mt-4">
            Keep the cost and ownership of your VPS. Get the workflow of a managed deployment platform.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutionSteps.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={item.step} className="landing-reveal" delay={index * 80}>
                <article className="landing-card group relative h-full overflow-hidden border-zinc-800 bg-white/[0.055] hover:bg-white/[0.075]">
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                      <Icon className="size-5" />
                    </div>
                    <span className="text-xs font-bold text-indigo-400">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{item.step}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
