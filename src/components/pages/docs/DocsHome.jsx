import {
  HiOutlineArrowRight,
  HiOutlineBookOpen,
  HiOutlineCommandLine,
  HiOutlineCube,
  HiOutlineSparkles,
} from "react-icons/hi2";
import { docsPopularGuides } from "../../../data/docsNavigation";

const levelStyles = {
  Beginner:
    "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
  Intermediate:
    "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
  Advanced: "bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400",
};

export default function DocsHome({ categories, onCategory, onGuide }) {
  const popularGuides = docsPopularGuides
    .map((item) => {
      const category = categories.find(
        (category) => category.id === item.categoryId,
      );

      const guide = category?.guides.find((guide) => guide.id === item.guideId);

      return category && guide ? { category, guide } : null;
    })
    .filter(Boolean);

  const featuredCategories = categories.filter((category) =>
    [
      "quick-start",
      "products",
      "integrations",
      "vercel",
      "troubleshooting",
      "git",
    ].includes(category.id),
  );

  return (
    <div>
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/70 p-7 dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-blue-950/30 sm:p-10">
        <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-24 h-52 w-52 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700 dark:border-blue-500/20 dark:bg-slate-900/80 dark:text-blue-400">
            <HiOutlineSparkles className="h-3.5 w-3.5" />
            SyncXel Developer Resources
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Developer Guides.
            <span className="block text-blue-600 dark:text-blue-400">
              Build with confidence.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
            Explore practical guides, setup instructions and development
            resources to help you build, customize and deploy your projects with
            confidence.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onCategory("quick-start")}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700">
              Start Learning
              <HiOutlineArrowRight className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => onCategory("products")}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">
              Product Guides
            </button>
          </div>
        </div>

        <div className="relative mt-10 grid grid-cols-3 gap-3 border-t border-slate-200/80 pt-6 dark:border-slate-800 sm:max-w-lg">
          <div>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">
              {categories.length}
            </p>
            <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
              Categories
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">
              {categories.reduce(
                (total, category) => total + category.guides.length,
                0,
              )}
            </p>
            <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
              Guide Topics
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">
              3
            </p>
            <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
              Skill Levels
            </p>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">
              Explore
            </p>
            <h2 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">
              Browse by Category
            </h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Find the resources you need for your next project.
            </p>
          </div>
          <span className="hidden text-xs text-slate-400 sm:block">
            {categories.length} categories
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {featuredCategories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => onCategory(category.id)}
                className="group rounded-2xl border border-slate-200 bg-white p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-blue-500/40 dark:hover:shadow-black/20">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-500/10 dark:text-blue-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <HiOutlineArrowRight className="h-4 w-4 text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-500" />
                </div>

                <h3 className="mt-5 text-sm font-bold">{category.label}</h3>
                <p className="mt-2 min-h-10 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  {category.description}
                </p>
                <p className="mt-4 text-[11px] font-semibold text-slate-400">
                  {category.guides.length} guides
                </p>
              </button>
            );
          })}
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">
            Start here
          </p>
          <h2 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">
            Popular Guides
          </h2>
        </div>

        <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900/40">
          {popularGuides.map(({ category, guide }) => (
            <button
              key={guide.id}
              type="button"
              onClick={() => onGuide(category.id, guide.id)}
              className="flex w-full items-center gap-4 p-4 text-left transition hover:bg-slate-50 dark:hover:bg-slate-800/60 sm:p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                <HiOutlineBookOpen className="h-5 w-5" />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold">
                  {guide.title}
                </span>
                <span className="mt-1 block text-xs text-slate-500 dark:text-slate-400">
                  {category.label}
                </span>
              </span>

              <span
                className={`hidden rounded-full px-2.5 py-1 text-[10px] font-semibold sm:inline-flex ${
                  levelStyles[guide.level]
                }`}>
                {guide.level}
              </span>

              <HiOutlineArrowRight className="h-4 w-4 shrink-0 text-slate-400" />
            </button>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/50 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
              <HiOutlineCommandLine className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-sm font-bold">
                Working with a SyncXel product?
              </h3>
              <p className="mt-1 max-w-lg text-xs leading-6 text-slate-500 dark:text-slate-400">
                Explore dedicated installation, customization and deployment
                guides for your purchased UI Packs and Full Templates.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onCategory("products")}
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400">
            Explore Product Guides
            <HiOutlineArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
