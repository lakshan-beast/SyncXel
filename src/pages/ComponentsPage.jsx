// import React, { useMemo, useState } from "react";

// import HubHeader from "../components/pages/components/ComponentsHubHeader";
// import FreeComponentsTab from "../components/pages/components/FreeComponentTab";

// import { freeComponentsData } from "../data/free/freeIndex";

// export default function ComponentsPage() {
//   const [activeCategory, setActiveCategory] = useState("Buttons");
//   const [cardTabs, setCardTabs] = useState({});
//   const [copiedId, setCopiedId] = useState(null);

//   // Get unique categories
//   const categories = useMemo(() => {
//     const uniqueCategories = [
//       ...new Set(freeComponentsData.map((item) => item.category)),
//     ];

//     return ["All", ...uniqueCategories];
//   }, []);

//   // Filter components by category
//   const filteredFreeComponents = useMemo(() => {
//     if (activeCategory === "All") {
//       return freeComponentsData;
//     }

//     return freeComponentsData.filter(
//       (item) => item.category === activeCategory,
//     );
//   }, [activeCategory]);

//   // Switch between Preview and Code tabs
//   const toggleCardTab = (id, tab) => {
//     setCardTabs((prev) => ({
//       ...prev,
//       [id]: tab,
//     }));
//   };

//   // Copy component code
//   const handleCopy = async (id, code) => {
//     try {
//       await navigator.clipboard.writeText(code);
//       setCopiedId(id);

//       setTimeout(() => {
//         setCopiedId((current) => (current === id ? null : current), 2000);
//       }, 2000);
//     } catch (error) {
//       console.error("Failed to copy component code:", error);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
//       <HubHeader />

//       <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
//         <FreeComponentsTab
//           categories={categories}
//           activeCategory={activeCategory}
//           setActiveCategory={setActiveCategory}
//           filteredFreeComponents={filteredFreeComponents}
//           cardTabs={cardTabs}
//           toggleCardTab={toggleCardTab}
//           copiedId={copiedId}
//           handleCopy={handleCopy}
//         />
//       </section>
//     </main>
//   );
// }

// import React, { useMemo, useState } from "react";

// import HubHeader from "../components/pages/components/ComponentsHeader";
// import FreeComponentsTab from "../components/pages/components/FreeComponentTab";

// import { freeCategories, loadFreeComponents } from "../data/free/freeIndex";

// const ITEMS_PER_PAGE = 10;

// export default function ComponentsPage() {
//   const [activeCategory, setActiveCategory] = useState(freeCategories[0] || "");

//   const [retryKey, setRetryKey] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [cardTabs, setCardTabs] = useState({});
//   const [copiedId, setCopiedId] = useState(null);

//   // Get available categories. No "All" category.
//   // const categories = useMemo(() => {
//   //   return [
//   //     ...new Set(
//   //       freeComponentsData.map((item) => item.category).filter(Boolean),
//   //     ),
//   //   ];
//   // }, []);

//   // Filter components by selected category.
//   const filteredComponents = useMemo(() => {
//     return freeComponentsData.filter(
//       (item) => item.category === activeCategory,
//     );
//   }, [activeCategory, retryKey]);

//   // Pagination calculations.
//   const totalPages = Math.ceil(filteredComponents.length / ITEMS_PER_PAGE);

//   const paginatedComponents = useMemo(() => {
//     const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

//     return filteredComponents.slice(startIndex, startIndex + ITEMS_PER_PAGE);
//   }, [filteredComponents, currentPage]);

//   // Change category and reset pagination.
//   const handleCategoryChange = (category) => {
//     setActiveCategory(category);
//     setCurrentPage(1);
//   };

//   // Change Preview / Code tab for a component.
//   const toggleCardTab = (id, tab) => {
//     setCardTabs((prev) => ({
//       ...prev,
//       [id]: tab,
//     }));
//   };

//   // Copy component code.
//   const handleCopy = async (id, code) => {
//     try {
//       await navigator.clipboard.writeText(code);

//       setCopiedId(id);

//       setTimeout(() => {
//         setCopiedId((currentId) => (currentId === id ? null : currentId));
//       }, 2000);
//     } catch (error) {
//       console.error("Failed to copy component code:", error);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
//       <HubHeader />

//       <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
//         <FreeComponentsTab
//           onRetry={() => setRetryKey((key) => key + 1)}
//           categories={freeCategories}
//           activeCategory={activeCategory}
//           setActiveCategory={handleCategoryChange}
//           filteredFreeComponents={paginatedComponents}
//           cardTabs={cardTabs}
//           toggleCardTab={toggleCardTab}
//           copiedId={copiedId}
//           handleCopy={handleCopy}
//         />

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
//             <button
//               type="button"
//               onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
//               disabled={currentPage === 1}
//               className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-800 dark:text-slate-300">
//               Previous
//             </button>

