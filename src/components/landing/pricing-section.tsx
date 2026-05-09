import { Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { siteLinks } from "@/lib/site-links";
import { pricingPlans } from "@/content/landing";

export function PricingSection() {
  return (
    <section id="pricing" className="landing-section border-b border-black/10 bg-[#F7F4EE]">
      <Reveal className="landing-container landing-reveal">
        <div className="mx-auto max-w-3xl text-center">
          <p className="landing-label">Pricing</p>
          <h2 className="landing-heading mx-auto">Private beta access — simple pricing in INR.</h2>
          <p className="landing-description mx-auto mt-4">
            Apply for beta access. Beta pricing may change as the product matures.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:mt-14 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.name} className="landing-reveal" delay={index * 100}>
              <article
                className={[
                  "landing-card relative flex h-full flex-col",
                  plan.popular ? "bg-zinc-950 text-white ring-2 ring-indigo-500 hover:bg-zinc-950" : "",
                ].join(" ")}
              >
                {plan.popular ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1 text-xs font-medium text-white">
                    Best value
                  </span>
                ) : null}

                <h3 className={["text-lg font-semibold", plan.popular ? "text-white" : "text-zinc-950"].join(" ")}>
                  {plan.name}
                </h3>
                <p className={["mt-2 min-h-10 text-sm leading-5", plan.popular ? "text-zinc-400" : "text-zinc-600"].join(" ")}>
                  {plan.summary}
                </p>

                <div className="mb-6 mt-5">
                  <span className={["text-4xl font-bold tracking-normal", plan.popular ? "text-white" : "text-zinc-950"].join(" ")}>
                    {plan.price}
                  </span>
                  <span className="text-sm text-zinc-500">{plan.period}</span>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className={["flex items-center gap-2 text-sm", plan.popular ? "text-zinc-300" : "text-zinc-700"].join(" ")}>
                      <Check className="size-4 shrink-0 text-indigo-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={siteLinks.betaFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[
                    plan.popular ? "landing-btn-primary" : "landing-btn-secondary",
                    "w-full text-center text-sm",
                  ].join(" ")}
                >
                  {plan.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-6 text-zinc-500">
          Beta pricing may change as the product matures. Access is limited during beta.
          Need more capacity?{" "}
          <a href={`mailto:${siteLinks.contactEmail}`} className="text-indigo-600 hover:text-indigo-700 underline">
            Contact us
          </a>.
        </p>
      </Reveal>
    </section>
  );
}
