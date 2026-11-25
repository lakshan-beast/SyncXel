// import { motion, useReducedMotion } from "framer-motion";

// const ships = [
//   {
//     id: 1,
//     size: 1,
//     duration: 32,
//     delay: 0,
//     top: "72%",
//     opacity: 0.9,
//   },
// //   {
// //     id: 2,
// //     size: 0.55,
// //     duration: 45,
// //     delay: 32,
// //     top: "-48%",
// //     opacity: 0.35,
// //   },
// //   {
// //     id: 3,
// //     size: 0.4,
// //     duration: 52,
// //     delay: 24,
// //     top: "72%",
// //     opacity: 0.25,
// //   },
// ];

// function Ship({ scale = 1 }) {
//   return (
//     <svg
//       width="90"
//       height="55"
//       viewBox="0 0 90 55"
//       fill="none"
//       style={{ overflow: "visible" }}>
//       {/* Engine glow */}
//       <ellipse
//         cx="14"
//         cy="27"
//         rx="15"
//         ry="7"
//         fill="#60A5FA"
//         opacity="0.18"
//         filter="blur(5px)"
//       />

//       {/* Engine trail */}
//       <path
//         d="M8 27 L-18 27"
//         stroke="#60A5FA"
//         strokeWidth="2"
//         strokeLinecap="round"
//         opacity="0.7"
//       />

//       <path
//         d="M8 27 L-28 27"
//         stroke="#93C5FD"
//         strokeWidth="1"
//         strokeLinecap="round"
//         opacity="0.3"
//       />

//       {/* Main spacecraft body */}
//       <path
//         d="M8 27 C22 24 42 9 66 15 L83 27 L66 39 C42 45 22 30 8 27Z"
//         fill="#CBD5E1"
//         stroke="#93C5FD"
//         strokeWidth="1"
//       />

//       {/* Upper wing */}
//       <path
//         d="M30 22 L43 7 L57 15"
//         fill="#64748B"
//         stroke="#94A3B8"
//         strokeWidth="1"
//       />

//       {/* Lower wing */}
//       <path
//         d="M30 32 L43 47 L57 39"
//         fill="#64748B"
//         stroke="#94A3B8"
//         strokeWidth="1"
//       />

//       {/* Cockpit */}
//       <path
//         d="M59 20 Q70 21 76 27 Q70 33 59 34 Q54 27 59 20Z"
//         fill="#60A5FA"
//         stroke="#BFDBFE"
//         strokeWidth="1"
//       />

//       {/* Cockpit reflection */}
//       <path
//         d="M62 23 Q68 23 72 27"
//         stroke="white"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         opacity="0.8"
//       />

//       {/* Center detail */}
//       <path d="M27 27 H51" stroke="#475569" strokeWidth="1" opacity="0.7" />
//     </svg>
//   );
// }

// export default function Spaceship() {
//   const shouldReduceMotion = useReducedMotion();

//   return (
//     <div className="pointer-events-none absolute inset-0 overflow-hidden">
//       {ships.map((ship) => (
//         <motion.div
//           key={ship.id}
//           className="absolute left-[-20px]"
//           style={{
//             top: ship.top,
//             opacity: ship.opacity,
//             scale: ship.size,
//             transformOrigin: "center",
//           }}
//           animate={
//             shouldReduceMotion
//               ? { x: "95vw" }
//               : {
//                   x: ["0vw", "135vw"],
//                   y: [100, 75, 95, 30, 0],
//                 }
//           }
//           transition={{
//             duration: ship.duration,
//             delay: ship.delay,
//             repeat: Infinity,
//             ease: "linear",
//           }}>
//           <motion.div
//             animate={shouldReduceMotion ? {} : { y: [0, -3, 0, 3, 0] }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}>
//             <Ship />
//           </motion.div>
//         </motion.div>
//       ))}
//     </div>
//   );
// }

// import { motion, useReducedMotion } from "framer-motion";

// function Ship({ scale = 1 }) {
//   return (
//     <svg
//       width="90"
//       height="55"
//       viewBox="0 0 90 55"
//       fill="none"
//       style={{ overflow: "visible" }}>
//       {/* Engine glow */}
//       <ellipse
//         cx="14"
//         cy="27"
//         rx="15"
//         ry="7"
//         fill="#60A5FA"
//         opacity="0.18"
//         filter="blur(5px)"
//       />

//       {/* Engine trail */}
//       <path
//         d="M8 27 L-18 27"
//         stroke="#60A5FA"
//         strokeWidth="2"
//         strokeLinecap="round"
//         opacity="0.7"
//       />

