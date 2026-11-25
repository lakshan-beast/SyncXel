import {
  HiOutlineEye,
  HiOutlineDevicePhoneMobile,
  HiOutlineCodeBracket,
  HiOutlineBookOpen,
  HiOutlineAdjustmentsHorizontal,
  HiOutlineArrowPath,
} from "react-icons/hi2";

export const featuresData = [
  {
    id: "live-previews",
    number: "01",
    title: "Live Previews",
    description:
      "Explore components and templates before choosing them. Experience the design, interactions, and animations in a real preview.",
    icon: HiOutlineEye,
    visual: "preview",
    label: "INTERACTIVE EXPERIENCE",
    size: "lg:col-span-7",
  },
  {
    id: "responsive",
    number: "02",
    title: "Responsive Experiences",
    description:
      "Interfaces designed to adapt across mobile, tablet, and desktop screens for a consistent experience.",
    icon: HiOutlineDevicePhoneMobile,
    visual: "responsive",
    label: "DESIGNED FOR EVERY SCREEN",
    size: "lg:col-span-5",
  },
  {
    id: "reusable-code",
    number: "03",
    title: "Reusable Code",
    description:
      "Build faster with reusable components and organized frontend code that is easier to understand and customize.",
    icon: HiOutlineCodeBracket,
    visual: "code",
    label: "DEVELOPER FRIENDLY",
    size: "lg:col-span-4",
  },
  {
    id: "documentation",
    number: "04",
    title: "Practical Documentation",
    description:
      "Follow clear setup and customization guides to help you work with your projects confidently.",
    icon: HiOutlineBookOpen,
    visual: "docs",
    label: "CLEAR GUIDANCE",
    size: "lg:col-span-4",
  },
  {
    id: "customization",
    number: "05",
    title: "Flexible Customization",
    description:
      "Adapt layouts, styles, and components to match your ideas, brand identity, and project requirements.",
    icon: HiOutlineAdjustmentsHorizontal,
    visual: "custom",
    label: "MAKE IT YOURS",
    size: "lg:col-span-4",
  },
  {
    id: "updates-support",
    number: "06",
    title: "Updates & Support",
    description:
      "Get access to planned product updates, helpful resources, and community support for eligible paid products.",
    icon: HiOutlineArrowPath,
    visual: "updates",
    label: "ONGOING IMPROVEMENT",
    size: "lg:col-span-12",
  },
];
