import { Reveal } from "@/components/reveal";
import { useCases } from "@/content/landing";

export function UseCases() {
  return (
    <section className="landing-dark landing-section border-b border-white/10">
      <Reveal className="landing-container landing-reveal">
        <div className="mx-auto max-w-3xl text-center">
          <p className="landing-label">Who it&apos;s for</p>
          <h2 className="landing-heading mx-auto">Built for developers who own their servers.</h2>
          <p className="landing-description mx-auto mt-4">
            Opslin is designed for anyone who wants managed-platform workflows on
            infrastructure they already control.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Reveal key={useCase.title} className="landing-reveal" delay={index * 80}>
                <article className="landing-card group relative h-full overflow-hidden border-zinc-800 bg-white/[0.055] hover:bg-white/[0.075]">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{useCase.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{useCase.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
