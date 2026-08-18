import React from "react";
import Link from "next/link";
import Image from "next/image";
import { fetchSiteSetting } from "@/services/heroService";

export default async function Hero() {
  const heroImageRaw = await fetchSiteSetting("hero_image");
  const heroImage = heroImageRaw ? JSON.parse(heroImageRaw) : null;
  
  return (
    <section className="bg-surface-light dark:bg-surface-dark py-16 sm:py-24 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-brand-header dark:text-content-dark-primary sm:text-5xl lg:text-6xl">
              Immersive Games Built for Everyone
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-content-muted dark:text-content-dark-muted">
              At Unmbox Games, we believe complexity shouldn't be a barrier. Our
              game experiences are designed with screen-reader support, and
              intuitive mechanics to ensure the thrill of the "aha!" moment
              belongs to all.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/games"
                className="inline-flex items-center justify-center rounded-md bg-brand-cta px-8 py-3.5 text-base font-bold text-surface-dark shadow-sm transition-all hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta focus-visible:ring-offset-2 active:scale-[0.98]"
              >
                Explore Games
              </Link>

              <Link
                href="/support/contact-us"
                className="inline-flex items-center justify-center rounded-md border-2 border-brand-header dark:border-content-dark-primary bg-transparent px-8 py-3.5 text-base font-bold text-brand-header dark:text-content-dark-primary transition-all hover:bg-brand-header hover:text-white dark:hover:bg-content-dark-primary dark:hover:text-surface-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-header dark:focus-visible:ring-content-dark-primary focus-visible:ring-offset-2 active:scale-[0.98]"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative h-72 w-72 sm:h-96 sm:w-96">
              <Image
                src={heroImage.src}
                alt={
                  heroImage.alt ||
                  "Unmbox Games lightbulb emerging from an open box"
                }
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
