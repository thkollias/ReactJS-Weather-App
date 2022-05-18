import { useState } from "react";
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

const useFetchedData = () => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [data, setData] = useState(null);

  /** Performs Error Handling on 1st promise and returns its data. */
  const getSameNameCities = async (cityName) => {
    try {
      const coordinatesData = await locationUrl(cityName);
      if (coordinatesData.data.length === 0) {
        setError("Location does not exist.");
      }
      console.log(coordinatesData.data);
      console.log(`${coordinatesData.status} - ${coordinatesData.statusText}`);
      return coordinatesData.data;
    }
    catch (error) {
      if (error.response) { // axios - no 2xx status code
        setError("Unsuccessful request.");
        console.log(error.response.data);
        console.log(`${error.response.status} - ${error.response.statusText}`);
      }
      else if (error.request) { // axios - 2xx but no response received
        setError("No response received.");
        console.log(error.request);
        console.log(`${error.response.status} - ${error.response.statusText}`);
      } 
      else {
        setError("Unknown Error");
        console.log("Unknown Error.", error.message);
      }
      console.log(error.config);
    }
    finally {
      setLoading(false);
      console.log("getSameNameCities() request sent.");
    }
  }

  /** Performs Error Handling on 2nd promise and returns its data. */
  const getForecastData = async (latitude, longitude) => {
    try {
      const forecastData = await forecastDataUrl(latitude, longitude);
      if (forecastData.data.length === 0) {
        setError("Something went wrong.");
      }
      console.log(forecastData.data);
      console.log(`${forecastData.status} - ${forecastData.statusText}`);
      return forecastData.data;
    } 
    catch (error) {
      if (error.response) { // axios - no 2xx status code
        setError("Unsuccessful request.");
        console.log(error.response.data);
        console.log(`${error.response.status} - ${error.response.statusText}`);
        // console.log(error.response.headers);
      }
      else if (error.request) { // axios - 2xx but no response received
        setError("No response received.");
        console.log(error.request);
      } 
      else {
        setError("Unknown Error");
        console.log('Unknown Error.', error.message);
      }
      console.log(error.config);
    }
    finally {
      setLoading(false);
      console.log("getForecastData() request sent.");
    }
  }

  const submitRequest = async (cityName) => {
    setLoading(true);
    setError(false);

    const response1 = await getSameNameCities(cityName);
    const response2 = await getForecastData(response1[0].lat, response1[0].lon);

    const {name, state, country} = response1[0];
    const {main: {temp, humidity}, weather: [{main, description, icon}]} = response2;

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