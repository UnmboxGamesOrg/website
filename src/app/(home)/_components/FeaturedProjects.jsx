import React from "react";
import { fetchLatestGames } from "@/services/gameService";
import { FeaturedGameCard } from "./FeaturedGameCard";

export default async function FeaturedProjects() {
  const latestGames = await fetchLatestGames(2);

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
          {latestGames.map((game) => {
            const heroSrc =
              game.hero_image?.src || game.heroImage?.src || "/placeholder.png";
            const heroAlt =
              game.hero_image?.altText || game.heroImage?.altText || game.title;

            return (
              <FeaturedGameCard
                key={game.id}
                game={game}
                heroSrc={heroSrc}
                heroAlt={heroAlt}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
