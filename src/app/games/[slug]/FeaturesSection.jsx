import React from "react";

export default function FeaturesSection({technicalSpecs , accessibilityFeatures}) {
return (
    <>
      {technicalSpecs.length > 0 && (
        <section
          aria-labelledby="specs-heading"
          className="space-y-4 rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm"
        >
          <h2 id="specs-heading" className="text-xl font-bold text-[#092D4A]">
            Specs
          </h2>
          <div className="h-0.5 w-full bg-[#E2E8F0]" aria-hidden="true" />

          <dl className="space-y-3.5 text-sm font-medium">
            {technicalSpecs.map((spec, index) => (
              <div
                key={index}
                className="flex items-start justify-between gap-4"
              >
                <dt className="text-[#64748B]">{spec.label}:</dt>
                <dd className="text-right font-bold text-[#0F172A]">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}
      {accessibilityFeatures.length > 0 && (
        <section
          aria-labelledby="accessibility-heading"
          className="space-y-4 rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm"
        >
          <h2
            id="accessibility-heading"
            className="text-xl font-bold text-[#092D4A]"
          >
            Accessibility
          </h2>
          <div className="h-0.5 w-full bg-[#E2E8F0]" aria-hidden="true" />

          <ul role="list" className="space-y-4">
            {accessibilityFeatures.map((a11y, index) => (
              <li key={index} className="flex items-start space-x-3 text-sm">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#092D4A] text-xs font-bold text-white"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <div>
                  <p className="font-bold text-[#092D4A]">{a11y.title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-[#475569]">
                    {a11y.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}{" "}
    </>
  );
}
