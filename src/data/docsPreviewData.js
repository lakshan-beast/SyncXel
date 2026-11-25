// import {
//   HiOutlineTerminal,
//   HiOutlineCode,
//   HiOutlineSparkles,
//   HiOutlineCloudUpload,
//   HiOutlineGlobeAlt,
//   HiOutlineCube,
//   HiOutlineFilm,
//   HiOutlineLockClosed,
//   HiOutlineDatabase,
//   HiOutlineQuestionMarkCircle,
// } from "react-icons/hi";

// import { IoIosGitBranch } from "react-icons/io";

// export const docsCategories = [
//   {
//     id: "quick-start",
//     label: "Quick Start",
//     icon: HiOutlineTerminal,
//   },
//   {
//     id: "integrations",
//     label: "Form Integrations",
//     icon: HiOutlineCode,
//   },
//   {
//     id: "css-tricks",
//     label: "CSS & Tailwind",
//     icon: HiOutlineSparkles,
//   },
//   {
//     id: "git",
//     label: "Git & GitHub",
//     icon: IoIosGitBranch,
//   },
//   {
//     id: "vercel",
//     label: "Vercel & Hosting",
//     icon: HiOutlineCloudUpload,
//   },
// //   {
// //     id: "seo-dns",
// //     label: "SEO & DNS Setup",
// //     icon: HiOutlineGlobeAlt,
// //   },
//   {
//     id: "hooks",
//     label: "Custom Hooks",
//     icon: HiOutlineCube,
//   },
//   {
//     id: "animations",
//     label: "Animations",
//     icon: HiOutlineFilm,
//   },
//   {
//     id: "auth",
//     label: "Auth & Security",
//     icon: HiOutlineLockClosed,
//   },
//   {
//     id: "state",
//     label: "State Management",
//     icon: HiOutlineDatabase,
//   },
//   {
//     id: "faq",
//     label: "FAQ & Help",
//     icon: HiOutlineQuestionMarkCircle,
//   },
// ];

// export const previewCategories = docsCategories.slice(0, 6);

// export const docsPreviewContent = {
//   "quick-start": {
//     eyebrow: "GETTING STARTED",
//     title: "Start building with SyncXel",
//     description:
//       "Set up your development environment and get your project running in just a few steps.",
//     breadcrumb: ["Documentation", "Quick Start"],
//     sectionTitle: "Create your project",
//     body: "Start by creating a new React project using Vite. This gives you a lightweight and modern development environment.",
//     codeLabel: "Terminal",
//     codeLanguage: "bash",
//     code: `npm create vite@latest my-project

// cd my-project

// npm install

// npm run dev`,
//     nextTitle: "What's next?",
//     nextDescription:
//       "Explore the documentation to learn about integrations, styling, and deployment.",
//   },

//   integrations: {
//     eyebrow: "FORM INTEGRATIONS",
//     title: "Connect your contact forms",
//     description:
//       "Learn how to connect frontend forms with services that handle form submissions.",
//     breadcrumb: ["Documentation", "Form Integrations"],
//     sectionTitle: "Handling form submissions",
//     body: "You can use a form service to receive submissions without building your own backend.",
//     codeLabel: "React",
//     codeLanguage: "jsx",
//     code: `const handleSubmit = async (event) => {
//   event.preventDefault();

//   const formData = new FormData(event.target);

//   const response = await fetch(
//     "YOUR_FORM_ENDPOINT",
//     {
//       method: "POST",
//       body: formData,
//     }
//   );

//   if (response.ok) {
//     console.log("Form submitted!");
//   }
// };`,
//     nextTitle: "Explore integrations",
//     nextDescription:
//       "Learn about form providers, API requests, and handling submission states.",
//   },

//   "css-tricks": {
//     eyebrow: "STYLING GUIDE",
//     title: "Build responsive layouts",
//     description:
//       "Create flexible interfaces using modern CSS and Tailwind utility classes.",
//     breadcrumb: ["Documentation", "CSS & Tailwind"],
//     sectionTitle: "Responsive design",
//     body: "Use responsive utility prefixes to adjust your layout across different screen sizes.",
//     codeLabel: "Tailwind CSS",
//     codeLanguage: "html",
//     code: `<div class="grid grid-cols-1 gap-6
//   sm:grid-cols-2
//   lg:grid-cols-3">

//   <div class="rounded-xl p-6">
//     Content One
//   </div>

