"use client";

import React from "react";
import Link from "next/link";
import GameDownload from "./GameDownload";
import GameCarousel from "./GameCarousel";
import GameTrailer from "./_components/GameTrailer";

// Platform & Icon Mapping Dictionary
const STORE_PLATFORMS = [
  {
    id: "appstore",
    label: "App Store",
    matches: ["ios", "appstore", "apple"],
    icon: (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.66-.8 1.11-1.92.99-3.04-.96.04-2.13.64-2.82 1.44-.61.71-1.14 1.86-.99 2.96 1.07.08 2.16-.55 2.82-1.36z" />
      </svg>
    ),
  },
  {
    id: "playstore",
    label: "Play Store",
    matches: ["android", "playstore", "googleplay"],
    icon: (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
        <path d="M3 20.5v-17c0-.55.33-.92.83-.72l12.87 8.5c.42.28.42.86 0 1.14L3.83 20.92c-.5.2-.83-.17-.83-.72zm13.79-8.15L14.1 9.66l2.69-2.69 2.7 2.7-2.7 2.68zm-5.08 1.98l-2.6-2.6 2.6-2.6 4.77 3.15-4.77 2.05z" />
      </svg>
    ),
  },
  {
    id: "pc",
    label: "PC",
    matches: ["pc", "desktop", "windows", "mac", "linux", "steam", "itch"],
    icon: (
      <svg
        className="h-4 w-4 fill-none stroke-current"
        viewBox="0 0 24 24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: "galaxystore",
    label: "Galaxy Store",
    matches: ["galaxy", "galaxystore", "samsung"],
    icon: (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5zm2.5-5.5a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm-7 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm2.5 5.5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z" />
      </svg>
    ),
  },
  {
    id: "web",
    label: "Web",
    matches: ["web", "browser"],
    icon: (
      <svg
        className="h-4 w-4 fill-none stroke-current"
        viewBox="0 0 24 24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10z" />
      </svg>
    ),
  },
];

export default function GameContent({ game }) {
  if (!game) return null;

  // Safe Fallbacks for Array Fields
  const technicalSpecs = game.technicalSpecs || [];
  const accessibilityFeatures = game.accessibilityFeatures || [];
  const keyFeatures = game.keyFeatures || [];
  const downloads = game.downloads || {};

  // Extract detected store platforms & their links
  const downloadEntries = Object.entries(downloads);
  const detectedPlatforms = STORE_PLATFORMS.map((store) => {
    const match = downloadEntries.find(([key]) =>
      store.matches.includes(key.toLowerCase()),
    );
    return match ? { ...store, url: match[1] } : null;
  }).filter(Boolean);

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 text-[#0F172A] transition-colors duration-200">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="text-sm font-semibold text-[#64748B]"
        >
          <ol className="flex items-center space-x-2">
            <li>
              <Link
                href="/"
                className="rounded-sm transition-colors hover:text-[#092D4A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#092D4A]"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">&gt;</li>
            <li>
              <Link
                href="/games"
                className="rounded-sm transition-colors hover:text-[#092D4A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#092D4A]"
              >
                Games
              </Link>
            </li>
            <li aria-hidden="true">&gt;</li>
            <li className="font-bold text-[#092D4A]" aria-current="page">
              {game.title}
            </li>
          </ol>
        </nav>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          {/* Left Column (Carousel, Trailer, Specs, Accessibility) */}
          <div className="space-y-8 lg:col-span-5">
            <GameCarousel game={game} />
            <GameTrailer game={game} />

            {/* Technical Specs Section */}
            {technicalSpecs.length > 0 && (
              <section
                aria-labelledby="specs-heading"
                className="space-y-4 rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm"
              >
                <h2
                  id="specs-heading"
                  className="text-xl font-bold text-[#092D4A]"
                >
                  Specs
                </h2>
                <div className="h-0.5 w-full bg-[#E2E8F0]" aria-hidden="true" />

                <dl className="space-y-3.5 text-sm font-medium">
                  {technicalSpecs.map((spec, index) => (
                    <div
                      key={index}
                      className="flex items-start justify-between gap-4"
                    >
                      <dt className="text-[#64748B]">{spec.label}:</dt>
                      <dd className="text-right font-bold text-[#0F172A]">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            {/* Accessibility Section */}
            {accessibilityFeatures.length > 0 && (
              <section
                aria-labelledby="accessibility-heading"
                className="space-y-4 rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm"
              >
                <h2
                  id="accessibility-heading"
                  className="text-xl font-bold text-[#092D4A]"
                >
                  Accessibility
                </h2>
                <div className="h-0.5 w-full bg-[#E2E8F0]" aria-hidden="true" />

                <ul role="list" className="space-y-4">
                  {accessibilityFeatures.map((a11y, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3 text-sm"
                    >
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#092D4A] text-xs font-bold text-white"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <div>
                        <p className="font-bold text-[#092D4A]">{a11y.title}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-[#475569]">
                          {a11y.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Right Column (Hero Details, Downloads, Description, Platforms, Forum CTA) */}
          <div className="space-y-8 lg:col-span-7">
            {/* Header Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                {game.genre && (
                  <span className="inline-block rounded-md bg-[#FFCD35] px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#092D4A]">
                    {game.genre}
                  </span>
                )}
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-[#092D4A] sm:text-5xl">
                {game.title}
              </h1>
            </div>

            {/* Download Buttons Block */}
            <GameDownload game={game} />

            {/* Game Description */}
            <div className="space-y-4 text-base font-medium leading-relaxed text-[#334155]">
              {game.description && (
                <p className="text-lg font-bold text-[#092D4A]">
                  {game.description}
                </p>
              )}
              {game.longDescription && (
                <div className="whitespace-pre-line space-y-3 text-base text-[#475569]">
                  {game.longDescription}
                </div>
              )}
            </div>

            {/* Availability Platforms with Store Icons */}
            <div className="space-y-3 border-b border-t border-[#E2E8F0] py-4">
              <p className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                Availability Platforms
              </p>

              {detectedPlatforms.length > 0 ? (
                <div className="flex flex-wrap items-center gap-2">
                  {detectedPlatforms.map(({ id, label, icon, url }) => {
                    const isLink = Boolean(url && url !== "#");

                    const BadgeContent = (
                      <>
                        <span className="shrink-0">{icon}</span>
                        <span>{label}</span>
                      </>
                    );

                    return isLink ? (
                      <a
                        key={id}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs font-bold text-[#092D4A] shadow-sm transition-all hover:border-[#092D4A] hover:bg-slate-50 active:scale-95"
                      >
                        {BadgeContent}
                      </a>
                    ) : (
                      <span
                        key={id}
                        className="inline-flex items-center gap-2 rounded-lg border border-[#E2E8F0] bg-[#F1F5F9] px-3 py-1.5 text-xs font-bold text-[#092D4A]"
                      >
                        {BadgeContent}
                      </span>
                    );
                  })}
                </div>
              ) : (
                <p className="text-xs text-slate-400">TBA / Coming Soon</p>
              )}
            </div>

            {/* Metadata & Forum CTA Grid */}
            <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
              {game.category && (
                <div className="space-y-1 rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                    Category
                  </p>
                  <p className="text-xl font-extrabold text-[#092D4A]">
                    {game.category}
                  </p>
                </div>
              )}

              {game.forum_url && (
                <div className="space-y-3 rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
                  <div className="space-y-0.5">
                    <h3 className="text-sm font-semibold text-slate-900">
                      Community Forum
                    </h3>
                    <p className="text-xs text-slate-500">
                      Join discussions for {game.title || "this game"}
                    </p>
                  </div>

                  <Link
                    href={game.forum_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-[2px] font-semibold text-white shadow-md transition-all hover:shadow-indigo-500/25 active:scale-[0.98]"
                  >
                    <span className="inline-flex w-full items-center justify-center gap-2 rounded-[6px] bg-slate-950 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all group-hover:-translate-y-0.5">
                      <span>
                        Join {game.title ? `${game.title} Forum` : "Community"}
                      </span>
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              )}
            </div>

            {/* Key Features Bullet List */}
            {keyFeatures.length > 0 && (
              <section
                aria-labelledby="key-features-heading"
                className="space-y-4 pt-4"
              >
                <h2
                  id="key-features-heading"
                  className="text-xl font-bold text-[#092D4A]"
                >
                  Key Features
                </h2>
                <ul
                  role="list"
                  className="space-y-2.5 text-base font-medium text-[#475569]"
                >
                  {keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span
                        className="font-bold text-[#092D4A]"
                        aria-hidden="true"
                      >
                        •
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
