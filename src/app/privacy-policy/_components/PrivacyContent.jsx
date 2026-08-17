"use client";

import React from "react";
import Link from "next/link";

const SECTIONS = [
  { id: "info-do-not-collect", title: "1. Information We Do Not Collect" },
  { id: "third-party-accounts", title: "2. Third-Party Accounts in Games" },
  { id: "third-party-website", title: "3. Third-Party Services for Website" },
  { id: "no-sale-data", title: "4. No Sale of Personal Data" },
  { id: "children-privacy", title: "5. Children’s Privacy" },
  { id: "gdpr-compliance", title: "6. GDPR Compliance" },
  { id: "policy-changes", title: "7. Changes to This Policy" },
  { id: "about-policy", title: "8. About This Policy" },
  { id: "contact-us", title: "9. Contact Us" },
  { id: "legal-info", title: "10. Legal info" },
];

export default function PrivacyContent() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] py-12 transition-colors duration-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        <nav
          aria-label="Breadcrumb"
          className="text-sm font-semibold text-[#64748B]"
        >
          <ol className="flex items-center space-x-2">
            <li>
              <Link
                href="/"
                className="hover:text-[#092D4A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#092D4A] rounded-sm"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">&gt;</li>
            <li className="text-[#092D4A] font-bold" aria-current="page">
              Privacy Policy
            </li>
          </ol>
        </nav>

        <header className="space-y-3">
          <h1 className="text-4xl font-extrabold tracking-tight text-[#092D4A] sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-sm font-bold text-[#64748B]">
            Effective Date: August 9, 2025
          </p>
          <div
            className="h-1.5 w-20 rounded-full bg-[#FFCD35]"
            aria-hidden="true"
          />
        </header>

        <section
          aria-labelledby="toc-heading"
          className="rounded-xl border border-[#E2E8F0] bg-[#F1F5F9]/60 p-6 sm:p-8"
        >
          <h2 id="toc-heading" className="text-lg font-bold text-[#092D4A]">
            Table of Contents
          </h2>
          <ul
            role="list"
            className="mt-4 space-y-2.5 text-sm font-semibold text-[#092D4A]"
          >
            {SECTIONS.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="transition-colors hover:text-[#092D4A]/70 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#092D4A] rounded-sm"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div className="space-y-12 leading-relaxed text-[#334155]">
          <p className="text-base font-medium text-[#334155]">
            Unmbox Studios (also known as Unmbox Games) (“we,” “our,” or “us”)
            operates the website unmboxgames.com and publishes certain games
            (“Services”). We respect your privacy and are committed to being
            transparent about how we handle information.
          </p>

          <section id="info-do-not-collect" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#092D4A]">
              1. Information We Do Not Collect
            </h2>
            <p className="text-base">
              We do not directly collect personal information from users on our
              Website.
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-base font-medium text-[#475569]">
              <li>
                We do not use cookies, analytics, or tracking technologies on
                the Website.
              </li>
              <li>
                We do not sell or share user information for marketing purposes.
              </li>
            </ul>
          </section>

          <section id="third-party-accounts" className="space-y-6 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#092D4A]">
              2. Third-Party Accounts in Games
            </h2>
            <p className="text-base">
              Some of our games allow players to sign in or create accounts
              using third-party authentication providers, including but not
              limited to:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-base font-medium text-[#475569]">
              <li>Unity Player Accounts</li>
              <li>Google Play Games</li>
              <li>Apple ID</li>
            </ul>

            <div className="space-y-4 pt-2">
              <h3 className="text-lg font-bold text-[#092D4A]">
                When you choose to log in through one of these providers:
              </h3>
              <ul className="list-disc list-inside space-y-2 pl-2 text-base font-medium text-[#475569]">
                <li>
                  The authentication process is handled entirely by the third
                  party.
                </li>
                <li>
                  We do not receive or store your login credentials (such as
                  passwords).
                </li>
                <li>
                  Limited information (such as a user ID, display name, or
                  profile token) may be provided to our game only to enable
                  gameplay features.
                </li>
              </ul>
            </div>

            <div className="space-y-4 pt-2">
              <p className="text-base">
                This information is managed by the third-party provider under
                their own Privacy Policy:
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 pt-2">
                {[
                  {
                    name: "Unity Privacy Policy",
                    href: "https://unity.com/legal/privacy-policy",
                  },
                  {
                    name: "Google Privacy Policy",
                    href: "https://policies.google.com/privacy",
                  },
                  {
                    name: "Apple Privacy Policy",
                    href: "https://www.apple.com/legal/privacy/",
                  },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg border border-[#E2E8F0] bg-white p-4 text-sm font-bold text-[#092D4A] shadow-sm transition-all hover:bg-[#F8FAFC] hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#092D4A]"
                  >
                    <span>{link.name}</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                ))}
              </div>
              <p className="text-base pt-2">
                Unmbox Games does not store or process this data outside the
                scope of enabling gameplay.
              </p>
            </div>
          </section>

          <section id="third-party-website" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#092D4A]">
              3. Third-Party Services for Website
            </h2>
            <p className="text-base">
              Our website is hosted and managed using:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-base font-medium text-[#475569]">
              <li>Namecheap (domain registration)</li>
              <li>Vercel (website hosting)</li>
            </ul>
            <p className="text-base">
              These providers may automatically process minimal technical
              information (such as IP address and browser type) for security and
              functionality. This is subject to their own Privacy Policies.
            </p>
          </section>

          <section id="no-sale-data" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#092D4A]">
              4. No Sale of Personal Data
            </h2>
            <p className="text-base">
              In compliance with the California Consumer Privacy Act (CCPA), we
              confirm that:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-base font-medium text-[#475569]">
              <li>We do not sell personal data.</li>
              <li>
                We do not share personal data for advertising or marketing
                purposes.
              </li>
            </ul>
          </section>

          <section id="children-privacy" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#092D4A]">
              5. Children’s Privacy
            </h2>
            <p className="text-base">
              Our services are not directed to children under the age of 13. We
              do not knowingly collect personal information from children. If
              you believe a child has provided personal data through one of our
              services, please contact us so we can request its deletion from
              the relevant third party.
            </p>
          </section>

          <section id="gdpr-compliance" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#092D4A]">
              6. GDPR Compliance
            </h2>
            <p className="text-base">
              Under the EU General Data Protection Regulation (GDPR):
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-base font-medium text-[#475569]">
              <li>
                You have the right to request information about what personal
                data is collected.
              </li>
              <li>
                You may request deletion of any personal data stored by us
                (note: we store none directly).
              </li>
              <li>
                Any data handled via third-party services is managed according
                to their respective policies and obligations.
              </li>
            </ul>
          </section>

          <section id="policy-changes" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#092D4A]">
              7. Changes to This Policy
            </h2>
            <p className="text-base">
              We may update this Privacy Policy from time to time. Updates will
              be posted on this page with an updated effective date.
            </p>
          </section>

          <section id="about-policy" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#092D4A]">
              8. About This Policy
            </h2>
            <p className="text-base">
              This Privacy Policy applies to the mobile games, Echo Chain,
              Shadows of The Circuit, Dark Frequency and Edge Born developed and
              published by Abdul-Qoyum Lawal (Dev Abby), as well as to our
              website unmboxgames.com
            </p>
          </section>

          <section
            id="contact-us"
            className="rounded-xl border border-[#092D4A] bg-[#020C1D] p-8 text-white shadow-lg scroll-mt-24 space-y-6"
          >
            <div>
              <h2 className="text-3xl font-extrabold text-white">
                9. Contact Us
              </h2>
              <p className="mt-2 text-sm text-[#CBD5E1]">
                If you have questions about this Privacy Policy, you may contact
                us at:
              </p>
            </div>

            <div className="pt-2 border-t border-[#092D4A]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#CBD5E1]">
                Unmbox Games
              </h3>
              <p className="mt-1 text-base font-bold text-[#FFCD35]">
                Email: hello@unmboxgames.com
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section
            id="legal-info"
            className="space-y-2 scroll-mt-24 border-t border-[#E2E8F0] pt-6"
          >
            <h2 className="text-xl font-bold text-[#092D4A]">10. Legal info</h2>
            <p className="text-base text-[#475569]">
              The legal business name is <strong>Unmbox Studios</strong>, with
              business registration number <strong>8775724</strong>.
            </p>
          </section>
        </div>

        {/* Footer Meta & Print Action */}
        <div className="flex items-center justify-between border-t border-[#E2E8F0] pt-8 text-xs font-bold text-[#64748B]">
          <span>VERSION 2.4.0</span>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 hover:text-[#092D4A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#092D4A] rounded-sm"
          >
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
                d="M17.25 6.75h-10.5M17.25 10.5h-10.5M17.25 14.25h-10.5"
              />
            </svg>
            <span>Print Policy</span>
          </button>
        </div>
      </div>
    </div>
  );
}
