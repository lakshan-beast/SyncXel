export const customHooksData = [
  {
    name: "useLocalStorage",
    description:
      "Persists state in the browser's localStorage so values (like dark mode or user preferences) remain across page reloads.",
    code: `import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved !== null ? JSON.parse(saved) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage key:", key, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error setting localStorage key:", key, error);
    }
  }, [key, value]);

  return [value, setValue];
}`,
  },
  {
    name: "useOnClickOutside",
    description:
      "Detects clicks outside of a specified DOM element. Ideal for closing dropdown menus, modals, and tooltips.",
    code: `import { useEffect } from "react";

export function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}`,
  },
  {
    name: "useDebounce",
    description:
      "Delays updating a value until a specified time delay has passed. Crucial for live search inputs to prevent spamming API requests.",
    code: `import { useState, useEffect } from "react";

export function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}`,
  },
  {
    name: "useCopyToClipboard",
    description:
      "Provides clean copy-to-clipboard functional logic with temporary confirmation state feedback.",
    code: `import { useState } from "react";

export function useCopyToClipboard(timeout = 2000) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async (text) => {
    if (!navigator?.clipboard) return false;
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), timeout);
      return true;
    } catch (error) {
      console.error("Copy failed", error);
      setIsCopied(false);
      return false;
    }
  };

  return { isCopied, copy };
}`,
  },
];
