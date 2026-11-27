import React, { useMemo, useState } from "react";

import TemplateComponentsTab from "../components/pages/templates/TemplateTabs";
import { premiumKits } from "../data/premiumKitData";

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(premiumKits.map((item) => item.category))],
    [],
  );

  const filteredTemplates = useMemo(() => {
    if (activeCategory === "All") return premiumKits;

    return premiumKits.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <section className="px-5 sm:px-8 lg:px-12 py-16 sm:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="max-w-3xl mb-10">
            <span className="text-[11px] font-bold tracking-[0.18em] text-blue-300 uppercase">
              complete website templates
            </span>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-300 mt-4">
              Website Templates
            </h1>

            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-tight mt-4">
              Ready-to-use website templates built with modern technologies.
              Explore live demos, discover what's included, and find a starting
              point for your next project.
            </p>
          </div>

          <TemplateComponentsTab
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            componentsData={filteredTemplates}
          />
        </div>
      </section>
    </main>
  );
}
