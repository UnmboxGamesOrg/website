import React from "react";
import GameSearch from "./_components/GameSearch";
import GamesGrid from "./_components/GamesGrid";

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

export default function GamesPage() {
  return(

    <>
  <GameSearch />;
  <GamesGrid/>
    </>
  )
  
}
