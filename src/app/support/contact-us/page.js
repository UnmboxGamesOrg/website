import React from "react";
import Link from "next/link";
import ContactForm from "../_components/ContactForm";
import { FaDiscord } from "react-icons/fa";


export const metadata = {
  title: "Contact Us | Unmbox Games",
  description:
    "Get in touch with Unmbox Games via email, contact form, or join our Discord community.",
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-surface-card dark:bg-surface-dark py-12 text-content-primary dark:text-content-darkPrimary transition-colors duration-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
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
                href="/support/contact-us"
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
              Contact Us
            </li>
          </ol>
        </nav>

        <header className="text-center space-y-3 pb-2">
          <h1 className="text-4xl font-extrabold tracking-tight text-brand-header dark:text-content-darkPrimary sm:text-5xl uppercase">
            Contact Us
          </h1>
          <div className="mx-auto h-1 w-36 bg-[#FFCD35]" aria-hidden="true" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section
            aria-labelledby="email-card-heading"
            className="flex flex-col justify-between rounded-xl border border-border-subtle dark:border-border-subtle/20 bg-white dark:bg-surface-darkCard p-8 shadow-sm transition-all hover:shadow-md"
          >
            <div className="space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg
                  className="h-6 w-6"
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
              </div>

              <div className="space-y-1">
                <h2
                  id="email-card-heading"
                  className="text-2xl font-extrabold text-brand-header dark:text-content-darkPrimary uppercase tracking-wider"
                >
                  Email
                </h2>
                <p className="text-xs text-content-muted dark:text-content-darkMuted leading-relaxed">
                  Have inquiries or need technical help? Send our support team a
                  message directly.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="mailto:hello@unmboxgames.com"
                aria-label="Send email to hello@unmboxgames.com"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-xs font-bold text-white shadow-sm hover:bg-primary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span>hello@unmboxgames.com</span>
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
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </section>

          <section
            aria-labelledby="discord-card-heading"
            className="flex flex-col justify-between rounded-xl border border-border-subtle dark:border-border-subtle/20 bg-white dark:bg-surface-darkCard p-8 shadow-sm transition-all hover:shadow-md"
          >
            <div className="space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500">
                <FaDiscord className="h-5 w-5 text-[#5865F2]" />{" "}
              </div>

              <div className="space-y-1">
                <h2
                  id="discord-card-heading"
                  className="text-2xl font-extrabold text-brand-header dark:text-content-darkPrimary uppercase tracking-wider"
                >
                  Discord group link
                </h2>
                <p className="text-xs text-content-muted dark:text-content-darkMuted leading-relaxed">
                  Join our active gaming community to get fast updates and chat
                  with players.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://discord.gg/unmboxgames"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on Discord (opens in a new tab)"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border-subtle dark:border-border-subtle/40 bg-transparent px-4 py-3 text-xs font-bold text-content-primary dark:text-content-darkPrimary hover:border-primary hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span>Contact us on Discord</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
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
          </section>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
