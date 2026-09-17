
export const animationData = [
  {
    id: "framer-fade-in",
    title: "1. Framer Motion Fade-In & Slide-Up",
    desc: "Standard entrance animation snippet for components, cards, or hero elements using Framer Motion.",
    code: `import { motion } from "framer-motion";

export const FadeInCard = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);`,
    explanation:
      "Combines an opacity transition from 0 to 1 with a subtle vertical translation offset (`y: 20` to `y: 0`) to give elements a smooth, premium entrance feel.",
    proTip:
      "Add `viewport={{ once: true }}` if you want the animation to trigger only once when the user scrolls down to it.",
  },
  {
    id: "framer-staggered",
    title: "2. Framer Motion Staggered List",
    desc: "Animate list items sequentially one after another with container staggering.",
    code: `import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 }
};

export const StaggeredList = ({ items }) => (
  <motion.ul variants={containerVariants} initial="hidden" animate="visible">
    {items.map((item, index) => (
      <motion.li key={index} variants={itemVariants}>
        {item}
      </motion.li>
    ))}
  </motion.ul>
);`,
    explanation:
      "The parent container controls the sequence timing via `staggerChildren`, instructing child elements with matching variant names to animate with a delayed offset.",
    proTip:
      "Ideal for card grids, table rows, and navigation drop-downs to prevent elements from popping up simultaneously.",
  },
  {
    id: "tailwind-skeleton",
    title: "3. Tailwind Custom Skeleton Shimmer Effect",
    desc: "Add custom CSS keyframes in your Tailwind config or CSS file for loading skeletons.",
    code: `/* tailwind.config.js */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite',
      },
    },
  },
};

/* Component usage */
<div className="relative overflow-hidden bg-slate-800 rounded-xl h-24">
  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
</div>`,
    explanation:
      "Translates an absolute linear gradient across a dark placeholder box repeatedly using custom keyframe translation, mimicking modern skeleton loaders while data is fetching.",
    proTip:
      "Always ensure the outer placeholder container has `overflow-hidden` so the animated shimmer gradient bar doesn't overflow outside the border radius.",
  },
  {
    id: "tailwind-float",
    title: "4. Tailwind Floating Glow Effect",
    desc: "Continuous smooth vertical floating animation for hero graphics and ambient background glow orbs.",
    code: `/* tailwind.config.js */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
      }
    }
  }
};`,
    explanation:
      "Uses custom CSS keyframe translation on the Y-axis with a gentle ease-in-out timing function to simulate floating objects effortlessly without JavaScript overhead.",
    proTip:
      "Combine this animation class with a blurred radial gradient background to create stunning ambient floating glow orbs inside hero sections.",
  },
];
