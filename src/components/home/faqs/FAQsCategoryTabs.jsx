import React from "react";

export default function FAQCategoryTabs({
  categories,
  activeCategory,
  onCategoryChange,
}) {
  return (
    <div
      className="mb-7 flex flex-wrap gap-2"
      role="group"
      aria-label="FAQ categories">
      {categories.map((category) => {
        const active = activeCategory === category.id;

        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onCategoryChange(category.id)}
            aria-pressed={active}
            className={`rounded-full px-4 py-2.5 text-xs font-semibold transition-all duration-300 ${
              active
                ? "bg-[#171717] text-white dark:bg-white dark:text-black"
                : "border border-black/10 text-black/50 hover:border-black/20 hover:text-black dark:border-white/5 dark:text-white/50 dark:hover:border-white/25 dark:hover:text-white"
            }`}>
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
