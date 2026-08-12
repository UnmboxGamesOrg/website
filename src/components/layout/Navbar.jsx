"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Games", href: "/games" },
  {
    label: "Support",
    href: "/support",
    children: [
      { label: "Contact Us", href: "/support/contact-us" },
      { label: "Delete Account", href: "/support/delete-account" },
    ],
  },
  { label: "Hire Us", href: "/hire-us" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSupportOpen, setIsMobileSupportOpen] = useState(false);
  const [isDesktopSupportOpen, setIsDesktopSupportOpen] = useState(false);
  const pathname = usePathname();

  const isRouteActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDesktopSupportOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border-subtle bg-surface-light/95 backdrop-blur transition-colors">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Link
              href="/"
              className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md"
              aria-label="Unmbox Games Homepage"
            >
              <span className="text-2xl font-black tracking-tight text-brand-header dark:text-content-darkPrimary font-sans">
                Unmbox Games
              </span>
            </Link>
          </div>

          <nav
            aria-label="Main Navigation"
            className="hidden md:flex md:items-center md:space-x-8"
          >
            {NAV_ITEMS.map((item) => {
              const active = isRouteActive(item.href);
              const hasChildren = item.children && item.children.length > 0;

              if (hasChildren) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setIsDesktopSupportOpen(true)}
                    onMouseLeave={() => setIsDesktopSupportOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setIsDesktopSupportOpen((prev) => !prev)}
                      aria-expanded={isDesktopSupportOpen}
                      aria-haspopup="true"
                      className={`relative flex items-center gap-1 py-2 text-base font-semibold transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm ${
                        active
                          ? "text-brand-header dark:text-content-darkPrimary font-bold"
                          : "text-content-muted hover:text-content-primary dark:text-content-darkMuted dark:hover:text-content-darkPrimary"
                      }`}
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`h-4 w-4 transition-transform ${
                          isDesktopSupportOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                      {active && (
                        <span
                          className="absolute bottom-[-20px] left-0 h-[3px] w-full rounded-full bg-brand-header dark:bg-primary-dark"
                          aria-hidden="true"
                        />
                      )}
                    </button>

                    {isDesktopSupportOpen && (
                      <div className="absolute top-full left-0  w-56 rounded-xl border border-border-subtle bg-white dark:bg-slate-900 p-2 shadow-lg transition-all">
                        {item.children.map((subItem) => {
                          const subActive = pathname === subItem.href;
                          return (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={`block rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                                subActive
                                  ? "bg-primary/10 text-primary font-bold"
                                  : "text-content-muted hover:bg-border-subtle/40 hover:text-content-primary dark:text-content-darkMuted dark:hover:text-content-darkPrimary"
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              const linkClass = active
                ? "text-brand-header dark:text-content-darkPrimary font-bold"
                : "text-content-muted hover:text-content-primary dark:text-content-darkMuted dark:hover:text-content-darkPrimary";

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative py-2 text-base font-semibold transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm ${linkClass}`}
                >
                  {item.label}
                  {active && (
                    <span
                      className="absolute bottom-[-20px] left-0 h-[3px] w-full rounded-full bg-brand-header dark:bg-primary-dark"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex md:items-center">
            <Link
              href="/games"
              className="inline-flex items-center justify-center rounded-lg bg-brand-cta px-6 py-2.5 text-base font-bold text-surface-dark shadow-sm transition-all duration-150 hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta focus-visible:ring-offset-2 active:scale-[0.98]"
            >
              Explore
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-sidebar"
              aria-label="Open navigation menu"
              className="inline-flex items-center justify-center rounded-md p-2 text-content-primary hover:bg-border-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:text-content-darkPrimary"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        id="mobile-navigation-sidebar"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className={`fixed top-0 left-0 z-50 h-full w-72 max-w-[85vw] transform bg-white dark:bg-slate-900 shadow-xl transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border-subtle px-4 py-5">
          <span className="text-lg font-black tracking-tight text-brand-header dark:text-content-darkPrimary">
            Menu
          </span>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close navigation menu"
            className="inline-flex items-center justify-center rounded-md p-2 text-content-primary hover:bg-border-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:text-content-darkPrimary"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav
          aria-label="Mobile Navigation Links"
          className="flex flex-col space-y-1 px-4 py-4"
        >
          {NAV_ITEMS.map((item) => {
            const active = isRouteActive(item.href);
            const hasChildren = item.children && item.children.length > 0;

            if (hasChildren) {
              return (
                <div key={item.href} className="flex flex-col space-y-1">
                  <button
                    type="button"
                    onClick={() => setIsMobileSupportOpen((prev) => !prev)}
                    aria-expanded={isMobileSupportOpen}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-semibold text-content-muted dark:text-content-darkMuted"
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`h-4 w-4 transition-transform ${
                        isMobileSupportOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>

                  {isMobileSupportOpen && (
                    <div className="flex flex-col space-y-1 pl-4">
                      {item.children.map((subItem) => {
                        const subActive = pathname === subItem.href;
                        return (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                              subActive
                                ? "bg-brand-header text-white dark:bg-primary-dark dark:text-surface-dark"
                                : "text-content-muted hover:bg-border-subtle/50 dark:text-content-darkMuted"
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            const linkClass = active
              ? "bg-brand-header text-white dark:bg-primary-dark dark:text-surface-dark"
              : "text-content-muted hover:bg-border-subtle/50 dark:text-content-darkMuted";

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-3 py-3 text-base font-semibold transition-colors ${linkClass}`}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="pt-4">
            <Link
              href="/games"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-lg bg-brand-cta py-3 text-base font-bold text-surface-dark"
            >
              Explore
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
