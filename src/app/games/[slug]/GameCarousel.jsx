"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function GameCarousel({ game }) {
  // 1. Helper function to safely extract a string URL and alt text from any image item
  const normalizeImage = (item, defaultAlt) => {
    if (!item) return null;

    // If it's already a string URL
    if (typeof item === "string") {
      return { src: item, altText: defaultAlt };
    }

    // If it's an object like { src: "...", altText: "..." }
    if (typeof item === "object") {
      const srcString =
        typeof item.src === "string" ? item.src : item.url || item.src?.src;
      if (!srcString) return null;
      return {
        src: srcString,
        altText: item.altText || item.alt || defaultAlt,
      };
    }

    return null;
  };

  // 2. Safely resolve raw items (handles null/undefined gallery & falls back to heroImage or thumbnail)
  const rawList =
    Array.isArray(game?.gallery) && game.gallery.length > 0
      ? game.gallery
      : game?.heroImage
        ? [game.heroImage]
        : game?.thumbnail
          ? [game.thumbnail]
          : [];

  // 3. Normalize all items into clean { src: string, altText: string } objects
  const images = rawList
    .map((item, idx) =>
      normalizeImage(item, `${game?.title || "Game"} image ${idx + 1}`),
    )
    .filter(Boolean); // Filter out any empty/invalid items

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  useEffect(() => {
    if (isHovered || images.length <= 1) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(timer);
  }, [isHovered, nextSlide, images.length]);

  // If there are no valid images with a string src, render nothing
  if (!images.length || !images[0]?.src) return null;

  return (
    <div className="space-y-2">
      <div
        className="group relative aspect-16/10 w-full overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-sm"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
      >
        <div className="sr-only" aria-live="polite">
          Slide {currentIndex + 1} of {images.length}
        </div>

        <div
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <div key={idx} className="relative h-full w-full flex-shrink-0">
              <Image
                src={img.src}
                alt={img.altText || `Slide ${idx + 1}`}
                fill
                priority={idx === 0}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur-md transition-all hover:bg-black/70 opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur-md transition-all hover:bg-black/70 opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
              ❯
            </button>

            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 space-x-1.5 rounded-full bg-black/30 px-2.5 py-1 backdrop-blur-md">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  aria-current={currentIndex === idx}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === idx
                      ? "w-5 bg-white"
                      : "w-2 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
