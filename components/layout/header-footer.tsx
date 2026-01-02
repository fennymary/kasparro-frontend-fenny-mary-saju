"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heading, Text } from "@/components/ui/typography";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-40">
      {/* Skip link for keyboard users */}
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed top-4 left-4 z-50 bg-white text-sm px-3 py-2 rounded shadow">Skip to content</a>
      <div className="container-section py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center motion-safe:transform motion-safe:hover:scale-105 motion-reduce:transition-none">
            <span className="text-white font-bold text-lg">K</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
              Kasparro
            </span>
            <span className="text-xs text-slate-500">AI SEO Intelligence</span>
          </div>
        </Link>

        <nav role="navigation" aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className="text-slate-600 hover:text-slate-900 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            Home
          </Link>
          <Link
            href="/platform"
            aria-current={pathname === "/platform" ? "page" : undefined}
            className="text-slate-600 hover:text-slate-900 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            Platform
          </Link>
          <Link
            href="/about"
            aria-current={pathname === "/about" ? "page" : undefined}
            className="text-slate-600 hover:text-slate-900 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            About
          </Link>
        </nav>

        <Link
          href="/app/dashboard"
          aria-label="Open dashboard"
          className="px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 font-medium transition-colors motion-safe:transform motion-safe:hover:scale-105 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        >
          Dashboard
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-white">
      <div className="container-section py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Heading level={4} size="sm" className="text-white mb-4">
              Product
            </Heading>
            <ul className="space-y-2">
              <li>
                <Link href="/platform" className="text-slate-400 hover:text-white transition-colors">
                  Platform
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Heading level={4} size="sm" className="text-white mb-4">
              Technology
            </Heading>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Architecture
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Innovation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <Heading level={4} size="sm" className="text-white mb-4">
              Company
            </Heading>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <Heading level={4} size="sm" className="text-white mb-4">
              Legal
            </Heading>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <Text color="muted" size="sm" className="text-slate-400">
            © 2025 Kasparro. AI-first SEO for brands that move faster.
          </Text>
        </div>
      </div>
    </footer>
  );
}
