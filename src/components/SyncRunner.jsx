// import { useEffect, useRef } from "react";
// import useGameStore from "../store/useGameStore";

// export default function SyncRunner() {
//   const canvasRef = useRef(null);
//   const { collectCoin, endGame, isPlaying, startGame } = useGameStore();

//   useEffect(() => {
//     if (!isPlaying) return;

//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     // Player Setup (Alto style capsule character)
//     let player = {
//       x: 50,
//       y: 200,
//       width: 30,
//       height: 30,
//       velocityY: 0,
//       gravity: 0.6,
//       isJumping: false,
//     };
//     let coinsList = [];
//     let gameLoopId;

//     // Space key eka click kalama gravity velocity eka drop karala jump karanawa
//     const handleKeyPress = (e) => {
//       if (e.code === "Space" && !player.isJumping) {
//         player.velocityY = -12; // Udata adina speed eka
//         player.isJumping = true;
//       }
//     };
//     window.addEventListener("keydown", handleKeyPress);

//     // 🔄 GAME LOOP: Thappara 60 parak background run wena dynamic cycle eka
//     const updateGame = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height); // Screen clear rendering

//       // 1. Player Physics logic (Gravity manipulation)
//       player.velocityY += player.gravity;
//       player.y += player.velocityY;

//       // Floor constraints (Polovata thadin thiyagන්න)
//       if (player.y > canvas.height - player.height - 20) {
//         player.y = canvas.height - player.height - 20;
//         player.velocityY = 0;
//         player.isJumping = false;
//       }

//       // 2. Draw Scenic Background/Floor (Alto minimal hill setup placeholder)
//       ctx.fillStyle = "#64748b"; // Slate hills
//       ctx.fillRect(0, canvas.height - 20, canvas.width, 20);

//       // 3. Draw Player
//       ctx.fillStyle = "#f43f5e"; // Rose character color
//       ctx.fillRect(player.x, player.y, player.width, player.height);

//       gameLoopId = requestAnimationFrame(updateGame);
//     };

//     gameLoopId = requestAnimationFrame(updateGame);

//     return () => {
//       cancelAnimationFrame(gameLoopId);
//       window.removeEventListener("keydown", handleKeyPress);
//     };
//   }, [isPlaying]);

//   return (
//     <div className="flex flex-col items-center justify-center bg-slate-950 p-6 rounded-2xl border border-slate-800">
//       <h2 className="text-xl font-bold text-white mb-4">SyncXel Alto Runner</h2>

//       {!isPlaying ? (
//         <button
//           onClick={startGame}
//           className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-full transition-all duration-200 shadow-lg">
//           Play and Earn Coins 🎮
//         </button>
//       ) : (
//         <canvas
//           ref={canvasRef}
//           width={600}
//           height={300}
//           className="bg-slate-900 border border-slate-700 rounded-xl"
//         />
//       )}
//       <p className="text-xs text-slate-400 mt-2">
//         Press [SPACEBAR] to jump over obstacles.
//       </p>
//     </div>
//   );
// }

import { useEffect, useRef, useState } from "react";

