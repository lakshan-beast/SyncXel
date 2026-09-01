import LoaderSpinner from "../../library/free/loaders/LoaderSpinner";

export const loadersData = [
  {
    id: "loader-spinner",
    title: "Glowing Spinner Loader",
    category: "Loaders", // 👈 category එක 'Loaders' විය යුතුයි
    description:
      "A smooth glowing spinner loader built with Tailwind CSS animation.",
    copiesCount: 154,
    component: <LoaderSpinner />, // 👈 Preview එකට පෙන්වීමට සැබෑ React Component එක
    code: `<div className="relative w-12 h-12">
  <div className="w-full h-full rounded-full border-4 border-slate-800"></div>
  <div className="absolute inset-0 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
</div>`, // 👈 Code tab එකේ පෙන්වීමට JSX string එක
  },
];
