"use client";

import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { Monitor } from "lucide-react";
import { useState } from "react";

/* ───────── screenshot data ───────── */

const CLD = "https://res.cloudinary.com/shotlin/image/upload";
const OPT = "f_auto,q_auto,w_1600";

const productScreenshots = [
  {
    title: "Agent control plane",
    description:
      "Track connected agents, secure-control status, helper availability, and update readiness across servers.",
    image: `${CLD}/${OPT}/v1778309683/Screenshot_2026-05-09_at_12.24.14_PM_ktyps3.png`,
    alt: "Opslin agent control plane showing online agents and secure control status",
  },
  {
    title: "Apps dashboard",
    description:
      "View running apps, deployment status, ports, servers, and release activity from one dashboard.",
    image: `${CLD}/${OPT}/v1778309682/Screenshot_2026-05-09_at_12.23.30_PM_rqdnp3.png`,
    alt: "Opslin apps dashboard showing running apps and deployment status",
  },
  {
    title: "App overview",
    description:
      "Open deployed URLs, check health, view latest deploys, and access logs or server details quickly.",
    image: `${CLD}/${OPT}/v1778309682/Screenshot_2026-05-09_at_12.21.29_PM_ex875r.png`,
    alt: "Opslin app overview showing deployed URL, health status, and latest deployment",
  },
  {
    title: "Deployment timeline",
    description:
      "Follow every release from queue to source fetch, runtime detection, image build, health checks, and live traffic.",
    image: `${CLD}/${OPT}/v1778309682/Screenshot_2026-05-09_at_12.22.21_PM_vpcsml.png`,
    alt: "Opslin deployment timeline showing step-by-step release progress",
  },
  {
    title: "Server monitoring",
    description:
      "Monitor CPU, memory, disk, uptime, network throughput, and bottleneck signals in one place.",
    image: `${CLD}/${OPT}/v1778309682/Screenshot_2026-05-09_at_12.22.30_PM_euh8le.png`,
    alt: "Opslin server monitoring showing CPU, memory, disk, and network metrics",
  },
  {
    title: "Server onboarding",
    description:
      "Install the Opslin agent on a Linux VPS or local Docker environment using guided setup commands.",
    image: `${CLD}/${OPT}/v1778309682/Screenshot_2026-05-09_at_12.22.58_PM_rk73ws.png`,
    alt: "Opslin server onboarding screen with agent installation commands",
  },
  {
    title: "Dashboard workspace",
    description:
      "Manage servers, agents, apps, deployments, databases, monitoring, alerts, and team workflows from one interface.",
    image: `${CLD}/${OPT}/v1778309681/Screenshot_2026-05-09_at_12.23.41_PM_ujrkrc.png`,
    alt: "Opslin dashboard workspace showing servers, agents, and deployment overview",
  },
];

/* ───────── lightbox component ───────── */

