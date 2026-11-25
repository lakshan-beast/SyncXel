import React, { useState } from "react";
import FAQItem from "./FAQItem";

export default function FAQAccordion({ items, category }) {
  const [openId, setOpenId] = useState(null);

  const toggleItem = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div key={category} className="w-full">
      {items.map((item) => (
        <FAQItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => toggleItem(item.id)}
        />
      ))}
    </div>
  );
}
