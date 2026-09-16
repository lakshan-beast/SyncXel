// export const gitData = {
//   title: "Git & GitHub Developer Guide",
//   commits: [
//     {
//       type: "feat",
//       desc: "When adding a new feature to the project",
//       example: 'git commit -m "feat: add dark mode toggle component"',
//     },
//     {
//       type: "fix",
//       desc: "When fixing a bug or resolving an error",
//       example: 'git commit -m "fix: resolve mobile menu display bug"',
//     },
//     {
//       type: "docs",
//       desc: "When updating documentation or the README file",
//       example: 'git commit -m "docs: update installation steps in README"',
//     },
//     {
//       type: "style",
//       desc: "Formatting or styling changes that do not affect code logic",
//       example: 'git commit -m "style: format tailwind padding classes"',
//     },
//     {
//       type: "refactor",
//       desc: "Code restructuring that neither fixes a bug nor adds a feature",
//       example: 'git commit -m "refactor: simplify fetch user logic"',
//     },
//     {
//       type: "chore",
//       desc: "Updating build tasks, package manager configs, or dependencies",
//       example: 'git commit -m "chore: update lucide-react dependencies"',
//     },
//   ],

//   errors: [
//     {
//       error: "src refspec main does not match any",
//       fix: "git add .\ngit commit -m 'initial commit'\ngit push -u origin main",
//     },
//     {
//       error: "fatal: refusing to merge unrelated histories",
//       fix: "git pull origin main --allow-unrelated-histories",
//     },
//   ],
// };

export const gitData = {
  title: "Git & GitHub Developer Guide",
  subtitle:
    "Master clean commit histories, workflows, and common error resolutions.",
  description:
    "Standard conventions and troubleshooting steps for professional team collaboration.",

  workflowOverview: {
    title: "Quick Git Workflow Checklist",
    steps: [
      "1. git checkout -b feature/your-feature-name",
      "2. git add .",
      "3. git commit -m 'feat: add new component'",
      "4. git push origin feature/your-feature-name",
    ],
  },

  commits: [
    {
      type: "feat",
      desc: "When adding a new feature or component to the project",
      example: 'git commit -m "feat: add dark mode toggle component"',
      explanation:
        "Signals to the team and automated tools that a brand-new user-facing capability has been introduced.",
      proTip:
        "Keep feature commits granular. Don't bundle 5 different features into one single commit.",
    },
    {
      type: "fix",
      desc: "When fixing a bug, layout issue, or runtime error",
      example: 'git commit -m "fix: resolve mobile menu display bug"',
      explanation:
        "Triggers patch version bumps in automated semantic versioning workflows.",
      proTip:
        "Reference the issue number if you use GitHub issues (e.g., `fix: resolve login bug (#42)`).",
    },
    {
      type: "docs",
      desc: "When updating documentation, comments, or the README file",
      example: 'git commit -m "docs: update installation steps in README"',
      explanation:
        "Indicates changes that do not affect the actual production code logic or build output.",
    },
    {
      type: "style",
      desc: "Formatting or CSS styling changes that do not change code logic",
      example:
        'git commit -m "style: format tailwind padding and margin classes"',
      explanation:
        "Used for code linting, whitespace adjustments, or CSS tweaks where logic remains untouched.",
    },
    {
      type: "refactor",
      desc: "Code restructuring that neither fixes a bug nor adds a feature",
      example:
        'git commit -m "refactor: simplify user authentication check logic"',
      explanation:
        "Improves code readability, performance, or maintainability under the hood.",
    },
    {
      type: "chore",
      desc: "Updating build tasks, package manager configs, or dependencies",
      example:
        'git commit -m "chore: update lucide-react package dependencies"',
      explanation:
        "Used for routine maintenance tasks that don't alter source code or test files.",
    },
  ],

  errors: [
    {
      error: "src refspec main does not match any",
      fix: `git add .
git commit -m "initial commit"
git push -u origin main`,
      explanation:
        "This happens when you try to push to a branch named `main`, but your local repository hasn't created any commits yet, so the `main` branch technically doesn't exist locally.",
      proTip:
        "Always ensure you have made at least one initial commit before attempting your first push to a remote repository.",
    },
    {
      error: "fatal: refusing to merge unrelated histories",
      fix: "git pull origin main --allow-unrelated-histories",
      explanation:
        "Triggered when you try to merge two projects/repositories that have separate histories (e.g., a README created on GitHub and an existing local project folder).",
      proTip:
        "Use `--allow-unrelated-histories` to force Git to combine both historical timelines safely.",
    },
  ],
};
