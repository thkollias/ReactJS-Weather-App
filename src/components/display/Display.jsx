import PropTypes from "prop-types";
import temperature_img from "../../assets/icons/temperature/temperature_48.png";
import humidity_img from "../../assets/icons/humidity/humidity_48.png";

const Display = ({props}) => { 
  // for (const prop in props) {
  //   console.log(`${prop} : ${props[prop]}`);
  // }

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
                <img src={weather_icon} />
              </td>
              <td>
                {`${props.shortDescription}, ${props.longDescription}.`}
              </td>
            </tr>
            <tr>
              <td>
                <img src={temperature_img} />
                {`${props.temperature} C`}
              </td>
              <td>
                <img src={humidity_img} />
                {`${props.humidity} %`}
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
