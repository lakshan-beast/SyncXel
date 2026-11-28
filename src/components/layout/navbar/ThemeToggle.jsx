// import React, { useContext } from "react";
// import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
// import { ThemeContext } from "../../context/ThemeContext";

// export default function ThemeToggle() {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <button
//       type="button"
//       onClick={toggleTheme}
//       aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
//       title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
//       className="flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
//       {theme === "light" ? (
//         <HiOutlineMoon className="w-5 h-5" />
//       ) : (
//         <HiOutlineSun className="w-5 h-5" />
//       )}
//     </button>
//   );
// }

// import React from "react";
// import { motion } from "framer-motion";
// import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
// import { useTheme } from "../../../context/ThemeContext";

// export default function ThemeToggle() {
//   const { theme, toggleTheme } = useTheme();

//   const isDark = theme === "dark";

//   return (
//     <motion.button
//       type="button"
//       onClick={toggleTheme}
//       whileTap={{ scale: 0.9 }}
//       aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
//       title={`Switch to ${isDark ? "light" : "dark"} theme`}
//       className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-100 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">
//       {isDark ? (
//         <HiOutlineSun className="h-5 w-5" />
//       ) : (
//         <HiOutlineMoon className="h-5 w-5" />
//       )}
//     </motion.button>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { useTheme } from "../../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-[#101a2c] text-slate-300 transition-colors hover:border-emerald-400/20 hover:bg-emerald-400/10 hover:text-emerald-400">
      {isDark ? (
        <HiOutlineSun className="h-5 w-5" />
      ) : (
        <HiOutlineMoon className="h-5 w-5" />
      )}
    </motion.button>
  );
}
