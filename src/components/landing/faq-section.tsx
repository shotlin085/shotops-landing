"use client";

import { Reveal } from "@/components/reveal";
import { faqItems } from "@/content/landing";

export function FaqSection() {
  return (
    <section id="faq" className="landing-section border-b border-black/10 bg-[#F7F4EE]">
      <Reveal className="landing-container landing-reveal">
        <div className="mx-auto max-w-3xl text-center">
          <p className="landing-label">FAQ</p>
          <h2 className="landing-heading mx-auto">Questions developers ask before connecting a server.</h2>
        </div>

        <div className="mx-auto mt-10 w-full max-w-3xl divide-y divide-black/10">
          {faqItems.map((faq, index) => (
            <details
              key={faq.question}
              className="group py-2"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-left text-base font-semibold text-zinc-950 transition-colors hover:text-indigo-700 [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <span className="text-xl text-zinc-600 transition-transform group-open:rotate-45 group-open:text-indigo-400">
                  +
                </span>
              </summary>
              <p className="pb-4 text-base leading-relaxed text-zinc-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
