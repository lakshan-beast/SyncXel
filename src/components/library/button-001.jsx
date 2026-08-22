import React from "react";

const RippleButton = () => {
  return (
    <button className="relative overflow-hidden bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-300 group shadow-lg shadow-emerald-900/20 active:scale-95">
      <span className="relative z-10">Click me</span>

      {/* Ripple Animation Overlay */}
      <span className="absolute inset-0 bg-red-500/80 scale-0 rounded-full transition-transform duration-700 ease-out group-hover:scale-150 origin-center opacity-0 group-hover:opacity-100 pointer-events-none" />
    </button>
  );
};

export default RippleButton;
