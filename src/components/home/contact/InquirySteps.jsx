import React from "react";
import { inquirySteps } from "../../../data/contactData";

export default function InquirySteps() {
  return (
    <div className="mt-10">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
        What happens next
      </p>

      <div className="space-y-5">
        {inquirySteps.map((step, index) => (
          <div key={step.number} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white font-mono text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
                {step.number}
              </span>

              {index !== inquirySteps.length - 1 && (
                <span className="mt-2 h-6 w-px bg-slate-200 dark:bg-white/10" />
              )}
            </div>

            <div className="pb-2">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                {step.title}
              </h3>

              <p className="mt-1 text-xs leading-6 text-slate-500 dark:text-slate-400">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
