import themeButtonStyles from "./ThemeButton.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme/ThemeContext";

const ThemeButton = () => {
  const {/*theme,*/ isDarkMode, toggleTheme} = useContext(ThemeContext);
  
  return (
    <button
      onClick={toggleTheme}
      className={`${isDarkMode ? themeButtonStyles.dark : themeButtonStyles.light} ${themeButtonStyles.button}`} >
        {isDarkMode 
          ? <span>light</span>
          : <span>dark</span> }
    </button>
  );
}

export default ThemeButton;