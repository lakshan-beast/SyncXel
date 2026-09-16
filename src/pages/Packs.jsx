import React from "react";
import { uiPacksData } from "../data/uiPacks";

export default function AllComponents() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-white mb-8">
        Syncxel UI Packs & Kits
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
        {uiPacksData.map((pack) => (
          <div
            key={pack.id}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-500/10 text-indigo-400 rounded-full">
                {pack.category}
              </span>
              <h3 className="text-xl font-bold text-white mt-4">
                {pack.title}
              </h3>
              <p className="text-slate-400 text-sm mt-2 leading-tight">{pack.description}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-5xl font-bold text-white">{pack.price}</span>
              <div className="space-x-2">
                <a
                  href={pack.demoUrl}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs rounded-lg transition">
                  Live Preview
                </a>
                <a
                  href={pack.checkoutUrl}
                  className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs rounded-lg transition">
                  Buy Pack
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
