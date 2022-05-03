import PropTypes from "prop-types";
import temperature_img from "../../assets/icons/temperature/temperature_48.png";
import humidity_img from "../../assets/icons/humidity/humidity_48.png";

const Display = ({props}) => { 
  const weather_icon = `https://openweathermap.org/img/wn/${props.icon}@2x.png`;
  return (
    <div>
      <div>
        <span>{`${props.name}`}</span>
        {props.state && <span>{`, ${props.state}`}</span>}
        <span>{`, ${props.country}`}</span>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <img src={weather_icon} 
                  alt={`weather: ${props.shortDescription}`} />
              </td>
              <td>
                {`${props.shortDescription}, ${props.longDescription}.`}
              </td>
            </tr>
            <tr>
              <td>
                {`${props.temperature}`}
                <img src={temperature_img} alt="temperature symbol" />
              </td>
              <td>
                {`${props.humidity}`}
                <img src={humidity_img} alt="humidity symbol" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

Display.propTypes = {
  displayData: PropTypes.object 
};

export default Display;
