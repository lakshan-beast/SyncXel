// import { buttonsData } from "./Buttons-ActionsData";
// import { loadersData } from "./Loarders-AnimationsData";
// import { cardsData } from "./Cards&Containers";
// import { badgesData } from "./Badges-PIlls-Indeicators";
// // import { backTopData } from "./TopButtonData";
// import { successData } from "./SuccessData";
// import { checkboxesData } from "./CheckboxesData";
// import { togglesData } from "./TogglesData";
// import { avatarsData } from "./AvatorsData";
// import { inputsData } from "./Inputs&Searchbars";
// import { notificationsData } from "./NavigationsData";

// export const freeComponentsData = [
//   ...buttonsData,
//   ...loadersData,
//   // ...backTopData,
//   ...cardsData,
//   ...badgesData,
//   ...successData,
//   ...togglesData,
//   ...checkboxesData,
//   ...avatarsData,

//   ...inputsData,
//   ...notificationsData,
// ];

const categoryLoaders = {
  "Buttons & Actions": () =>
    import("./Buttons-ActionsData").then((m) => m.buttonsData),

  "Loaders & Animations": () =>
    import("./Loarders-AnimationsData").then((m) => m.loadersData),

  "Cards & Containers": () =>
    import("./Cards&Containers").then((m) => m.cardsData),

  "Badges & Status Indicators": () =>
    import("./Badges-PIlls-Indeicators").then((m) => m.badgesData),

  "Success & Toasts": () => import("./SuccessData").then((m) => m.successData),

  "Toggles & Switches": () =>
    import("./TogglesData").then((m) => m.togglesData),

  "Checkboxes & Radios": () =>
    import("./CheckboxesData").then((m) => m.checkboxesData),

  "Avatars & Profiles": () =>
    import("./AvatorsData").then((m) => m.avatarsData),

  "Inputs & Search Bars": () =>
    import("./Inputs&Searchbars").then((m) => m.inputsData),

  "Modals, Toasts & Notifications": () =>
    import("./NavigationsData").then((m) => m.notificationsData),
};

export const freeCategories = Object.keys(categoryLoaders);

const categoryCache = new Map();

export async function loadFreeComponents(category) {
  const loader = categoryLoaders[category];

  if (!loader) {
    throw new Error(`Unknown free component category: ${category}`);
  }

  if (!categoryCache.has(category)) {
    categoryCache.set(category, loader());
  }

  return categoryCache.get(category);
}
