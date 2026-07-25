import React from "react";
import Link from "next/link";

const FOOTER_NAV = {
  explore: [
    { label: "Games", href: "/games" },
    { label: "Studio", href: "/studio" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  resources: [
    { label: "Accessibility Statement", href: "/accessibility" },
    { label: "Support", href: "/support" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#020C1D] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-start">
          {/* Brand & Mission Statement */}
          <div className="max-w-sm space-y-3">
            <Link
              href="/"
              className="inline-block text-2xl font-black tracking-tight text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta rounded-sm"
              aria-label="Unmbox Games Homepage"
            >
              Unmbox Games
            </Link>
            <p className="text-sm font-medium leading-relaxed text-[#CBD5E1]">
              Building the future of inclusive experience, one game at a time.
            </p>
          </div>

          {/* Navigation Links Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16">
            {/* Explore Column */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#CBD5E1]">
                Explore
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                {FOOTER_NAV.explore.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-[#F8FAFC] transition-colors hover:text-brand-cta focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta rounded-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#CBD5E1]">
                Legal
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                {FOOTER_NAV.legal.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-[#F8FAFC] transition-colors hover:text-brand-cta focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta rounded-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#CBD5E1]">
                Resources
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                {FOOTER_NAV.resources.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-[#F8FAFC] transition-colors hover:text-brand-cta focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta rounded-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="mt-12 border-t border-[#092D4A]" aria-hidden="true" />

        {/* Copyright Section */}
        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-[#CBD5E1]">
            &copy; {currentYear} Unmbox Games. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
