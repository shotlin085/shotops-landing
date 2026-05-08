import { Reveal } from "@/components/reveal";
import { securityPoints } from "@/content/landing";
import { ShieldCheck, ShieldAlert, KeyRound, Lock, Server, AlertTriangle } from "lucide-react";

const icons = [ShieldCheck, Lock, KeyRound, ShieldAlert, Server, AlertTriangle];

export function SecuritySection() {
  return (
    <section className="landing-section border-b border-black/10 bg-[#F7F4EE]">
      <Reveal className="landing-container landing-reveal">
        <div className="mx-auto max-w-3xl text-center">
          <p className="landing-label">Security</p>
          <h2 className="landing-heading mx-auto">Honest security posture for a beta product.</h2>
          <p className="landing-description mx-auto mt-4">
            Opslin is designed with security in mind. Here is what is in place today and where the product
            is heading.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {securityPoints.map((point, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={point.title} className="landing-reveal" delay={index * 80}>
                <article className="landing-card h-full">
                  <div className="flex size-11 items-center justify-center rounded-2xl border border-indigo-500/15 bg-indigo-500/10 text-indigo-600">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-zinc-950">{point.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{point.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
