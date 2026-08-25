import React from "react";

export default function GlassButton() {
  return (
    <>
      {/* Custom CSS for the reflection and glow effect */}
      <style>{`
        .effect-button {
          outline: none;
          height: 60px;
          width: 160px;
          border-radius: 50px;
          border: 3px solid white;
          background: none;
          letter-spacing: 4px;
          font-weight: bolder;
          color: white;
          padding: 14px;
          font-size: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 5px;
          display: inline-block;
        }
        .effect-button:hover {
          box-shadow: 0px 0px 55px white, 0px 0px 55px white inset;
          -webkit-box-reflect: below 0px linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.25));
        }
      `}</style>

      {/* Button Element */}
      <button type="button" className="effect-button">
        Button
      </button>
    </>
  );
}
