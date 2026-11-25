// import { motion, useReducedMotion } from "framer-motion";

// const stars = [
//   { left: "8%", top: "15%", delay: 0 },
//   { left: "18%", top: "42%", delay: 1.2 },
//   { left: "29%", top: "12%", delay: 2 },
//   { left: "42%", top: "65%", delay: 0.8 },
//   { left: "55%", top: "24%", delay: 1.8 },
//   { left: "67%", top: "48%", delay: 0.5 },
//   { left: "78%", top: "17%", delay: 2.5 },
//   { left: "91%", top: "58%", delay: 1.4 },
//   { left: "35%", top: "82%", delay: 2.2 },
//   { left: "85%", top: "85%", delay: 0.3 },
// ];

// export default function BackgroundAtmosphere() {
//   const shouldReduceMotion = useReducedMotion();

//   return (
//     <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//       {/* Original blue glow */}
//       <div
//         className="absolute -top-40 right-[-10%] h-[500px] w-[600px]
//         rounded-full bg-blue-400/[0.5] blur-[100px]
//         dark:bg-blue-400/[0.42]"
//       />

//       {/* Original secondary glow */}
//       <div
//         className="absolute left-[-20%] top-[60%] h-[450px] w-[450px]
//         rounded-full bg-slate-700 blur-[100px]
//         dark:bg-slate-300/40"
//       />

//       {/* Animated grid */}
//       <div className="absolute inset-0 overflow-hidden opacity-[0.7] dark:opacity-[0.5]">
//         <motion.div
//           animate={
//             shouldReduceMotion
//               ? {}
//               : { backgroundPosition: ["0px 0px", "56px 56px"] }
//           }
//           transition={{
//             duration: 18,
//             ease: "linear",
//             repeat: Infinity,
//           }}
//           className="absolute inset-[-56px]"
//           style={{
//             backgroundImage: `
//               linear-gradient(to right, rgba(148,163,184,0.15) 1px, transparent 1px),
//               linear-gradient(to bottom, rgba(148,163,184,0.15) 1px, transparent 1px)
//             `,
//             backgroundSize: "56px 56px",
//             maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
//             WebkitMaskImage:
//               "linear-gradient(to bottom, black 0%, transparent 100%)",
//           }}
//         />
//       </div>

//       {/* Twinkling stars */}
//       {!shouldReduceMotion &&
//         stars.map((star, index) => (
//           <motion.div
//             key={index}
//             className="absolute h-[3px] w-[3px] rounded-full
//             bg-blue-400 dark:bg-blue-200"
//             style={{
//               left: star.left,
//               top: star.top,
//               boxShadow: "0 0 8px 2px rgba(96,165,250,0.45)",
//             }}
//             animate={{
//               opacity: [0.2, 1, 0.3],
//               scale: [0.7, 1.3, 0.7],
//             }}
//             transition={{
//               duration: 3,
//               delay: star.delay,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         ))}

//       {/* Shooting stars */}
//       {!shouldReduceMotion && (
//         <>
//           {[0, 1, 2].map((item) => (
//             <motion.div
//               key={item}
//               className="absolute h-[1px] w-24
//               bg-gradient-to-r from-transparent via-blue-300 to-transparent"
//               style={{
//                 top: `${18 + item * 24}%`,
//                 left: "-120px",
//                 rotate: "-25deg",
//                 boxShadow: "0 0 10px rgba(96,165,250,0.7)",
//               }}
//               animate={{
//                 x: ["0vw", "120vw"],
//                 opacity: [0, 1, 0],
//               }}
//               transition={{
//                 duration: 2.5,
//                 delay: item * 5,
//                 repeat: Infinity,
//                 repeatDelay: 5,
//                 ease: "linear",
//               }}
//             />
//           ))}
//         </>
//       )}

//       {/* Bottom fade */}
//       <div
//         className="absolute inset-x-0 bottom-0 h-64
//         bg-gradient-to-t from-white to-transparent
//         dark:from-slate-950"
//       />
//     </div>
//   );
// }

import { motion, useReducedMotion } from "framer-motion";
import Spaceship from "./Spaceship";

// Generate a consistent starfield
const stars = Array.from({ length: 200 }, (_, i) => ({
  id: i,
  left: `${(i * 37.7 + 13) % 100}%`,
  top: `${(i * 61.3 + 7) % 100}%`,
  size: i % 15 === 0 ? 8 : i % 6 === 0 ? 2 : 1,
  duration: 2 + (i % 5) * 0.8,
  delay: (i % 17) * 0.2,
  opacity: 0.2 + (i % 15) * 0.3,
}));

