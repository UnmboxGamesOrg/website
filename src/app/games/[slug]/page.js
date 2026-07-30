import { notFound } from "next/navigation";
import GameContent from "./GameContent";
import { getAllGames, getGameBySlug } from "@/data/gameData";

export async function generateStaticParams() {
  const games = getAllGames();
  return games.map((game) => ({
    slug: game.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    return {
      title: "Game Not Found | Unmbox Games",
    };
  }

  return {
    title: `${game.title} | Unmbox Games`,
    description: game.description,
  };
}

export default async function GameDetailPage({ params }) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  return <GameContent game={game} />;
}
