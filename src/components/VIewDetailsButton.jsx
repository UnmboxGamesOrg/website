"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

export function ViewDetailsButton({ slug, title }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleClick = (e) => {
    e.preventDefault();
    startTransition(() => {
      router.push(`/games/${slug}`);
    });
  };

  return (
    <button
      onClick={handleClick}
      disabled={isPending}
      className="inline-flex mt-5 cursor-pointer items-center gap-1.5 text-xs font-bold text-brand-header dark:text-content-darkPrimary hover:text-primary transition-colors focus:outline-none rounded-sm"
      aria-label={`View details for ${title}`}
    >
      <span>{isPending ? "Loading..." : "View Details"}</span>
      {isPending ? (
        <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      ) : (
        <svg
          className="h-3.5 w-3.5"
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
    </button>
  );
}
