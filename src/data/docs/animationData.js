export const animationData = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
];
