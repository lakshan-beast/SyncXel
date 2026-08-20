import React from "react";
import { FaAngleDown } from "react-icons/fa6";

import NeonButton from "../components/library/NeonButton";
import neonButtonCode from "../components/library/NeonButton.jsx?raw";

import photographerImg from "../assets/photograpy-website.png";

import sideNavHtml from "../components/library/SideNav.html?raw";
import typingTextHtml from "../components/library/TypingText.html?raw";

import GlassLoginForm from "../components/library/GlassLoginForm";

const paidCode = (
  <div className="space-y-2 text-center flex flex-col items-center justify-center">
    <h4 className="text-white text-xs font-bold font-heading">
      Premium Source Code
    </h4>
    <p className="text-[11px] text-syncxel-text-muted font-baloo text-wrap leading-relaxed">
      This is a full template. Click{" "}
      <span className="text-amber-400 font-semibold">"Get Template"</span> below
      to get instant code access via WhatsApp.
    </p>
    <FaAngleDown className="animate-[bounce_2s_infinite] text-xl text-syncxel-cyan" />
  </div>
);

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
    views: "140",
    downloads: "12+",
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
    views: "83",
    downloads: "5+",
  },

  // typingTextHtml
  {
    id: "typing-texts",
    title: "Typing Texts",
    category: "UI",
    techStack: "HTML + CSS",
    isPaid: false,
    component: (
      <div className="relative w-full h-65 rounded-lg overflow-hidden bg-syncxel-dark/50 border border-syncxel-border/30 flex items-center justify-center">
        <div dangerouslySetInnerHTML={{ __html: typingTextHtml }} />
      </div>
    ),
    code: typingTextHtml,
    views: "90",
    downloads: "25+",
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
    views: "15",
    sales: "01 Sold",
    code: paidCode,
  },

  {
    id: "glass-auth-card",
    title: "Glassmorphism Auth Card",
    category: "Forms",
    isPaid: true,
    price: "$5 / LKR 1,500",
    views: "200",
    sales: "6 Sold",
    component: <GlassLoginForm />,
    code: paidCode,
  },
];
