// import React from "react";
// import ServiceCard from "./ServicesCard";
// import { servicesData } from "../../../data/servicesData";

// export default function ServicesGrid() {
//   return (
//     <div className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-4">
//       {servicesData.map((service, index) => (
//         <ServiceCard
//           key={service.id}
//           service={service}
//           index={index}
//         />
//       ))}
//     </div>
//   );
// }


import React from "react";
import ServiceCard from "./ServicesCard";
import { servicesData } from "../../../data/servicesData";

export default function ServicesGrid() {
  return (
    <div className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-4">
      {servicesData.map((service, index) => (
        <ServiceCard
          key={service.id}
          service={service}
          index={index}
        />
      ))}
    </div>
  );
}
