// import React from "react";

// export default function GlassButton() {
//   return (
//     <>
//       {/* Custom CSS for the reflection and glow effect */}
//       <style>{`
//         .effect-button {
//           outline: none;
//           height: 60px;
//           width: 160px;
//           border-radius: 50px;
//           border: 3px solid white;
//           background: none;
//           letter-spacing: 4px;
//           font-weight: bolder;
//           color: white;
//           padding: 14px;
//           font-size: 20px;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           margin: 5px;
//           display: inline-block;
//         }
//         .effect-button:hover {
//           box-shadow: 0px 0px 55px white, 0px 0px 55px white inset;
//           -webkit-box-reflect: below 0px linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.25));
//         }
//       `}</style>

//       {/* Button Element */}
//       <button type="button" className="effect-button">
//         Button
//       </button>
//     </>
//   );
// }


import React from "react";

// 2. Cyber Glass Reflection Button
export default function GlassButton() {
  return (
    <>
      <style>{`
        .effect-button {
          outline: none;
          height: 42px;
          width: 140px;
          border-radius: 12px;
          border: 2px solid rgba(34, 211, 238, 0.4);
          background: rgba(15, 23, 42, 0.8);
          letter-spacing: 1px;
          font-weight: 600;
          color: #22d3ee;
          padding: 8px;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .effect-button:hover {
          border-color: #22d3ee;
          box-shadow: 0px 0px 25px rgba(34, 211, 238, 0.6), inset 0px 0px 15px rgba(34, 211, 238, 0.4);
          -webkit-box-reflect: below 2px linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.3));
        }
      `}</style>

      <button type="button" className="effect-button">
        Cyber Glass
      </button>
    </>
  );
}