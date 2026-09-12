"use client";

import { createContext, useContext, useMemo } from "react";

const ThemeContext = createContext<{ toggleTheme: () => void }>({
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

/*
 * The current theme lives in one place only: the `dark` class on <html>, which
 * the inline script in the root layout applies before first paint. Keeping it
 * out of React state means no mount-time setState, no flash of the wrong
 * theme, and nothing for the server and client to disagree about during
 * hydration. Components that need to look different per theme do so in CSS.
 */
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const value = useMemo(
    () => ({
      toggleTheme() {
        const isDark = document.documentElement.classList.toggle("dark");
        try {
          localStorage.setItem("theme", isDark ? "dark" : "light");
        } catch {
          // Private browsing or blocked storage: the toggle still works for
          // this page view, it just won't be remembered.
        }
      },
    }),
    [],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
