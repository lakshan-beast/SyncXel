import FooterPrimary from "../../library/free/footer/dark-agency-cta-footer";

export const footersData = [
  {
    id: "footer-primary",
    title: "Interactive Primary Button",
    category: "Footer",
    description:
      "Clean Tailwind button with smooth hover animation and copy support.",
    copiesCount: 342,
    component: <FooterPrimary />, // 👈 Preview එකට පෙන්වීමට සැබෑ React Component එක
    code: `<button className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/20 cursor-pointer">\n  Click Me \n</button>`, // 👈 Code tab එකට පෙන්වීමට string එක
  },
];