//             {Array.from({ length: totalPages }, (_, index) => index + 1).map(
//               (page) => (
//                 <button
//                   key={page}
//                   type="button"
//                   onClick={() => setCurrentPage(page)}
//                   aria-current={currentPage === page ? "page" : undefined}
//                   className={`h-10 min-w-10 rounded-xl px-3 text-sm font-semibold transition ${
//                     currentPage === page
//                       ? "bg-blue-600 text-white"
//                       : "border border-slate-200 text-slate-700 hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:text-slate-300"
//                   }`}>
//                   {page}
//                 </button>
//               ),
//             )}

//             <button
//               type="button"
//               onClick={() =>
//                 setCurrentPage((page) => Math.min(totalPages, page + 1))
//               }
//               disabled={currentPage === totalPages}
//               className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-800 dark:text-slate-300">
//               Next
//             </button>
//           </div>
//         )}

//         {/* Component count */}
//         {filteredComponents.length > 0 && (
//           <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
//             Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1}–
//             {Math.min(currentPage * ITEMS_PER_PAGE, filteredComponents.length)}{" "}
//             of {filteredComponents.length} components
//           </p>
//         )}
//       </section>
//     </main>
//   );
// }

import React, { useEffect, useState } from "react";
import SEO from "../components/common/SEO";

import HubHeader from "../components/pages/components/ComponentsHeader";
import FreeComponentsTab from "../components/pages/components/FreeComponentTab";

import { freeCategories, loadFreeComponents } from "../data/free/freeIndex";

const ITEMS_PER_PAGE = 10;

export default function ComponentsPage() {
  const [activeCategory, setActiveCategory] = useState(freeCategories[0] || "");

  const [components, setComponents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  const [retryKey, setRetryKey] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardTabs, setCardTabs] = useState({});
  const [copiedId, setCopiedId] = useState(null);

  // Load only the selected category.
  useEffect(() => {
    let isActive = true;

    const fetchComponents = async () => {
      setIsLoading(true);
      setLoadError(false);
      setComponents([]);

      try {
        const data = await loadFreeComponents(activeCategory);

        if (isActive) {
          setComponents(data);
        }
      } catch (error) {
        console.error("Failed to load free components:", error);

        if (isActive) {
          setLoadError(true);
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    fetchComponents();

    return () => {
      isActive = false;
    };
  }, [activeCategory, retryKey]);

  // Pagination calculations.
  const totalPages = Math.ceil(components.length / ITEMS_PER_PAGE);

  const paginatedComponents = components.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  // Change category and reset pagination.
  const handleCategoryChange = (category) => {
    if (category === activeCategory) return;

    setActiveCategory(category);
    setCurrentPage(1);
  };

  // Change Preview / Code tab.
  const toggleCardTab = (id, tab) => {
    setCardTabs((prev) => ({
      ...prev,
      [id]: tab,
    }));
  };

  // Copy component code.
  const handleCopy = async (id, code) => {
    try {
      await navigator.clipboard.writeText(code);

      setCopiedId(id);

      setTimeout(() => {
        setCopiedId((currentId) => (currentId === id ? null : currentId));
      }, 2000);
    } catch (error) {
      console.error("Failed to copy component code:", error);
    }
  };

  return (
    <>
      <SEO
        title="Free React UI Components - Buttons, Cards & More | SyncXel"
        description="Explore free, customizable React UI components including buttons, cards, inputs, loaders, toggles and more. Preview, test and copy code directly from SyncXel."
        path="/components"
      />
      
      <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
        <HubHeader />

        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <FreeComponentsTab
            categories={freeCategories}
            activeCategory={activeCategory}
            setActiveCategory={handleCategoryChange}
            filteredFreeComponents={paginatedComponents}
            cardTabs={cardTabs}
            toggleCardTab={toggleCardTab}
            copiedId={copiedId}
            handleCopy={handleCopy}
            isLoading={isLoading}
            loadError={loadError}
            onRetry={() => setRetryKey((key) => key + 1)}
          />

          {/* Pagination */}
          {!isLoading && !loadError && totalPages > 1 && (
            <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                disabled={currentPage === 1}
                className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-800 dark:text-slate-300">
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    aria-current={currentPage === page ? "page" : undefined}
                    className={`h-10 min-w-10 rounded-xl px-3 text-sm font-semibold transition ${
                      currentPage === page
                        ? "bg-blue-600 text-white"
                        : "border border-slate-200 text-slate-700 hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:text-slate-300"
                    }`}>
                    {page}
                  </button>
                ),
              )}

              <button
                type="button"
                onClick={() =>
                  setCurrentPage((page) => Math.min(totalPages, page + 1))
                }
                disabled={currentPage === totalPages}
                className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-800 dark:text-slate-300">
                Next
              </button>
            </div>
          )}

          {/* Component count */}
          {!isLoading && !loadError && components.length > 0 && (
            <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
              Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1}–
              {Math.min(currentPage * ITEMS_PER_PAGE, components.length)} of{" "}
              {components.length} components
            </p>
          )}
        </section>
      </main>
    </>
  );
}
