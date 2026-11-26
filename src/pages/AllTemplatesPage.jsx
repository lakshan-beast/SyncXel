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
    <main className="min-h-screen">
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 mt-14">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="max-w-3xl mb-10">
            <span className="font-mono text-xs tracking-wider text-blue-600">
              // complete_website_templates
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mt-3">
              Website Templates
            </h1>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed mt-4">
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
