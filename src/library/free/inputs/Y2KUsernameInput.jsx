// export default function FloatingInput() {
//   return (
//     <div className="relative w-72">
//       <input 
//         type="text" 
//         id="floating_input" 
//         className="block rounded-xl px-3.5 pb-2.5 pt-4 w-full text-xs text-slate-200 bg-slate-900 border border-slate-800 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer" 
//         placeholder=" " 
//       />
//       <label 
//         htmlFor="floating_input" 
//         className="absolute text-xs text-slate-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-3.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 pointer-events-none"
//       >
//         Email Address
//       </label>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import { FiAtSign } from "react-icons/fi";

export default function Y2KUsernameInput() {
  return (
    <motion.div
      whileHover={{ rotate: -1 }}
      className="relative w-80"
    >
      <div className="flex items-center gap-2 px-4 py-3.5 bg-white border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_#000] focus-within:shadow-[6px_6px_0px_0px_#000] focus-within:-translate-x-0.5 focus-within:-translate-y-0.5 transition-all">
        <FiAtSign className="w-4 h-4 text-pink-500" />
        <input
          id="y2k-username"
          type="text"
          placeholder="pick_a_vibe"
          className="flex-1 bg-transparent text-sm font-black text-black placeholder:text-slate-400 outline-none"
        />
      </div>
      <label htmlFor="y2k-username" className="sr-only">
        Username
      </label>
      <span className="absolute -top-2.5 right-4 px-2 py-0.5 bg-cyan-300 border-2 border-black rounded-full text-[9px] font-black text-black">
        UNIQUE?
      </span>
    </motion.div>
  );
}