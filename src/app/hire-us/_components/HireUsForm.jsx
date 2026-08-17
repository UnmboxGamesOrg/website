"use client";

import React, { useEffect, useState } from "react";

export default function HireUsForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    projectDetails: "",
  });

  const [status, setStatus] = useState("idle"); 
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/hire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send proposal.");
      }

      setStatus("success");
      setFormData({ fullName: "", email: "", projectDetails: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
      if (status === "success" || status === "error") {
        const timer = setTimeout(() => {
          setStatus("idle");
          setErrorMessage("");
        }, 5000);
  
        return () => clearTimeout(timer); 
      }
    }, [status]);

  const isSubmitting = status === "loading";

  return (
    <div>
      {status === "success" && (
        <div
          role="alert"
          className="mb-6 rounded-lg bg-green-50 p-4 border border-green-200 text-green-800"
        >
          <p className="text-sm font-bold">
            Proposal sent! We'll be in touch soon.
          </p>
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="mb-6 rounded-lg bg-red-50 p-4 border border-red-200 text-red-800"
        >
          <p className="text-sm font-bold">{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Full Name */}
        <div className="space-y-2">
          <label
            htmlFor="fullName"
            className="block text-xs font-bold text-[#092D4A]"
          >
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            required
            placeholder="e.g. Jane Doe"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:border-[#092D4A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#092D4A]/20"
          />
        </div>

        {/* Email Address */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-xs font-bold text-[#092D4A]"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="alex@company.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:border-[#092D4A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#092D4A]/20"
          />
        </div>

        {/* Project Details */}
        <div className="space-y-2">
          <label
            htmlFor="projectDetails"
            className="block text-xs font-bold text-[#092D4A]"
          >
            Project Details
          </label>
          <textarea
            id="projectDetails"
            rows={5}
            required
            placeholder="Briefly describe your project scope, target platforms, timeline, and key technical goals..."
            value={formData.projectDetails}
            onChange={(e) =>
              setFormData({ ...formData, projectDetails: e.target.value })
            }
            className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:border-[#092D4A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#092D4A]/20"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full cursor-pointer rounded-lg bg-[#FFCD35] py-3.5 text-sm font-extrabold text-[#092D4A] shadow-md transition-all hover:bg-[#f3be21] hover:shadow-lg active:scale-[0.99] disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send Proposal"}
        </button>
      </form>
    </div>
  );
}
