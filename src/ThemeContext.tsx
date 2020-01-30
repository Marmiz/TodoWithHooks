import React, { useState } from "react";
/**
 * Define a mutable Context that uses a Provider Wrapper
 */
type Theme = "dark" | "light";
type ThemeContext = { theme: Theme; toggleTheme: () => void };
type ThemeObject = {
    background: string,
    cardBg: string,
    color: string
};
type Themes = {
    [key: string]: ThemeObject
};

const themes: Themes = {
  light: {
    background: "var(--lightBg)",
    cardBg: "var(--egg)",
    color: "var(--darkGreen)",
  },
  dark: {
    background: "var(--darkBg)",
    cardBg: "var(--egg)",
    color: "var(--green)"
  }
};

export const getTheme = (theme: string): ThemeObject => themes[theme];
// type assertion on empty object
export const ThemeContext = React.createContext<ThemeContext>(
  {} as ThemeContext
);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const bg = themes[theme].background;

  document.body.style.backgroundColor = bg;
  document.body.style.color = themes[theme].color
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
