"use client";

export default function GameTrailer({ game }) {
  const trailerUrl = game?.game_trailer;

  if (!trailerUrl) return null;

  console.log(trailerUrl);

  const getYouTubeEmbedUrl = (url) => {
    const getVideoId = (url) => {
      if (url.includes("youtu.be/"))
        return url.split("youtu.be/")[1]?.split("?")[0];
      if (url.includes("watch?v="))
        return url.split("watch?v=")[1]?.split("&")[0];
      if (url.includes("/embed/"))
        return url.split("/embed/")[1]?.split("?")[0];
      if (url.includes("/shorts/"))
        return url.split("/shorts/")[1]?.split("?")[0];
      return null;
    };

    const videoId = getVideoId(url)

    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;

  };

  const embedUrl = getYouTubeEmbedUrl(trailerUrl);

  console.log(embedUrl);

  if (!embedUrl) return null;

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold text-slate-900">Trailer</h3>

      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-[#E2E8F0] bg-black shadow-sm">
        <iframe
          src={embedUrl}
          title={`${game.title || "Game"} trailer`}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}