export default function SyncRunner() {
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (!isPlaying || isGameOver) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // --- 🎮 GAME CONSTANTS & STATE ---
    let player = {
      x: 80,
      y: 200,
      radius: 12,
      velocityY: 0,
      gravity: 0.6,
      jumpForce: -11,
      isJumping: false,
      rotation: 0,
    };

    let obstacles = [];
    let coins = [];
    let gameLoopId;
    let obstacleTimer = 0;
    let coinTimer = 0;
    let currentScore = 0;

    // --- ⌨️ KEYBOARD INPUTS ---
    const handleKeyPress = (e) => {
      if (
        (e.code === "Space" || e.code === "ArrowUp" || e.code === "KeyW") &&
        !player.isJumping
      ) {
        player.velocityY = player.jumpForce;
        player.isJumping = true;
      }
    };

    // Mobile Touch / Mouse Click Support
    const handleScreenTouch = () => {
      if (!player.isJumping) {
        player.velocityY = player.jumpForce;
        player.isJumping = true;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    canvas.addEventListener("touchstart", handleScreenTouch);
    canvas.addEventListener("mousedown", handleScreenTouch);

    // --- 🔄 CORE GAME LOOP (Run at 60 FPS) ---
    const updateGame = () => {
      // 1. Clear Screen
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // --- BACKGROUND ELEMENTS (Alto style minimal mountains) ---
      ctx.fillStyle = "#1e293b";
      ctx.beginPath();
      ctx.moveTo(0, 300);
      ctx.lineTo(150, 180);
      ctx.lineTo(400, 300);
      ctx.fill();

      ctx.fillStyle = "#334155";
      ctx.beginPath();
      ctx.moveTo(250, 300);
      ctx.lineTo(450, 150);
      ctx.lineTo(700, 300);
      ctx.fill();

      // --- 🏂 PLAYER PHYSICS & LOGIC ---
      player.velocityY += player.gravity;
      player.y += player.velocityY;

      // Floor Constraint (ගොඩබිම සීමාව)
      const floorY = canvas.height - 40;
      if (player.y > floorY - player.radius) {
        player.y = floorY - player.radius;
        player.velocityY = 0;
        player.isJumping = false;
        player.rotation = 0; // Reset rotation on land
      }

      // Air rotation effect (Alto style flip placeholder)
      if (player.isJumping) {
        player.rotation += 0.05;
      }

      // Draw Floor Line
      ctx.strokeStyle = "#475569";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(0, floorY);
      ctx.lineTo(canvas.width, floorY);
      ctx.stroke();

      // Draw Player (Minimalist snowboarder shape)
      ctx.save();
      ctx.translate(player.x, player.y);
      ctx.rotate(player.rotation);
      ctx.fillStyle = "#f43f5e"; // Bright Alto pink/rose color
      ctx.beginPath();
      ctx.arc(0, 0, player.radius, 0, Math.PI * 2);
      ctx.fill();
      // Draw Snowboard board line
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(-18, player.radius - 2);
      ctx.lineTo(18, player.radius - 2);
      ctx.stroke();
      ctx.restore();

      // --- 🧱 GENERATE & SPAWN OBSTACLES (බාධක) ---
      obstacleTimer++;
      if (obstacleTimer > 100 + Math.random() * 50) {
        obstacles.push({
          x: canvas.width,
          y: floorY - 25,
          width: 15 + Math.random() * 15,
          height: 25,
          speed: 5,
        });
        obstacleTimer = 0;
      }

      // Move & Draw Obstacles
      for (let i = obstacles.length - 1; i >= 0; i--) {
        let obs = obstacles[i];
        obs.x -= obs.speed;

        ctx.fillStyle = "#b91c1c"; // Rock obstacle color
        ctx.beginPath();
        ctx.moveTo(obs.x, obs.y + obs.height);
        ctx.lineTo(obs.x + obs.width / 2, obs.y);
        ctx.lineTo(obs.x + obs.width, obs.y + obs.height);
        ctx.fill();
        // 💥 Collision Detection (Rock Hit)
        if (
          player.x + player.radius > obs.x &&
          player.x - player.radius < obs.x + obs.width &&
          player.y + player.radius > obs.y
        ) {
          setIsGameOver(true);
          cancelAnimationFrame(gameLoopId);
          return;
        }

        // Remove offscreen rocks
        if (obs.x + obs.width < 0) {
          obstacles.splice(i, 1);
        }
      }

      // --- 🪙 GENERATE & SPAWN COINS ---
      coinTimer++;
      if (coinTimer > 60 + Math.random() * 40) {
        coins.push({
          x: canvas.width,
          y: floorY - 50 - Math.random() * 60,
          radius: 7,
          speed: 4,
        });
        coinTimer = 0;
      }

      // Move & Draw Coins
      for (let i = coins.length - 1; i >= 0; i--) {
        let coin = coins[i];
        coin.x -= coin.speed;

        // Draw Shiny Glowing Gold Coin
        ctx.fillStyle = "#fbbf24";
        ctx.shadowColor = "#fbbf24";
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(coin.x, coin.y, coin.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow

        // 💥 Collision Detection (Coin Collection)
        let distX = player.x - coin.x;
        let distY = player.y - coin.y;
        let distance = Math.sqrt(distX * distX + distY * distY);

        if (distance < player.radius + coin.radius) {
          currentScore += 10;
          setScore(currentScore);
          coins.splice(i, 1);
          continue;
        }

        // Remove offscreen coins
        if (coin.x + coin.radius < 0) {
          coins.splice(i, 1);
        }
      }

      gameLoopId = requestAnimationFrame(updateGame);
    };

    gameLoopId = requestAnimationFrame(updateGame);

    // Clean up connections on exit
    return () => {
      cancelAnimationFrame(gameLoopId);
      window.removeEventListener("keydown", handleKeyPress);
      if (canvas) {
        canvas.removeEventListener("touchstart", handleScreenTouch);
        canvas.removeEventListener("mousedown", handleScreenTouch);
      }
    };
  }, [isPlaying, isGameOver]);

  const handleStartGame = () => {
    setIsPlaying(true);
    setIsGameOver(false);
    setScore(0);
  };

  const handleRestart = () => {
    if (score > highScore) setHighScore(score);
    setIsGameOver(false);
    setScore(0);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-slate-950 p-6 rounded-2xl border border-slate-800 max-w-2xl mx-auto shadow-2xl">
      <div className="flex justify-between w-full mb-4 px-2">
        <h2 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">
          SyncXel Alto Engine 🏂
        </h2>
        <div className="flex gap-4 font-mono font-bold text-sm text-slate-300">
          <div>
            HI: <span className="text-rose-400">{highScore}</span>
          </div>
          <div>
            SCORE: <span className="text-amber-400">{score}</span>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-inner">
        <canvas
          ref={canvasRef}
          width={600}
          height={300}
          className="block w-full max-w-full"
          style={{ touchAction: "none" }}
        />

        {/* --- UI SCREENS (START / GAME OVER) ON TOP OF CANVAS --- */}
        {!isPlaying && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-sm p-4 text-center">
            <p className="text-slate-400 text-sm max-w-xs mb-4">
              A pure Canvas visual test. Play, collect score points, and explore
              micro-animations!
            </p>
            <button
              onClick={handleStartGame}
              className="bg-gradient-to-r from-amber-500 to-rose-500 text-slate-950 font-black px-6 py-3 rounded-full hover:scale-105 transition-transform duration-200 active:scale-95 shadow-lg shadow-amber-500/20">
              Start Game Arena 🎮
            </button>
          </div>
        )}

        {isGameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm p-4 text-center">
            <h3 className="text-2xl font-black text-rose-500 mb-1 animate-bounce">
              GAME OVER
            </h3>
            <p className="text-slate-300 font-mono text-sm mb-4">
              You scored {score} points!
            </p>
            <button
              onClick={handleRestart}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-2 rounded-full transition-all duration-150 active:scale-95">
              Play Again 🔄
            </button>
          </div>
        )}
      </div>

      <p className="text-[11px] text-slate-500 mt-3 font-mono">
        Controls: Press [SPACEBAR] or click/tap on the canvas boundary to jump.
      </p>
    </div>
  );
}
