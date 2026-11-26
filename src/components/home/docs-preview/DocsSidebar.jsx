import React from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { previewCategories } from "../../../data/docsPreviewData";

export default function DocsSidebar({ activeCategory, onSelect }) {
  return (
    <aside className="flex w-full flex-col border-b border-slate-800 bg-slate-950/90 p-4 sm:p-5 lg:w-61.25 lg:shrink-0 lg:border-b-0 lg:border-r">
      <div className="mb-5 flex items-center justify-between">
        <span className="text-[11px] font-semibold tracking-[0.16em] text-slate-400">
          DOCUMENTATION
        </span>

        <span className="rounded-full bg-blue-500/10 px-2.5 py-1 text-[10px] font-medium text-blue-400">
          11 Guides
        </span>
      </div>

      <nav className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:flex lg:flex-col">
        {previewCategories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => onSelect(category.id)}
              className={`flex min-w-0 items-center gap-2.5 rounded-xl px-3 py-3 text-left text-xs font-medium transition-all duration-200 ${
                isActive
                  ? "bg-blue-500/15 text-blue-400"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}>
              <Icon className="shrink-0 text-base" />

              <span className="truncate">{category.label}</span>

              {isActive && (
                <span className="ml-auto hidden h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400 lg:block" />
              )}
            </button>
          );
        })}
      </nav>

      <a
        href="/docs"
        className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-slate-800 px-3 py-3 text-xs font-semibold text-slate-300 transition-all hover:border-blue-500/40 hover:text-blue-400 lg:mt-auto">
        View all documentation
        <HiOutlineArrowUpRight className="text-sm" />
      </a>
    </aside>
  );
}
