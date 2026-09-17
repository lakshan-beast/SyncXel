
export const stateData = {
  title: "Modern State Management Patterns",
  subtitle:
    "Choose the right state strategy for local, global, and URL-driven application data.",
  description:
    "Production-ready patterns using Zustand, native React Context, and URL Search Parameters.",
  examples: [
    {
      id: "zustand-store",
      title: "1. Lightweight Store with Zustand",
      desc: "Simple, boilerplate-free global state management without provider wrappers.",
      code: `import { create } from "zustand";

export const useStore = create((set) => ({
  user: null,
  theme: "dark",
  setUser: (user) => set({ user }),
  toggleTheme: () => set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
  logout: () => set({ user: null }),
}));

// Component Usage:
// const { theme, toggleTheme } = useStore();`,
      explanation:
        "Zustand uses a lightweight subscription model without requiring context provider wrappers (`<Provider />`), keeping the component tree clean and avoiding unnecessary full-tree re-renders.",
      proTip:
        "Use Zustand's built-in `persist` middleware with `createJSONStorage` if you want to automatically save global state slices to browser localStorage.",
    },
    {
      id: "context-api",
      title: "2. React Context API Theme Provider",
      desc: "Standard React Context implementation for global UI themes and settings.",
      code: `import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);`,
      explanation:
        "React's native Context API eliminates prop drilling by broadcasting state down the component tree to any consumer hook without external library dependencies.",
      proTip:
        "Split large context stores into smaller distinct contexts (e.g., AuthContext, ThemeContext) to avoid triggering full component tree re-renders whenever a single property changes.",
    },
    {
      id: "url-search-params",
      title: "3. URL Search Params State (Query Strings)",
      desc: "Sync search, filters, or tab selection with the browser URL for shareable links using React Router.",
      code: `import { useSearchParams } from "react-router-dom";

export const SearchFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const handleSearchChange = (e) => {
    const value = e.target.value;
    if (value) {
      setSearchParams({ q: value });
    } else {
      setSearchParams({});
    }
  };

  return <input value={query} onChange={handleSearchChange} placeholder="Filter items..." />;
};`,
      explanation:
        "Leverages browser URL search query strings as application state, ensuring that users can bookmark, share, or refresh pages while maintaining their exact filter, tab, and search selections.",
      proTip:
        "Always pass `{ replace: true }` option in `setSearchParams` for live search inputs to prevent clogging the browser history stack with every single keystroke.",
    },
  ],
};
