import React from "react";

const COMMITMENTS = [
  {
    id: "screen-reader",
    title: "Screen Reader Compatibility",
    description:
      "All game and UI elements are compatible with screen readers, ensuring accessibility for players with low vision or blindness.",
    icon: (
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
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
  },
  {
    id: "input-support",
    title: "Alternative Input Support",
    description:
      "From touch screen gestures to full keyboard navigation, we ensure our games are accessible via multiple input mode.",
    icon: (
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
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    id: "semantic-sound",
    title: "Semantic Sound & Text",
    description:
      "Critical logic state changes are conveyed through multiple sensory channels: visual indicators, distinct audio cues, and haptics.",
    icon: (
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
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
];

export default function OurCommitment() {
  return (
    <section
      aria-labelledby="commitment-title"
      className="bg-[#F0F3FF] dark:bg-surface-dark py-16 sm:py-24 transition-colors duration-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          <div className="space-y-6 lg:col-span-5">
            <p className="text-sm font-bold uppercase tracking-wider text-[#755B00]">
              Our Commitment
            </p>

            <h2
              id="commitment-title"
              className="text-3xl font-extrabold tracking-tight text-brand-header dark:text-content-dark-primary sm:text-4xl lg:text-5xl lg:leading-tight"
            >
              Universal Play Through Technical Precision
            </h2>

            <p className="text-lg leading-relaxed text-content-muted dark:text-content-dark-muted">
              Design is often viewed as aesthetic, but for us, design is a
              commitment to dignity. Accessibility isn't a post-launch checklist
              it is the technical foundation of every game we build.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul role="list" className="space-y-8">
              {COMMITMENTS.map((item) => (
                <li key={item.id} className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-brand-header text-white dark:bg-brand-dark-surface dark:text-primary-dark shadow-sm">
                    {item.icon}
                  </div>

                  <div className="space-y-1 pt-1">
                    <h3 className="text-xl font-bold text-brand-header dark:text-content-dark-primary">
                      {item.title}
                    </h3>
                    <p className="text-base text-content-muted dark:text-content-dark-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
