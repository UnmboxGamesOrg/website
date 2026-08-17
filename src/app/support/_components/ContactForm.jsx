"use client";

import React, { useEffect, useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); 
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);

      return () => clearTimeout(timer); 
    }
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err.message || "Something went wrong. Please try again later.",
      );
    }
  };

  return (
    <section
      aria-labelledby="contact-form-heading"
      className="rounded-xl border border-border-subtle bg-white p-6 shadow-sm dark:border-border-subtle/20 dark:bg-surface-darkCard sm:p-10"
    >
      <h2
        id="contact-form-heading"
        className="text-2xl font-extrabold uppercase tracking-wider text-brand-header dark:text-content-darkPrimary mb-6"
      >
        Send Us a Message
      </h2>

      {status === "success" && (
        <div
          role="alert"
          className="mb-6 rounded-lg bg-green-50 p-4 border border-green-200 text-green-800 dark:bg-green-950/40 dark:border-green-800/50 dark:text-green-300"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-600 text-white font-bold text-xs">
              ✓
            </span>
            <div>
              <h3 className="text-sm font-bold">Message Sent!</h3>
              <p className="text-xs mt-0.5">
                Thank you for reaching out. We have received your message and
                will respond shortly.
              </p>
            </div>
          </div>
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="mb-6 rounded-lg bg-red-50 p-4 border border-red-200 text-red-800 dark:bg-red-950/40 dark:border-red-800/50 dark:text-red-300"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-600 text-white font-bold text-xs">
              !
            </span>
            <div>
              <h3 className="text-sm font-bold">Submission Failed</h3>
              <p className="text-xs mt-0.5">{errorMessage}</p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-content-primary dark:text-content-darkPrimary"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Jane Doe"
              className="w-full rounded-lg border border-border-subtle bg-surface-light p-3 text-sm text-content-primary shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary dark:border-border-subtle/30 dark:bg-surface-dark dark:text-content-darkPrimary"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-content-primary dark:text-content-darkPrimary"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="jane@example.com"
              className="w-full rounded-lg border border-border-subtle bg-surface-light p-3 text-sm text-content-primary shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary dark:border-border-subtle/30 dark:bg-surface-dark dark:text-content-darkPrimary"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="subject"
            className="block text-sm font-semibold text-content-primary dark:text-content-darkPrimary"
          >
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder="Game Feedback, Support Inquiry, etc."
            className="w-full rounded-lg border border-border-subtle bg-surface-light p-3 text-sm text-content-primary shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary dark:border-border-subtle/30 dark:bg-surface-dark dark:text-content-darkPrimary"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-content-primary dark:text-content-darkPrimary"
          >
            Your Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            className="w-full rounded-lg border border-border-subtle bg-surface-light p-3 text-sm text-content-primary shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary dark:border-border-subtle/30 dark:bg-surface-dark dark:text-content-darkPrimary"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-xs font-bold text-white shadow transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50"
        >
          {status === "loading" ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              <span>Sending...</span>
            </>
          ) : (
            <span>Send Message</span>
          )}
        </button>
      </form>
    </section>
  );
}
