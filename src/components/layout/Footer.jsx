import React from "react";
import Link from "next/link";

const FOOTER_NAV = {
  explore: [
    { label: "Games", href: "/games" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
  resources: [
    { label: "Support", href: "/support/contact-us" },
  ],
  socials: [
    { label: "Discord", href: "https://discord.gg/unmboxgames" },
    { label: "Youtube", href: "https://www.youtube.com/@UnmboxGames" },
    {
      label: "Facebook",
      href: "https://web.facebook.com/share/g/19P8TsQtF4",
    },
    { label: "Tiktok", href: "https://www.tiktok.com/@unmbox_games" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#020C1D] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-start">
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

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4  lg:gap-10">
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

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#CBD5E1]">
                Connect
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                {FOOTER_NAV.socials.map((item) => (
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

        <div className="mt-12 border-t border-[#092D4A]" aria-hidden="true" />

        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-[#CBD5E1]">
            &copy; {currentYear} Unmbox Games. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
