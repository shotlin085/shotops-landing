import { Reveal } from "@/components/reveal";
import { trustCards } from "@/content/landing";
import { BadgeCheck, Eye, LockKeyhole, GitBranch, Shield } from "lucide-react";

const icons = [BadgeCheck, Eye, LockKeyhole, Shield, GitBranch];

export function TrustBar() {
  return (
    <section className="border-b border-black/10 bg-[#EFE9DE] py-10">
      <Reveal className="landing-container landing-reveal">
        <div className="flex items-center gap-4 mb-6">
          <div className="hidden h-px flex-1 bg-black/10 sm:block" />
          <p className="shrink-0 text-center text-xs uppercase tracking-[0.2em] text-zinc-500">
            Why trust a beta product?
          </p>
          <div className="hidden h-px flex-1 bg-black/10 sm:block" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {trustCards.map((card, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal
                key={card.title}
                className="group flex flex-col gap-3 rounded-2xl border border-black/10 bg-white/55 p-5 shadow-sm backdrop-blur transition-all hover:border-black/20 hover:bg-white hover:-translate-y-0.5"
                delay={index * 80}
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-[#F7F4EE] text-indigo-600">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-sm font-semibold text-zinc-800">{card.title}</h3>
                <p className="text-xs leading-5 text-zinc-500">{card.copy}</p>
              </Reveal>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
