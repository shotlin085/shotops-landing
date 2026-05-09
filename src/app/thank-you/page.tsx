import Link from "next/link";
import type { Metadata } from "next";
import { siteLinks } from "@/lib/site-links";
import { ArrowLeft, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Thanks for Applying — Opslin",
  description:
    "Your Opslin beta access request has been received. We review applications manually and will contact you with next steps.",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EE] px-6 py-12 text-zinc-950">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700"
        >
          <ArrowLeft className="size-4" />
          Opslin
        </Link>

        <div className="mt-8 rounded-3xl border border-black/10 bg-white/80 p-8 shadow-[0_24px_80px_rgba(24,24,27,0.08)] backdrop-blur-xl sm:p-12">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>

          <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
            Thanks for applying to the Opslin beta
          </h1>

          <p className="mt-5 text-base leading-7 text-zinc-600">
            We&apos;ve received your beta access request. Opslin reviews early access applications
            manually so we can onboard the right users and provide support during beta.
          </p>

          <p className="mt-4 text-base leading-7 text-zinc-600">
            If your use case is a good fit for the current beta, we&apos;ll contact you soon with
            next steps.
          </p>

          <div className="mt-6 rounded-2xl border border-amber-200/60 bg-amber-50/60 p-5">
            <p className="text-sm leading-6 text-amber-900">
              <strong>Beta note:</strong> Opslin is currently in beta. Access is limited while we
              continue improving deployment reliability, database workflows, SSL automation,
              buildpack support, and dashboard experience.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(24,24,27,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-600 hover:shadow-[0_20px_48px_rgba(99,102,241,0.24)] active:translate-y-0"
            >
              <ArrowLeft className="size-4" />
              Back to homepage
            </Link>
            <a
              href={`mailto:${siteLinks.contactEmail}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-zinc-800 shadow-[0_12px_30px_rgba(24,24,27,0.08)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-black/20 hover:bg-white active:translate-y-0"
            >
              <Mail className="size-4" />
              Contact Opslin
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
