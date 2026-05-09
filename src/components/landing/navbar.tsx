"use client";

import { ArrowRight, Menu } from "lucide-react";
import Link from "next/link";
import { siteLinks } from "@/lib/site-links";
import { navItems } from "@/content/landing";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#F7F4EE]/82 backdrop-blur-2xl">
      <nav className="landing-container flex h-16 items-center justify-between gap-6">
        <Link href="/" className="text-xl font-semibold tracking-normal text-zinc-950" aria-label="Opslin home">
          Opslin
        </Link>

        <div className="hidden items-center gap-6 rounded-full border border-black/10 bg-white/60 px-4 py-2 shadow-sm backdrop-blur lg:flex">
          {navItems.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={siteLinks.betaFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="landing-btn-primary gap-2 px-5 py-2.5 text-sm"
          >
            Join Beta
            <ArrowRight className="size-4" />
          </a>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-zinc-700 shadow-sm transition-colors hover:border-black/20 hover:text-zinc-950 lg:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="size-5" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="border-black/10 bg-[#F7F4EE] text-zinc-950 shadow-2xl shadow-black/20"
          >
            <SheetHeader className="border-b border-black/10 px-0 pb-5">
              <SheetTitle className="text-left text-xl text-zinc-950">Opslin</SheetTitle>
              <SheetDescription className="text-left text-zinc-600">
                Beta control plane for your VPS.
              </SheetDescription>
            </SheetHeader>

            <div className="grid gap-2 pt-2">
              {navItems.map((link) => (
                <SheetClose key={link.label} asChild>
                  <a
                    href={link.href}
                    className="rounded-2xl border border-transparent px-3 py-3 text-sm font-medium text-zinc-700 transition-colors hover:border-black/10 hover:bg-white/70 hover:text-zinc-950"
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
            </div>

            <div className="mt-auto grid gap-3 border-t border-black/10 pt-5">
              <SheetClose asChild>
                <a
                  href={siteLinks.betaFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="landing-btn-primary text-center text-sm"
                >
                  Join Beta
                </a>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
