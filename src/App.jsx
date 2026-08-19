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
import FeaturesSection from "./components/Features";
import Components from "./components/Components";

import AllComponents from "./components/ComponentSections";
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

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-syncxel-dark text-white selection:bg-syncxel-cyan selection:text-syncxel-dark flex flex-col justify-between">
        {/* Navbar (හැම Page එකේම පෙනෙනවා) */}
        <Navbar />

        {/* Dynamic Page Routing */}
        <main className="pt-24 grow">
          <Routes>
            {/* 1. HOME PAGE ROUTE (/) */}
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

            {/* 2. ALL COMPONENTS PAGE ROUTE (/components) */}
            <Route path="/components" element={<AllComponents />} />
          </Routes>
        </main>

        <ScrollToTop />
      </div>
    </Router>
  );
}
