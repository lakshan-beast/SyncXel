
import { useMemo } from "react";
import {
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineClipboard,
} from "react-icons/hi2";

const levelStyles = {
  Beginner:
    "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
  Intermediate:
    "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
  Advanced:
    "bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400",
};

export default function DocsArticle({
  category,
  guide,
  onBack,
  onNavigate,
}) {
  const allGuides = category.guides;
  const currentIndex = allGuides.findIndex(
    (item) => item.id === guide.id
  );

  const previousGuide =
    currentIndex > 0 ? allGuides[currentIndex - 1] : null;

  const nextGuide =
    currentIndex < allGuides.length - 1
      ? allGuides[currentIndex + 1]
      : null;

  const sections = useMemo(
    () => [
      { id: "overview", title: "Overview" },
      { id: "getting-started", title: "Getting Started" },
      { id: "implementation", title: "Implementation" },
      { id: "next-steps", title: "Next Steps" },
    ],
    []
  );

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Clipboard access may be unavailable in insecure contexts.
    }
  };

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center gap-2 text-xs text-slate-400">
        <button
          type="button"
          onClick={onBack}
          className="transition hover:text-blue-600 dark:hover:text-blue-400"
        >
          Documentation
        </button>
        <span>/</span>
        <span>{category.label}</span>
        <span>/</span>
        <span className="max-w-[180px] truncate font-medium text-slate-600 dark:text-slate-300">
          {guide.title}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-12 xl:grid-cols-[minmax(0,1fr)_190px]">
        <article className="min-w-0">
          <header className="border-b border-slate-200 pb-8 dark:border-slate-800">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
                {category.label}
              </span>
              <span
                className={`rounded-full px-3 py-1 text-[10px] font-semibold ${
                  levelStyles[guide.level] || levelStyles.Beginner
                }`}
              >
                {guide.level}
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {guide.title}
            </h1>

            <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
              {guide.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-[11px] text-slate-400">
              <span>SyncXel Documentation</span>
              <span>•</span>
              <span>Development Guide</span>
            </div>
          </header>

          <div className="docs-article-content space-y-10 py-8">
            <section id="overview" className="scroll-mt-28">
              <h2 className="text-xl font-bold">Overview</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                This guide is part of the SyncXel developer documentation.
                Detailed instructions, explanations and practical examples
                for this topic will be added to this article.
              </p>
            </section>

            <section id="getting-started" className="scroll-mt-28">
              <h2 className="text-xl font-bold">Getting Started</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                Before following this guide, make sure your project is
                installed correctly and the required development tools
                are available.
              </p>
            </section>

            <section id="implementation" className="scroll-mt-28">
              <h2 className="text-xl font-bold">Implementation</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                Step-by-step implementation instructions and code examples
                will be displayed here when the article data is connected.
              </p>

              <div className="mt-5 overflow-hidden rounded-2xl border border-slate-800 bg-[#0b1220]">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-[11px] text-slate-400">
                      Example
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => copyText("// Your code example goes here")}
                    className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-[11px] text-slate-400 transition hover:bg-white/10 hover:text-white"
                  >
                    <HiOutlineClipboard className="h-3.5 w-3.5" />
                    Copy
                  </button>
                </div>

                <pre className="overflow-x-auto p-5 text-xs leading-7 text-blue-200">
                  <code>{"// Your code example goes here"}</code>
                </pre>
              </div>
            </section>

            <section id="next-steps" className="scroll-mt-28">
              <h2 className="text-xl font-bold">Next Steps</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                Continue exploring related guides to learn more about
                configuring and improving your project.
              </p>
            </section>
          </div>

          <div className="grid gap-3 border-t border-slate-200 pt-6 dark:border-slate-800 sm:grid-cols-2">
            {previousGuide ? (
              <button
                type="button"
                onClick={() =>
                  onNavigate(category.id, previousGuide.id)
                }
                className="rounded-2xl border border-slate-200 p-4 text-left transition hover:border-blue-300 dark:border-slate-800 dark:hover:border-blue-500/40"
              >
                <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  <HiOutlineArrowLeft className="h-3.5 w-3.5" />
                  Previous Guide
                </span>
                <span className="mt-2 block text-sm font-semibold">
                  {previousGuide.title}
                </span>
              </button>
            ) : (
              <div />
            )}

            {nextGuide && (
              <button
                type="button"
                onClick={() =>
                  onNavigate(category.id, nextGuide.id)
                }
                className="rounded-2xl border border-slate-200 p-4 text-right transition hover:border-blue-300 dark:border-slate-800 dark:hover:border-blue-500/40"
              >
                <span className="flex items-center justify-end gap-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Next Guide
                  <HiOutlineArrowRight className="h-3.5 w-3.5" />
                </span>
                <span className="mt-2 block text-sm font-semibold">
                  {nextGuide.title}
                </span>
              </button>
            )}
          </div>
        </article>

        <aside className="hidden xl:block">
          <div className="sticky top-10">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
              On This Page
            </p>

            <nav className="space-y-3 border-l border-slate-200 pl-4 dark:border-slate-800">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block text-xs text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  {section.title}
                </a>
              ))}
            </nav>

            <div className="mt-8 rounded-xl border border-slate-200 p-4 dark:border-slate-800">
              <HiOutlineCheckCircle className="h-5 w-5 text-blue-500" />
              <p className="mt-3 text-xs font-semibold">
                Was this guide helpful?
              </p>
              <p className="mt-1 text-[11px] leading-5 text-slate-500 dark:text-slate-400">
                Feedback options can be connected when we finalize the
                documentation data.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
