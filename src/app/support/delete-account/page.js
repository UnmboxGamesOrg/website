import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Request Account Deletion | Unmbox Games",
  description:
    "Instructions for requesting account deletion and managing your login data across Unity Player Account, Apple ID, and Google Play Games.",
};

export default function RequestAccountDeletionPage() {
  return (
    <div className="min-h-screen bg-surface-card dark:bg-surface-dark py-12 text-content-primary dark:text-content-darkPrimary transition-colors duration-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        <nav
          aria-label="Breadcrumb"
          className="text-sm font-semibold text-content-muted dark:text-content-darkMuted"
        >
          <ol className="flex items-center space-x-2">
            <li>
              <Link
                href="/"
                className="hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">&gt;</li>
            <li>
              <Link
                href="/support/faq"
                className="hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
              >
                Support
              </Link>
            </li>
            <li aria-hidden="true">&gt;</li>
            <li
              className="text-brand-header dark:text-content-darkPrimary font-bold"
              aria-current="page"
            >
              Request Account Deletion
            </li>
          </ol>
        </nav>

        <header className="border-b border-border-subtle dark:border-border-subtle/20 pb-6 space-y-3">
         
          <h1 className="text-3xl font-extrabold text-brand-header dark:text-content-darkPrimary sm:text-4xl">
            Request Account Deletion
          </h1>
          <p className="text-sm text-content-muted dark:text-content-darkMuted leading-relaxed max-w-2xl">
            Unmbox Games does not manage or store your login credentials
            directly. Some of our games allow you to sign in using a Unity
            Player Account or third-party providers.
          </p>
        </header>

        <main className="space-y-6">
          <section
            aria-labelledby="unity-account-heading"
            className="rounded-xl border border-border-subtle dark:border-border-subtle/20 bg-white dark:bg-surface-darkCard p-6 shadow-sm space-y-4"
          >
            <h2
              id="unity-account-heading"
              className="text-xl font-bold text-brand-header dark:text-content-darkPrimary flex items-center gap-2.5"
            >
              <svg
                className="h-5 w-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <span>Delete Your Unity Player Account</span>
            </h2>

            <p className="text-sm text-content-muted dark:text-content-darkMuted leading-relaxed">
              To permanently delete your Unity Player Account, visit the
              official Unity account deletion portal:
            </p>

            <div className="pt-2">
              <a
                href="https://id.unity.com/en/conversations/delete_account"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Delete Unity Player Account (opens in a new tab)"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-xs font-bold text-white shadow-sm hover:bg-primary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-surface-dark"
              >
                <span>Delete Unity Player Account</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </div>

            <p className="text-xs text-content-muted dark:text-content-darkMuted leading-relaxed pt-2">
              This process is managed entirely by Unity. Deleting your Unity
              Player Account will remove your profile, login data, and any
              connected information stored by Unity.
            </p>
          </section>

          <section
            aria-labelledby="help-heading"
            className="rounded-xl border border-border-subtle dark:border-border-subtle/20 bg-white dark:bg-surface-darkCard p-6 shadow-sm space-y-3"
          >
            <h2
              id="help-heading"
              className="text-xl font-bold text-brand-header dark:text-content-darkPrimary flex items-center gap-2.5"
            >
              <svg
                className="h-5 w-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <span>Need More Help?</span>
            </h2>

            <p className="text-sm text-content-muted dark:text-content-darkMuted leading-relaxed">
              If you have questions about your Unity Player Account data or the
              deletion process, you can contact Unity directly at:
            </p>

            <a
              href="mailto:unity-player-login-privacy@unity3d.com"
              aria-label="Email Unity Privacy Team at unity-player-login-privacy@unity3d.com"
              className="inline-block text-sm font-bold text-primary underline hover:text-primary/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
            >
              unity-player-login-privacy@unity3d.com
            </a>
          </section>

          <section
            aria-labelledby="other-accounts-heading"
            className="rounded-xl border border-border-subtle dark:border-border-subtle/20 bg-white dark:bg-surface-darkCard p-6 shadow-sm space-y-4"
          >
            <h2
              id="other-accounts-heading"
              className="text-xl font-bold text-brand-header dark:text-content-darkPrimary flex items-center gap-2.5"
            >
              <svg
                className="h-5 w-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              <span>Other Third-Party Accounts</span>
            </h2>

            <p className="text-sm text-content-muted dark:text-content-darkMuted leading-relaxed">
              If you signed in through Apple ID or Google Play Games, account
              management and deletion are handled directly by those providers:
            </p>

            <ul role="list" className="space-y-3 pt-1">
              <li className="flex items-center gap-2 text-sm font-bold">
                <svg
                  className="h-4 w-4 text-primary shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
                <a
                  href="https://appleid.apple.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Manage your Apple ID account (opens in a new tab)"
                  className="text-primary underline hover:text-primary/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                >
                  Manage your Apple ID
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm font-bold">
                <svg
                  className="h-4 w-4 text-primary shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
                <a
                  href="https://myaccount.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Manage your Google Account (opens in a new tab)"
                  className="text-primary underline hover:text-primary/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                >
                  Manage your Google Account
                </a>
              </li>
            </ul>
          </section>

          <section
            aria-label="Important Note"
            className="rounded-xl border border-amber-200 dark:border-amber-800/40 bg-amber-50 dark:bg-amber-950/20 p-6 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <svg
                className="h-6 w-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
              <div className="space-y-1">
                <h2 className="text-sm font-bold text-amber-900 dark:text-amber-200 uppercase tracking-wider">
                  Important Note
                </h2>
                <p className="text-sm text-amber-800 dark:text-amber-300/90 leading-relaxed font-medium">
                  Unmbox Games does not store your account credentials on our
                  servers. Any account deletion requests must be made directly
                  through the third-party provider you used to sign in.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
