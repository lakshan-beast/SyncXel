import React from "react";
import {
  HiOutlineShieldCheck,
  HiOutlineDocumentText,
  HiOutlineReceiptRefund,
} from "react-icons/hi2";

const navigationItems = [
  {
    id: "privacy",
    label: "Privacy Policy",
    description: "Your data & privacy",
    icon: HiOutlineShieldCheck,
  },
  {
    id: "terms",
    label: "Terms of Service",
    description: "Product usage rules",
    icon: HiOutlineDocumentText,
  },
  {
    id: "refunds",
    label: "Refund Policy",
    description: "Purchases & refunds",
    icon: HiOutlineReceiptRefund,
  },
];

export default function LegalNavigation({ activeSection, onSectionChange }) {
  return (
    <nav
      aria-label="Legal policies"
      className="flex gap-3 overflow-x-auto pb-2">
      {navigationItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSectionChange(item.id)}
            aria-pressed={isActive}
            className={`group flex min-w-55 flex-1 items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 sm:min-w-0 ${
              isActive
                ? "border-blue-200 bg-blue-50 shadow-sm dark:border-blue-500/30 dark:bg-blue-500/10"
                : "border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500/30 dark:hover:bg-slate-900/80"
            }`}>
            <span
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                isActive
                  ? "bg-blue-600 text-white dark:bg-blue-500"
                  : "bg-slate-100 text-slate-500 group-hover:text-blue-600 dark:bg-slate-800 dark:text-slate-400 dark:group-hover:text-blue-400"
              }`}>
              <Icon className="text-xl" />
            </span>

            <span className="min-w-0">
              <span
                className={`block text-sm font-semibold ${
                  isActive
                    ? "text-blue-700 dark:text-blue-400"
                    : "text-slate-800 dark:text-slate-200"
                }`}>
                {item.label}
              </span>

              <span className="mt-1 block text-xs text-slate-500 dark:text-slate-400">
                {item.description}
              </span>
            </span>
          </button>
        );
      })}
    </nav>
  );
}
