// import React, { useState } from "react";
// import FAQItem from "./FAQItem";

// export default function FAQAccordion({ items, category }) {
//   const [openId, setOpenId] = useState(null);

//   const toggleItem = (id) => {
//     setOpenId((current) => (current === id ? null : id));
//   };

//   return (
//     <div key={category} className="w-full">
//       {items.map((item) => (
//         <FAQItem
//           key={item.id}
//           item={item}
//           isOpen={openId === item.id}
//           onToggle={() => toggleItem(item.id)}
//         />
//       ))}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import FAQItem from "./FAQItem";

export default function FAQAccordion({ category, items }) {
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    setOpenId(null);
  }, [category]);

  const handleToggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  if (!items?.length) {
    return (
      <div className="rounded-2xl border border-white/[0.08] bg-[#101a2c] px-5 py-10 text-center">
        <p className="text-sm text-slate-400">
          No questions available in this category yet.
        </p>
      </div>
    );
  }

  return (
    <div className="border-t border-white/[0.08]">
      {items.map((item) => (
        <FAQItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
}
