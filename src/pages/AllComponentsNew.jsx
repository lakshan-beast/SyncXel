import React, { useState } from "react";
import HubHeader from "../components/ComHubHeader";
import HubTabs from "../components/ComHubTabs";

import FreeComponentsTab from "../components/FreeComponentsTab";
import TemplateComponentsTab from "../components/TemplateComponentsTab";
import UiPacksTab from "../components/UiPacks";

import { freeComponentsData } from "../data/free/freeIndex";
import { uiPacksData } from "../data/uiPacks";
import { premiumKits } from "../data/premiumKitData";

export default function ComponentsHubPage() {
  const [mainTab, setMainTab] = useState("free");

  const [freeCategory, setFreeCategory] = useState("Buttons & Actions");
  const [packCategory, setPackCategory] = useState("All");
  const [templateCategory, setTemplateCategory] = useState("All");

  const [cardTabs, setCardTabs] = useState({});
  const [copiedId, setCopiedId] = useState(null);

  // --- Categories Lists for Each Tab ---
  const freeCategories = [
    "Buttons & Actions",
    "Cards & Containers",
    "Loaders & Animations",
    "Modals, Toasts & Notifications",
    "Inputs & Search Bars",
    "Badges & Status Indicators",
    "Avatars & Profiles",
    "Checkboxes & Radios",
    "Success & Toasts",
    "Back to Top & FAB",
    "Toggles & Switches",
  ];

  // UI Packs 
  const packCategories = [
    "All",
    "Navbars",
    "Hero Sections",
    "Authentication",
    "Features",
    "Pricing & Tables",
    "Testimonials",
    "FAQ",
    "Footers",
  ];

  // Full Templates / Dashboards 
  const templateCategories = [
    "All",
    "Full Template Suite",
    "SaaS Dashboards",
    "Landing Pages",
  ];

  // --- Filtering Data based on active tab and category ---
  const filteredFreeComponents = freeComponentsData.filter(
    (item) => item.category === freeCategory,
  );

  const filteredUiPacks = uiPacksData.filter(
    (item) => packCategory === "All" || item.category === packCategory,
  );

  const filteredTemplates = premiumKits.filter(
    (item) => templateCategory === "All" || item.category === templateCategory,
  );

  const toggleCardTab = (id, tab) => {
    setCardTabs((prev) => ({ ...prev, [id]: tab }));
  };

  const handleCopy = (id, code) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-20 lg:mt-12">
      {/* Main Header */}
      <HubHeader />

      {/* Main Tabs Switcher */}
      <span className="font-mono text-slate-500/50 mb-1 block text-xs border-t-2 border-slate-200 pt-5">
        // primary_ecosystem_segment_selector
      </span>
      <HubTabs mainTab={mainTab} setMainTab={setMainTab} />

      {/* --- Tab 1: Free Components --- */}
      {mainTab === "free" && (
        <FreeComponentsTab
          categories={freeCategories}
          activeCategory={freeCategory}
          setActiveCategory={setFreeCategory}
          filteredFreeComponents={filteredFreeComponents}
          cardTabs={cardTabs}
          toggleCardTab={toggleCardTab}
          copiedId={copiedId}
          handleCopy={handleCopy}
        />
      )}

      {/* --- Tab 2: UI Packs --- */}
      {mainTab === "packs" && (
        <UiPacksTab
          categories={packCategories}
          activeCategory={packCategory}
          setActiveCategory={setPackCategory}
          componentsData={filteredUiPacks}
          cardTabs={cardTabs}
          toggleCardTab={toggleCardTab}
          copiedId={copiedId}
          handleCopy={handleCopy}
        />
      )}

      {/* --- Tab 3: Full Templates --- */}
      {mainTab === "templates" && (
        <TemplateComponentsTab
          categories={templateCategories}
          activeCategory={templateCategory}
          setActiveCategory={setTemplateCategory}
          componentsData={filteredTemplates}
          cardTabs={cardTabs}
          toggleCardTab={toggleCardTab}
          copiedId={copiedId}
          handleCopy={handleCopy}
        />
      )}
    </div>
  );
}
