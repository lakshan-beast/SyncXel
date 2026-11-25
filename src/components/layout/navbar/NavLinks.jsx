import React from "react";
import { Link } from "react-router-dom";

export default function NavLinks({ item, active }) {
  return (
    <Link
      to={item.path}
      className={`px-3 py-2 rounded-lg text-md font-semibold transition-all ${
        active
          ? "bg-slate-100 text-slate-950 dark:bg-slate-800 dark:text-white"
          : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
      }`}>
      {item.label}
    </Link>
  );
}
