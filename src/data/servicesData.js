import {
  HiOutlineBuildingOffice2,
  HiOutlineMegaphone,
  HiOutlineUserCircle,
  HiOutlineCodeBracket,
  HiOutlineArrowUpRight,
} from "react-icons/hi2";

export const servicesData = [
  {
    id: "business-websites",
    number: "01",
    title: "Business Website Development",
    description:
      "Professional websites that help businesses establish a strong online presence, showcase their services, and connect with customers.",
    icon: HiOutlineBuildingOffice2,
    tags: ["Business Websites", "Multi-page Websites"],
    featured: true,
  },
  {
    id: "landing-pages",
    number: "02",
    title: "Landing Pages & Redesign",
    description:
      "Focused landing pages for products and campaigns, or a fresh redesign to improve your existing website's appearance and usability.",
    icon: HiOutlineMegaphone,
    tags: ["Landing Pages", "Website Redesign"],
  },
  {
    id: "portfolio-websites",
    number: "03",
    title: "Portfolio & Personal Websites",
    description:
      "Modern personal websites that present your work, skills, and achievements with a professional digital identity.",
    icon: HiOutlineUserCircle,
    tags: ["Personal Branding", "Portfolios"],
  },
  {
    id: "custom-frontend",
    number: "04",
    title: "Custom Frontend Development",
    description:
      "Custom React interfaces, interactive dashboards, and responsive frontend experiences designed around your project requirements.",
    icon: HiOutlineCodeBracket,
    tags: ["React Development", "Custom UI"],
  },
];

export const servicesMeta = {
  label: "WHAT WE BUILD",
  title: "Digital solutions built around your goals.",
  description:
    "From business websites to custom frontend experiences, we create thoughtful digital solutions tailored to your needs.",
  buttonText: "Start a Project",
  buttonLink: "#contact-section",
};
