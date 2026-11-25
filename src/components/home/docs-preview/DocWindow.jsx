import React, { useState } from "react";
import { HiOutlineBookOpen } from "react-icons/hi2";

import DocsSidebar from "./DocsSidebar";
import DocsContent from "./DocsContent";
import { docsPreviewContent } from "../../../data/docsPreviewData";

export default function DocsWindow() {
  const [activeCategory, setActiveCategory] = useState("quick-start");

  const activeContent = docsPreviewContent[activeCategory];

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-950 dark:shadow-black/30">
      {/* Browser Header */}
      <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-950">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>

        <div className="mx-auto flex max-w-xs flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 dark:border-slate-800 dark:bg-slate-900">
          <HiOutlineBookOpen className="text-xs text-blue-500" />

          <span className="truncate text-[10px] text-slate-500">
            syncxel.dev / documentation
          </span>
        </div>

        <span className="hidden text-[10px] text-slate-500 sm:block">
          LIVE PREVIEW
        </span>
      </div>

      {/* Documentation Layout */}
      <div className="flex flex-col lg:min-h-[590px] lg:flex-row">
        <DocsSidebar
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />

        <DocsContent content={activeContent} />
      </div>
    </div>
  );
}
