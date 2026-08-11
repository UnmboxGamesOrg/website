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


   const downloadKeys = Object.keys(game.downloads || {}).map((key) =>
     key.toLowerCase(),
   );

   const matchesPlatform =
     selectedPlatform === "all" ||
     downloadKeys.some((key) => {
       if (selectedPlatform === "pc") {
         return [
           "pc",
           "desktop",
           "windows",
           "mac",
           "linux",
           "steam",
           "itch",
         ].includes(key);
       }
       if (selectedPlatform === "ios") {
         return ["ios", "appstore"].includes(key);
       }
       if (selectedPlatform === "android") {
         return ["android", "playstore", "galaxy", "galaxystore"].includes(key);
       }
       return key === selectedPlatform;
     });

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
