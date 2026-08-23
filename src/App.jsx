import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import HeroSection from "./components/Hero";
import TrustBar from "./components/TrustBar";
import TeckStack from "./components/TeckStack";
import ServicesSection from "./components/Services";
import TeamSection from "./components/TeamSection";
import FaqSection from "./components/FAQ";
import FeaturesSection from "./components/WhyChoose";
import Components from "./components/Components";

import AllComponents from "./components/ComponentSections";
import Legal from "./pages/Legel";
import ScrollToTop from "./components/ScrollTop";

// export default function App() {
//   return (
//     <div className="min-h-screen bg-syncxel-dark text-white selection:bg-syncxel-cyan selection:text-syncxel-dark ">
//       <Navbar />

//       {/* Hero Section Placeholder */}
//       <main className="pt-24">
//         <HeroSection />
//         <TeckStack />

//         <Components />

//         {/* Features / Benefits Grid */}
//         <FeaturesSection />

//         {/* proof */}
//         <TeamSection />

//         {/* Client Services & Hire Us */}
//         <ServicesSection />

//         <FaqSection />
//       </main>

//       {/* <AllComponents /> */}

//       <Footer />
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-syncxel-dark text-white selection:bg-syncxel-cyan selection:text-syncxel-dark flex flex-col justify-between">
//         {/* 1. ANIMATED BACKGROUND GRID PATTERN */}
//         <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:24px_24px] animate-pulse" />

//         {/* 2. PULSING GLOW ORBS (Standardized Arbitrary Classes) */}
//         <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] bg-cyan-500/55 blur-[140px] pointer-events-none rounded-full animate-pulse" />
//         <div className="absolute top-1/3 right-10 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-blue-600/15 blur-[150px] pointer-events-none rounded-full" />

//         {/* Navbar (හැම Page එකේම පෙනෙනවා) */}
//         <Navbar />

//         {/* Dynamic Page Routing */}
//         <main className="pt-24 grow">
//           <Routes>
//             {/* 1. HOME PAGE ROUTE (/) */}
//             <Route
//               path="/"
//               element={
//                 <>
//                   {/* 1. ANIMATED BACKGROUND GRID PATTERN */}
//                   <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:24px_24px] animate-pulse" />

//                   {/* 2. PULSING GLOW ORBS (Standardized Arbitrary Classes) */}
//                   <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] bg-cyan-500/55 blur-[140px] pointer-events-none rounded-full animate-pulse" />
//                   <div className="absolute top-1/3 right-10 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-blue-600/15 blur-[150px] pointer-events-none rounded-full" />

//                   <HeroSection />
//                   <TeckStack />
//                   <TrustBar />
//                   <Components />
//                   <FeaturesSection />
//                   <TeamSection />
//                   <ServicesSection />
//                   <FaqSection />
//                   <Footer />
//                 </>
//               }
//             />

//             {/* 2. ALL COMPONENTS PAGE ROUTE (/components) */}
//             <Route path="/components" element={<AllComponents />} />

//             <Route path="/legal" element={<Legal />} />
//           </Routes>
//         </main>

//         <ScrollToTop />
//       </div>
//     </Router>
//   );
// }

export default function App() {
  return (
    <Router>
      {/* Container එක relative සහ overflow-hidden තියෙන්න ඕන */}
      <div className="relative min-h-screen bg-syncxel-dark text-white selection:bg-syncxel-cyan selection:text-syncxel-dark flex flex-col justify-between overflow-x-hidden">
        {/* 🌟 FIXED BACKGROUND (මුළු Page එක පුරාම Scroll වෙද්දීත් පෙනෙනවා) */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* 1. Grid Pattern */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:24px_24px] animate-pulse" />

          {/* 2. Glow Orbs (මුළු Page එකටම Balance වෙන්න Orbs 3ක් දාලා තියෙනවා) */}
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] h-[400px] bg-cyan-500/20 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute top-[40%] right-[-10%] w-[300px] sm:w-[500px] h-[500px] bg-blue-600/15 blur-[160px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[350px] sm:w-[500px] h-[400px] bg-cyan-600/15 blur-[160px] rounded-full" />
        </div>

        {/* 3. Main Content Wrapper (Content එක Glow එකට උඩින් පෙනෙන්න z-10 දාලා තියෙනවා) */}
        <div className="relative z-10 flex flex-col min-h-screen justify-between">
          <Navbar />

          <main className="pt-24 grow">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <HeroSection />
                    <TeckStack />
                    <TrustBar />
                    <Components />
                    <FeaturesSection />
                    <TeamSection />
                    <ServicesSection />
                    <FaqSection />
                    <Footer />
                  </>
                }
              />
              <Route path="/components" element={<AllComponents />} />
              <Route path="/legal" element={<Legal />} />
            </Routes>
          </main>

          <ScrollToTop />
        </div>
      </div>
    </Router>
  );
}