// Shooting star trajectories
const shootingStars = [
  { top: "8%", left: "8%", x: 360, y: 230, delay: 1, duration: 2.8 },
  { top: "18%", left: "55%", x: 300, y: 190, delay: 5, duration: 2.4 },
  { top: "35%", left: "25%", x: 340, y: 220, delay: 9, duration: 2.6 },
  { top: "12%", left: "82%", x: -250, y: 250, delay: 13, duration: 2.5 },
  { top: "48%", left: "65%", x: 280, y: 180, delay: 17, duration: 2.7 },
  { top: "5%", left: "38%", x: 320, y: 210, delay: 21, duration: 2.5 },
  { top: "65%", left: "12%", x: 300, y: 190, delay: 25, duration: 2.6 },

  { top: "72%", left: "-82%", x: -250, y: 250, delay: 28, duration: 2.5 },
  { top: "78%", left: "-65%", x: 280, y: 180, delay: 32, duration: 2.7 },
  { top: "85%", left: "-38%", x: 320, y: 210, delay: 35, duration: 2.4 },
  { top: "92%", left: "-12%", x: 300, y: 190, delay: 39, duration: 2.6 },
];

export default function BackgroundAtmosphere() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Flying spacecraft */}
      <Spaceship />

      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border-3 border-slate-300/50 dark:border-white/[0.07] animate-ping" />
      <div className="absolute -right-5 -top-5 h-38 w-38 bg-white/30 rounded-full animate-ping" />
      <div className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full border-t-4 border-l-slate-300/50 dark:border-white/[0.07] animate-spin" />

      {/* Original blue atmosphere */}
      <div
        className="absolute -top-40 right-[-10%] h-[500px] w-[600px]
        rounded-full bg-blue-400/[0.5] blur-[100px]
        dark:bg-blue-400/[0.42]"
      />

      {/* Original secondary atmosphere */}
      <div
        className="absolute left-[-20%] top-[60%] h-[450px] w-[450px]
        rounded-full bg-slate-700 blur-[100px]
        dark:bg-slate-300/40"
      />

      {/* Galaxy nebula */}
      <div
        className="absolute left-[20%] top-[15%] h-[600px] w-[600px]
        rounded-full opacity-30 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(99,102,241,0.2) 35%, transparent 70%)",
        }}
      />

      <div
        className="absolute right-[5%] top-[35%] h-[450px] w-[450px]
        rounded-full opacity-25 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(147,197,253,0.35) 0%, rgba(30,64,175,0.15) 45%, transparent 70%)",
        }}
      />

      {/* Animated grid */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.45] dark:opacity-[0.35]">
        <motion.div
          className="absolute inset-[-56px]"
          animate={
            shouldReduceMotion
              ? {}
              : { backgroundPosition: ["0px 0px", "56px 56px"] }
          }
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(148,163,184,0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(148,163,184,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Deep space stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-blue-500 dark:bg-blue-100"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            boxShadow:
              star.size === 3
                ? "0 0 10px 2px rgba(147,197,253,0.65)"
                : "0 0 5px rgba(147,197,253,0.45)",
          }}
          animate={
            shouldReduceMotion
              ? { opacity: star.opacity }
              : {
                  opacity: [0.15, star.opacity, 0.3, 1, 0.15],
                  scale: [0.7, 1.2, 0.8, 1.3, 0.7],
                }
          }
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Brighter distant stars */}
      {!shouldReduceMotion &&
        Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={`bright-${i}`}
            className="absolute h-[3px] w-[3px] rounded-full bg-white"
            style={{
              left: `${(i * 29 + 11) % 100}%`,
              top: `${(i * 43 + 17) % 100}%`,
              boxShadow:
                "0 0 5px 2px rgba(147,197,253,0.8), 0 0 16px 4px rgba(59,130,246,0.35)",
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.7, 1.5, 0.7],
            }}
            transition={{
              duration: 3 + (i % 4),
              delay: i * 0.7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      {/* Diagonal falling shooting stars */}
      {!shouldReduceMotion &&
        shootingStars.map((star, i) => (
          <motion.div
            key={`shooting-${i}`}
            className="absolute"
            style={{
              top: star.top,
              left: star.left,
              width: 130,
              height: 2,
              rotate: "35deg",
              transformOrigin: "left center",
              background:
                "linear-gradient(90deg, transparent 0%, rgba(147,197,253,0.2) 35%, rgba(191,219,254,0.95) 100%)",
              filter: "drop-shadow(0 0 5px rgba(96,165,250,0.9))",
            }}
            animate={{
              x: [0, star.x],
              y: [0, star.y],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              repeatDelay: 8 + i * 2,
              ease: "easeIn",
            }}
          />
        ))}

      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-64
        bg-gradient-to-t from-white to-transparent
        dark:from-slate-950"
      />
    </div>
  );
}



