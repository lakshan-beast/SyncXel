import CyberNeonCheckbox from "../../library/free/checkboxes/CyberNeonCheckbox";
import CyberGlitchCheckbox from "../../library/free/checkboxes/CyberGlitchCheckbox";
import BrutalPopCheckbox from "../../library/free/checkboxes/BrutalPopCheckbox";
import BrutalHardCheckbox from "../../library/free/checkboxes/BrutalHardCheckbox";
import GlassFrostCheckbox from "../../library/free/checkboxes/GlassFrostCheckbox";
import GlassNeonCheckbox from "../../library/free/checkboxes/GlassNeonCheckbox";
import BentoClusterCheckbox from "../../library/free/checkboxes/BentoClusterCheckbox";
import BentoGridCheckbox from "../../library/free/checkboxes/BentoGridCheckbox";
import ClaySoftCheckbox from "../../library/free/checkboxes/ClaySoftCheckbox";
import ClayPillCheckbox from "../../library/free/checkboxes/ClayPillCheckbox";
import RetroTerminalCheckbox from "../../library/free/checkboxes/RetroTerminalCheckbox";
import RetroCrtCheckbox from "../../library/free/checkboxes/RetroCrtCheckbox";

export const checkboxesData = [
  {
    id: "checkbox-cyber-neon",
    title: "Cyberpunk Neon Glow Checkbox",
    category: "Checkboxes & Radios",
    description:
      "Interactive glowing cyan neural checkbox component with spring transition.",
    copiesCount: 290,
    component: <CyberNeonCheckbox />,
    code: `<div className="flex items-center gap-3 w-64 p-3 bg-slate-950 border border-cyan-500/40 rounded-xl font-baloo cursor-pointer"><span className="text-xs text-cyan-300 font-bold">NEURAL_CHECK_L1</span></div>`,
  },
  {
    id: "checkbox-cyber-glitch",
    title: "Cyberpunk Glitch Checkbox",
    category: "Checkboxes & Radios",
    description:
      "High-tech cyberpunk selection box with sharp neon border strokes.",
    copiesCount: 275,
    component: <CyberGlitchCheckbox />,
    code: `<div className="flex items-center gap-3 w-64 p-3 bg-slate-950 border border-cyan-500/50 rounded-xl font-baloo cursor-pointer"><span className="text-xs text-cyan-400 font-bold">SYS_OVERRIDE_BOX</span></div>`,
  },
  {
    id: "checkbox-brutal-pop",
    title: "Neo-Brutalism Pop Checkbox",
    category: "Checkboxes & Radios",
    description:
      "High-contrast geometric brutalist checkbox with sharp directional drop-shadows.",
    copiesCount: 310,
    component: <BrutalPopCheckbox />,
    code: `<div className="flex items-center gap-3 w-64 p-3 bg-yellow-300 border-2 border-slate-950 rounded-xl font-baloo shadow-[3px_3px_0px_0px_#020617]"><span className="text-xs font-black">BRUTAL_SELECT</span></div>`,
  },
  {
    id: "checkbox-brutal-hard",
    title: "Neo-Brutalism Hard Checkbox",
    category: "Checkboxes & Radios",
    description:
      "Vibrant pink brutalist selection box with heavy borders and shadow shift.",
    copiesCount: 260,
    component: <BrutalHardCheckbox />,
    code: `<div className="flex items-center gap-3 w-64 p-3 bg-pink-400 border-2 border-slate-950 rounded-xl font-baloo shadow-[3px_3px_0px_0px_#020617]"><span className="text-xs font-black">HARD_CHECKBOX</span></div>`,
  },
  {
    id: "checkbox-glass-frost",
    title: "Glassmorphism Frost Checkbox",
    category: "Checkboxes & Radios",
    description:
      "Frosted translucent glass selection box built with deep backdrop blur.",
    copiesCount: 345,
    component: <GlassFrostCheckbox />,
    code: `<div className="flex items-center gap-3 w-64 p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl font-baloo text-white"><span className="text-xs font-bold">FROST_CHECK</span></div>`,
  },
  {
    id: "checkbox-glass-neon",
    title: "Glassmorphism Neon Checkbox",
    category: "Checkboxes & Radios",
    description:
      "Translucent glass checkbox highlighted with ambient indigo aura lighting.",
    copiesCount: 290,
    component: <GlassNeonCheckbox />,
    code: `<div className="flex items-center gap-3 w-64 p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl font-baloo text-white"><span className="text-xs font-bold">NEON_GLASS_BOX</span></div>`,
  },
  {
    id: "checkbox-bento-cluster",
    title: "Bento Grid Cluster Checkbox",
    category: "Checkboxes & Radios",
    description:
      "Clean minimalist bento dashboard select container component layout.",
    copiesCount: 320,
    component: <BentoClusterCheckbox />,
    code: `<div className="flex items-center gap-3 w-64 p-3 bg-slate-900 border border-slate-800 rounded-2xl font-baloo text-white"><span className="text-xs font-bold">BENTO_CHECKBOX</span></div>`,
  },
  {
    id: "checkbox-bento-grid",
    title: "Bento Grid Select Checkbox",
    category: "Checkboxes & Radios",
    description:
      "Minimalist bento module checkbox container with emerald accent.",
    copiesCount: 285,
    component: <BentoGridCheckbox />,
    code: `<div className="flex items-center gap-3 w-64 p-3 bg-slate-900 border border-slate-800 rounded-2xl font-baloo text-white"><span className="text-xs font-bold">GRID_SELECT_BOX</span></div>`,
  },
  {
    id: "checkbox-clay-soft",
    title: "Claymorphism Soft Checkbox",
    category: "Checkboxes & Radios",
    description:
      "Soft tactile 3D matte volumetric checkbox with inner depth lighting.",
    copiesCount: 255,
    component: <ClaySoftCheckbox />,
    code: `<div className="flex items-center gap-3 w-64 p-3 bg-slate-900 rounded-2xl shadow-[6px_6px_12px_#020617] border border-slate-800 text-white"><span className="text-xs font-bold">CLAY_CHECKBOX</span></div>`,
  },
  {
    id: "checkbox-clay-pill",
    title: "Claymorphism Volumetric Check",
    category: "Checkboxes & Radios",
    description:
      "Smooth pill-shaped tactile volumetric checkbox component with inner shadows.",
    copiesCount: 270,
    component: <ClayPillCheckbox />,
    code: `<div className="flex items-center gap-3 w-64 p-3 bg-slate-900 rounded-2xl shadow-[6px_6px_12px_#020617] border border-slate-800 text-white"><span className="text-xs font-bold">VOLUMETRIC_CHECK</span></div>`,
  },
  {
    id: "checkbox-retro-terminal",
    title: "Retro 90s Terminal Checkbox",
    category: "Checkboxes & Radios",
    description:
      "Green phosphor monospaced terminal environment selection box console.",
    copiesCount: 295,
    component: <RetroTerminalCheckbox />,
    code: `<div className="flex items-center gap-3 w-64 p-3 bg-black border-2 border-green-500 rounded font-mono text-green-400"><span className="text-xs">SYS_CHECK_BOX</span></div>`,
  },
  {
    id: "checkbox-retro-crt",
    title: "Retro CRT Select Box",
    category: "Checkboxes & Radios",
    description:
      "Nostalgic glowing 90s CRT monitor check option with phosphor shadow.",
    copiesCount: 265,
    component: <RetroCrtCheckbox />,
    code: `<div className="flex items-center gap-3 w-64 p-3 bg-black border-2 border-green-500 rounded font-mono text-green-400"><span className="text-xs">CRT_SELECT_VAL</span></div>`,
  },
];
