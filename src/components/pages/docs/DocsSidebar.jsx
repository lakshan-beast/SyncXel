
import { HiOutlineBookOpen, HiOutlineChevronDown, HiOutlineXMark } from "react-icons/hi2";
import { useState } from "react";

export default function DocsSidebar({
  categories,
  activeCategory,
  activeGuide,
  onHome,
  onCategory,
  onGuide,
  isOpen,
  onClose,
}) {
  const [expandedCategories, setExpandedCategories] = useState([
    "quick-start",
    "products",
  ]);

  const toggleCategory = (id) => {
    setExpandedCategories((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  return (
    <>
      {isOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[290px] flex-col border-r border-slate-200 bg-white transition-transform duration-300 dark:border-slate-800 dark:bg-slate-950 lg:sticky lg:top-0 lg:z-10 lg:h-screen lg:w-[260px] lg:shrink-0 lg:translate-x-0 lg:border-r-0 lg:bg-transparent lg:dark:bg-transparent ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-800 lg:hidden">
          <span className="text-sm font-bold">Documentation</span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Close sidebar"
          >
            <HiOutlineXMark className="h-5 w-5" />
          </button>
        </div>

        <div className="docs-sidebar-scroll flex-1 overflow-y-auto px-4 py-7 lg:pr-5">
          <button
            type="button"
            onClick={onHome}
            className={`mb-7 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold transition ${
              !activeCategory
                ? "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400"
                : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
            }`}
          >
            <HiOutlineBookOpen className="h-5 w-5" />
            Documentation Home
          </button>

          <div className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
            Browse Documentation
          </div>

          <nav className="space-y-1">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              const isExpanded = expandedCategories.includes(category.id);

              return (
                <div key={category.id}>
                  <div
                    className={`group flex items-center gap-1 rounded-xl transition ${
                      isActive
                        ? "bg-blue-50 dark:bg-blue-500/10"
                        : "hover:bg-slate-100 dark:hover:bg-slate-900"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => onCategory(category.id)}
                      className={`flex min-w-0 flex-1 items-center gap-3 px-3 py-2.5 text-left text-[13px] font-medium ${
                        isActive
                          ? "text-blue-700 dark:text-blue-400"
                          : "text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      <Icon className="h-[17px] w-[17px] shrink-0" />
                      <span className="truncate">{category.label}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => toggleCategory(category.id)}
                      className="mr-2 rounded-lg p-1.5 text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
                      aria-label={`Toggle ${category.label}`}
                    >
                      <HiOutlineChevronDown
                        className={`h-3.5 w-3.5 transition-transform ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="ml-5 mt-1 space-y-1 border-l border-slate-200 pl-3 dark:border-slate-800">
                      {category.guides.map((guide) => (
                        <button
                          key={guide.id}
                          type="button"
                          onClick={() => onGuide(category.id, guide.id)}
                          className={`block w-full rounded-lg px-3 py-2 text-left text-xs transition ${
                            activeGuide === guide.id &&
                            activeCategory === category.id
                              ? "bg-blue-50 font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-400"
                              : "text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white"
                          }`}
                        >
                          {guide.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50/70 p-4 dark:border-blue-500/20 dark:bg-blue-500/5">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              Need a hand?
            </p>
            <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
              Can't find what you're looking for? Get in touch with SyncXel.
            </p>
            <a
              href="https://t.me/lakshan_dev"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
            >
              Contact Support →
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
