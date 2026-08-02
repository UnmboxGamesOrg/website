import React from "react";

export default function LoadingGameDetail() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 animate-pulse">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="h-4 w-48 bg-slate-200 rounded" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <div className="aspect-[16/10] w-full rounded-xl bg-slate-200" />
              <div className="h-3 w-32 bg-slate-200 rounded mt-2" />
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 space-y-4">
              <div className="h-6 w-36 bg-slate-200 rounded" />
              <div className="h-0.5 w-full bg-slate-100" />
              <div className="space-y-3">
                <div className="h-4 w-full bg-slate-200 rounded" />
                <div className="h-4 w-5/6 bg-slate-200 rounded" />
                <div className="h-4 w-4/6 bg-slate-200 rounded" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="h-6 w-28 bg-slate-200 rounded-md" />
              <div className="h-10 w-3/4 bg-slate-200 rounded" />
            </div>

            <div className="space-y-3">
              <div className="h-5 w-full bg-slate-200 rounded" />
              <div className="h-4 w-full bg-slate-200 rounded" />
              <div className="h-4 w-5/6 bg-slate-200 rounded" />
              <div className="h-4 w-4/6 bg-slate-200 rounded" />
            </div>

            <div className="space-y-3 pt-2">
              <div className="h-14 w-full sm:w-64 bg-slate-200 rounded-lg" />
              <div className="h-3 w-40 bg-slate-200 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
