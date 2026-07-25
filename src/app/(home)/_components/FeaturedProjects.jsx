import React from "react";
import Link from "next/link";
import Image from "next/image";

const FEATURED_GAMES = [
  {
    id: "the-grid",
    title: "The Grid: Logic Reimagined",
    slug: "the-grid",
    description:
      "A spatial reasoning challenge where connectivity is key. Navigate complex networks with high-contrast visual cues and fully remappable controls.",
    image: "/images/the-grid.png",
    tags: ["LOGIC", "SPATIAL"],
    platforms: ["desktop", "mobile"],
  },
  {
    id: "circuit-flow",
    title: "Circuit Flow",
    slug: "circuit-flow",
    description:
      "Direct the flow of logic through sequential puzzles designed for maximum clarity. Featuring full screen-reader support and color-blind optimized palettes.",
    image: "/images/circuit-flow.png",
    tags: ["SEQUENTIAL", "HARD"],
    platforms: ["desktop"],
  },
];

export default function FeaturedProjects() {
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
          {FEATURED_GAMES.map((game) => (
            <article
              key={game.id}
              className="flex flex-col justify-between overflow-hidden rounded-xl border border-border-subtle bg-surface-card dark:bg-surface-dark-card p-6 shadow-sm transition-all hover:shadow-md dark:border-border-subtle/20"
            >
              <div className="space-y-6">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-border-subtle/30">
                  <Image
                    src={game.image}
                    alt={`Interface preview for ${game.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
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
                  </div>
                </div>

                <p className="text-base text-content-muted dark:text-content-dark-muted leading-relaxed">
                  {game.description}
                </p>

                <div
                  className="flex flex-wrap gap-2 pt-2"
                  aria-label="Game categories"
                >
                  {game.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-surface-light dark:bg-surface-dark px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-content-primary dark:text-content-dark-primary border border-border-subtle dark:border-border-subtle/20"
                    >
                      {tag}
                    </span>
                  ))}
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
