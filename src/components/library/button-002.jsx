import React from "react";

const ArrowHoverButton = () => {
  return (
    <button className="group relative inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 px-6 rounded-xl overflow-hidden transition-all duration-300 shadow-lg shadow-amber-500/20 active:scale-95">
      <span className="inline-block transition-all duration-300 group-hover:pr-6">
        Hover
      </span>
      <span className="absolute right-4 opacity-0 transition-all duration-300 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-lg">
        »
      </span>
    </button>
  );
};

export default ArrowHoverButton;
