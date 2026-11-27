import React, { useMemo, useState } from "react";
import SEO from "../components/common/SEO";

import UiPacksTab from "../components/pages/ui-packs/UiPageTab";
import { uiPacksData } from "../data/uiPacks";

export default function UIPacksPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(uiPacksData.map((pack) => pack.category))],
    [],
  );

  const filteredPacks = useMemo(() => {
    if (activeCategory === "All") return uiPacksData;

    return uiPacksData.filter((pack) => pack.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <section className="relative px-5 sm:px-8 lg:px-12 pt-20 sm:pt-32 pb-8 sm:pb-10 rounded-b-3xl">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="max-w-3xl mb-10">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] text-blue-600 uppercase">
              <span className="h-px w-8 bg-blue-300" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                premium ui collections{" "}
              </span>
            </span>

            <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Premium{" "}
              <span className="text-blue-800 dark:text-blue-700">
                UI Packs
              </span>
            </h1>

            <p className="max-w-2xl text-sm leading-tight text-slate-500 dark:text-slate-400 sm:text-base">
              Carefully crafted UI collections designed to help you build
              modern, responsive and professional digital experiences.
            </p>
          </div>

          <UiPacksTab
            componentsData={filteredPacks}
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>
      </section>
    </main>
  );
}
