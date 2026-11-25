import {
  HiOutlineMagnifyingGlass,
  HiOutlinePencilSquare,
  HiOutlineCodeBracket,
  HiOutlineBeaker,
  HiOutlineSparkles,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

export const workflowSteps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "We understand the goals, requirements, and direction before moving into development.",
    details: [
      "Understand project goals",
      "Identify target audience",
      "Define scope and features",
    ],
    icon: HiOutlineMagnifyingGlass,
    audience: ["Business Projects", "Digital Products"],
  },
  {
    number: "02",
    title: "Design & Structure",
    description:
      "We shape the visual direction and plan a clear, user-friendly structure for the experience.",
    details: [
      "Plan page structure",
      "Define UI/UX direction",
      "Prepare component architecture",
    ],
    icon: HiOutlinePencilSquare,
    audience: ["Business Projects", "Digital Products"],
  },
  {
    number: "03",
    title: "Development & Creation",
    description:
      "We turn the approved direction into responsive interfaces, reusable components, and complete templates.",
    details: [
      "Build responsive layouts",
      "Develop reusable components",
      "Create interactive experiences",
    ],
    icon: HiOutlineCodeBracket,
    audience: ["Business Projects", "Digital Products"],
  },
  {
    number: "04",
    title: "Testing & Refinement",
    description:
      "We review the experience across devices, fix issues, and refine the details before delivery.",
    details: [
      "Test across screen sizes",
      "Check interactions and navigation",
      "Fix bugs and UI inconsistencies",
    ],
    icon: HiOutlineBeaker,
    audience: ["Business Projects", "Digital Products"],
  },
  {
    number: "05",
    title: "Optimization & Preparation",
    description:
      "We prepare the final work with attention to performance, accessibility, and maintainable code.",
    details: [
      "Optimize assets and performance",
      "Review accessibility basics",
      "Prepare files and documentation",
    ],
    icon: HiOutlineSparkles,
    audience: ["Business Projects", "Digital Products"],
  },
  {
    number: "06",
    title: "Launch & Delivery",
    description:
      "We deliver the finished project or product with the resources needed to get started.",
    details: [
      "Deploy or package the final work",
      "Provide setup instructions",
      "Share delivery and support details",
    ],
    icon: HiOutlineRocketLaunch,
    audience: ["Business Projects", "Digital Products"],
  },
];
