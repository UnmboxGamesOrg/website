"use client";

import React, { useState, useEffect } from "react";

export default function GameDownload({ game }) {
  const downloads = game.downloads || {};
  const [userOS, setUserOS] = useState("unknown");

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();

    if (/iphone|ipad|ipod|macintosh|mac os/.test(userAgent)) {
      if (/iphone|ipad|ipod/.test(userAgent)) {
        setUserOS("ios");
      } else {
        setUserOS("mac");
      }
    } else if (/win/.test(userAgent)) {
      setUserOS("windows");
    } else if (/android/.test(userAgent)) {
      setUserOS("android");
    } else if (/linux/.test(userAgent)) {
      setUserOS("linux");
    }
  }, []);

  const getPrimaryKey = () => {
    if (userOS === "ios" && downloads.ios) return "ios";
    if (userOS === "windows" && downloads.pc) return "pc";
    if (userOS === "mac" && (downloads.mac || downloads.pc))
      return downloads.mac ? "mac" : "pc";

    if (downloads.ios) return "ios";
    if (downloads.pc) return "pc";
    return Object.keys(downloads)[0];
  };

  const primaryKey = getPrimaryKey();
  const primaryRaw = downloads[primaryKey];

  // Formatting Helpers
  const getDownloadLabel = (key, val) => {
    if (typeof val === "object" && val?.label) return val.label;
    if (key === "ios") return "Download on the App Store";
    if (key === "pc") return "Download for PC (itch.io)";
    if (key === "trailer") return "Watch Video Gameplay";
    if (key === "community") return "Join Discord Community";
    return `Download for ${key.toUpperCase()}`;
  };

  const getDownloadUrl = (val) =>
    typeof val === "string" ? val : val?.url || "#";
  const getAriaLabel = (key, val, title) => {
    if (typeof val === "object" && val?.ariaLabel) return val.ariaLabel;
    return `Download ${title} on ${key} (opens in new tab)`;
  };

  const primaryUrl = primaryRaw ? getDownloadUrl(primaryRaw) : null;
  const primaryLabel = primaryRaw
    ? getDownloadLabel(primaryKey, primaryRaw)
    : null;
  const primaryAria = primaryRaw
    ? getAriaLabel(primaryKey, primaryRaw, game.title)
    : "";

  return (
    <div className="space-y-3 pt-2">
      {primaryUrl ? (
        <a
          href={primaryUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={primaryAria}
          className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto rounded-lg bg-[#FFCD35] px-8 py-4 text-base font-extrabold text-[#092D4A] shadow-md hover:bg-[#f3bf1c] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#092D4A]"
        >
          <span>{primaryLabel}</span>
          <span aria-hidden="true">&darr;</span>
        </a>
      ) : (
        <div className="inline-block rounded-lg bg-[#E2E8F0] px-6 py-3 text-sm font-bold text-[#64748B]">
          Release Pending / In Development
        </div>
      )}

      {game.version && (
        <p className="text-xs font-semibold text-[#64748B]">
          {game.version} — Included with Unmbox Studio Pass
        </p>
      )}

      {/* Secondary Options */}
      <div className="flex flex-wrap gap-3 pt-2">
        {Object.entries(downloads).map(([key, downloadRaw]) => {
          const url = getDownloadUrl(downloadRaw);
          const label = getDownloadLabel(key, downloadRaw);
          const ariaLabel = getAriaLabel(key, downloadRaw, game.title);

          return (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ariaLabel}
              className="text-xs font-bold text-[#092D4A] underline hover:text-[#092D4A]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#092D4A] rounded-sm"
            >
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
