
export const customHooksData = [
  {
    id: "use-local-storage",
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
    explanation:
      "Uses lazy initial state execution inside `useState(() => ...)` so that localStorage is read only once during initial mount, rather than parsing data on every single re-render.",
    proTip:
      "Always wrap localStorage reads and writes inside `try...catch` blocks to prevent catastrophic app crashes if user browser cookies or storage are restricted or corrupted.",
  },
  {
    id: "use-on-click-outside",
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
    explanation:
      "Listens to global `mousedown` and `touchstart` events, checking if the clicked target element lies outside the referenced DOM node using `ref.current.contains()`.",
    proTip:
      "Always return a cleanup function from your `useEffect` to remove event listeners when the component unmounts, preventing memory leaks.",
  },
  {
    id: "use-debounce",
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
    explanation:
      "Clears the active timer every time the user types a new character, ensuring the final value updates only after typing stops for the specified duration.",
    proTip:
      "Combine this hook with a `useEffect` on your search component to trigger database queries only when the debounced value changes.",
  },
  {
    id: "use-copy-to-clipboard",
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
    explanation:
      "Leverages the modern asynchronous Clipboard API (`navigator.clipboard.writeText`) combined with an automated state timeout to revert confirmation back to normal.",
    proTip:
      "The Clipboard API requires a secure context (`HTTPS` or `localhost`) to work properly in modern web browsers.",
  },
];
