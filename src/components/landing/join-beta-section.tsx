import { Reveal } from "@/components/reveal";
import { siteLinks } from "@/lib/site-links";
import { ArrowRight, ClipboardList } from "lucide-react";

const formFields = [
  "Name",
  "Email address",
  "Phone / WhatsApp number",
  "Company or project name",
  "Whether you already have a VPS/server",
  "VPS or cloud provider",
  "What you want to deploy",
  "Your current deployment problem",
];

export function JoinBetaSection() {
  return (
    <section id="join-beta" className="landing-section border-b border-black/10 bg-[#F7F4EE]">
      <Reveal className="landing-container landing-reveal">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/80 p-8 shadow-[0_24px_80px_rgba(24,24,27,0.08)] backdrop-blur-xl sm:p-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(99,102,241,0.08),transparent_40%)]" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex size-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600">
                  <ClipboardList className="size-5" />
                </div>
                <p className="landing-label mb-0">Beta access</p>
              </div>

              <h2 className="landing-heading mt-4">Apply for Opslin beta access</h2>

              <p className="landing-description mt-4 max-w-none">
                Opslin is onboarding early users carefully. Tell us what you want to deploy and
                we&apos;ll review your request. If your use case is a good fit for the current beta,
                we&apos;ll contact you with next steps.
              </p>

              <div className="mt-8 rounded-2xl border border-black/8 bg-[#F7F4EE]/60 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500 mb-4">
                  What we ask
                </h3>
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {formFields.map((field) => (
                    <li
                      key={field}
                      className="flex items-center gap-2.5 text-sm text-zinc-700"
                    >
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-xs text-indigo-600">
                        ✓
                      </span>
                      {field}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  href={siteLinks.betaFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="landing-btn-primary gap-2 px-7 py-3.5 text-base"
                >
                  Open beta access form
                  <ArrowRight className="size-4" />
                </a>
              </div>

              <p className="mt-6 text-sm text-zinc-500">
                The form is powered by Tally. Submissions are reviewed manually during beta.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
