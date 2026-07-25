"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/config/siteNav";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isRouteActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border-subtle bg-surface-light/95 backdrop-blur  transition-colors">
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
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`
                  relative py-2 text-base font-semibold transition-colors duration-150
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm
                  ${
                    active
                      ? "text-brand-header dark:text-content-darkPrimary font-bold"
                      : "text-content-muted hover:text-content-primary dark:text-content-darkMuted dark:hover:text-content-darkPrimary"
                  }
                `}
              >
                {item.label}
                {active && (
                  <span
                    className="absolute bottom-[-20px] left-0 h-[3px] w-full rounded-full bg-brand-header"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex md:items-center">
          <Link
            href="/explore"
            className="
              inline-flex items-center justify-center rounded-lg bg-brand-cta px-6 py-2.5 
              text-base font-bold text-surface-dark shadow-sm transition-all duration-150 
              hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta 
              focus-visible:ring-offset-2 active:scale-[0.98]
            "
          >
            Explore
          </Link>
        </div>

        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            className="inline-flex items-center justify-center rounded-md p-2 text-content-primary hover:bg-border-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:text-content-darkPrimary"
          >
            {isMobileMenuOpen ? (
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
            ) : (
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
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          className="border-b border-border-subtle bg-surface-light px-4 pb-6 pt-4 dark:bg-surface-dark md:hidden"
        >
          <nav
            aria-label="Mobile Navigation"
            className="flex flex-col space-y-3"
          >
            {NAV_ITEMS.map((item) => {
              const active = isRouteActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`
                    rounded-lg px-3 py-2 text-base font-semibold transition-colors
                    ${
                      active
                        ? "bg-brand-header text-white dark:bg-primary-dark dark:text-surface-dark"
                        : "text-content-muted hover:bg-border-subtle/50 dark:text-content-darkMuted"
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="/explore"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex w-full items-center justify-center rounded-lg bg-brand-cta py-3 text-base font-bold text-surface-dark"
              >
                Explore
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
