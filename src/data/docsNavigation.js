import {
  HiOutlineTerminal,
  HiOutlineCube,
//   HiOutlineCode,
  HiOutlineSparkles,
  HiOutlineFilm,
  HiOutlineLockClosed,
//   HiOutlineDatabase,
  //   HiOutlineCloudUpload,
  HiOutlineGlobeAlt,
  HiOutlineQuestionMarkCircle,
//   HiOutlineWrenchScrewdriver,
  HiOutlineShieldCheck,
  //   HiOutlineBookOpen,
} from "react-icons/hi";
import { IoIosGitBranch } from "react-icons/io";
import { HiOutlineCloudUpload, HiOutlineCode, HiOutlineDatabase } from "react-icons/hi";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";

export const docsCategories = [
  {
    id: "quick-start",
    label: "Quick Start",
    icon: HiOutlineTerminal,
    description:
      "Everything you need to get started with your SyncXel projects.",
    guides: [
      {
        id: "project-installation",
        title: "Project Installation",
        description: "Install dependencies and run your project locally.",
        level: "Beginner",
      },
      {
        id: "project-structure",
        title: "Understanding Project Structure",
        description: "Learn how your project files and folders are organized.",
        level: "Beginner",
      },
    ],
  },
  {
    id: "products",
    label: "UI Packs & Templates",
    icon: HiOutlineCube,
    description:
      "Installation, customization and usage guides for SyncXel products.",
    guides: [
      {
        id: "ui-pack-installation",
        title: "Installing UI Packs",
        description: "Add SyncXel UI components to your project.",
        level: "Beginner",
      },
      {
        id: "template-setup",
        title: "Full Template Setup",
        description: "Set up and customize your downloaded template.",
        level: "Beginner",
      },
      {
        id: "product-customization",
        title: "Product Customization",
        description: "Customize colors, content, layouts and components.",
        level: "Intermediate",
      },
    ],
  },
  {
    id: "integrations",
    label: "Form Integrations",
    icon: HiOutlineCode,
    description: "Connect forms with email services and external platforms.",
    guides: [
      {
        id: "emailjs-setup",
        title: "EmailJS Integration",
        description: "Connect a frontend form to EmailJS.",
        level: "Intermediate",
      },
      {
        id: "form-validation",
        title: "Form Validation",
        description: "Validate user input before submitting forms.",
        level: "Beginner",
      },
    ],
  },
  {
    id: "css-tricks",
    label: "CSS & Tailwind",
    icon: HiOutlineSparkles,
    description: "Styling techniques, responsive layouts and Tailwind tips.",
    guides: [
      {
        id: "responsive-design",
        title: "Responsive Design",
        description: "Build layouts for mobile, tablet and desktop.",
        level: "Beginner",
      },
      {
        id: "tailwind-customization",
        title: "Tailwind Customization",
        description: "Customize your Tailwind CSS setup.",
        level: "Intermediate",
      },
    ],
  },
  {
    id: "git",
    label: "Git & GitHub",
    icon: IoIosGitBranch,
    description: "Manage source code and collaborate using Git and GitHub.",
    guides: [
      {
        id: "github-repository",
        title: "GitHub Repository Setup",
        description: "Create and manage a GitHub repository.",
        level: "Beginner",
      },
      {
        id: "git-branches",
        title: "Branches & Collaboration",
        description: "Understand branches and collaborative workflows.",
        level: "Intermediate",
      },
    ],
  },
  {
    id: "vercel",
    label: "Vercel & Hosting",
    icon: HiOutlineCloudUpload,
    description: "Deploy projects and configure production settings.",
    guides: [
      {
        id: "spa-404-fix",
        title: "SPA Route Refresh 404 Fix",
        description: "Fix route refresh errors in Vite and React Router.",
        level: "Intermediate",
      },
      {
        id: "env-setup",
        title: "Environment Variables",
        description: "Configure environment variables for deployment.",
        level: "Intermediate",
      },
      {
        id: "build-settings",
        title: "Build & Output Settings",
        description: "Configure production build settings.",
        level: "Beginner",
      },
    ],
  },
  {
    id: "seo-dns",
    label: "SEO & DNS Setup",
    icon: HiOutlineGlobeAlt,
    description: "Configure search visibility, domains and DNS records.",
    guides: [
      {
        id: "seo-basics",
        title: "SEO Basics",
        description: "Set up essential metadata and search engine information.",
        level: "Beginner",
      },
      {
        id: "custom-domain",
        title: "Custom Domain Setup",
        description: "Connect a custom domain to your deployed website.",
        level: "Intermediate",
      },
    ],
  },
  {
    id: "hooks",
    label: "Custom Hooks",
    icon: HiOutlineCube,
    description: "Create reusable React hooks for common application tasks.",
    guides: [
      {
        id: "custom-hook-basics",
        title: "Custom Hook Fundamentals",
        description: "Understand and create reusable custom hooks.",
        level: "Intermediate",
      },
    ],
  },
  {
    id: "animations",
    label: "Animations",
    icon: HiOutlineFilm,
    description:
      "Create smooth interactions and animations for your interfaces.",
    guides: [
      {
        id: "motion-basics",
        title: "Framer Motion Basics",
        description: "Add animations to React components.",
        level: "Beginner",
      },
      {
        id: "reduced-motion",
        title: "Reduced Motion Support",
        description: "Respect user motion preferences.",
        level: "Intermediate",
      },
    ],
  },
  {
    id: "auth",
    label: "Auth & Security",
    icon: HiOutlineLockClosed,
    description: "Authentication concepts and frontend security practices.",
    guides: [
      {
        id: "auth-basics",
        title: "Authentication Basics",
        description: "Understand common authentication workflows.",
        level: "Beginner",
      },
      {
        id: "frontend-security",
        title: "Frontend Security Basics",
        description: "Learn important frontend security considerations.",
        level: "Intermediate",
      },
    ],
  },
  {
    id: "state",
    label: "State Management",
    icon: HiOutlineDatabase,
    description: "Manage and share application state in React.",
    guides: [
      {
        id: "react-state",
        title: "React State Fundamentals",
        description: "Understand component state and state updates.",
        level: "Beginner",
      },
      {
        id: "shared-state",
        title: "Shared State Patterns",
        description: "Organize state shared across components.",
        level: "Intermediate",
      },
    ],
  },
  {
    id: "backend",
    label: "Backend & Database",
    icon: HiOutlineDatabase,
    description:
      "Connect frontend projects with backend services and databases.",
    guides: [
      {
        id: "supabase-setup",
        title: "Supabase Setup",
        description: "Connect a React application to Supabase.",
        level: "Intermediate",
      },
      {
        id: "database-basics",
        title: "Database Configuration",
        description: "Understand basic database configuration.",
        level: "Intermediate",
      },
    ],
  },
  {
    id: "advanced",
    label: "Advanced Development",
    icon: HiOutlineShieldCheck,
    description:
      "Improve performance, accessibility and development practices.",
    guides: [
      {
        id: "performance-optimization",
        title: "Performance Optimization",
        description: "Improve frontend application performance.",
        level: "Advanced",
      },
      {
        id: "accessibility-basics",
        title: "Accessibility Basics",
        description: "Make interfaces more accessible.",
        level: "Intermediate",
      },
    ],
  },
  {
    id: "troubleshooting",
    label: "Troubleshooting & Error Solutions",
    icon: HiOutlineWrenchScrewdriver,
    description: "Find solutions to common development and deployment errors.",
    guides: [
      {
        id: "npm-errors",
        title: "Common npm Errors",
        description: "Understand and resolve common npm issues.",
        level: "Beginner",
      },
      {
        id: "build-errors",
        title: "Build Failed Errors",
        description: "Identify and troubleshoot production build errors.",
        level: "Intermediate",
      },
      {
        id: "react-errors",
        title: "Common React Errors",
        description: "Troubleshoot common React application problems.",
        level: "Intermediate",
      },
    ],
  },
  {
    id: "faq",
    label: "FAQ & Help",
    icon: HiOutlineQuestionMarkCircle,
    description: "Answers to common questions and ways to get support.",
    guides: [
      {
        id: "general-faq",
        title: "General Questions",
        description: "Find answers to common SyncXel questions.",
        level: "Beginner",
      },
      {
        id: "contact-support",
        title: "Contact Support",
        description: "Learn how to get help with your product.",
        level: "Beginner",
      },
    ],
  },
];

export const docsPopularGuides = [
  {
    categoryId: "quick-start",
    guideId: "project-installation",
  },
  {
    categoryId: "vercel",
    guideId: "spa-404-fix",
  },
  {
    categoryId: "products",
    guideId: "ui-pack-installation",
  },
  {
    categoryId: "integrations",
    guideId: "emailjs-setup",
  },
];
