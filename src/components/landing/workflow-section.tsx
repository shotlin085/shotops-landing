"use client";

import { Reveal } from "@/components/reveal";
import { workflowStages } from "@/content/landing";
import { CheckCircle2, Circle, Loader2 } from "lucide-react";

function StatusIcon({ status }: { status: "done" | "active" | "pending" }) {
  if (status === "done") return <CheckCircle2 className="size-5 text-emerald-400" />;
  if (status === "active") return <Loader2 className="size-5 animate-spin text-indigo-400" />;
  return <Circle className="size-5 text-zinc-600" />;
}

export function WorkflowSection() {
  return (
    <section className="landing-section border-b border-black/10 bg-[#F7F4EE]">
      <Reveal className="landing-container landing-reveal">
        <div className="mx-auto max-w-3xl text-center">
          <p className="landing-label">Deployment workflow</p>
          <h2 className="landing-heading mx-auto">What happens when you deploy.</h2>
          <p className="landing-description mx-auto mt-4">
            A realistic look at the deployment pipeline. From repo connection to rollback availability —
            each step is visible in the Opslin dashboard.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="overflow-hidden rounded-3xl border border-black/10 bg-white/75 shadow-[0_18px_60px_rgba(24,24,27,0.08)] backdrop-blur-xl">
            <div className="border-b border-black/10 bg-zinc-950 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5" aria-hidden="true">
                  <div className="size-3 rounded-full bg-white/20" />
                  <div className="size-3 rounded-full bg-white/20" />
                  <div className="size-3 rounded-full bg-white/20" />
                </div>
                <span className="ml-auto text-xs font-medium text-zinc-400">Deployment Pipeline</span>
              </div>
            </div>
            <div className="bg-[#0A0A0A] p-4 sm:p-6">
              {workflowStages.map((stage, index) => (
                <Reveal key={stage.label} className="landing-reveal" delay={index * 80}>
                  <div className="flex items-center gap-4 border-b border-white/5 py-3.5 last:border-b-0">
                    <StatusIcon status={stage.status} />
                    <span
                      className={[
                        "text-sm font-medium",
                        stage.status === "done" ? "text-zinc-200" : "",
                        stage.status === "active" ? "text-indigo-300" : "",
                        stage.status === "pending" ? "text-zinc-600" : "",
                      ].join(" ")}
                    >
                      {stage.label}
                    </span>
                    <span className="ml-auto text-xs text-zinc-600">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="border-t border-white/10 bg-[#0A0A0A] px-6 py-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-500">Pipeline preview</span>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  5 / 10 complete
                </span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
