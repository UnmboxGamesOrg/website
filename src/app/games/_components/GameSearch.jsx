"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ALL_GAMES = [
  {
    id: "the-grid",
    title: "The Grid: Logic Reimagined",
    slug: "the-grid",
    description:
      "A spatial reasoning challenge where connectivity is key. Navigate complex networks with high-contrast visual cues.",
    image: "/images/the-grid.png",
    tags: ["LOGIC", "SPATIAL"],
    platforms: ["mobile", "pc"],
  },
  {
    id: "circuit-flow",
    title: "Circuit Flow",
    slug: "circuit-flow",
    description:
      "Direct the flow of logic through sequential puzzles designed for maximum clarity with screen-reader support.",
    image: "/images/circuit-flow.png",
    tags: ["SEQUENTIAL", "HARD"],
    platforms: ["pc"],
  },
];

export default function GameSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("all");

  const filteredGames = ALL_GAMES.filter((game) => {
    const matchesSearch =
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    const matchesPlatform =
      selectedPlatform === "all" || game.platforms.includes(selectedPlatform);

    return matchesSearch && matchesPlatform;
  });

  return (
    <section className="bg-surface-light py-12 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-brand-header sm:text-5xl">
          Our Library
        </h1>

        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <form
            role="search"
            onSubmit={(e) => e.preventDefault()}
            className="w-full max-w-md space-y-2"
          >
            <label
              htmlFor="game-search"
              className="block text-sm font-semibold text-content-primary mb-3 cursor-pointer"
            >
              Search Catalog
            </label>

            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-content-muted">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>

              <input
                id="game-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by title or tag..."
                className="w-full rounded-lg border border-border-subtle bg-surface-card py-3 pl-10 pr-4 text-sm text-content-primary placeholder-content-muted shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </form>

          <div className="space-y-2">
            <span
              id="platform-filter-label"
              className="block text-sm font-semibold text-content-primary"
            >
              Filters
            </span>
            <div
              role="group"
              aria-labelledby="platform-filter-label"
              className="inline-flex rounded-lg border border-border-subtle bg-surface-card p-1 shadow-sm"
            >
              {[
                { id: "all", label: "All" },
                { id: "mobile", label: "Mobile" },
                { id: "pc", label: "PC" },
              ].map((platform) => {
                const isActive = selectedPlatform === platform.id;
                return (
                  <button
                    key={platform.id}
                    type="button"
                    onClick={() => setSelectedPlatform(platform.id)}
                    aria-pressed={isActive}
                    className={`rounded-md px-5 py-2 text-sm font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      isActive
                        ? "bg-brand-header text-white shadow"
                        : "text-content-primary hover:bg-border-subtle/50"
                    }`}
                  >
                    {platform.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="sr-only" role="status" aria-live="polite">
          Showing {filteredGames.length} games
        </div>
      </div>
    </section>
  );
}
