import { useState } from "react"
import axios from 'axios';
import API_KEY from '../ApiKey';

/** Axios Instance containing the base url */
const baseUrlInstance = axios.create({
  baseURL: "https://api.openweathermap.org",
  method: "get",
  responseType: "json",
  timeout: 4000,
});

/** Uses OpenWeatherMap - Geocoding API, takes a location name 
 * and returns a list < 5 of same named locations. */
const locationUrl = (locationName) => {
  return (
    baseUrlInstance({
      url: "/geo/1.0/direct",
      params: {
        q: locationName,
        limit: 1, // return one result only
        appid: API_KEY,
      },
    }
  )
)};

/** Uses OpenWeatherMap - CurrentWeatherData API, takes 
 * coordinates and preferences and returns weather data. */
const forecastDataUrl = (latitude, longitude) => {
  return (
    baseUrlInstance({
      url: "/data/2.5/weather",
      params: {
        lat: latitude,
        lon: longitude,
        // lang: locale,
        // units: temperatureUnitsSi,
        // mode: format,
        appid: API_KEY,
      }
    })
  );
};

/** Performs Error Handling on 1st promise and returns its data. */
const getSameNameCities = async (cityName) => {
  try {
    const response = await locationUrl(cityName);
    console.log(response.data);
    console.log(`${response.status} - ${response.statusText}`);
    return response.data;
  }
  catch (error) {
    if (error.response) { // no 2xx status code
      console.log(error.response.data);
      console.log(`${error.response.status} - ${error.response.statusText}`);
      console.log(error.response.headers);
    }
    else if (error.request) { // 2xx but no response received
      console.log(error.request);
    } 
    else {
      console.log('Unknown Error.', error.message);
    }
    console.log(error.config);
  }
  finally {
    console.log("getSameNameCities() request sent.");
  }
}

/** Performs Error Handling on 2nd promise and returns its data. */
const getForecastData = async (latitude, longitude) => {
  try {
    const forecastData = await forecastDataUrl(latitude, longitude);
    return forecastData.data;
  } 
  catch (error) {
    if (error.response) { // no 2xx status code
      console.log(error.response.data);
      console.log(`${error.response.status} - ${error.response.statusText}`);
      console.log(error.response.headers);
    }
    else if (error.request) { // 2xx but no response received
      console.log(error.request);
    } 
    else {
      console.log('Unknown Error.', error.message);
    }
    console.log(error.config);
  }
  finally {
    console.log("getForecastData() request sent.");
  }
}

const useFetchedData = () => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [data, setData] = useState(null);

  const submitRequest = async (cityName) => {
    setLoading(true);
    setError(false);

    const response1 = await getSameNameCities(cityName);
    if (!response1 || response1.length < 1) {
      setError("Location doesn't exist.");
      setLoading(false);
      return;
    }

    const response2 = await getForecastData(response1[0].lat, response1[0].lon);

    const {name, state, country} = response1[0];
    const {main, description, icon} = response2["weather"][0];
    const {humidity} = response2["main"];
    const displayObj = {
      name, state, country, main, description, icon, humidity
    }

    setData(displayObj);
  }

  return (
    {
      isLoading, 
      isError, 
      data,
      submitRequest,
    }
  );
};

export default useFetchedData;