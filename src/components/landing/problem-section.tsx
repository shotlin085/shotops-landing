import { Reveal } from "@/components/reveal";
import { painPoints } from "@/content/landing";
import { Terminal, Settings, Files, Lock, Database, Undo2, Clock, HeartPulse, LayoutDashboard } from "lucide-react";

const iconMap: Record<string, typeof Terminal> = {
  terminal: Terminal, settings: Settings, files: Files, lock: Lock,
  database: Database, undo: Undo2, clock: Clock, heart: HeartPulse, layout: LayoutDashboard,
};

export function ProblemSection() {
  return (
    <section id="product" className="landing-section border-b border-black/10 bg-[#F7F4EE]">
      <Reveal className="landing-container landing-reveal">
        <div className="mx-auto max-w-3xl text-center">
          <p className="landing-label">The problem</p>
          <h2 className="landing-heading mx-auto">Deploying to a VPS shouldn&apos;t feel like this.</h2>
          <p className="landing-description mx-auto mt-4">
            Developers want the cost control and ownership of a VPS, but deployment becomes messy fast.
            Every routine task turns into a manual SSH session.
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point, index) => {
            const Icon = iconMap[point.icon] || Terminal;
            return (
              <Reveal key={point.title} className="landing-reveal" delay={index * 60}>
                <div className="flex items-start gap-4 rounded-2xl border border-black/10 bg-white/55 p-5 shadow-sm backdrop-blur transition-all hover:border-black/15 hover:bg-white/80">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-red-200/60 bg-red-50 text-red-500">
                    <Icon className="size-5" />
                  </div>
                  <p className="text-sm font-medium leading-6 text-zinc-700">{point.title}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
