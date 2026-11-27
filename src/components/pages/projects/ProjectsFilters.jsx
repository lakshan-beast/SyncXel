import { projectCategories } from "../../../data/projectsData";
import { motion } from "framer-motion";

export default function ProjectsFilters({
  activeCategory,
  setActiveCategory,
  totalProjects,
}) {
  return (
    <div className="mb-10 py-6 flex flex-col gap-6 border-b border-t border-slate-200 pb-7 dark:border-slate-800 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-[11px] font-bold tracking-[0.18em] text-blue-300 uppercase">
          Explore Our Work
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-300 mt-4">
          Projects & Experiments
        </h2>

        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-tight mt-4">
          {totalProjects} projects in this collection
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {projectCategories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500/50 dark:hover:text-blue-400"
              }`}>
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
