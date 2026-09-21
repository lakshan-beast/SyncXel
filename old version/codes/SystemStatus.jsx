export default function SystemStatus() {
  return (
    <div className="fixed bottom-4 right-23 z-50 bg-black/80 backdrop-blur-md border-2 border-cyan-500/30 rounded-full p-3 text-xs text-cyan-400 font-baloo shadow-[0_0_15px_rgba(34,211,238,0.15)] md:hidden lg:flex flex items-center space-x-3 px-6 py-2">
      {/* 🌟 Hacker Radar / Shield Scanner Indicator */}
      <div className="relative flex items-center justify-center h-8 w-8">
        {/* Outer Rotating Ring */}
        <span
          className="absolute inset-0 rounded-full border-[3px] border-dashed border-cyan-400/50 animate-spin opacity-75"
          style={{ animationDuration: "6s" }}></span>
        {/* Inner Pulsing Core */}
        <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-cyan-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-300"></span>
      </div>

      <div>
        <p className="font-bold tracking-wider">FIREWALL : Active</p>
        <p className="text-[10px] text-gray-400">SHIELDS : 100% | Secure</p>
      </div>
    </div>
  );
}