//       <path
//         d="M8 27 L-28 27"
//         stroke="#93C5FD"
//         strokeWidth="1"
//         strokeLinecap="round"
//         opacity="0.3"
//       />

//       {/* Main spacecraft body */}
//       <path
//         d="M8 27 C22 24 42 9 66 15 L83 27 L66 39 C42 45 22 30 8 27Z"
//         fill="#CBD5E1"
//         stroke="#93C5FD"
//         strokeWidth="1"
//       />

//       {/* Upper wing */}
//       <path
//         d="M30 22 L43 7 L57 15"
//         fill="#64748B"
//         stroke="#94A3B8"
//         strokeWidth="1"
//       />

//       {/* Lower wing */}
//       <path
//         d="M30 32 L43 47 L57 39"
//         fill="#64748B"
//         stroke="#94A3B8"
//         strokeWidth="1"
//       />

//       {/* Cockpit */}
//       <path
//         d="M59 20 Q70 21 76 27 Q70 33 59 34 Q54 27 59 20Z"
//         fill="#60A5FA"
//         stroke="#BFDBFE"
//         strokeWidth="1"
//       />

//       {/* Cockpit reflection */}
//       <path
//         d="M62 23 Q68 23 72 27"
//         stroke="white"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         opacity="0.8"
//       />

//       {/* Center detail */}
//       <path d="M27 27 H51" stroke="#475569" strokeWidth="1" opacity="0.7" />
//     </svg>
//   );
// }

// const ships = [
//   {
//     id: 1,
//     size: 0.85,
//     duration: 16,
//     delay: 0,
//     opacity: 0.9,
//   },
//   {
//     id: 2,
//     size: 0.45,
//     duration: 22,
//     delay: 7,
//     opacity: 0.35,
//   },
// ];

// export default function Spaceship() {
//   const shouldReduceMotion = useReducedMotion();

//   return (
//     <div className="pointer-events-none absolute inset-0 overflow-hidden">
//       {ships.map((ship) => (
//         <motion.div
//           key={ship.id}
//           className="absolute left-0 top-0"
//           style={{
//             opacity: ship.opacity,
//             scale: ship.size,
//           }}
//           initial={false}
//           animate={
//             shouldReduceMotion
//               ? { x: "50vw", y: "50vh" }
//               : {
//                   x: [
//                     "-100px",
//                     "5vw",
//                     "18vw",
//                     "35vw",
//                     "48vw",
//                     "58vw",
//                     "72vw",
//                     "105vw",
//                   ],
//                   y: [
//                     "105vh",
//                     "82vh",
//                     "62vh",
//                     "43vh",
//                     "29vh",
//                     "25vh",
//                     "18vh",
//                     "-100px",
//                   ],
//                   rotate: [-35, -28, -18, -5, 15, 35, 50, 65],
//                 }
//           }
//           transition={{
//             duration: ship.duration,
//             delay: ship.delay,
//             repeat: Infinity,
//             repeatDelay: 3,
//             ease: "easeInOut",
//             times: [0, 0.13, 0.26, 0.4, 0.54, 0.68, 0.83, 1],
//           }}>
//           <motion.div
//             animate={shouldReduceMotion ? {} : { y: [0, -3, 0, 3, 0] }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}>
//             <Ship />
//           </motion.div>
//         </motion.div>
//       ))}
//     </div>
//   );
// }

import { motion, useReducedMotion } from "framer-motion";

export default function Spaceship() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden hidden sm:block"
      aria-hidden="true">
      <motion.div
        className="absolute left-0 top-0 select-none"
        initial={false}
        style={{
          fontSize: "clamp(28px, 3vw, 44px)",
          lineHeight: 1,
          opacity: 0.85,
          filter: "drop-shadow(0 0 10px rgba(96,165,250,0.5))",
        }}
        animate={
          shouldReduceMotion
            ? { x: "50vw", y: "50vh" }
            : {
                x: [
                  "-10vw",
                  "5vw",
                  "18vw",
                  "35vw",
                  "48vw",
                  "58vw",
                  "72vw",
                  "110vw",
                ],
                y: [
                  "105vh",
                  "82vh",
                  "62vh",
                  "43vh",
                  "29vh",
                  "25vh",
                  "18vh",
                  "-10vh",
                ],
                rotate: [-35, -28, -18, -5, 15, 35, 50, 65],
              }
        }
        transition={{
          duration: 22,
          delay: 1,
          repeat: Infinity,
          repeatDelay: 5,
          ease: "linear",
          times: [0, 0.13, 0.26, 0.4, 0.54, 0.68, 0.83, 1],
        }}>
        🚀
      </motion.div>
    </div>
  );
}
