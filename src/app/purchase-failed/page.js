import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Purchase Unsuccessful | Unmbox Games",
  description: "Your purchase attempt could not be completed.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PurchaseFailedPage() {
  return (
    <div className="min-h-[100vh] bg-surface-card dark:bg-surface-dark py-16 flex items-center justify-center text-content-primary dark:text-content-darkPrimary transition-colors duration-200">
      <div className="mx-auto max-w-xl px-4 text-center space-y-8">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-rose-100 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400">
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-rose-600 dark:text-rose-400">
            Payment Unsuccessful
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight text-brand-header dark:text-content-darkPrimary sm:text-4xl">
            Transaction Could Not Be Completed
          </h1>
          <p className="text-sm text-content-muted dark:text-content-darkMuted leading-relaxed max-w-md mx-auto">
            Your card was not charged. This can happen due to an interrupted
            connection, insufficient funds, or a cancelled payment attempt.
          </p>
        </div>

        <div className="rounded-xl border border-rose-200 dark:border-rose-900/40 bg-rose-50 dark:bg-rose-950/20 p-6 text-left space-y-2 shadow-sm">
          <h2 className="text-xs font-bold uppercase tracking-wider text-rose-900 dark:text-rose-200">
            Suggested Actions
          </h2>
          <ul
            role="list"
            className="space-y-1.5 text-xs text-rose-800 dark:text-rose-300 font-medium"
          >
            <li>• Double-check your payment information and try again.</li>
            <li>
              • Ensure international or online transactions are enabled on your
              card.
            </li>
            <li>• Contact your bank or payment provider for details.</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/games"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-primary/90 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Try Again / Return to Catalog
          </Link>
          <Link
            href="/support/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-border-subtle dark:border-border-subtle/40 bg-transparent px-6 py-3 text-sm font-bold text-content-primary dark:text-content-darkPrimary hover:bg-border-subtle/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Get Help
          </Link>
        </div>
      </div>
    </div>
  );
}
