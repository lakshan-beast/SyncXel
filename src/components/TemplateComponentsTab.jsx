import React from "react";
import { HiBookOpen, HiExternalLink, HiShoppingCart, HiChatAlt2 } from "react-icons/hi";

import { premiumKits } from "../data/premiumKitData";

export default function TemplateComponentsTab({ premiumKits }) {
  return (
    <div className="max-w-6xl mx-auto space-y-6 font-mono">
      {premiumKits.map((kit) => {
        const kitTelegramLink = `https://t.me/lakshan_dev?text=${encodeURIComponent(
          `Hi, I want to customize the "${kit.title}" UI-Kit for my project. Let's discuss!`,
        )}`;

        return (
          <div
            key={kit.id}
            className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Kit Image Preview */}
              <div className="relative h-64 lg:h-full overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-800 bg-slate-950 flex items-center justify-center p-4">
                <img
                  src={kit.previewImg}
                  alt={kit.title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute top-4 left-4 space-x-2 flex">
                  <span className="text-xs font-bold text-slate-950 bg-white px-3 py-1 rounded-full shadow-md">
                    Pro • {kit.price}
                  </span>
                  <span className="text-xs font-bold text-white bg-slate-900/90 border border-slate-800 px-3 py-1 rounded-full shadow-md">
                    {kit.sales}
                  </span>
                </div>
              </div>

              {/* Kit Details & Actions */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {kit.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6 font-sans">
                    {kit.description}
                  </p>

                  {/* Features checklist */}
                  <div className="space-y-2 mb-6 font-sans">
                    <div className="flex items-center space-x-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                      <span>Navbar, Hero, Services, Contacts & Footer included</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                      <span>Framer Motion smooth animations & dark mode enabled</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                      <span>Instant .zip download via Lemon Squeezy with README.md</span>
                    </div>
                  </div>

                  {/* Documentation Note Box */}
                  <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-2xl mb-6">
                    <div className="flex items-start space-x-2 text-xs text-slate-300">
                      <HiBookOpen className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block mb-0.5">
                          A-Z Documentation Included:
                        </strong>
                        <span className="font-sans">
                          Get complete setup guides for Firebase, Supabase, EmailJS, Vercel & GitHub. Visit{" "}
                          <a
                            href="/docs"
                            className="text-white underline font-semibold">
                            syncxel.com/docs
                          </a>
                          .
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-4 border-t border-slate-800">
                  <div className="flex items-center space-x-3">
                    {kit.demoUrl && (
                      <a
                        href={kit.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-all cursor-pointer border border-slate-700">
                        <HiExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    <a
                      href={kit.checkoutUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-950 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition-all shadow-md cursor-pointer">
                      <HiShoppingCart className="w-4 h-4" />
                      <span>Get UI-Kit ({kit.price})</span>
                    </a>
                  </div>

                  {/* Telegram Customize Upsell */}
                  <a
                    href={kitTelegramLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-200 hover:text-white rounded-xl text-xs font-medium flex items-center justify-center space-x-2 transition-all cursor-pointer">
                    <HiChatAlt2 className="w-4 h-4 text-white" />
                    <span>Customize "{kit.title}" on Telegram 🚀</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}