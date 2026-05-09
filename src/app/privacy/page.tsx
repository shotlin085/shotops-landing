import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Opslin",
  description: "Opslin privacy policy: what data we collect during beta, how we handle it, and your rights.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EE] px-6 py-12 text-zinc-950">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-3">
          <Link href="/" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
            ← Opslin
          </Link>
          <h1 className="text-4xl font-semibold tracking-tight">Privacy Policy</h1>
          <p className="text-zinc-500">Last updated: May 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Who Operates Opslin</h2>
          <p className="text-zinc-600 leading-7">
            Opslin is operated by the Opslin team. For any privacy-related questions, contact us
            at <a href="mailto:opslin@opslin.com" className="text-indigo-600 hover:text-indigo-700 underline">opslin@opslin.com</a>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Information We May Collect</h2>
          <p className="text-zinc-600 leading-7">
            When you create an account or use Opslin during beta, we may collect:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-600 leading-7">
            <li><strong>Account information</strong> — email address, name, and password hash used to create and authenticate your account.</li>
            <li><strong>Server and app metadata</strong> — server IP, hostname, OS, agent version, app names, deployment records, and configuration metadata needed to run the platform.</li>
            <li><strong>Logs and diagnostics</strong> — deployment logs, error reports, and operational diagnostics that help us debug issues and improve the service.</li>
            <li><strong>Usage data</strong> — basic analytics about how you interact with the dashboard to understand feature usage and improve UX.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Cookies and Analytics</h2>
          <p className="text-zinc-600 leading-7">
            The Opslin dashboard may use essential cookies for authentication and session management.
            We may use basic, privacy-respecting analytics to understand feature usage. We do not use
            invasive tracking or sell data to advertisers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">We Do Not Sell Your Data</h2>
          <p className="text-zinc-600 leading-7">
            Opslin does not sell, rent, or share personal data with third parties for advertising or marketing purposes.
            Data is used exclusively to operate and improve the platform.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Payments</h2>
          <p className="text-zinc-600 leading-7">
            When paid plans become available, checkout will be handled by a third-party payment processor (such as Razorpay).
            Opslin records subscription and invoice metadata but does not store full payment card details.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Beta and Security Limitations</h2>
          <p className="text-zinc-600 leading-7">
            Opslin is currently beta software. While we take reasonable measures to protect your data,
            beta software may contain security limitations, bugs, or incomplete features. We recommend
            not storing highly sensitive or regulated data through the platform during beta.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Data Retention and Deletion</h2>
          <p className="text-zinc-600 leading-7">
            You may request data export or deletion by contacting us at{" "}
            <a href="mailto:opslin@opslin.com" className="text-indigo-600 hover:text-indigo-700 underline">opslin@opslin.com</a>.
            Operational audit records may be retained where required for security, abuse prevention, or legal compliance.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Changes to This Policy</h2>
          <p className="text-zinc-600 leading-7">
            This policy may be updated as Opslin evolves. Material changes will be communicated through the dashboard
            or via email. Continued use of the service after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="text-zinc-600 leading-7">
            For privacy-related questions, deletion requests, or concerns, contact us at{" "}
            <a href="mailto:opslin@opslin.com" className="text-indigo-600 hover:text-indigo-700 underline">
              opslin@opslin.com
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
}