//   <div class="rounded-xl p-6">
//     Content Two
//   </div>

// </div>`,
//     nextTitle: "Improve your layouts",
//     nextDescription:
//       "Explore spacing, typography, breakpoints, and reusable styling patterns.",
//   },

//   git: {
//     eyebrow: "VERSION CONTROL",
//     title: "Manage projects with Git",
//     description:
//       "Keep your project organized and track changes throughout development.",
//     breadcrumb: ["Documentation", "Git & GitHub"],
//     sectionTitle: "Your first Git workflow",
//     body: "Initialize Git, stage your changes, and create your first commit.",
//     codeLabel: "Terminal",
//     codeLanguage: "bash",
//     code: `git init

// git add .

// git commit -m "Initial commit"

// git branch -M main

// git remote add origin YOUR_REPOSITORY_URL

// git push -u origin main`,
//     nextTitle: "Work with GitHub",
//     nextDescription:
//       "Learn about repositories, branches, commits, and collaboration.",
//   },

//   vercel: {
//     eyebrow: "DEPLOYMENT",
//     title: "Deploy your project",
//     description:
//       "Learn how to prepare and deploy your frontend project using modern hosting platforms.",
//     breadcrumb: ["Documentation", "Vercel & Hosting"],
//     sectionTitle: "Prepare for deployment",
//     body: "Before deploying, create a production build and make sure your project works correctly.",
//     codeLabel: "Terminal",
//     codeLanguage: "bash",
//     code: `# Install dependencies
// npm install

// # Create production build
// npm run build

// # Preview production build
// npm run preview`,
//     nextTitle: "Go live",
//     nextDescription:
//       "Connect your GitHub repository and configure your deployment settings.",
//   },

// //   "seo-dns": {
// //     eyebrow: "WEBSITE OPTIMIZATION",
// //     title: "Improve website visibility",
// //     description:
// //       "Understand the basics of SEO, metadata, and domain configuration.",
// //     breadcrumb: ["Documentation", "SEO & DNS Setup"],
// //     sectionTitle: "Add essential metadata",
// //     body: "Use descriptive page titles and meta descriptions to help search engines understand your content.",
// //     codeLabel: "HTML",
// //     codeLanguage: "html",
// //     code: `<head>
// //   <title>My Website</title>

// //   <meta
// //     name="description"
// //     content="A short description of my website."
// //   />

// //   <meta
// //     name="viewport"
// //     content="width=device-width, initial-scale=1.0"
// //   />
// // </head>`,
// //     nextTitle: "Configure your domain",
// //     nextDescription:
// //       "Learn about DNS records, domain connections, and website indexing.",
// //   },
// };

import {
  HiOutlineCommandLine,
  HiOutlineArrowsRightLeft,
  HiOutlineCodeBracket,
  HiOutlineCube,
  HiOutlineShieldCheck,
  HiOutlineCloudArrowUp,
} from "react-icons/hi2";

import { quickStartData } from "./docs/quickStartData";
import { integrationsData } from "./docs/integrationsData";
import { gitData } from "./docs/gitData";
import { customHooksData } from "./docs/customHooksData";
import { authData } from "./docs/authData";
import { vercelData } from "./docs/vercelData";

export const docsPreviewData = [
  {
    id: "quick-start",
    title: "Quick Start",
    description: quickStartData.description,
    icon: HiOutlineCommandLine,
    count: `${quickStartData.steps.length} setup steps`,
  },
  {
    id: "integrations",
    title: "Form Integrations",
    description: integrationsData.formspree.description,
    icon: HiOutlineArrowsRightLeft,
    count: `${Object.keys(integrationsData).length} integrations`,
  },
  {
    id: "git",
    title: "Git & GitHub",
    description: gitData.description,
    icon: HiOutlineCodeBracket,
    count: `${gitData.commits.length} commit conventions`,
  },
  {
    id: "hooks",
    title: "Custom Hooks",
    description: customHooksData[0].description,
    icon: HiOutlineCube,
    count: `${customHooksData.length} custom hooks`,
  },
  {
    id: "auth",
    title: "Auth & Security",
    description: authData.description,
    icon: HiOutlineShieldCheck,
    count: `${authData.snippets.length} code examples`,
  },
  {
    id: "vercel",
    title: "Vercel & Hosting",
    description: vercelData.description,
    icon: HiOutlineCloudArrowUp,
    count: `${vercelData.guides.length} hosting guides`,
  },
];
