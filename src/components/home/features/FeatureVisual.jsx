function PreviewVisual() {
  return (
    <div className="relative mt-8 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3 dark:border-slate-700">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600" />
          <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600" />
          <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600" />
        </div>
        <span className="text-[10px] font-medium text-slate-400">
          COMPONENT PREVIEW
        </span>
      </div>

      <div className="flex min-h-32 flex-col items-center justify-center gap-4 py-5">
        <div className="h-3 w-32 rounded-full bg-slate-200 dark:bg-slate-700" />
        <button
          type="button"
          tabIndex={-1}
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-blue-500/20">
          Explore Components
        </button>
        <div className="flex gap-2">
          <span className="h-1.5 w-10 rounded-full bg-slate-200 dark:bg-slate-700" />
          <span className="h-1.5 w-10 rounded-full bg-slate-200 dark:bg-slate-700" />
          <span className="h-1.5 w-10 rounded-full bg-blue-400/60" />
        </div>
      </div>
    </div>
  );
}

function ResponsiveVisual() {
  return (
    <div className="mt-8 flex h-40 items-end justify-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 px-4 pt-5 dark:border-slate-700 dark:bg-slate-900">
      <div className="flex h-20 w-12 items-center justify-center rounded-t-lg border border-slate-300 bg-white p-1.5 dark:border-slate-600 dark:bg-slate-800">
        <div className="h-full w-full rounded-sm bg-blue-500/10" />
      </div>

      <div className="flex h-28 w-20 items-center justify-center rounded-t-xl border border-slate-300 bg-white p-2 dark:border-slate-600 dark:bg-slate-800">
        <div className="h-full w-full rounded-md bg-blue-500/10" />
      </div>

      <div className="flex h-36 w-36 items-center justify-center rounded-t-xl border border-slate-300 bg-white p-2 dark:border-slate-600 dark:bg-slate-800">
        <div className="h-full w-full rounded-md bg-blue-500/10 p-2">
          <div className="h-2 w-10 rounded-full bg-blue-400/50" />
          <div className="mt-2 h-12 rounded bg-slate-100 dark:bg-slate-700" />
        </div>
      </div>
    </div>
  );
}

function CodeVisual() {
  return (
    <div className="mt-6 space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-4 font-mono text-[10px] dark:border-slate-700 dark:bg-slate-900">
      <p className="text-blue-600 dark:text-blue-400">{"<ReusableComponent"}</p>
      <p className="pl-4 text-slate-500">{'variant="modern"'}</p>
      <p className="pl-4 text-slate-500">{"responsive={true}"}</p>
      <p className="text-blue-600 dark:text-blue-400">{"  />"}</p>
      <div className="flex items-center gap-2 pt-1 text-[9px] text-slate-400">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        REUSABLE BY DESIGN
      </div>
    </div>
  );
}

function DocsVisual() {
  return (
    <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3 dark:border-slate-700">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10 text-xs font-bold text-blue-600 dark:text-blue-400">
          D
        </div>
        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
          Getting Started
        </span>
      </div>
      <div className="mt-4 space-y-3">
        {[85, 65, 95].map((width, index) => (
          <div key={index}>
            <div
              className="h-1.5 rounded-full bg-slate-200 dark:bg-slate-700"
              style={{ width: `${width}%` }}
            />
            <div className="mt-1.5 h-1 w-2/3 rounded-full bg-slate-100 dark:bg-slate-800" />
          </div>
        ))}
      </div>
    </div>
  );
}

function CustomVisual() {
  return (
    <div className="mt-6 flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">
      <div className="h-12 w-12 rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800" />
      <div className="h-12 w-12 rounded-xl bg-blue-500 shadow-lg shadow-blue-500/20" />
      <div className="h-12 w-12 rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800" />
    </div>
  );
}

function UpdatesVisual() {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
        <span className="text-lg">↻</span>
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
          Product improvements
        </p>
        <p className="mt-1 text-[10px] text-slate-500 dark:text-slate-400">
          Updates, resources and support
        </p>
      </div>
      <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-[10px] font-semibold text-blue-600 dark:text-blue-400">
        Ongoing
      </span>
    </div>
  );
}

export default function FeatureVisual({ type }) {
  switch (type) {
    case "preview":
      return <PreviewVisual />;
    case "responsive":
      return <ResponsiveVisual />;
    case "code":
      return <CodeVisual />;
    case "docs":
      return <DocsVisual />;
    case "custom":
      return <CustomVisual />;
    case "updates":
      return <UpdatesVisual />;
    default:
      return null;
  }
}
