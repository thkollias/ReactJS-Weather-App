import headerStyles from "./Header.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme/ThemeContext";

const Header = ({children}) => {
  const {theme, /*isDarkMode, toggleTheme*/} = useContext(ThemeContext);

  return (
    <header 
      className={headerStyles.Header}
      style={{
        color: theme.primary.foreground,
        backgroundColor: theme.primary.background,
        textAlign: "center",
      }}>
        <p className={headerStyles.Text}>Current Weather App</p>
        <div className={headerStyles.Button}>
          {children}
        </div>
    </header>
  );
}

export default Header;