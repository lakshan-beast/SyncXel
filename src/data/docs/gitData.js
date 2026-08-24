export const gitData = {
  title: "Git & GitHub Developer Guide",
  commits: [
    {
      type: "feat",
      desc: "When adding a new feature to the project",
      example: 'git commit -m "feat: add dark mode toggle component"',
    },
    {
      type: "fix",
      desc: "When fixing a bug or resolving an error",
      example: 'git commit -m "fix: resolve mobile menu display bug"',
    },
    {
      type: "docs",
      desc: "When updating documentation or the README file",
      example: 'git commit -m "docs: update installation steps in README"',
    },
    {
      type: "style",
      desc: "Formatting or styling changes that do not affect code logic",
      example: 'git commit -m "style: format tailwind padding classes"',
    },
    {
      type: "refactor",
      desc: "Code restructuring that neither fixes a bug nor adds a feature",
      example: 'git commit -m "refactor: simplify fetch user logic"',
    },
    {
      type: "chore",
      desc: "Updating build tasks, package manager configs, or dependencies",
      example: 'git commit -m "chore: update lucide-react dependencies"',
    },
  ],
  
  errors: [
    {
      error: "src refspec main does not match any",
      fix: "git add .\ngit commit -m 'initial commit'\ngit push -u origin main",
    },
    {
      error: "fatal: refusing to merge unrelated histories",
      fix: "git pull origin main --allow-unrelated-histories",
    },
  ],
};
