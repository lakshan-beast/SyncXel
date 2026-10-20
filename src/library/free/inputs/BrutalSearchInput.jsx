// import { motion } from "framer-motion";

// export default function BrutalOtpInput() {
//   return (
//     <div className="flex gap-2 font-baloo">
//       {[1, 2, 3, 4].map((item) => (
//         <motion.input
//           key={item}
//           type="text"
//           maxLength={1}
//           whileFocus={{ scale: 1.05 }}
//           className="w-12 h-12 text-center bg-yellow-300 text-slate-950 font-black text-lg border-2 border-slate-950 rounded-xl shadow-[3px_3px_0px_0px_#020617] focus:outline-none"
//         />
//       ))}
//     </div>
//   );
// }


import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";

export default function BrutalSearchInput() {
  return (
    <motion.div
      whileFocus={{ x: -2, y: -2, boxShadow: "6px 6px 0px 0px #020617" }}
      className="flex items-center gap-3 w-80 px-4 py-3 bg-white border-2 border-slate-950 rounded-2xl shadow-[4px_4px_0px_0px_#020617] focus-within:shadow-[6px_6px_0px_0px_#020617] focus-within:-translate-x-0.5 focus-within:-translate-y-0.5 transition-all"
    >
      <FiSearch className="w-5 h-5 text-slate-950" />
      <input
        id="brutal-search"
        type="search"
        placeholder="Search components..."
        className="flex-1 bg-transparent text-sm font-bold text-slate-950 placeholder:text-slate-500 outline-none"
      />
      <kbd className="text-[10px] font-black bg-slate-950 text-yellow-300 px-2 py-1 rounded-lg">
        ⌘K
      </kbd>
    </motion.div>
  );
}