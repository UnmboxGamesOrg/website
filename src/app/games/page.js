import React from "react";
import { fetchAllGames } from "@/services/gameService";
import GamesCatalog from "./_components/GamesCatalog";

export const metadata = {
  title: "Game Library",
  description:
    "Explore our full catalog of accessible, instant-play web games.",
  openGraph: {
    title: "Unmbox Games Library",
    description:
      "Discover and play curated web games directly in your browser.",
  },
};

export default async function GamesPage() {
  const games = await fetchAllGames();

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">
      <GamesCatalog initialGames={games} />
    </main>
  );
}