// import { motion, useReducedMotion } from "framer-motion";
// import Spaceship from "./Spaceship";

// // Lightweight static starfield
// const stars = Array.from({ length: 60 }, (_, i) => ({
//   id: i,
//   left: `${(i * 37.7 + 13) % 100}%`,
//   top: `${(i * 61.3 + 7) % 100}%`,
//   size: i % 10 === 0 ? 3 : i % 5 === 0 ? 2 : 1,
//   opacity: 0.25 + (i % 5) * 0.12,
// }));

// // Limited shooting stars
// const shootingStars = [
//   { top: "12%", left: "12%", x: 300, y: 190, delay: 2 },
//   { top: "35%", left: "65%", x: -260, y: 180, delay: 12 },
//   { top: "68%", left: "28%", x: 280, y: -180, delay: 22 },
// ];

// export default function BackgroundAtmosphere() {
//   const shouldReduceMotion = useReducedMotion();

//   return (
//     <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//       {/* Flying spaceship */}
//       <Spaceship />

//       {/* Main blue atmosphere */}
//       <div
//         className="absolute -top-40 right-[-10%] h-[500px] w-[600px]
//         rounded-full bg-blue-400/[0.35] blur-[90px]
//         dark:bg-blue-400/[0.25]"
//       />

//       {/* Secondary atmosphere */}
//       <div
//         className="absolute left-[-20%] top-[60%] h-[400px] w-[400px]
//         rounded-full bg-slate-500/20 blur-[90px]
//         dark:bg-slate-300/[0.18]"
//       />

//       {/* Galaxy nebula */}
//       <div
//         className="absolute left-[20%] top-[15%] h-[450px] w-[450px]
//         rounded-full opacity-20 blur-[100px]"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(99,102,241,0.2) 35%, transparent 70%)",
//         }}
//       />

//       {/* Static grid */}
//       <div
//         className="absolute inset-0 opacity-[0.3] dark:opacity-[0.25]"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, rgba(148,163,184,0.12) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(148,163,184,0.12) 1px, transparent 1px)
//           `,
//           backgroundSize: "56px 56px",
//           maskImage:
//             "linear-gradient(to bottom, black 0%, transparent 100%)",
//           WebkitMaskImage:
//             "linear-gradient(to bottom, black 0%, transparent 100%)",
//         }}
//       />

//       {/* Static stars */}
//       {stars.map((star) => (
//         <div
//           key={star.id}
//           className="absolute rounded-full bg-blue-500 dark:bg-blue-100"
//           style={{
//             left: star.left,
//             top: star.top,
//             width: star.size,
//             height: star.size,
//             opacity: star.opacity,
//             boxShadow:
//               star.size === 3
//                 ? "0 0 6px rgba(147,197,253,0.5)"
//                 : "0 0 3px rgba(147,197,253,0.35)",
//           }}
//         />
//       ))}

//       {/* Bright stars */}
//       {[0, 1, 2, 3].map((i) => (
//         <div
//           key={`bright-${i}`}
//           className="absolute h-[3px] w-[3px] rounded-full bg-white"
//           style={{
//             left: `${(i * 29 + 11) % 100}%`,
//             top: `${(i * 43 + 17) % 100}%`,
//             boxShadow:
//               "0 0 5px 2px rgba(147,197,253,0.7)",
//           }}
//         />
//       ))}

//       {/* Shooting stars */}
//       {!shouldReduceMotion &&
//         shootingStars.map((star, i) => (
//           <motion.div
//             key={`shooting-${i}`}
//             className="absolute"
//             style={{
//               top: star.top,
//               left: star.left,
//               width: 100,
//               height: 2,
//               rotate: "35deg",
//               transformOrigin: "left center",
//               background:
//                 "linear-gradient(90deg, transparent 0%, rgba(147,197,253,0.2) 35%, rgba(191,219,254,0.95) 100%)",
//               filter: "drop-shadow(0 0 4px rgba(96,165,250,0.7))",
//             }}
//             initial={{ x: 0, y: 0, opacity: 0 }}
//             animate={{
//               x: [0, star.x],
//               y: [0, star.y],
//               opacity: [0, 1, 0],
//             }}
//             transition={{
//               duration: 2.5,
//               delay: star.delay,
//               repeat: Infinity,
//               repeatDelay: 18,
//               ease: "easeOut",
//             }}
//           />
//         ))}

//       {/* Bottom fade */}
//       <div
//         className="absolute inset-x-0 bottom-0 h-64
//         bg-gradient-to-t from-white to-transparent
//         dark:from-slate-950"
//       />
//     </div>
//   );
// }
