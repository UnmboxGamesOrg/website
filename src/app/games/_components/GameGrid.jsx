import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ViewDetailsButton } from "../../../components/VIewDetailsButton";
import { GameCard } from "./GamesCard";

export default function GamesGrid({ games = [] }) {
  if (!games || games.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 text-center">
        <p className="text-sm font-semibold text-content-muted dark:text-content-darkMuted">
          No games match your search filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 pt-10">
      {games.map((game) => {
        

        return (
         <GameCard key={game.id} game={game} />
        );
      })}
    </div>
  );
}
