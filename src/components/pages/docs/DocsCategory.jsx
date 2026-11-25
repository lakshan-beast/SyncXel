import {
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlineBookOpen,
} from "react-icons/hi2";

const levelStyles = {
  Beginner:
    "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
  Intermediate:
    "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
  Advanced: "bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400",
};

export default function DocsCategory({ category, onGuide, onHome }) {
  const Icon = category.icon;

  return (
    <div>
      <button
        type="button"
        // onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onClick={onHome}
        className="mb-8 inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">
        <HiOutlineArrowLeft className="h-4 w-4" />
        Documentation
      </button>

      <div className="border-b border-slate-200 pb-8 dark:border-slate-800">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
          <Icon className="h-6 w-6" />
        </div>

        <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">
          Documentation Category
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          {category.label}
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400">
          {category.description}
        </p>

        <div className="mt-5 flex items-center gap-2 text-xs text-slate-400">
          <HiOutlineBookOpen className="h-4 w-4" />
          {category.guides.length} available guides
        </div>
      </div>

      <section className="mt-9">
        <h2 className="mb-5 text-lg font-bold">Available Guides</h2>

        <div className="space-y-3">
          {category.guides.map((guide, index) => (
            <button
              key={guide.id}
              type="button"
              onClick={() => onGuide(category.id, guide.id)}
              className="group flex w-full items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:border-blue-300 hover:shadow-lg hover:shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-blue-500/40 dark:hover:shadow-black/20">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-sm font-bold text-slate-500 dark:bg-slate-800 dark:text-slate-300">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-sm font-bold transition group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {guide.title}
                </span>
                <span className="mt-1.5 block text-xs leading-5 text-slate-500 dark:text-slate-400">
                  {guide.description}
                </span>

                <span className="mt-3 inline-flex">
                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                      levelStyles[guide.level] || levelStyles.Beginner
                    }`}>
                    {guide.level}
                  </span>
                </span>
              </span>

              <HiOutlineArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-500" />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
