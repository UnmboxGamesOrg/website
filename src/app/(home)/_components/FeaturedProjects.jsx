import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllGames } from "@/data/gameData";

export default function FeaturedProjects() {
  const latestGames = getAllGames().slice(0, 2);

  return (
    <section
      aria-labelledby="featured-projects-title"
      className="bg-[#F9F9FF] dark:bg-surface-dark py-16 sm:py-24 transition-colors duration-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-2">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-cta">
            Featured Projects
          </p>
          <h2
            id="featured-projects-title"
            className="text-3xl font-extrabold text-brand-header dark:text-content-dark-primary sm:text-4xl"
          >
            Experience the Thrill !
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {latestGames.map((game) => (
            <article
              key={game.id}
              className="flex flex-col justify-between overflow-hidden rounded-xl border border-border-subtle bg-surface-card dark:bg-surface-dark-card p-6 shadow-sm transition-all hover:shadow-md dark:border-border-subtle/20"
            >
              <div className="space-y-6">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-border-subtle/30">
                  <Image
                    src={game.heroImage.src}
                    alt={game.heroImage.altText}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  {game.badge && (
                    <span className="absolute top-3 right-3 rounded bg-surface-card/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-content-primary backdrop-blur-sm dark:bg-surface-dark/90 dark:text-content-dark-primary border border-border-subtle/50">
                      {game.badge}
                    </span>
                  )}
                </div>

                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-brand-header dark:text-content-dark-primary">
                    {game.title}
                  </h3>

                  <div
                    className="flex items-center gap-2 text-content-muted dark:text-content-dark-muted"
                    aria-label={`Supported on ${game.platforms.join(" and ")}`}
                  >
                    {game.platforms.includes("desktop") && (
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
                          d="M9 17V19M15 19V17M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                    {game.platforms.includes("mobile") && (
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
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                    {game.platforms.includes("web") && (
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
                          d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                <p className="text-base text-content-muted dark:text-content-dark-muted leading-relaxed line-clamp-3">
                  {game.description}
                </p>

                <div
                  className="flex flex-wrap gap-2 pt-2"
                  aria-label="Game categories"
                >
                  <span className="rounded bg-surface-light dark:bg-surface-dark px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-content-primary dark:text-content-dark-primary border border-border-subtle dark:border-border-subtle/20">
                    {game.category}
                  </span>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  href={`/games/${game.slug}`}
                  className="inline-flex items-center gap-2 text-base font-bold text-brand-header dark:text-content-dark-primary hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                  aria-label={`View details for ${game.title}`}
                >
                  <span>View Details</span>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
