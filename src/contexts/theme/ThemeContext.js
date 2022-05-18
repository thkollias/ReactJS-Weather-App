import { createContext } from "react";

const themes = {
  light: {
    page: {
      background: "#f2f7f7",
    },
    primary: {
      foreground: "#2b2c2e",
      background: "#8ab6e6",
    },
    secondary: {
      foreground: "#2b2c2e",
      background: "#d5e9ed",
    },
    error: {
      foreground: "#2b2c2e",
      background: "#e1e7f0",
    },
  },
  dark: {
    page: {
      background: "#3e4242",
    },
    primary: {
      foreground: "#2b2c2e",
      background: "#e68a8a",
    },
    secondary: {
      foreground: "#2b2c2e",
      background: "#b88888",
    },
    error: {
      foreground: "#2b2c2e",
      background: "#e1e7f0",
    },
  }
};

const ThemeContext = createContext();

export {themes, ThemeContext};