import displayStyles from "./Display.module.css";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme/ThemeContext";

import temperature_img from "../../assets/icons/temperature/temperature_48.png";
import humidity_img from "../../assets/icons/humidity/humidity_48.png";

const Display = ({props}) => { 
  const weather_icon = `https://openweathermap.org/img/wn/${props.icon}@2x.png`;
  const {theme, /*isDarkMode, toggleTheme*/} = useContext(ThemeContext);

  return (
    <div className={displayStyles.Display}
      style={{
        color: theme.secondary.foreground,
        backgroundColor: theme.secondary.background
      }}>
      <div className={displayStyles.LocationName}>
        <span>{`${props.name}`}</span>
        {props.state && <span>{`, ${props.state}`}</span>}
        <span>{`, ${props.country}`}</span>
      </div>
      <div className={displayStyles.Data}>
        <div className={displayStyles.DataText}>
          <img 
            src={weather_icon} 
            alt={`weather: ${props.shortDescription}`}
             />
        </div>
        <div className={displayStyles.DataNumber}>
          {`${props.shortDescription},`}
          <br></br>
          {`${props.longDescription}.`}
        </div>
        <div className={displayStyles.DataNumber}>
          {`${props.temperature}`}
          <img 
            src={temperature_img} 
            alt="temperature symbol" />
        </div>
        <div className={displayStyles.DataNumber}>
          {`${props.humidity}`}
          <img src={humidity_img} alt="humidity symbol" />
        </div>
      </div>
    </div>
  );
}

Display.propTypes = {
  displayData: PropTypes.object 
};

export default Display;
