import { Reveal } from "@/components/reveal";
import { siteLinks } from "@/lib/site-links";
import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section className="landing-dark landing-section bg-[#0A0A0A]">
      <Reveal className="landing-container landing-reveal">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 p-px">
          <div className="relative rounded-3xl bg-[#0A0A0A] px-8 py-16 text-center sm:px-16 sm:py-24">
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.16),transparent_45%)]" />
            <div className="relative">
              <p className="landing-label">Get started</p>
              <h2 className="landing-heading mx-auto mb-4">
                Turn your VPS into a deployment platform.
              </h2>
              <p className="landing-description mx-auto mb-8">
                No credit card required. Starter is free for 6 months during beta while product limits,
                reliability, and support are validated in the open.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={siteLinks.register}
                  className="landing-btn-primary inline-flex gap-2 px-8 py-4 text-base"
                >
                  Start Free Beta
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href={`mailto:${siteLinks.contactEmail}`}
                  className="landing-btn-secondary inline-flex px-8 py-4 text-base"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
