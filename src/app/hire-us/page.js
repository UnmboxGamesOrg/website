"use client";

import React, { useState } from "react";
import Image from "next/image";
import HireUsForm from "./_components/HireUsForm";

const SKILLS = [
  {
    id: "game-design",
    title: "Game Design & Logic",
    description:
      "Crafting elegant rule sets and deep, emergent puzzle mechanics. We specialize in reducing visual noise to focus entirely on the pure logic of the challenge.",
    icon: (
      <svg
        className="h-5 w-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    id: "tech-engineering",
    title: "Technical Engineering",
    description:
      "Robust architecture and optimized performance. We build solid, scalable codebases that ensure flawless execution of complex algorithms across devices.",
    icon: (
      <svg
        className="h-5 w-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    id: "accessibility",
    title: "AAA Accessibility Compliance",
    description:
      "Accessibility is not an afterthought—it's our core architecture. We adhere to WCAG AAA/custom standards, ensuring our logic puzzles are inclusive for all motor and cognitive abilities.",
    icon: (
      <svg
        className="h-5 w-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    id: "cross-platform",
    title: "Cross-Platform Delivery",
    description:
      "Seamless experiences whether played on desktop, mobile, or web. We employ flexible layouts and reliable state management across every screen size.",
    icon: (
      <svg
        className="h-5 w-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export default function HireUsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    projectDetails: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ fullName: "", email: "", projectDetails: "" });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
                — Our Services
              </span>
              <h1 className="text-4xl font-extrabold text-[#092D4A] sm:text-5xl">
                Partner with <br /> Unmbox Games
              </h1>
            </div>

            <p className="max-w-2xl text-base font-medium leading-relaxed text-slate-600">
              We bring our expertise in engineering structured rules and
              accessible, logic-driven puzzle mechanics to your next project.
              From conceptual design to full-scale technical execution, we build
              experiences that respect the player's intelligence and time.
            </p>
          </div>

          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative h-64 w-64 sm:h-80 sm:w-80">
              <Image
                src="/logo.png"
                alt="Unmbox Games Lightbulb Box"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-extrabold text-[#092D4A]">
              Studio Skills
            </h2>
            <p className="max-w-3xl text-sm font-medium leading-relaxed text-slate-500">
              Our specialized team is equipped to handle complex technical
              challenges while prioritizing cognitive ease and absolute clarity
              in game design.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {SKILLS.map((skill) => (
              <div
                key={skill.id}
                className="group rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
              >
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-md bg-[#092D4A]">
                  {skill.icon}
                </div>
                <h3 className="mb-3 text-lg font-bold text-[#092D4A]">
                  {skill.title}
                </h3>
                <p className="text-xs font-medium leading-relaxed text-slate-500">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="bg-gradient-to-b from-blue-50/80 via-blue-100/40 to-slate-50 py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl sm:p-10">
            <div className="mb-8 text-center space-y-2">
              <h2 className="text-2xl font-extrabold text-[#092D4A]">
                Start a Conversation
              </h2>
              <p className="text-xs font-medium text-slate-500">
                Tell us about your project requirements and technical
                constraints.
              </p>
            </div>

              <HireUsForm/>
          </div>
        </div>
      </section>
    </div>
  );
}
