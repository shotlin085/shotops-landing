import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Opslin",
  description: "Opslin terms of service: beta disclaimer, usage, responsibilities, and limitations.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EE] px-6 py-12 text-zinc-950">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-3">
          <Link href="/" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
            ← Opslin
          </Link>
          <h1 className="text-4xl font-semibold tracking-tight">Terms of Service</h1>
          <p className="text-zinc-500">Last updated: May 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Beta Software Disclaimer</h2>
          <p className="text-zinc-600 leading-7">
            Opslin is currently provided as beta software. Beta software may contain bugs, incomplete features,
            downtime, unexpected behavior, or breaking changes. You are responsible for testing deployments,
            maintaining backups, securing your servers, and deciding whether Opslin is appropriate for your workload.
            During beta, Opslin is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without
            service-level guarantees.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Use of Opslin</h2>
          <p className="text-zinc-600 leading-7">
            Opslin is a deployment control plane for authorized infrastructure. Users are responsible for
            connecting only servers, repositories, and domains they are authorized to manage. You must not use
            Opslin for illegal activities, abuse, or deployments that violate applicable laws.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">User Responsibilities</h2>
          <p className="text-zinc-600 leading-7">
            You are responsible for:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-600 leading-7">
            <li>Your servers, DNS configuration, credentials, data, applications, and cloud/firewall settings.</li>
            <li>Maintaining backups of your data, databases, and application state.</li>
            <li>Testing deployments before promoting to production.</li>
            <li>Keeping credentials private and rotating compromised secrets.</li>
            <li>Removing access for team members who no longer require platform access.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Service Limitations</h2>
          <p className="text-zinc-600 leading-7">
            During beta, the Opslin service may experience downtime, errors, data loss, incomplete features,
            or breaking changes. Platform availability depends on the Opslin control plane, your connected servers,
            network access, and third-party services including GitHub, DNS providers, and certificate authorities.
            There is no guarantee of uninterrupted service during beta.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Limitation of Liability</h2>
          <p className="text-zinc-600 leading-7">
            To the maximum extent permitted by applicable law, Opslin and its operators shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, use,
            goodwill, or other intangible losses, resulting from your use of the service, beta bugs, misconfiguration,
            deployment failure, downtime, data loss, or third-party service failures.
          </p>
          <p className="text-zinc-600 leading-7">
            Nothing in these Terms limits liability where it cannot legally be limited.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Billing</h2>
          <p className="text-zinc-600 leading-7">
            Free and Starter beta trial plans do not require a payment method. When paid plans become available,
            they will be charged at the displayed prices. Beta pricing may change as the product matures.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Prohibited Use</h2>
          <p className="text-zinc-600 leading-7">
            You must not use Opslin for illegal deployments, abuse, spam, harassment, distribution of malware,
            or any activity that violates applicable laws or regulations. Violations may result in account
            suspension or termination.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Changes to These Terms</h2>
          <p className="text-zinc-600 leading-7">
            These terms may change as Opslin evolves. Material changes will be communicated through the dashboard
            or via email. Continued use of the service after changes constitutes acceptance of the updated terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="text-zinc-600 leading-7">
            For questions about these terms, contact us at{" "}
            <a href="mailto:hello@shotlin.in" className="text-indigo-600 hover:text-indigo-700 underline">
              hello@shotlin.in
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
}
