import { ArrowRight, Check, ChevronDown, ShieldCheck } from "lucide-react";
import { AnimatedShinyText } from "@/components/magic-ui/animated-shiny-text";
import { ShineBorder } from "@/components/magic-ui/shine-border";
import { siteLinks } from "@/lib/site-links";
import { brand, heroBadges, heroLogs } from "@/content/landing";

const pipeline = ["Build", "Deploy", "Live"];

export function Hero() {
  return (
    <section className="landing-grid-bg relative overflow-hidden border-b border-black/10 bg-[#F7F4EE] pb-16 pt-12 sm:pb-28 sm:pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(99,102,241,0.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.76),rgba(247,244,238,0.9)_45%,rgba(239,233,222,0.92))]" />
      <div className="landing-container relative">
        <div className="mx-auto max-w-5xl text-center">
          <AnimatedShinyText>Private beta— early access for VPS owners</AnimatedShinyText>

          <h1 className="mx-auto mt-7 max-w-5xl text-center text-4xl font-semibold leading-[1.03] tracking-normal text-zinc-950 sm:text-6xl lg:text-7xl">
            {brand.tagline}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-7 text-zinc-600 sm:mt-6 sm:text-xl sm:leading-8">
            {brand.description}
          </p>

          <div className="mx-auto mt-8 flex w-full max-w-sm flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row">
            <a href={siteLinks.betaFormUrl} target="_blank" rel="noopener noreferrer" className="landing-btn-primary gap-2 px-7 py-3.5 text-base">
              Join Beta
              <ArrowRight className="size-4" />
            </a>
            <a href="#how-it-works" className="landing-btn-secondary gap-2 px-7 py-3.5 text-base">
              See how it works
              <ChevronDown className="size-4" />
            </a>
          </div>

          <div className="mx-auto mt-6 flex max-w-lg flex-wrap items-center justify-center gap-2.5 sm:max-w-none sm:gap-3">
            {heroBadges.map((badge) => (
              <span key={badge} className="inline-flex items-center gap-1.5 rounded-full bg-white/60 px-3 py-1.5 text-xs font-medium text-zinc-600 shadow-sm ring-1 ring-black/10 sm:text-sm">
                <Check className="size-4 text-indigo-600" />
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-5xl sm:mt-16">
          <ShineBorder className="rounded-3xl sm:rounded-[2rem]" innerClassName="bg-[#0A0A0A] text-white rounded-[calc(1.5rem-1px)] sm:rounded-[calc(2rem-1px)]">
            <div className="grid overflow-hidden rounded-[calc(1.5rem-1px)] sm:rounded-[calc(2rem-1px)] lg:grid-cols-[0.95fr_1.05fr]">
              <div className="border-b border-white/10 p-4 sm:p-5 lg:border-b-0 lg:border-r lg:p-7">
                <div className="flex min-w-0 items-center gap-2 border-b border-white/10 pb-4">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <div className="size-3 rounded-full bg-white/20" />
                    <div className="size-3 rounded-full bg-white/20" />
                    <div className="size-3 rounded-full bg-white/20" />
                  </div>
                  <div className="ml-auto truncate rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400">
                    app.opslin.com
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <span className="font-medium text-white">my-api</span>
                      <p className="mt-1 text-xs text-zinc-500">main branch · beta deploy preview</p>
                    </div>
                    <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-300">Ready</span>
                  </div>
                  <div className="mb-2 flex gap-1.5">
                    {pipeline.map((step) => (
                      <div key={step} className="h-1.5 flex-1 rounded-full bg-indigo-400" />
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs text-zinc-500">
                    <span>Build</span>
                    <span className="text-center">Deploy</span>
                    <span className="text-right text-emerald-300">Live</span>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Deploy logs</p>
                  <div className="space-y-2 font-mono text-xs text-zinc-400">
                    {heroLogs.map((line) => (
                      <p key={line}><span className="text-indigo-300">$</span> {line}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative p-4 sm:p-5 lg:p-7">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(99,102,241,0.2),transparent_35%)]" />
                <div className="relative rounded-3xl border border-white/10 bg-white/[0.045] p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">Architecture preview</p>
                      <h2 className="mt-3 text-xl font-semibold tracking-normal text-white sm:text-2xl">
                        Control plane only. Workloads stay yours.
                      </h2>
                    </div>
                    <ShieldCheck className="size-5 shrink-0 text-emerald-300 sm:size-6" />
                  </div>

                  <div className="mt-5 grid gap-3 sm:mt-7 sm:grid-cols-2">
                    {[
                      ["Your VPS", "Apps, databases, nginx"],
                      ["Opslin Cloud", "Dashboard and API"],
                      ["Agent", "Outbound connection"],
                      ["Beta status", "Early access, transparent limits"],
                    ].map(([title, copy]) => (
                      <div key={title} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                        <p className="text-sm font-medium text-white">{title}</p>
                        <p className="mt-1 text-xs leading-5 text-zinc-500">{copy}</p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-6 rounded-2xl border border-indigo-400/20 bg-indigo-400/10 p-4 text-sm leading-6 text-indigo-100">
                    Honest beta note: Opslin is not claiming public traction yet. The product is being
                    opened carefully so the deployment agent, billing, and support model can be validated.
                  </p>
                </div>
              </div>
            </div>
          </ShineBorder>
        </div>
      </div>
    </section>
  );
}
