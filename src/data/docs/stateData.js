export const stateData = {
  title: "Modern State Management Patterns",
  examples: [
    {
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
    },
    {
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
    },
    {
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
    },
  ],
};
