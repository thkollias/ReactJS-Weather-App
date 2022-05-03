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
        lang: "en",
        units: "metric",
        // mode: format,
        appid: API_KEY,
      }
    })
  );
};

/** Performs Error Handling on 1st promise and returns its data. */
const getSameNameCities = async (cityName) => {
  try {
    const coordinatesData = await locationUrl(cityName);
    console.log(coordinatesData.data);
    console.log(`${coordinatesData.status} - ${coordinatesData.statusText}`);
    return coordinatesData.data;
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
    console.log(forecastData.data);
    console.log(`${forecastData.status} - ${forecastData.statusText}`);
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
    const {main: {temp, humidity}, ["weather"]: [{main, description, icon}]} = response2;

    const displayObj = {
      name: name, 
      state: state, 
      country: country,
      temperature: temp, 
      humidity: humidity, 
      shortDescription: main, 
      longDescription: description, 
      icon: icon,
    };

    setData(displayObj);
    setLoading(false);
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