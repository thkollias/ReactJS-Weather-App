import styles from "../../styles/Styles.module.css";
// import loadingStyles from "./Loading.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme/ThemeContext";

const Loading = () => {
  const {theme, /*isDarkMode, toggleTheme*/} = useContext(ThemeContext);

  return (
    <p 
      className={styles.InnerPageComponent}
      style={{
        color: theme.primary.foreground,
        backgroundColor: theme.primary.background
      }}>
        Loading...
    </p>    
  );
}

export default Loading;