"use client";

import React, { useState } from "react";
import GameSearch from "./GameSearch";
import GamesGrid from "./GameGrid";

export default function GamesCatalog({ initialGames = [] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("all");

  const filteredGames = initialGames.filter((game) => {
    const query = searchQuery.toLowerCase().trim();

    const matchesSearch =
      !query ||
      game.title?.toLowerCase().includes(query) ||
      game.badge?.toLowerCase().includes(query) ||
      game.category?.toLowerCase().includes(query) ||
      game.description?.toLowerCase().includes(query);

    const matchesPlatform =
      selectedPlatform === "all" ||
      (game.platforms &&
        game.platforms.some((p) => {
          if (selectedPlatform === "pc") return p === "desktop" || p === "pc";
          return p === selectedPlatform;
        }));

    return matchesSearch && matchesPlatform;
  });

  return (
    <>
      <GameSearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedPlatform={selectedPlatform}
        setSelectedPlatform={setSelectedPlatform}
      />
      <GamesGrid games={filteredGames} />
    </>
  );
}
