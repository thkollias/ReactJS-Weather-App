import styles from "../../styles/Styles.module.css";
// import errorStyles from "./Error.module.css";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme/ThemeContext";

const Error = ({message}) => {
  const {theme, /*isDarkMode, toggleTheme*/} = useContext(ThemeContext);

  return (
    <p className={styles.InnerPageComponent} 
      style={{
        color: theme.error.foreground,
        backgroundColor: theme.error.background
      }}>
        {message}
    </p>
  );
};

Error.propTypes = {
  message: PropTypes.string
};

Error.defaultProps = {
  message: "Something went wrong!"
};

export default Error;