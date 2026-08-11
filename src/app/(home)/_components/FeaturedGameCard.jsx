"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function FeaturedGameCard({ game, heroSrc, heroAlt }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      router.push(`/games/${game.slug}`);
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <article
      role="link"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={`View details for ${game.title}`}
      aria-busy={isPending}
      className="group flex flex-col justify-between overflow-hidden rounded-xl border border-border-subtle bg-surface-card dark:bg-surface-dark-card p-6 shadow-sm transition-all hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer dark:border-border-subtle/20"
    >
      <div className="space-y-6">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-border-subtle/30">
          <Image
            src={heroSrc}
            alt={heroAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
          {game.genre && (
            <span className="absolute top-3 right-3 rounded bg-surface-card/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-content-primary backdrop-blur-sm dark:bg-surface-dark/90 dark:text-content-dark-primary border border-border-subtle/50">
              {game.genre}
            </span>
          )}
        </div>

        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-brand-header dark:text-content-dark-primary">
            {game.title}
          </h3>

          {game.platforms && (
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
          )}
        </div>

        <p className="text-base text-content-muted dark:text-content-dark-muted leading-relaxed line-clamp-3">
          {game.description}
        </p>

        {game.category && (
          <div
            className="flex flex-wrap gap-2 pt-2"
            aria-label="Game categories"
          >
            <span className="rounded bg-surface-light dark:bg-surface-dark px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-content-primary dark:text-content-dark-primary border border-border-subtle dark:border-border-subtle/20">
              {game.category}
            </span>
          </div>
        )}
      </div>

      <div className="pt-5">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-header dark:text-content-dark-primary group-hover:text-primary transition-colors">
          <span>{isPending ? "Loading..." : "View Details"}</span>
          {isPending ? (
            <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          ) : (
            <svg
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          )}
        </span>
      </div>
    </article>
  );
}
