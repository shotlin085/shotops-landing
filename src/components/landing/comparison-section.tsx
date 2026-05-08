import { Reveal } from "@/components/reveal";
import { comparisonRows } from "@/content/landing";
import { Check, X, Minus } from "lucide-react";

function CellIcon({ value }: { value: string }) {
  const lower = value.toLowerCase();
  if (lower.includes("manual") || lower === "high" || lower.includes("platform owns") || lower.includes("markup")) {
    return <span className="text-sm text-zinc-600">{value}</span>;
  }
  if (lower.includes("git push") || lower.includes("automatic") || lower.includes("built-in") || lower.includes("one-click") || lower.includes("dashboard") || lower === "low") {
    return <span className="text-sm font-medium text-zinc-800">{value}</span>;
  }
  return <span className="text-sm text-zinc-700">{value}</span>;
}

export function ComparisonSection() {
  return (
    <section className="landing-section border-b border-black/10 bg-[#EFE9DE]">
      <Reveal className="landing-container landing-reveal">
        <div className="mx-auto max-w-3xl text-center">
          <p className="landing-label">Comparison</p>
          <h2 className="landing-heading mx-auto">How Opslin fits in.</h2>
          <p className="landing-description mx-auto mt-4">
            A fair comparison between managing a VPS manually, using a traditional PaaS, and using Opslin.
          </p>
        </div>

        {/* Desktop table */}
        <div className="landing-card mt-10 hidden overflow-x-auto p-0 md:block">
          <table className="w-full min-w-[700px] border-collapse text-center text-sm">
            <thead>
              <tr className="border-b border-black/10 text-zinc-500">
                <th className="px-6 py-5 text-left font-medium">Capability</th>
                <th className="px-4 py-5 font-medium">Manual VPS</th>
                <th className="px-4 py-5 font-medium">Traditional PaaS</th>
                <th className="px-4 py-5 font-medium text-indigo-700">Opslin</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, index) => (
                <tr
                  key={row.label}
                  className={[
                    "border-b border-black/10 last:border-b-0",
                    index % 2 === 1 ? "bg-black/[0.025]" : "",
                  ].join(" ")}
                >
                  <td className="px-6 py-4 text-left font-medium text-zinc-800">{row.label}</td>
                  <td className="px-4 py-4"><CellIcon value={row.manual} /></td>
                  <td className="px-4 py-4"><CellIcon value={row.paas} /></td>
                  <td className="px-4 py-4 font-medium text-indigo-700"><CellIcon value={row.opslin} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="mt-10 grid gap-4 md:hidden">
          {comparisonRows.map((row) => (
            <div key={row.label} className="landing-card">
              <h3 className="text-sm font-semibold text-zinc-950">{row.label}</h3>
              <div className="mt-4 grid gap-2">
                <div className="flex items-center justify-between border-b border-black/10 pb-2">
                  <span className="text-xs text-zinc-500">Manual VPS</span>
                  <span className="text-sm text-zinc-600">{row.manual}</span>
                </div>
                <div className="flex items-center justify-between border-b border-black/10 pb-2">
                  <span className="text-xs text-zinc-500">Traditional PaaS</span>
                  <span className="text-sm text-zinc-600">{row.paas}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-indigo-600">Opslin</span>
                  <span className="text-sm font-medium text-indigo-700">{row.opslin}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
