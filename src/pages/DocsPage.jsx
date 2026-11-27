import { useMemo, useState } from "react";
import SEO from "../components/common/SEO";
import { motion, useReducedMotion } from "framer-motion";
import {
  HiOutlineBookOpen,
  HiOutlineMagnifyingGlass,
  HiOutlineXMark,
} from "react-icons/hi2";

import { docsCategories } from "../data/docsNavigation";
import DocsSidebar from "../components/pages/docs/DocsSidebar";
import DocsHome from "../components/pages/docs/DocsHome";
import DocsCategory from "../components/pages/docs/DocsCategory";
import DocsArticle from "../components/pages/docs/DocsArticle";

export default function DocsPage() {
  const shouldReduceMotion = useReducedMotion();

  const [activeCategory, setActiveCategory] = useState(null);
  const [activeGuide, setActiveGuide] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const selectedCategory = docsCategories.find(
    (category) => category.id === activeCategory,
  );

  const selectedGuide = selectedCategory?.guides.find(
    (guide) => guide.id === activeGuide,
  );

  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return [];

    return docsCategories.flatMap((category) =>
      category.guides
        .filter(
          (guide) =>
            guide.title.toLowerCase().includes(query) ||
            guide.description.toLowerCase().includes(query) ||
            category.label.toLowerCase().includes(query),
        )
        .map((guide) => ({
          ...guide,
          categoryId: category.id,
          categoryLabel: category.label,
        })),
    );
  }, [searchQuery]);

  const openCategory = (categoryId) => {
    setActiveCategory(categoryId);
    setActiveGuide(null);
    setSearchQuery("");
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openGuide = (categoryId, guideId) => {
    setActiveCategory(categoryId);
    setActiveGuide(guideId);
    setSearchQuery("");
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goHome = () => {
    setActiveCategory(null);
    setActiveGuide(null);
    setSearchQuery("");
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pageTitle = selectedGuide
    ? selectedGuide.title
    : selectedCategory
      ? selectedCategory.label
      : "Documentation";

  return (
    <>
      <SEO
        title="Documentation & Developer Guides | SyncXel"
        description="Explore SyncXel documentation and practical developer guides to install, customize and integrate UI components, UI packs and website templates into your projects."
        path="/docs"
      />
      
      <main className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white mt-20">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[calc(100vh-80px)] gap-0">
            <DocsSidebar
              categories={docsCategories}
              activeCategory={activeCategory}
              activeGuide={activeGuide}
              onHome={goHome}
              onCategory={openCategory}
              onGuide={openGuide}
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
            />

            <div className="min-w-0 flex-1 lg:pl-9">
              <div className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 py-3 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90 lg:hidden">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(true)}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
                    aria-label="Open documentation sidebar">
                    <HiOutlineBookOpen className="h-5 w-5" />
                  </button>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">
                      {pageTitle}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      SyncXel Documentation
                    </p>
                  </div>
                </div>
              </div>

              <div className="mx-auto max-w-5xl py-8 sm:py-10 lg:py-14">
                <div className="relative mb-8">
                  <div className="flex h-12 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900/70">
                    <HiOutlineMagnifyingGlass className="h-5 w-5 shrink-0 text-slate-400" />

                    <input
                      type="search"
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                      placeholder="Search documentation..."
                      className="h-full w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                    />

                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="rounded-lg p-1 text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
                        aria-label="Clear search">
                        <HiOutlineXMark className="h-4 w-4" />
                      </button>
                    )}

                    <kbd className="hidden rounded-md border border-slate-200 bg-white px-2 py-1 text-[10px] font-medium text-slate-400 dark:border-slate-700 dark:bg-slate-800 sm:block">
                      SEARCH
                    </kbd>
                  </div>

                  {searchQuery.trim() && (
                    <div className="absolute left-0 right-0 top-14 z-40 max-h-105 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-900">
                      {searchResults.length > 0 ? (
                        searchResults.map((result) => (
                          <button
                            key={`${result.categoryId}-${result.id}`}
                            type="button"
                            onClick={() =>
                              openGuide(result.categoryId, result.id)
                            }
                            className="flex w-full flex-col gap-1 rounded-xl px-4 py-3 text-left transition hover:bg-slate-50 dark:hover:bg-slate-800">
                            <span className="text-sm font-semibold">
                              {result.title}
                            </span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                              {result.categoryLabel} · {result.description}
                            </span>
                          </button>
                        ))
                      ) : (
                        <div className="px-4 py-8 text-center">
                          <p className="text-sm font-semibold">
                            No results found
                          </p>
                          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                            Try searching with a different keyword.
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <motion.div
                  key={`${activeCategory || "home"}-${activeGuide || "overview"}`}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}>
                  {selectedGuide && selectedCategory ? (
                    <DocsArticle
                      category={selectedCategory}
                      guide={selectedGuide}
                      onBack={() => {
                        setActiveGuide(null);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      onNavigate={openGuide}
                    />
                  ) : selectedCategory ? (
                    <DocsCategory
                      category={selectedCategory}
                      onGuide={openGuide}
                      onHome={goHome}
                    />
                  ) : (
                    <DocsHome
                      categories={docsCategories}
                      onCategory={openCategory}
                      onGuide={openGuide}
                    />
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
