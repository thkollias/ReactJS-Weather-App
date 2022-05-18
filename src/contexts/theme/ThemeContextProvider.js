import { useState } from "react";
import { themes, ThemeContext } from "./ThemeContext";

export const ThemeContextProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const theme = isDarkMode ? themes.dark : themes.light;
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <ThemeContext.Provider value={{theme, isDarkMode, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}