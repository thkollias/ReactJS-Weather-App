import footerStyle from "./Footer.module.css";

import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme/ThemeContext";

const Footer = () => {
  const {theme, /*isDarkMode, toggleTheme*/} = useContext(ThemeContext);

  return (
    <footer 
      className={footerStyle.Footer}
      style={{
        color: theme.primary.foreground,
        backgroundColor: theme.primary.background
      }}>
        <p className={footerStyle.Text}>
          Sponsored by noone
        </p>
    </footer>
  );
}

export default Footer;