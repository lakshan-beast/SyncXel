import React from "react";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-syncxel-dark text-white selection:bg-syncxel-cyan selection:text-syncxel-dark">
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section Placeholder */}
      <main className="pt-32 px-4 text-center my-auto">
        <h1 className="text-4xl font-bold">SyncXel Web Solutions 🔥</h1>
        <p className="text-syncxel-textMuted mt-2">
          Home section under construction...
        </p>
      </main>

      <Footer />
    </div>
  );
}
