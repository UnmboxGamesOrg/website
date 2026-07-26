import { Atkinson_Hyperlegible_Next } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const atkinson = Atkinson_Hyperlegible_Next({
  variable: "--font-atkinson",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata = {
  title: "Unmbox Games | Discover & Play Unboxed Web Games",
  description:
    "Your premier platform for discovering and playing accessible web games.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={atkinson.variable} suppressHydrationWarning>
      <body
        className="font-sans min-h-screen bg-surface-light text-content-primary flex flex-col antialiased"
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>

        <Navbar />

        <main
          id="main-content"
          className="flex-1 focus:outline-none"
          tabIndex="-1"
        >
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
