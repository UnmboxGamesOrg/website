"use client";

import React from "react";
import Link from "next/link";

const SECTIONS = [
  { id: "eligibility", title: "1. Eligibility" },
  { id: "use-of-website", title: "2. Use of the Website" },
  { id: "intellectual-property", title: "3. Intellectual Property" },
  { id: "third-party-services", title: "4. Third-Party Services" },
  { id: "disclaimer-warranties", title: "5. Disclaimer of Warranties" },
  { id: "limitation-liability", title: "6. Limitation of Liability" },
  { id: "changes-to-terms", title: "7. Changes to These Terms" },
  { id: "governing-law", title: "8. Governing Law" },
  { id: "contact-us", title: "9. Contact Us" },
];

export default function TermsContent() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] py-12 transition-colors duration-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb Navigation */}
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
              Terms of Service
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <header className="space-y-3">
          <h1 className="text-4xl font-extrabold tracking-tight text-[#092D4A] sm:text-5xl">
            Terms of Service
          </h1>
          <p className="text-sm font-bold text-[#64748B]">
            Effective Date: August 16, 2025
          </p>
          <div
            className="h-1.5 w-20 rounded-full bg-[#FFCD35]"
            aria-hidden="true"
          />
        </header>

        {/* Table of Contents Container */}
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

        {/* Main Document Body */}
        <div className="space-y-12 leading-relaxed text-[#334155]">
          <p className="text-base font-medium text-[#334155]">
            Welcome to unmboxgames.com (the “Website”). This Website is operated
            by Unmbox Studios (also known as Unmbox Games) (“we,” “our,” or
            “us”). By accessing or using this Website, you agree to be bound by
            these Terms of Service. If you do not agree, please do not use the
            Website.
          </p>

          {/* Section 1 */}
          <section id="eligibility" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#092D4A]">
              1. Eligibility
            </h2>
            <p className="text-base">
              This Website is intended for users who are 13 years of age or
              older.
            </p>
            <p className="text-base font-medium text-[#475569]">
              By using the Website, you confirm that you meet this age
              requirement.
            </p>
          </section>

          {/* Section 2 */}
          <section id="use-of-website" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#092D4A]">
              2. Use of the Website
            </h2>
            <p className="text-base">
              You may use the Website for personal, non-commercial purposes
              only.
            </p>
            <p className="text-base font-bold text-[#092D4A] pt-2">
              You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-base font-medium text-[#475569]">
              <li>
                Copy, reproduce, or redistribute Website content without prior
                written permission.
              </li>
              <li>
                Attempt to interfere with the Website’s security, availability,
                or functionality.
              </li>
              <li>Use the Website for unlawful purposes.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section
            id="intellectual-property"
            className="space-y-4 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-[#092D4A]">
              3. Intellectual Property
            </h2>
            <p className="text-base">
              All content on the Website, including but not limited to text,
              graphics, logos, and game-related material, is owned or licensed
              by Unmbox Games.
            </p>
            <p className="text-base font-medium text-[#475569]">
              Unauthorized use of our intellectual property is prohibited.
            </p>
          </section>

          {/* Section 4 */}
          <section id="third-party-services" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#092D4A]">
              4. Third-Party Services
            </h2>
            <p className="text-base">
              Our Website may reference or link to third-party services (e.g.,
              Namecheap, Google Sites).
            </p>
            <p className="text-base">
              We are not responsible for the availability, accuracy, or
              practices of these third-party services. Your use of third-party
              sites is at your own risk and subject to their terms.
            </p>
          </section>

          {/* Section 5 */}
          <section
            id="disclaimer-warranties"
            className="space-y-4 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-[#092D4A]">
              5. Disclaimer of Warranties
            </h2>
            <p className="text-base font-medium text-[#334155]">
              The Website is provided “as is” and “as available.”
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-base font-medium text-[#475569]">
              <li>
                We make no warranties or representations about the accuracy,
                reliability, or availability of the Website.
              </li>
              <li>
                We do not guarantee uninterrupted or error-free operation.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="limitation-liability" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#092D4A]">
              6. Limitation of Liability
            </h2>
            <p className="text-base">
              To the fullest extent permitted by law, Unmbox Games shall not be
              liable for any damages, losses, or claims arising from your use of
              the Website.
            </p>
            <p className="text-base font-medium text-[#475569]">
              This includes, but is not limited to, damages caused by viruses,
              technical issues, or reliance on Website content.
            </p>
          </section>

          {/* Section 7 */}
          <section id="changes-to-terms" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#092D4A]">
              7. Changes to These Terms
            </h2>
            <p className="text-base">
              We may update these Terms of Service at any time. Updates will be
              posted on this page with an updated effective date. Continued use
              of the Website after changes are made constitutes acceptance of
              the revised Terms.
            </p>
          </section>

          {/* Section 8 */}
          <section id="governing-law" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#092D4A]">
              8. Governing Law
            </h2>
            <p className="text-base">
              These Terms of Service shall be governed by and construed in
              accordance with the laws of your local jurisdiction, without
              regard to conflict of law principles.
            </p>
          </section>

          {/* Section 9 (Dark Card Section matching design) */}
          <section
            id="contact-us"
            className="rounded-xl border border-[#092D4A] bg-[#020C1D] p-8 text-white shadow-lg scroll-mt-24 space-y-6"
          >
            <div>
              <h2 className="text-3xl font-extrabold text-white">
                9. Contact Us
              </h2>
              <p className="mt-2 text-sm text-[#CBD5E1]">
                For questions about these Terms of Service, you may contact us
                at:
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
            <span>Print Terms</span>
          </button>
        </div>
      </div>
    </div>
  );
}
