import Link from "next/link";
import { siteLinks } from "@/lib/site-links";
import { footerColumns } from "@/content/landing";

export function Footer() {
  return (
    <footer className="landing-dark border-t border-zinc-800 bg-[#0A0A0A] py-12">
      <div className="landing-container">
        <div className="grid gap-10 md:grid-cols-[1.5fr_0.5fr_0.5fr_0.5fr]">
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight text-white">
              Opslin
            </Link>
            <p className="mt-4 max-w-md text-sm leading-6 text-zinc-500">
              Deploy apps on your own VPS without DevOps complexity.
              A beta control plane for Linux servers.
            </p>
            <a
              href={siteLinks.betaFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="landing-btn-secondary mt-6 inline-flex text-sm"
            >
              Join Beta
            </a>
          </div>

          <div>
            <h2 className="text-sm font-medium text-white">Product</h2>
            <div className="mt-4 grid gap-3">
              {footerColumns.product.map((link) => (
                <a key={link.label} href={link.href} className="text-sm text-zinc-500 transition-colors hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-medium text-white">Company</h2>
            <div className="mt-4 grid gap-3">
              {footerColumns.company.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-zinc-500 transition-colors hover:text-white"
                  {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-medium text-white">Legal</h2>
            <div className="mt-4 grid gap-3">
              {footerColumns.legal.map((link) => (
                <a key={link.label} href={link.href} className="text-sm text-zinc-500 transition-colors hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800 pt-6">
          <p className="text-sm text-zinc-600">© 2026 Opslin. All rights reserved.</p>
          <p className="text-sm text-zinc-600">
            <a href={`mailto:${siteLinks.contactEmail}`} className="transition-colors hover:text-white">
              {siteLinks.contactEmail}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
