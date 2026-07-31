"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function GameContent({ game }) {
  const primaryDownloadKey = Object.keys(game.downloads || {})[0];
  const primaryDownload = primaryDownloadKey
    ? game.downloads[primaryDownloadKey]
    : null;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] py-12 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        <nav
          aria-label="Breadcrumb"
          className="text-sm font-semibold text-[#64748B]"
        >
          <ol className="flex items-center space-x-2">
            <li>
              <Link
                href="/"
                className="hover:text-[#092D4A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#092D4A] rounded-sm"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">&gt;</li>
            <li>
              <Link
                href="/games"
                className="hover:text-[#092D4A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#092D4A] rounded-sm"
              >
                Games
              </Link>
            </li>
            <li aria-hidden="true">&gt;</li>
            <li className="text-[#092D4A] font-bold" aria-current="page">
              {game.title}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-sm">
                <Image
                  src={game.heroImage.src}
                  alt={game.heroImage.altText}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <p className="text-xs font-mono font-bold tracking-wider text-[#64748B] uppercase px-1">
                01 // {game.title.toUpperCase()} INTERFACE
              </p>
            </div>

            <section
              aria-labelledby="tech-specs-heading"
              className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm space-y-4"
            >
              <h2
                id="tech-specs-heading"
                className="text-xl font-bold text-[#092D4A]"
              >
                Technical Specs
              </h2>
              <div className="h-0.5 w-full bg-[#E2E8F0]" aria-hidden="true" />

              <dl className="space-y-3.5 text-sm font-medium">
                {game.technicalSpecs.map((spec, index) => (
                  <div
                    key={index}
                    className="flex items-start justify-between gap-4"
                  >
                    <dt className="text-[#64748B]">{spec.label}:</dt>
                    <dd className="text-[#0F172A] font-bold text-right">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <section
              aria-labelledby="accessibility-heading"
              className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm space-y-4"
            >
              <h2
                id="accessibility-heading"
                className="text-xl font-bold text-[#092D4A]"
              >
                Accessibility
              </h2>
              <div className="h-0.5 w-full bg-[#E2E8F0]" aria-hidden="true" />

              <ul role="list" className="space-y-4">
                {game.accessibilityFeatures.map((a11y, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3 text-sm"
                  >
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#092D4A] text-white text-xs font-bold mt-0.5"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <div>
                      <p className="font-bold text-[#092D4A]">{a11y.title}</p>
                      <p className="text-xs text-[#475569] leading-relaxed mt-0.5">
                        {a11y.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                {game.badge && (
                  <span className="inline-block rounded-md bg-[#FFCD35] px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#092D4A]">
                    {game.badge}
                  </span>
                )}
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-[#092D4A] sm:text-5xl">
                {game.title}
              </h1>
            </div>

            <div className="space-y-4 leading-relaxed text-[#334155] text-base font-medium">
              <p className="text-lg font-bold text-[#092D4A]">{game.tagline}</p>
              <div className="whitespace-pre-line space-y-3 text-base text-[#475569]">
                {game.longDescription}
              </div>
            </div>

            <div className="pt-2 border-t border-b border-[#E2E8F0] py-4 space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                Available On:
              </p>
              <div className="flex items-center space-x-4 text-sm font-bold text-[#092D4A]">
                {game.platforms.map((platform) => (
                  <span
                    key={platform}
                    className="inline-flex items-center space-x-1.5 capitalize bg-[#F1F5F9] px-3 py-1.5 rounded-lg border border-[#E2E8F0]"
                  >
                    <span>{platform}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-2">
              {primaryDownload ? (
                <a
                  href={primaryDownload.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={primaryDownload.ariaLabel}
                  className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto rounded-lg bg-[#FFCD35] px-8 py-4 text-base font-extrabold text-[#092D4A] shadow-md hover:bg-[#f3bf1c] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#092D4A]"
                >
                  <span>{primaryDownload.label}</span>
                  <span aria-hidden="true">&darr;</span>
                </a>
              ) : (
                <div className="inline-block rounded-lg bg-[#E2E8F0] px-6 py-3 text-sm font-bold text-[#64748B]">
                  Release Pending / In Development
                </div>
              )}

              <p className="text-xs font-semibold text-[#64748B]">
                {game.version} — Included with Unmbox Studio Pass
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {Object.entries(game.downloads || {}).map(([key, download]) => (
                  <a
                    key={key}
                    href={download.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={download.ariaLabel}
                    className="text-xs font-bold text-[#092D4A] underline hover:text-[#092D4A]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#092D4A] rounded-sm"
                  >
                    {download.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-sm space-y-1">
                <p className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                  Category
                </p>
                <p className="text-xl font-extrabold text-[#092D4A]">
                  {game.category}
                </p>
              </div>

              <div className="rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-sm space-y-1">
                <p className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                  Difficulty
                </p>
                <p className="text-xl font-extrabold text-[#092D4A]">
                  {game.difficulty}
                </p>
              </div>
            </div>

            {game.keyFeatures && game.keyFeatures.length > 0 && (
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
                  {game.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span
                        className="text-[#092D4A] font-bold"
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
