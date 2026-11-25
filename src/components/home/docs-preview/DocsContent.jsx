import React, { useState } from "react";
import {
//   HiOutlineArrowUpRight,
  HiOutlineCheck,
  HiOutlineClipboardCopy,
} from "react-icons/hi";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export default function DocsContent({ content }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content.code);
      setCopied(true);
    } catch (error) {
      console.error("Unable to copy code:", error);
      setCopied(false);
    }
  };

  return (
    <div className="min-w-0 flex-1 bg-white p-5 sm:p-7 lg:p-9 dark:bg-slate-900/60">
      {/* Breadcrumb */}
      <div className="mb-8 flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
        {content.breadcrumb.map((item, index) => (
          <React.Fragment key={item}>
            {index > 0 && <span className="text-slate-600">/</span>}

            <span
              className={
                index === content.breadcrumb.length - 1
                  ? "font-medium text-blue-600 dark:text-blue-400"
                  : ""
              }>
              {item}
            </span>
          </React.Fragment>
        ))}
      </div>

      {/* Heading */}
      <div className="max-w-xl">
        <span className="text-[10px] font-semibold tracking-[0.2em] text-blue-600 dark:text-blue-400">
          {content.eyebrow}
        </span>

        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          {content.title}
        </h3>

        <p className="mt-3 text-sm leading-tight text-slate-600 dark:text-slate-400">
          {content.description}
        </p>
      </div>

      {/* Guide Content */}
      <div className="mt-8">
        <h4 className="text-base font-semibold text-slate-900 dark:text-white">
          {content.sectionTitle}
        </h4>

        <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
          {content.body}
        </p>
      </div>

      {/* Code Preview */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
        <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-400" />
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              <span className="h-2 w-2 rounded-full bg-green-400" />
            </div>

            <span className="text-[11px] text-slate-400">
              {content.codeLabel}
            </span>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] font-medium text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Copy code">
            {copied ? (
              <>
                <HiOutlineCheck className="text-green-400" />
                <span className="text-green-400">Copied</span>
              </>
            ) : (
              <>
                <HiOutlineClipboardCopy />
                Copy
              </>
            )}
          </button>
        </div>

        <div className="overflow-x-auto p-4 sm:p-5">
          <pre className="min-w-max text-xs leading-7 text-slate-300 sm:text-[13px]">
            <code>{content.code}</code>
          </pre>
        </div>
      </div>

      {/* Next Guide */}
      <div className="mt-7 rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-[10px] font-semibold tracking-wider text-slate-400">
              CONTINUE LEARNING
            </span>

            <h4 className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
              {content.nextTitle}
            </h4>

            <p className="mt-1 text-xs leading-tight text-slate-500 dark:text-slate-400">
              {content.nextDescription}
            </p>
          </div>

          <HiOutlineArrowUpRight className="mt-1 shrink-0 text-lg text-blue-500" />
        </div>
      </div>
    </div>
  );
}