function Lightbox({
  screenshot,
  onClose,
}: {
  screenshot: (typeof productScreenshots)[number];
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={screenshot.title}
    >
      <div
        className="relative w-full max-w-6xl animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 flex size-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
          aria-label="Close preview"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" /><path d="m6 6 12 12" />
          </svg>
        </button>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={screenshot.image}
              alt={screenshot.alt}
              fill
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 1200px"
              priority
            />
          </div>
          <div className="border-t border-white/10 px-6 py-4">
            <p className="text-sm font-semibold text-white">{screenshot.title}</p>
            <p className="mt-1 text-xs text-zinc-400">{screenshot.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────── screenshot card ───────── */

function ScreenshotCard({
  screenshot,
  index,
  featured = false,
  onOpen,
}: {
  screenshot: (typeof productScreenshots)[number];
  index: number;
  featured?: boolean;
  onOpen: () => void;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <Reveal className="landing-reveal" delay={index * 80}>
      <button
        type="button"
        onClick={onOpen}
        className={[
          "group relative flex w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-black/8 bg-white/70 shadow-[0_12px_40px_rgba(24,24,27,0.06)] backdrop-blur-xl transition-all duration-300",
          "hover:-translate-y-1 hover:border-black/14 hover:bg-white/90 hover:shadow-[0_20px_60px_rgba(24,24,27,0.10)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F4EE]",
          featured ? "md:col-span-2 lg:col-span-2" : "",
        ].join(" ")}
        aria-label={`Preview: ${screenshot.title}`}
      >
        {/* browser chrome */}
        <div className="flex items-center gap-2 border-b border-black/6 bg-white/50 px-4 py-2.5">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-red-400/60" />
            <span className="size-2.5 rounded-full bg-amber-400/60" />
            <span className="size-2.5 rounded-full bg-emerald-400/60" />
          </div>
          <span className="ml-2 truncate rounded-md bg-zinc-100/80 px-3 py-0.5 text-[10px] text-zinc-400">
            app.opslin.com
          </span>
          <div className="ml-auto opacity-0 transition-opacity group-hover:opacity-100">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400">
              <path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
          </div>
        </div>

        {/* screenshot area */}
        <div className={[
          "relative w-full overflow-hidden bg-zinc-50",
          featured ? "aspect-[16/9]" : "aspect-[16/10]",
        ].join(" ")}>
          {imgError ? (
            <div className="flex h-full w-full items-center justify-center bg-zinc-100">
              <div className="text-center">
                <Monitor className="mx-auto size-8 text-zinc-300" />
                <p className="mt-2 text-xs text-zinc-400">Preview unavailable</p>
              </div>
            </div>
          ) : (
            <Image
              src={screenshot.image}
              alt={screenshot.alt}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              sizes={
                featured
                  ? "(max-width: 768px) 100vw, (max-width: 1280px) 66vw, 900px"
                  : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 420px"
              }
              loading={index === 0 ? "eager" : "lazy"}
              onError={() => setImgError(true)}
            />
          )}

          {/* hover shimmer */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.04] via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        </div>

        {/* caption */}
        <div className="flex flex-1 flex-col px-5 py-4 text-left">
          <h3 className="text-sm font-semibold text-zinc-900">{screenshot.title}</h3>
          <p className="mt-1.5 text-xs leading-5 text-zinc-500">{screenshot.description}</p>
        </div>
      </button>
    </Reveal>
  );
}

/* ───────── main section ───────── */

export function ProductPreviewSection() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const featured = productScreenshots[0];
  const rest = productScreenshots.slice(1);

  return (
    <>
      <section
        id="product-preview"
        className="landing-section border-b border-black/10 bg-[#F7F4EE]"
      >
        <Reveal className="landing-container landing-reveal">
          {/* header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="landing-label">Beta product preview</p>
            <h2 className="landing-heading mx-auto">See Opslin in action</h2>
            <p className="landing-description mx-auto mt-4">
              Opslin is currently in beta, but the core dashboard is already being tested with
              real deployment workflows: connected agents, running apps, deployment timelines,
              server monitoring, and VPS onboarding.
            </p>
          </div>

          {/* featured + grid */}
          <div className="mx-auto mt-10 max-w-6xl sm:mt-14">
            {/* featured card */}
            <ScreenshotCard
              screenshot={featured}
              index={0}
              featured
              onOpen={() => setLightboxIdx(0)}
            />

            {/* grid */}
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((s, i) => (
                <ScreenshotCard
                  key={s.title}
                  screenshot={s}
                  index={i + 1}
                  onOpen={() => setLightboxIdx(i + 1)}
                />
              ))}
            </div>
          </div>

          {/* trust note */}
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-zinc-500">
            Screenshots show the current beta dashboard. Some details may change as Opslin improves.
          </p>
        </Reveal>
      </section>

      {/* lightbox */}
      {lightboxIdx !== null && (
        <Lightbox
          screenshot={productScreenshots[lightboxIdx]}
          onClose={() => setLightboxIdx(null)}
        />
      )}
    </>
  );
}
