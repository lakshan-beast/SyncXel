export default function FloatingInput() {
  return (
    <div className="relative w-72">
      <input 
        type="text" 
        id="floating_input" 
        className="block rounded-xl px-3.5 pb-2.5 pt-4 w-full text-xs text-slate-200 bg-slate-900 border border-slate-800 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer" 
        placeholder=" " 
      />
      <label 
        htmlFor="floating_input" 
        className="absolute text-xs text-slate-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-3.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 pointer-events-none"
      >
        Email Address
      </label>
    </div>
  );
}