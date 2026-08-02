import { notFound } from "next/navigation";
import GameContent from "./GameContent";
import { fetchAllGames, fetchGameBySlug } from "@/services/gameService";

export async function generateStaticParams() {
  const games = await fetchAllGames(); // ← await added
  return games.map((game) => ({
    slug: game.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const game = await fetchGameBySlug(slug); // ← await added

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
  const game = await fetchGameBySlug(slug); // ← await added

  if (!game) {
    notFound();
  }

  return <GameContent game={game} />;
}
