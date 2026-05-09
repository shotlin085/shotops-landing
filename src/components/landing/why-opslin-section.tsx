import { Reveal } from "@/components/reveal";
import { Lightbulb, Wrench } from "lucide-react";

const cards = [
  {
    icon: Lightbulb,
    title: "Why Opslin exists",
    copy: "Opslin helps developers and small teams use affordable VPS infrastructure without spending days on Docker, Nginx, SSL, database setup, environment variables, and rollback workflows. The goal is to make self-owned servers feel as simple as a managed deployment platform while keeping workloads on the customer\u2019s infrastructure.",
  },
  {
    icon: Wrench,
    title: "What we are building during beta",
    copy: "During beta, we are focused on reliable Git deployments, safer environment-variable workflows, database connectivity, custom domains, SSL automation, health checks, deployment timelines, rollback, and server monitoring. Early users help us validate real-world VPS providers, frameworks, and deployment patterns.",
  },
];

export function WhyOpslinSection() {
  return (
    <section className="landing-section border-b border-black/10 bg-[#F7F4EE]">
      <Reveal className="landing-container landing-reveal">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-5 md:grid-cols-2">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} className="landing-reveal" delay={index * 100}>
                  <article className="landing-card relative h-full overflow-hidden">
                    <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
                    <div className="flex items-center gap-3 mb-5">
                      <div className="flex size-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600">
                        <Icon className="size-5" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-950">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-600">{card.copy}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
