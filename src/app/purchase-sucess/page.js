import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Purchase Successful | Unmbox Games",
  description: "Thank you for your purchase with Unmbox Games.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PurchaseSuccessPage() {
  return (
    <div className="min-h-[100vh] bg-surface-card dark:bg-surface-dark py-16 flex items-center justify-center text-content-primary dark:text-content-darkPrimary transition-colors duration-200">
      <div className="mx-auto max-w-xl px-4 text-center space-y-8">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
          <svg
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Payment Confirmed
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight text-brand-header dark:text-content-darkPrimary sm:text-4xl">
            Thank You for Your Order!
          </h1>
          <p className="text-sm text-content-muted dark:text-content-darkMuted leading-relaxed max-w-md mx-auto">
            Your payment was processed successfully.
          </p>
        </div>

       
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/games"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-brand-cta px-6 py-3 text-sm font-bold text-surface-dark shadow-sm hover:brightness-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta"
          >
            Return to Games
          </Link>
          <Link
            href="/support/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-border-subtle dark:border-border-subtle/40 bg-transparent px-6 py-3 text-sm font-bold text-content-primary dark:text-content-darkPrimary hover:bg-border-subtle/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
