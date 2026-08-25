import React from "react";

export default function CssRobot() {
  return (
    <div className="relative w-full h-72 flex items-center justify-center bg-slate-950 rounded-2xl overflow-hidden">
      <style>{`
        .robot-wrapper { position: relative; width: 300px; h-60; }
        .robot-wrapper .face {
          position: absolute; top: 0; left: 0; right: 0; bottom: 150px;
          margin: auto; height: 40px; width: 65px; background: black;
          border-top-left-radius: 20px; border-top-right-radius: 20px;
          border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;
        }
        .robot-wrapper .head {
          position: absolute; top: 0; left: 0; right: 0; z-index: 0;
          bottom: 150px; margin: auto; height: 75px; width: 100px;
          background: white; border-top-left-radius: 60px; border-top-right-radius: 60px;
          border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;
        }
        .robot-wrapper .body {
          position: absolute; top: 60px; left: 0; right: 0; bottom: 0px;
          margin: auto; height: 120px; width: 115px; background: white;
          border-top-left-radius: 20px; border-top-right-radius: 20px;
          border-bottom-left-radius: 100px; border-bottom-right-radius: 100px;
        }
        .robot-wrapper .left {
          position: absolute; top: 0; left: 0; right: 230px; bottom: 25px;
          margin: auto; height: 30px; width: 100px; background: white;
          border-top-left-radius: 10px; border-top-right-radius: 10px;
          border-bottom-left-radius: 50px; border-bottom-right-radius: 10px;
          animation: hand 1s linear infinite;
        }
        .robot-wrapper .right {
          position: absolute; top: 50px; left: 165px; right: 0px; bottom: 0px;
          margin: auto; height: 30px; width: 100px; background: white;
          border-top-left-radius: 10px; border-top-right-radius: 10px;
          border-bottom-left-radius: 10px; border-bottom-right-radius: 50px;
          transform: rotateZ(90deg);
        }
        @keyframes hand {
          0% { transform: translateY(-40px) rotateZ(45deg); }
          50% { transform: translateY(0px) rotateZ(0deg); }
          100% { transform: translateY(-40px) rotateZ(45deg); }
        }
        .robot-wrapper .eye1 {
          position: absolute; top: 0; left: 0; right: 25px; bottom: 150px;
          margin: auto; animation: eye11 1.8s linear infinite; height: 10px; width: 15px;
          border-top-left-radius: 50px; border-top-right-radius: 50px;
          border-bottom-left-radius: 20px; border-bottom-right-radius: 20px;
        }
        .robot-wrapper .eye2 {
          position: absolute; top: 0; left: 25px; right: 0; bottom: 150px;
          margin: auto; background: repeating-linear-gradient(rgb(128, 128, 255) 70%, #002966 80%, blue);
          height: 10px; width: 15px; border-top-left-radius: 50px; border-top-right-radius: 50px;
          border-bottom-left-radius: 20px; border-bottom-right-radius: 20px;
        }
        @keyframes eye11 {
          0% { background-color: aqua; }
          50% { background-color: black; }
          100% { background-color: black; }
        }
      `}</style>

      <div className="robot-wrapper">
        <div className="face"></div>
        <div className="head"></div>
        <div className="body"></div>
        <div className="left"></div>
        <div className="right"></div>
        <div className="eye1"></div>
        <div className="eye2"></div>
      </div>
    </div>
  );
}
