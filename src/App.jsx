import React from "react";

import Navbar from "./components/NavBar";

export default function App() {
  return (
    <div className="min-h-screen bg-syncxel-dark text-white selection:bg-syncxel-cyan selection:text-syncxel-dark">
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section Placeholder */}
      <main className="pt-32 px-4 text-center">
        <h1 className="text-4xl font-bold">
          SyncXel Navbar Loaded Successfully! 🔥
        </h1>
      </main>
    </div>
  );
}
