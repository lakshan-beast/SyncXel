import React from "react";

import NeonButton from "../components/library/NeonButton";
import neonButtonCode from "../components/library/NeonButton.jsx?raw";

import photographerImg from "../assets/photograpy-website.png";

import sideNavHtml from "../components/library/SideNav.html?raw";

export const componentsData = [
  // Neon-Button
  {
    id: "neon-button",
    title: "Neon Gradient Button",
    category: "Buttons",
    isPaid: false,
    description:
      "Modern futuristic glowing button with smooth hover glow effects.",
    component: <NeonButton />,
    code: neonButtonCode,
  },

  // PAID / PREMIUM TEMPLATE
  {
    id: "photograper-template",
    title: "Agency Landing Page Template",
    category: "Templates",
    isPaid: true,
    price: "$9 / LKR 2,500",
    badge: "✦ Premium Template",
    demoUrl: "https://photography-website-puce-omega.vercel.app/",
    whatsappUrl: "https://wa.me/94707046840?text=I_want_to_buy_Agency_Template",
    component: <img src={photographerImg} alt="Photographer Template" />,
  },

  {
    id: "side-navigation-menu",
    title: "Animated Side Navigation",
    category: "Navbars",
    techStack: "HTML + CSS",
    isPaid: false,
    component: (
      <div className="relative w-full h-65 rounded-lg overflow-hidden bg-syncxel-dark/50 border border-syncxel-border/30">
        <div dangerouslySetInnerHTML={{ __html: sideNavHtml }} />
      </div>
    ),
    code: sideNavHtml,
  },
];
