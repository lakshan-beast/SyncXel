import React, { useMemo, useState } from "react";

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
    <main className="min-h-screen">
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="max-w-3xl mb-10">
            <span className="font-mono text-xs tracking-wider text-blue-600">
              // premium_ui_collections
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mt-3">
              Premium UI Packs
            </h1>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed mt-4">
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
