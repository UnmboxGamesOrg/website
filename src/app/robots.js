export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://unmboxgames.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/purchase-sucess",
        "/purchase-failed",
        "/support/delete-account",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
