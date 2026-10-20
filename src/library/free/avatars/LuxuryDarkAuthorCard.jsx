// import { motion } from "framer-motion";

// export default function BentoProfileCard() {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.02, backgroundColor: "#1e293b" }}
//       className="w-72 p-4 bg-slate-900 border border-slate-800 rounded-2xl font-baloo flex items-center gap-4 text-white shadow-xl cursor-pointer">
//       <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center font-bold text-indigo-400 text-xs">
//         BN
//       </div>
//       <div>
//         <h4 className="text-xs font-bold">Bento Profile</h4>
//         <p className="text-[10px] text-slate-400">Workspace Owner</p>
//       </div>
//     </motion.div>
//   );
// }


import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function LuxuryDarkAuthorCard() {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
      className="w-80 p-6 bg-neutral-950 border border-neutral-800 rounded-2xl text-neutral-200"
    >
      <div className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/160?img=52"
          alt="Author"
          className="w-14 h-14 rounded-full object-cover ring-1 ring-amber-200/40"
        />

        <div>
          <p className="font-serif text-lg text-white">Elena Moreau</p>
          <p className="text-xs uppercase tracking-[0.2em] text-amber-200/70">
            Design Writer
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-neutral-400">
        Essays on craft, taste, and the quiet details that make products feel
        considered.
      </p>

      <button className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-200 hover:text-white transition">
        Read Portfolio
        <FiArrowUpRight className="w-3.5 h-3.5" />
      </button>
    </motion.article>
  );
}